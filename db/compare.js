const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const fs = require("fs");
const dotenv = require("dotenv");
var deepDiff = require("deep-diff");
const glob = require("glob-fs")({ gitignore: true });

var packagesHandler = require("./packages-handler");

const changes = {
	insert : {},
	sets   : []
};

/**
 * Load environment variables from .env file
 */
dotenv.config({ path: "./.env" });

const getColections = version => {
	return require("glob-fs")({ gitignore: true })
		.readdirSync(`./${process.env.reposRoot}/${version}/*.json`)
		.map(file => {
			let col = {};
			col.docs = JSON.parse(fs.readFileSync(file));
			col.collectionName = file.split("\\").pop().split(".")[0];
			return col;
		});
};

const create_migration_files = (fromVersion, toVersion) => {
	const toCollctions = getColections(toVersion.version);

	let colLength = toCollctions.length - eval(process.env.excludedCollection).length;

	toCollctions.forEach(collection => {
		if (process.env.excludedCollection.includes(collection.collectionName)) return;
		let fromDocs = JSON.parse(
			fs.readFileSync(`${process.env.reposRoot}/${fromVersion.version}/${collection.collectionName}.json`)
		);

		collection.docs.forEach(preDoc => {
			let desticationDoc = fromDocs.find(doc => doc._id.toString() === preDoc._id);
			if (!desticationDoc) {
				console.log(`${collection.collectionName} : ${preDoc._id} is not existed`);
				changes.insert[collection.collectionName] = changes.insert[collection.collectionName] || [];
				changes.insert[collection.collectionName].push(preDoc);
			} else if (JSON.stringify(desticationDoc) == JSON.stringify(preDoc)) {
				// console.log(`${collection.collectionName} : ${sourceDoc._id} is correct`);
			} else {
				changes.sets.push({
					collectionName : collection.collectionName,
					desticationDoc : desticationDoc,
					sourceDoc      : preDoc
				});

				console.log(`${collection.collectionName} : ${preDoc._id} is existed but have confilict`);
			}
		});

		if (--colLength == 0) {
			createMigrationFile(fromVersion, toVersion);
			console.log(`comparing completed`);
		}
	});

	return Promise.resolve();
};

const withBussinesAppDatabase = () => {
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
						fs.readFileSync(
							`${process.env.reposRoot}/${packagesHandler.npmPackage()
								.version}/${collection.collectionName}.json`
						)
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
							set_properties(desticationDoc, sourceDoc);

							console.log(
								`${collection.collectionName} : ${sourceDoc._id} is existed but have confilict`
							);
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
};

const createMigrationFile = (fromVersion, toVersion) => {
	console.log("createMigrationFile");
	const _insertMany = `
	var mongodb = require("mongodb");
	const fs = require("fs");
	
	exports.up = function(db, next) {

		/**
		 * Apply change for properties that changed
		*/
		${set_properties()}

		/**
		 * Insert New Docs
		*/
		${insert_docs_to_collections()}

		next();
	};

	exports.down = function(db, next) {
		${unset_properties()}
		${remove_docs_from_collections()}

		next();
	};
	`;
	fs.writeFileSync(
		`${process.env.migrationsRoot}/${toVersion.migrationIndex}-${fromVersion.version}_to_${toVersion.version}.js`,
		_insertMany,
		"utf8"
	);
};

const insert_docs_to_collections = () => {
	let res = "";
	for (const collectionName in changes.insert) {
		let docs = changes.insert[collectionName];
		res += `
			db.collection("${collectionName}").insertMany(${JSON.stringify(docs)}, {});
			`;
	}
	return res;
};

const remove_docs_from_collections = () => {
	let res = "";
	for (const collectionName in changes.insert) {
		let docs = changes.insert[collectionName];
		res += `
			db.collection("${collectionName}").remove({_id : { $in : ${JSON.stringify(
			docs.map(doc => doc._id.toString())
		)} }}, { justOne: true });
			`;
	}

	return res;
};
const set_properties = () => {
	res = "";
	changes.sets.forEach(({ collectionName, desticationDoc, sourceDoc }) => {
		const diff = get_diff_of(desticationDoc, sourceDoc);
		console.log(diff);
		diff.filter(d => d.kind === "N").forEach(d => {
			// deepDiff.applyChange(desticationDoc, sourceDoc, d);
			let query = { _id: sourceDoc._id };
			let $set = { $set: { [d.path.join(".")]: d.rhs } };
			res += `
			db.collection("${collectionName}").update(${JSON.stringify(query)}, ${JSON.stringify($set)}, {});
			`;
		});
		diff.filter(d => d.kind === "D").forEach(d => {
			// deepDiff.applyChange(desticationDoc, sourceDoc, d);
			let query = { _id: sourceDoc._id };
			let $unset = { $unset: { [d.path.join(".")]: d.lhs } };
			res += `
			db.collection("${collectionName}").update(${JSON.stringify(query)}, ${JSON.stringify($unset)}, {});
			`;
		});
		diff.filter(d => d.kind !== "N" && d.kind !== "D").forEach(d => {
			// deepDiff.applyChange(desticationDoc, sourceDoc, d);
			let query = { _id: sourceDoc._id };
			let $set = { $set: {} };
			res += `
			/* 
			* Kind	:	${d.kind}
			* Path	:	${d.path.join(".")}
			* lhs	:	${d.lhs}
			* rhs	:	${d.rhs}
			*/
			throw "migration file not implemented!";
			db.collection("${collectionName}").update(${JSON.stringify(query)}, ${JSON.stringify($set)}, {});
			`;
		});
	});
	return res;
};
const unset_properties = () => {
	res = "";
	changes.sets.forEach(({ collectionName, desticationDoc, sourceDoc }) => {
		const diff = get_diff_of(desticationDoc, sourceDoc);
		console.log(diff);
		diff.filter(d => d.kind === "N").forEach(d => {
			// deepDiff.applyChange(desticationDoc, sourceDoc, d);
			let query = { _id: sourceDoc._id };
			let $unset = { $unset: { [d.path.join(".")]: d.rhs } };
			res += `
			var collection = db.collection("${collectionName}");
			collection.update(${JSON.stringify(query)}, ${JSON.stringify($unset)}, {});
			`;
		});
		diff.filter(d => d.kind === "D").forEach(d => {
			// deepDiff.applyChange(desticationDoc, sourceDoc, d);
			let query = { _id: sourceDoc._id };
			let $set = { $set: { [d.path.join(".")]: d.lhs } };
			res += `
			db.collection("${collectionName}").update(${JSON.stringify(query)}, ${JSON.stringify($set)}, {});
			`;
		});
		diff.filter(d => d.kind !== "N" && d.kind !== "D").forEach(d => {
			// deepDiff.applyChange(desticationDoc, sourceDoc, d);
			let query = { _id: sourceDoc._id };
			let $set = { $set: {} };
			res += `
			/* 
			* Kind	:	${d.kind}
			* Path	:	${d.path.join(".")}
			* lhs	:	${d.lhs}
			* rhs	:	${d.rhs}
			*/
			throw "migration file not implemented!";
			db.collection("${collectionName}").update(${JSON.stringify(query)}, ${JSON.stringify($set)}, {});
			`;
		});
	});
	return res;
};
const get_diff_of = (desticationDoc, sourceDoc) => {
	return deepDiff.diff(desticationDoc, sourceDoc);
};

module.exports.create_migration_files = create_migration_files;
