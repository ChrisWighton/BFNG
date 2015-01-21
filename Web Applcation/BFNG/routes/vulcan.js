var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('vulcan/index', { 
  	title: 'B.F.N.G',
  	name: 'Big Frisky Nerf Gun',
  	heading: 'Manage your Vulcan'
  });
});

router.get('/new', function(req, res) {
	res.render('vulcan/new', {
		title: 'B.F.N.G',
		name: 'Big Furious Nerf Gun',
		heading: 'Add a Vulcan'
	})
});

module.exports = router;
