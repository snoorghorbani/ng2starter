const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const fs = require("fs");
const dotenv = require("dotenv");

let npmPackage = JSON.parse(fs.readFileSync(`./package.json`));

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
dotenv.config({ path: "./db/.env" });

if (!fs.existsSync(`${process.env.reposRoot}/${npmPackage.version}`))
	fs.mkdirSync(`${process.env.reposRoot}/${npmPackage.version}`);

// Use connect method to connect to the server
MongoClient.connect(process.env.MONGODB_URI, function(err, client) {
	assert.equal(null, err);
	console.log("Connected successfully to server");

	const db = client.db(process.env.dbName);

	db.collections().then(collections =>
		collections.forEach(collection => {
			if (process.env.excludedCollection.includes(collection.collectionName)) return;

			let _collection = db.collection(collection.collectionName);
			_collection.find().toArray((err, docs) => {
				fs.writeFileSync(
					`${process.env.reposRoot}/${npmPackage.version}/${collection.collectionName}.json`,
					JSON.stringify(docs),
					"utf8"
				);
			});
		})
	);

	// client.close();
});
