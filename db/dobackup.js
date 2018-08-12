const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const fs = require("fs");
const dotenv = require("dotenv");

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
dotenv.config({ path: "./.env" });

const backup = nextVersion => {
	return new Promise((resolve, reject) => {
		if (!fs.existsSync(`${process.env.reposRoot}/${nextVersion}`))
			fs.mkdirSync(`${process.env.reposRoot}/${nextVersion}`);

		// Use connect method to connect to the server
		MongoClient.connect(process.env.MONGODB_URI, function(err, client) {
			assert.equal(null, err);
			console.log("Connected successfully to server");

			const db = client.db(process.env.dbName);

			db.collections().then(collections => {
				let count = collections.length - eval(process.env.excludedCollection).length;
				collections.forEach(collection => {
					if (process.env.excludedCollection.includes(collection.collectionName)) return;

					let _collection = db.collection(collection.collectionName);
					_collection.find().toArray((err, docs) => {
						fs.writeFileSync(
							`${process.env.reposRoot}/${nextVersion}/${collection.collectionName}.json`,
							JSON.stringify(docs),
							"utf8"
						);
						if (--count == 0) {
							resolve(true);
						}
					});
				});
			});

			// client.close();
		});
	});
};

module.exports.backup = backup;
