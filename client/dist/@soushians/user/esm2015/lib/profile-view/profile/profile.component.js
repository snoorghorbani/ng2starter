/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        Object.keys(information).forEach((/**
         * @param {?} k
         * @return {?}
         */
        k => this.info.push([k, information[k]])));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3VzZXIvIiwic291cmNlcyI6WyJsaWIvcHJvZmlsZS12aWV3L3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3pELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFPdkQsTUFBTSxPQUFPLGdCQUFnQjtJQVM1QjtRQURBLFNBQUksR0FBVSxFQUFFLENBQUM7SUFDRixDQUFDOzs7OztJQVJoQixJQUNJLFdBQVcsQ0FBQyxXQUFzQjtRQUNyQyxJQUFJLENBQUMsV0FBVztZQUFFLE9BQU87UUFFekIsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFFLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQyxFQUFDLENBQUM7SUFDOUUsQ0FBQzs7OztJQUtELFFBQVEsS0FBSSxDQUFDOzs7WUFoQmIsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxjQUFjO2dCQUN4Qix1dUdBQXVDOzthQUV2Qzs7Ozs7MEJBRUMsS0FBSzswQkFNTCxLQUFLOzs7O0lBQU4sdUNBQStDOztJQUMvQyxnQ0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5cclxuaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVscy91c2VyLm1vZGVsXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwidXNlci1wcm9maWxlXCIsXHJcblx0dGVtcGxhdGVVcmw6IFwiLi9wcm9maWxlLmNvbXBvbmVudC5odG1sXCIsXHJcblx0c3R5bGVVcmxzOiBbIFwiLi9wcm9maWxlLmNvbXBvbmVudC5jc3NcIiBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQcm9maWxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRASW5wdXQoKVxyXG5cdHNldCBpbmZvcm1hdGlvbihpbmZvcm1hdGlvbjogVXNlck1vZGVsKSB7XHJcblx0XHRpZiAoIWluZm9ybWF0aW9uKSByZXR1cm47XHJcblxyXG5cdFx0T2JqZWN0LmtleXMoaW5mb3JtYXRpb24pLmZvckVhY2goayA9PiB0aGlzLmluZm8ucHVzaChbIGssIGluZm9ybWF0aW9uW2tdIF0pKTtcclxuXHR9XHJcblx0QElucHV0KCkgZGF0YVN0YXR1cyQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPjtcclxuXHRpbmZvOiBhbnlbXSA9IFtdO1xyXG5cdGNvbnN0cnVjdG9yKCkge31cclxuXHJcblx0bmdPbkluaXQoKSB7fVxyXG59XHJcbiJdfQ==