var fs	= require('fs')
  , sys	= require('sys');

var Configure = function (file) {
	
	var self = this;
	var config = {};
	var oldConfig = {};
	
	this.read = function() {
		fs.readFile(file, function (err, data) {
			oldConfig = config;
			config = require('vm').runInThisContext('config = ' + data, file);
			self.emit('set', config,oldConfig);
		});
	}
	
	this.read();
	
	fs.watchFile(file, function (curr, prev) {
		if (curr.mtime.toString() != prev.mtime.toString()) { self.read() }
	});
	
}

sys.inherits(Configure, process.EventEmitter);
exports.Configure = Configure;