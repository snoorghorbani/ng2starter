require("dotenv").load("./.env");

var Angularcli = require("./angular-cli");
var tsconfig = require("./tsconfig-handler");
var Database = require("./database");
var Files = require("./files");
var Npm = require("./npm-handler");

Npm.install_dependencies();
Npm.rename_package(process.env);
Npm.clean_client_packge_json();
Angularcli.edit_angular_json(process.env);
tsconfig.edit_tsconfig();
Files.remove_unnessesary_files();
Database.clone_database();
