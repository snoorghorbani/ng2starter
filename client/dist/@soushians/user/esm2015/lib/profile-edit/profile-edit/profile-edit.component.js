/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter, Input } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Router } from "@angular/router";
export class ProfileEditComponent {
    /**
     * @param {?} router
     */
    constructor(router) {
        this.router = router;
        this.submited = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} form
     * @return {?}
     */
    editProfile(form) {
        if (!form.valid)
            return;
        this.submited.emit(form.value);
    }
    /**
     * @return {?}
     */
    goback() {
        this.router.navigate([".."]);
    }
}
ProfileEditComponent.decorators = [
    { type: Component, args: [{
                selector: "profile-edit",
                template: "<div fxFlex=\"450px\">\r\n\r\n  \r\n  <ngs-form-view #form [id]=\"formId\" [card]=\"true\" (accept)=\"editProfile(form.formGroup)\" (cancel)=\"goback()\" ></ngs-form-view>\r\n  <!-- <form [formGroup]=\"formGroup\" (ngSubmit)=\"editProfile()\" fxLayout=\"column\">\r\n    <mat-card>\r\n      <mat-card-content>\r\n      </mat-card-content>\r\n      <mat-card-actions align=\"end\">\r\n        <button type=\"button\" routerLink=\"..\" mat-button color=\"primary\">\u0628\u0627\u0632\u06AF\u0634\u062A</button>\r\n        <button type=\"submit\" mat-raised-button color=\"primary\">\u0648\u06CC\u0631\u0627\u06CC\u0634</button>\r\n      </mat-card-actions>\r\n    </mat-card>\r\n  </form> -->\r\n</div>"
            }] }
];
/** @nocollapse */
ProfileEditComponent.ctorParameters = () => [
    { type: Router }
];
ProfileEditComponent.propDecorators = {
    submited: [{ type: Output }],
    userInfo: [{ type: Input }],
    formId: [{ type: Input }],
    roles$: [{ type: Input, args: ["roles",] }],
    groups: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ProfileEditComponent.prototype.submited;
    /** @type {?} */
    ProfileEditComponent.prototype.userInfo;
    /** @type {?} */
    ProfileEditComponent.prototype.formId;
    /** @type {?} */
    ProfileEditComponent.prototype.roles$;
    /** @type {?} */
    ProfileEditComponent.prototype.groups;
    /** @type {?} */
    ProfileEditComponent.prototype.router;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS1lZGl0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvdXNlci8iLCJzb3VyY2VzIjpbImxpYi9wcm9maWxlLWVkaXQvcHJvZmlsZS1lZGl0L3Byb2ZpbGUtZWRpdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJL0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBa0IsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFNekQsTUFBTSxPQUFPLG9CQUFvQjs7OztJQU1oQyxZQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUxsQyxnQkFBcUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztLQUtGOzs7O0lBRXRDLFFBQVEsTUFBSzs7Ozs7SUFDYixXQUFXLENBQUMsSUFBZTtRQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUs7WUFBRSxPQUFPO1FBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUMvQjs7OztJQUNELE1BQU07UUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFFLElBQUksQ0FBRSxDQUFDLENBQUM7S0FDL0I7OztZQW5CRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLHdzQkFBNEM7YUFDNUM7Ozs7WUFMd0IsTUFBTTs7O3VCQU83QixNQUFNO3VCQUNOLEtBQUs7cUJBQ0wsS0FBSztxQkFDTCxLQUFLLFNBQUMsT0FBTztxQkFDYixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgQ29uZmlnTW9kZWwgfSBmcm9tIFwiQHNvdXNoaWFucy9jb25maWdcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcInByb2ZpbGUtZWRpdFwiLFxyXG5cdHRlbXBsYXRlVXJsOiBcIi4vcHJvZmlsZS1lZGl0LmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIFByb2ZpbGVFZGl0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRAT3V0cHV0KCkgc3VibWl0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0QElucHV0KCkgdXNlckluZm86IGFueTtcclxuXHRASW5wdXQoKSBmb3JtSWQ6IHN0cmluZztcclxuXHRASW5wdXQoXCJyb2xlc1wiKSByb2xlcyQ6IE9ic2VydmFibGU8c3RyaW5nW10+O1xyXG5cdEBJbnB1dCgpIGdyb3Vwczogc3RyaW5nW107XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge31cclxuXHJcblx0bmdPbkluaXQoKSB7fVxyXG5cdGVkaXRQcm9maWxlKGZvcm06IEZvcm1Hcm91cCkge1xyXG5cdFx0aWYgKCFmb3JtLnZhbGlkKSByZXR1cm47XHJcblx0XHR0aGlzLnN1Ym1pdGVkLmVtaXQoZm9ybS52YWx1ZSk7XHJcblx0fVxyXG5cdGdvYmFjaygpIHtcclxuXHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFsgXCIuLlwiIF0pO1xyXG5cdH1cclxufVxyXG4iXX0=