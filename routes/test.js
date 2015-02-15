var express = require('express');
var router = express.Router();
var accountType = require('../api/accountType');

/* test get accountType */
router.get('/getAccountType/:id', function(req, res, next) {
    var id = req.params.id;
    //console.log(id);
    
    accountType.getAccountType(id, function (error, response, body) {
        if(!error && response.statusCode == 200){
            res.send(body);
        } else {
            res.send(error); 
        }
    });
});

/* test add accountType */
router.get('/addAccountType', function(req, res, next) {
    var data = JSON.stringify({
        "typeCode" : "aaa"
    });

    accountType.addAccountType(data, function(error, response, body){
        if(!error && response.statusCode == 201){
            res.send("body: " + body);
        } else {
            res.send("error: " + error); 
        }
    });
});

module.exports = router;

