exports.ProfileCompomentPageObject = class {

  constructor() {
    this.profileEditButton = element(by.css('#profile-edit-button'));
  }

  goToProfileEditMode() {
    this.profileEditButton.click();
  }

}