const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const fs = require("fs");
const dotenv = require("dotenv");
const semver = require("semver");
const deepDiff = require("deep-diff");
var glob = require("glob-fs")({ gitignore: true });

let npmPackage = JSON.parse(fs.readFileSync(`../package.json`));
const versionHanler = require("./version.js");
let logFile = JSON.parse(fs.readFileSync(`./logFile.json`));

/**
 * Load environment variables from .env file
 */
dotenv.config({ path: "./.env" });

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

const update_all_packages = () => {
	let version = versionHanler.getNextVersion().version;
	get_all_packages().forEach(file => {
		let package = JSON.parse(fs.readFileSync(file));
		debugger;
		package.version = version;
		fs.writeFileSync(file, JSON.stringify(package), "utf8");
	});
};

module.exports.get_all_packages = get_all_packages;
module.exports.update_all_packages = update_all_packages;
