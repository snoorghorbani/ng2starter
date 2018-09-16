const fs = require("fs");
const rimraf = require("rimraf");
const glob = require("glob-fs")({ gitignore: true });

const PATH_TO_REMOVE = [ "../client/dist", "../client/projects/soushians", "../.git" ];

function remove_unnessesary_files() {
	PATH_TO_REMOVE.forEach(path => rimraf(path, () => {}));
	// glob.readdirSync().forEach(i => rimraf(i, () => { }));
}

module.exports = {
	remove_unnessesary_files
};
