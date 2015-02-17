var express = require('express');
var router = express.Router(); var accountType = require('../api/accountType');

/* test get accountType by ID */
router.get('/getAccType/:id', function(req, res, next) {
    var id = '/' + req.params.id;
    //console.log(id);
    
    accountType.getById(id, function (error, response, body) {
        if(!error && response.statusCode == 200){
            res.send(body);
        } else {
            res.send(error); 
        }
    });
});

/* test get all accountType */
router.get('/getAllAccType', function(req, res, next) {
    accountType.getAll(function(error, response, body) {
        if(!error){
            res.send(body);
        } else {
            res.send(error);
        }
    });
});

/* test add accountType */
router.get('/addAccType', function(req, res, next) {
    var data = JSON.stringify({
        "typeCode" : "aaa"
    });

    accountType.add(data, function(error, response, body){
        if(!error && response.statusCode == 201){
            res.send("body: " + body);
        } else {
            res.send("error: " + error); 
        }
    });
});

/* test update accountType */
router.get('/updateAccType/:id', function(req, res, next) {
    var data = JSON.stringify({
        "typeCode" : "changed"
    });

    accountType.updateById(id, data, function(error, response, body){
        if(!error){
            res.send(body);
        } else {
            res.send(error);
        }
    });
});

module.exports = router;

