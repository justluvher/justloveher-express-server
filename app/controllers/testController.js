/**
 * Created by justluvher on 2016. 11. 21..
 */
var express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function (app) {
  app.use('/article', router);
};

router.get('/', function (req, res, next) {
  db.Article.findAll().then(function (articles) {
    res.render('index', {
      title: 'Generator-Express MVC',
      articles: articles
    });
  });
});
