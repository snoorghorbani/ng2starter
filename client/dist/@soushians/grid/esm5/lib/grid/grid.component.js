/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var GridComponent = /** @class */ (function () {
    function GridComponent(store, service, userFacadeService, configurationService, bottomSheet) {
        var _this = this;
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
            .pipe(filter((/**
         * @param {?} user
         * @return {?}
         */
        function (user) { return user.CurrentSession != undefined; })), map((/**
         * @param {?} user
         * @return {?}
         */
        function (user) { return user.CurrentSession.Username; })))
            .subscribe((/**
         * @param {?} username
         * @return {?}
         */
        function (username) {
            _this.username = username;
        }));
        this.gridItemTypes = Object.keys(this.configurationService.config$.getValue().types);
        this.havePermission$ = this.store.select(getAccountInfo).pipe(map((/**
         * @param {?} user
         * @return {?}
         */
        function (user) {
            /** @type {?} */
            var criteria = [user, user._id, _this.grid, _this.grid.owner];
            if (criteria.some((/**
             * @param {?} i
             * @return {?}
             */
            function (i) { return !i; })))
                return false;
            return user._id == _this.grid.owner;
        })));
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
     * @param {?} item
     * @param {?} event
     * @return {?}
     */
    GridComponent.prototype.make_public = /**
     * @param {?} item
     * @param {?} event
     * @return {?}
     */
    function (item, event) {
        debugger;
        item.access = event.checked ? "public" : "private";
        this.service.update_item_access(item).subscribe((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            debugger;
        }));
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
        debugger;
        e.stopPropagation();
        this.grid.items.push((/** @type {?} */ ({})));
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
        this.grid.items.push((/** @type {?} */ (item)));
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
        debugger;
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
        /** @type {?} */
        var bs = this.bottomSheet.open(DynamicGridItemConfigComponent, {
            data: {
                type: item.type
            }
        });
        bs.afterDismissed().subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            item.config = bs.instance.config;
            item.valid = bs.instance.valid;
        }));
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
        /** @type {?} */
        var bs = this.bottomSheet.open(DynamicGridItemConfigComponent, {
            data: {
                type: item.type
            }
        });
        bs.afterDismissed().subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            item.config = bs.instance.config;
            item.valid = bs.instance.valid;
        }));
    };
    // tslint:disable-next-line:member-ordering
    // @ViewChild("DiagramViewComponent") _ngsDynamicGridItemView: DiagramViewComponent;
    // tslint:disable-next-line:member-ordering
    // @ViewChild("DiagramViewComponent") _ngsDynamicGridItemView: DiagramViewComponent;
    /**
     * @return {?}
     */
    GridComponent.prototype.goToEdit = 
    // tslint:disable-next-line:member-ordering
    // @ViewChild("DiagramViewComponent") _ngsDynamicGridItemView: DiagramViewComponent;
    /**
     * @return {?}
     */
    function () {
        debugger;
        // tslint:disable-next-line:no-unused-expression
        // this._ngsDynamicGridItemView;
    };
    /**
     * private methods
     */
    /**
     * private methods
     * @return {?}
     */
    GridComponent.prototype._get_grid_by_oid_and_update_component = /**
     * private methods
     * @return {?}
     */
    function () {
        var _this = this;
        this.service.selectById(this.oid).pipe(filter((/**
         * @param {?} data
         * @return {?}
         */
        function (data) { return data != undefined; }))).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this.grid = data;
            debugger;
            data.config.outerMarginBottom = +data.config.outerMarginBottom;
            data.config.outerMarginRight = +data.config.outerMarginRight;
            _this.options = tslib_1.__assign({}, _this.options, data.config);
            // this.options.draggable = {
            // 	enabled: true
            // };
            // this.options.emptyCellContextMenuCallback = this.emptyCellClick.bind(this);
            // this.options.emptyCellDropCallback = this.emptyCellClick.bind(this);
            if (_this.options.enableEmptyCellDrag)
                _this.options.emptyCellDragCallback = _this.emptyCellClick.bind(_this);
            // if (this.options.enableEmptyCellClick) this.options.emptyCellClickCallback = this.emptyCellClick.bind(this);
            _this.ready = true;
            // this.options.api.optionsChanged();
        }));
    };
    GridComponent.decorators = [
        { type: Component, args: [{
                    selector: "ngs-grid",
                    template: "<gridster [options]=\"options\">\r\n    <div class=\"actions\" >\r\n        <button mat-mini-fab (click)=\"addItem($event)\">\r\n            <mat-icon>add</mat-icon>\r\n        </button>\r\n        <button mat-mini-fab (click)=\"openConfig($event)\" *ngIf=\"havePermission$ | async\">\r\n            <mat-icon>dashboard</mat-icon>\r\n        </button>\r\n        <button mat-mini-fab (click)=\"saveConfig($event)\">\r\n            <mat-icon>done</mat-icon>\r\n        </button>\r\n    </div>\r\n    <gridster-item [item]=\"item\" *ngFor=\"let item of grid.items\">\r\n        <div class=\"initializer\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n            <div fxFlex=\"nogrow\">\r\n                <button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n                    <mat-icon>more_horiz</mat-icon>\r\n                </button>\r\n                <mat-menu #menu=\"matMenu\" class=\"rtl\">\r\n                    <mat-checkbox *ngIf=\"grid.owner == username\" labelPosition=\"before\" [checked]=\"item.access=='public'\"\r\n                        (change)=\"make_public(item,$event)\">\u0639\u0645\u0648\u0645\u06CC</mat-checkbox>\r\n                    <button mat-menu-item class=\"rtl\" (click)=\"goToEdit()\">\r\n                        <mat-icon>edit</mat-icon>\r\n                        <span>\u0648\u06CC\u0631\u0627\u06CC\u0634 \u0627\u0641\u0632\u0648\u0646\u0647</span>\r\n                    </button>\r\n                    <!-- <button mat-menu-item class=\"rtl\" (click)=\"showConfig(item)\">\r\n                        <mat-icon>settings</mat-icon>\r\n                        <span>\u062A\u0646\u0638\u06CC\u0645\u0627\u062A</span>\r\n                    </button> -->\r\n                    <button mat-menu-item class=\"rtl\" (click)=\"removeItem(item)\">\r\n                        <mat-icon>delete</mat-icon>\r\n                        <span>\u062D\u0630\u0641</span>\r\n                    </button>\r\n                </mat-menu>\r\n            </div>\r\n        </div>\r\n        <div class=\"widget-content\">\r\n            <div *ngIf=\"!item.valid\" fxFlex=\"100\" class=\"form-container\">\r\n                <h4>\u062A\u0646\u0638\u06CC\u0645\u0627\u062A</h4>\r\n                <mat-form-field fxFlex=\"grow\">\r\n                    <mat-select placeholder=\"Grid Item Type\" [(ngModel)]=\"item.type\" (selectionChange)=\"gridItemTypeChanged(item)\">\r\n                        <mat-option *ngFor=\"let item of gridItemTypes\" [value]=\"item\">\r\n                            {{item}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </div>\r\n            <div *ngIf=\"item.valid\" #test [ngsDynamicGridItemView]=\"item\"></div>\r\n        </div>\r\n    </gridster-item>\r\n</gridster>",
                    styles: [":host{width:100%;min-height:calc(100vh - 205px);display:-ms-grid;display:grid;direction:ltr}.initializer{position:absolute;z-index:10;top:5px;left:5px;height:25px}.actions{position:absolute;top:25px;right:25px;z-index:5}.actions button{margin-left:10px}.widget-content{position:relative;height:100%}.form-container{padding:25px;width:100%}[dir=rtl] .form-container{direction:rtl}.form-container mat-form-field{width:100%}.rtl{direction:rtl}"]
                }] }
    ];
    /** @nocollapse */
    GridComponent.ctorParameters = function () { return [
        { type: Store },
        { type: GridService },
        { type: UserFacadeService },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2dyaWQvIiwic291cmNlcyI6WyJsaWIvZ3JpZC9ncmlkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFFMUYsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNwQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxjQUFjLEVBQXFCLE1BQU0sbUJBQW1CLENBQUM7QUFHdEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBSXBFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDbEYsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDakcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFM0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFHeEY7SUF1QkMsdUJBQ1MsS0FBc0IsRUFDdEIsT0FBb0IsRUFDcEIsaUJBQW9DLEVBQ3BDLG9CQUE4QyxFQUM5QyxXQUEyQjtRQUxwQyxpQkEwQkM7UUF6QlEsVUFBSyxHQUFMLEtBQUssQ0FBaUI7UUFDdEIsWUFBTyxHQUFQLE9BQU8sQ0FBYTtRQUNwQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBMEI7UUFDOUMsZ0JBQVcsR0FBWCxXQUFX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QixxQ0FBcUM7UUFDdEMsQ0FBQyxFQUFDLENBQUM7SUFDSixDQUFDOztnQkFwS0QsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxVQUFVO29CQUNwQixxeEZBQW9DOztpQkFFcEM7Ozs7Z0JBdEJRLEtBQUs7Z0JBVUwsV0FBVztnQkFMSyxpQkFBaUI7Z0JBTWpDLHdCQUF3QjtnQkFUeEIsY0FBYzs7O3VDQXNCckIsTUFBTTtzQ0FDTixNQUFNO21DQUNOLE1BQU07cUNBQ04sTUFBTTtxQ0FDTixNQUFNOzBDQUNOLE1BQU07a0NBQ04sTUFBTTsrQkFDTixNQUFNO3NCQUVOLEtBQUs7O0lBc0pQLG9CQUFDO0NBQUEsQUFyS0QsSUFxS0M7U0FoS1ksYUFBYTs7O0lBQ3pCLDZDQUFvRDs7SUFDcEQsNENBQW1EOztJQUNuRCx5Q0FBZ0Q7O0lBQ2hELDJDQUFrRDs7SUFDbEQsMkNBQWtEOztJQUNsRCxnREFBdUQ7O0lBQ3ZELHdDQUErQzs7SUFDL0MscUNBQTRDOztJQUU1Qyw0QkFBcUI7O0lBRXJCLHdDQUFxQzs7SUFDckMsaUNBQWlCOztJQUNqQixnQ0FBd0I7O0lBQ3hCLDZCQUFnQjs7SUFDaEIsOEJBQWM7O0lBQ2Qsc0NBQTJCOzs7OztJQUUxQiw4QkFBOEI7Ozs7O0lBQzlCLGdDQUE0Qjs7Ozs7SUFDNUIsMENBQTRDOzs7OztJQUM1Qyw2Q0FBc0Q7Ozs7O0lBQ3RELG9DQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEdyaWRzdGVyQ29uZmlnLCBHcmlkc3Rlckl0ZW0gfSBmcm9tIFwiYW5ndWxhci1ncmlkc3RlcjJcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgTWF0Qm90dG9tU2hlZXQsIE1hdENoZWNrYm94Q2hhbmdlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0IHsgZ2V0QWNjb3VudEluZm8sIFVzZXJGYWNhZGVTZXJ2aWNlIH0gZnJvbSBcIkBzb3VzaGlhbnMvdXNlclwiO1xyXG4vLyBpbXBvcnQgeyBXaWRnZXRNb2RlbCB9IGZyb20gXCJAc291c2hpYW5zL3dpZGdldFwiO1xyXG5cclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vZ3JpZC5yZWR1Y2VyXCI7XHJcbmltcG9ydCB7IEdyaWRNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvZ3JpZC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBHcmlkU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9ncmlkLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgR3JpZENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2dyaWQtY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IER5bmFtaWNHcmlkSXRlbUNvbmZpZ0NvbXBvbmVudCB9IGZyb20gXCIuLi9ncmlkLWl0ZW0vZHluYW1pYy1ncmlkLWl0ZW0tY29uZmlnLmRpcmVjdGl2ZVwiO1xyXG5pbXBvcnQgeyBHcmlkQ29uZmlnQ29tcG9uZW50IH0gZnJvbSBcIi4uL2dyaWQtY29uZmlnL2dyaWQtY29uZmlnLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBJR3JpZEl0ZW1Nb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvZ2lyZC1pdGVtLm1vZGVsXCI7XHJcbmltcG9ydCB7IFVwc2VydEdyaWRTdGFydEFjdGlvbiB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hcGkvdXBzZXJ0LWdyaWQvdXBzZXJ0LWdyaWQuYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBEeW5hbWljR3JpZEl0ZW1WaWV3RGlyZWN0aXZlIH0gZnJvbSBcIi4uL2dyaWQtaXRlbS9keW5hbWljLWdyaWQtaXRlbS12aWV3LmRpcmVjdGl2ZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwibmdzLWdyaWRcIixcclxuXHR0ZW1wbGF0ZVVybDogXCIuL2dyaWQuY29tcG9uZW50Lmh0bWxcIixcclxuXHRzdHlsZVVybHM6IFsgXCIuL2dyaWQuY29tcG9uZW50LmNzc1wiIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEdyaWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdEBPdXRwdXQoKSBpdGVtVmFsaWRhdGVDYWxsYmFjayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRAT3V0cHV0KCkgaXRlbVJlbW92ZWRDYWxsYmFjayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRAT3V0cHV0KCkgaXRlbUluaXRDYWxsYmFjayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRAT3V0cHV0KCkgaXRlbVJlc2l6ZUNhbGxiYWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBPdXRwdXQoKSBpdGVtQ2hhbmdlQ2FsbGJhY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0QE91dHB1dCgpIGdyaWRTaXplQ2hhbmdlZENhbGxiYWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBPdXRwdXQoKSBkZXN0cm95Q2FsbGJhY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0QE91dHB1dCgpIGluaXRDYWxsYmFjayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcblx0QElucHV0KCkgb2lkOiBzdHJpbmc7XHJcblx0Ly8gd2lkZ2V0OiBXaWRnZXRNb2RlbDxhbnk+O1xyXG5cdGhhdmVQZXJtaXNzaW9uJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuXHR1c2VybmFtZTogc3RyaW5nO1xyXG5cdG9wdGlvbnM6IEdyaWRzdGVyQ29uZmlnO1xyXG5cdGdyaWQ6IEdyaWRNb2RlbDtcclxuXHRyZWFkeSA9IGZhbHNlO1xyXG5cdGdyaWRJdGVtVHlwZXM6IGFueVtzdHJpbmddO1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8QXBwU3RhdGU+LFxyXG5cdFx0cHJpdmF0ZSBzZXJ2aWNlOiBHcmlkU2VydmljZSxcclxuXHRcdHByaXZhdGUgdXNlckZhY2FkZVNlcnZpY2U6IFVzZXJGYWNhZGVTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBjb25maWd1cmF0aW9uU2VydmljZTogR3JpZENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBib3R0b21TaGVldDogTWF0Qm90dG9tU2hlZXRcclxuXHQpIHtcclxuXHRcdHRoaXMub3B0aW9ucyA9IHt9O1xyXG5cdFx0dGhpcy51c2VyRmFjYWRlU2VydmljZVxyXG5cdFx0XHQuZ2V0SW5mbygpXHJcblx0XHRcdC5waXBlKFxyXG5cdFx0XHRcdGZpbHRlcigodXNlcjogYW55KSA9PiB1c2VyLkN1cnJlbnRTZXNzaW9uICE9IHVuZGVmaW5lZCksXHJcblx0XHRcdFx0bWFwKCh1c2VyOiBhbnkpID0+IHVzZXIuQ3VycmVudFNlc3Npb24uVXNlcm5hbWUpXHJcblx0XHRcdClcclxuXHRcdFx0LnN1YnNjcmliZSh1c2VybmFtZSA9PiB7XHJcblx0XHRcdFx0dGhpcy51c2VybmFtZSA9IHVzZXJuYW1lO1xyXG5cdFx0XHR9KTtcclxuXHRcdHRoaXMuZ3JpZEl0ZW1UeXBlcyA9IE9iamVjdC5rZXlzKHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5nZXRWYWx1ZSgpLnR5cGVzKTtcclxuXHRcdHRoaXMuaGF2ZVBlcm1pc3Npb24kID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0QWNjb3VudEluZm8pLnBpcGUoXHJcblx0XHRcdG1hcCh1c2VyID0+IHtcclxuXHRcdFx0XHRjb25zdCBjcml0ZXJpYSA9IFsgdXNlciwgdXNlci5faWQsIHRoaXMuZ3JpZCwgdGhpcy5ncmlkLm93bmVyIF07XHJcblx0XHRcdFx0aWYgKGNyaXRlcmlhLnNvbWUoaSA9PiAhaSkpIHJldHVybiBmYWxzZTtcclxuXHJcblx0XHRcdFx0cmV0dXJuIHVzZXIuX2lkID09IHRoaXMuZ3JpZC5vd25lcjtcclxuXHRcdFx0fSlcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgaXRlbUNoYW5nZShpdGVtLCBpdGVtQ29tcG9uZW50KSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIml0ZW1DaGFuZ2VkXCIsIGl0ZW0sIGl0ZW1Db21wb25lbnQpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGl0ZW1SZXNpemUoaXRlbSwgaXRlbUNvbXBvbmVudCkge1xyXG5cdFx0Y29uc29sZS5sb2coXCJpdGVtUmVzaXplZFwiLCBpdGVtLCBpdGVtQ29tcG9uZW50KTtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0Ly8gdGhpcy5pdGVtcyA9IFsgeyBjb2xzOiAyLCByb3dzOiAxLCB5OiAwLCB4OiAwIH0sIHsgY29sczogMiwgcm93czogMiwgeTogMCwgeDogMiB9IF07XHJcblxyXG5cdFx0dGhpcy5ncmlkID0gbmV3IEdyaWRNb2RlbCh7XHJcblx0XHRcdG9pZDogdGhpcy5vaWQsXHJcblx0XHRcdGNvbmZpZzoge31cclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5fZ2V0X2dyaWRfYnlfb2lkX2FuZF91cGRhdGVfY29tcG9uZW50KCk7XHJcblx0fVxyXG5cclxuXHRfaW5pdENhbGxiYWNrKGl0ZW0pIHtcclxuXHRcdHRoaXMuaW5pdENhbGxiYWNrLmVtaXQoaXRlbSk7XHJcblx0fVxyXG5cclxuXHRyZW1vdmVJdGVtKGl0ZW0pIHtcclxuXHRcdHRoaXMuZ3JpZC5pdGVtcy5zcGxpY2UodGhpcy5ncmlkLml0ZW1zLmluZGV4T2YoaXRlbSksIDEpO1xyXG5cdH1cclxuXHRtYWtlX3B1YmxpYyhpdGVtOiBJR3JpZEl0ZW1Nb2RlbDxhbnk+LCBldmVudDogTWF0Q2hlY2tib3hDaGFuZ2UpIHtcclxuXHRcdGRlYnVnZ2VyO1xyXG5cdFx0aXRlbS5hY2Nlc3MgPSBldmVudC5jaGVja2VkID8gXCJwdWJsaWNcIiA6IFwicHJpdmF0ZVwiO1xyXG5cdFx0dGhpcy5zZXJ2aWNlLnVwZGF0ZV9pdGVtX2FjY2VzcyhpdGVtKS5zdWJzY3JpYmUoaXRlbSA9PiB7XHJcblx0XHRcdGRlYnVnZ2VyO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdGFkZEl0ZW0oZSkge1xyXG5cdFx0ZGVidWdnZXI7XHJcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0dGhpcy5ncmlkLml0ZW1zLnB1c2goe30gYXMgSUdyaWRJdGVtTW9kZWw8YW55Pik7XHJcblx0fVxyXG5cdGVtcHR5Q2VsbENsaWNrKGV2ZW50OiBNb3VzZUV2ZW50LCBpdGVtOiBHcmlkc3Rlckl0ZW0pIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiZW1wdHkgY2VsbCBjbGlja1wiLCBldmVudCwgaXRlbSk7XHJcblx0XHR0aGlzLmdyaWQuaXRlbXMucHVzaChpdGVtIGFzIGFueSk7XHJcblx0fVxyXG5cdG9wZW5Db25maWcoZSkge1xyXG5cdFx0ZGVidWdnZXI7XHJcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0dGhpcy5ib3R0b21TaGVldC5vcGVuKEdyaWRDb25maWdDb21wb25lbnQsIHtcclxuXHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdGdyaWQ6IHRoaXMuZ3JpZFxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblx0c2F2ZUNvbmZpZyhlKSB7XHJcblx0XHRkZWJ1Z2dlcjtcclxuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogVE9ETzpcclxuXHRcdCAqINin2K3Ystin2LEg2YfZiNuM2Kog2K/YsSDYs9mF2Kog2YbZiNivINin2KrYrdin2YUg2LTZiNivXHJcblx0XHQqINqp2KfZhtmB24zaryDYqNix2KfbjCDar9ix2YHYqtmGINi02YbYp9iz2Ycg2qnYp9ix2KjYsVxyXG5cdFx0ICovXHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVcHNlcnRHcmlkU3RhcnRBY3Rpb24odGhpcy5ncmlkKSk7XHJcblx0fVxyXG5cdGdyaWRJdGVtVHlwZUNoYW5nZWQoaXRlbTogSUdyaWRJdGVtTW9kZWw8YW55Pikge1xyXG5cdFx0Y29uc3QgYnMgPSB0aGlzLmJvdHRvbVNoZWV0Lm9wZW4oRHluYW1pY0dyaWRJdGVtQ29uZmlnQ29tcG9uZW50LCB7XHJcblx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHR0eXBlOiBpdGVtLnR5cGVcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRicy5hZnRlckRpc21pc3NlZCgpLnN1YnNjcmliZShkYXRhID0+IHtcclxuXHRcdFx0aXRlbS5jb25maWcgPSBicy5pbnN0YW5jZS5jb25maWc7XHJcblx0XHRcdGl0ZW0udmFsaWQgPSBicy5pbnN0YW5jZS52YWxpZDtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRzaG93Q29uZmlnKGl0ZW06IElHcmlkSXRlbU1vZGVsPGFueT4pIHtcclxuXHRcdGNvbnN0IGJzID0gdGhpcy5ib3R0b21TaGVldC5vcGVuKER5bmFtaWNHcmlkSXRlbUNvbmZpZ0NvbXBvbmVudCwge1xyXG5cdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0dHlwZTogaXRlbS50eXBlXHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0YnMuYWZ0ZXJEaXNtaXNzZWQoKS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblx0XHRcdGl0ZW0uY29uZmlnID0gYnMuaW5zdGFuY2UuY29uZmlnO1xyXG5cdFx0XHRpdGVtLnZhbGlkID0gYnMuaW5zdGFuY2UudmFsaWQ7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1lbWJlci1vcmRlcmluZ1xyXG5cdC8vIEBWaWV3Q2hpbGQoXCJEaWFncmFtVmlld0NvbXBvbmVudFwiKSBfbmdzRHluYW1pY0dyaWRJdGVtVmlldzogRGlhZ3JhbVZpZXdDb21wb25lbnQ7XHJcblx0Z29Ub0VkaXQoKSB7XHJcblx0XHRkZWJ1Z2dlcjtcclxuXHRcdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby11bnVzZWQtZXhwcmVzc2lvblxyXG5cdFx0Ly8gdGhpcy5fbmdzRHluYW1pY0dyaWRJdGVtVmlldztcclxuXHR9XHJcblx0LyoqXHJcblx0ICogcHJpdmF0ZSBtZXRob2RzXHJcblx0ICovXHJcblx0X2dldF9ncmlkX2J5X29pZF9hbmRfdXBkYXRlX2NvbXBvbmVudCgpIHtcclxuXHRcdHRoaXMuc2VydmljZS5zZWxlY3RCeUlkKHRoaXMub2lkKS5waXBlKGZpbHRlcihkYXRhID0+IGRhdGEgIT0gdW5kZWZpbmVkKSkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cdFx0XHR0aGlzLmdyaWQgPSBkYXRhO1xyXG5cdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdFx0ZGF0YS5jb25maWcub3V0ZXJNYXJnaW5Cb3R0b20gPSArZGF0YS5jb25maWcub3V0ZXJNYXJnaW5Cb3R0b207XHJcblx0XHRcdGRhdGEuY29uZmlnLm91dGVyTWFyZ2luUmlnaHQgPSArZGF0YS5jb25maWcub3V0ZXJNYXJnaW5SaWdodDtcclxuXHRcdFx0dGhpcy5vcHRpb25zID0geyAuLi50aGlzLm9wdGlvbnMsIC4uLmRhdGEuY29uZmlnIH07XHJcblx0XHRcdC8vIHRoaXMub3B0aW9ucy5kcmFnZ2FibGUgPSB7XHJcblx0XHRcdC8vIFx0ZW5hYmxlZDogdHJ1ZVxyXG5cdFx0XHQvLyB9O1xyXG5cdFx0XHQvLyB0aGlzLm9wdGlvbnMuZW1wdHlDZWxsQ29udGV4dE1lbnVDYWxsYmFjayA9IHRoaXMuZW1wdHlDZWxsQ2xpY2suYmluZCh0aGlzKTtcclxuXHRcdFx0Ly8gdGhpcy5vcHRpb25zLmVtcHR5Q2VsbERyb3BDYWxsYmFjayA9IHRoaXMuZW1wdHlDZWxsQ2xpY2suYmluZCh0aGlzKTtcclxuXHRcdFx0aWYgKHRoaXMub3B0aW9ucy5lbmFibGVFbXB0eUNlbGxEcmFnKSB0aGlzLm9wdGlvbnMuZW1wdHlDZWxsRHJhZ0NhbGxiYWNrID0gdGhpcy5lbXB0eUNlbGxDbGljay5iaW5kKHRoaXMpO1xyXG5cdFx0XHQvLyBpZiAodGhpcy5vcHRpb25zLmVuYWJsZUVtcHR5Q2VsbENsaWNrKSB0aGlzLm9wdGlvbnMuZW1wdHlDZWxsQ2xpY2tDYWxsYmFjayA9IHRoaXMuZW1wdHlDZWxsQ2xpY2suYmluZCh0aGlzKTtcclxuXHRcdFx0dGhpcy5yZWFkeSA9IHRydWU7XHJcblx0XHRcdC8vIHRoaXMub3B0aW9ucy5hcGkub3B0aW9uc0NoYW5nZWQoKTtcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG4iXX0=