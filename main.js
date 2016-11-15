var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var engine = require('consolidate');
var db = require('./dbConnection');

var index = require('./routes/index');
var users = require('./routes/users');

var mainApp = express();

// view engine setup
mainApp.set('views', __dirname + '/app');
mainApp.engine('html', engine.mustache);
mainApp.set('view engine', 'html');
// mainApp.set('views', path.join(__dirname, 'app'));
// mainApp.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
mainApp.use(logger('dev'));
mainApp.use(bodyParser.json());
mainApp.use(bodyParser.urlencoded({ extended: false }));
mainApp.use(cookieParser());
mainApp.use(express.static(path.join(__dirname, 'app')));

mainApp.use('/', index);
//mainApp.use('/users', users);

// catch 404 and forward to error handler
mainApp.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
mainApp.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('index');
});

module.exports = mainApp;
