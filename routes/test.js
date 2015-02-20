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

/* test delete ngo */
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

/*------------------- individual -----------------------*/
 
var individual = require('../api/individual');

/* test get individual by ID */
router.get('/getInd/:id', function(req, res, next) {
    var id = '/' + req.params.id;
    //console.log(id);
    
    individual.getById(id, function (error, response, body) {
        if(!error && response.statusCode == 200){
            res.send(body);
        } else {
            res.send(error); 
        }
    });
});

/* test get all individual */
router.get('/getAllInd', function(req, res, next) {
    individual.getAll(function(error, response, body) { 
        if(!error){
            res.send(body);
        } else {
            res.send(error);
        }
    });
});

/* test add individual */
router.get('/addInd', function(req, res, next) {
    var data = JSON.stringify({
        "firstname" : "柳",
        "lastname" : "杨"
    });

    individual.add(data, function(error, response, body){
        if(!error){
            res.send("body: " + body);
        } else {
            res.send("error: " + error); 
        }
    });
});

/* test update individual */
router.get('/updateInd/:id', function(req, res, next) {
    var id = '/' + req.params.id;
    var data = JSON.stringify({
        "firstname" : "Liu"
    });

    individual.updateById(id, data, function(error, response, body){
        if(!error){
            res.send(body);
        } else {
            res.send(error);
        }
    });
});

/* test delete individual */
router.get('/deleteInd/:id', function(req, res, next) {
    var id = '/' + req.params.id;
    
    individual.deleteById(id, function(error, response, body){
        if(!error){
            res.send(body);
        } else {
            res.send(error);
        }
    });
});

module.exports = router;

