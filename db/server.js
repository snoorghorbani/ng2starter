const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const fs = require("fs");
const dotenv = require("dotenv");

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
dotenv.config({ path: ".env" });

// Connection URL
const url = "mongodb://172.22.34.28:27018,172.22.34.149:27019/starter?replicaSet=st1";

// Database Name
const dbName = "starter";

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
	assert.equal(null, err);
	console.log("Connected successfully to server");

	const db = client.db(dbName);

	db.collections().then(collections =>
		collections.forEach(collection => {
			let _collection = db.collection(collection.collectionName);
			_collection.find().toArray((err, docs) => {
				fs.writeFileSync(`./db/repository/${collection.collectionName}.json`, JSON.stringify(docs), "utf8");
			});
		})
	);

	// client.close();
});
