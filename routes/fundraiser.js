var express = require('express');
var router = express.Router();
var fundraiser = require('../api/fundraiser');


router.get('/', function(req, res, next) {

	res.render('project', null);

});
/*
router.get('/:id', function(req, res, next) {
	var id = req.params.id;
	fundraiser.getFundraiser(id, function (error, response, body) {
	    if (!error && response.statusCode == 200) {
	        var info = JSON.parse(body);
	        res.render('project', { 'data': info });
	    } else {
	    	res.render('project', { 'data': error });
	    }
	});
});
*/

module.exports = router;
