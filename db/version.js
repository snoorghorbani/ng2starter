const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const fs = require("fs");
const dotenv = require("dotenv");
const semver = require("semver");
const deepDiff = require("deep-diff");
let npmPackage = JSON.parse(fs.readFileSync(`../package.json`));
let logFile = JSON.parse(fs.readFileSync(`./logFile.json`));

/**
 * Load environment variables from .env file
 */
dotenv.config({ path: "./.env" });

const getNewVersion = () => {
	// let version = semver.inc(logFile.currentVersion.version, "prerelease", "beta");
	let version = semver.inc(logFile.currentVersion.version, "minor");

	logFile.currentVersion = {
		version,
		time           : Date.now(),
		migrationIndex : getNextMigrationIndex()
	};
};
const getNextMigrationIndex = () => {
	const preIdx = +logFile.currentVersion.migrationIndex;
	let newIdx = preIdx + 5 + "";

	while (newIdx.length < 4) {
		newIdx = "0" + newIdx;
	}

	return newIdx;
};
const updateLogFile = () => {
	fs.writeFileSync(`./logFile.json`, JSON.stringify(logFile), "utf8");
};
const updatePackagesVersion = () => {
	logFile.versions.push(logFile.currentVersion);
	getNewVersion();
	updateLogFile();
};
const getPreviousVersion = () => logFile.versions.pop();
const getCurrentVersion = () => logFile.currentVersion;
const getNextVersion = () => {
	let version = semver.inc(logFile.currentVersion.version, "minor");

	return (logFile.currentVersion = {
		version,
		time    : Date.now()
	});
};

module.exports.updatePackagesVersion = updatePackagesVersion;
module.exports.getPreviousVersion = getPreviousVersion;
module.exports.getCurrentVersion = getCurrentVersion;
module.exports.getNextVersion = getNextVersion;
