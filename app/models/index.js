/**
 * Created by justluvher on 2016. 11. 16..
 */
var fs = require('fs'),
  path = require('path'),
  Sequelize = require('sequelize'),
  db = {};

//var sequelize = new Sequelize(config.db);
var sequelize = new Sequelize('justloveher_dev','justloveher','rbtjrl79',{
  host:'aa1hb5a8zoclm0w.cqnytilw0wcs.us-west-2.rds.amazonaws.com',
  dialect:'mysql',
  pool:{
    max:100,
    min:0,
    idle:1000
  }
});

fs.readdirSync(__dirname).filter(function (file) {
  //console.log(file);
  return (file.indexOf('.') !== 0) && (file !== 'index.js');
}).forEach(function (file) {
  var model = sequelize['import'](path.join(__dirname, file));
  db[model.name] = model;
});

Object.keys(db).forEach(function (modelName) {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
