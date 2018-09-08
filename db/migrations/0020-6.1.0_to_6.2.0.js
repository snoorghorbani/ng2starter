
	var mongodb = require("mongodb");
	const fs = require("fs");
	
	exports.up = function(db, next) {

		/**
		 * Apply change for properties that changed
		*/
		
			/* 
			* Kind	:	E
			* Path	:	updatedAt
			* lhs	:	2018-07-21T10:23:32.705Z
			* rhs	:	2018-08-20T07:31:22.899Z
			*/
			throw "migration file not implemented!";
			db.collection("grids").update({"_id":"5b391bb4e35b4954802739db"}, {"$set":{}}, {});
			
			/* 
			* Kind	:	A
			* Path	:	items
			* lhs	:	undefined
			* rhs	:	undefined
			*/
			throw "migration file not implemented!";
			db.collection("grids").update({"_id":"5b391bb4e35b4954802739db"}, {"$set":{}}, {});
			
			/* 
			* Kind	:	A
			* Path	:	items
			* lhs	:	undefined
			* rhs	:	undefined
			*/
			throw "migration file not implemented!";
			db.collection("grids").update({"_id":"5b391bb4e35b4954802739db"}, {"$set":{}}, {});
			
			/* 
			* Kind	:	A
			* Path	:	items
			* lhs	:	undefined
			* rhs	:	undefined
			*/
			throw "migration file not implemented!";
			db.collection("grids").update({"_id":"5b391bb4e35b4954802739db"}, {"$set":{}}, {});
			
			/* 
			* Kind	:	E
			* Path	:	updatedAt
			* lhs	:	2018-07-23T08:56:17.526Z
			* rhs	:	2018-08-20T07:03:54.290Z
			*/
			throw "migration file not implemented!";
			db.collection("uiwidgets").update({"_id":"5b31e9a00fe89a2fc0814518"}, {"$set":{}}, {});
			
			/* 
			* Kind	:	E
			* Path	:	Config.content
			* lhs	:	<p>contenet 2dfgsdfgsdfgdsfgdsfgdfgdfg</p>
			* rhs	:	<p>contenet 2dfgsdfg sdfgdsfgd sfgdfgdfg gfghfgh fhfgh fghfgh fhfgh ghfghfh</p>
			*/
			throw "migration file not implemented!";
			db.collection("uiwidgets").update({"_id":"5b31e9a00fe89a2fc0814518"}, {"$set":{}}, {});
			

		/**
		 * Insert New Docs
		*/
		
			db.collection("griditems").insertMany([{"_id":"5b7a6e4abd56e8d284f5d9d6","updatedAt":"2018-08-20T07:31:22.885Z","owner":"another_admin","rows":1,"cols":2,"access":"public","y":0,"x":0,"__v":0,"createdAt":"2018-08-20T07:31:22.885Z"},{"_id":"5b7a6e4abd56e8d284f5d9d7","updatedAt":"2018-08-20T07:31:22.885Z","owner":"admin","rows":1,"cols":1,"y":0,"x":2,"__v":0,"createdAt":"2018-08-20T07:31:22.885Z"},{"_id":"5b7a6e4abd56e8d284f5d9d8","updatedAt":"2018-08-20T07:31:22.885Z","owner":"admin","rows":1,"cols":1,"y":0,"x":4,"__v":0,"createdAt":"2018-08-20T07:31:22.885Z"}], {});
			

		next();
	};

	exports.down = function(db, next) {
		
			/* 
			* Kind	:	E
			* Path	:	updatedAt
			* lhs	:	2018-07-21T10:23:32.705Z
			* rhs	:	2018-08-20T07:31:22.899Z
			*/
			throw "migration file not implemented!";
			db.collection("grids").update({"_id":"5b391bb4e35b4954802739db"}, {"$set":{}}, {});
			
			/* 
			* Kind	:	A
			* Path	:	items
			* lhs	:	undefined
			* rhs	:	undefined
			*/
			throw "migration file not implemented!";
			db.collection("grids").update({"_id":"5b391bb4e35b4954802739db"}, {"$set":{}}, {});
			
			/* 
			* Kind	:	A
			* Path	:	items
			* lhs	:	undefined
			* rhs	:	undefined
			*/
			throw "migration file not implemented!";
			db.collection("grids").update({"_id":"5b391bb4e35b4954802739db"}, {"$set":{}}, {});
			
			/* 
			* Kind	:	A
			* Path	:	items
			* lhs	:	undefined
			* rhs	:	undefined
			*/
			throw "migration file not implemented!";
			db.collection("grids").update({"_id":"5b391bb4e35b4954802739db"}, {"$set":{}}, {});
			
			/* 
			* Kind	:	E
			* Path	:	updatedAt
			* lhs	:	2018-07-23T08:56:17.526Z
			* rhs	:	2018-08-20T07:03:54.290Z
			*/
			throw "migration file not implemented!";
			db.collection("uiwidgets").update({"_id":"5b31e9a00fe89a2fc0814518"}, {"$set":{}}, {});
			
			/* 
			* Kind	:	E
			* Path	:	Config.content
			* lhs	:	<p>contenet 2dfgsdfgsdfgdsfgdsfgdfgdfg</p>
			* rhs	:	<p>contenet 2dfgsdfg sdfgdsfgd sfgdfgdfg gfghfgh fhfgh fghfgh fhfgh ghfghfh</p>
			*/
			throw "migration file not implemented!";
			db.collection("uiwidgets").update({"_id":"5b31e9a00fe89a2fc0814518"}, {"$set":{}}, {});
			
		
			db.collection("griditems").remove({_id : { $in : ["5b7a6e4abd56e8d284f5d9d6","5b7a6e4abd56e8d284f5d9d7","5b7a6e4abd56e8d284f5d9d8"] }}, { justOne: true });
			

		next();
	};
	