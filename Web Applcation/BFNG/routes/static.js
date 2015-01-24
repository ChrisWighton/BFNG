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

router.get('/practise-fire', function(req, res) {
  res.render('practise-fire', { 
  	title: 'B.F.N.G',
  	name: 'Big Fruity Nerf Gun',
  	heading: 'Practise some shots',
    vulcans: [
      {
        name: "vulcan1",
        owner: "James"
      },
      {
        name: "MrYun",
        owner: "Chirs"
      }
    ]
  });
});

router.get('/wifi-setup', function(req, res) {
  res.render('wifi-setup', { 
  	title: 'B.F.N.G',
  	name: 'Big Fishy Nerf Gun',
  	heading: 'Setup your Vulcan\'s WIFI'
  });
});

module.exports = router;
