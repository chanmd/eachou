require('./config');
var utils = require('./utils');
var request = require('request');

var urlRoot = 'https://leancloud.cn/1.1/classes';
var className = '/accountType';

exports.getById= function(id, callback) {
	var url = urlRoot + className + id;
	//console.log(url);
	var options = utils.getOptions(url);
	// console.log(options);
	request.get(options, callback);
}

exports.getAll = function(callback) {
    var url = urlRoot + className;
    console.log(url);
    var options = utils.getOptions(url);
    request.get(options, callback);
}

exports.add = function(data, callback) {
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

exports.updateById = function(id, data, callback) {
    var url = urlRoot + className + id;
    var options = utils.getOptions(url);
    options.body = data;
    request.put(options, callback);
}
