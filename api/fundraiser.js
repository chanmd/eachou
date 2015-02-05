require('./config');
var utils = require('./utils');
var request = require('request');

exports.getFundraiser = function(id, callback) {
	var url = 'https://leancloud.cn/1.1/classes/accountType/' + id;
	// console.log(url);
	var options = utils.getOptions(url);
	// console.log(options);
	request(options, callback);
}