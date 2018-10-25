const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const fs = require("fs");
const dotenv = require("dotenv");

const version = require("./version.js");
const compare = require("./compare.js");
const packgeHandler = require("./packages-handler");
const backupHandler = require("./dobackup");
const clientsFolderHandler = require("./clients-folder-handler");

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
dotenv.config({ path: "./.env" });

/**
  * get new version
  */
const fromVersion = version.getCurrentVersion();
const toVersion = version.getNextVersion();
/**
 * get update package.json s
 */
packgeHandler.update_all_packages(toVersion.version).then(() => {
	console.log("***********************************");
	console.log("Successfully update all packge.json");
	/**
	 * backup from database
	 */
	backupHandler.backup(toVersion.version).then(() => {
		console.log("***********************************");
		console.log(`Successfully backup version of ${toVersion.version} from database`);
		/**
		 * compare
		 */

		/**
		 * create migration files
		 */
		compare.create_migration_files(fromVersion, toVersion).then(() => {
			console.log("***********************************");
			console.log(
				`Successfully create ${toVersion.version} to ${fromVersion.version} migration file of database`
			);
			/**
			 * save log file
			 */
			version.update_log_file();
			console.log("***********************************");
			console.log(`Successfully update migration logFile.json`);

			/**
			 * build all client packages
			 */
			clientsFolderHandler
				.build_all_packages()
				.catch(err => {
					debugger;
					console.log("***********************************");
					console.log(err);
					console.log(`Failed on build client packages`);
				})
				.then(() => {
					debugger;
					console.log("***********************************");
					console.log(`Successfully build client packages`);

					/**
					 * link all client packages
					 */
					clientsFolderHandler
						.link_all_packages()
						.then(() => {
							debugger;
							console.log("***********************************");
							console.log(`Successfully link client packages`);
						})
						.catch(() => {
							debugger;
							console.log("***********************************");
							console.log(`Failed on link client packages`);
						});

					/**
					 * publish all client packages
					 */
					clientsFolderHandler
						.publish_all_packages()
						.then(() => {
							debugger;
							console.log("***********************************");
							console.log(`Successfully publish client packages`);
						})
						.catch(() => {
							debugger;
							console.log("***********************************");
							console.log(`Failed on publish client packages`);
						});
				});
		});
	});
});
