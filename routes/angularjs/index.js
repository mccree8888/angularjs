var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('./angularjs/index');
});

router.get('/1.0', function(req, res, next) {
  res.render('./angularjs/1.0/index');
});
router.get('/2.0', function(req, res, next) {
  res.render('./angularjs/2.0/index');
});

router.get('/2.0/quickstart', function(req, res, next) {
  res.render('./angularjs/2.0/quickstart/quickstart');
});

module.exports = router;
