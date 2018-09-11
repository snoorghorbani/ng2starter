const fs = require("fs");
const tsconfig_path = "../client/tsconfig.json";
const jsonminify = require("jsonminify");

function edit_tsconfig() {
    const newPath = {}
    /**
     * read and parse file tsconfig.js 
     */
    let fileAsString = fs.readFileSync(tsconfig_path).toString()
    fileAsString = jsonminify(fileAsString);

    file = JSON.parse(fileAsString);

    /**
     * update file content
     */
    newPath["configs"] = file.compilerOptions.paths["configs"];
    newPath["socket.io-client"] = file.compilerOptions.paths["socket.io-client"];

    file.compilerOptions.paths = newPath

    fs.writeFileSync(tsconfig_path, JSON.stringify(file, null, 4))
}

module.exports = {
    edit_tsconfig: edit_tsconfig
}