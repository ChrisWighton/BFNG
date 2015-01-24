var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/.:format?', function(req, res) {
	if (req.params.format == 'json') {

		res.send(JSON.stringify(
		{
			vulcans: [
			{
				name: "vulcan1",
				owner: "James"
			},
			{
				name: "vulcan2",
				owner: "Chirs"
			}]
		}
		));
	} else {
		res.render('vulcan/index', { 
			title: 'B.F.N.G',
			name: 'Big Frisky Nerf Gun',
			heading: 'Manage your Vulcan'
		});
	}

});

router.get('/new', function(req, res) {
	res.render('vulcan/new', {
		title: 'B.F.N.G',
		name: 'Big Furious Nerf Gun',
		heading: 'Add a Vulcan'
	})
});

module.exports = router;
