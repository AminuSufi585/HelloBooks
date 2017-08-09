'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

<<<<<<< HEAD
=======
var _config = require('../config/config.json');

var _config2 = _interopRequireDefault(_config);

>>>>>>> dev
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var basename = _path2.default.basename(module.filename);
var env = process.env.NODE_ENV || 'development';
<<<<<<< HEAD
var config = require('../config/config.json')[env];

var db = {};

var sequelize = void 0;
if (config.use_env_variable) {
  sequelize = new _sequelize2.default(process.env[config.use_env_variable]);
} else {
  sequelize = new _sequelize2.default(config.database, config.username, config.password, config);
=======
var configg = _config2.default[env];
var db = {};

var sequelize = void 0;
if (_config2.default.use_env_variable) {
  sequelize = new _sequelize2.default(process.env[configg.use_env_variable]);
} else {
  sequelize = new _sequelize2.default(configg.database, configg.username, configg.password, configg);
>>>>>>> dev
}

_fs2.default.readdirSync(__dirname).filter(function (file) {
  return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
}).forEach(function (file) {
  var model = sequelize.import(_path2.default.join(__dirname, file));
  db[model.name] = model;
});

Object.keys(db).forEach(function (modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = _sequelize2.default;

exports.default = db;