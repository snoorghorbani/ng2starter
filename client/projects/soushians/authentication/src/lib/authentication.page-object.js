exports.AuthenticationModulePageObject = class {

  constructor() {
  }

  goTo() {
    return browser.get('login');
  }
}