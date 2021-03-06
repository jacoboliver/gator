//
// Autogenerated by Thrift
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var Thrift = require('thrift').Thrift;
var ttypes = module.exports = {};
var TCell = module.exports.TCell = function(args) {
  this.value = null;
  this.timestamp = null;
  if (args) {
    if (!args.value) {
      this.value = args.value;
    }
    if (!args.timestamp) {
      this.timestamp = args.timestamp;
    }
  }
};
TCell.prototype = {};
TCell.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.value = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I64) {
        this.timestamp = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

TCell.prototype.write = function(output) {
  output.writeStructBegin('TCell');
  if (this.value) {
    output.writeFieldBegin('value', Thrift.Type.STRING, 1);
    output.writeString(this.value);
    output.writeFieldEnd();
  }
  if (this.timestamp) {
    output.writeFieldBegin('timestamp', Thrift.Type.I64, 2);
    output.writeI64(this.timestamp);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ColumnDescriptor = module.exports.ColumnDescriptor = function(args) {
  this.name = null;
  this.maxVersions = 3;
  this.compression = 'NONE';
  this.inMemory = false;
  this.bloomFilterType = 'NONE';
  this.bloomFilterVectorSize = 0;
  this.bloomFilterNbHashes = 0;
  this.blockCacheEnabled = false;
  this.timeToLive = -1;
  if (args) {
    if (args.name) {
      this.name = args.name;
    }
    if (args.maxVersions) {
      this.maxVersions = args.maxVersions;
    }
    if (args.compression) {
      this.compression = args.compression;
    }
    if (args.inMemory) {
      this.inMemory = args.inMemory;
    }
    if (args.bloomFilterType) {
      this.bloomFilterType = args.bloomFilterType;
    }
    if (args.bloomFilterVectorSize) {
      this.bloomFilterVectorSize = args.bloomFilterVectorSize;
    }
    if (args.bloomFilterNbHashes) {
      this.bloomFilterNbHashes = args.bloomFilterNbHashes;
    }
    if (args.blockCacheEnabled) {
      this.blockCacheEnabled = args.blockCacheEnabled;
    }
    if (args.timeToLive) {
      this.timeToLive = args.timeToLive;
    }
  }
};
ColumnDescriptor.prototype = {};
ColumnDescriptor.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.name = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.maxVersions = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.compression = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.BOOL) {
        this.inMemory = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.bloomFilterType = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.I32) {
        this.bloomFilterVectorSize = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.I32) {
        this.bloomFilterNbHashes = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 8:
      if (ftype == Thrift.Type.BOOL) {
        this.blockCacheEnabled = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 9:
      if (ftype == Thrift.Type.I32) {
        this.timeToLive = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ColumnDescriptor.prototype.write = function(output) {
  output.writeStructBegin('ColumnDescriptor');
  if (this.name) {
    output.writeFieldBegin('name', Thrift.Type.STRING, 1);
    output.writeString(this.name);
    output.writeFieldEnd();
  }
  if (this.maxVersions) {
    output.writeFieldBegin('maxVersions', Thrift.Type.I32, 2);
    output.writeI32(this.maxVersions);
    output.writeFieldEnd();
  }
  if (this.compression) {
    output.writeFieldBegin('compression', Thrift.Type.STRING, 3);
    output.writeString(this.compression);
    output.writeFieldEnd();
  }
  if (this.inMemory) {
    output.writeFieldBegin('inMemory', Thrift.Type.BOOL, 4);
    output.writeBool(this.inMemory);
    output.writeFieldEnd();
  }
  if (this.bloomFilterType) {
    output.writeFieldBegin('bloomFilterType', Thrift.Type.STRING, 5);
    output.writeString(this.bloomFilterType);
    output.writeFieldEnd();
  }
  if (this.bloomFilterVectorSize) {
    output.writeFieldBegin('bloomFilterVectorSize', Thrift.Type.I32, 6);
    output.writeI32(this.bloomFilterVectorSize);
    output.writeFieldEnd();
  }
  if (this.bloomFilterNbHashes) {
    output.writeFieldBegin('bloomFilterNbHashes', Thrift.Type.I32, 7);
    output.writeI32(this.bloomFilterNbHashes);
    output.writeFieldEnd();
  }
  if (this.blockCacheEnabled) {
    output.writeFieldBegin('blockCacheEnabled', Thrift.Type.BOOL, 8);
    output.writeBool(this.blockCacheEnabled);
    output.writeFieldEnd();
  }
  if (this.timeToLive) {
    output.writeFieldBegin('timeToLive', Thrift.Type.I32, 9);
    output.writeI32(this.timeToLive);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var TRegionInfo = module.exports.TRegionInfo = function(args) {
  this.startKey = null;
  this.endKey = null;
  this.id = null;
  this.name = null;
  this.version = null;
  if (args) {
    if (!args.startKey) {
      this.startKey = args.startKey;
    }
    if (!args.endKey) {
      this.endKey = args.endKey;
    }
    if (!args.id) {
      this.id = args.id;
    }
    if (!args.name) {
      this.name = args.name;
    }
    if (!args.version) {
      this.version = args.version;
    }
  }
};
TRegionInfo.prototype = {};
TRegionInfo.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.startKey = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.endKey = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I64) {
        this.id = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.name = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.BYTE) {
        this.version = input.readByte();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

TRegionInfo.prototype.write = function(output) {
  output.writeStructBegin('TRegionInfo');
  if (this.startKey) {
    output.writeFieldBegin('startKey', Thrift.Type.STRING, 1);
    output.writeString(this.startKey);
    output.writeFieldEnd();
  }
  if (this.endKey) {
    output.writeFieldBegin('endKey', Thrift.Type.STRING, 2);
    output.writeString(this.endKey);
    output.writeFieldEnd();
  }
  if (this.id) {
    output.writeFieldBegin('id', Thrift.Type.I64, 3);
    output.writeI64(this.id);
    output.writeFieldEnd();
  }
  if (this.name) {
    output.writeFieldBegin('name', Thrift.Type.STRING, 4);
    output.writeString(this.name);
    output.writeFieldEnd();
  }
  if (this.version) {
    output.writeFieldBegin('version', Thrift.Type.BYTE, 5);
    output.writeByte(this.version);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var Mutation = module.exports.Mutation = function(args) {
  this.isDelete = false;
  this.column = null;
  this.value = null;
  if (args) {
    if (!args.isDelete) {
      this.isDelete = args.isDelete;
    }
    if (!args.column) {
      this.column = args.column;
    }
    if (!args.value) {
      this.value = args.value;
    }
  }
};
Mutation.prototype = {};
Mutation.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.BOOL) {
        this.isDelete = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.column = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.value = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Mutation.prototype.write = function(output) {
  output.writeStructBegin('Mutation');
  if (this.isDelete) {
    output.writeFieldBegin('isDelete', Thrift.Type.BOOL, 1);
    output.writeBool(this.isDelete);
    output.writeFieldEnd();
  }
  if (this.column) {
    output.writeFieldBegin('column', Thrift.Type.STRING, 2);
    output.writeString(this.column);
    output.writeFieldEnd();
  }
  if (this.value) {
    output.writeFieldBegin('value', Thrift.Type.STRING, 3);
    output.writeString(this.value);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BatchMutation = module.exports.BatchMutation = function(args) {
  this.row = null;
  this.mutations = null;
  if (args) {
    if (!args.row) {
      this.row = args.row;
    }
    if (!args.mutations) {
      this.mutations = args.mutations;
    }
  }
};
BatchMutation.prototype = {};
BatchMutation.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.row = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.LIST) {
        var _size0 = 0;
        var _rtmp34;
        this.mutations = [];
        var _etype3 = 0;
        _rtmp34 = input.readListBegin();
        _etype3 = _rtmp34.etype;
        _size0 = _rtmp34.size;
        for (var _i5 = 0; _i5 < _size0; ++_i5)
        {
          var elem6 = null;
          elem6 = new ttypes.Mutation();
          elem6.read(input);
          this.mutations.push(elem6);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

BatchMutation.prototype.write = function(output) {
  output.writeStructBegin('BatchMutation');
  if (this.row) {
    output.writeFieldBegin('row', Thrift.Type.STRING, 1);
    output.writeString(this.row);
    output.writeFieldEnd();
  }
  if (this.mutations) {
    output.writeFieldBegin('mutations', Thrift.Type.LIST, 2);
    output.writeListBegin(Thrift.Type.STRUCT, this.mutations.length);
    for (var iter7 in this.mutations)
    {
      if (this.mutations.hasOwnProperty(iter7))
      {
        iter7 = this.mutations[iter7];
        iter7.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var TRowResult = module.exports.TRowResult = function(args) {
  this.row = null;
  this.columns = null;
  if (args) {
    if (!args.row) {
      this.row = args.row;
    }
    if (!args.columns) {
      this.columns = args.columns;
    }
  }
};
TRowResult.prototype = {};
TRowResult.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.row = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.MAP) {
        var _size8 = 0;
        var _rtmp312;
        this.columns = {};
        var _ktype9 = 0;
        var _vtype10 = 0;
        _rtmp312 = input.readMapBegin();
        _ktype9 = _rtmp312.ktype;
        _vtype10 = _rtmp312.vtype;
        _size8 = _rtmp312.size;
        for (var _i13 = 0; _i13 < _size8; ++_i13)
        {
          key14 = null;
          val15 = null;
          key14 = input.readString();
          val15 = new ttypes.TCell();
          val15.read(input);
          this.columns[key14] = val15;
        }
        input.readMapEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

TRowResult.prototype.write = function(output) {
  output.writeStructBegin('TRowResult');
  if (this.row) {
    output.writeFieldBegin('row', Thrift.Type.STRING, 1);
    output.writeString(this.row);
    output.writeFieldEnd();
  }
  if (this.columns) {
    output.writeFieldBegin('columns', Thrift.Type.MAP, 2);
    output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.STRUCT, Thrift.objectLength(this.columns));
    for (var kiter16 in this.columns)
    {
      if (this.columns.hasOwnProperty(kiter16))
      {
        var viter17 = this.columns[kiter16];
        output.writeString(kiter16);
        viter17.write(output);
      }
    }
    output.writeMapEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var IOError = module.exports.IOError = function(args) {
  Thrift.TException.call(this, "IOError")
  this.name = "IOError"
  this.message = null;
  if (args) {
    if (!args.message) {
      this.message = args.message;
    }
  }
};
Thrift.inherits(IOError, Thrift.TException);
IOError.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.message = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

IOError.prototype.write = function(output) {
  output.writeStructBegin('IOError');
  if (this.message) {
    output.writeFieldBegin('message', Thrift.Type.STRING, 1);
    output.writeString(this.message);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var IllegalArgument = module.exports.IllegalArgument = function(args) {
  Thrift.TException.call(this, "IllegalArgument")
  this.name = "IllegalArgument"
  this.message = null;
  if (args) {
    if (!args.message) {
      this.message = args.message;
    }
  }
};
Thrift.inherits(IllegalArgument, Thrift.TException);
IllegalArgument.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.message = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

IllegalArgument.prototype.write = function(output) {
  output.writeStructBegin('IllegalArgument');
  if (this.message) {
    output.writeFieldBegin('message', Thrift.Type.STRING, 1);
    output.writeString(this.message);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var AlreadyExists = module.exports.AlreadyExists = function(args) {
  Thrift.TException.call(this, "AlreadyExists")
  this.name = "AlreadyExists"
  this.message = null;
  if (args) {
    if (!args.message) {
      this.message = args.message;
    }
  }
};
Thrift.inherits(AlreadyExists, Thrift.TException);
AlreadyExists.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.message = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

AlreadyExists.prototype.write = function(output) {
  output.writeStructBegin('AlreadyExists');
  if (this.message) {
    output.writeFieldBegin('message', Thrift.Type.STRING, 1);
    output.writeString(this.message);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

