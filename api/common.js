require('./config');
var utils = require('./utils');
var request = require('request');

var urlRoot = 'https://leancloud.cn/1.1/classes';

exports.getById= function(className, id, callback) {
	var url = urlRoot + className + id;
	//console.log(url);
	var options = utils.getOptions(url);
	// console.log(options);
	request.get(options, callback);
}

exports.getAll = function(className, callback) {
    var url = urlRoot + className;
    console.log(url);
    var options = utils.getOptions(url);
    request.get(options, callback);
}

exports.add = function(className, data, callback) {
    var url = urlRoot + className; 
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

exports.updateById = function(className, id, data, callback) {
    var url = urlRoot + className + id;
    var options = utils.getOptions(url);
    options.body = data;
    request.put(options, callback);
}

exports.deleteById = function(className, id, callback) {
    var url = urlRoot + className + id;
    var options = utils.getOptions(url);
    request.del(options, callback);
}
