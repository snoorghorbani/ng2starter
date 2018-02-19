var protractor = require('protractor');
var cucumber = require('cucumber');
var fs = require('fs');
var seleniumWebdriver = require('selenium-webdriver');

let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

var { AppModulePageObject } = require('./app-module.page-object');

let appModulePageObject = new AppModulePageObject();

cucumber.Given(/^I am in "(.*?)" page$/, { timeout: 90 * 1000 }, function (page, callback) {
        appModulePageObject.goTo(page).then(function () {
                callback()
        });
});