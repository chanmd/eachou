require('./config');
var utils = require('./utils');
var request = require('request');

exports.getAccountType = function(id, callback) {
	var url = 'https://leancloud.cn/1.1/classes/accountType/' + id;
	//console.log(url);
	var options = utils.getOptions(url);
	// console.log(options);
	request(options, callback);
}

exports.addAccountType = function(id, callback) {
    var url = 'https://leancloud.cn/1.1/classes/accountType';
    var data = JSON.stringify({
        "typeCode" : "aaa"
    });
    var options = utils.addOptions(url);
    var req = request(options, callback);
    req.on('error', function(e) {
        console.log('problem with request: ' + e.message);
    });

    // attach data to request body
    req.write(data);
    req.end();
    
}
