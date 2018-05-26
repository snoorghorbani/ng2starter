var protractor = require('protractor');
var cucumber = require('cucumber');
var fs = require('fs');
var seleniumWebdriver = require('selenium-webdriver');

let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;


// cucumber.defineSupportCode(function ({ setDefaultTimeout }) {
//         setDefaultTimeout(60 * 1000);
// });

var { ProfileCompomentPageObject } = require("./profile.page-object")
let profileCompomentPageObject = new ProfileCompomentPageObject();

cucumber.Given(/^go to profile edit mode$/, function (callback) {
        protractor.browser.waitForAngular();
        profileCompomentPageObject.goToProfileEditMode();
        callback();
});