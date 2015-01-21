var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('practise-fire', { 
  	title: 'B.F.N.G',
  	name: 'Big Fruity Nerf Gun',
  	heading: 'Practise some shots'
  });
});

module.exports = router;
