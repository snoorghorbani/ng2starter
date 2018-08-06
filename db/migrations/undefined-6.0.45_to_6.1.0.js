
	var mongodb = require("mongodb");
	const fs = require("fs");
	
	exports.up = function(db, next) {
		
				var collection = db.collection(configs);
				collection.insertMany([{"_id":"5a377d7dff6ae751f2542a3a","Name":"asdfasdfdsf","Config":{"AppTitle":"sdfasdf","FooterCopyright":"© 2005-2017 همه حقوق برای شرکت شاتل محفوظ است.","Roles":["User","Admin"]},"updatedAt":"2018-07-22T06:12:56.633Z"},{"_id":"5a377d7d4f6ae751f2542a3a","Name":"sdfgsdfgapp_config","Config":{"AppTitle":"sdfasdf","FooterCopyright":"© 2005-2017 همه حقوق برای شرکت شاتل محفوظ است.","Roles":["User","Admin"]},"updatedAt":"2018-07-22T06:12:56.633Z"}], {}, next);
			
	};

	exports.down = function(db, next) {
		
				var collection = db.collection(configs);
				collection.remove({_id : { $in : ["5a377d7dff6ae751f2542a3a","5a377d7d4f6ae751f2542a3a"] }}, { justOne: true }, next);
			
	};
	