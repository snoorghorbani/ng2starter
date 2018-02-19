var {BasePageObject} = require("../base.page-object")

exports.AppModulePageObject = class extends BasePageObject {

        constructor() {
                super()
        }

        goTo(route) {
                return browser.get(route);
        }
}