var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(err,req, res, next) {
  res.status(err.status || 500);
  res.render('index', { title: 'Express' });
});

module.exports = router;
