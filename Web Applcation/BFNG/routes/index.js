var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { 
  	title: 'B.F.N.G',
  	name: 'Big Friggin\' Nerf Gun',
  	heading: 'The coolest s*** you\'ve seen this week...'
  });
});

module.exports = router;
