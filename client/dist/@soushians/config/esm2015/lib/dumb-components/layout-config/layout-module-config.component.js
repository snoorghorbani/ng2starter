/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter, Input, Injector } from "@angular/core";
import { FormGroup, Validators, FormControl, FormArray } from "@angular/forms";
import { map, filter } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { getAppConfig } from "../../reducers";
export class LayoutModuleConfigComponent {
    /**
     * @param {?} injector
     * @param {?} store
     */
    constructor(injector, store) {
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
        config => config != null)), map((/**
         * @param {?} appconfig
         * @return {?}
         */
        appconfig => appconfig.Config.Roles)));
        // this.configChanged.
        // this.formGroup.valueChanges.subscribe(value => {
        // 	debugger;
        // 	this.configChanged.emit(value);
        // });
    }
    /**
     * @param {?} configFormGroup
     * @return {?}
     */
    set configFormGroup(configFormGroup) {
        this._configFormGroup = configFormGroup;
        ((/** @type {?} */ (configFormGroup.controls.menuItems))).controls.forEach((/**
         * @param {?} control
         * @return {?}
         */
        control => {
            ((/** @type {?} */ (this.formGroup.controls.menuItems))).push(new FormGroup({
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
        data => this.formGroup.patchValue(data)));
    }
    /**
     * @return {?}
     */
    get configFormGroup() {
        return this._configFormGroup;
    }
    /**
     * @return {?}
     */
    addMenu() {
        /** @type {?} */
        const menuItem = new FormGroup({
            route: new FormControl("", [Validators.required]),
            icon: new FormControl("", [Validators.required]),
            roles: new FormControl(),
            title: new FormControl("", [Validators.required])
        });
        ((/** @type {?} */ (this.formGroup.get("menuItems")))).push(menuItem);
        ((/** @type {?} */ (this.configFormGroup.get("menuItems")))).push(menuItem);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    removeMenu(item) {
        debugger;
        /** @type {?} */
        const index = ((/** @type {?} */ (this.formGroup.get("menuItems")))).controls.indexOf(item);
        ((/** @type {?} */ (this.formGroup.get("menuItems")))).removeAt(index);
    }
}
LayoutModuleConfigComponent.decorators = [
    { type: Component, args: [{
                template: "<div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"25px\" class=\"main-container\">\r\n\r\n    <div class=\"content-action\">\r\n        <mat-card class=\"with-sticky-action\">\r\n            <mat-card-header>\r\n                <mat-card-title fxLayout=\"row\" fxLayoutGap=\"5px\">\r\n                    <mat-icon>settings_input_component</mat-icon>\r\n                    <span>\u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0645\u0627\u0698\u0648\u0644 Layout</span>\r\n                </mat-card-title>\r\n                <mat-card-subtitle fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                    <span>\r\n                        \u0634\u0627\u0645\u0644 \u062A\u0645\u0627\u0645\u06CC \u062F\u0631\u062E\u0648\u0627\u0633\u062A\u200C\u0647\u0627 \u0627\u0632 \u0642\u0628\u06CC\u0644 \u062F\u0627\u0626\u0631\u06CC\u060C \u062C\u0645\u0639\u200C\u0622\u0648\u0631\u06CC \u0648 ...\r\n                    </span>\r\n                </mat-card-subtitle>\r\n            </mat-card-header>\r\n            <div fxLayout=\"row wrap\" fxLayoutAlign=\"center\" fxLayoutGap=\"25px\">\r\n                <mat-card fxFlex=\"20\" fxFlexLayout=\"row\">\r\n                    <div [formGroup]=\"formGroup\">\r\n                        <mat-form-field>\r\n                            <mat-select placeholder=\"layout mode\" formControlName=\"layoutMode\">\r\n                                <mat-option *ngFor=\"let item of layoutModes\" [value]=\"item\">{{item}}</mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                        <mat-slide-toggle formControlName=\"showLeftNavBar\">show left navbar</mat-slide-toggle>\r\n                        <mat-form-field>\r\n                            <mat-select placeholder=\"main side nav mode\" formControlName=\"mainSideNavMode\">\r\n                                <mat-option *ngFor=\"let item of sideNavModes\" [value]=\"item\">{{item}}</mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                        <mat-slide-toggle formControlName=\"showMainSidenav\">show main side nav</mat-slide-toggle>\r\n                        <mat-slide-toggle formControlName=\"stickyLeftNavBar\">sticky left navbar</mat-slide-toggle>\r\n                        <mat-slide-toggle formControlName=\"showSecondSideNav\">show second side nav</mat-slide-toggle>\r\n                        <mat-form-field>\r\n                            <mat-select placeholder=\"second side nav mode\" formControlName=\"secondSideNavMode\">\r\n                                <mat-option *ngFor=\"let item of sideNavModes\" [value]=\"item\">{{item}}</mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                    </div>\r\n                </mat-card>\r\n\r\n                <mat-card fxFlex fxLayout=\"column\">\r\n                    <h2 fxFlex>\r\n                        Menu Items\r\n                        <button mat-icon-button color=\"primary\" (click)=\"addMenu()\">\r\n                            <mat-icon aria-label=\"icon-button icon\">add</mat-icon>\r\n                        </button>\r\n                    </h2>\r\n                    <div fxFlex=\"nogrow\" *ngFor=\"let item of $any(formGroup).get('menuItems').controls\">\r\n                        <div [formGroup]=\"item\" fxLayout=\"row\" fxLayoutGap=\"25px\">\r\n                            <button mat-icon-button (click)=\"removeMenu(item)\">\r\n                                <mat-icon>delete</mat-icon>\r\n                            </button>\r\n                            <mat-form-field>\r\n                                <input type=\"text\" matInput placeholder=\"route\" formControlName=\"route\">\r\n                            </mat-form-field>\r\n                            <mat-form-field>\r\n                                <input type=\"text\" matInput placeholder=\"icon\" formControlName=\"icon\">\r\n                            </mat-form-field>\r\n                            <mat-form-field>\r\n                                <input type=\"text\" matInput placeholder=\"title\" formControlName=\"title\">\r\n                            </mat-form-field>\r\n                            <mat-form-field>\r\n                                <mat-select placeholder=\"roles\" formControlName=\"roles\" multiple>\r\n                                    <mat-option *ngFor=\"let role of roleItems$ | async\" [value]=\"role\">{{role}}</mat-option>\r\n                                </mat-select>\r\n                            </mat-form-field>\r\n                        </div>\r\n                    </div>\r\n                </mat-card>\r\n            </div>\r\n        </mat-card>\r\n    </div>\r\n</div>"
            }] }
];
/** @nocollapse */
LayoutModuleConfigComponent.ctorParameters = () => [
    { type: Injector },
    { type: Store }
];
LayoutModuleConfigComponent.propDecorators = {
    configChanged: [{ type: Output, args: ["configChanged",] }],
    configFormGroup: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LW1vZHVsZS1jb25maWcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9jb25maWcvIiwic291cmNlcyI6WyJsaWIvZHVtYi1jb21wb25lbnRzL2xheW91dC1jb25maWcvbGF5b3V0LW1vZHVsZS1jb25maWcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRixPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFL0UsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXBDLE9BQU8sRUFBZ0IsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFLNUQsTUFBTSxPQUFPLDJCQUEyQjs7Ozs7SUF1Q3ZDLFlBQW9CLFFBQWtCLEVBQVUsS0FBMEI7UUFBdEQsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQXFCO1FBdENqRCxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUEwQjVELGNBQVMsR0FBRyxJQUFJLFNBQVMsQ0FBQztZQUN6QixVQUFVLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3RELGNBQWMsRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDMUQsZUFBZSxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMzRCxlQUFlLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzNELGdCQUFnQixFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM1RCxpQkFBaUIsRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDN0QsaUJBQWlCLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzdELFNBQVMsRUFBRSxJQUFJLFNBQVMsQ0FBQyxFQUFFLENBQUM7U0FDNUIsQ0FBQyxDQUFDO1FBSUYsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSzthQUMxQixNQUFNLENBQUMsWUFBWSxDQUFDO2FBQ3BCLElBQUksQ0FBQyxNQUFNOzs7O1FBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLElBQUksSUFBSSxFQUFDLEVBQUUsR0FBRzs7OztRQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDO1FBQ25GLHNCQUFzQjtRQUN0QixtREFBbUQ7UUFDbkQsYUFBYTtRQUNiLG1DQUFtQztRQUNuQyxNQUFNO0lBQ1AsQ0FBQzs7Ozs7SUFoREQsSUFDSSxlQUFlLENBQUMsZUFBMEI7UUFDN0MsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGVBQWUsQ0FBQztRQUN4QyxDQUFDLG1CQUFBLGVBQWUsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFhLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTzs7OztRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQzVFLENBQUMsbUJBQUEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFhLENBQUMsQ0FBQyxJQUFJLENBQ3BELElBQUksU0FBUyxDQUFDO2dCQUNiLEtBQUssRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ2pELElBQUksRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7O2dCQUVoRCxLQUFLLEVBQUUsSUFBSSxXQUFXLEVBQUU7Z0JBQ3hCLEtBQUssRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDakQsQ0FBQyxDQUNGLENBQUM7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqRCxlQUFlLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUM7SUFDakYsQ0FBQzs7OztJQUNELElBQUksZUFBZTtRQUNsQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUM5QixDQUFDOzs7O0lBNkJELE9BQU87O2NBQ0EsUUFBUSxHQUFHLElBQUksU0FBUyxDQUFDO1lBQzlCLEtBQUssRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDakQsSUFBSSxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNoRCxLQUFLLEVBQUUsSUFBSSxXQUFXLEVBQUU7WUFDeEIsS0FBSyxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNqRCxDQUFDO1FBRUYsQ0FBQyxtQkFBQSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzlELENBQUMsbUJBQUEsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEVBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyRSxDQUFDOzs7OztJQUNELFVBQVUsQ0FBQyxJQUFTO1FBQ25CLFFBQVEsQ0FBQzs7Y0FDSCxLQUFLLEdBQUcsQ0FBQyxtQkFBQSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBYSxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFDbkYsQ0FBQyxtQkFBQSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBYSxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hFLENBQUM7OztZQXRFRCxTQUFTLFNBQUM7Z0JBQ1YsdXVKQUFvRDthQUNwRDs7OztZQVZnRCxRQUFRO1lBSWhELEtBQUs7Ozs0QkFRWixNQUFNLFNBQUMsZUFBZTs4QkFFdEIsS0FBSzs7OztJQUZOLG9EQUE0RDs7SUFDNUQsdURBQTRCOztJQXVCNUIsbURBQXVCOztJQUN2QixrREFBc0I7O0lBQ3RCLGdEQVNHOztJQUNILGlEQUFpQzs7Ozs7SUFFckIsK0NBQTBCOzs7OztJQUFFLDRDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0LCBJbmplY3RvciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgVmFsaWRhdG9ycywgRm9ybUNvbnRyb2wsIEZvcm1BcnJheSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgbWFwLCBmaWx0ZXIgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IEZlYXR1cmVTdGF0ZSwgZ2V0QXBwQ29uZmlnIH0gZnJvbSBcIi4uLy4uL3JlZHVjZXJzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHR0ZW1wbGF0ZVVybDogXCIuL2xheW91dC1tb2R1bGUtY29uZmlnLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIExheW91dE1vZHVsZUNvbmZpZ0NvbXBvbmVudCB7XHJcblx0QE91dHB1dChcImNvbmZpZ0NoYW5nZWRcIikgY29uZmlnQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRfY29uZmlnRm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcblx0QElucHV0KClcclxuXHRzZXQgY29uZmlnRm9ybUdyb3VwKGNvbmZpZ0Zvcm1Hcm91cDogRm9ybUdyb3VwKSB7XHJcblx0XHR0aGlzLl9jb25maWdGb3JtR3JvdXAgPSBjb25maWdGb3JtR3JvdXA7XHJcblx0XHQoY29uZmlnRm9ybUdyb3VwLmNvbnRyb2xzLm1lbnVJdGVtcyBhcyBGb3JtQXJyYXkpLmNvbnRyb2xzLmZvckVhY2goY29udHJvbCA9PiB7XHJcblx0XHRcdCh0aGlzLmZvcm1Hcm91cC5jb250cm9scy5tZW51SXRlbXMgYXMgRm9ybUFycmF5KS5wdXNoKFxyXG5cdFx0XHRcdG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRcdFx0cm91dGU6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF0pLFxyXG5cdFx0XHRcdFx0aWNvbjogbmV3IEZvcm1Db250cm9sKFwiXCIsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXSksXHJcblx0XHRcdFx0XHQvLyByb2xlczogbmV3IEZvcm1BcnJheShjb250cm9sLnZhbHVlLnJvbGVzLm1hcCgoaSkgPT4gbmV3IEZvcm1Db250cm9sKFwiQWRtaW5cIikpKSxcclxuXHRcdFx0XHRcdHJvbGVzOiBuZXcgRm9ybUNvbnRyb2woKSxcclxuXHRcdFx0XHRcdHRpdGxlOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgW1ZhbGlkYXRvcnMucmVxdWlyZWRdKVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCk7XHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLmZvcm1Hcm91cC5wYXRjaFZhbHVlKGNvbmZpZ0Zvcm1Hcm91cC52YWx1ZSk7XHJcblx0XHRjb25maWdGb3JtR3JvdXAudmFsdWVDaGFuZ2VzLnN1YnNjcmliZShkYXRhID0+IHRoaXMuZm9ybUdyb3VwLnBhdGNoVmFsdWUoZGF0YSkpO1xyXG5cdH1cclxuXHRnZXQgY29uZmlnRm9ybUdyb3VwKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2NvbmZpZ0Zvcm1Hcm91cDtcclxuXHR9XHJcblxyXG5cdHNpZGVOYXZNb2Rlczogc3RyaW5nW107XHJcblx0bGF5b3V0TW9kZXM6IHN0cmluZ1tdO1xyXG5cdGZvcm1Hcm91cCA9IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0bGF5b3V0TW9kZTogbmV3IEZvcm1Db250cm9sKFwiXCIsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXSksXHJcblx0XHRzaG93TGVmdE5hdkJhcjogbmV3IEZvcm1Db250cm9sKFwiXCIsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXSksXHJcblx0XHRtYWluU2lkZU5hdk1vZGU6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF0pLFxyXG5cdFx0c2hvd01haW5TaWRlbmF2OiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgW1ZhbGlkYXRvcnMucmVxdWlyZWRdKSxcclxuXHRcdHN0aWNreUxlZnROYXZCYXI6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF0pLFxyXG5cdFx0c2hvd1NlY29uZFNpZGVOYXY6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF0pLFxyXG5cdFx0c2Vjb25kU2lkZU5hdk1vZGU6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF0pLFxyXG5cdFx0bWVudUl0ZW1zOiBuZXcgRm9ybUFycmF5KFtdKVxyXG5cdH0pO1xyXG5cdHJvbGVJdGVtcyQ6IE9ic2VydmFibGU8c3RyaW5nW10+O1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3RvciwgcHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVN0YXRlPikge1xyXG5cdFx0dGhpcy5zaWRlTmF2TW9kZXMgPSBbXCJvdmVyXCIsIFwicHVzaFwiLCBcInNpZGVcIl07XHJcblx0XHR0aGlzLmxheW91dE1vZGVzID0gW1wid2l0aC1tYXJnaW5cIiwgXCJ3aXRob3V0LW1hcmdpblwiLCBcImRlZmF1bHRcIl07XHJcblx0XHR0aGlzLmNvbmZpZ0Zvcm1Hcm91cCA9IHRoaXMuaW5qZWN0b3IuZ2V0KFwiY29uZmlnRm9ybUdyb3VwXCIpO1xyXG5cdFx0dGhpcy5yb2xlSXRlbXMkID0gdGhpcy5zdG9yZVxyXG5cdFx0XHQuc2VsZWN0KGdldEFwcENvbmZpZylcclxuXHRcdFx0LnBpcGUoZmlsdGVyKGNvbmZpZyA9PiBjb25maWcgIT0gbnVsbCksIG1hcChhcHBjb25maWcgPT4gYXBwY29uZmlnLkNvbmZpZy5Sb2xlcykpO1xyXG5cdFx0Ly8gdGhpcy5jb25maWdDaGFuZ2VkLlxyXG5cdFx0Ly8gdGhpcy5mb3JtR3JvdXAudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSh2YWx1ZSA9PiB7XHJcblx0XHQvLyBcdGRlYnVnZ2VyO1xyXG5cdFx0Ly8gXHR0aGlzLmNvbmZpZ0NoYW5nZWQuZW1pdCh2YWx1ZSk7XHJcblx0XHQvLyB9KTtcclxuXHR9XHJcblx0YWRkTWVudSgpIHtcclxuXHRcdGNvbnN0IG1lbnVJdGVtID0gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdHJvdXRlOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgW1ZhbGlkYXRvcnMucmVxdWlyZWRdKSxcclxuXHRcdFx0aWNvbjogbmV3IEZvcm1Db250cm9sKFwiXCIsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXSksXHJcblx0XHRcdHJvbGVzOiBuZXcgRm9ybUNvbnRyb2woKSxcclxuXHRcdFx0dGl0bGU6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF0pXHJcblx0XHR9KTtcclxuXHJcblx0XHQodGhpcy5mb3JtR3JvdXAuZ2V0KFwibWVudUl0ZW1zXCIpIGFzIEZvcm1BcnJheSkucHVzaChtZW51SXRlbSk7XHJcblx0XHQodGhpcy5jb25maWdGb3JtR3JvdXAuZ2V0KFwibWVudUl0ZW1zXCIpIGFzIEZvcm1BcnJheSkucHVzaChtZW51SXRlbSk7XHJcblx0fVxyXG5cdHJlbW92ZU1lbnUoaXRlbTogYW55KSB7XHJcblx0XHRkZWJ1Z2dlcjtcclxuXHRcdGNvbnN0IGluZGV4ID0gKHRoaXMuZm9ybUdyb3VwLmdldChcIm1lbnVJdGVtc1wiKSBhcyBGb3JtQXJyYXkpLmNvbnRyb2xzLmluZGV4T2YoaXRlbSk7XHJcblx0XHQodGhpcy5mb3JtR3JvdXAuZ2V0KFwibWVudUl0ZW1zXCIpIGFzIEZvcm1BcnJheSkucmVtb3ZlQXQoaW5kZXgpO1xyXG5cdH1cclxufVxyXG4iXX0=