//require('./config');
var utils = require('./utils');
var request = require('request');
var common = require('./common');

var className = '/users';

exports.getById= function(id, callback) {
    common.getById(className, id, callback);
}

exports.getAll = function(callback) {
    common.getAll(className, callback);
}

/* registration */
exports.add = function(data, callback) {
    common.add(className, data, callback);
}

exports.updateById = function(id, data, callback) {
    common.updateById(className, id, data, callback);    
}

exports.deleteById = function(id, callback) {
    common.deleteById(className, id, callback); 
}

/* login */
exports.login = function(data, callback) {
    var url = 'https://leancloud.cn/1.1/login';
    var options = utils.getOptions(url);
    options.body = data;
    request.get(options, callback);
}
