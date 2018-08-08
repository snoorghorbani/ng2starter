
	var mongodb = require("mongodb");
	const fs = require("fs");
	
	exports.up = function(db, next) {
		/**
		 * Apply change for properties that changed
		*/
		
			throw "migration file not implemented!";
			/* 
			* Kind	:	E
			* Path	:	Name
			* lhs	:	newValue_layout_config
			* rhs	:	layout_config
			*/
			db.collection("configs").update({"_id":"5a716a0eff6ae751f2dcaa39"}, {"$set":{}}, {});
			
			throw "migration file not implemented!";
			/* 
			* Kind	:	D
			* Path	:	Name33
			* lhs	:	layout_config33
			* rhs	:	undefined
			*/
			db.collection("configs").update({"_id":"5a716a0eff6ae751f2dcaa39"}, {"$set":{}}, {});
			;

		/**
		 * Insert New Docs
		*/
		
				var collection = db.collection("configs");
				collection.insertMany([{"_id":"5a377d7dff6ae751f2542a32","Name":"app_config","Config":{"AppTitle":"داشبورد","FooterCopyright":"© 2005-2017 همه حقوق برای شرکت شاتل محفوظ است.","Roles":["User","Admin"]},"updatedAt":"2018-07-22T06:12:56.633Z"},{"_id":"5a50a483ff6ae751f29073f1","Name":"authentication_module_config","Config":{"endpoints":{"signIn":"/api/user/signin","signOut":"/api/user","whoAmI":"/api/user"},"forms":{"signIn":"5a951cfbfd791632a09b3bc6"}},"updatedAt":"2018-07-22T06:12:50.762Z"},{"_id":"5a50a775ff6ae751f2907a4d","Name":"user_module_config","Config":{"endpoints":{"changePassword":"not/set","editProfile":"not/set","getUserInfo":"/api/user/${Email}","profileInformation":"/api/user/account/profile"},"forms":{"profile_edit":"5a940123bdfc033d70061cc5"},"dashboardLinks":[{"route":"/order/my-orders","icon":"security","title":"سفارش های من"}]},"updatedAt":"2018-05-13T17:11:38.747Z"}], {});
			;

		next();
	};

	exports.down = function(db, next) {
		
		
				var collection = db.collection(configs);
				collection.remove({_id : { $in : ["5a377d7dff6ae751f2542a32","5a50a483ff6ae751f29073f1","5a50a775ff6ae751f2907a4d"] }}, { justOne: true });
			

		next();
	};
	