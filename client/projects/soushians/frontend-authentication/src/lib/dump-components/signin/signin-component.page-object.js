exports.SigninCompomentPageObject = class {

    constructor() {
        this._username = element(by.css('[formControlName="Username"]'));
        this._password = element(by.css('[formControlName="Password"]'));
        this.submit = element(by.css('button[type="submit"]'));
    }

  set username(value) {
    return this._username.sendKeys(value);
  }
  set password(value) {
    return this._password.sendKeys(value);
  }
  authenticate() {
    this.submit.click();
  }

}