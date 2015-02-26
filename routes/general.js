var express = require('express');
var router = express.Router();

var user = require('../api/user');

/* Render login page */
router.get('/login/', function(req, res, next) {
    res.render('login');
});

/* login function */
router.post('/login/login/', function(req, res, next) {
    var data = JSON.stringify({
        "username": req.body.username,
        "password": req.body.password
    });
    user.login(data, function(error, response, body) {
        if(!error) {
            var info = JSON.parse(body);
            if (info.code != 210){
                var username = info.username;
                var token = info.sessionToken;
                res.render('ngoProfile', {'username':username, 'token':token});
            } else {
                res.render('login', {'error': info});
            }
        } else {
            res.send('Error! ' + error);
        }
    });
});

module.exports = router;
