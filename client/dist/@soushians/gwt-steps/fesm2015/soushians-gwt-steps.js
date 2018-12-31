import { map, filter } from 'rxjs/operators';
import { UserFacadeService, getAccountInfo } from '@soushians/user';
import { Store } from '@ngrx/store';
import { GwtStepTypes } from '@soushians/rule';
import { BehaviorSubject, of } from 'rxjs';
import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule, MatSnackBarModule, MatIconModule, MatButtonModule, MatCardModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatTabsModule, MatRadioModule, MatSlideToggleModule, MatDividerModule, MatCheckboxModule, MatTableModule, MatAutocompleteModule } from '@angular/material';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class GivenUserIsAuthenticatedStepComponent {
    constructor() {
        this.formGroup = new FormGroup({
            role: new FormControl("")
        });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set params(value) {
        this.formGroup.patchValue(value);
    }
    /**
     * @return {?}
     */
    get params() {
        return this.formGroup.value;
    }
}
GivenUserIsAuthenticatedStepComponent.decorators = [
    { type: Component, args: [{
                template: "<mat-card class=\"step\" fxLayout=\"row\" fxLayoutGap=\"25px\" fxLayoutAlign=\"center end\">\r\n  <div class=\"step-text\" fxFlex=\"nogrow\">\r\n    <span class=\"given\">\r\n        \u0647\u0646\u06AF\u0627\u0645\u06CC \u06A9\u0647\r\n    </span>\r\n    \u06A9\u0627\u0631\u0628\u0631 \u0627\u062D\u0631\u0627\u0632 \u0647\u0648\u06CC\u062A \u06A9\u0631\u062F\u0647 \u0627\u0633\u062A\r\n    </div>\r\n</mat-card>",
                styles: [":host{width:100%}"]
            }] }
];
/** @nocollapse */
GivenUserIsAuthenticatedStepComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class IfUserIsAuthenticatedGwtGivenStep {
    /**
     * @param {?} injector
     */
    constructor(injector) {
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
    interperator(params, elementRef) {
        return this.userFacadeService.getDisplayName().pipe(map(userDispalyName => {
            debugger;
            return !!userDispalyName;
        }));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class IfUserHaveRoleGwtGivenStepComponent {
    constructor() {
        this.formGroup = new FormGroup({
            role: new FormControl("")
        });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set params(value) {
        this.formGroup.patchValue(value);
    }
    /**
     * @return {?}
     */
    get params() {
        return this.formGroup.value;
    }
}
IfUserHaveRoleGwtGivenStepComponent.decorators = [
    { type: Component, args: [{
                template: "<mat-card class=\"step\" fxLayout=\"row\" fxLayoutGap=\"25px\" fxLayoutAlign=\"center end\">\r\n  <div class=\"step-text\" fxFlex=\"nogrow\">\r\n    <span class=\"given\">\r\n        \u0647\u0646\u06AF\u0627\u0645\u06CC \u06A9\u0647\r\n    </span>\r\n    \u06A9\u0627\u0631\u0628\u0631 \u0646\u0642\u0634\r\n    </div>\r\n  <div fxFlex [formGroup]=\"formGroup\">\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"\u062F\u0633\u062A\u0631\u0633\u06CC\" formControlName=\"role\">\r\n    </mat-form-field>\r\n  </div>\r\n  <div class=\"step-text\" fxFlex=\"nogrow\">\u062F\u0627\u0631\u062F</div>\r\n</mat-card>",
                styles: [":host{width:100%}"]
            }] }
];
/** @nocollapse */
IfUserHaveRoleGwtGivenStepComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class IfUserHaveRoleGwtGivenStep {
    /**
     * @param {?} injector
     */
    constructor(injector) {
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
    interperator(params, elementRef) {
        /** @type {?} */
        const user$ = this.store
            .select(getAccountInfo)
            .pipe(filter(user => !!user.Roles), filter(user => user.Roles.length > 0));
        return user$.pipe(map(user => {
            debugger;
            return !(/** @type {?} */ (user)).Roles.map(item => item.toLowerCase()).includes(params.role.toLowerCase());
        }));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class GwtThenAuthorizeStepComponent {
    constructor() {
        this.params$ = new BehaviorSubject(/** @type {?} */ ({}));
        this.formGroup = this._create_formGroup();
        this.params$.subscribe(params => this.formGroup.patchValue(params));
    }
    /**
     * @param {?} params
     * @return {?}
     */
    set params(params) {
        if (this.formGroup) {
            this.formGroup.patchValue(params);
        }
        this.params$.next(params);
    }
    /**
     * @return {?}
     */
    get params() {
        return Object.assign({}, this.formGroup.value);
    }
    /**
     * private methods
     * @return {?}
     */
    _create_formGroup() {
        return new FormGroup({
            verb: new FormControl("hidden")
        });
    }
}
GwtThenAuthorizeStepComponent.decorators = [
    { type: Component, args: [{
                template: "<mat-card class=\"step\" fxLayout=\"row\" fxLayoutGap=\"5px\" fxLayoutAlign=\"start end\" [formGroup]=\"formGroup\">\r\n  <div fxFlex=\"0 0 auto\" class=\"step-text then\">\r\n    \u0622\u0646\u06AF\u0627\u0647\r\n  </div>\r\n  <div fxFlex=\"0 0 auto\" class=\"step-text\">\r\n    \u0627\u06CC\u0646 \u0628\u062E\u0634 \u0642\u0627\u0628\u0644 \u0646\u0645\u0627\u06CC\u0634\r\n  </div>\r\n  <div fxFlex=\"nogrow\">\r\n    <mat-form-field fxFlex=\"nogrow\">\r\n      <mat-select formControlName=\"verb\">\r\n        <mat-option value=\"visible\">\u0628\u0627\u0634\u062F</mat-option>\r\n        <mat-option value=\"hidden\">\u0646\u0628\u0627\u0634\u062F</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n  </div>\r\n</mat-card>",
                styles: [":host{width:100%}"]
            }] }
];
/** @nocollapse */
GwtThenAuthorizeStepComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class GwtThenAuthorizeStep {
    /**
     * @param {?} injector
     */
    constructor(injector) {
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
    interperator(params, elementRef) {
        debugger;
        /** @type {?} */
        const display = (params.verb === "visible") ? "initial" : "none";
        elementRef.nativeElement.style.display = display;
        return of(true);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class GwtStepsModule {
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
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { IfUserIsAuthenticatedGwtGivenStep, IfUserHaveRoleGwtGivenStep, GwtThenAuthorizeStep, GwtStepsModule, GivenUserIsAuthenticatedStepComponent as ɵc, IfUserHaveRoleGwtGivenStepComponent as ɵb, GwtThenAuthorizeStepComponent as ɵa };

//# sourceMappingURL=soushians-gwt-steps.js.map