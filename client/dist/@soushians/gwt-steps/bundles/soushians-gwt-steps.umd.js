(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@ngrx/store'), require('rxjs/operators'), require('@soushians/user'), require('@soushians/rule'), require('rxjs'), require('@angular/common'), require('@angular/router'), require('@angular/common/http'), require('@angular/flex-layout'), require('@angular/platform-browser/animations'), require('@angular/material')) :
    typeof define === 'function' && define.amd ? define('@soushians/gwt-steps', ['exports', '@angular/core', '@angular/forms', '@ngrx/store', 'rxjs/operators', '@soushians/user', '@soushians/rule', 'rxjs', '@angular/common', '@angular/router', '@angular/common/http', '@angular/flex-layout', '@angular/platform-browser/animations', '@angular/material'], factory) :
    (factory((global.soushians = global.soushians || {}, global.soushians['gwt-steps'] = {}),global.ng.core,global.ng.forms,null,global.rxjs.operators,null,null,global.rxjs,global.ng.common,global.ng.router,global.ng.common.http,global.ng['flex-layout'],global.ng.platformBrowser.animations,global.ng.material));
}(this, (function (exports,core,forms,store,operators,user,rule,rxjs,common,router,http,flexLayout,animations,material) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var GivenUserIsAuthenticatedStepComponent = (function () {
        function GivenUserIsAuthenticatedStepComponent() {
            this.formGroup = new forms.FormGroup({
                role: new forms.FormControl("")
            });
        }
        Object.defineProperty(GivenUserIsAuthenticatedStepComponent.prototype, "params", {
            get: /**
             * @return {?}
             */ function () {
                return this.formGroup.value;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.formGroup.patchValue(value);
            },
            enumerable: true,
            configurable: true
        });
        GivenUserIsAuthenticatedStepComponent.decorators = [
            { type: core.Component, args: [{
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
    var IfUserIsAuthenticatedGwtGivenStep = (function () {
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
                return this.userFacadeService.getDisplayName().pipe(operators.map(function (userDispalyName) {
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
    var IfUserHaveRoleGwtGivenStepComponent = (function () {
        function IfUserHaveRoleGwtGivenStepComponent() {
            this.formGroup = new forms.FormGroup({
                role: new forms.FormControl("")
            });
        }
        Object.defineProperty(IfUserHaveRoleGwtGivenStepComponent.prototype, "params", {
            get: /**
             * @return {?}
             */ function () {
                return this.formGroup.value;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.formGroup.patchValue(value);
            },
            enumerable: true,
            configurable: true
        });
        IfUserHaveRoleGwtGivenStepComponent.decorators = [
            { type: core.Component, args: [{
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
    var IfUserHaveRoleGwtGivenStep = (function () {
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
                var /** @type {?} */ user$ = this.store
                    .select(user.getAccountInfo)
                    .pipe(operators.filter(function (user$$1) { return !!user$$1.Roles; }), operators.filter(function (user$$1) { return user$$1.Roles.length > 0; }));
                return user$.pipe(operators.map(function (user$$1) {
                    debugger;
                    return !((user$$1)).Roles.map(function (item) { return item.toLowerCase(); }).includes(params.role.toLowerCase());
                }));
            };
        return IfUserHaveRoleGwtGivenStep;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var GwtThenAuthorizeStepComponent = (function () {
        function GwtThenAuthorizeStepComponent() {
            var _this = this;
            this.params$ = new rxjs.BehaviorSubject(/** @type {?} */ ({}));
            this.formGroup = this._create_formGroup();
            this.params$.subscribe(function (params) { return _this.formGroup.patchValue(params); });
        }
        Object.defineProperty(GwtThenAuthorizeStepComponent.prototype, "params", {
            get: /**
             * @return {?}
             */ function () {
                return Object.assign({}, this.formGroup.value);
            },
            set: /**
             * @param {?} params
             * @return {?}
             */ function (params) {
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
    var GwtThenAuthorizeStep = (function () {
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
                var /** @type {?} */ display = (params.verb === "visible") ? "block" : "none";
                elementRef.nativeElement.style.display = display;
                return rxjs.of(true);
            };
        return GwtThenAuthorizeStep;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var GwtStepsModule = (function () {
        function GwtStepsModule() {
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

    exports.IfUserIsAuthenticatedGwtGivenStep = IfUserIsAuthenticatedGwtGivenStep;
    exports.IfUserHaveRoleGwtGivenStep = IfUserHaveRoleGwtGivenStep;
    exports.GwtThenAuthorizeStep = GwtThenAuthorizeStep;
    exports.GwtStepsModule = GwtStepsModule;
    exports.ɵc = GivenUserIsAuthenticatedStepComponent;
    exports.ɵb = IfUserHaveRoleGwtGivenStepComponent;
    exports.ɵa = GwtThenAuthorizeStepComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLWd3dC1zdGVwcy51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0Bzb3VzaGlhbnMvZ3d0LXN0ZXBzL2xpYi9naXZlbi11c2VyLWlzLWF1dGhlbnRpY2F0ZWQvc3RlcC1jb21wb25lbnQvZ2l2ZW4tdXNlci1pcy1hdXRoZW50aWNhdGVkLXN0ZXAuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2d3dC1zdGVwcy9saWIvZ2l2ZW4tdXNlci1pcy1hdXRoZW50aWNhdGVkL3VzZXItaXMtYXV0aGVudGljYXRlZC5nd3QtZ2l2ZW4tc3RlcC50cyIsIm5nOi8vQHNvdXNoaWFucy9nd3Qtc3RlcHMvbGliL2lmLXVzZXItaGF2ZS1yb2xlL3N0ZXAtY29tcG9uZW50L29wZXJhdGlvbi1nd3Qtc3RlcC5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZ3d0LXN0ZXBzL2xpYi9pZi11c2VyLWhhdmUtcm9sZS91c2VyLWhhdmUtcm9sZS5nd3QtZ2l2ZW4tc3RlcC50cyIsIm5nOi8vQHNvdXNoaWFucy9nd3Qtc3RlcHMvbGliL3RoZW4tYXV0aG9yaXplL3N0ZXAtY29tcG9uZW50L2d3dC10aGVuLWF1dGhvcml6ZS1zdGVwLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9nd3Qtc3RlcHMvbGliL3RoZW4tYXV0aG9yaXplL2F1dGhvcml6ZS5nd3QtdGhlbi1zdGVwLnRzIiwibmc6Ly9Ac291c2hpYW5zL2d3dC1zdGVwcy9saWIvZ3d0LXN0ZXBzLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmltcG9ydCB7IEd3dEdpdmVuU3RlcFVpIH0gZnJvbSBcIkBzb3VzaGlhbnMvcnVsZVwiO1xyXG5pbXBvcnQgeyBVc2VySXNBdXRoZW50aWNhdGVkR3d0R2l2ZW5TdGVwUGFyYW1zIH0gZnJvbSBcIi4uL3VzZXItaXMtYXV0aGVudGljYXRlZC5nd3QtZ2l2ZW4tc3RlcC1wYXJhbXNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHRlbXBsYXRlOiBgPG1hdC1jYXJkIGNsYXNzPVwic3RlcFwiIGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRHYXA9XCIyNXB4XCIgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBlbmRcIj5cclxuICA8ZGl2IGNsYXNzPVwic3RlcC10ZXh0XCIgZnhGbGV4PVwibm9ncm93XCI+XHJcbiAgICA8c3BhbiBjbGFzcz1cImdpdmVuXCI+XHJcbiAgICAgICAgw5nCh8OZwobDmsKvw5jCp8OZwoXDm8KMIMOawqnDmcKHXHJcbiAgICA8L3NwYW4+XHJcbiAgICDDmsKpw5jCp8OYwrHDmMKow5jCsSDDmMKnw5jCrcOYwrHDmMKnw5jCsiDDmcKHw5nCiMObwozDmMKqIMOawqnDmMKxw5jCr8OZwocgw5jCp8OYwrPDmMKqXHJcbiAgICA8L2Rpdj5cclxuPC9tYXQtY2FyZD5gLFxyXG5cdHN0eWxlczogW2A6aG9zdHt3aWR0aDoxMDAlfWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHaXZlblVzZXJJc0F1dGhlbnRpY2F0ZWRTdGVwQ29tcG9uZW50IGltcGxlbWVudHMgR3d0R2l2ZW5TdGVwVWk8VXNlcklzQXV0aGVudGljYXRlZEd3dEdpdmVuU3RlcFBhcmFtcz4ge1xyXG5cdGZvcm1Hcm91cDogRm9ybUdyb3VwID0gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRyb2xlOiBuZXcgRm9ybUNvbnRyb2woXCJcIilcclxuXHR9KTtcclxuXHRzZXQgcGFyYW1zKHZhbHVlKSB7XHJcblx0XHR0aGlzLmZvcm1Hcm91cC5wYXRjaFZhbHVlKHZhbHVlKTtcclxuXHR9XHJcblx0Z2V0IHBhcmFtcygpOiBVc2VySXNBdXRoZW50aWNhdGVkR3d0R2l2ZW5TdGVwUGFyYW1zIHtcclxuXHRcdHJldHVybiB0aGlzLmZvcm1Hcm91cC52YWx1ZTtcclxuXHR9XHJcblx0Y29uc3RydWN0b3IoKSB7fVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdG9yLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgbWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0IHsgZ2V0QWNjb3VudEluZm8sIFVzZXJGYWNhZGVTZXJ2aWNlIH0gZnJvbSBcIkBzb3VzaGlhbnMvdXNlclwiO1xyXG5pbXBvcnQgeyBHd3RTdGVwLCBHd3RTdGVwVHlwZXMgfSBmcm9tIFwiQHNvdXNoaWFucy9ydWxlXCI7XHJcblxyXG5pbXBvcnQgeyBVc2VySXNBdXRoZW50aWNhdGVkR3d0R2l2ZW5TdGVwUGFyYW1zIH0gZnJvbSBcIi4vdXNlci1pcy1hdXRoZW50aWNhdGVkLmd3dC1naXZlbi1zdGVwLXBhcmFtc1wiO1xyXG5pbXBvcnQgeyBHaXZlblVzZXJJc0F1dGhlbnRpY2F0ZWRTdGVwQ29tcG9uZW50IH0gZnJvbSBcIi4vc3RlcC1jb21wb25lbnQvZ2l2ZW4tdXNlci1pcy1hdXRoZW50aWNhdGVkLXN0ZXAuY29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSWZVc2VySXNBdXRoZW50aWNhdGVkR3d0R2l2ZW5TdGVwIGltcGxlbWVudHMgR3d0U3RlcDxVc2VySXNBdXRoZW50aWNhdGVkR3d0R2l2ZW5TdGVwUGFyYW1zPiB7XHJcblx0aWQ6IHN0cmluZztcclxuXHRuYW1lOiBzdHJpbmc7XHJcblx0b3Bwb3NpdGU6IGJvb2xlYW47XHJcblx0ZGVzY3JpcHRpb246IHN0cmluZztcclxuXHR0eXBlOiBHd3RTdGVwVHlwZXM7XHJcblx0cGFyYW1zOiB7IHJvbGU6IFwiXCIgfTtcclxuXHRzdGVwQ29tcG9uZW50ID0gR2l2ZW5Vc2VySXNBdXRoZW50aWNhdGVkU3RlcENvbXBvbmVudDtcclxuXHRzdG9yZTogU3RvcmU8YW55PjtcclxuXHR1c2VyRmFjYWRlU2VydmljZTogVXNlckZhY2FkZVNlcnZpY2U7XHJcblx0Y29uc3RydWN0b3IocHVibGljIGluamVjdG9yOiBJbmplY3Rvcikge1xyXG5cdFx0ZGVidWdnZXI7XHJcblx0XHR0aGlzLmlkID0gXCJpZl91c2VyX2lzX2F1dGhlbnRpY2F0ZWRcIjtcclxuXHRcdHRoaXMubmFtZSA9IFwiaWYgdXNlciBpcyBhdXRoZW50aWNhdGVkXCI7XHJcblx0XHR0aGlzLmRlc2NyaXB0aW9uID0gXCLDmcKHw5nChsOawq/DmMKnw5nChcObwowgw5rCqcOZwocgw5rCqcOYwqfDmMKxw5jCqMOYwrEgw5jCp8OYwq3DmMKxw5jCp8OYwrIgw5nCh8OZwojDm8KMw5jCqiDDmsKpw5jCscOYwq/DmcKHIMOYwqfDmMKzw5jCqlwiO1xyXG5cdFx0dGhpcy50eXBlID0gR3d0U3RlcFR5cGVzLkdpdmVuO1xyXG5cdFx0dGhpcy5zdG9yZSA9IHRoaXMuaW5qZWN0b3IuZ2V0KFN0b3JlKTtcclxuXHRcdHRoaXMudXNlckZhY2FkZVNlcnZpY2UgPSB0aGlzLmluamVjdG9yLmdldChVc2VyRmFjYWRlU2VydmljZSk7XHJcblx0fVxyXG5cdGludGVycGVyYXRvcihwYXJhbXM6IFVzZXJJc0F1dGhlbnRpY2F0ZWRHd3RHaXZlblN0ZXBQYXJhbXMsIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcclxuXHRcdHJldHVybiB0aGlzLnVzZXJGYWNhZGVTZXJ2aWNlLmdldERpc3BsYXlOYW1lKCkucGlwZShcclxuXHRcdFx0bWFwKHVzZXJEaXNwYWx5TmFtZSA9PiB7XHJcblx0XHRcdFx0ZGVidWdnZXI7XHJcblx0XHRcdFx0cmV0dXJuICEhdXNlckRpc3BhbHlOYW1lO1xyXG5cdFx0XHR9KVxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEd3dEdpdmVuU3RlcFVpIH0gZnJvbSBcIkBzb3VzaGlhbnMvcnVsZVwiO1xyXG5pbXBvcnQgeyBJZlVzZXJIYXZlUm9sZUd3dEdpdmVuU3RlcFBhcmFtcyB9IGZyb20gXCIuLi91c2VyLWhhdmUtcm9sZS5nd3QtZ2l2ZW4tc3RlcFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0dGVtcGxhdGU6IGA8bWF0LWNhcmQgY2xhc3M9XCJzdGVwXCIgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEdhcD1cIjI1cHhcIiBmeExheW91dEFsaWduPVwiY2VudGVyIGVuZFwiPlxyXG4gIDxkaXYgY2xhc3M9XCJzdGVwLXRleHRcIiBmeEZsZXg9XCJub2dyb3dcIj5cclxuICAgIDxzcGFuIGNsYXNzPVwiZ2l2ZW5cIj5cclxuICAgICAgICDDmcKHw5nChsOawq/DmMKnw5nChcObwowgw5rCqcOZwodcclxuICAgIDwvc3Bhbj5cclxuICAgIMOawqnDmMKnw5jCscOYwqjDmMKxIMOZwobDmcKCw5jCtFxyXG4gICAgPC9kaXY+XHJcbiAgPGRpdiBmeEZsZXggW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIj5cclxuICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiw5jCr8OYwrPDmMKqw5jCscOYwrPDm8KMXCIgZm9ybUNvbnRyb2xOYW1lPVwicm9sZVwiPlxyXG4gICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwic3RlcC10ZXh0XCIgZnhGbGV4PVwibm9ncm93XCI+w5jCr8OYwqfDmMKxw5jCrzwvZGl2PlxyXG48L21hdC1jYXJkPmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e3dpZHRoOjEwMCV9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIElmVXNlckhhdmVSb2xlR3d0R2l2ZW5TdGVwQ29tcG9uZW50IGltcGxlbWVudHMgR3d0R2l2ZW5TdGVwVWk8SWZVc2VySGF2ZVJvbGVHd3RHaXZlblN0ZXBQYXJhbXM+IHtcclxuXHRmb3JtR3JvdXA6IEZvcm1Hcm91cCA9IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0cm9sZTogbmV3IEZvcm1Db250cm9sKFwiXCIpXHJcblx0fSk7XHJcblx0c2V0IHBhcmFtcyh2YWx1ZSkge1xyXG5cdFx0dGhpcy5mb3JtR3JvdXAucGF0Y2hWYWx1ZSh2YWx1ZSk7XHJcblx0fVxyXG5cdGdldCBwYXJhbXMoKTogSWZVc2VySGF2ZVJvbGVHd3RHaXZlblN0ZXBQYXJhbXMge1xyXG5cdFx0cmV0dXJuIHRoaXMuZm9ybUdyb3VwLnZhbHVlO1xyXG5cdH1cclxuXHRjb25zdHJ1Y3RvcigpIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0b3IsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBtYXAsIGRlYm91bmNlVGltZSwgZmlsdGVyIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0IHsgZ2V0QWNjb3VudEluZm8gfSBmcm9tIFwiQHNvdXNoaWFucy91c2VyXCI7XHJcbmltcG9ydCB7IEd3dFN0ZXAsIEd3dFN0ZXBUeXBlcyB9IGZyb20gXCJAc291c2hpYW5zL3J1bGVcIjtcclxuXHJcbmltcG9ydCB7IElmVXNlckhhdmVSb2xlR3d0R2l2ZW5TdGVwQ29tcG9uZW50IH0gZnJvbSBcIi4vc3RlcC1jb21wb25lbnQvb3BlcmF0aW9uLWd3dC1zdGVwLmNvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJZlVzZXJIYXZlUm9sZUd3dEdpdmVuU3RlcFBhcmFtcyB7XHJcblx0cm9sZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSWZVc2VySGF2ZVJvbGVHd3RHaXZlblN0ZXAgaW1wbGVtZW50cyBHd3RTdGVwPElmVXNlckhhdmVSb2xlR3d0R2l2ZW5TdGVwUGFyYW1zPiB7XHJcblx0aWQ6IHN0cmluZztcclxuXHRuYW1lOiBzdHJpbmc7XHJcblx0b3Bwb3NpdGU6IGJvb2xlYW47XHJcblx0ZGVzY3JpcHRpb246IHN0cmluZztcclxuXHR0eXBlOiBHd3RTdGVwVHlwZXM7XHJcblx0cGFyYW1zOiB7IHJvbGU6IFwiXCIgfTtcclxuXHRzdGVwQ29tcG9uZW50ID0gSWZVc2VySGF2ZVJvbGVHd3RHaXZlblN0ZXBDb21wb25lbnQ7XHJcblx0c3RvcmU6IFN0b3JlPGFueT47XHJcblx0Y29uc3RydWN0b3IocHVibGljIGluamVjdG9yOiBJbmplY3Rvcikge1xyXG5cdFx0dGhpcy5pZCA9IFwiaWZfdXNlcl9oYXZlX3JvbGVfZ2l2ZW5fc3RlcFwiO1xyXG5cdFx0dGhpcy5uYW1lID0gXCJpZiB1c2VyIGhhdmUgcm9sZSBnaXZlbiBzdGVwXCI7XHJcblx0XHR0aGlzLmRlc2NyaXB0aW9uID0gXCLDmcKHw5nChsOawq/DmMKnw5nChcObwowgw5rCqcOZwocgw5rCqcOYwqfDmMKxw5jCqMOYwrEgw5nChsOZwoLDmMK0IC4uIMOYwrHDmMKnIMOZwobDmMKvw5jCp8OYwrHDmMKvXCI7XHJcblx0XHR0aGlzLnR5cGUgPSBHd3RTdGVwVHlwZXMuR2l2ZW47XHJcblx0XHR0aGlzLnN0b3JlID0gdGhpcy5pbmplY3Rvci5nZXQoU3RvcmUpO1xyXG5cdH1cclxuXHRpbnRlcnBlcmF0b3IocGFyYW1zOiBJZlVzZXJIYXZlUm9sZUd3dEdpdmVuU3RlcFBhcmFtcywgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xyXG5cdFx0Y29uc3QgdXNlciQgPSB0aGlzLnN0b3JlXHJcblx0XHRcdC5zZWxlY3QoZ2V0QWNjb3VudEluZm8pXHJcblx0XHRcdC5waXBlKGZpbHRlcih1c2VyID0+ICEhdXNlci5Sb2xlcyksIGZpbHRlcih1c2VyID0+IHVzZXIuUm9sZXMubGVuZ3RoID4gMCkpO1xyXG5cdFx0cmV0dXJuIHVzZXIkLnBpcGUoXHJcblx0XHRcdG1hcCh1c2VyID0+IHtcclxuXHRcdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdFx0XHRyZXR1cm4gISh1c2VyIGFzIGFueSkuUm9sZXMubWFwKGl0ZW0gPT4gaXRlbS50b0xvd2VyQ2FzZSgpKS5pbmNsdWRlcyhwYXJhbXMucm9sZS50b0xvd2VyQ2FzZSgpKTtcclxuXHRcdFx0fSlcclxuXHRcdCk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgR3d0VGhlblN0ZXBVaSB9IGZyb20gXCJAc291c2hpYW5zL3J1bGVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBUaGVuU2hvd0Jsb2NrR3d0U3RlcFBhcmFtcyB9IGZyb20gXCIuLi9hdXRob3JpemUuZ3d0LXRoZW4tc3RlcFwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHRlbXBsYXRlOiBgPG1hdC1jYXJkIGNsYXNzPVwic3RlcFwiIGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRHYXA9XCI1cHhcIiBmeExheW91dEFsaWduPVwic3RhcnQgZW5kXCIgW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIj5cclxuICA8ZGl2IGZ4RmxleD1cIjAgMCBhdXRvXCIgY2xhc3M9XCJzdGVwLXRleHQgdGhlblwiPlxyXG4gICAgw5jCosOZwobDmsKvw5jCp8OZwodcclxuICA8L2Rpdj5cclxuICA8ZGl2IGZ4RmxleD1cIjAgMCBhdXRvXCIgY2xhc3M9XCJzdGVwLXRleHRcIj5cclxuICAgIMOYwqfDm8KMw5nChiDDmMKow5jCrsOYwrQgw5nCgsOYwqfDmMKow5nChCDDmcKGw5nChcOYwqfDm8KMw5jCtFxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgZnhGbGV4PVwibm9ncm93XCI+XHJcbiAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4PVwibm9ncm93XCI+XHJcbiAgICAgIDxtYXQtc2VsZWN0IGZvcm1Db250cm9sTmFtZT1cInZlcmJcIj5cclxuICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInZpc2libGVcIj7DmMKow5jCp8OYwrTDmMKvPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwiaGlkZGVuXCI+w5nChsOYwqjDmMKnw5jCtMOYwq88L21hdC1vcHRpb24+XHJcbiAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgPC9kaXY+XHJcbjwvbWF0LWNhcmQ+YCxcclxuXHRzdHlsZXM6IFtgOmhvc3R7d2lkdGg6MTAwJX1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgR3d0VGhlbkF1dGhvcml6ZVN0ZXBDb21wb25lbnQgaW1wbGVtZW50cyBHd3RUaGVuU3RlcFVpPGFueT4ge1xyXG5cdGZvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG5cdHBhcmFtcyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFRoZW5TaG93QmxvY2tHd3RTdGVwUGFyYW1zPih7fSBhcyBUaGVuU2hvd0Jsb2NrR3d0U3RlcFBhcmFtcyk7XHJcblx0c2V0IHBhcmFtcyhwYXJhbXMpIHtcclxuXHRcdGlmICh0aGlzLmZvcm1Hcm91cCkge1xyXG5cdFx0XHR0aGlzLmZvcm1Hcm91cC5wYXRjaFZhbHVlKHBhcmFtcyk7XHJcblx0XHR9XHJcblx0XHR0aGlzLnBhcmFtcyQubmV4dChwYXJhbXMpO1xyXG5cdH1cclxuXHRnZXQgcGFyYW1zKCk6IFRoZW5TaG93QmxvY2tHd3RTdGVwUGFyYW1zIHtcclxuXHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmZvcm1Hcm91cC52YWx1ZSk7XHJcblx0fVxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5mb3JtR3JvdXAgPSB0aGlzLl9jcmVhdGVfZm9ybUdyb3VwKCk7XHJcblx0XHR0aGlzLnBhcmFtcyQuc3Vic2NyaWJlKHBhcmFtcyA9PiB0aGlzLmZvcm1Hcm91cC5wYXRjaFZhbHVlKHBhcmFtcykpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogcHJpdmF0ZSBtZXRob2RzXHJcblx0ICovXHJcblx0X2NyZWF0ZV9mb3JtR3JvdXAoKSB7XHJcblx0XHRyZXR1cm4gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdHZlcmI6IG5ldyBGb3JtQ29udHJvbChcImhpZGRlblwiKVxyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdG9yLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0IHsgR3d0U3RlcCwgR3d0U3RlcFR5cGVzIH0gZnJvbSBcIkBzb3VzaGlhbnMvcnVsZVwiO1xyXG5cclxuaW1wb3J0IHsgR3d0VGhlbkF1dGhvcml6ZVN0ZXBDb21wb25lbnQgfSBmcm9tIFwiLi9zdGVwLWNvbXBvbmVudC9nd3QtdGhlbi1hdXRob3JpemUtc3RlcC5jb21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGhlblNob3dCbG9ja0d3dFN0ZXBQYXJhbXMge1xyXG5cdHZlcmI6IFwidmlzaWJsZVwiIHwgXCJoaWRkZW5cIjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEd3dFRoZW5BdXRob3JpemVTdGVwIGltcGxlbWVudHMgR3d0U3RlcDxUaGVuU2hvd0Jsb2NrR3d0U3RlcFBhcmFtcz4ge1xyXG5cdGlkOiBzdHJpbmc7XHJcblx0bmFtZTogc3RyaW5nO1xyXG5cdG9wcG9zaXRlOiBib29sZWFuO1xyXG5cdGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcblx0dHlwZTogR3d0U3RlcFR5cGVzO1xyXG5cdHBhcmFtczogVGhlblNob3dCbG9ja0d3dFN0ZXBQYXJhbXM7XHJcblx0c3RlcENvbXBvbmVudCA9IEd3dFRoZW5BdXRob3JpemVTdGVwQ29tcG9uZW50O1xyXG5cdHN0b3JlOiBTdG9yZTxhbnk+O1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcblx0XHR0aGlzLmlkID0gXCJhdXRob3JpemVfYW5kX3Nob3dfYmxvY2tcIjtcclxuXHRcdHRoaXMubmFtZSA9IFwiYXV0aG9yaXplIGFuZCBzaG93IGJsb2NrXCI7XHJcblx0XHR0aGlzLmRlc2NyaXB0aW9uID0gXCLDmMKiw5nChsOawq/DmMKnw5nChyDDmMKnw5vCjMOZwoYgw5jCqMOYwq7DmMK0IMOZwoLDmMKnw5jCqMOZwoQgw5nChsOZwoXDmMKnw5vCjMOYwrQgw5jCp8OYwrPDmMKqXCI7XHJcblx0XHR0aGlzLnR5cGUgPSBHd3RTdGVwVHlwZXMuVGhlbjtcclxuXHRcdHRoaXMuc3RvcmUgPSB0aGlzLmluamVjdG9yLmdldChTdG9yZSk7XHJcblx0fVxyXG5cdGludGVycGVyYXRvcihwYXJhbXM6IFRoZW5TaG93QmxvY2tHd3RTdGVwUGFyYW1zLCBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XHJcblx0XHRkZWJ1Z2dlcjtcclxuXHRcdGNvbnN0IGRpc3BsYXkgPSAocGFyYW1zLnZlcmIgPT09IFwidmlzaWJsZVwiKSA/IFwiYmxvY2tcIiA6IFwibm9uZVwiO1xyXG5cdFx0ZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBkaXNwbGF5O1xyXG5cdFx0cmV0dXJuIG9mKHRydWUpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IEZsZXhMYXlvdXRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZmxleC1sYXlvdXRcIjtcclxuaW1wb3J0IHsgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zXCI7XHJcbmltcG9ydCB7XHJcblx0TWF0RXhwYW5zaW9uTW9kdWxlLFxyXG5cdE1hdFNuYWNrQmFyTW9kdWxlLFxyXG5cdE1hdEljb25Nb2R1bGUsXHJcblx0TWF0QnV0dG9uTW9kdWxlLFxyXG5cdE1hdENhcmRNb2R1bGUsXHJcblx0TWF0U2VsZWN0TW9kdWxlLFxyXG5cdE1hdElucHV0TW9kdWxlLFxyXG5cdE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuXHRNYXRUYWJzTW9kdWxlLFxyXG5cdE1hdFJhZGlvTW9kdWxlLFxyXG5cdE1hdFNsaWRlVG9nZ2xlTW9kdWxlLFxyXG5cdE1hdERpdmlkZXJNb2R1bGUsXHJcblx0TWF0Q2hlY2tib3hNb2R1bGUsXHJcblx0TWF0VGFibGVNb2R1bGUsXHJcblx0TWF0QXV0b2NvbXBsZXRlTW9kdWxlXHJcbn0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcblxyXG5pbXBvcnQgeyBHd3RUaGVuQXV0aG9yaXplU3RlcENvbXBvbmVudCB9IGZyb20gXCIuL3RoZW4tYXV0aG9yaXplL3N0ZXAtY29tcG9uZW50L2d3dC10aGVuLWF1dGhvcml6ZS1zdGVwLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBJZlVzZXJIYXZlUm9sZUd3dEdpdmVuU3RlcENvbXBvbmVudCB9IGZyb20gXCIuL2lmLXVzZXItaGF2ZS1yb2xlL3N0ZXAtY29tcG9uZW50L29wZXJhdGlvbi1nd3Qtc3RlcC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtcclxuXHRHaXZlblVzZXJJc0F1dGhlbnRpY2F0ZWRTdGVwQ29tcG9uZW50XHJcbn0gZnJvbSBcIi4vZ2l2ZW4tdXNlci1pcy1hdXRoZW50aWNhdGVkL3N0ZXAtY29tcG9uZW50L2dpdmVuLXVzZXItaXMtYXV0aGVudGljYXRlZC1zdGVwLmNvbXBvbmVudFwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRIdHRwQ2xpZW50TW9kdWxlLFxyXG5cdFx0Rm9ybXNNb2R1bGUsXHJcblx0XHRSb3V0ZXJNb2R1bGUsXHJcblx0XHRDb21tb25Nb2R1bGUsXHJcblx0XHRNYXRFeHBhbnNpb25Nb2R1bGUsXHJcblx0XHRNYXRTbmFja0Jhck1vZHVsZSxcclxuXHRcdE1hdEljb25Nb2R1bGUsXHJcblx0XHRNYXRCdXR0b25Nb2R1bGUsXHJcblx0XHRNYXRDYXJkTW9kdWxlLFxyXG5cdFx0TWF0Q2hlY2tib3hNb2R1bGUsXHJcblx0XHRNYXRUYWJsZU1vZHVsZSxcclxuXHRcdE1hdFNlbGVjdE1vZHVsZSxcclxuXHRcdE1hdEF1dG9jb21wbGV0ZU1vZHVsZSxcclxuXHRcdE1hdElucHV0TW9kdWxlLFxyXG5cdFx0TWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG5cdFx0TWF0VGFic01vZHVsZSxcclxuXHRcdE1hdERpdmlkZXJNb2R1bGUsXHJcblx0XHRGbGV4TGF5b3V0TW9kdWxlLFxyXG5cdFx0TWF0UmFkaW9Nb2R1bGUsXHJcblx0XHRNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcclxuXHRcdFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcblx0XHRCcm93c2VyQW5pbWF0aW9uc01vZHVsZVxyXG5cdF0sXHJcblx0ZGVjbGFyYXRpb25zOiBbXHJcblx0XHRHd3RUaGVuQXV0aG9yaXplU3RlcENvbXBvbmVudCxcclxuXHRcdElmVXNlckhhdmVSb2xlR3d0R2l2ZW5TdGVwQ29tcG9uZW50LFxyXG5cdFx0R2l2ZW5Vc2VySXNBdXRoZW50aWNhdGVkU3RlcENvbXBvbmVudFxyXG5cdF0sXHJcblx0ZW50cnlDb21wb25lbnRzOiBbXHJcblx0XHRHd3RUaGVuQXV0aG9yaXplU3RlcENvbXBvbmVudCxcclxuXHRcdElmVXNlckhhdmVSb2xlR3d0R2l2ZW5TdGVwQ29tcG9uZW50LFxyXG5cdFx0R2l2ZW5Vc2VySXNBdXRoZW50aWNhdGVkU3RlcENvbXBvbmVudFxyXG5cdF0sXHJcblx0ZXhwb3J0czogW11cclxufSlcclxuZXhwb3J0IGNsYXNzIEd3dFN0ZXBzTW9kdWxlIHsgfVxyXG4iXSwibmFtZXMiOlsiRm9ybUdyb3VwIiwiRm9ybUNvbnRyb2wiLCJDb21wb25lbnQiLCJHd3RTdGVwVHlwZXMiLCJTdG9yZSIsIlVzZXJGYWNhZGVTZXJ2aWNlIiwibWFwIiwiZ2V0QWNjb3VudEluZm8iLCJmaWx0ZXIiLCJ1c2VyIiwiQmVoYXZpb3JTdWJqZWN0Iiwib2YiLCJOZ01vZHVsZSIsIkh0dHBDbGllbnRNb2R1bGUiLCJGb3Jtc01vZHVsZSIsIlJvdXRlck1vZHVsZSIsIkNvbW1vbk1vZHVsZSIsIk1hdEV4cGFuc2lvbk1vZHVsZSIsIk1hdFNuYWNrQmFyTW9kdWxlIiwiTWF0SWNvbk1vZHVsZSIsIk1hdEJ1dHRvbk1vZHVsZSIsIk1hdENhcmRNb2R1bGUiLCJNYXRDaGVja2JveE1vZHVsZSIsIk1hdFRhYmxlTW9kdWxlIiwiTWF0U2VsZWN0TW9kdWxlIiwiTWF0QXV0b2NvbXBsZXRlTW9kdWxlIiwiTWF0SW5wdXRNb2R1bGUiLCJNYXRGb3JtRmllbGRNb2R1bGUiLCJNYXRUYWJzTW9kdWxlIiwiTWF0RGl2aWRlck1vZHVsZSIsIkZsZXhMYXlvdXRNb2R1bGUiLCJNYXRSYWRpb01vZHVsZSIsIk1hdFNsaWRlVG9nZ2xlTW9kdWxlIiwiUmVhY3RpdmVGb3Jtc01vZHVsZSIsIkJyb3dzZXJBbmltYXRpb25zTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUEyQkM7NkJBVHVCLElBQUlBLGVBQVMsQ0FBQztnQkFDcEMsSUFBSSxFQUFFLElBQUlDLGlCQUFXLENBQUMsRUFB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