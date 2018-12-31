/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from "@angular/core";
import { UserModel } from "../../models/user.model";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
export class ProfileComponent {
    constructor() {
        this.info = [];
    }
    /**
     * @param {?} information
     * @return {?}
     */
    set information(information) {
        if (!information)
            return;
        Object.keys(information).forEach(k => this.info.push([k, information[k]]));
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
ProfileComponent.decorators = [
    { type: Component, args: [{
                selector: "user-profile",
                template: "<div fxFlex=\"450px\">\r\n  <router-outlet name=\"ngs-user-profile-view\"></router-outlet>\r\n  <router-outlet></router-outlet>\r\n  <!-- <mat-card>\r\n    <mat-card-header>\r\n      <mat-card-title>\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u067E\u0631\u0648\u0641\u0627\u06CC\u0644</mat-card-title>\r\n    </mat-card-header>\r\n    <mat-card-content *ngIf='dataStatus$ | async'>\r\n        <div class='list-item' fxFlexLayout='row' *ngFor=\"let item of info\">\r\n            <p fxFlex='40'>{{item[0]}}</p>\r\n            <p fxFlex='60'>{{item[1]}}</p>\r\n        </div>\r\n     \r\n    </mat-card-content>\r\n\r\n    <mat-card-actions align=\"end\">\r\n      <button mat-button color=\"primary\" routerLink='..'>\u0628\u0627\u0632\u06AF\u0634\u062A</button>\r\n      <button mat-raised-button color=\"primary\" routerLink='edit'>\u0648\u06CC\u0631\u0627\u06CC\u0634</button>\r\n    </mat-card-actions>\r\n  </mat-card> -->\r\n</div>\r\n\r\n\r\n\r\n<!-- <div class='list-item' fxFlexLayout='row'>\r\n        <p fxFlex='40'>\u0627\u06CC\u0645\u06CC\u0644</p>\r\n        <p fxFlex='60'>{{(information | async).Email}}</p>\r\n      </div>\r\n      <div class='list-item' fxFlexLayout='row'>\r\n        <p fxFlex='40'>roles</p>\r\n        <p fxFlex='60'>{{(information | async).Roles | json}}</p>\r\n      </div> -->\r\n<!-- <div class='list-item' fxFlexLayout='row'>\r\n        <p fxFlex='40'>\u0646\u0627\u0645</p>\r\n        <p fxFlex='60'>{{(userInformation | async).FirstName}}</p>\r\n      </div>\r\n      <div class='list-item' fxFlexLayout='row'>\r\n        <p fxFlex='40'>\u0646\u0627\u0645 \u062E\u0627\u0646\u0648\u0627\u062F\u06AF\u06CC</p>\r\n        <p fxFlex='60'>{{(userInformation | async).LastName}}</p>\r\n      </div>\r\n      <div class='list-item' fxFlexLayout='row'>\r\n        <p fxFlex='40'>\u0646\u0627\u0645 \u06A9\u0627\u0631\u0628\u0631\u06CC</p>\r\n        <p fxFlex='60'>{{(userInformation | async).Username}}</p>\r\n      </div>\r\n      <div class='list-item' fxFlexLayout='row'>\r\n        <p fxFlex='40'>\u062A\u0644\u0641\u0646 \u0647\u0645\u0631\u0627\u0647</p>\r\n        <p fxFlex='60'>{{(userInformation | async).MobileNumber | persianNumber}}</p>\r\n      </div>\r\n      <div class='list-item' fxFlexLayout='row'>\r\n        <p fxFlex='40'>\u062C\u0646\u0633\u06CC\u062A</p>\r\n        <p fxFlex='60'>{{sex$ | async}}</p>\r\n      </div>\r\n      <div class='list-item' fxFlexLayout='row'>\r\n        <p fxFlex='40'>\u062A\u0627\u0631\u06CC\u062E \u062A\u0648\u0644\u062F</p>\r\n        <p fxFlex='60'>{{(userInformation | async).Birthdate | persianDate : false}}</p>\r\n      </div>\r\n      <div class='list-item' fxFlexLayout='row'>\r\n        <p fxFlex='40'>\u0627\u06CC\u0645\u06CC\u0644</p>\r\n        <p fxFlex='60'>{{(userInformation | async).Email}}</p>\r\n      </div>\r\n      <div class='list-item' fxFlexLayout='row'>\r\n        <p fxFlex='40'>{{(identifierType$ | async)}}</p>\r\n        <p fxFlex='60'>{{(userInformation | async).IdentificationNo | persianNumber}}</p>\r\n      </div>\r\n      <div class='list-item' fxFlexLayout='row'>\r\n        <p fxFlex='40'>\u062A\u0627\u0631\u06CC\u062E \u0639\u0636\u0648\u06CC\u062A</p>\r\n        <p fxFlex='60'>{{(userInformation | async).RegisterDate | persianDate}}</p>\r\n      </div> -->",
                styles: [""]
            }] }
];
/** @nocollapse */
ProfileComponent.ctorParameters = () => [];
ProfileComponent.propDecorators = {
    information: [{ type: Input }],
    dataStatus$: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ProfileComponent.prototype.dataStatus$;
    /** @type {?} */
    ProfileComponent.prototype.info;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3VzZXIvIiwic291cmNlcyI6WyJsaWIvcHJvZmlsZS12aWV3L3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3pELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFPdkQsTUFBTSxPQUFPLGdCQUFnQjtJQVM1QjtRQURBLFlBQWMsRUFBRSxDQUFDO0tBQ0Q7Ozs7O0lBUmhCLElBQ0ksV0FBVyxDQUFDLFdBQXNCO1FBQ3JDLElBQUksQ0FBQyxXQUFXO1lBQUUsT0FBTztRQUV6QixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUUsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDLENBQUMsQ0FBQztLQUM3RTs7OztJQUtELFFBQVEsTUFBSzs7O1lBaEJiLFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsY0FBYztnQkFDeEIsdXVHQUF1Qzs7YUFFdkM7Ozs7OzBCQUVDLEtBQUs7MEJBTUwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcblxyXG5pbXBvcnQgeyBVc2VyTW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL3VzZXIubW9kZWxcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJ1c2VyLXByb2ZpbGVcIixcclxuXHR0ZW1wbGF0ZVVybDogXCIuL3Byb2ZpbGUuY29tcG9uZW50Lmh0bWxcIixcclxuXHRzdHlsZVVybHM6IFsgXCIuL3Byb2ZpbGUuY29tcG9uZW50LmNzc1wiIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFByb2ZpbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdEBJbnB1dCgpXHJcblx0c2V0IGluZm9ybWF0aW9uKGluZm9ybWF0aW9uOiBVc2VyTW9kZWwpIHtcclxuXHRcdGlmICghaW5mb3JtYXRpb24pIHJldHVybjtcclxuXHJcblx0XHRPYmplY3Qua2V5cyhpbmZvcm1hdGlvbikuZm9yRWFjaChrID0+IHRoaXMuaW5mby5wdXNoKFsgaywgaW5mb3JtYXRpb25ba10gXSkpO1xyXG5cdH1cclxuXHRASW5wdXQoKSBkYXRhU3RhdHVzJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+O1xyXG5cdGluZm86IGFueVtdID0gW107XHJcblx0Y29uc3RydWN0b3IoKSB7fVxyXG5cclxuXHRuZ09uSW5pdCgpIHt9XHJcbn1cclxuIl19