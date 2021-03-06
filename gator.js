var thrift	= require('thrift')
  , http	= require('http')
  , dgram	= require('dgram')
  , sys		= require('sys')
  , Hbase	= require('./gen-nodejs/Hbase')
  , ttypes	= require('./gen-nodejs/Hbase_types')
  , conf	= require('./configure')

var counters = {};
counters.total = 0;
var flusher = null, alligator = null, cocodrie = null;

config = new conf.Configure(process.argv[2]);
config.on('set', function (config,oldConfig) {
	
	if(config.backend) {
		var connection	= thrift.createConnection(config.hbaseHost, config.hbasePort);
		var client		= thrift.createClient(Hbase, connection);
		var categoryNum = Object.keys(config.categories).length;
		
		for (var i in config.categories) {
			var columnFamilies = [];
			columnFamilies.push(new ttypes.ColumnDescriptor({name:'total'}));
			var category = config.categories[i];
			counters[category.table] = {};
			
			for (var j=0;j<config.intervals.length;j++) {
				columnFamilies.push(new ttypes.ColumnDescriptor({name:config.intervals[j].toString()}));
				counters[category.table][config.intervals[j].toString()] = {};
			}
			
			if(category.intervals) {
				for (var j=0;j<category.intervals.length;j++) {
					columnFamilies.push(new ttypes.ColumnDescriptor({name:category.intervals[j].toString()}));
					counters[category.table][category.intervals[j].toString()] = {};
				}
			}
			
			client.createTable(category.table, columnFamilies, function (err,data) {
				if (data) sys.log(data);
				if (err) sys.log(err);
				if (--categoryNum == 0) connection.end();
			});
		}
		connection.on('error', function (err) { sys.error(err) });
		
		if (config.alligatorPort != oldConfig.alligatorPort && alligator !== null) {
			alligator.close();
			alligator = null;
		} 
		if (alligator === null) {
			alligator = dgram.createSocket('udp4', function (msg) {	
				var hit = JSON.parse(msg);	
				var category = config.categories[hit.category];
				if (!category) return;

				var table = category.table;
				var keys = hit.keys.slice(0);
				while (keys.length) {
					for (var interval in counters[table]) {
						
						var ts = Math.floor(hit.timestamp/interval) * interval;
						if(typeof counters[table][interval][ts] == 'undefined')
							counters[table][interval][ts] = {}
				
						var hbaseKey = keys.join('+');
						if(typeof counters[table][interval][ts][hbaseKey] == 'undefined') {
							counters.total++;
							counters[table][interval][ts][hbaseKey] = 0;
						}
						counters[table][interval][ts][hbaseKey] += hit.value;	
					}
					keys.pop();
				}
			});
			alligator.bind(config.alligatorPort);
		}

		if (flusher === null || config.flushInt != oldConfig.flushInt) {
			clearInterval(flusher);
			flush();
			flusher = setInterval(flush, config.flushInt);
		}
	} else if (oldConfig.backend) {
		clearInterval(flusher);
		flush();
		alligator.close();
		alligator = null;
	}
	
	if (config.frontend) {
		if (config.cocodriePort != oldConfig.cocodriePort && cocodrie !== null) {
			cocodrie.close();
			cocodrie = null;
		} 
		if (cocodrie === null) {
			cocodrie = http.createServer(function(request, response) {
				response.writeHead(200, {'Content-Type': 'text/plain'});
				var from = Date.parse('-1 day')/1000;
				var to = (new Date()).getTime() / 1000;
				var target;
			})
			cocodrie.listen(config.cocodriePort);
		}
	} else if (oldConfig.frontend) {
		cocodrie.close();
		cocodrie = null;
	}
});

var flush = function() {
	if (!counters.total) return;
	var flushers = clone(counters);
	var counterNum = flushers.total;
	for (var table in counters) for (var interval in counters[table]) counters[table][interval] = {};
	counters.total = 0;

	var connection	= thrift.createConnection(config.hbaseHost, config.hbasePort);
	var client		= thrift.createClient(Hbase, connection);
	
	for (var table in flushers) {
    	for (var interval in flushers[table]) {
			for (var ts in flushers[table][interval]) {
				for (var key in flushers[table][interval][ts]) {
					counterNum++;
					column = interval + ':' + ts;
					client.atomicIncrement(table,key,column,flushers[table][interval][ts][key],function call(err,data) {
						if (data) sys.log(data);
						if (err) sys.log(err);
						if (--counterNum == 0) connection.end();
					});
				}
			}
    	}
	}
	connection.on('error', function (err) { sys.error(err) });
};

var clone = function(oldObj) {
	var newObj = (oldObj instanceof Array) ? [] : {};
	for (i in oldObj) {
		if (i == 'clone') continue;
		if (oldObj[i] && typeof oldObj[i] == "object")
			newObj[i] = clone(oldObj[i]);
		else 
			newObj[i] = oldObj[i]
  	} 
	return newObj;
};