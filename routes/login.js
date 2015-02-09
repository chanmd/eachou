var express = require('express');
var router = express.Router();

/* Login Page */
router.get('/', function(req, res, next) {
    res.render('login');
    //res.send('respond with a resource');
});

module.exports = router;
