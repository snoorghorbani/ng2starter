/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter, Input, Injector } from "@angular/core";
import { FormGroup, Validators, FormControl, FormArray } from "@angular/forms";
import { map, filter } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { getAppConfig } from "../../reducers";
var LayoutModuleConfigComponent = /** @class */ (function () {
    function LayoutModuleConfigComponent(injector, store) {
        this.injector = injector;
        this.store = store;
        this.configChanged = new EventEmitter();
        this.formGroup = new FormGroup({
            layoutMode: new FormControl("", [Validators.required]),
            showLeftNavBar: new FormControl("", [Validators.required]),
            mainSideNavMode: new FormControl("", [Validators.required]),
            showMainSidenav: new FormControl("", [Validators.required]),
            stickyLeftNavBar: new FormControl("", [Validators.required]),
            showSecondSideNav: new FormControl("", [Validators.required]),
            secondSideNavMode: new FormControl("", [Validators.required]),
            menuItems: new FormArray([])
        });
        this.sideNavModes = ["over", "push", "side"];
        this.layoutModes = ["with-margin", "without-margin", "default"];
        this.configFormGroup = this.injector.get("configFormGroup");
        this.roleItems$ = this.store
            .select(getAppConfig)
            .pipe(filter((/**
         * @param {?} config
         * @return {?}
         */
        function (config) { return config != null; })), map((/**
         * @param {?} appconfig
         * @return {?}
         */
        function (appconfig) { return appconfig.Config.Roles; })));
        // this.configChanged.
        // this.formGroup.valueChanges.subscribe(value => {
        // 	debugger;
        // 	this.configChanged.emit(value);
        // });
    }
    Object.defineProperty(LayoutModuleConfigComponent.prototype, "configFormGroup", {
        get: /**
         * @return {?}
         */
        function () {
            return this._configFormGroup;
        },
        set: /**
         * @param {?} configFormGroup
         * @return {?}
         */
        function (configFormGroup) {
            var _this = this;
            this._configFormGroup = configFormGroup;
            ((/** @type {?} */ (configFormGroup.controls.menuItems))).controls.forEach((/**
             * @param {?} control
             * @return {?}
             */
            function (control) {
                ((/** @type {?} */ (_this.formGroup.controls.menuItems))).push(new FormGroup({
                    route: new FormControl("", [Validators.required]),
                    icon: new FormControl("", [Validators.required]),
                    // roles: new FormArray(control.value.roles.map((i) => new FormControl("Admin"))),
                    roles: new FormControl(),
                    title: new FormControl("", [Validators.required])
                }));
            }));
            this.formGroup.patchValue(configFormGroup.value);
            configFormGroup.valueChanges.subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) { return _this.formGroup.patchValue(data); }));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LayoutModuleConfigComponent.prototype.addMenu = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var menuItem = new FormGroup({
            route: new FormControl("", [Validators.required]),
            icon: new FormControl("", [Validators.required]),
            roles: new FormControl(),
            title: new FormControl("", [Validators.required])
        });
        ((/** @type {?} */ (this.formGroup.get("menuItems")))).push(menuItem);
        ((/** @type {?} */ (this.configFormGroup.get("menuItems")))).push(menuItem);
    };
    /**
     * @param {?} item
     * @return {?}
     */
    LayoutModuleConfigComponent.prototype.removeMenu = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        debugger;
        /** @type {?} */
        var index = ((/** @type {?} */ (this.formGroup.get("menuItems")))).controls.indexOf(item);
        ((/** @type {?} */ (this.formGroup.get("menuItems")))).removeAt(index);
    };
    LayoutModuleConfigComponent.decorators = [
        { type: Component, args: [{
                    template: "<div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"25px\" class=\"main-container\">\r\n\r\n    <div class=\"content-action\">\r\n        <mat-card class=\"with-sticky-action\">\r\n            <mat-card-header>\r\n                <mat-card-title fxLayout=\"row\" fxLayoutGap=\"5px\">\r\n                    <mat-icon>settings_input_component</mat-icon>\r\n                    <span>\u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0645\u0627\u0698\u0648\u0644 Layout</span>\r\n                </mat-card-title>\r\n                <mat-card-subtitle fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                    <span>\r\n                        \u0634\u0627\u0645\u0644 \u062A\u0645\u0627\u0645\u06CC \u062F\u0631\u062E\u0648\u0627\u0633\u062A\u200C\u0647\u0627 \u0627\u0632 \u0642\u0628\u06CC\u0644 \u062F\u0627\u0626\u0631\u06CC\u060C \u062C\u0645\u0639\u200C\u0622\u0648\u0631\u06CC \u0648 ...\r\n                    </span>\r\n                </mat-card-subtitle>\r\n            </mat-card-header>\r\n            <div fxLayout=\"row wrap\" fxLayoutAlign=\"center\" fxLayoutGap=\"25px\">\r\n                <mat-card fxFlex=\"20\" fxFlexLayout=\"row\">\r\n                    <div [formGroup]=\"formGroup\">\r\n                        <mat-form-field>\r\n                            <mat-select placeholder=\"layout mode\" formControlName=\"layoutMode\">\r\n                                <mat-option *ngFor=\"let item of layoutModes\" [value]=\"item\">{{item}}</mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                        <mat-slide-toggle formControlName=\"showLeftNavBar\">show left navbar</mat-slide-toggle>\r\n                        <mat-form-field>\r\n                            <mat-select placeholder=\"main side nav mode\" formControlName=\"mainSideNavMode\">\r\n                                <mat-option *ngFor=\"let item of sideNavModes\" [value]=\"item\">{{item}}</mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                        <mat-slide-toggle formControlName=\"showMainSidenav\">show main side nav</mat-slide-toggle>\r\n                        <mat-slide-toggle formControlName=\"stickyLeftNavBar\">sticky left navbar</mat-slide-toggle>\r\n                        <mat-slide-toggle formControlName=\"showSecondSideNav\">show second side nav</mat-slide-toggle>\r\n                        <mat-form-field>\r\n                            <mat-select placeholder=\"second side nav mode\" formControlName=\"secondSideNavMode\">\r\n                                <mat-option *ngFor=\"let item of sideNavModes\" [value]=\"item\">{{item}}</mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                    </div>\r\n                </mat-card>\r\n\r\n                <mat-card fxFlex fxLayout=\"column\">\r\n                    <h2 fxFlex>\r\n                        Menu Items\r\n                        <button mat-icon-button color=\"primary\" (click)=\"addMenu()\">\r\n                            <mat-icon aria-label=\"icon-button icon\">add</mat-icon>\r\n                        </button>\r\n                    </h2>\r\n                    <div fxFlex=\"nogrow\" *ngFor=\"let item of $any(formGroup).get('menuItems').controls\">\r\n                        <div [formGroup]=\"item\" fxLayout=\"row\" fxLayoutGap=\"25px\">\r\n                            <button mat-icon-button (click)=\"removeMenu(item)\">\r\n                                <mat-icon>delete</mat-icon>\r\n                            </button>\r\n                            <mat-form-field>\r\n                                <input type=\"text\" matInput placeholder=\"route\" formControlName=\"route\">\r\n                            </mat-form-field>\r\n                            <mat-form-field>\r\n                                <input type=\"text\" matInput placeholder=\"icon\" formControlName=\"icon\">\r\n                            </mat-form-field>\r\n                            <mat-form-field>\r\n                                <input type=\"text\" matInput placeholder=\"title\" formControlName=\"title\">\r\n                            </mat-form-field>\r\n                            <mat-form-field>\r\n                                <mat-select placeholder=\"roles\" formControlName=\"roles\" multiple>\r\n                                    <mat-option *ngFor=\"let role of roleItems$ | async\" [value]=\"role\">{{role}}</mat-option>\r\n                                </mat-select>\r\n                            </mat-form-field>\r\n                        </div>\r\n                    </div>\r\n                </mat-card>\r\n            </div>\r\n        </mat-card>\r\n    </div>\r\n</div>"
                }] }
    ];
    /** @nocollapse */
    LayoutModuleConfigComponent.ctorParameters = function () { return [
        { type: Injector },
        { type: Store }
    ]; };
    LayoutModuleConfigComponent.propDecorators = {
        configChanged: [{ type: Output, args: ["configChanged",] }],
        configFormGroup: [{ type: Input }]
    };
    return LayoutModuleConfigComponent;
}());
export { LayoutModuleConfigComponent };
if (false) {
    /** @type {?} */
    LayoutModuleConfigComponent.prototype.configChanged;
    /** @type {?} */
    LayoutModuleConfigComponent.prototype._configFormGroup;
    /** @type {?} */
    LayoutModuleConfigComponent.prototype.sideNavModes;
    /** @type {?} */
    LayoutModuleConfigComponent.prototype.layoutModes;
    /** @type {?} */
    LayoutModuleConfigComponent.prototype.formGroup;
    /** @type {?} */
    LayoutModuleConfigComponent.prototype.roleItems$;
    /**
     * @type {?}
     * @private
     */
    LayoutModuleConfigComponent.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    LayoutModuleConfigComponent.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LW1vZHVsZS1jb25maWcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9jb25maWcvIiwic291cmNlcyI6WyJsaWIvZHVtYi1jb21wb25lbnRzL2xheW91dC1jb25maWcvbGF5b3V0LW1vZHVsZS1jb25maWcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRixPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFL0UsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXBDLE9BQU8sRUFBZ0IsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFNUQ7SUEwQ0MscUNBQW9CLFFBQWtCLEVBQVUsS0FBMEI7UUFBdEQsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQXFCO1FBdENqRCxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUEwQjVELGNBQVMsR0FBRyxJQUFJLFNBQVMsQ0FBQztZQUN6QixVQUFVLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3RELGNBQWMsRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDMUQsZUFBZSxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMzRCxlQUFlLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzNELGdCQUFnQixFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM1RCxpQkFBaUIsRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDN0QsaUJBQWlCLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzdELFNBQVMsRUFBRSxJQUFJLFNBQVMsQ0FBQyxFQUFFLENBQUM7U0FDNUIsQ0FBQyxDQUFDO1FBSUYsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSzthQUMxQixNQUFNLENBQUMsWUFBWSxDQUFDO2FBQ3BCLElBQUksQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLElBQUksSUFBSSxFQUFkLENBQWMsRUFBQyxFQUFFLEdBQUc7Ozs7UUFBQyxVQUFBLFNBQVMsSUFBSSxPQUFBLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUF0QixDQUFzQixFQUFDLENBQUMsQ0FBQztRQUNuRixzQkFBc0I7UUFDdEIsbURBQW1EO1FBQ25ELGFBQWE7UUFDYixtQ0FBbUM7UUFDbkMsTUFBTTtJQUNQLENBQUM7SUFoREQsc0JBQ0ksd0RBQWU7Ozs7UUFpQm5CO1lBQ0MsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDOUIsQ0FBQzs7Ozs7UUFwQkQsVUFDb0IsZUFBMEI7WUFEOUMsaUJBaUJDO1lBZkEsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGVBQWUsQ0FBQztZQUN4QyxDQUFDLG1CQUFBLGVBQWUsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFhLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTzs7OztZQUFDLFVBQUEsT0FBTztnQkFDekUsQ0FBQyxtQkFBQSxLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQWEsQ0FBQyxDQUFDLElBQUksQ0FDcEQsSUFBSSxTQUFTLENBQUM7b0JBQ2IsS0FBSyxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDakQsSUFBSSxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7b0JBRWhELEtBQUssRUFBRSxJQUFJLFdBQVcsRUFBRTtvQkFDeEIsS0FBSyxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDakQsQ0FBQyxDQUNGLENBQUM7WUFDSCxDQUFDLEVBQUMsQ0FBQztZQUVILElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqRCxlQUFlLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7WUFBQyxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUEvQixDQUErQixFQUFDLENBQUM7UUFDakYsQ0FBQzs7O09BQUE7Ozs7SUFnQ0QsNkNBQU87OztJQUFQOztZQUNPLFFBQVEsR0FBRyxJQUFJLFNBQVMsQ0FBQztZQUM5QixLQUFLLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2pELElBQUksRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDaEQsS0FBSyxFQUFFLElBQUksV0FBVyxFQUFFO1lBQ3hCLEtBQUssRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDakQsQ0FBQztRQUVGLENBQUMsbUJBQUEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEVBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5RCxDQUFDLG1CQUFBLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckUsQ0FBQzs7Ozs7SUFDRCxnREFBVTs7OztJQUFWLFVBQVcsSUFBUztRQUNuQixRQUFRLENBQUM7O1lBQ0gsS0FBSyxHQUFHLENBQUMsbUJBQUEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEVBQWEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBQ25GLENBQUMsbUJBQUEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEVBQWEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoRSxDQUFDOztnQkF0RUQsU0FBUyxTQUFDO29CQUNWLHV1SkFBb0Q7aUJBQ3BEOzs7O2dCQVZnRCxRQUFRO2dCQUloRCxLQUFLOzs7Z0NBUVosTUFBTSxTQUFDLGVBQWU7a0NBRXRCLEtBQUs7O0lBaUVQLGtDQUFDO0NBQUEsQUF2RUQsSUF1RUM7U0FwRVksMkJBQTJCOzs7SUFDdkMsb0RBQTREOztJQUM1RCx1REFBNEI7O0lBdUI1QixtREFBdUI7O0lBQ3ZCLGtEQUFzQjs7SUFDdEIsZ0RBU0c7O0lBQ0gsaURBQWlDOzs7OztJQUVyQiwrQ0FBMEI7Ozs7O0lBQUUsNENBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIEluamVjdG9yIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBWYWxpZGF0b3JzLCBGb3JtQ29udHJvbCwgRm9ybUFycmF5IH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBtYXAsIGZpbHRlciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgRmVhdHVyZVN0YXRlLCBnZXRBcHBDb25maWcgfSBmcm9tIFwiLi4vLi4vcmVkdWNlcnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHRlbXBsYXRlVXJsOiBcIi4vbGF5b3V0LW1vZHVsZS1jb25maWcuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGF5b3V0TW9kdWxlQ29uZmlnQ29tcG9uZW50IHtcclxuXHRAT3V0cHV0KFwiY29uZmlnQ2hhbmdlZFwiKSBjb25maWdDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdF9jb25maWdGb3JtR3JvdXA6IEZvcm1Hcm91cDtcclxuXHRASW5wdXQoKVxyXG5cdHNldCBjb25maWdGb3JtR3JvdXAoY29uZmlnRm9ybUdyb3VwOiBGb3JtR3JvdXApIHtcclxuXHRcdHRoaXMuX2NvbmZpZ0Zvcm1Hcm91cCA9IGNvbmZpZ0Zvcm1Hcm91cDtcclxuXHRcdChjb25maWdGb3JtR3JvdXAuY29udHJvbHMubWVudUl0ZW1zIGFzIEZvcm1BcnJheSkuY29udHJvbHMuZm9yRWFjaChjb250cm9sID0+IHtcclxuXHRcdFx0KHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzLm1lbnVJdGVtcyBhcyBGb3JtQXJyYXkpLnB1c2goXHJcblx0XHRcdFx0bmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdFx0XHRyb3V0ZTogbmV3IEZvcm1Db250cm9sKFwiXCIsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXSksXHJcblx0XHRcdFx0XHRpY29uOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgW1ZhbGlkYXRvcnMucmVxdWlyZWRdKSxcclxuXHRcdFx0XHRcdC8vIHJvbGVzOiBuZXcgRm9ybUFycmF5KGNvbnRyb2wudmFsdWUucm9sZXMubWFwKChpKSA9PiBuZXcgRm9ybUNvbnRyb2woXCJBZG1pblwiKSkpLFxyXG5cdFx0XHRcdFx0cm9sZXM6IG5ldyBGb3JtQ29udHJvbCgpLFxyXG5cdFx0XHRcdFx0dGl0bGU6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF0pXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuZm9ybUdyb3VwLnBhdGNoVmFsdWUoY29uZmlnRm9ybUdyb3VwLnZhbHVlKTtcclxuXHRcdGNvbmZpZ0Zvcm1Hcm91cC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKGRhdGEgPT4gdGhpcy5mb3JtR3JvdXAucGF0Y2hWYWx1ZShkYXRhKSk7XHJcblx0fVxyXG5cdGdldCBjb25maWdGb3JtR3JvdXAoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fY29uZmlnRm9ybUdyb3VwO1xyXG5cdH1cclxuXHJcblx0c2lkZU5hdk1vZGVzOiBzdHJpbmdbXTtcclxuXHRsYXlvdXRNb2Rlczogc3RyaW5nW107XHJcblx0Zm9ybUdyb3VwID0gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRsYXlvdXRNb2RlOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgW1ZhbGlkYXRvcnMucmVxdWlyZWRdKSxcclxuXHRcdHNob3dMZWZ0TmF2QmFyOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgW1ZhbGlkYXRvcnMucmVxdWlyZWRdKSxcclxuXHRcdG1haW5TaWRlTmF2TW9kZTogbmV3IEZvcm1Db250cm9sKFwiXCIsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXSksXHJcblx0XHRzaG93TWFpblNpZGVuYXY6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF0pLFxyXG5cdFx0c3RpY2t5TGVmdE5hdkJhcjogbmV3IEZvcm1Db250cm9sKFwiXCIsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXSksXHJcblx0XHRzaG93U2Vjb25kU2lkZU5hdjogbmV3IEZvcm1Db250cm9sKFwiXCIsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXSksXHJcblx0XHRzZWNvbmRTaWRlTmF2TW9kZTogbmV3IEZvcm1Db250cm9sKFwiXCIsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXSksXHJcblx0XHRtZW51SXRlbXM6IG5ldyBGb3JtQXJyYXkoW10pXHJcblx0fSk7XHJcblx0cm9sZUl0ZW1zJDogT2JzZXJ2YWJsZTxzdHJpbmdbXT47XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLCBwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlU3RhdGU+KSB7XHJcblx0XHR0aGlzLnNpZGVOYXZNb2RlcyA9IFtcIm92ZXJcIiwgXCJwdXNoXCIsIFwic2lkZVwiXTtcclxuXHRcdHRoaXMubGF5b3V0TW9kZXMgPSBbXCJ3aXRoLW1hcmdpblwiLCBcIndpdGhvdXQtbWFyZ2luXCIsIFwiZGVmYXVsdFwiXTtcclxuXHRcdHRoaXMuY29uZmlnRm9ybUdyb3VwID0gdGhpcy5pbmplY3Rvci5nZXQoXCJjb25maWdGb3JtR3JvdXBcIik7XHJcblx0XHR0aGlzLnJvbGVJdGVtcyQgPSB0aGlzLnN0b3JlXHJcblx0XHRcdC5zZWxlY3QoZ2V0QXBwQ29uZmlnKVxyXG5cdFx0XHQucGlwZShmaWx0ZXIoY29uZmlnID0+IGNvbmZpZyAhPSBudWxsKSwgbWFwKGFwcGNvbmZpZyA9PiBhcHBjb25maWcuQ29uZmlnLlJvbGVzKSk7XHJcblx0XHQvLyB0aGlzLmNvbmZpZ0NoYW5nZWQuXHJcblx0XHQvLyB0aGlzLmZvcm1Hcm91cC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKHZhbHVlID0+IHtcclxuXHRcdC8vIFx0ZGVidWdnZXI7XHJcblx0XHQvLyBcdHRoaXMuY29uZmlnQ2hhbmdlZC5lbWl0KHZhbHVlKTtcclxuXHRcdC8vIH0pO1xyXG5cdH1cclxuXHRhZGRNZW51KCkge1xyXG5cdFx0Y29uc3QgbWVudUl0ZW0gPSBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0cm91dGU6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF0pLFxyXG5cdFx0XHRpY29uOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgW1ZhbGlkYXRvcnMucmVxdWlyZWRdKSxcclxuXHRcdFx0cm9sZXM6IG5ldyBGb3JtQ29udHJvbCgpLFxyXG5cdFx0XHR0aXRsZTogbmV3IEZvcm1Db250cm9sKFwiXCIsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXSlcclxuXHRcdH0pO1xyXG5cclxuXHRcdCh0aGlzLmZvcm1Hcm91cC5nZXQoXCJtZW51SXRlbXNcIikgYXMgRm9ybUFycmF5KS5wdXNoKG1lbnVJdGVtKTtcclxuXHRcdCh0aGlzLmNvbmZpZ0Zvcm1Hcm91cC5nZXQoXCJtZW51SXRlbXNcIikgYXMgRm9ybUFycmF5KS5wdXNoKG1lbnVJdGVtKTtcclxuXHR9XHJcblx0cmVtb3ZlTWVudShpdGVtOiBhbnkpIHtcclxuXHRcdGRlYnVnZ2VyO1xyXG5cdFx0Y29uc3QgaW5kZXggPSAodGhpcy5mb3JtR3JvdXAuZ2V0KFwibWVudUl0ZW1zXCIpIGFzIEZvcm1BcnJheSkuY29udHJvbHMuaW5kZXhPZihpdGVtKTtcclxuXHRcdCh0aGlzLmZvcm1Hcm91cC5nZXQoXCJtZW51SXRlbXNcIikgYXMgRm9ybUFycmF5KS5yZW1vdmVBdChpbmRleCk7XHJcblx0fVxyXG59XHJcbiJdfQ==