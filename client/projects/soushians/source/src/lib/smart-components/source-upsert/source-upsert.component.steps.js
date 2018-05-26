var protractor = require('protractor');
var cucumber = require('cucumber');
var fs = require('fs');
var seleniumWebdriver = require('selenium-webdriver');

let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

var { ConfigEditCompomentPageObject } = require("./config-edit.component.page-object")
//var authorization = require('../authorization');

let configEditCompomentPageObject = new ConfigEditCompomentPageObject();


cucumber.Given(/^the user enter value "(.*?)" for field "(.*?)"$/, function (value, field, callback) {
        configEditCompomentPageObject[field] = value;
        callback();
});
cucumber.When(/^submitting the config-edit form$/, function (callback) {
        callback();
});

cucumber.Then(/^the signin form is validated "(.*)"$/, function (valid, callback) {
        callback();
});
