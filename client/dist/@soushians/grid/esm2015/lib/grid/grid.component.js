/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Store } from "@ngrx/store";
import { filter, map } from "rxjs/operators";
import { MatBottomSheet } from "@angular/material";
import { getAccountInfo, UserFacadeService } from "@soushians/user";
import { GridModel } from "../models/grid.model";
import { GridService } from "../services/grid.service";
import { GridConfigurationService } from "../services/grid-configuration.service";
import { DynamicGridItemConfigComponent } from "../grid-item/dynamic-grid-item-config.directive";
import { GridConfigComponent } from "../grid-config/grid-config.component";
import { UpsertGridStartAction } from "../services/api/upsert-grid/upsert-grid.actions";
export class GridComponent {
    /**
     * @param {?} store
     * @param {?} service
     * @param {?} userFacadeService
     * @param {?} configurationService
     * @param {?} bottomSheet
     */
    constructor(store, service, userFacadeService, configurationService, bottomSheet) {
        this.store = store;
        this.service = service;
        this.userFacadeService = userFacadeService;
        this.configurationService = configurationService;
        this.bottomSheet = bottomSheet;
        this.itemValidateCallback = new EventEmitter();
        this.itemRemovedCallback = new EventEmitter();
        this.itemInitCallback = new EventEmitter();
        this.itemResizeCallback = new EventEmitter();
        this.itemChangeCallback = new EventEmitter();
        this.gridSizeChangedCallback = new EventEmitter();
        this.destroyCallback = new EventEmitter();
        this.initCallback = new EventEmitter();
        this.ready = false;
        this.options = {};
        this.userFacadeService
            .getInfo()
            .pipe(filter((user) => user.CurrentSession != undefined), map((user) => user.CurrentSession.Username))
            .subscribe(username => {
            this.username = username;
        });
        this.gridItemTypes = Object.keys(this.configurationService.config$.getValue().types);
        this.havePermission$ = this.store.select(getAccountInfo).pipe(map(user => {
            /** @type {?} */
            const criteria = [user, user._id, this.grid, this.grid.owner];
            if (criteria.some(i => !i))
                return false;
            return user._id == this.grid.owner;
        }));
    }
    /**
     * @param {?} item
     * @param {?} itemComponent
     * @return {?}
     */
    static itemChange(item, itemComponent) {
        console.log("itemChanged", item, itemComponent);
    }
    /**
     * @param {?} item
     * @param {?} itemComponent
     * @return {?}
     */
    static itemResize(item, itemComponent) {
        console.log("itemResized", item, itemComponent);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // this.items = [ { cols: 2, rows: 1, y: 0, x: 0 }, { cols: 2, rows: 2, y: 0, x: 2 } ];
        this.grid = new GridModel({
            oid: this.oid,
            config: {}
        });
        this._get_grid_by_oid_and_update_component();
    }
    /**
     * @param {?} item
     * @return {?}
     */
    _initCallback(item) {
        this.initCallback.emit(item);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    removeItem(item) {
        this.grid.items.splice(this.grid.items.indexOf(item), 1);
    }
    /**
     * @param {?} item
     * @param {?} event
     * @return {?}
     */
    make_public(item, event) {
        debugger;
        item.access = event.checked ? "public" : "private";
        this.service.update_item_access(item).subscribe(item => {
            debugger;
        });
    }
    /**
     * @param {?} e
     * @return {?}
     */
    addItem(e) {
        debugger;
        e.stopPropagation();
        this.grid.items.push((/** @type {?} */ ({})));
    }
    /**
     * @param {?} event
     * @param {?} item
     * @return {?}
     */
    emptyCellClick(event, item) {
        console.log("empty cell click", event, item);
        this.grid.items.push((/** @type {?} */ (item)));
    }
    /**
     * @param {?} e
     * @return {?}
     */
    openConfig(e) {
        debugger;
        e.stopPropagation();
        e.preventDefault();
        this.bottomSheet.open(GridConfigComponent, {
            data: {
                grid: this.grid
            }
        });
    }
    /**
     * @param {?} e
     * @return {?}
     */
    saveConfig(e) {
        debugger;
        e.stopPropagation();
        e.stopImmediatePropagation();
        e.preventDefault();
        /**
         * TODO:
         * احزار هویت در سمت نود اتحام شود
        * کانفیگ برای گرفتن شناسه کاربر
         */
        this.store.dispatch(new UpsertGridStartAction(this.grid));
    }
    /**
     * @param {?} item
     * @return {?}
     */
    gridItemTypeChanged(item) {
        /** @type {?} */
        const bs = this.bottomSheet.open(DynamicGridItemConfigComponent, {
            data: {
                type: item.type
            }
        });
        bs.afterDismissed().subscribe(data => {
            item.config = bs.instance.config;
            item.valid = bs.instance.valid;
        });
    }
    /**
     * @param {?} item
     * @return {?}
     */
    showConfig(item) {
        /** @type {?} */
        const bs = this.bottomSheet.open(DynamicGridItemConfigComponent, {
            data: {
                type: item.type
            }
        });
        bs.afterDismissed().subscribe(data => {
            item.config = bs.instance.config;
            item.valid = bs.instance.valid;
        });
    }
    // tslint:disable-next-line:member-ordering
    // @ViewChild("DiagramViewComponent") _ngsDynamicGridItemView: DiagramViewComponent;
    /**
     * @return {?}
     */
    goToEdit() {
        debugger;
        // tslint:disable-next-line:no-unused-expression
        // this._ngsDynamicGridItemView;
    }
    /**
     * private methods
     * @return {?}
     */
    _get_grid_by_oid_and_update_component() {
        this.service.selectById(this.oid).pipe(filter(data => data != undefined)).subscribe(data => {
            this.grid = data;
            debugger;
            data.config.outerMarginBottom = +data.config.outerMarginBottom;
            data.config.outerMarginRight = +data.config.outerMarginRight;
            this.options = Object.assign({}, this.options, data.config);
            // this.options.draggable = {
            // 	enabled: true
            // };
            // this.options.emptyCellContextMenuCallback = this.emptyCellClick.bind(this);
            // this.options.emptyCellDropCallback = this.emptyCellClick.bind(this);
            if (this.options.enableEmptyCellDrag)
                this.options.emptyCellDragCallback = this.emptyCellClick.bind(this);
            // if (this.options.enableEmptyCellClick) this.options.emptyCellClickCallback = this.emptyCellClick.bind(this);
            this.ready = true;
            // this.options.api.optionsChanged();
        });
    }
}
GridComponent.decorators = [
    { type: Component, args: [{
                selector: "ngs-grid",
                template: "<gridster [options]=\"options\">\r\n    <div class=\"actions\" >\r\n        <button mat-mini-fab (click)=\"addItem($event)\">\r\n            <mat-icon>add</mat-icon>\r\n        </button>\r\n        <button mat-mini-fab (click)=\"openConfig($event)\" *ngIf=\"havePermission$ | async\">\r\n            <mat-icon>dashboard</mat-icon>\r\n        </button>\r\n        <button mat-mini-fab (click)=\"saveConfig($event)\">\r\n            <mat-icon>done</mat-icon>\r\n        </button>\r\n    </div>\r\n    <gridster-item [item]=\"item\" *ngFor=\"let item of grid.items\">\r\n        <div class=\"initializer\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n            <div fxFlex=\"nogrow\">\r\n                <button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n                    <mat-icon>more_horiz</mat-icon>\r\n                </button>\r\n                <mat-menu #menu=\"matMenu\" class=\"rtl\">\r\n                    <mat-checkbox *ngIf=\"grid.owner == username\" labelPosition=\"before\" [checked]=\"item.access=='public'\"\r\n                        (change)=\"make_public(item,$event)\">\u0639\u0645\u0648\u0645\u06CC</mat-checkbox>\r\n                    <button mat-menu-item class=\"rtl\" (click)=\"goToEdit()\">\r\n                        <mat-icon>edit</mat-icon>\r\n                        <span>\u0648\u06CC\u0631\u0627\u06CC\u0634 \u0627\u0641\u0632\u0648\u0646\u0647</span>\r\n                    </button>\r\n                    <!-- <button mat-menu-item class=\"rtl\" (click)=\"showConfig(item)\">\r\n                        <mat-icon>settings</mat-icon>\r\n                        <span>\u062A\u0646\u0638\u06CC\u0645\u0627\u062A</span>\r\n                    </button> -->\r\n                    <button mat-menu-item class=\"rtl\" (click)=\"removeItem(item)\">\r\n                        <mat-icon>delete</mat-icon>\r\n                        <span>\u062D\u0630\u0641</span>\r\n                    </button>\r\n                </mat-menu>\r\n            </div>\r\n        </div>\r\n        <div class=\"widget-content\">\r\n            <div *ngIf=\"!item.valid\" fxFlex=\"100\" class=\"form-container\">\r\n                <h4>\u062A\u0646\u0638\u06CC\u0645\u0627\u062A</h4>\r\n                <mat-form-field fxFlex=\"grow\">\r\n                    <mat-select placeholder=\"Grid Item Type\" [(ngModel)]=\"item.type\" (selectionChange)=\"gridItemTypeChanged(item)\">\r\n                        <mat-option *ngFor=\"let item of gridItemTypes\" [value]=\"item\">\r\n                            {{item}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </div>\r\n            <div *ngIf=\"item.valid\" #test [ngsDynamicGridItemView]=\"item\"></div>\r\n        </div>\r\n    </gridster-item>\r\n</gridster>",
                styles: [":host{width:100%;min-height:calc(100vh - 205px);display:block;direction:ltr}.initializer{position:absolute;z-index:10;top:5px;left:5px;height:25px}.actions{position:absolute;top:25px;right:25px;z-index:5}.actions button{margin-left:10px}.widget-content{position:relative;height:100%}.form-container{padding:25px;width:100%}[dir=rtl] .form-container{direction:rtl}.form-container mat-form-field{width:100%}.rtl{direction:rtl}"]
            }] }
];
/** @nocollapse */
GridComponent.ctorParameters = () => [
    { type: Store },
    { type: GridService },
    { type: UserFacadeService },
    { type: GridConfigurationService },
    { type: MatBottomSheet }
];
GridComponent.propDecorators = {
    itemValidateCallback: [{ type: Output }],
    itemRemovedCallback: [{ type: Output }],
    itemInitCallback: [{ type: Output }],
    itemResizeCallback: [{ type: Output }],
    itemChangeCallback: [{ type: Output }],
    gridSizeChangedCallback: [{ type: Output }],
    destroyCallback: [{ type: Output }],
    initCallback: [{ type: Output }],
    oid: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    GridComponent.prototype.itemValidateCallback;
    /** @type {?} */
    GridComponent.prototype.itemRemovedCallback;
    /** @type {?} */
    GridComponent.prototype.itemInitCallback;
    /** @type {?} */
    GridComponent.prototype.itemResizeCallback;
    /** @type {?} */
    GridComponent.prototype.itemChangeCallback;
    /** @type {?} */
    GridComponent.prototype.gridSizeChangedCallback;
    /** @type {?} */
    GridComponent.prototype.destroyCallback;
    /** @type {?} */
    GridComponent.prototype.initCallback;
    /** @type {?} */
    GridComponent.prototype.oid;
    /** @type {?} */
    GridComponent.prototype.havePermission$;
    /** @type {?} */
    GridComponent.prototype.username;
    /** @type {?} */
    GridComponent.prototype.options;
    /** @type {?} */
    GridComponent.prototype.grid;
    /** @type {?} */
    GridComponent.prototype.ready;
    /** @type {?} */
    GridComponent.prototype.gridItemTypes;
    /**
     * @type {?}
     * @private
     */
    GridComponent.prototype.store;
    /**
     * @type {?}
     * @private
     */
    GridComponent.prototype.service;
    /**
     * @type {?}
     * @private
     */
    GridComponent.prototype.userFacadeService;
    /**
     * @type {?}
     * @private
     */
    GridComponent.prototype.configurationService;
    /**
     * @type {?}
     * @private
     */
    GridComponent.prototype.bottomSheet;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2dyaWQvIiwic291cmNlcyI6WyJsaWIvZ3JpZC9ncmlkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUUxRixPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGNBQWMsRUFBcUIsTUFBTSxtQkFBbUIsQ0FBQztBQUd0RSxPQUFPLEVBQUUsY0FBYyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFJcEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUNqRyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUUzRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQVF4RixNQUFNLE9BQU8sYUFBYTs7Ozs7Ozs7SUFrQnpCLFlBQ1MsS0FBc0IsRUFDdEIsT0FBb0IsRUFDcEIsaUJBQW9DLEVBQ3BDLG9CQUE4QyxFQUM5QyxXQUEyQjtRQUozQixVQUFLLEdBQUwsS0FBSyxDQUFpQjtRQUN0QixZQUFPLEdBQVAsT0FBTyxDQUFhO1FBQ3BCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUEwQjtRQUM5QyxnQkFBVyxH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TUFBTTtpQ0FDTixNQUFNO2lDQUNOLE1BQU07c0NBQ04sTUFBTTs4QkFDTixNQUFNOzJCQUNOLE1BQU07a0JBRU4sS0FBSzs7OztJQVROLDZDQUFvRDs7SUFDcEQsNENBQW1EOztJQUNuRCx5Q0FBZ0Q7O0lBQ2hELDJDQUFrRDs7SUFDbEQsMkNBQWtEOztJQUNsRCxnREFBdUQ7O0lBQ3ZELHdDQUErQzs7SUFDL0MscUNBQTRDOztJQUU1Qyw0QkFBcUI7O0lBRXJCLHdDQUFxQzs7SUFDckMsaUNBQWlCOztJQUNqQixnQ0FBd0I7O0lBQ3hCLDZCQUFnQjs7SUFDaEIsOEJBQWM7O0lBQ2Qsc0NBQTJCOzs7OztJQUUxQiw4QkFBOEI7Ozs7O0lBQzlCLGdDQUE0Qjs7Ozs7SUFDNUIsMENBQTRDOzs7OztJQUM1Qyw2Q0FBc0Q7Ozs7O0lBQ3RELG9DQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEdyaWRzdGVyQ29uZmlnLCBHcmlkc3Rlckl0ZW0gfSBmcm9tIFwiYW5ndWxhci1ncmlkc3RlcjJcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgTWF0Qm90dG9tU2hlZXQsIE1hdENoZWNrYm94Q2hhbmdlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0IHsgZ2V0QWNjb3VudEluZm8sIFVzZXJGYWNhZGVTZXJ2aWNlIH0gZnJvbSBcIkBzb3VzaGlhbnMvdXNlclwiO1xyXG4vLyBpbXBvcnQgeyBXaWRnZXRNb2RlbCB9IGZyb20gXCJAc291c2hpYW5zL3dpZGdldFwiO1xyXG5cclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vZ3JpZC5yZWR1Y2VyXCI7XHJcbmltcG9ydCB7IEdyaWRNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvZ3JpZC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBHcmlkU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9ncmlkLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgR3JpZENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2dyaWQtY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IER5bmFtaWNHcmlkSXRlbUNvbmZpZ0NvbXBvbmVudCB9IGZyb20gXCIuLi9ncmlkLWl0ZW0vZHluYW1pYy1ncmlkLWl0ZW0tY29uZmlnLmRpcmVjdGl2ZVwiO1xyXG5pbXBvcnQgeyBHcmlkQ29uZmlnQ29tcG9uZW50IH0gZnJvbSBcIi4uL2dyaWQtY29uZmlnL2dyaWQtY29uZmlnLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBJR3JpZEl0ZW1Nb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvZ2lyZC1pdGVtLm1vZGVsXCI7XHJcbmltcG9ydCB7IFVwc2VydEdyaWRTdGFydEFjdGlvbiB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hcGkvdXBzZXJ0LWdyaWQvdXBzZXJ0LWdyaWQuYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBEeW5hbWljR3JpZEl0ZW1WaWV3RGlyZWN0aXZlIH0gZnJvbSBcIi4uL2dyaWQtaXRlbS9keW5hbWljLWdyaWQtaXRlbS12aWV3LmRpcmVjdGl2ZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwibmdzLWdyaWRcIixcclxuXHR0ZW1wbGF0ZVVybDogXCIuL2dyaWQuY29tcG9uZW50Lmh0bWxcIixcclxuXHRzdHlsZVVybHM6IFsgXCIuL2dyaWQuY29tcG9uZW50LmNzc1wiIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEdyaWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdEBPdXRwdXQoKSBpdGVtVmFsaWRhdGVDYWxsYmFjayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRAT3V0cHV0KCkgaXRlbVJlbW92ZWRDYWxsYmFjayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRAT3V0cHV0KCkgaXRlbUluaXRDYWxsYmFjayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRAT3V0cHV0KCkgaXRlbVJlc2l6ZUNhbGxiYWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBPdXRwdXQoKSBpdGVtQ2hhbmdlQ2FsbGJhY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0QE91dHB1dCgpIGdyaWRTaXplQ2hhbmdlZENhbGxiYWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBPdXRwdXQoKSBkZXN0cm95Q2FsbGJhY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0QE91dHB1dCgpIGluaXRDYWxsYmFjayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcblx0QElucHV0KCkgb2lkOiBzdHJpbmc7XHJcblx0Ly8gd2lkZ2V0OiBXaWRnZXRNb2RlbDxhbnk+O1xyXG5cdGhhdmVQZXJtaXNzaW9uJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuXHR1c2VybmFtZTogc3RyaW5nO1xyXG5cdG9wdGlvbnM6IEdyaWRzdGVyQ29uZmlnO1xyXG5cdGdyaWQ6IEdyaWRNb2RlbDtcclxuXHRyZWFkeSA9IGZhbHNlO1xyXG5cdGdyaWRJdGVtVHlwZXM6IGFueVtzdHJpbmddO1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8QXBwU3RhdGU+LFxyXG5cdFx0cHJpdmF0ZSBzZXJ2aWNlOiBHcmlkU2VydmljZSxcclxuXHRcdHByaXZhdGUgdXNlckZhY2FkZVNlcnZpY2U6IFVzZXJGYWNhZGVTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBjb25maWd1cmF0aW9uU2VydmljZTogR3JpZENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBib3R0b21TaGVldDogTWF0Qm90dG9tU2hlZXRcclxuXHQpIHtcclxuXHRcdHRoaXMub3B0aW9ucyA9IHt9O1xyXG5cdFx0dGhpcy51c2VyRmFjYWRlU2VydmljZVxyXG5cdFx0XHQuZ2V0SW5mbygpXHJcblx0XHRcdC5waXBlKFxyXG5cdFx0XHRcdGZpbHRlcigodXNlcjogYW55KSA9PiB1c2VyLkN1cnJlbnRTZXNzaW9uICE9IHVuZGVmaW5lZCksXHJcblx0XHRcdFx0bWFwKCh1c2VyOiBhbnkpID0+IHVzZXIuQ3VycmVudFNlc3Npb24uVXNlcm5hbWUpXHJcblx0XHRcdClcclxuXHRcdFx0LnN1YnNjcmliZSh1c2VybmFtZSA9PiB7XHJcblx0XHRcdFx0dGhpcy51c2VybmFtZSA9IHVzZXJuYW1lO1xyXG5cdFx0XHR9KTtcclxuXHRcdHRoaXMuZ3JpZEl0ZW1UeXBlcyA9IE9iamVjdC5rZXlzKHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5nZXRWYWx1ZSgpLnR5cGVzKTtcclxuXHRcdHRoaXMuaGF2ZVBlcm1pc3Npb24kID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0QWNjb3VudEluZm8pLnBpcGUoXHJcblx0XHRcdG1hcCh1c2VyID0+IHtcclxuXHRcdFx0XHRjb25zdCBjcml0ZXJpYSA9IFsgdXNlciwgdXNlci5faWQsIHRoaXMuZ3JpZCwgdGhpcy5ncmlkLm93bmVyIF07XHJcblx0XHRcdFx0aWYgKGNyaXRlcmlhLnNvbWUoaSA9PiAhaSkpIHJldHVybiBmYWxzZTtcclxuXHJcblx0XHRcdFx0cmV0dXJuIHVzZXIuX2lkID09IHRoaXMuZ3JpZC5vd25lcjtcclxuXHRcdFx0fSlcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgaXRlbUNoYW5nZShpdGVtLCBpdGVtQ29tcG9uZW50KSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIml0ZW1DaGFuZ2VkXCIsIGl0ZW0sIGl0ZW1Db21wb25lbnQpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGl0ZW1SZXNpemUoaXRlbSwgaXRlbUNvbXBvbmVudCkge1xyXG5cdFx0Y29uc29sZS5sb2coXCJpdGVtUmVzaXplZFwiLCBpdGVtLCBpdGVtQ29tcG9uZW50KTtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0Ly8gdGhpcy5pdGVtcyA9IFsgeyBjb2xzOiAyLCByb3dzOiAxLCB5OiAwLCB4OiAwIH0sIHsgY29sczogMiwgcm93czogMiwgeTogMCwgeDogMiB9IF07XHJcblxyXG5cdFx0dGhpcy5ncmlkID0gbmV3IEdyaWRNb2RlbCh7XHJcblx0XHRcdG9pZDogdGhpcy5vaWQsXHJcblx0XHRcdGNvbmZpZzoge31cclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5fZ2V0X2dyaWRfYnlfb2lkX2FuZF91cGRhdGVfY29tcG9uZW50KCk7XHJcblx0fVxyXG5cclxuXHRfaW5pdENhbGxiYWNrKGl0ZW0pIHtcclxuXHRcdHRoaXMuaW5pdENhbGxiYWNrLmVtaXQoaXRlbSk7XHJcblx0fVxyXG5cclxuXHRyZW1vdmVJdGVtKGl0ZW0pIHtcclxuXHRcdHRoaXMuZ3JpZC5pdGVtcy5zcGxpY2UodGhpcy5ncmlkLml0ZW1zLmluZGV4T2YoaXRlbSksIDEpO1xyXG5cdH1cclxuXHRtYWtlX3B1YmxpYyhpdGVtOiBJR3JpZEl0ZW1Nb2RlbDxhbnk+LCBldmVudDogTWF0Q2hlY2tib3hDaGFuZ2UpIHtcclxuXHRcdGRlYnVnZ2VyO1xyXG5cdFx0aXRlbS5hY2Nlc3MgPSBldmVudC5jaGVja2VkID8gXCJwdWJsaWNcIiA6IFwicHJpdmF0ZVwiO1xyXG5cdFx0dGhpcy5zZXJ2aWNlLnVwZGF0ZV9pdGVtX2FjY2VzcyhpdGVtKS5zdWJzY3JpYmUoaXRlbSA9PiB7XHJcblx0XHRcdGRlYnVnZ2VyO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdGFkZEl0ZW0oZSkge1xyXG5cdFx0ZGVidWdnZXI7XHJcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0dGhpcy5ncmlkLml0ZW1zLnB1c2goe30gYXMgSUdyaWRJdGVtTW9kZWw8YW55Pik7XHJcblx0fVxyXG5cdGVtcHR5Q2VsbENsaWNrKGV2ZW50OiBNb3VzZUV2ZW50LCBpdGVtOiBHcmlkc3Rlckl0ZW0pIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiZW1wdHkgY2VsbCBjbGlja1wiLCBldmVudCwgaXRlbSk7XHJcblx0XHR0aGlzLmdyaWQuaXRlbXMucHVzaChpdGVtIGFzIGFueSk7XHJcblx0fVxyXG5cdG9wZW5Db25maWcoZSkge1xyXG5cdFx0ZGVidWdnZXI7XHJcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0dGhpcy5ib3R0b21TaGVldC5vcGVuKEdyaWRDb25maWdDb21wb25lbnQsIHtcclxuXHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdGdyaWQ6IHRoaXMuZ3JpZFxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblx0c2F2ZUNvbmZpZyhlKSB7XHJcblx0XHRkZWJ1Z2dlcjtcclxuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogVE9ETzpcclxuXHRcdCAqINin2K3Ystin2LEg2YfZiNuM2Kog2K/YsSDYs9mF2Kog2YbZiNivINin2KrYrdin2YUg2LTZiNivXHJcblx0XHQqINqp2KfZhtmB24zaryDYqNix2KfbjCDar9ix2YHYqtmGINi02YbYp9iz2Ycg2qnYp9ix2KjYsVxyXG5cdFx0ICovXHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVcHNlcnRHcmlkU3RhcnRBY3Rpb24odGhpcy5ncmlkKSk7XHJcblx0fVxyXG5cdGdyaWRJdGVtVHlwZUNoYW5nZWQoaXRlbTogSUdyaWRJdGVtTW9kZWw8YW55Pikge1xyXG5cdFx0Y29uc3QgYnMgPSB0aGlzLmJvdHRvbVNoZWV0Lm9wZW4oRHluYW1pY0dyaWRJdGVtQ29uZmlnQ29tcG9uZW50LCB7XHJcblx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHR0eXBlOiBpdGVtLnR5cGVcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRicy5hZnRlckRpc21pc3NlZCgpLnN1YnNjcmliZShkYXRhID0+IHtcclxuXHRcdFx0aXRlbS5jb25maWcgPSBicy5pbnN0YW5jZS5jb25maWc7XHJcblx0XHRcdGl0ZW0udmFsaWQgPSBicy5pbnN0YW5jZS52YWxpZDtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRzaG93Q29uZmlnKGl0ZW06IElHcmlkSXRlbU1vZGVsPGFueT4pIHtcclxuXHRcdGNvbnN0IGJzID0gdGhpcy5ib3R0b21TaGVldC5vcGVuKER5bmFtaWNHcmlkSXRlbUNvbmZpZ0NvbXBvbmVudCwge1xyXG5cdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0dHlwZTogaXRlbS50eXBlXHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0YnMuYWZ0ZXJEaXNtaXNzZWQoKS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblx0XHRcdGl0ZW0uY29uZmlnID0gYnMuaW5zdGFuY2UuY29uZmlnO1xyXG5cdFx0XHRpdGVtLnZhbGlkID0gYnMuaW5zdGFuY2UudmFsaWQ7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1lbWJlci1vcmRlcmluZ1xyXG5cdC8vIEBWaWV3Q2hpbGQoXCJEaWFncmFtVmlld0NvbXBvbmVudFwiKSBfbmdzRHluYW1pY0dyaWRJdGVtVmlldzogRGlhZ3JhbVZpZXdDb21wb25lbnQ7XHJcblx0Z29Ub0VkaXQoKSB7XHJcblx0XHRkZWJ1Z2dlcjtcclxuXHRcdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby11bnVzZWQtZXhwcmVzc2lvblxyXG5cdFx0Ly8gdGhpcy5fbmdzRHluYW1pY0dyaWRJdGVtVmlldztcclxuXHR9XHJcblx0LyoqXHJcblx0ICogcHJpdmF0ZSBtZXRob2RzXHJcblx0ICovXHJcblx0X2dldF9ncmlkX2J5X29pZF9hbmRfdXBkYXRlX2NvbXBvbmVudCgpIHtcclxuXHRcdHRoaXMuc2VydmljZS5zZWxlY3RCeUlkKHRoaXMub2lkKS5waXBlKGZpbHRlcihkYXRhID0+IGRhdGEgIT0gdW5kZWZpbmVkKSkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cdFx0XHR0aGlzLmdyaWQgPSBkYXRhO1xyXG5cdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdFx0ZGF0YS5jb25maWcub3V0ZXJNYXJnaW5Cb3R0b20gPSArZGF0YS5jb25maWcub3V0ZXJNYXJnaW5Cb3R0b207XHJcblx0XHRcdGRhdGEuY29uZmlnLm91dGVyTWFyZ2luUmlnaHQgPSArZGF0YS5jb25maWcub3V0ZXJNYXJnaW5SaWdodDtcclxuXHRcdFx0dGhpcy5vcHRpb25zID0geyAuLi50aGlzLm9wdGlvbnMsIC4uLmRhdGEuY29uZmlnIH07XHJcblx0XHRcdC8vIHRoaXMub3B0aW9ucy5kcmFnZ2FibGUgPSB7XHJcblx0XHRcdC8vIFx0ZW5hYmxlZDogdHJ1ZVxyXG5cdFx0XHQvLyB9O1xyXG5cdFx0XHQvLyB0aGlzLm9wdGlvbnMuZW1wdHlDZWxsQ29udGV4dE1lbnVDYWxsYmFjayA9IHRoaXMuZW1wdHlDZWxsQ2xpY2suYmluZCh0aGlzKTtcclxuXHRcdFx0Ly8gdGhpcy5vcHRpb25zLmVtcHR5Q2VsbERyb3BDYWxsYmFjayA9IHRoaXMuZW1wdHlDZWxsQ2xpY2suYmluZCh0aGlzKTtcclxuXHRcdFx0aWYgKHRoaXMub3B0aW9ucy5lbmFibGVFbXB0eUNlbGxEcmFnKSB0aGlzLm9wdGlvbnMuZW1wdHlDZWxsRHJhZ0NhbGxiYWNrID0gdGhpcy5lbXB0eUNlbGxDbGljay5iaW5kKHRoaXMpO1xyXG5cdFx0XHQvLyBpZiAodGhpcy5vcHRpb25zLmVuYWJsZUVtcHR5Q2VsbENsaWNrKSB0aGlzLm9wdGlvbnMuZW1wdHlDZWxsQ2xpY2tDYWxsYmFjayA9IHRoaXMuZW1wdHlDZWxsQ2xpY2suYmluZCh0aGlzKTtcclxuXHRcdFx0dGhpcy5yZWFkeSA9IHRydWU7XHJcblx0XHRcdC8vIHRoaXMub3B0aW9ucy5hcGkub3B0aW9uc0NoYW5nZWQoKTtcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG4iXX0=