const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const fs = require("fs");
const dotenv = require("dotenv");

let npmPackage = JSON.parse(fs.readFileSync(`../package.json`));

const changes = {
	insert : {}
};

/**
 * Load environment variables from .env file
 */
dotenv.config({ path: "./.env" });

// Use connect method to connect to the server
MongoClient.connect(process.env.MONGODB_URI, function(err, client) {
	assert.equal(null, err);
	console.log("Connected successfully to server");

	const db = client.db(process.env.dbName);

	db.collections().then(collections => {
		let colLength = collections.length - eval(process.env.excludedCollection).length;

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
						changes.insert[collection.collectionName] = changes.insert[collection.collectionName] || [];
						changes.insert[collection.collectionName].push(sourceDoc);
					} else if (JSON.stringify(desticationDoc) == JSON.stringify(sourceDoc)) {
						// console.log(`${collection.collectionName} : ${sourceDoc._id} is correct`);
					} else {
						console.log(`${collection.collectionName} : ${sourceDoc._id} is existed but have confilict`);
					}
				});

				if (--colLength == 0) {
					createMigrationFile();
					console.log(`comparing completed`);
				}
			});
		});
	});

	// client.close();
});

createMigrationFile = () => {
	console.log("createMigrationFile");
	const _insertMany = `
	var mongodb = require("mongodb");
	const fs = require("fs");
	
	exports.up = function(db, next) {
		${insertDocsToCollections()}
	};

	exports.down = function(db, next) {
		${removeDocsToCollections()}
	};
	`;
	fs.writeFileSync(`${process.env.migrationsRoot}/${npmPackage.version}.js`, _insertMany, "utf8");
};
insertDocsToCollections = () => {
	let res = "";
	for (const collectionName in changes.insert) {
		let docs = changes.insert[collectionName];
		res += `
				var collection = db.collection(${collectionName});
				collection.insertMany(${JSON.stringify(docs)}, {}, next);
			`;
	}
	return res;
};
removeDocsToCollections = () => {
	let res = "";
	for (const collectionName in changes.insert) {
		let docs = changes.insert[collectionName];
		res += `
				var collection = db.collection(${collectionName});
				collection.remove({_id : { $in : ${JSON.stringify(
					docs.map(doc => doc._id.toString())
				)} }}, { justOne: true }, next);
			`;
	}

	return res;
};
migrationFile = () => {};
migrationFile = () => {};
