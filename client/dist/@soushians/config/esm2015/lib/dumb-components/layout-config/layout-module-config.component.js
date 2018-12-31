/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
            .pipe(filter(config => config != null), map(appconfig => appconfig.Config.Roles));
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
        (/** @type {?} */ (configFormGroup.controls["menuItems"])).controls.forEach(control => {
            (/** @type {?} */ (this.formGroup.controls["menuItems"])).push(new FormGroup({
                route: new FormControl("", [Validators.required]),
                icon: new FormControl("", [Validators.required]),
                // roles: new FormArray(control.value.roles.map((i) => new FormControl("Admin"))),
                roles: new FormControl(),
                title: new FormControl("", [Validators.required])
            }));
        });
        this.formGroup.patchValue(configFormGroup.value);
        configFormGroup.valueChanges.subscribe(data => this.formGroup.patchValue(data));
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
        (/** @type {?} */ (this.formGroup.get("menuItems"))).push(menuItem);
        (/** @type {?} */ (this.configFormGroup.get("menuItems"))).push(menuItem);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    removeMenu(item) {
        debugger;
        /** @type {?} */
        const index = (/** @type {?} */ (this.formGroup.get("menuItems"))).controls.indexOf(item);
        (/** @type {?} */ (this.formGroup.get("menuItems"))).removeAt(index);
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
    /** @type {?} */
    LayoutModuleConfigComponent.prototype.injector;
    /** @type {?} */
    LayoutModuleConfigComponent.prototype.store;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LW1vZHVsZS1jb25maWcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9jb25maWcvIiwic291cmNlcyI6WyJsaWIvZHVtYi1jb21wb25lbnRzL2xheW91dC1jb25maWcvbGF5b3V0LW1vZHVsZS1jb25maWcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRixPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFL0UsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXBDLE9BQU8sRUFBZ0IsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFLNUQsTUFBTSxPQUFPLDJCQUEyQjs7Ozs7SUF1Q3ZDLFlBQW9CLFFBQWtCLEVBQVUsS0FBMEI7UUFBdEQsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQXFCO1FBdEMxRSxxQkFBeUMsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQTBCNUQsaUJBQVksSUFBSSxTQUFTLENBQUM7WUFDekIsVUFBVSxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN0RCxjQUFjLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzFELGVBQWUsRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDM0QsZUFBZSxFQUFFLElBQUks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UUFFSCxtQkFBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQWMsRUFBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5RCxtQkFBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQWMsRUFBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUNwRTs7Ozs7SUFDRCxVQUFVLENBQUMsSUFBUztRQUNuQixRQUFRLENBQUM7O1FBQ1QsTUFBTSxLQUFLLEdBQUcsbUJBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFjLEVBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BGLG1CQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBYyxFQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQy9EOzs7WUF0RUQsU0FBUyxTQUFDO2dCQUNWLHV1SkFBb0Q7YUFDcEQ7Ozs7WUFWZ0QsUUFBUTtZQUloRCxLQUFLOzs7NEJBUVosTUFBTSxTQUFDLGVBQWU7OEJBRXRCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgSW5qZWN0b3IgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIFZhbGlkYXRvcnMsIEZvcm1Db250cm9sLCBGb3JtQXJyYXkgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IG1hcCwgZmlsdGVyIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBGZWF0dXJlU3RhdGUsIGdldEFwcENvbmZpZyB9IGZyb20gXCIuLi8uLi9yZWR1Y2Vyc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0dGVtcGxhdGVVcmw6IFwiLi9sYXlvdXQtbW9kdWxlLWNvbmZpZy5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMYXlvdXRNb2R1bGVDb25maWdDb21wb25lbnQge1xyXG5cdEBPdXRwdXQoXCJjb25maWdDaGFuZ2VkXCIpIGNvbmZpZ0NoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0X2NvbmZpZ0Zvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG5cdEBJbnB1dCgpXHJcblx0c2V0IGNvbmZpZ0Zvcm1Hcm91cChjb25maWdGb3JtR3JvdXA6IEZvcm1Hcm91cCkge1xyXG5cdFx0dGhpcy5fY29uZmlnRm9ybUdyb3VwID0gY29uZmlnRm9ybUdyb3VwO1xyXG5cdFx0KGNvbmZpZ0Zvcm1Hcm91cC5jb250cm9scy5tZW51SXRlbXMgYXMgRm9ybUFycmF5KS5jb250cm9scy5mb3JFYWNoKGNvbnRyb2wgPT4ge1xyXG5cdFx0XHQodGhpcy5mb3JtR3JvdXAuY29udHJvbHMubWVudUl0ZW1zIGFzIEZvcm1BcnJheSkucHVzaChcclxuXHRcdFx0XHRuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0XHRcdHJvdXRlOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgW1ZhbGlkYXRvcnMucmVxdWlyZWRdKSxcclxuXHRcdFx0XHRcdGljb246IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF0pLFxyXG5cdFx0XHRcdFx0Ly8gcm9sZXM6IG5ldyBGb3JtQXJyYXkoY29udHJvbC52YWx1ZS5yb2xlcy5tYXAoKGkpID0+IG5ldyBGb3JtQ29udHJvbChcIkFkbWluXCIpKSksXHJcblx0XHRcdFx0XHRyb2xlczogbmV3IEZvcm1Db250cm9sKCksXHJcblx0XHRcdFx0XHR0aXRsZTogbmV3IEZvcm1Db250cm9sKFwiXCIsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXSlcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5mb3JtR3JvdXAucGF0Y2hWYWx1ZShjb25maWdGb3JtR3JvdXAudmFsdWUpO1xyXG5cdFx0Y29uZmlnRm9ybUdyb3VwLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoZGF0YSA9PiB0aGlzLmZvcm1Hcm91cC5wYXRjaFZhbHVlKGRhdGEpKTtcclxuXHR9XHJcblx0Z2V0IGNvbmZpZ0Zvcm1Hcm91cCgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9jb25maWdGb3JtR3JvdXA7XHJcblx0fVxyXG5cclxuXHRzaWRlTmF2TW9kZXM6IHN0cmluZ1tdO1xyXG5cdGxheW91dE1vZGVzOiBzdHJpbmdbXTtcclxuXHRmb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdGxheW91dE1vZGU6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF0pLFxyXG5cdFx0c2hvd0xlZnROYXZCYXI6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF0pLFxyXG5cdFx0bWFpblNpZGVOYXZNb2RlOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgW1ZhbGlkYXRvcnMucmVxdWlyZWRdKSxcclxuXHRcdHNob3dNYWluU2lkZW5hdjogbmV3IEZvcm1Db250cm9sKFwiXCIsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXSksXHJcblx0XHRzdGlja3lMZWZ0TmF2QmFyOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgW1ZhbGlkYXRvcnMucmVxdWlyZWRdKSxcclxuXHRcdHNob3dTZWNvbmRTaWRlTmF2OiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgW1ZhbGlkYXRvcnMucmVxdWlyZWRdKSxcclxuXHRcdHNlY29uZFNpZGVOYXZNb2RlOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgW1ZhbGlkYXRvcnMucmVxdWlyZWRdKSxcclxuXHRcdG1lbnVJdGVtczogbmV3IEZvcm1BcnJheShbXSlcclxuXHR9KTtcclxuXHRyb2xlSXRlbXMkOiBPYnNlcnZhYmxlPHN0cmluZ1tdPjtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsIHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVTdGF0ZT4pIHtcclxuXHRcdHRoaXMuc2lkZU5hdk1vZGVzID0gW1wib3ZlclwiLCBcInB1c2hcIiwgXCJzaWRlXCJdO1xyXG5cdFx0dGhpcy5sYXlvdXRNb2RlcyA9IFtcIndpdGgtbWFyZ2luXCIsIFwid2l0aG91dC1tYXJnaW5cIiwgXCJkZWZhdWx0XCJdO1xyXG5cdFx0dGhpcy5jb25maWdGb3JtR3JvdXAgPSB0aGlzLmluamVjdG9yLmdldChcImNvbmZpZ0Zvcm1Hcm91cFwiKTtcclxuXHRcdHRoaXMucm9sZUl0ZW1zJCA9IHRoaXMuc3RvcmVcclxuXHRcdFx0LnNlbGVjdChnZXRBcHBDb25maWcpXHJcblx0XHRcdC5waXBlKGZpbHRlcihjb25maWcgPT4gY29uZmlnICE9IG51bGwpLCBtYXAoYXBwY29uZmlnID0+IGFwcGNvbmZpZy5Db25maWcuUm9sZXMpKTtcclxuXHRcdC8vIHRoaXMuY29uZmlnQ2hhbmdlZC5cclxuXHRcdC8vIHRoaXMuZm9ybUdyb3VwLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUodmFsdWUgPT4ge1xyXG5cdFx0Ly8gXHRkZWJ1Z2dlcjtcclxuXHRcdC8vIFx0dGhpcy5jb25maWdDaGFuZ2VkLmVtaXQodmFsdWUpO1xyXG5cdFx0Ly8gfSk7XHJcblx0fVxyXG5cdGFkZE1lbnUoKSB7XHJcblx0XHRjb25zdCBtZW51SXRlbSA9IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRyb3V0ZTogbmV3IEZvcm1Db250cm9sKFwiXCIsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXSksXHJcblx0XHRcdGljb246IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF0pLFxyXG5cdFx0XHRyb2xlczogbmV3IEZvcm1Db250cm9sKCksXHJcblx0XHRcdHRpdGxlOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgW1ZhbGlkYXRvcnMucmVxdWlyZWRdKVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0KHRoaXMuZm9ybUdyb3VwLmdldChcIm1lbnVJdGVtc1wiKSBhcyBGb3JtQXJyYXkpLnB1c2gobWVudUl0ZW0pO1xyXG5cdFx0KHRoaXMuY29uZmlnRm9ybUdyb3VwLmdldChcIm1lbnVJdGVtc1wiKSBhcyBGb3JtQXJyYXkpLnB1c2gobWVudUl0ZW0pO1xyXG5cdH1cclxuXHRyZW1vdmVNZW51KGl0ZW06IGFueSkge1xyXG5cdFx0ZGVidWdnZXI7XHJcblx0XHRjb25zdCBpbmRleCA9ICh0aGlzLmZvcm1Hcm91cC5nZXQoXCJtZW51SXRlbXNcIikgYXMgRm9ybUFycmF5KS5jb250cm9scy5pbmRleE9mKGl0ZW0pO1xyXG5cdFx0KHRoaXMuZm9ybUdyb3VwLmdldChcIm1lbnVJdGVtc1wiKSBhcyBGb3JtQXJyYXkpLnJlbW92ZUF0KGluZGV4KTtcclxuXHR9XHJcbn1cclxuIl19