const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const fs = require("fs");
const dotenv = require("dotenv");
const semver = require("semver");
const deepDiff = require("deep-diff");

let logFile = JSON.parse(fs.readFileSync(`./logFile.json`));

/**
 * Load environment variables from .env file
 */
dotenv.config({ path: "./.env" });

const getNextMigrationIndex = () => {
	const preIdx = +logFile.currentVersion.migrationIndex;
	let newIdx = preIdx + 5 + "";

	while (newIdx.length < 4) {
		newIdx = "0" + newIdx;
	}

	return newIdx;
};
const update_log_file = () => {
	logFile.versions.push(logFile.currentVersion);
	logFile.currentVersion = getNextVersion();
	fs.writeFileSync(`./logFile.json`, JSON.stringify(logFile), "utf8");
};
const getPreviousVersion = () => logFile.versions.concat().pop();
const getCurrentVersion = () => logFile.currentVersion;
const getNextVersion = () => ({
	version        : semver.inc(logFile.currentVersion.version, "minor"),
	time           : Date.now(),
	migrationIndex : getNextMigrationIndex()
});

module.exports.update_log_file = update_log_file;
module.exports.getPreviousVersion = getPreviousVersion;
module.exports.getCurrentVersion = getCurrentVersion;
module.exports.getNextVersion = getNextVersion;
