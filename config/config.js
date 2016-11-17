/**
 * Created by justluvher on 2016. 11. 16..
 */
var path = require('path'),
  rootPath = path.normalize(__dirname + '/..'),
  env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'node-express'
    },
    port: process.env.PORT || 3000,
    db: 'mysql://localhost/node-express-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'node-express'
    },
    port: process.env.PORT || 3000,
    db: 'mysql://localhost/node-express-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'node-express'
    },
    port: process.env.PORT || 3000,
    db: 'mysql://localhost/node-express-production'
  }
};

module.exports = config[env];
