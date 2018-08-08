const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const fs = require("fs");
const dotenv = require("dotenv");

const version = require("./version.js");
const compare = require("./compare.js");
const packgeHandler = require("./packages-handler");
const backupHandler = require("./dobackup");

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
dotenv.config({ path: "./.env" });

/**
  * get new version
  */
const toVersion = version.getNextVersion();
const fromVersion = version.getCurrentVersion();
/**
 * get update package.json s
 */
packgeHandler.update_all_packages(toVersion.version);
/**
 * backup from database
 */
backupHandler.backup(toVersion.version);
/**
 * compare
 */

/**
 * create migration files
 */
compare.create_migration_files(fromVersion, toVersion);
/**
 * save log file
 */
version.update_log_file();
