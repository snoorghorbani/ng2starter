by.addLocator('formControlName', function(value, opt_parentElement, opt_rootSelector) {
  var using = opt_parentElement || document;

  console.log('-------------------------')
  console.log('[formcontrolname="' + value +'"]')
  return using.querySelectorAll('[formcontrolname="' + value +'"]');
});

exports.ConfigEditCompomentPageObject = class {
  constructor() {
    this._name = element(by.css('[ng-reflect-name="Name"]'));

    this._back = element(by.css('button[routerLink="/dashboard"]'));
    this.submit = element(by.css('button[type="submit"]'));


  }

  set Name(value) {
    return this._name.sendKeys(value);
  }
  edit() {
    this.submit.click();
  }
  back() {
    this._back.click();
  }

}
