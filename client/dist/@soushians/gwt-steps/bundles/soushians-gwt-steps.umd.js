(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@ngrx/store'), require('rxjs/operators'), require('@soushians/user'), require('@soushians/rule'), require('@angular/core'), require('@angular/forms'), require('rxjs'), require('@angular/common'), require('@angular/router'), require('@angular/common/http'), require('@angular/flex-layout'), require('@angular/platform-browser/animations'), require('@angular/material')) :
    typeof define === 'function' && define.amd ? define('@soushians/gwt-steps', ['exports', '@ngrx/store', 'rxjs/operators', '@soushians/user', '@soushians/rule', '@angular/core', '@angular/forms', 'rxjs', '@angular/common', '@angular/router', '@angular/common/http', '@angular/flex-layout', '@angular/platform-browser/animations', '@angular/material'], factory) :
    (global = global || self, factory((global.soushians = global.soushians || {}, global.soushians['gwt-steps'] = {}), global.store, global.rxjs.operators, global.user, global.rule, global.ng.core, global.ng.forms, global.rxjs, global.ng.common, global.ng.router, global.ng.common.http, global.ng['flex-layout'], global.ng.platformBrowser.animations, global.ng.material));
}(this, function (exports, store, operators, user, rule, core, forms, rxjs, common, router, http, flexLayout, animations, material) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GivenUserIsAuthenticatedStepComponent = /** @class */ (function () {
        function GivenUserIsAuthenticatedStepComponent() {
            this.formGroup = new forms.FormGroup({
                role: new forms.FormControl("")
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
            { type: core.Component, args: [{
                        template: "<mat-card class=\"step\" fxLayout=\"row\" fxLayoutGap=\"25px\" fxLayoutAlign=\"center end\">\r\n  <div class=\"step-text\" fxFlex=\"nogrow\">\r\n    <span class=\"given\">\r\n        \u0647\u0646\u06AF\u0627\u0645\u06CC \u06A9\u0647\r\n    </span>\r\n    \u06A9\u0627\u0631\u0628\u0631 \u0627\u062D\u0631\u0627\u0632 \u0647\u0648\u06CC\u062A \u06A9\u0631\u062F\u0647 \u0627\u0633\u062A\r\n    </div>\r\n</mat-card>",
                        styles: [":host{width:100%}"]
                    }] }
        ];
        /** @nocollapse */
        GivenUserIsAuthenticatedStepComponent.ctorParameters = function () { return []; };
        return GivenUserIsAuthenticatedStepComponent;
    }());
    if (false) {
        /** @type {?} */
        GivenUserIsAuthenticatedStepComponent.prototype.formGroup;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var IfUserIsAuthenticatedGwtGivenStep = /** @class */ (function () {
        function IfUserIsAuthenticatedGwtGivenStep(injector) {
            this.injector = injector;
            this.stepComponent = GivenUserIsAuthenticatedStepComponent;
            debugger;
            this.id = "if_user_is_authenticated";
            this.name = "if user is authenticated";
            this.description = "هنگامی که کاربر احراز هویت کرده است";
            this.type = rule.GwtStepTypes.Given;
            this.store = this.injector.get(store.Store);
            this.userFacadeService = this.injector.get(user.UserFacadeService);
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
            return this.userFacadeService.getDisplayName().pipe(operators.map((/**
             * @param {?} userDispalyName
             * @return {?}
             */
            function (userDispalyName) {
                debugger;
                return !!userDispalyName;
            })));
        };
        return IfUserIsAuthenticatedGwtGivenStep;
    }());
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
    var IfUserHaveRoleGwtGivenStepComponent = /** @class */ (function () {
        function IfUserHaveRoleGwtGivenStepComponent() {
            this.formGroup = new forms.FormGroup({
                role: new forms.FormControl("")
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
            { type: core.Component, args: [{
                        template: "<mat-card class=\"step\" fxLayout=\"row\" fxLayoutGap=\"25px\" fxLayoutAlign=\"center end\">\r\n  <div class=\"step-text\" fxFlex=\"nogrow\">\r\n    <span class=\"given\">\r\n        \u0647\u0646\u06AF\u0627\u0645\u06CC \u06A9\u0647\r\n    </span>\r\n    \u06A9\u0627\u0631\u0628\u0631 \u0646\u0642\u0634\r\n    </div>\r\n  <div fxFlex [formGroup]=\"formGroup\">\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"\u062F\u0633\u062A\u0631\u0633\u06CC\" formControlName=\"role\">\r\n    </mat-form-field>\r\n  </div>\r\n  <div class=\"step-text\" fxFlex=\"nogrow\">\u062F\u0627\u0631\u062F</div>\r\n</mat-card>",
                        styles: [":host{width:100%}"]
                    }] }
        ];
        /** @nocollapse */
        IfUserHaveRoleGwtGivenStepComponent.ctorParameters = function () { return []; };
        return IfUserHaveRoleGwtGivenStepComponent;
    }());
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
    var IfUserHaveRoleGwtGivenStep = /** @class */ (function () {
        function IfUserHaveRoleGwtGivenStep(injector) {
            this.injector = injector;
            this.stepComponent = IfUserHaveRoleGwtGivenStepComponent;
            this.id = "if_user_have_role_given_step";
            this.name = "if user have role given step";
            this.description = "هنگامی که کاربر نقش .. را ندارد";
            this.type = rule.GwtStepTypes.Given;
            this.store = this.injector.get(store.Store);
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
            /** @type {?} */
            var user$ = this.store
                .select(user.getAccountInfo)
                .pipe(operators.filter((/**
             * @param {?} user
             * @return {?}
             */
            function (user) { return !!user.Roles; })), operators.filter((/**
             * @param {?} user
             * @return {?}
             */
            function (user) { return user.Roles.length > 0; })));
            return user$.pipe(operators.map((/**
             * @param {?} user
             * @return {?}
             */
            function (user) {
                debugger;
                return !((/** @type {?} */ (user))).Roles.map((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return item.toLowerCase(); })).includes(params.role.toLowerCase());
            })));
        };
        return IfUserHaveRoleGwtGivenStep;
    }());
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
    var GwtThenAuthorizeStepComponent = /** @class */ (function () {
        function GwtThenAuthorizeStepComponent() {
            var _this = this;
            this.params$ = new rxjs.BehaviorSubject((/** @type {?} */ ({})));
            this.formGroup = this._create_formGroup();
            this.params$.subscribe((/**
             * @param {?} params
             * @return {?}
             */
            function (params) { return _this.formGroup.patchValue(params); }));
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
            return new forms.FormGroup({
                verb: new forms.FormControl("hidden")
            });
        };
        GwtThenAuthorizeStepComponent.decorators = [
            { type: core.Component, args: [{
                        template: "<mat-card class=\"step\" fxLayout=\"row\" fxLayoutGap=\"5px\" fxLayoutAlign=\"start end\" [formGroup]=\"formGroup\">\r\n  <div fxFlex=\"0 0 auto\" class=\"step-text then\">\r\n    \u0622\u0646\u06AF\u0627\u0647\r\n  </div>\r\n  <div fxFlex=\"0 0 auto\" class=\"step-text\">\r\n    \u0627\u06CC\u0646 \u0628\u062E\u0634 \u0642\u0627\u0628\u0644 \u0646\u0645\u0627\u06CC\u0634\r\n  </div>\r\n  <div fxFlex=\"nogrow\">\r\n    <mat-form-field fxFlex=\"nogrow\">\r\n      <mat-select formControlName=\"verb\">\r\n        <mat-option value=\"visible\">\u0628\u0627\u0634\u062F</mat-option>\r\n        <mat-option value=\"hidden\">\u0646\u0628\u0627\u0634\u062F</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n  </div>\r\n</mat-card>",
                        styles: [":host{width:100%}"]
                    }] }
        ];
        /** @nocollapse */
        GwtThenAuthorizeStepComponent.ctorParameters = function () { return []; };
        return GwtThenAuthorizeStepComponent;
    }());
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
    var GwtThenAuthorizeStep = /** @class */ (function () {
        function GwtThenAuthorizeStep(injector) {
            this.injector = injector;
            this.stepComponent = GwtThenAuthorizeStepComponent;
            this.id = "authorize_and_show_block";
            this.name = "authorize and show block";
            this.description = "آنگاه این بخش قابل نمایش است";
            this.type = rule.GwtStepTypes.Then;
            this.store = this.injector.get(store.Store);
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
            /** @type {?} */
            var display = (params.verb === "visible") ? "initial" : "none";
            elementRef.nativeElement.style.display = display;
            return rxjs.of(true);
        };
        return GwtThenAuthorizeStep;
    }());
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
    var GwtStepsModule = /** @class */ (function () {
        function GwtStepsModule() {
            ((/** @type {?} */ (window))).___starter = ((/** @type {?} */ (window))).___starter || {};
            ((/** @type {?} */ (window))).___starter.gwt_steps = "8.0.10";
        }
        GwtStepsModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            http.HttpClientModule,
                            forms.FormsModule,
                            router.RouterModule,
                            common.CommonModule,
                            material.MatExpansionModule,
                            material.MatSnackBarModule,
                            material.MatIconModule,
                            material.MatButtonModule,
                            material.MatCardModule,
                            material.MatCheckboxModule,
                            material.MatTableModule,
                            material.MatSelectModule,
                            material.MatAutocompleteModule,
                            material.MatInputModule,
                            material.MatFormFieldModule,
                            material.MatTabsModule,
                            material.MatDividerModule,
                            flexLayout.FlexLayoutModule,
                            material.MatRadioModule,
                            material.MatSlideToggleModule,
                            forms.ReactiveFormsModule,
                            animations.BrowserAnimationsModule
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
        GwtStepsModule.ctorParameters = function () { return []; };
        return GwtStepsModule;
    }());

    exports.GwtStepsModule = GwtStepsModule;
    exports.GwtThenAuthorizeStep = GwtThenAuthorizeStep;
    exports.IfUserHaveRoleGwtGivenStep = IfUserHaveRoleGwtGivenStep;
    exports.IfUserIsAuthenticatedGwtGivenStep = IfUserIsAuthenticatedGwtGivenStep;
    exports.ɵa = GwtThenAuthorizeStepComponent;
    exports.ɵb = IfUserHaveRoleGwtGivenStepComponent;
    exports.ɵc = GivenUserIsAuthenticatedStepComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=soushians-gwt-steps.umd.js.map
