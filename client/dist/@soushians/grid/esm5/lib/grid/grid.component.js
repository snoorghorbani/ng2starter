/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
            .pipe(filter(function (user) { return user.CurrentSession != undefined; }), map(function (user) { return user.CurrentSession.Username; }))
            .subscribe(function (username) {
            _this.username = username;
        });
        this.gridItemTypes = Object.keys(this.configurationService.config$.getValue().types);
        this.havePermission$ = this.store.select(getAccountInfo).pipe(map(function (user) {
            /** @type {?} */
            var criteria = [user, user._id, _this.grid, _this.grid.owner];
            if (criteria.some(function (i) { return !i; }))
                return false;
            return user._id == _this.grid.owner;
        }));
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
        this.service.update_item_access(item).subscribe(function (item) {
            debugger;
        });
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
        /** @type {?} */
        var bs = this.bottomSheet.open(DynamicGridItemConfigComponent, {
            data: {
                type: item.type
            }
        });
        bs.afterDismissed().subscribe(function (data) {
            item.config = bs.instance.config;
            item.valid = bs.instance.valid;
        });
    };
    // tslint:disable-next-line:member-ordering
    // @ViewChild("DiagramViewComponent") _ngsDynamicGridItemView: DiagramViewComponent;
    /**
     * @return {?}
     */
    GridComponent.prototype.goToEdit = /**
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
        this.service.selectById(this.oid).pipe(filter(function (data) { return data != undefined; })).subscribe(function (data) {
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
        });
    };
    GridComponent.decorators = [
        { type: Component, args: [{
                    selector: "ngs-grid",
                    template: "<gridster [options]=\"options\">\n    <div class=\"actions\" >\n        <button mat-mini-fab (click)=\"addItem($event)\">\n            <mat-icon>add</mat-icon>\n        </button>\n        <button mat-mini-fab (click)=\"openConfig($event)\" *ngIf=\"havePermission$ | async\">\n            <mat-icon>dashboard</mat-icon>\n        </button>\n        <button mat-mini-fab (click)=\"saveConfig($event)\">\n            <mat-icon>done</mat-icon>\n        </button>\n    </div>\n    <gridster-item [item]=\"item\" *ngFor=\"let item of grid.items\">\n        <div class=\"initializer\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n            <div fxFlex=\"nogrow\">\n                <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n                    <mat-icon>more_horiz</mat-icon>\n                </button>\n                <mat-menu #menu=\"matMenu\" class=\"rtl\">\n                    <mat-checkbox *ngIf=\"grid.owner == username\" labelPosition=\"before\" [checked]=\"item.access=='public'\"\n                        (change)=\"make_public(item,$event)\">\u0639\u0645\u0648\u0645\u06CC</mat-checkbox>\n                    <button mat-menu-item class=\"rtl\" (click)=\"goToEdit()\">\n                        <mat-icon>edit</mat-icon>\n                        <span>\u0648\u06CC\u0631\u0627\u06CC\u0634 \u0627\u0641\u0632\u0648\u0646\u0647</span>\n                    </button>\n                    <!-- <button mat-menu-item class=\"rtl\" (click)=\"showConfig(item)\">\n                        <mat-icon>settings</mat-icon>\n                        <span>\u062A\u0646\u0638\u06CC\u0645\u0627\u062A</span>\n                    </button> -->\n                    <button mat-menu-item class=\"rtl\" (click)=\"removeItem(item)\">\n                        <mat-icon>delete</mat-icon>\n                        <span>\u062D\u0630\u0641</span>\n                    </button>\n                </mat-menu>\n            </div>\n        </div>\n        <div class=\"widget-content\">\n            <div *ngIf=\"!item.valid\" fxFlex=\"100\" class=\"form-container\">\n                <h4>\u062A\u0646\u0638\u06CC\u0645\u0627\u062A</h4>\n                <mat-form-field fxFlex=\"grow\">\n                    <mat-select placeholder=\"Grid Item Type\" [(ngModel)]=\"item.type\" (selectionChange)=\"gridItemTypeChanged(item)\">\n                        <mat-option *ngFor=\"let item of gridItemTypes\" [value]=\"item\">\n                            {{item}}\n                        </mat-option>\n                    </mat-select>\n                </mat-form-field>\n            </div>\n            <div *ngIf=\"item.valid\" #test [ngsDynamicGridItemView]=\"item\"></div>\n        </div>\n    </gridster-item>\n</gridster>",
                    styles: [":host{width:100%;min-height:calc(100vh - 205px);display:block;direction:ltr}.initializer{position:absolute;z-index:10;top:5px;left:5px;height:25px}.actions{position:absolute;top:25px;right:25px;z-index:5}.actions button{margin-left:10px}.widget-content{position:relative;height:100%}.form-container{padding:25px;width:100%}[dir=rtl] .form-container{direction:rtl}.form-container mat-form-field{width:100%}.rtl{direction:rtl}"]
                },] },
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
    /** @type {?} */
    GridComponent.prototype.store;
    /** @type {?} */
    GridComponent.prototype.service;
    /** @type {?} */
    GridComponent.prototype.userFacadeService;
    /** @type {?} */
    GridComponent.prototype.configurationService;
    /** @type {?} */
    GridComponent.prototype.bottomSheet;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2dyaWQvIiwic291cmNlcyI6WyJsaWIvZ3JpZC9ncmlkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFFMUYsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNwQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxjQUFjLEVBQXFCLE1BQU0sbUJBQW1CLENBQUM7QUFHdEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBSXBFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDbEYsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDakcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFM0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0saURBQWlELENBQUM7O0lBNEV2Rix1QkFDUyxPQUNBLFNBQ0EsbUJBQ0Esc0JBQ0E7UUFMVCxpQkEwQkM7UUF6QlEsVUFBSyxHQUFMLEtBQUs7UUFDTCxZQUFPLEdBQVAsT0FBTztRQUNQLHNCQUFpQixHQUFqQixpQkFBaUI7UUFDakIseUJBQW9CLEdBQXBCLG9CQUFvQjtRQUNwQixnQkFBVyxHQUFYLFdBQVc7UUF0QnBCLDRCQUFpQyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3BELDJCQUFnQyxJQUFJLFlBQVksRUFBRSxD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dCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEdyaWRzdGVyQ29uZmlnLCBHcmlkc3Rlckl0ZW0gfSBmcm9tIFwiYW5ndWxhci1ncmlkc3RlcjJcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgTWF0Qm90dG9tU2hlZXQsIE1hdENoZWNrYm94Q2hhbmdlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0IHsgZ2V0QWNjb3VudEluZm8sIFVzZXJGYWNhZGVTZXJ2aWNlIH0gZnJvbSBcIkBzb3VzaGlhbnMvdXNlclwiO1xyXG4vLyBpbXBvcnQgeyBXaWRnZXRNb2RlbCB9IGZyb20gXCJAc291c2hpYW5zL3dpZGdldFwiO1xyXG5cclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vZ3JpZC5yZWR1Y2VyXCI7XHJcbmltcG9ydCB7IEdyaWRNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvZ3JpZC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBHcmlkU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9ncmlkLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgR3JpZENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2dyaWQtY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IER5bmFtaWNHcmlkSXRlbUNvbmZpZ0NvbXBvbmVudCB9IGZyb20gXCIuLi9ncmlkLWl0ZW0vZHluYW1pYy1ncmlkLWl0ZW0tY29uZmlnLmRpcmVjdGl2ZVwiO1xyXG5pbXBvcnQgeyBHcmlkQ29uZmlnQ29tcG9uZW50IH0gZnJvbSBcIi4uL2dyaWQtY29uZmlnL2dyaWQtY29uZmlnLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBJR3JpZEl0ZW1Nb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvZ2lyZC1pdGVtLm1vZGVsXCI7XHJcbmltcG9ydCB7IFVwc2VydEdyaWRTdGFydEFjdGlvbiB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hcGkvdXBzZXJ0LWdyaWQvdXBzZXJ0LWdyaWQuYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBEeW5hbWljR3JpZEl0ZW1WaWV3RGlyZWN0aXZlIH0gZnJvbSBcIi4uL2dyaWQtaXRlbS9keW5hbWljLWdyaWQtaXRlbS12aWV3LmRpcmVjdGl2ZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwibmdzLWdyaWRcIixcclxuXHR0ZW1wbGF0ZTogYDxncmlkc3RlciBbb3B0aW9uc109XCJvcHRpb25zXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYWN0aW9uc1wiID5cclxuICAgICAgICA8YnV0dG9uIG1hdC1taW5pLWZhYiAoY2xpY2spPVwiYWRkSXRlbSgkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgIDxtYXQtaWNvbj5hZGQ8L21hdC1pY29uPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gbWF0LW1pbmktZmFiIChjbGljayk9XCJvcGVuQ29uZmlnKCRldmVudClcIiAqbmdJZj1cImhhdmVQZXJtaXNzaW9uJCB8IGFzeW5jXCI+XHJcbiAgICAgICAgICAgIDxtYXQtaWNvbj5kYXNoYm9hcmQ8L21hdC1pY29uPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gbWF0LW1pbmktZmFiIChjbGljayk9XCJzYXZlQ29uZmlnKCRldmVudClcIj5cclxuICAgICAgICAgICAgPG1hdC1pY29uPmRvbmU8L21hdC1pY29uPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8Z3JpZHN0ZXItaXRlbSBbaXRlbV09XCJpdGVtXCIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZ3JpZC5pdGVtc1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbml0aWFsaXplclwiIGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRBbGlnbj1cInNwYWNlLWJldHdlZW4gY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgZnhGbGV4PVwibm9ncm93XCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBbbWF0TWVudVRyaWdnZXJGb3JdPVwibWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbj5tb3JlX2hvcml6PC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1tZW51ICNtZW51PVwibWF0TWVudVwiIGNsYXNzPVwicnRsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1jaGVja2JveCAqbmdJZj1cImdyaWQub3duZXIgPT0gdXNlcm5hbWVcIiBsYWJlbFBvc2l0aW9uPVwiYmVmb3JlXCIgW2NoZWNrZWRdPVwiaXRlbS5hY2Nlc3M9PSdwdWJsaWMnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGNoYW5nZSk9XCJtYWtlX3B1YmxpYyhpdGVtLCRldmVudClcIj7YudmF2YjZhduMPC9tYXQtY2hlY2tib3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtIGNsYXNzPVwicnRsXCIgKGNsaWNrKT1cImdvVG9FZGl0KClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uPmVkaXQ8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7ZiNuM2LHYp9uM2LQg2KfZgdiy2YjZhtmHPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gPGJ1dHRvbiBtYXQtbWVudS1pdGVtIGNsYXNzPVwicnRsXCIgKGNsaWNrKT1cInNob3dDb25maWcoaXRlbSlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uPnNldHRpbmdzPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+2KrZhti424zZhdin2Ko8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+IC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LW1lbnUtaXRlbSBjbGFzcz1cInJ0bFwiIChjbGljayk9XCJyZW1vdmVJdGVtKGl0ZW0pXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbj5kZWxldGU8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7Yrdiw2YE8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1tZW51PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwid2lkZ2V0LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cIiFpdGVtLnZhbGlkXCIgZnhGbGV4PVwiMTAwXCIgY2xhc3M9XCJmb3JtLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGg0Ptiq2YbYuNuM2YXYp9iqPC9oND5cclxuICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXg9XCJncm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgcGxhY2Vob2xkZXI9XCJHcmlkIEl0ZW0gVHlwZVwiIFsobmdNb2RlbCldPVwiaXRlbS50eXBlXCIgKHNlbGVjdGlvbkNoYW5nZSk9XCJncmlkSXRlbVR5cGVDaGFuZ2VkKGl0ZW0pXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIGdyaWRJdGVtVHlwZXNcIiBbdmFsdWVdPVwiaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3tpdGVtfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiaXRlbS52YWxpZFwiICN0ZXN0IFtuZ3NEeW5hbWljR3JpZEl0ZW1WaWV3XT1cIml0ZW1cIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZ3JpZHN0ZXItaXRlbT5cclxuPC9ncmlkc3Rlcj5gLFxyXG5cdHN0eWxlczogW2A6aG9zdHt3aWR0aDoxMDAlO21pbi1oZWlnaHQ6Y2FsYygxMDB2aCAtIDIwNXB4KTtkaXNwbGF5OmJsb2NrO2RpcmVjdGlvbjpsdHJ9LmluaXRpYWxpemVye3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6MTA7dG9wOjVweDtsZWZ0OjVweDtoZWlnaHQ6MjVweH0uYWN0aW9uc3twb3NpdGlvbjphYnNvbHV0ZTt0b3A6MjVweDtyaWdodDoyNXB4O3otaW5kZXg6NX0uYWN0aW9ucyBidXR0b257bWFyZ2luLWxlZnQ6MTBweH0ud2lkZ2V0LWNvbnRlbnR7cG9zaXRpb246cmVsYXRpdmU7aGVpZ2h0OjEwMCV9LmZvcm0tY29udGFpbmVye3BhZGRpbmc6MjVweDt3aWR0aDoxMDAlfVtkaXI9cnRsXSAuZm9ybS1jb250YWluZXJ7ZGlyZWN0aW9uOnJ0bH0uZm9ybS1jb250YWluZXIgbWF0LWZvcm0tZmllbGR7d2lkdGg6MTAwJX0ucnRse2RpcmVjdGlvbjpydGx9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEdyaWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdEBPdXRwdXQoKSBpdGVtVmFsaWRhdGVDYWxsYmFjayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRAT3V0cHV0KCkgaXRlbVJlbW92ZWRDYWxsYmFjayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRAT3V0cHV0KCkgaXRlbUluaXRDYWxsYmFjayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRAT3V0cHV0KCkgaXRlbVJlc2l6ZUNhbGxiYWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBPdXRwdXQoKSBpdGVtQ2hhbmdlQ2FsbGJhY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0QE91dHB1dCgpIGdyaWRTaXplQ2hhbmdlZENhbGxiYWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBPdXRwdXQoKSBkZXN0cm95Q2FsbGJhY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0QE91dHB1dCgpIGluaXRDYWxsYmFjayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcblx0QElucHV0KCkgb2lkOiBzdHJpbmc7XHJcblx0Ly8gd2lkZ2V0OiBXaWRnZXRNb2RlbDxhbnk+O1xyXG5cdGhhdmVQZXJtaXNzaW9uJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuXHR1c2VybmFtZTogc3RyaW5nO1xyXG5cdG9wdGlvbnM6IEdyaWRzdGVyQ29uZmlnO1xyXG5cdGdyaWQ6IEdyaWRNb2RlbDtcclxuXHRyZWFkeSA9IGZhbHNlO1xyXG5cdGdyaWRJdGVtVHlwZXM6IGFueVtzdHJpbmddO1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8QXBwU3RhdGU+LFxyXG5cdFx0cHJpdmF0ZSBzZXJ2aWNlOiBHcmlkU2VydmljZSxcclxuXHRcdHByaXZhdGUgdXNlckZhY2FkZVNlcnZpY2U6IFVzZXJGYWNhZGVTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBjb25maWd1cmF0aW9uU2VydmljZTogR3JpZENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBib3R0b21TaGVldDogTWF0Qm90dG9tU2hlZXRcclxuXHQpIHtcclxuXHRcdHRoaXMub3B0aW9ucyA9IHt9O1xyXG5cdFx0dGhpcy51c2VyRmFjYWRlU2VydmljZVxyXG5cdFx0XHQuZ2V0SW5mbygpXHJcblx0XHRcdC5waXBlKFxyXG5cdFx0XHRcdGZpbHRlcigodXNlcjogYW55KSA9PiB1c2VyLkN1cnJlbnRTZXNzaW9uICE9IHVuZGVmaW5lZCksXHJcblx0XHRcdFx0bWFwKCh1c2VyOiBhbnkpID0+IHVzZXIuQ3VycmVudFNlc3Npb24uVXNlcm5hbWUpXHJcblx0XHRcdClcclxuXHRcdFx0LnN1YnNjcmliZSh1c2VybmFtZSA9PiB7XHJcblx0XHRcdFx0dGhpcy51c2VybmFtZSA9IHVzZXJuYW1lO1xyXG5cdFx0XHR9KTtcclxuXHRcdHRoaXMuZ3JpZEl0ZW1UeXBlcyA9IE9iamVjdC5rZXlzKHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5nZXRWYWx1ZSgpLnR5cGVzKTtcclxuXHRcdHRoaXMuaGF2ZVBlcm1pc3Npb24kID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0QWNjb3VudEluZm8pLnBpcGUoXHJcblx0XHRcdG1hcCh1c2VyID0+IHtcclxuXHRcdFx0XHRjb25zdCBjcml0ZXJpYSA9IFsgdXNlciwgdXNlci5faWQsIHRoaXMuZ3JpZCwgdGhpcy5ncmlkLm93bmVyIF07XHJcblx0XHRcdFx0aWYgKGNyaXRlcmlhLnNvbWUoaSA9PiAhaSkpIHJldHVybiBmYWxzZTtcclxuXHJcblx0XHRcdFx0cmV0dXJuIHVzZXIuX2lkID09IHRoaXMuZ3JpZC5vd25lcjtcclxuXHRcdFx0fSlcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgaXRlbUNoYW5nZShpdGVtLCBpdGVtQ29tcG9uZW50KSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIml0ZW1DaGFuZ2VkXCIsIGl0ZW0sIGl0ZW1Db21wb25lbnQpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGl0ZW1SZXNpemUoaXRlbSwgaXRlbUNvbXBvbmVudCkge1xyXG5cdFx0Y29uc29sZS5sb2coXCJpdGVtUmVzaXplZFwiLCBpdGVtLCBpdGVtQ29tcG9uZW50KTtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0Ly8gdGhpcy5pdGVtcyA9IFsgeyBjb2xzOiAyLCByb3dzOiAxLCB5OiAwLCB4OiAwIH0sIHsgY29sczogMiwgcm93czogMiwgeTogMCwgeDogMiB9IF07XHJcblxyXG5cdFx0dGhpcy5ncmlkID0gbmV3IEdyaWRNb2RlbCh7XHJcblx0XHRcdG9pZDogdGhpcy5vaWQsXHJcblx0XHRcdGNvbmZpZzoge31cclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5fZ2V0X2dyaWRfYnlfb2lkX2FuZF91cGRhdGVfY29tcG9uZW50KCk7XHJcblx0fVxyXG5cclxuXHRfaW5pdENhbGxiYWNrKGl0ZW0pIHtcclxuXHRcdHRoaXMuaW5pdENhbGxiYWNrLmVtaXQoaXRlbSk7XHJcblx0fVxyXG5cclxuXHRyZW1vdmVJdGVtKGl0ZW0pIHtcclxuXHRcdHRoaXMuZ3JpZC5pdGVtcy5zcGxpY2UodGhpcy5ncmlkLml0ZW1zLmluZGV4T2YoaXRlbSksIDEpO1xyXG5cdH1cclxuXHRtYWtlX3B1YmxpYyhpdGVtOiBJR3JpZEl0ZW1Nb2RlbDxhbnk+LCBldmVudDogTWF0Q2hlY2tib3hDaGFuZ2UpIHtcclxuXHRcdGRlYnVnZ2VyO1xyXG5cdFx0aXRlbS5hY2Nlc3MgPSBldmVudC5jaGVja2VkID8gXCJwdWJsaWNcIiA6IFwicHJpdmF0ZVwiO1xyXG5cdFx0dGhpcy5zZXJ2aWNlLnVwZGF0ZV9pdGVtX2FjY2VzcyhpdGVtKS5zdWJzY3JpYmUoaXRlbSA9PiB7XHJcblx0XHRcdGRlYnVnZ2VyO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdGFkZEl0ZW0oZSkge1xyXG5cdFx0ZGVidWdnZXI7XHJcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0dGhpcy5ncmlkLml0ZW1zLnB1c2goe30gYXMgSUdyaWRJdGVtTW9kZWw8YW55Pik7XHJcblx0fVxyXG5cdGVtcHR5Q2VsbENsaWNrKGV2ZW50OiBNb3VzZUV2ZW50LCBpdGVtOiBHcmlkc3Rlckl0ZW0pIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiZW1wdHkgY2VsbCBjbGlja1wiLCBldmVudCwgaXRlbSk7XHJcblx0XHR0aGlzLmdyaWQuaXRlbXMucHVzaChpdGVtIGFzIGFueSk7XHJcblx0fVxyXG5cdG9wZW5Db25maWcoZSkge1xyXG5cdFx0ZGVidWdnZXI7XHJcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0dGhpcy5ib3R0b21TaGVldC5vcGVuKEdyaWRDb25maWdDb21wb25lbnQsIHtcclxuXHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdGdyaWQ6IHRoaXMuZ3JpZFxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblx0c2F2ZUNvbmZpZyhlKSB7XHJcblx0XHRkZWJ1Z2dlcjtcclxuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogVE9ETzpcclxuXHRcdCAqINin2K3Ystin2LEg2YfZiNuM2Kog2K/YsSDYs9mF2Kog2YbZiNivINin2KrYrdin2YUg2LTZiNivXHJcblx0XHQqINqp2KfZhtmB24zaryDYqNix2KfbjCDar9ix2YHYqtmGINi02YbYp9iz2Ycg2qnYp9ix2KjYsVxyXG5cdFx0ICovXHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVcHNlcnRHcmlkU3RhcnRBY3Rpb24odGhpcy5ncmlkKSk7XHJcblx0fVxyXG5cdGdyaWRJdGVtVHlwZUNoYW5nZWQoaXRlbTogSUdyaWRJdGVtTW9kZWw8YW55Pikge1xyXG5cdFx0Y29uc3QgYnMgPSB0aGlzLmJvdHRvbVNoZWV0Lm9wZW4oRHluYW1pY0dyaWRJdGVtQ29uZmlnQ29tcG9uZW50LCB7XHJcblx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHR0eXBlOiBpdGVtLnR5cGVcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRicy5hZnRlckRpc21pc3NlZCgpLnN1YnNjcmliZShkYXRhID0+IHtcclxuXHRcdFx0aXRlbS5jb25maWcgPSBicy5pbnN0YW5jZS5jb25maWc7XHJcblx0XHRcdGl0ZW0udmFsaWQgPSBicy5pbnN0YW5jZS52YWxpZDtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRzaG93Q29uZmlnKGl0ZW06IElHcmlkSXRlbU1vZGVsPGFueT4pIHtcclxuXHRcdGNvbnN0IGJzID0gdGhpcy5ib3R0b21TaGVldC5vcGVuKER5bmFtaWNHcmlkSXRlbUNvbmZpZ0NvbXBvbmVudCwge1xyXG5cdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0dHlwZTogaXRlbS50eXBlXHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0YnMuYWZ0ZXJEaXNtaXNzZWQoKS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblx0XHRcdGl0ZW0uY29uZmlnID0gYnMuaW5zdGFuY2UuY29uZmlnO1xyXG5cdFx0XHRpdGVtLnZhbGlkID0gYnMuaW5zdGFuY2UudmFsaWQ7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1lbWJlci1vcmRlcmluZ1xyXG5cdC8vIEBWaWV3Q2hpbGQoXCJEaWFncmFtVmlld0NvbXBvbmVudFwiKSBfbmdzRHluYW1pY0dyaWRJdGVtVmlldzogRGlhZ3JhbVZpZXdDb21wb25lbnQ7XHJcblx0Z29Ub0VkaXQoKSB7XHJcblx0XHRkZWJ1Z2dlcjtcclxuXHRcdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby11bnVzZWQtZXhwcmVzc2lvblxyXG5cdFx0Ly8gdGhpcy5fbmdzRHluYW1pY0dyaWRJdGVtVmlldztcclxuXHR9XHJcblx0LyoqXHJcblx0ICogcHJpdmF0ZSBtZXRob2RzXHJcblx0ICovXHJcblx0X2dldF9ncmlkX2J5X29pZF9hbmRfdXBkYXRlX2NvbXBvbmVudCgpIHtcclxuXHRcdHRoaXMuc2VydmljZS5zZWxlY3RCeUlkKHRoaXMub2lkKS5waXBlKGZpbHRlcihkYXRhID0+IGRhdGEgIT0gdW5kZWZpbmVkKSkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cdFx0XHR0aGlzLmdyaWQgPSBkYXRhO1xyXG5cdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdFx0ZGF0YS5jb25maWcub3V0ZXJNYXJnaW5Cb3R0b20gPSArZGF0YS5jb25maWcub3V0ZXJNYXJnaW5Cb3R0b207XHJcblx0XHRcdGRhdGEuY29uZmlnLm91dGVyTWFyZ2luUmlnaHQgPSArZGF0YS5jb25maWcub3V0ZXJNYXJnaW5SaWdodDtcclxuXHRcdFx0dGhpcy5vcHRpb25zID0geyAuLi50aGlzLm9wdGlvbnMsIC4uLmRhdGEuY29uZmlnIH07XHJcblx0XHRcdC8vIHRoaXMub3B0aW9ucy5kcmFnZ2FibGUgPSB7XHJcblx0XHRcdC8vIFx0ZW5hYmxlZDogdHJ1ZVxyXG5cdFx0XHQvLyB9O1xyXG5cdFx0XHQvLyB0aGlzLm9wdGlvbnMuZW1wdHlDZWxsQ29udGV4dE1lbnVDYWxsYmFjayA9IHRoaXMuZW1wdHlDZWxsQ2xpY2suYmluZCh0aGlzKTtcclxuXHRcdFx0Ly8gdGhpcy5vcHRpb25zLmVtcHR5Q2VsbERyb3BDYWxsYmFjayA9IHRoaXMuZW1wdHlDZWxsQ2xpY2suYmluZCh0aGlzKTtcclxuXHRcdFx0aWYgKHRoaXMub3B0aW9ucy5lbmFibGVFbXB0eUNlbGxEcmFnKSB0aGlzLm9wdGlvbnMuZW1wdHlDZWxsRHJhZ0NhbGxiYWNrID0gdGhpcy5lbXB0eUNlbGxDbGljay5iaW5kKHRoaXMpO1xyXG5cdFx0XHQvLyBpZiAodGhpcy5vcHRpb25zLmVuYWJsZUVtcHR5Q2VsbENsaWNrKSB0aGlzLm9wdGlvbnMuZW1wdHlDZWxsQ2xpY2tDYWxsYmFjayA9IHRoaXMuZW1wdHlDZWxsQ2xpY2suYmluZCh0aGlzKTtcclxuXHRcdFx0dGhpcy5yZWFkeSA9IHRydWU7XHJcblx0XHRcdC8vIHRoaXMub3B0aW9ucy5hcGkub3B0aW9uc0NoYW5nZWQoKTtcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG4iXX0=