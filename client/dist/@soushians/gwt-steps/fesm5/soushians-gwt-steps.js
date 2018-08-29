import { Component, NgModule } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { map, filter } from 'rxjs/operators';
import { UserFacadeService, getAccountInfo } from '@soushians/user';
import { GwtStepTypes } from '@soushians/rule';
import { BehaviorSubject, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule, MatSnackBarModule, MatIconModule, MatButtonModule, MatCardModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatTabsModule, MatRadioModule, MatSlideToggleModule, MatDividerModule, MatCheckboxModule, MatTableModule, MatAutocompleteModule } from '@angular/material';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var GivenUserIsAuthenticatedStepComponent = /** @class */ (function () {
    function GivenUserIsAuthenticatedStepComponent() {
        this.formGroup = new FormGroup({
            role: new FormControl("")
        });
    }
    Object.defineProperty(GivenUserIsAuthenticatedStepComponent.prototype, "params", {
        get: /**
         * @return {?}
         */
        function () {
            return this.formGroup.value;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.formGroup.patchValue(value);
        },
        enumerable: true,
        configurable: true
    });
    GivenUserIsAuthenticatedStepComponent.decorators = [
        { type: Component, args: [{
                    template: "<mat-card class=\"step\" fxLayout=\"row\" fxLayoutGap=\"25px\" fxLayoutAlign=\"center end\">\n  <div class=\"step-text\" fxFlex=\"nogrow\">\n    <span class=\"given\">\n        \u0647\u0646\u06AF\u0627\u0645\u06CC \u06A9\u0647\n    </span>\n    \u06A9\u0627\u0631\u0628\u0631 \u0627\u062D\u0631\u0627\u0632 \u0647\u0648\u06CC\u062A \u06A9\u0631\u062F\u0647 \u0627\u0633\u062A\n    </div>\n</mat-card>",
                    styles: [":host{width:100%}"]
                },] },
    ];
    /** @nocollapse */
    GivenUserIsAuthenticatedStepComponent.ctorParameters = function () { return []; };
    return GivenUserIsAuthenticatedStepComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var IfUserIsAuthenticatedGwtGivenStep = /** @class */ (function () {
    function IfUserIsAuthenticatedGwtGivenStep(injector) {
        this.injector = injector;
        this.stepComponent = GivenUserIsAuthenticatedStepComponent;
        debugger;
        this.id = "if_user_is_authenticated";
        this.name = "if user is authenticated";
        this.description = "هنگامی که کاربر احراز هویت کرده است";
        this.type = GwtStepTypes.Given;
        this.store = this.injector.get(Store);
        this.userFacadeService = this.injector.get(UserFacadeService);
    }
    /**
     * @param {?} params
     * @param {?} elementRef
     * @return {?}
     */
    IfUserIsAuthenticatedGwtGivenStep.prototype.interperator = /**
     * @param {?} params
     * @param {?} elementRef
     * @return {?}
     */
    function (params, elementRef) {
        return this.userFacadeService.getDisplayName().pipe(map(function (userDispalyName) {
            debugger;
            return !!userDispalyName;
        }));
    };
    return IfUserIsAuthenticatedGwtGivenStep;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var IfUserHaveRoleGwtGivenStepComponent = /** @class */ (function () {
    function IfUserHaveRoleGwtGivenStepComponent() {
        this.formGroup = new FormGroup({
            role: new FormControl("")
        });
    }
    Object.defineProperty(IfUserHaveRoleGwtGivenStepComponent.prototype, "params", {
        get: /**
         * @return {?}
         */
        function () {
            return this.formGroup.value;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.formGroup.patchValue(value);
        },
        enumerable: true,
        configurable: true
    });
    IfUserHaveRoleGwtGivenStepComponent.decorators = [
        { type: Component, args: [{
                    template: "<mat-card class=\"step\" fxLayout=\"row\" fxLayoutGap=\"25px\" fxLayoutAlign=\"center end\">\n  <div class=\"step-text\" fxFlex=\"nogrow\">\n    <span class=\"given\">\n        \u0647\u0646\u06AF\u0627\u0645\u06CC \u06A9\u0647\n    </span>\n    \u06A9\u0627\u0631\u0628\u0631 \u0646\u0642\u0634\n    </div>\n  <div fxFlex [formGroup]=\"formGroup\">\n    <mat-form-field>\n      <input matInput placeholder=\"\u062F\u0633\u062A\u0631\u0633\u06CC\" formControlName=\"role\">\n    </mat-form-field>\n  </div>\n  <div class=\"step-text\" fxFlex=\"nogrow\">\u062F\u0627\u0631\u062F</div>\n</mat-card>",
                    styles: [":host{width:100%}"]
                },] },
    ];
    /** @nocollapse */
    IfUserHaveRoleGwtGivenStepComponent.ctorParameters = function () { return []; };
    return IfUserHaveRoleGwtGivenStepComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var IfUserHaveRoleGwtGivenStep = /** @class */ (function () {
    function IfUserHaveRoleGwtGivenStep(injector) {
        this.injector = injector;
        this.stepComponent = IfUserHaveRoleGwtGivenStepComponent;
        this.id = "if_user_have_role_given_step";
        this.name = "if user have role given step";
        this.description = "هنگامی که کاربر نقش .. را ندارد";
        this.type = GwtStepTypes.Given;
        this.store = this.injector.get(Store);
    }
    /**
     * @param {?} params
     * @param {?} elementRef
     * @return {?}
     */
    IfUserHaveRoleGwtGivenStep.prototype.interperator = /**
     * @param {?} params
     * @param {?} elementRef
     * @return {?}
     */
    function (params, elementRef) {
        var /** @type {?} */ user$ = this.store
            .select(getAccountInfo)
            .pipe(filter(function (user) { return !!user.Roles; }), filter(function (user) { return user.Roles.length > 0; }));
        return user$.pipe(map(function (user) {
            debugger;
            return !(/** @type {?} */ (user)).Roles.map(function (item) { return item.toLowerCase(); }).includes(params.role.toLowerCase());
        }));
    };
    return IfUserHaveRoleGwtGivenStep;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var GwtThenAuthorizeStepComponent = /** @class */ (function () {
    function GwtThenAuthorizeStepComponent() {
        var _this = this;
        this.params$ = new BehaviorSubject(/** @type {?} */ ({}));
        this.formGroup = this._create_formGroup();
        this.params$.subscribe(function (params) { return _this.formGroup.patchValue(params); });
    }
    Object.defineProperty(GwtThenAuthorizeStepComponent.prototype, "params", {
        get: /**
         * @return {?}
         */
        function () {
            return Object.assign({}, this.formGroup.value);
        },
        set: /**
         * @param {?} params
         * @return {?}
         */
        function (params) {
            if (this.formGroup) {
                this.formGroup.patchValue(params);
            }
            this.params$.next(params);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * private methods
     */
    /**
     * private methods
     * @return {?}
     */
    GwtThenAuthorizeStepComponent.prototype._create_formGroup = /**
     * private methods
     * @return {?}
     */
    function () {
        return new FormGroup({
            verb: new FormControl("hidden")
        });
    };
    GwtThenAuthorizeStepComponent.decorators = [
        { type: Component, args: [{
                    template: "<mat-card class=\"step\" fxLayout=\"row\" fxLayoutGap=\"5px\" fxLayoutAlign=\"start end\" [formGroup]=\"formGroup\">\n  <div fxFlex=\"0 0 auto\" class=\"step-text then\">\n    \u0622\u0646\u06AF\u0627\u0647\n  </div>\n  <div fxFlex=\"0 0 auto\" class=\"step-text\">\n    \u0627\u06CC\u0646 \u0628\u062E\u0634 \u0642\u0627\u0628\u0644 \u0646\u0645\u0627\u06CC\u0634\n  </div>\n  <div fxFlex=\"nogrow\">\n    <mat-form-field fxFlex=\"nogrow\">\n      <mat-select formControlName=\"verb\">\n        <mat-option value=\"visible\">\u0628\u0627\u0634\u062F</mat-option>\n        <mat-option value=\"hidden\">\u0646\u0628\u0627\u0634\u062F</mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n</mat-card>",
                    styles: [":host{width:100%}"]
                },] },
    ];
    /** @nocollapse */
    GwtThenAuthorizeStepComponent.ctorParameters = function () { return []; };
    return GwtThenAuthorizeStepComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var GwtThenAuthorizeStep = /** @class */ (function () {
    function GwtThenAuthorizeStep(injector) {
        this.injector = injector;
        this.stepComponent = GwtThenAuthorizeStepComponent;
        this.id = "authorize_and_show_block";
        this.name = "authorize and show block";
        this.description = "آنگاه این بخش قابل نمایش است";
        this.type = GwtStepTypes.Then;
        this.store = this.injector.get(Store);
    }
    /**
     * @param {?} params
     * @param {?} elementRef
     * @return {?}
     */
    GwtThenAuthorizeStep.prototype.interperator = /**
     * @param {?} params
     * @param {?} elementRef
     * @return {?}
     */
    function (params, elementRef) {
        debugger;
        var /** @type {?} */ display = (params.verb === "visible") ? "block" : "none";
        elementRef.nativeElement.style.display = display;
        return of(true);
    };
    return GwtThenAuthorizeStep;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var GwtStepsModule = /** @class */ (function () {
    function GwtStepsModule() {
    }
    GwtStepsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        HttpClientModule,
                        FormsModule,
                        RouterModule,
                        CommonModule,
                        MatExpansionModule,
                        MatSnackBarModule,
                        MatIconModule,
                        MatButtonModule,
                        MatCardModule,
                        MatCheckboxModule,
                        MatTableModule,
                        MatSelectModule,
                        MatAutocompleteModule,
                        MatInputModule,
                        MatFormFieldModule,
                        MatTabsModule,
                        MatDividerModule,
                        FlexLayoutModule,
                        MatRadioModule,
                        MatSlideToggleModule,
                        ReactiveFormsModule,
                        BrowserAnimationsModule
                    ],
                    declarations: [
                        GwtThenAuthorizeStepComponent,
                        IfUserHaveRoleGwtGivenStepComponent,
                        GivenUserIsAuthenticatedStepComponent
                    ],
                    entryComponents: [
                        GwtThenAuthorizeStepComponent,
                        IfUserHaveRoleGwtGivenStepComponent,
                        GivenUserIsAuthenticatedStepComponent
                    ],
                    exports: []
                },] },
    ];
    return GwtStepsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { IfUserIsAuthenticatedGwtGivenStep, IfUserHaveRoleGwtGivenStep, GwtThenAuthorizeStep, GwtStepsModule, GivenUserIsAuthenticatedStepComponent as ɵc, IfUserHaveRoleGwtGivenStepComponent as ɵb, GwtThenAuthorizeStepComponent as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLWd3dC1zdGVwcy5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQHNvdXNoaWFucy9nd3Qtc3RlcHMvbGliL2dpdmVuLXVzZXItaXMtYXV0aGVudGljYXRlZC9zdGVwLWNvbXBvbmVudC9naXZlbi11c2VyLWlzLWF1dGhlbnRpY2F0ZWQtc3RlcC5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZ3d0LXN0ZXBzL2xpYi9naXZlbi11c2VyLWlzLWF1dGhlbnRpY2F0ZWQvdXNlci1pcy1hdXRoZW50aWNhdGVkLmd3dC1naXZlbi1zdGVwLnRzIiwibmc6Ly9Ac291c2hpYW5zL2d3dC1zdGVwcy9saWIvaWYtdXNlci1oYXZlLXJvbGUvc3RlcC1jb21wb25lbnQvb3BlcmF0aW9uLWd3dC1zdGVwLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9nd3Qtc3RlcHMvbGliL2lmLXVzZXItaGF2ZS1yb2xlL3VzZXItaGF2ZS1yb2xlLmd3dC1naXZlbi1zdGVwLnRzIiwibmc6Ly9Ac291c2hpYW5zL2d3dC1zdGVwcy9saWIvdGhlbi1hdXRob3JpemUvc3RlcC1jb21wb25lbnQvZ3d0LXRoZW4tYXV0aG9yaXplLXN0ZXAuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2d3dC1zdGVwcy9saWIvdGhlbi1hdXRob3JpemUvYXV0aG9yaXplLmd3dC10aGVuLXN0ZXAudHMiLCJuZzovL0Bzb3VzaGlhbnMvZ3d0LXN0ZXBzL2xpYi9nd3Qtc3RlcHMubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuaW1wb3J0IHsgR3d0R2l2ZW5TdGVwVWkgfSBmcm9tIFwiQHNvdXNoaWFucy9ydWxlXCI7XHJcbmltcG9ydCB7IFVzZXJJc0F1dGhlbnRpY2F0ZWRHd3RHaXZlblN0ZXBQYXJhbXMgfSBmcm9tIFwiLi4vdXNlci1pcy1hdXRoZW50aWNhdGVkLmd3dC1naXZlbi1zdGVwLXBhcmFtc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0dGVtcGxhdGU6IGA8bWF0LWNhcmQgY2xhc3M9XCJzdGVwXCIgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEdhcD1cIjI1cHhcIiBmeExheW91dEFsaWduPVwiY2VudGVyIGVuZFwiPlxyXG4gIDxkaXYgY2xhc3M9XCJzdGVwLXRleHRcIiBmeEZsZXg9XCJub2dyb3dcIj5cclxuICAgIDxzcGFuIGNsYXNzPVwiZ2l2ZW5cIj5cclxuICAgICAgICDDmcKHw5nChsOawq/DmMKnw5nChcObwowgw5rCqcOZwodcclxuICAgIDwvc3Bhbj5cclxuICAgIMOawqnDmMKnw5jCscOYwqjDmMKxIMOYwqfDmMKtw5jCscOYwqfDmMKyIMOZwofDmcKIw5vCjMOYwqogw5rCqcOYwrHDmMKvw5nChyDDmMKnw5jCs8OYwqpcclxuICAgIDwvZGl2PlxyXG48L21hdC1jYXJkPmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e3dpZHRoOjEwMCV9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEdpdmVuVXNlcklzQXV0aGVudGljYXRlZFN0ZXBDb21wb25lbnQgaW1wbGVtZW50cyBHd3RHaXZlblN0ZXBVaTxVc2VySXNBdXRoZW50aWNhdGVkR3d0R2l2ZW5TdGVwUGFyYW1zPiB7XHJcblx0Zm9ybUdyb3VwOiBGb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdHJvbGU6IG5ldyBGb3JtQ29udHJvbChcIlwiKVxyXG5cdH0pO1xyXG5cdHNldCBwYXJhbXModmFsdWUpIHtcclxuXHRcdHRoaXMuZm9ybUdyb3VwLnBhdGNoVmFsdWUodmFsdWUpO1xyXG5cdH1cclxuXHRnZXQgcGFyYW1zKCk6IFVzZXJJc0F1dGhlbnRpY2F0ZWRHd3RHaXZlblN0ZXBQYXJhbXMge1xyXG5cdFx0cmV0dXJuIHRoaXMuZm9ybUdyb3VwLnZhbHVlO1xyXG5cdH1cclxuXHRjb25zdHJ1Y3RvcigpIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0b3IsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBtYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5pbXBvcnQgeyBnZXRBY2NvdW50SW5mbywgVXNlckZhY2FkZVNlcnZpY2UgfSBmcm9tIFwiQHNvdXNoaWFucy91c2VyXCI7XHJcbmltcG9ydCB7IEd3dFN0ZXAsIEd3dFN0ZXBUeXBlcyB9IGZyb20gXCJAc291c2hpYW5zL3J1bGVcIjtcclxuXHJcbmltcG9ydCB7IFVzZXJJc0F1dGhlbnRpY2F0ZWRHd3RHaXZlblN0ZXBQYXJhbXMgfSBmcm9tIFwiLi91c2VyLWlzLWF1dGhlbnRpY2F0ZWQuZ3d0LWdpdmVuLXN0ZXAtcGFyYW1zXCI7XHJcbmltcG9ydCB7IEdpdmVuVXNlcklzQXV0aGVudGljYXRlZFN0ZXBDb21wb25lbnQgfSBmcm9tIFwiLi9zdGVwLWNvbXBvbmVudC9naXZlbi11c2VyLWlzLWF1dGhlbnRpY2F0ZWQtc3RlcC5jb21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBJZlVzZXJJc0F1dGhlbnRpY2F0ZWRHd3RHaXZlblN0ZXAgaW1wbGVtZW50cyBHd3RTdGVwPFVzZXJJc0F1dGhlbnRpY2F0ZWRHd3RHaXZlblN0ZXBQYXJhbXM+IHtcclxuXHRpZDogc3RyaW5nO1xyXG5cdG5hbWU6IHN0cmluZztcclxuXHRvcHBvc2l0ZTogYm9vbGVhbjtcclxuXHRkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG5cdHR5cGU6IEd3dFN0ZXBUeXBlcztcclxuXHRwYXJhbXM6IHsgcm9sZTogXCJcIiB9O1xyXG5cdHN0ZXBDb21wb25lbnQgPSBHaXZlblVzZXJJc0F1dGhlbnRpY2F0ZWRTdGVwQ29tcG9uZW50O1xyXG5cdHN0b3JlOiBTdG9yZTxhbnk+O1xyXG5cdHVzZXJGYWNhZGVTZXJ2aWNlOiBVc2VyRmFjYWRlU2VydmljZTtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcblx0XHRkZWJ1Z2dlcjtcclxuXHRcdHRoaXMuaWQgPSBcImlmX3VzZXJfaXNfYXV0aGVudGljYXRlZFwiO1xyXG5cdFx0dGhpcy5uYW1lID0gXCJpZiB1c2VyIGlzIGF1dGhlbnRpY2F0ZWRcIjtcclxuXHRcdHRoaXMuZGVzY3JpcHRpb24gPSBcIsOZwofDmcKGw5rCr8OYwqfDmcKFw5vCjCDDmsKpw5nChyDDmsKpw5jCp8OYwrHDmMKow5jCsSDDmMKnw5jCrcOYwrHDmMKnw5jCsiDDmcKHw5nCiMObwozDmMKqIMOawqnDmMKxw5jCr8OZwocgw5jCp8OYwrPDmMKqXCI7XHJcblx0XHR0aGlzLnR5cGUgPSBHd3RTdGVwVHlwZXMuR2l2ZW47XHJcblx0XHR0aGlzLnN0b3JlID0gdGhpcy5pbmplY3Rvci5nZXQoU3RvcmUpO1xyXG5cdFx0dGhpcy51c2VyRmFjYWRlU2VydmljZSA9IHRoaXMuaW5qZWN0b3IuZ2V0KFVzZXJGYWNhZGVTZXJ2aWNlKTtcclxuXHR9XHJcblx0aW50ZXJwZXJhdG9yKHBhcmFtczogVXNlcklzQXV0aGVudGljYXRlZEd3dEdpdmVuU3RlcFBhcmFtcywgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xyXG5cdFx0cmV0dXJuIHRoaXMudXNlckZhY2FkZVNlcnZpY2UuZ2V0RGlzcGxheU5hbWUoKS5waXBlKFxyXG5cdFx0XHRtYXAodXNlckRpc3BhbHlOYW1lID0+IHtcclxuXHRcdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdFx0XHRyZXR1cm4gISF1c2VyRGlzcGFseU5hbWU7XHJcblx0XHRcdH0pXHJcblx0XHQpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgR3d0R2l2ZW5TdGVwVWkgfSBmcm9tIFwiQHNvdXNoaWFucy9ydWxlXCI7XHJcbmltcG9ydCB7IElmVXNlckhhdmVSb2xlR3d0R2l2ZW5TdGVwUGFyYW1zIH0gZnJvbSBcIi4uL3VzZXItaGF2ZS1yb2xlLmd3dC1naXZlbi1zdGVwXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHR0ZW1wbGF0ZTogYDxtYXQtY2FyZCBjbGFzcz1cInN0ZXBcIiBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0R2FwPVwiMjVweFwiIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgZW5kXCI+XHJcbiAgPGRpdiBjbGFzcz1cInN0ZXAtdGV4dFwiIGZ4RmxleD1cIm5vZ3Jvd1wiPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJnaXZlblwiPlxyXG4gICAgICAgIMOZwofDmcKGw5rCr8OYwqfDmcKFw5vCjCDDmsKpw5nCh1xyXG4gICAgPC9zcGFuPlxyXG4gICAgw5rCqcOYwqfDmMKxw5jCqMOYwrEgw5nChsOZwoLDmMK0XHJcbiAgICA8L2Rpdj5cclxuICA8ZGl2IGZ4RmxleCBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cFwiPlxyXG4gICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLDmMKvw5jCs8OYwqrDmMKxw5jCs8ObwoxcIiBmb3JtQ29udHJvbE5hbWU9XCJyb2xlXCI+XHJcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJzdGVwLXRleHRcIiBmeEZsZXg9XCJub2dyb3dcIj7DmMKvw5jCp8OYwrHDmMKvPC9kaXY+XHJcbjwvbWF0LWNhcmQ+YCxcclxuXHRzdHlsZXM6IFtgOmhvc3R7d2lkdGg6MTAwJX1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSWZVc2VySGF2ZVJvbGVHd3RHaXZlblN0ZXBDb21wb25lbnQgaW1wbGVtZW50cyBHd3RHaXZlblN0ZXBVaTxJZlVzZXJIYXZlUm9sZUd3dEdpdmVuU3RlcFBhcmFtcz4ge1xyXG5cdGZvcm1Hcm91cDogRm9ybUdyb3VwID0gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRyb2xlOiBuZXcgRm9ybUNvbnRyb2woXCJcIilcclxuXHR9KTtcclxuXHRzZXQgcGFyYW1zKHZhbHVlKSB7XHJcblx0XHR0aGlzLmZvcm1Hcm91cC5wYXRjaFZhbHVlKHZhbHVlKTtcclxuXHR9XHJcblx0Z2V0IHBhcmFtcygpOiBJZlVzZXJIYXZlUm9sZUd3dEdpdmVuU3RlcFBhcmFtcyB7XHJcblx0XHRyZXR1cm4gdGhpcy5mb3JtR3JvdXAudmFsdWU7XHJcblx0fVxyXG5cdGNvbnN0cnVjdG9yKCkge31cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RvciwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IG1hcCwgZGVib3VuY2VUaW1lLCBmaWx0ZXIgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5pbXBvcnQgeyBnZXRBY2NvdW50SW5mbyB9IGZyb20gXCJAc291c2hpYW5zL3VzZXJcIjtcclxuaW1wb3J0IHsgR3d0U3RlcCwgR3d0U3RlcFR5cGVzIH0gZnJvbSBcIkBzb3VzaGlhbnMvcnVsZVwiO1xyXG5cclxuaW1wb3J0IHsgSWZVc2VySGF2ZVJvbGVHd3RHaXZlblN0ZXBDb21wb25lbnQgfSBmcm9tIFwiLi9zdGVwLWNvbXBvbmVudC9vcGVyYXRpb24tZ3d0LXN0ZXAuY29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElmVXNlckhhdmVSb2xlR3d0R2l2ZW5TdGVwUGFyYW1zIHtcclxuXHRyb2xlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBJZlVzZXJIYXZlUm9sZUd3dEdpdmVuU3RlcCBpbXBsZW1lbnRzIEd3dFN0ZXA8SWZVc2VySGF2ZVJvbGVHd3RHaXZlblN0ZXBQYXJhbXM+IHtcclxuXHRpZDogc3RyaW5nO1xyXG5cdG5hbWU6IHN0cmluZztcclxuXHRvcHBvc2l0ZTogYm9vbGVhbjtcclxuXHRkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG5cdHR5cGU6IEd3dFN0ZXBUeXBlcztcclxuXHRwYXJhbXM6IHsgcm9sZTogXCJcIiB9O1xyXG5cdHN0ZXBDb21wb25lbnQgPSBJZlVzZXJIYXZlUm9sZUd3dEdpdmVuU3RlcENvbXBvbmVudDtcclxuXHRzdG9yZTogU3RvcmU8YW55PjtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcblx0XHR0aGlzLmlkID0gXCJpZl91c2VyX2hhdmVfcm9sZV9naXZlbl9zdGVwXCI7XHJcblx0XHR0aGlzLm5hbWUgPSBcImlmIHVzZXIgaGF2ZSByb2xlIGdpdmVuIHN0ZXBcIjtcclxuXHRcdHRoaXMuZGVzY3JpcHRpb24gPSBcIsOZwofDmcKGw5rCr8OYwqfDmcKFw5vCjCDDmsKpw5nChyDDmsKpw5jCp8OYwrHDmMKow5jCsSDDmcKGw5nCgsOYwrQgLi4gw5jCscOYwqcgw5nChsOYwq/DmMKnw5jCscOYwq9cIjtcclxuXHRcdHRoaXMudHlwZSA9IEd3dFN0ZXBUeXBlcy5HaXZlbjtcclxuXHRcdHRoaXMuc3RvcmUgPSB0aGlzLmluamVjdG9yLmdldChTdG9yZSk7XHJcblx0fVxyXG5cdGludGVycGVyYXRvcihwYXJhbXM6IElmVXNlckhhdmVSb2xlR3d0R2l2ZW5TdGVwUGFyYW1zLCBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XHJcblx0XHRjb25zdCB1c2VyJCA9IHRoaXMuc3RvcmVcclxuXHRcdFx0LnNlbGVjdChnZXRBY2NvdW50SW5mbylcclxuXHRcdFx0LnBpcGUoZmlsdGVyKHVzZXIgPT4gISF1c2VyLlJvbGVzKSwgZmlsdGVyKHVzZXIgPT4gdXNlci5Sb2xlcy5sZW5ndGggPiAwKSk7XHJcblx0XHRyZXR1cm4gdXNlciQucGlwZShcclxuXHRcdFx0bWFwKHVzZXIgPT4ge1xyXG5cdFx0XHRcdGRlYnVnZ2VyO1xyXG5cdFx0XHRcdHJldHVybiAhKHVzZXIgYXMgYW55KS5Sb2xlcy5tYXAoaXRlbSA9PiBpdGVtLnRvTG93ZXJDYXNlKCkpLmluY2x1ZGVzKHBhcmFtcy5yb2xlLnRvTG93ZXJDYXNlKCkpO1xyXG5cdFx0XHR9KVxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBHd3RUaGVuU3RlcFVpIH0gZnJvbSBcIkBzb3VzaGlhbnMvcnVsZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFRoZW5TaG93QmxvY2tHd3RTdGVwUGFyYW1zIH0gZnJvbSBcIi4uL2F1dGhvcml6ZS5nd3QtdGhlbi1zdGVwXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcblx0dGVtcGxhdGU6IGA8bWF0LWNhcmQgY2xhc3M9XCJzdGVwXCIgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEdhcD1cIjVweFwiIGZ4TGF5b3V0QWxpZ249XCJzdGFydCBlbmRcIiBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cFwiPlxyXG4gIDxkaXYgZnhGbGV4PVwiMCAwIGF1dG9cIiBjbGFzcz1cInN0ZXAtdGV4dCB0aGVuXCI+XHJcbiAgICDDmMKiw5nChsOawq/DmMKnw5nCh1xyXG4gIDwvZGl2PlxyXG4gIDxkaXYgZnhGbGV4PVwiMCAwIGF1dG9cIiBjbGFzcz1cInN0ZXAtdGV4dFwiPlxyXG4gICAgw5jCp8ObwozDmcKGIMOYwqjDmMKuw5jCtCDDmcKCw5jCp8OYwqjDmcKEIMOZwobDmcKFw5jCp8ObwozDmMK0XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBmeEZsZXg9XCJub2dyb3dcIj5cclxuICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXg9XCJub2dyb3dcIj5cclxuICAgICAgPG1hdC1zZWxlY3QgZm9ybUNvbnRyb2xOYW1lPVwidmVyYlwiPlxyXG4gICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwidmlzaWJsZVwiPsOYwqjDmMKnw5jCtMOYwq88L21hdC1vcHRpb24+XHJcbiAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJoaWRkZW5cIj7DmcKGw5jCqMOYwqfDmMK0w5jCrzwvbWF0LW9wdGlvbj5cclxuICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICA8L2Rpdj5cclxuPC9tYXQtY2FyZD5gLFxyXG5cdHN0eWxlczogW2A6aG9zdHt3aWR0aDoxMDAlfWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHd3RUaGVuQXV0aG9yaXplU3RlcENvbXBvbmVudCBpbXBsZW1lbnRzIEd3dFRoZW5TdGVwVWk8YW55PiB7XHJcblx0Zm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcblx0cGFyYW1zJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8VGhlblNob3dCbG9ja0d3dFN0ZXBQYXJhbXM+KHt9IGFzIFRoZW5TaG93QmxvY2tHd3RTdGVwUGFyYW1zKTtcclxuXHRzZXQgcGFyYW1zKHBhcmFtcykge1xyXG5cdFx0aWYgKHRoaXMuZm9ybUdyb3VwKSB7XHJcblx0XHRcdHRoaXMuZm9ybUdyb3VwLnBhdGNoVmFsdWUocGFyYW1zKTtcclxuXHRcdH1cclxuXHRcdHRoaXMucGFyYW1zJC5uZXh0KHBhcmFtcyk7XHJcblx0fVxyXG5cdGdldCBwYXJhbXMoKTogVGhlblNob3dCbG9ja0d3dFN0ZXBQYXJhbXMge1xyXG5cdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZm9ybUdyb3VwLnZhbHVlKTtcclxuXHR9XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLmZvcm1Hcm91cCA9IHRoaXMuX2NyZWF0ZV9mb3JtR3JvdXAoKTtcclxuXHRcdHRoaXMucGFyYW1zJC5zdWJzY3JpYmUocGFyYW1zID0+IHRoaXMuZm9ybUdyb3VwLnBhdGNoVmFsdWUocGFyYW1zKSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBwcml2YXRlIG1ldGhvZHNcclxuXHQgKi9cclxuXHRfY3JlYXRlX2Zvcm1Hcm91cCgpIHtcclxuXHRcdHJldHVybiBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0dmVyYjogbmV3IEZvcm1Db250cm9sKFwiaGlkZGVuXCIpXHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0b3IsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5pbXBvcnQgeyBHd3RTdGVwLCBHd3RTdGVwVHlwZXMgfSBmcm9tIFwiQHNvdXNoaWFucy9ydWxlXCI7XHJcblxyXG5pbXBvcnQgeyBHd3RUaGVuQXV0aG9yaXplU3RlcENvbXBvbmVudCB9IGZyb20gXCIuL3N0ZXAtY29tcG9uZW50L2d3dC10aGVuLWF1dGhvcml6ZS1zdGVwLmNvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUaGVuU2hvd0Jsb2NrR3d0U3RlcFBhcmFtcyB7XHJcblx0dmVyYjogXCJ2aXNpYmxlXCIgfCBcImhpZGRlblwiO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR3d0VGhlbkF1dGhvcml6ZVN0ZXAgaW1wbGVtZW50cyBHd3RTdGVwPFRoZW5TaG93QmxvY2tHd3RTdGVwUGFyYW1zPiB7XHJcblx0aWQ6IHN0cmluZztcclxuXHRuYW1lOiBzdHJpbmc7XHJcblx0b3Bwb3NpdGU6IGJvb2xlYW47XHJcblx0ZGVzY3JpcHRpb246IHN0cmluZztcclxuXHR0eXBlOiBHd3RTdGVwVHlwZXM7XHJcblx0cGFyYW1zOiBUaGVuU2hvd0Jsb2NrR3d0U3RlcFBhcmFtcztcclxuXHRzdGVwQ29tcG9uZW50ID0gR3d0VGhlbkF1dGhvcml6ZVN0ZXBDb21wb25lbnQ7XHJcblx0c3RvcmU6IFN0b3JlPGFueT47XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHtcclxuXHRcdHRoaXMuaWQgPSBcImF1dGhvcml6ZV9hbmRfc2hvd19ibG9ja1wiO1xyXG5cdFx0dGhpcy5uYW1lID0gXCJhdXRob3JpemUgYW5kIHNob3cgYmxvY2tcIjtcclxuXHRcdHRoaXMuZGVzY3JpcHRpb24gPSBcIsOYwqLDmcKGw5rCr8OYwqfDmcKHIMOYwqfDm8KMw5nChiDDmMKow5jCrsOYwrQgw5nCgsOYwqfDmMKow5nChCDDmcKGw5nChcOYwqfDm8KMw5jCtCDDmMKnw5jCs8OYwqpcIjtcclxuXHRcdHRoaXMudHlwZSA9IEd3dFN0ZXBUeXBlcy5UaGVuO1xyXG5cdFx0dGhpcy5zdG9yZSA9IHRoaXMuaW5qZWN0b3IuZ2V0KFN0b3JlKTtcclxuXHR9XHJcblx0aW50ZXJwZXJhdG9yKHBhcmFtczogVGhlblNob3dCbG9ja0d3dFN0ZXBQYXJhbXMsIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcclxuXHRcdGRlYnVnZ2VyO1xyXG5cdFx0Y29uc3QgZGlzcGxheSA9IChwYXJhbXMudmVyYiA9PT0gXCJ2aXNpYmxlXCIpID8gXCJibG9ja1wiIDogXCJub25lXCI7XHJcblx0XHRlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IGRpc3BsYXk7XHJcblx0XHRyZXR1cm4gb2YodHJ1ZSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgRmxleExheW91dE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mbGV4LWxheW91dFwiO1xyXG5pbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnNcIjtcclxuaW1wb3J0IHtcclxuXHRNYXRFeHBhbnNpb25Nb2R1bGUsXHJcblx0TWF0U25hY2tCYXJNb2R1bGUsXHJcblx0TWF0SWNvbk1vZHVsZSxcclxuXHRNYXRCdXR0b25Nb2R1bGUsXHJcblx0TWF0Q2FyZE1vZHVsZSxcclxuXHRNYXRTZWxlY3RNb2R1bGUsXHJcblx0TWF0SW5wdXRNb2R1bGUsXHJcblx0TWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG5cdE1hdFRhYnNNb2R1bGUsXHJcblx0TWF0UmFkaW9Nb2R1bGUsXHJcblx0TWF0U2xpZGVUb2dnbGVNb2R1bGUsXHJcblx0TWF0RGl2aWRlck1vZHVsZSxcclxuXHRNYXRDaGVja2JveE1vZHVsZSxcclxuXHRNYXRUYWJsZU1vZHVsZSxcclxuXHRNYXRBdXRvY29tcGxldGVNb2R1bGVcclxufSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuXHJcbmltcG9ydCB7IEd3dFRoZW5BdXRob3JpemVTdGVwQ29tcG9uZW50IH0gZnJvbSBcIi4vdGhlbi1hdXRob3JpemUvc3RlcC1jb21wb25lbnQvZ3d0LXRoZW4tYXV0aG9yaXplLXN0ZXAuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IElmVXNlckhhdmVSb2xlR3d0R2l2ZW5TdGVwQ29tcG9uZW50IH0gZnJvbSBcIi4vaWYtdXNlci1oYXZlLXJvbGUvc3RlcC1jb21wb25lbnQvb3BlcmF0aW9uLWd3dC1zdGVwLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1xyXG5cdEdpdmVuVXNlcklzQXV0aGVudGljYXRlZFN0ZXBDb21wb25lbnRcclxufSBmcm9tIFwiLi9naXZlbi11c2VyLWlzLWF1dGhlbnRpY2F0ZWQvc3RlcC1jb21wb25lbnQvZ2l2ZW4tdXNlci1pcy1hdXRoZW50aWNhdGVkLXN0ZXAuY29tcG9uZW50XCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdEh0dHBDbGllbnRNb2R1bGUsXHJcblx0XHRGb3Jtc01vZHVsZSxcclxuXHRcdFJvdXRlck1vZHVsZSxcclxuXHRcdENvbW1vbk1vZHVsZSxcclxuXHRcdE1hdEV4cGFuc2lvbk1vZHVsZSxcclxuXHRcdE1hdFNuYWNrQmFyTW9kdWxlLFxyXG5cdFx0TWF0SWNvbk1vZHVsZSxcclxuXHRcdE1hdEJ1dHRvbk1vZHVsZSxcclxuXHRcdE1hdENhcmRNb2R1bGUsXHJcblx0XHRNYXRDaGVja2JveE1vZHVsZSxcclxuXHRcdE1hdFRhYmxlTW9kdWxlLFxyXG5cdFx0TWF0U2VsZWN0TW9kdWxlLFxyXG5cdFx0TWF0QXV0b2NvbXBsZXRlTW9kdWxlLFxyXG5cdFx0TWF0SW5wdXRNb2R1bGUsXHJcblx0XHRNYXRGb3JtRmllbGRNb2R1bGUsXHJcblx0XHRNYXRUYWJzTW9kdWxlLFxyXG5cdFx0TWF0RGl2aWRlck1vZHVsZSxcclxuXHRcdEZsZXhMYXlvdXRNb2R1bGUsXHJcblx0XHRNYXRSYWRpb01vZHVsZSxcclxuXHRcdE1hdFNsaWRlVG9nZ2xlTW9kdWxlLFxyXG5cdFx0UmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuXHRcdEJyb3dzZXJBbmltYXRpb25zTW9kdWxlXHJcblx0XSxcclxuXHRkZWNsYXJhdGlvbnM6IFtcclxuXHRcdEd3dFRoZW5BdXRob3JpemVTdGVwQ29tcG9uZW50LFxyXG5cdFx0SWZVc2VySGF2ZVJvbGVHd3RHaXZlblN0ZXBDb21wb25lbnQsXHJcblx0XHRHaXZlblVzZXJJc0F1dGhlbnRpY2F0ZWRTdGVwQ29tcG9uZW50XHJcblx0XSxcclxuXHRlbnRyeUNvbXBvbmVudHM6IFtcclxuXHRcdEd3dFRoZW5BdXRob3JpemVTdGVwQ29tcG9uZW50LFxyXG5cdFx0SWZVc2VySGF2ZVJvbGVHd3RHaXZlblN0ZXBDb21wb25lbnQsXHJcblx0XHRHaXZlblVzZXJJc0F1dGhlbnRpY2F0ZWRTdGVwQ29tcG9uZW50XHJcblx0XSxcclxuXHRleHBvcnRzOiBbXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgR3d0U3RlcHNNb2R1bGUgeyB9XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQTJCQzt5QkFUdUIsSUFBSSxTQUFTLENBQUM7WUFDcEMsSUFBSSxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQztTQUN6QixDQUFDO0tBT2M7SUFOaEIsc0JBQUkseURBQU07Ozs7UUFHVjtZQUNDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7U0FDNUI7Ozs7O1FBTEQsVUFBVyxLQUFLO1lBQ2YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDakM7OztPQUFBOztnQkFqQkQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxrWkFPQztvQkFDWCxNQUFNLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztpQkFDN0I7Ozs7Z0RBaEJEOzs7Ozs7O0FDQ0EsSUFVQTtJQVVDLDJDQUFtQixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVOzZCQUhyQixxQ0FBcUM7UUFJcEQsU0FBUztRQUNULElBQUksQ0FBQyxFQUFFLEdBQUcsMEJBQTBCLENBQUM7UUFDckMsSUFBSSxDQUFDLElBQUksR0FBRywwQkFBMEIsQ0FBQztRQUN2QyxJQUFJLENBQUMsV0FBVyxHQUFHLHFDQUFxQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQztRQUMvQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFD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