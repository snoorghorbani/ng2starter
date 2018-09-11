const fs = require("fs");
const path = require("path");

const angular_json_path = "../client/angular.json";

function edit_angular_json({ projectName }) {
    if (!projectName) {
        throw "!!!edit_angular_json!!!"
    }
    const newProjects = {}
    let file = JSON.parse(fs.readFileSync(angular_json_path));

    if (!file.projects["ng2-starter"] || !file.projects["ng2-starter-e2e"] || !file.projects["configs"]) {
        console.error("!!!edit_angular_json!!!")
    }

    newProjects[projectName] = file.projects["ng2-starter"];
    newProjects[`${projectName}-e2e`] = file.projects["ng2-starter-e2e"];
    newProjects["configs"] = file.projects["configs"];
    file.projects = newProjects;

    file.defaultProject = projectName;

    /**
     * replace all ng2-starter
     */
    let stringOfFile = JSON.stringify(file, null, 4);
    stringOfFile = stringOfFile.replace(new RegExp("ng2-starter", 'g'), projectName);

    fs.writeFileSync(angular_json_path, stringOfFile)

}


module.exports = {
    edit_angular_json: edit_angular_json
}