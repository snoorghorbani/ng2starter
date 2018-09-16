const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const fs = require("fs");
const dotenv = require("dotenv");
const semver = require("semver");
const deepDiff = require("deep-diff");
const glob = require("glob-fs")({ gitignore: true });

const versionHanler = require("./version.js");
let logFile = JSON.parse(fs.readFileSync(`./logFile.json`));

/**
 * Load environment variables from .env file
 */
dotenv.config({ path: "./.env" });

const npmPackage = () => {
	return Object.assign({}, JSON.parse(fs.readFileSync(`../package.json`)));
};

const get_all_packages = () => {
	return glob
		.use(file => {
			if (/dist/.test(file.path)) {
				file.exclude = true;
			}
			return file;
		})
		.readdirSync("../**/package.json");
};

const update_all_packages = version => {
	get_all_packages().forEach(file => {
		let package = JSON.parse(fs.readFileSync(file));
		package.version = version;
		fs.writeFileSync(file, JSON.stringify(package, null, 4), "utf8");
	});
	return Promise.resolve();
};

module.exports.npmPackage = npmPackage;
module.exports.get_all_packages = get_all_packages;
module.exports.update_all_packages = update_all_packages;
