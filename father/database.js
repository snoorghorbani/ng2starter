const MongoClient = require("mongodb").MongoClient;
const fs = require("fs");
const ObjectId = require("bson").ObjectId;

var versionHandler = require("../db/version");
var backupHandler = require("../db/dobackup");

function clone_database() {
	// Use connect method to connect to the server
	MongoClient.connect(process.env.MONGODB_URI, {
		useNewUrlParser: true
	}).then(function (client) {
		/**
         * find latest version of starter
         */
		const version = versionHandler.getCurrentVersion().version;

		/**
         * read database folder of latest version
         */
		const collections = backupHandler.getBackupVersionOf(version);

		/**
         * create database
         */
		const db = client.db(process.env.projectName);

		/**
         * loop on collection files and insert to created database 
         */
		for (const name in collections) {
			if (collections.hasOwnProperty(name)) {
				const documents = collections[name];
				db
					.createCollection(name)
					.then(collection => {
						if (documents.length == 0) return;
						documents.forEach(i => {
							i._id = ObjectId(i._id)
						});
						collection.insertMany(documents, {});
					})
					.catch(err => {
						debugger;
					});
			}
			console.log("***************************");
			console.log("*********** DONE **********");
			console.log("***************************");
		}
	});
}

module.exports = {
	clone_database
};
