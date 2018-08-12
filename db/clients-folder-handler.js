const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const fs = require("fs");
const dotenv = require("dotenv");
var shell = require("shelljs");
var Spinner = require("cli-spinner").Spinner;

const spinner = new Spinner("processing.. %s");
spinner.setSpinnerString("|/-\\");

var packagesHandler = require("./packages-handler");

/**
 * Load environment variables from .env file
 */
dotenv.config({ path: "./db/.env" });

const build_all_packages = () => {
	spinner.start();
	return new Promise((resolve, reject) => {
		shell.cd("../client");
		shell.exec("npm run p_build", (a, b, c, d) => {
			spinner.stop(true);
			if (a == 0) resolve();
			else reject();
		});
	});
};

const link_all_packages = () => {
	return new Promise((resolve, reject) => {
		shell.cd("../client");
		shell.exec("npm run p_link", (a, b, c, d) => {
			if (a == 0) resolve();
			else reject();
		});
	});
};

const publish_all_packages = () => {
	return new Promise((resolve, reject) => {
		shell.cd("../client");
		shell.exec("npm run p_build", (a, b, c, d) => {
			if (a == 0) resolve();
			else reject();
		});
	});
};

module.exports.link_all_packages = link_all_packages;
module.exports.build_all_packages = build_all_packages;
module.exports.publish_all_packages = publish_all_packages;
