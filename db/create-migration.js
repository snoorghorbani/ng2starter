const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const fs = require("fs");
const dotenv = require("dotenv");

let npmPackage = JSON.parse(fs.readFileSync(`./package.json`));

/**
 * Load environment variables from .env file
 */
dotenv.config({ path: "./db/.env" });

// Use connect method to connect to the server
MongoClient.connect(process.env.MONGODB_URI, function(err, client) {
	assert.equal(null, err);
	console.log("Connected successfully to server");

	const db = client.db(process.env.dbName);

	db.collections().then(collections => {
		collections.forEach(collection => {
			if (process.env.excludedCollection.includes(collection.collectionName)) return;
			collection.find().toArray((err, docs) => {
				let sourceCollection = JSON.parse(
					fs.readFileSync(`${process.env.reposRoot}/${npmPackage.version}/${collection.collectionName}.json`)
				);

				sourceCollection.forEach(sourceDoc => {
					let desticationDoc = docs.find(doc => doc._id.toString() === sourceDoc._id);
					if (!desticationDoc) {
						console.log(`${collection.collectionName} : ${sourceDoc._id} is not existed`);
					} else if (JSON.stringify(desticationDoc) == JSON.stringify(sourceDoc)) {
						console.log(`${collection.collectionName} : ${sourceDoc._id} is correct`);
					} else {
						console.log(`${collection.collectionName} : ${sourceDoc._id} is existed but have confilict`);
					}
				});
			});
		});
		console.log(`comparing completed`);
	});

	// client.close();
});
