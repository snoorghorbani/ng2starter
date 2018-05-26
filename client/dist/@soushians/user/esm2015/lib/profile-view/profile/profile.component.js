/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
export class ProfileComponent {
    constructor() {
        this.sex$ = new BehaviorSubject('');
        this.identifierType$ = new BehaviorSubject('');
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.information.subscribe(data => {
            if (data == null)
                return;
        });
    }
}
ProfileComponent.decorators = [
    { type: Component, args: [{
                selector: 'user-profile',
                template: `<div fxFlex="450px">
  <mat-card>
    <mat-card-header>
      <mat-card-title>اطلاعات پروفایل</mat-card-title>
    </mat-card-header>
    <mat-card-content *ngIf='dataStatus$ | async'>
      <div class='list-item' fxFlexLayout='row'>
        <p fxFlex='40'>ایمیل</p>
        <p fxFlex='60'>{{(information | async).Email}}</p>
      </div>
      <div class='list-item' fxFlexLayout='row'>
        <p fxFlex='40'>roles</p>
        <p fxFlex='60'>{{(information | async).Roles | json}}</p>
      </div>
      <!-- <div class='list-item' fxFlexLayout='row'>
        <p fxFlex='40'>نام</p>
        <p fxFlex='60'>{{(userInformation | async).FirstName}}</p>
      </div>
      <div class='list-item' fxFlexLayout='row'>
        <p fxFlex='40'>نام خانوادگی</p>
        <p fxFlex='60'>{{(userInformation | async).LastName}}</p>
      </div>
      <div class='list-item' fxFlexLayout='row'>
        <p fxFlex='40'>نام کاربری</p>
        <p fxFlex='60'>{{(userInformation | async).Username}}</p>
      </div>
      <div class='list-item' fxFlexLayout='row'>
        <p fxFlex='40'>تلفن همراه</p>
        <p fxFlex='60'>{{(userInformation | async).MobileNumber | persianNumber}}</p>
      </div>
      <div class='list-item' fxFlexLayout='row'>
        <p fxFlex='40'>جنسیت</p>
        <p fxFlex='60'>{{sex$ | async}}</p>
      </div>
      <div class='list-item' fxFlexLayout='row'>
        <p fxFlex='40'>تاریخ تولد</p>
        <p fxFlex='60'>{{(userInformation | async).Birthdate | persianDate : false}}</p>
      </div>
      <div class='list-item' fxFlexLayout='row'>
        <p fxFlex='40'>ایمیل</p>
        <p fxFlex='60'>{{(userInformation | async).Email}}</p>
      </div>
      <div class='list-item' fxFlexLayout='row'>
        <p fxFlex='40'>{{(identifierType$ | async)}}</p>
        <p fxFlex='60'>{{(userInformation | async).IdentificationNo | persianNumber}}</p>
      </div>
      <div class='list-item' fxFlexLayout='row'>
        <p fxFlex='40'>تاریخ عضویت</p>
        <p fxFlex='60'>{{(userInformation | async).RegisterDate | persianDate}}</p>
      </div> -->
    </mat-card-content>

    <mat-card-actions>
      <button id="profile-edit-button" fxFlex mat-raised-button color="primary" routerLink='edit'>ویرایش</button>
    </mat-card-actions>
  </mat-card>
</div>`,
                styles: [``]
            },] },
];
/** @nocollapse */
ProfileComponent.ctorParameters = () => [];
ProfileComponent.propDecorators = {
    information: [{ type: Input }],
    dataStatus$: [{ type: Input }]
};
function ProfileComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    ProfileComponent.prototype.information;
    /** @type {?} */
    ProfileComponent.prototype.dataStatus$;
    /** @type {?} */
    ProfileComponent.prototype.sex$;
    /** @type {?} */
    ProfileComponent.prototype.identifierType$;
}
//# sourceMappingURL=profile.component.js.map
