var express = require('express');
var router = express.Router();

var user = require('../api/user');

/* Render login page */
router.get('/login/', function(req, res, next) {
    res.render('login', {'error': false});
});

/* login function */
router.post('/login/', function(req, res, next) {
    var data = JSON.stringify({
        "username": req.body.username,
        "password": req.body.password
    });
    user.login(data, function(error, response, body) {
        var info = JSON.parse(body);
        if (!info.error){
            //var username = info.username;
            //var token = info.sessionToken;
            res.render('ngoProfile', {'user':info});
        } else {
            res.render('login', {'error':info});
        }
    });
});

router.post('/logout/', function(req, res, next) {
    /*var username = req.body.username;
    user.getByUsername(username, function(error, response, body){
        if(!error){
            res.send(body);
        } else {
            res.send('Error! ' + error);
        }
    });*/
    var id = '/' + req.body.objectId;
    var sessionToken = req.body.sessionToken;
    var data = JSON.stringify({
        "sessionToken": ""
    });
    user.updateById(id, sessionToken, data, function(error, response, body){
        var info = JSON.parse(body);
        if(!info.error){
            res.render('login', {'error':false});
        } else {
            res.send('Error! ' + info.error);
        }
    });
});

module.exports = router;
