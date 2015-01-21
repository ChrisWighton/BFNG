var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('wifi-setup', { 
  	title: 'B.F.N.G',
  	name: 'Big Fishy Nerf Gun',
  	heading: 'Setup your Vulcan\'s WIFI'
  });
});

module.exports = router;
