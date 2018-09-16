const fs = require("fs");
const path = require("path");
// const npmModule = require("npm");

const client_packge_path = "../client/package.json";

const packagesPath = [ "../package.json", client_packge_path ];

function rename_package({ projectName, version, gitUrl }) {
	packagesPath.forEach(path => {
		console.log(path);
		let package = JSON.parse(fs.readFileSync(path));
		package.name = projectName;
		package.version = version;
		package.repository.url = gitUrl;

		fs.writeFileSync(path, JSON.stringify(package, null, 4));
	});
}

function clean_client_packge_json() {
	let package = JSON.parse(fs.readFileSync(client_packge_path));

	delete package.scripts.p_link;
	delete package.scripts.p_publish;
	delete package.scripts.p_build;

	fs.writeFileSync(client_packge_path, JSON.stringify(package, null, 4));
}

function install_dependencies() {}

module.exports = {
	rename_package,
	clean_client_packge_json,
	install_dependencies
};
