require('./config');
var utils = require('./utils');
var request = require('request');
var common = require('./common');

var className = '/users';

exports.getById = function(id, callback) {
    common.getById(className, id, callback);
}

exports.getAll = function(callback) {
    common.getAll(className, callback);
}

/* registration */
exports.add = function(data, callback) {
    common.add(className, data, callback);
}

exports.updateById = function(id, sessionToken, data, callback) {
    /*var url = global.avos_domain + className + id;
    var options = utils.getOptionsWithToken(url, sessionToken);
    options.body = data;
    request.put(options, callback);
    */
    common.updateById(className, id, data, callback);    
}

exports.deleteById = function(id, callback) {
    common.deleteById(className, id, callback); 
}

/* get user by token */
exports.getByToken = function(token, callback) {
    //var url = global.avos_domain + className;
    var url = global.avos_domain + "/classes/accountType";
    var options = utils.getOptions(url);

    //var query = 'where={"token":"'+token+'"}';
    var query = JSON.stringify('where={"typeCode":"aaa"}');
    options.params = query;

    request.get(options, callback);
}

/* get user by username */
exports.getByUsername = function(username, callback) {
     //var url = global.avos_domain + className;
    var url = global.avos_domain + "/classes/accountType";
    var options = utils.getOptions(url);

    //var query = 'where={"token":"'+token+'"}';
    var query = JSON.stringify('where={"typeCode":"aaa"}');
    options.params = query;

    request.get(options, callback);
}

/* find user by given value */
exports.getByUsername = function(field, value, data) {
    //todo
}

/* login */
exports.login = function(data, callback) {
    var url = global.avos_domain + '/login';
    var options = utils.getOptions(url);
    options.body = data;
    request.get(options, callback);
}
