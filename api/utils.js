
var md5 = require("MD5");
require('./config');
exports.getOptions = function(url) {
	//get current timestamp
	var nowtime = Math.round(new Date().getTime()); // /1000 is ms
	// console.log(nowtime);
	var sign = md5(nowtime + global.avos_appkey) + ',' + nowtime;
	console.log(sign);
	var options = {
		url: url,
		headers : {
			'Content-Type': 'application/json',
			'X-AVOSCloud-Application-Id': global.avos_appid,
			'X-AVOSCloud-Application-Key': global.avos_appkey,
			'x-avoscloud-request-sign': sign
		}
	};
	return options;
}