var express = require('express');
var router = express.Router();

/*------------------- accountType -----------------------*/
 
var accountType = require('../api/accountType');

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
    var id = '/' + req.params.id;
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

/* test delete accountType */
router.get('/deleteAccType/:id', function(req, res, next) {
    var id = '/' + req.params.id;
    
    accountType.deleteById(id, function(error, response, body){
        if(!error){
            res.send(body);
        } else {
            res.send(error);
        }
    });
});


/*------------------- ngo -----------------------*/
 
var ngo = require('../api/ngo');

/* test get ngo by ID */
router.get('/getNgo/:id', function(req, res, next) {
    var id = '/' + req.params.id;
    //console.log(id);
    
    ngo.getById(id, function (error, response, body) {
        if(!error && response.statusCode == 200){
            res.send(body);
        } else {
            res.send(error); 
        }
    });
});

/* test get all ngo */
router.get('/getAllNgo', function(req, res, next) {
    ngo.getAll(function(error, response, body) { 
        if(!error){
            res.send(body);
        } else {
            res.send(error);
        }
    });
});

/* test add ngo */
router.get('/addNgo', function(req, res, next) {
    var data = JSON.stringify({
        "name" : "儿童基金",
        "mission" : "让每个孩子都有读书的机会",
        "tel" : 98765432
    });

    ngo.add(data, function(error, response, body){
        if(!error && response.statusCode == 201){
            res.send("body: " + body);
        } else {
            res.send("error: " + error); 
        }
    });
});

/* test update ngo */
router.get('/updateNgo/:id', function(req, res, next) {
    var id = '/' + req.params.id;
    var data = JSON.stringify({
        "tel" : 000,
        "location" : "中国辽宁省沈阳市"
    });

    ngo.updateById(id, data, function(error, response, body){
        if(!error){
            res.send(body);
        } else {
            res.send(error);
        }
    });
});

/* test delete accountType */
router.get('/deleteNgo/:id', function(req, res, next) {
    var id = '/' + req.params.id;
    
    ngo.deleteById(id, function(error, response, body){
        if(!error){
            res.send(body);
        } else {
            res.send(error);
        }
    });
});

module.exports = router;

