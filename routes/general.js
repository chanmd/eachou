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
    //todo: validation
    user.login(data, function(error, response, body) {
        var info = JSON.parse(body);
        if (!info.error){
            //var username = info.username;
            //var token = info.sessionToken;
            res.render('ngoProfile', {'user':info});
        } else {
            console.log(body);
            res.render('login', {'error':info});
        }
    });
});

router.post('/logout/', function(req, res, next) {
    var username = req.body.username;
    //console.log(username);
    user.getByUsername(username, function(error, response, body){
        if(!error){
            res.send(body);
        } else {
            res.send('Error! ' + error);
        }
    });
    /*
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
    */
});

/* render individual registration page */
router.get('/register/', function(req, res, next) {
    res.render('indRegister', {'error': false});
});

/* individual registration function */
router.post('/register/', function(req, res, next) {
    var email = req.body.email;
    var mobilePhoneNumber = req.body.mobilePhoneNumber;
    var username = req.body.username;
    var password = req.body.password;

    //todo: validation
    var data = JSON.stringify({
        "username" : username,
        "password" : password,
        "email" : email
        //"mobilePhoneNumber" : mobilePhoneNumber
    });
    
    user.add(data, function(error, response, body){
        var info = JSON.parse(body);
        if(!info.error){
            console.log("CREATED: " + body)
            console.log(info.objectId);
            res.send(body);
            /*
            user.(info.objectId, function(error2, response2, body2){
                var info2 = JSON.parse(body2);
                if(!info2.error){                 
                    res.render('indProfile', {'user':info2});
                } else {
                    res.send('Unexpected Error! ' + body2);
                }
            });
            */
        } else {
            console.log(body);
            res.render('indRegister', {'error':info});
        }
    });
});

module.exports = router;
