const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const fs = require("fs");
const dotenv = require("dotenv");

let npmPackage = JSON.parse(fs.readFileSync(`../package.json`));

const version = require("./version.js");
const compare = require("./compare.js");
const packgeHandler = require("./packages-handler");

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
dotenv.config({ path: "./.env" });

// get new version
const nextVersion = version.getNextVersion();
// get update package.json s
packgeHandler.update_all_packages();
// backup from database
// compare
// create migration files
compare.create_migration_files();
