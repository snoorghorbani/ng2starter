var protractor = require('protractor');
var cucumber = require('cucumber');
var fs = require('fs');
var seleniumWebdriver = require('selenium-webdriver');

let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

var {AuthenticationModulePageObject} = require("./authentication.page-object")

var steps = function () {
        let authenticationModulePageObject = new AuthenticationModulePageObject();

}

module.exports = steps;