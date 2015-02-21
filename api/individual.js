//require('./config');
//var utils = require('./utils');
var request = require('request');
var common = require('./common');

var className = '/classes/individual';

exports.getById= function(id, callback) {
    common.getById(className, id, callback);
}

exports.getAll = function(callback) {
    common.getAll(className, callback);
}

exports.add = function(data, callback) {
    common.add(className, data, callback);
}

exports.updateById = function(id, data, callback) {
    common.updateById(className, id, data, callback);    
}

exports.deleteById = function(id, callback) {
    common.deleteById(className, id, callback); 
}

