import { Store } from '@ngrx/store';
import { map, filter } from 'rxjs/operators';
import { UserFacadeService, getAccountInfo } from '@soushians/user';
import { GwtStepTypes } from '@soushians/rule';
import { Component, NgModule } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BehaviorSubject, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule, MatSnackBarModule, MatIconModule, MatButtonModule, MatCardModule, MatCheckboxModule, MatTableModule, MatSelectModule, MatAutocompleteModule, MatInputModule, MatFormFieldModule, MatTabsModule, MatDividerModule, MatRadioModule, MatSlideToggleModule } from '@angular/material';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
if (false) {
    /** @type {?} */
    GivenUserIsAuthenticatedStepComponent.prototype.formGroup;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        return this.userFacadeService.getDisplayName().pipe(map((/**
         * @param {?} userDispalyName
         * @return {?}
         */
        userDispalyName => {
            debugger;
            return !!userDispalyName;
        })));
    }
}
if (false) {
    /** @type {?} */
    IfUserIsAuthenticatedGwtGivenStep.prototype.id;
    /** @type {?} */
    IfUserIsAuthenticatedGwtGivenStep.prototype.name;
    /** @type {?} */
    IfUserIsAuthenticatedGwtGivenStep.prototype.opposite;
    /** @type {?} */
    IfUserIsAuthenticatedGwtGivenStep.prototype.description;
    /** @type {?} */
    IfUserIsAuthenticatedGwtGivenStep.prototype.type;
    /** @type {?} */
    IfUserIsAuthenticatedGwtGivenStep.prototype.params;
    /** @type {?} */
    IfUserIsAuthenticatedGwtGivenStep.prototype.stepComponent;
    /** @type {?} */
    IfUserIsAuthenticatedGwtGivenStep.prototype.store;
    /** @type {?} */
    IfUserIsAuthenticatedGwtGivenStep.prototype.userFacadeService;
    /** @type {?} */
    IfUserIsAuthenticatedGwtGivenStep.prototype.injector;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
if (false) {
    /** @type {?} */
    IfUserHaveRoleGwtGivenStepComponent.prototype.formGroup;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function IfUserHaveRoleGwtGivenStepParams() { }
if (false) {
    /** @type {?} */
    IfUserHaveRoleGwtGivenStepParams.prototype.role;
}
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
            .pipe(filter((/**
         * @param {?} user
         * @return {?}
         */
        user => !!user.Roles)), filter((/**
         * @param {?} user
         * @return {?}
         */
        user => user.Roles.length > 0)));
        return user$.pipe(map((/**
         * @param {?} user
         * @return {?}
         */
        user => {
            debugger;
            return !((/** @type {?} */ (user))).Roles.map((/**
             * @param {?} item
             * @return {?}
             */
            item => item.toLowerCase())).includes(params.role.toLowerCase());
        })));
    }
}
if (false) {
    /** @type {?} */
    IfUserHaveRoleGwtGivenStep.prototype.id;
    /** @type {?} */
    IfUserHaveRoleGwtGivenStep.prototype.name;
    /** @type {?} */
    IfUserHaveRoleGwtGivenStep.prototype.opposite;
    /** @type {?} */
    IfUserHaveRoleGwtGivenStep.prototype.description;
    /** @type {?} */
    IfUserHaveRoleGwtGivenStep.prototype.type;
    /** @type {?} */
    IfUserHaveRoleGwtGivenStep.prototype.params;
    /** @type {?} */
    IfUserHaveRoleGwtGivenStep.prototype.stepComponent;
    /** @type {?} */
    IfUserHaveRoleGwtGivenStep.prototype.store;
    /** @type {?} */
    IfUserHaveRoleGwtGivenStep.prototype.injector;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GwtThenAuthorizeStepComponent {
    constructor() {
        this.params$ = new BehaviorSubject((/** @type {?} */ ({})));
        this.formGroup = this._create_formGroup();
        this.params$.subscribe((/**
         * @param {?} params
         * @return {?}
         */
        params => this.formGroup.patchValue(params)));
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
if (false) {
    /** @type {?} */
    GwtThenAuthorizeStepComponent.prototype.formGroup;
    /** @type {?} */
    GwtThenAuthorizeStepComponent.prototype.params$;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function ThenShowBlockGwtStepParams() { }
if (false) {
    /** @type {?} */
    ThenShowBlockGwtStepParams.prototype.verb;
}
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
if (false) {
    /** @type {?} */
    GwtThenAuthorizeStep.prototype.id;
    /** @type {?} */
    GwtThenAuthorizeStep.prototype.name;
    /** @type {?} */
    GwtThenAuthorizeStep.prototype.opposite;
    /** @type {?} */
    GwtThenAuthorizeStep.prototype.description;
    /** @type {?} */
    GwtThenAuthorizeStep.prototype.type;
    /** @type {?} */
    GwtThenAuthorizeStep.prototype.params;
    /** @type {?} */
    GwtThenAuthorizeStep.prototype.stepComponent;
    /** @type {?} */
    GwtThenAuthorizeStep.prototype.store;
    /**
     * @type {?}
     * @private
     */
    GwtThenAuthorizeStep.prototype.injector;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GwtStepsModule {
    constructor() {
        ((/** @type {?} */ (window))).___starter = ((/** @type {?} */ (window))).___starter || {};
        ((/** @type {?} */ (window))).___starter.gwt_steps = "8.0.10";
    }
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
/** @nocollapse */
GwtStepsModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { GwtStepsModule, GwtThenAuthorizeStep, IfUserHaveRoleGwtGivenStep, IfUserIsAuthenticatedGwtGivenStep, GwtThenAuthorizeStepComponent as ɵa, IfUserHaveRoleGwtGivenStepComponent as ɵb, GivenUserIsAuthenticatedStepComponent as ɵc };
//# sourceMappingURL=soushians-gwt-steps.js.map
