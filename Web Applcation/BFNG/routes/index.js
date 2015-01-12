var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { 
  	title: 'BFNG',
  	name: 'Big Fuck-off Nerf Gun'
  });
});

module.exports = router;
