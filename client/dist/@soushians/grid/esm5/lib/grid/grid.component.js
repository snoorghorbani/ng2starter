/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Store } from "@ngrx/store";
import { filter } from "rxjs/operators";
import { MatBottomSheet } from "@angular/material";
import { getFrontendAuthenticationState } from "@soushians/frontend-authentication";
import { GridModel } from "../models";
import { GridService } from "../services/grid.service";
import { GridConfigurationService } from "../services/grid-configuration.service";
import { DynamicGridItemConfigComponent } from "../grid-item/dynamic-grid-item-config.directive";
import { GridConfigComponent } from "../grid-config/grid-config.component";
import { UpsertGridStartAction } from "../services/api/upsert-grid/upsert-grid.actions";
var GridComponent = /** @class */ (function () {
    function GridComponent(store, service, configurationService, bottomSheet) {
        this.store = store;
        this.service = service;
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
        this.gridItemTypes = Object.keys(this.configurationService.config$.getValue().types);
        this.havePermission$ = this.store.select(getFrontendAuthenticationState);
    }
    /**
     * @param {?} item
     * @param {?} itemComponent
     * @return {?}
     */
    GridComponent.itemChange = /**
     * @param {?} item
     * @param {?} itemComponent
     * @return {?}
     */
    function (item, itemComponent) {
        console.log("itemChanged", item, itemComponent);
    };
    /**
     * @param {?} item
     * @param {?} itemComponent
     * @return {?}
     */
    GridComponent.itemResize = /**
     * @param {?} item
     * @param {?} itemComponent
     * @return {?}
     */
    function (item, itemComponent) {
        console.log("itemResized", item, itemComponent);
    };
    /**
     * @return {?}
     */
    GridComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // this.items = [ { cols: 2, rows: 1, y: 0, x: 0 }, { cols: 2, rows: 2, y: 0, x: 2 } ];
        this.grid = new GridModel({
            oid: this.oid,
            config: {}
        });
        this._get_grid_by_oid_and_update_component();
    };
    /**
     * @param {?} item
     * @return {?}
     */
    GridComponent.prototype._initCallback = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.initCallback.emit(item);
    };
    /**
     * @param {?} item
     * @return {?}
     */
    GridComponent.prototype.removeItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.grid.items.splice(this.grid.items.indexOf(item), 1);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    GridComponent.prototype.addItem = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.stopPropagation();
        this.grid.items.push(/** @type {?} */ ({}));
    };
    /**
     * @param {?} event
     * @param {?} item
     * @return {?}
     */
    GridComponent.prototype.emptyCellClick = /**
     * @param {?} event
     * @param {?} item
     * @return {?}
     */
    function (event, item) {
        console.log("empty cell click", event, item);
        this.grid.items.push(/** @type {?} */ (item));
    };
    /**
     * @param {?} e
     * @return {?}
     */
    GridComponent.prototype.openConfig = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.stopPropagation();
        e.preventDefault();
        this.bottomSheet.open(GridConfigComponent, {
            data: {
                grid: this.grid
            }
        });
    };
    /**
     * @param {?} e
     * @return {?}
     */
    GridComponent.prototype.saveConfig = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        e.preventDefault();
        /**
                 * TODO:
                 * احزار هویت در سمت نود اتحام شود
                * کانفیگ برای گرفتن شناسه کاربر
                 */
        this.store.dispatch(new UpsertGridStartAction(this.grid));
    };
    /**
     * @param {?} item
     * @return {?}
     */
    GridComponent.prototype.gridItemTypeChanged = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var /** @type {?} */ bs = this.bottomSheet.open(DynamicGridItemConfigComponent, {
            data: {
                type: item.type
            }
        });
        bs.afterDismissed().subscribe(function (data) {
            item.config = bs.instance.config;
            item.valid = bs.instance.valid;
        });
    };
    /**
     * @param {?} item
     * @return {?}
     */
    GridComponent.prototype.showConfig = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var /** @type {?} */ bs = this.bottomSheet.open(DynamicGridItemConfigComponent, {
            data: {
                type: item.type
            }
        });
        bs.afterDismissed().subscribe(function (data) {
            item.config = bs.instance.config;
            item.valid = bs.instance.valid;
        });
    };
    /**
     * @return {?}
     */
    GridComponent.prototype._get_grid_by_oid_and_update_component = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.service.selectById(this.oid).pipe(filter(function (data) { return data != undefined; })).subscribe(function (data) {
            _this.grid = data;
            _this.options = tslib_1.__assign({}, _this.options, data.config);
            // this.options.draggable = {
            // 	enabled: true
            // };
            // this.options.emptyCellContextMenuCallback = this.emptyCellClick.bind(this);
            // this.options.emptyCellDropCallback = this.emptyCellClick.bind(this);
            if (_this.options.enableEmptyCellDrag)
                _this.options.emptyCellDragCallback = _this.emptyCellClick.bind(_this);
            // if (this.options.enableEmptyCellClick) this.options.emptyCellClickCallback = this.emptyCellClick.bind(this);
            // if (this.options.enableEmptyCellClick) this.options.emptyCellClickCallback = this.emptyCellClick.bind(this);
            _this.ready = true;
            // this.options.api.optionsChanged();
        });
    };
    GridComponent.decorators = [
        { type: Component, args: [{
                    selector: "ngs-grid",
                    template: "<gridster [options]=\"options\">\n    <div class=\"actions\">\n        <button mat-mini-fab (click)=\"addItem($event)\">\n            <mat-icon>add</mat-icon>\n        </button>\n        <button mat-mini-fab (click)=\"openConfig($event)\" *ngIf=\"havePermission$ | async\">\n            <mat-icon>dashboard</mat-icon>\n        </button>\n        <button mat-mini-fab (click)=\"saveConfig($event)\">\n            <mat-icon>done</mat-icon>\n        </button>\n    </div>\n    <gridster-item [item]=\"item\" *ngFor=\"let item of grid.items\">\n        <div class=\"initializer\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n            <div fxFlex=\"nogrow\"> \n                <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n                    <mat-icon>more_horiz</mat-icon>\n                </button>\n                <mat-menu #menu=\"matMenu\">\n                    <button mat-menu-item (click)=\"showConfig(item)\">\n                        <mat-icon>settings</mat-icon>\n                        <span>\u062A\u0646\u0638\u06CC\u0645\u0627\u062A</span>\n                    </button>\n                    <button mat-menu-item  *ngIf=\"item.type\" (click)=\"removeItem(item)\">\n                        <mat-icon>delete</mat-icon>\n                        <span>\u062D\u0630\u0641</span>\n                    </button>\n                </mat-menu>\n            </div>\n        </div>\n        <div class=\"widget-content\">\n            <div *ngIf=\"!item.valid\" fxFlex=\"100\" class=\"form-container\">\n                <h4>\u062A\u0646\u0638\u06CC\u0645\u0627\u062A</h4>\n                <mat-form-field fxFlex=\"grow\">\n                    <mat-select placeholder=\"Grid Item Type\" [(ngModel)]=\"item.type\" (selectionChange)=\"gridItemTypeChanged(item)\">\n                        <mat-option *ngFor=\"let item of gridItemTypes\" [value]=\"item\">\n                            {{item}}\n                        </mat-option>\n                    </mat-select>\n                </mat-form-field>\n            </div>\n        <div *ngIf=\"item.valid\" [ngsDynamicGridItemView]=\"item\"></div>\n    </div>\n    </gridster-item>\n</gridster>\n\n            <!-- \n                <button mat-icon-button (click)=\"removeItem(item)\">\n                    <mat-icon>delete</mat-icon>\n                </button>\n                <button *ngIf=\"item.type\" mat-icon-button (click)=\"showConfig(item)\">\n                    <mat-icon>settings</mat-icon>\n                </button>\n            </div> -->\n",
                    styles: [":host{width:100%;height:100vh;display:block;direction:ltr}.initializer{position:absolute;z-index:10;top:5px;left:5px;height:25px}.actions{position:absolute;top:25px;right:25px;z-index:5}.actions button{margin-left:10px}.widget-content{position:relative;height:100%}.form-container{padding:25px;width:100%;direction:rtl}.form-container mat-form-field{width:100%}"]
                },] },
    ];
    /** @nocollapse */
    GridComponent.ctorParameters = function () { return [
        { type: Store },
        { type: GridService },
        { type: GridConfigurationService },
        { type: MatBottomSheet }
    ]; };
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
    return GridComponent;
}());
export { GridComponent };
function GridComponent_tsickle_Closure_declarations() {
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
    GridComponent.prototype.options;
    /** @type {?} */
    GridComponent.prototype.grid;
    /** @type {?} */
    GridComponent.prototype.ready;
    /** @type {?} */
    GridComponent.prototype.gridItemTypes;
    /** @type {?} */
    GridComponent.prototype.store;
    /** @type {?} */
    GridComponent.prototype.service;
    /** @type {?} */
    GridComponent.prototype.configurationService;
    /** @type {?} */
    GridComponent.prototype.bottomSheet;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2dyaWQvIiwic291cmNlcyI6WyJsaWIvZ3JpZC9ncmlkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFL0UsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNwQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBR25ELE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBR3BGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDdEMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRTNFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDOztJQTZFdkYsdUJBQ1MsT0FDQSxTQUNBLHNCQUNBO1FBSEEsVUFBSyxHQUFMLEtBQUs7UUFDTCxZQUFPLEdBQVAsT0FBTztRQUNQLHlCQUFvQixHQUFwQixvQkFBb0I7UUFDcEIsZ0JBQVcsR0FBWCxXQUFXO29DQW5CYSxJQUFJLFlBQVksRUFBRTttQ0FDbkIsSUFBSSxZQUFZLEVBQUU7Z0NBQ3JCLElBQUksWUFBWSxFQUFFO2tDQUNoQixJQUFJLFlBQVksRUFBRTtrQ0FDbEIsSUFBSSxZQUFZLEVBQUU7dUNBQ2IsSUFBSSxZQUFZLEVBQUU7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T0FBTyxDQUFDLG1CQUFtQixDQUFDO2dCQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMscUJBQXFCLEdBQUcsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUM7O1lBRTFHLEFBREEsK0dBQStHO1lBQy9HLEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDOztTQUVsQixDQUFDLENBQUM7S0FDSDs7Z0JBakxELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsVUFBVTtvQkFDcEIsUUFBUSxFQUFFLHErRUFzRFY7b0JBQ0EsTUFBTSxFQUFFLENBQUMsMldBQTJXLENBQUM7aUJBQ3JYOzs7O2dCQTFFUSxLQUFLO2dCQVNMLFdBQVc7Z0JBQ1gsd0JBQXdCO2dCQVJ4QixjQUFjOzs7dUNBMEVyQixNQUFNO3NDQUNOLE1BQU07bUNBQ04sTUFBTTtxQ0FDTixNQUFNO3FDQUNOLE1BQU07MENBQ04sTUFBTTtrQ0FDTixNQUFNOytCQUNOLE1BQU07c0JBRU4sS0FBSzs7d0JBdkZQOztTQTZFYSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEdyaWRzdGVyQ29uZmlnLCBHcmlkc3Rlckl0ZW0gfSBmcm9tIFwiYW5ndWxhci1ncmlkc3RlcjJcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IE1hdEJvdHRvbVNoZWV0IH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0IHsgZ2V0RnJvbnRlbmRBdXRoZW50aWNhdGlvblN0YXRlIH0gZnJvbSBcIkBzb3VzaGlhbnMvZnJvbnRlbmQtYXV0aGVudGljYXRpb25cIjtcclxuXHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uL2dyaWQucmVkdWNlclwiO1xyXG5pbXBvcnQgeyBHcmlkTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IEdyaWRTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2dyaWQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBHcmlkQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvZ3JpZC1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRHluYW1pY0dyaWRJdGVtQ29uZmlnQ29tcG9uZW50IH0gZnJvbSBcIi4uL2dyaWQtaXRlbS9keW5hbWljLWdyaWQtaXRlbS1jb25maWcuZGlyZWN0aXZlXCI7XHJcbmltcG9ydCB7IEdyaWRDb25maWdDb21wb25lbnQgfSBmcm9tIFwiLi4vZ3JpZC1jb25maWcvZ3JpZC1jb25maWcuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IElHcmlkSXRlbU1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9naXJkLWl0ZW0ubW9kZWxcIjtcclxuaW1wb3J0IHsgVXBzZXJ0R3JpZFN0YXJ0QWN0aW9uIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FwaS91cHNlcnQtZ3JpZC91cHNlcnQtZ3JpZC5hY3Rpb25zXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJuZ3MtZ3JpZFwiLFxyXG5cdHRlbXBsYXRlOiBgPGdyaWRzdGVyIFtvcHRpb25zXT1cIm9wdGlvbnNcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJhY3Rpb25zXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBtYXQtbWluaS1mYWIgKGNsaWNrKT1cImFkZEl0ZW0oJGV2ZW50KVwiPlxyXG4gICAgICAgICAgICA8bWF0LWljb24+YWRkPC9tYXQtaWNvbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIG1hdC1taW5pLWZhYiAoY2xpY2spPVwib3BlbkNvbmZpZygkZXZlbnQpXCIgKm5nSWY9XCJoYXZlUGVybWlzc2lvbiQgfCBhc3luY1wiPlxyXG4gICAgICAgICAgICA8bWF0LWljb24+ZGFzaGJvYXJkPC9tYXQtaWNvbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIG1hdC1taW5pLWZhYiAoY2xpY2spPVwic2F2ZUNvbmZpZygkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgIDxtYXQtaWNvbj5kb25lPC9tYXQtaWNvbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGdyaWRzdGVyLWl0ZW0gW2l0ZW1dPVwiaXRlbVwiICpuZ0Zvcj1cImxldCBpdGVtIG9mIGdyaWQuaXRlbXNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5pdGlhbGl6ZXJcIiBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0QWxpZ249XCJzcGFjZS1iZXR3ZWVuIGNlbnRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGZ4RmxleD1cIm5vZ3Jvd1wiPiBcclxuICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIFttYXRNZW51VHJpZ2dlckZvcl09XCJtZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uPm1vcmVfaG9yaXo8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8bWF0LW1lbnUgI21lbnU9XCJtYXRNZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtIChjbGljayk9XCJzaG93Q29uZmlnKGl0ZW0pXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbj5zZXR0aW5nczwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPtiq2YbYuNuM2YXYp9iqPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LW1lbnUtaXRlbSAgKm5nSWY9XCJpdGVtLnR5cGVcIiAoY2xpY2spPVwicmVtb3ZlSXRlbShpdGVtKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24+ZGVsZXRlPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+2K3YsNmBPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtbWVudT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIndpZGdldC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCIhaXRlbS52YWxpZFwiIGZ4RmxleD1cIjEwMFwiIGNsYXNzPVwiZm9ybS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoND7YqtmG2LjbjNmF2KfYqjwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4PVwiZ3Jvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtc2VsZWN0IHBsYWNlaG9sZGVyPVwiR3JpZCBJdGVtIFR5cGVcIiBbKG5nTW9kZWwpXT1cIml0ZW0udHlwZVwiIChzZWxlY3Rpb25DaGFuZ2UpPVwiZ3JpZEl0ZW1UeXBlQ2hhbmdlZChpdGVtKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBncmlkSXRlbVR5cGVzXCIgW3ZhbHVlXT1cIml0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7aXRlbX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2ICpuZ0lmPVwiaXRlbS52YWxpZFwiIFtuZ3NEeW5hbWljR3JpZEl0ZW1WaWV3XT1cIml0ZW1cIj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPC9ncmlkc3Rlci1pdGVtPlxyXG48L2dyaWRzdGVyPlxyXG5cclxuICAgICAgICAgICAgPCEtLSBcclxuICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIChjbGljayk9XCJyZW1vdmVJdGVtKGl0ZW0pXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uPmRlbGV0ZTwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJpdGVtLnR5cGVcIiBtYXQtaWNvbi1idXR0b24gKGNsaWNrKT1cInNob3dDb25maWcoaXRlbSlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24+c2V0dGluZ3M8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PiAtLT5cclxuYCxcclxuXHRzdHlsZXM6IFtgOmhvc3R7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwdmg7ZGlzcGxheTpibG9jaztkaXJlY3Rpb246bHRyfS5pbml0aWFsaXplcntwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjEwO3RvcDo1cHg7bGVmdDo1cHg7aGVpZ2h0OjI1cHh9LmFjdGlvbnN7cG9zaXRpb246YWJzb2x1dGU7dG9wOjI1cHg7cmlnaHQ6MjVweDt6LWluZGV4OjV9LmFjdGlvbnMgYnV0dG9ue21hcmdpbi1sZWZ0OjEwcHh9LndpZGdldC1jb250ZW50e3Bvc2l0aW9uOnJlbGF0aXZlO2hlaWdodDoxMDAlfS5mb3JtLWNvbnRhaW5lcntwYWRkaW5nOjI1cHg7d2lkdGg6MTAwJTtkaXJlY3Rpb246cnRsfS5mb3JtLWNvbnRhaW5lciBtYXQtZm9ybS1maWVsZHt3aWR0aDoxMDAlfWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHcmlkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRAT3V0cHV0KCkgaXRlbVZhbGlkYXRlQ2FsbGJhY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0QE91dHB1dCgpIGl0ZW1SZW1vdmVkQ2FsbGJhY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0QE91dHB1dCgpIGl0ZW1Jbml0Q2FsbGJhY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0QE91dHB1dCgpIGl0ZW1SZXNpemVDYWxsYmFjayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRAT3V0cHV0KCkgaXRlbUNoYW5nZUNhbGxiYWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBPdXRwdXQoKSBncmlkU2l6ZUNoYW5nZWRDYWxsYmFjayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRAT3V0cHV0KCkgZGVzdHJveUNhbGxiYWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBPdXRwdXQoKSBpbml0Q2FsbGJhY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG5cdEBJbnB1dCgpIG9pZDogc3RyaW5nO1xyXG5cdGhhdmVQZXJtaXNzaW9uJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuXHRvcHRpb25zOiBHcmlkc3RlckNvbmZpZztcclxuXHRncmlkOiBHcmlkTW9kZWw7XHJcblx0cmVhZHkgPSBmYWxzZTtcclxuXHRncmlkSXRlbVR5cGVzOiBhbnlbc3RyaW5nXTtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPixcclxuXHRcdHByaXZhdGUgc2VydmljZTogR3JpZFNlcnZpY2UsXHJcblx0XHRwcml2YXRlIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBHcmlkQ29uZmlndXJhdGlvblNlcnZpY2UsXHJcblx0XHRwcml2YXRlIGJvdHRvbVNoZWV0OiBNYXRCb3R0b21TaGVldFxyXG5cdCkge1xyXG5cdFx0dGhpcy5vcHRpb25zID0ge307XHJcblx0XHR0aGlzLmdyaWRJdGVtVHlwZXMgPSBPYmplY3Qua2V5cyh0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQuZ2V0VmFsdWUoKS50eXBlcyk7XHJcblx0XHR0aGlzLmhhdmVQZXJtaXNzaW9uJCA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldEZyb250ZW5kQXV0aGVudGljYXRpb25TdGF0ZSk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgaXRlbUNoYW5nZShpdGVtLCBpdGVtQ29tcG9uZW50KSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIml0ZW1DaGFuZ2VkXCIsIGl0ZW0sIGl0ZW1Db21wb25lbnQpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGl0ZW1SZXNpemUoaXRlbSwgaXRlbUNvbXBvbmVudCkge1xyXG5cdFx0Y29uc29sZS5sb2coXCJpdGVtUmVzaXplZFwiLCBpdGVtLCBpdGVtQ29tcG9uZW50KTtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0Ly8gdGhpcy5pdGVtcyA9IFsgeyBjb2xzOiAyLCByb3dzOiAxLCB5OiAwLCB4OiAwIH0sIHsgY29sczogMiwgcm93czogMiwgeTogMCwgeDogMiB9IF07XHJcblxyXG5cdFx0dGhpcy5ncmlkID0gbmV3IEdyaWRNb2RlbCh7XHJcblx0XHRcdG9pZDogdGhpcy5vaWQsXHJcblx0XHRcdGNvbmZpZzoge31cclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5fZ2V0X2dyaWRfYnlfb2lkX2FuZF91cGRhdGVfY29tcG9uZW50KCk7XHJcblx0fVxyXG5cclxuXHRfaW5pdENhbGxiYWNrKGl0ZW0pIHtcclxuXHRcdHRoaXMuaW5pdENhbGxiYWNrLmVtaXQoaXRlbSk7XHJcblx0fVxyXG5cclxuXHRyZW1vdmVJdGVtKGl0ZW0pIHtcclxuXHRcdHRoaXMuZ3JpZC5pdGVtcy5zcGxpY2UodGhpcy5ncmlkLml0ZW1zLmluZGV4T2YoaXRlbSksIDEpO1xyXG5cdH1cclxuXHJcblx0YWRkSXRlbShlKSB7XHJcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0dGhpcy5ncmlkLml0ZW1zLnB1c2goe30gYXMgSUdyaWRJdGVtTW9kZWw8YW55Pik7XHJcblx0fVxyXG5cdGVtcHR5Q2VsbENsaWNrKGV2ZW50OiBNb3VzZUV2ZW50LCBpdGVtOiBHcmlkc3Rlckl0ZW0pIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiZW1wdHkgY2VsbCBjbGlja1wiLCBldmVudCwgaXRlbSk7XHJcblx0XHR0aGlzLmdyaWQuaXRlbXMucHVzaChpdGVtIGFzIGFueSk7XHJcblx0fVxyXG5cdG9wZW5Db25maWcoZSkge1xyXG5cdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdHRoaXMuYm90dG9tU2hlZXQub3BlbihHcmlkQ29uZmlnQ29tcG9uZW50LCB7XHJcblx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRncmlkOiB0aGlzLmdyaWRcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cdHNhdmVDb25maWcoZSkge1xyXG5cdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRcdGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBUT0RPOiBcclxuXHRcdCAqINin2K3Ystin2LEg2YfZiNuM2Kog2K/YsSDYs9mF2Kog2YbZiNivINin2KrYrdin2YUg2LTZiNivXHJcblx0XHQqINqp2KfZhtmB24zaryDYqNix2KfbjCDar9ix2YHYqtmGINi02YbYp9iz2Ycg2qnYp9ix2KjYsVxyXG5cdFx0ICovXHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVcHNlcnRHcmlkU3RhcnRBY3Rpb24odGhpcy5ncmlkKSk7XHJcblx0fVxyXG5cdGdyaWRJdGVtVHlwZUNoYW5nZWQoaXRlbTogSUdyaWRJdGVtTW9kZWw8YW55Pikge1xyXG5cdFx0Y29uc3QgYnMgPSB0aGlzLmJvdHRvbVNoZWV0Lm9wZW4oRHluYW1pY0dyaWRJdGVtQ29uZmlnQ29tcG9uZW50LCB7XHJcblx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHR0eXBlOiBpdGVtLnR5cGVcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRicy5hZnRlckRpc21pc3NlZCgpLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xyXG5cdFx0XHRpdGVtLmNvbmZpZyA9IGJzLmluc3RhbmNlLmNvbmZpZztcclxuXHRcdFx0aXRlbS52YWxpZCA9IGJzLmluc3RhbmNlLnZhbGlkO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdHNob3dDb25maWcoaXRlbTogSUdyaWRJdGVtTW9kZWw8YW55Pikge1xyXG5cdFx0Y29uc3QgYnMgPSB0aGlzLmJvdHRvbVNoZWV0Lm9wZW4oRHluYW1pY0dyaWRJdGVtQ29uZmlnQ29tcG9uZW50LCB7XHJcblx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHR0eXBlOiBpdGVtLnR5cGVcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRicy5hZnRlckRpc21pc3NlZCgpLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xyXG5cdFx0XHRpdGVtLmNvbmZpZyA9IGJzLmluc3RhbmNlLmNvbmZpZztcclxuXHRcdFx0aXRlbS52YWxpZCA9IGJzLmluc3RhbmNlLnZhbGlkO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdF9nZXRfZ3JpZF9ieV9vaWRfYW5kX3VwZGF0ZV9jb21wb25lbnQoKSB7XHJcblx0XHR0aGlzLnNlcnZpY2Uuc2VsZWN0QnlJZCh0aGlzLm9pZCkucGlwZShmaWx0ZXIoKGRhdGEpID0+IGRhdGEgIT0gdW5kZWZpbmVkKSkuc3Vic2NyaWJlKChkYXRhKSA9PiB7XHJcblx0XHRcdHRoaXMuZ3JpZCA9IGRhdGE7XHJcblx0XHRcdHRoaXMub3B0aW9ucyA9IHsgLi4udGhpcy5vcHRpb25zLCAuLi5kYXRhLmNvbmZpZyB9O1xyXG5cdFx0XHQvLyB0aGlzLm9wdGlvbnMuZHJhZ2dhYmxlID0ge1xyXG5cdFx0XHQvLyBcdGVuYWJsZWQ6IHRydWVcclxuXHRcdFx0Ly8gfTtcclxuXHRcdFx0Ly8gdGhpcy5vcHRpb25zLmVtcHR5Q2VsbENvbnRleHRNZW51Q2FsbGJhY2sgPSB0aGlzLmVtcHR5Q2VsbENsaWNrLmJpbmQodGhpcyk7XHJcblx0XHRcdC8vIHRoaXMub3B0aW9ucy5lbXB0eUNlbGxEcm9wQ2FsbGJhY2sgPSB0aGlzLmVtcHR5Q2VsbENsaWNrLmJpbmQodGhpcyk7XHJcblx0XHRcdGlmICh0aGlzLm9wdGlvbnMuZW5hYmxlRW1wdHlDZWxsRHJhZykgdGhpcy5vcHRpb25zLmVtcHR5Q2VsbERyYWdDYWxsYmFjayA9IHRoaXMuZW1wdHlDZWxsQ2xpY2suYmluZCh0aGlzKTtcclxuXHRcdFx0Ly8gaWYgKHRoaXMub3B0aW9ucy5lbmFibGVFbXB0eUNlbGxDbGljaykgdGhpcy5vcHRpb25zLmVtcHR5Q2VsbENsaWNrQ2FsbGJhY2sgPSB0aGlzLmVtcHR5Q2VsbENsaWNrLmJpbmQodGhpcyk7XHJcblx0XHRcdHRoaXMucmVhZHkgPSB0cnVlO1xyXG5cdFx0XHQvLyB0aGlzLm9wdGlvbnMuYXBpLm9wdGlvbnNDaGFuZ2VkKCk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuIl19