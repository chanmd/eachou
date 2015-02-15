require('./config');
var utils = require('./utils');
var request = require('request');

exports.getAccountType = function(id, callback) {
	var url = 'https://leancloud.cn/1.1/classes/accountType/' + id;
	//console.log(url);
	var options = utils.getOptions(url);
	// console.log(options);
	request.get(options, callback);
}

exports.addAccountType = function(id, callback) {
    var url = 'https://leancloud.cn/1.1/classes/accountType';
    var data = JSON.stringify({
        "typeCode" : "md's test"
    });
    var options = utils.getOptions(url);
    options.body = data;
    request.post(options, callback);
    // req.on('error', function(e) {
    //     console.log('problem with request: ' + e.message);
    // });

    // // attach data to request body
    // req.write(data);
    // req.end();
    
}
