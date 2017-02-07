var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var list = ['helloworld','todomvc']

  res.render('./typescript/index', {contant : list});
});

router.get('/helloworld', function(req, res, next) {
  res.render('./typescript/helloworld/helloworld');
});

router.get('/todomvc', function(req, res, next) {
  res.render('./typescript/todomvc/todomvc');
});

module.exports = router;
