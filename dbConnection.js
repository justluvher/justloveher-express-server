/**
 * Created by justluvher on 2016. 11. 15..
 */
var Sequelize = require('sequelize');
var fs = require('fs');
var path = require('path');
var config = require('./config/config');
var db = {};

console.log(__dirname);

var sequelize = new Sequelize('justloveher_product','justlove','rbtjrl79',{
  host:'aa1kw9fejwpilgh.cqnytilw0wcs.us-west-2.rds.amazonaws.com',
  dialect:'mysql',
  pool:{
    max:100,
    min:0,
    idle:1000
  }
});

console.log(__dirname+'/app/models');
fs.readdirSync(__dirname+'/app/models').filter(function (file) {
  return (file.indexOf('.') !== 0) && (file !== 'index.js');
}).forEach(function (file) {
  var model = sequelize['import'](path.join(__dirname+'/app/models', file));
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
