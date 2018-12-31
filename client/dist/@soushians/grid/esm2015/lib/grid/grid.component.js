/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        this.grid.items.push(/** @type {?} */ ({}));
    }
    /**
     * @param {?} event
     * @param {?} item
     * @return {?}
     */
    emptyCellClick(event, item) {
        console.log("empty cell click", event, item);
        this.grid.items.push(/** @type {?} */ (item));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2dyaWQvIiwic291cmNlcyI6WyJsaWIvZ3JpZC9ncmlkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUUxRixPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGNBQWMsRUFBcUIsTUFBTSxtQkFBbUIsQ0FBQztBQUd0RSxPQUFPLEVBQUUsY0FBYyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFJcEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUNqRyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUUzRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQVF4RixNQUFNLE9BQU8sYUFBYTs7Ozs7Ozs7SUFrQnpCLFlBQ1MsT0FDQSxTQUNBLG1CQUNBLHNCQUNBO1FBSkEsVUFBSyxHQUFMLEtBQUs7UUFDTCxZQUFPLEdBQVAsT0FBTztRQUNQLHNCQUFpQixHQUFqQixpQkFBaUI7UUFDakIseUJBQW9CLEdBQXBCLG9CQUFvQjtRQUNwQixnQkFBVyxHQUFYLFdBQVc7UUF0QnBCLDRCQUFpQyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3BELDJCQUFnQyxJQUFJ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QUFRLENBQUM7WUFDVCxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztZQUMvRCxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztZQUM3RCxJQUFJLENBQUMsT0FBTyxxQkFBUSxJQUFJLENBQUMsT0FBTyxFQUFLLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQzs7Ozs7O1lBTW5ELElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUI7Z0JBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzs7WUFFMUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7O1NBRWxCLENBQUMsQ0FBQztLQUNIOzs7WUFwS0QsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxVQUFVO2dCQUNwQixxeEZBQW9DOzthQUVwQzs7OztZQXRCUSxLQUFLO1lBVUwsV0FBVztZQUxLLGlCQUFpQjtZQU1qQyx3QkFBd0I7WUFUeEIsY0FBYzs7O21DQXNCckIsTUFBTTtrQ0FDTixNQUFNOytCQUNOLE1BQU07aUNBQ04sTUFBTTtpQ0FDTixNQUFNO3NDQUNOLE1BQU07OEJBQ04sTUFBTTsyQkFDTixNQUFNO2tCQUVOLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBHcmlkc3RlckNvbmZpZywgR3JpZHN0ZXJJdGVtIH0gZnJvbSBcImFuZ3VsYXItZ3JpZHN0ZXIyXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IGZpbHRlciwgbWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IE1hdEJvdHRvbVNoZWV0LCBNYXRDaGVja2JveENoYW5nZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmltcG9ydCB7IGdldEFjY291bnRJbmZvLCBVc2VyRmFjYWRlU2VydmljZSB9IGZyb20gXCJAc291c2hpYW5zL3VzZXJcIjtcclxuLy8gaW1wb3J0IHsgV2lkZ2V0TW9kZWwgfSBmcm9tIFwiQHNvdXNoaWFucy93aWRnZXRcIjtcclxuXHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uL2dyaWQucmVkdWNlclwiO1xyXG5pbXBvcnQgeyBHcmlkTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL2dyaWQubW9kZWxcIjtcclxuaW1wb3J0IHsgR3JpZFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvZ3JpZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEdyaWRDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9ncmlkLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBEeW5hbWljR3JpZEl0ZW1Db25maWdDb21wb25lbnQgfSBmcm9tIFwiLi4vZ3JpZC1pdGVtL2R5bmFtaWMtZ3JpZC1pdGVtLWNvbmZpZy5kaXJlY3RpdmVcIjtcclxuaW1wb3J0IHsgR3JpZENvbmZpZ0NvbXBvbmVudCB9IGZyb20gXCIuLi9ncmlkLWNvbmZpZy9ncmlkLWNvbmZpZy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgSUdyaWRJdGVtTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL2dpcmQtaXRlbS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBVcHNlcnRHcmlkU3RhcnRBY3Rpb24gfSBmcm9tIFwiLi4vc2VydmljZXMvYXBpL3Vwc2VydC1ncmlkL3Vwc2VydC1ncmlkLmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgRHluYW1pY0dyaWRJdGVtVmlld0RpcmVjdGl2ZSB9IGZyb20gXCIuLi9ncmlkLWl0ZW0vZHluYW1pYy1ncmlkLWl0ZW0tdmlldy5kaXJlY3RpdmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcIm5ncy1ncmlkXCIsXHJcblx0dGVtcGxhdGVVcmw6IFwiLi9ncmlkLmNvbXBvbmVudC5odG1sXCIsXHJcblx0c3R5bGVVcmxzOiBbIFwiLi9ncmlkLmNvbXBvbmVudC5jc3NcIiBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHcmlkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRAT3V0cHV0KCkgaXRlbVZhbGlkYXRlQ2FsbGJhY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0QE91dHB1dCgpIGl0ZW1SZW1vdmVkQ2FsbGJhY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0QE91dHB1dCgpIGl0ZW1Jbml0Q2FsbGJhY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0QE91dHB1dCgpIGl0ZW1SZXNpemVDYWxsYmFjayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRAT3V0cHV0KCkgaXRlbUNoYW5nZUNhbGxiYWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBPdXRwdXQoKSBncmlkU2l6ZUNoYW5nZWRDYWxsYmFjayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRAT3V0cHV0KCkgZGVzdHJveUNhbGxiYWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBPdXRwdXQoKSBpbml0Q2FsbGJhY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG5cdEBJbnB1dCgpIG9pZDogc3RyaW5nO1xyXG5cdC8vIHdpZGdldDogV2lkZ2V0TW9kZWw8YW55PjtcclxuXHRoYXZlUGVybWlzc2lvbiQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcblx0dXNlcm5hbWU6IHN0cmluZztcclxuXHRvcHRpb25zOiBHcmlkc3RlckNvbmZpZztcclxuXHRncmlkOiBHcmlkTW9kZWw7XHJcblx0cmVhZHkgPSBmYWxzZTtcclxuXHRncmlkSXRlbVR5cGVzOiBhbnlbc3RyaW5nXTtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPixcclxuXHRcdHByaXZhdGUgc2VydmljZTogR3JpZFNlcnZpY2UsXHJcblx0XHRwcml2YXRlIHVzZXJGYWNhZGVTZXJ2aWNlOiBVc2VyRmFjYWRlU2VydmljZSxcclxuXHRcdHByaXZhdGUgY29uZmlndXJhdGlvblNlcnZpY2U6IEdyaWRDb25maWd1cmF0aW9uU2VydmljZSxcclxuXHRcdHByaXZhdGUgYm90dG9tU2hlZXQ6IE1hdEJvdHRvbVNoZWV0XHJcblx0KSB7XHJcblx0XHR0aGlzLm9wdGlvbnMgPSB7fTtcclxuXHRcdHRoaXMudXNlckZhY2FkZVNlcnZpY2VcclxuXHRcdFx0LmdldEluZm8oKVxyXG5cdFx0XHQucGlwZShcclxuXHRcdFx0XHRmaWx0ZXIoKHVzZXI6IGFueSkgPT4gdXNlci5DdXJyZW50U2Vzc2lvbiAhPSB1bmRlZmluZWQpLFxyXG5cdFx0XHRcdG1hcCgodXNlcjogYW55KSA9PiB1c2VyLkN1cnJlbnRTZXNzaW9uLlVzZXJuYW1lKVxyXG5cdFx0XHQpXHJcblx0XHRcdC5zdWJzY3JpYmUodXNlcm5hbWUgPT4ge1xyXG5cdFx0XHRcdHRoaXMudXNlcm5hbWUgPSB1c2VybmFtZTtcclxuXHRcdFx0fSk7XHJcblx0XHR0aGlzLmdyaWRJdGVtVHlwZXMgPSBPYmplY3Qua2V5cyh0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQuZ2V0VmFsdWUoKS50eXBlcyk7XHJcblx0XHR0aGlzLmhhdmVQZXJtaXNzaW9uJCA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldEFjY291bnRJbmZvKS5waXBlKFxyXG5cdFx0XHRtYXAodXNlciA9PiB7XHJcblx0XHRcdFx0Y29uc3QgY3JpdGVyaWEgPSBbIHVzZXIsIHVzZXIuX2lkLCB0aGlzLmdyaWQsIHRoaXMuZ3JpZC5vd25lciBdO1xyXG5cdFx0XHRcdGlmIChjcml0ZXJpYS5zb21lKGkgPT4gIWkpKSByZXR1cm4gZmFsc2U7XHJcblxyXG5cdFx0XHRcdHJldHVybiB1c2VyLl9pZCA9PSB0aGlzLmdyaWQub3duZXI7XHJcblx0XHRcdH0pXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGl0ZW1DaGFuZ2UoaXRlbSwgaXRlbUNvbXBvbmVudCkge1xyXG5cdFx0Y29uc29sZS5sb2coXCJpdGVtQ2hhbmdlZFwiLCBpdGVtLCBpdGVtQ29tcG9uZW50KTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBpdGVtUmVzaXplKGl0ZW0sIGl0ZW1Db21wb25lbnQpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiaXRlbVJlc2l6ZWRcIiwgaXRlbSwgaXRlbUNvbXBvbmVudCk7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdC8vIHRoaXMuaXRlbXMgPSBbIHsgY29sczogMiwgcm93czogMSwgeTogMCwgeDogMCB9LCB7IGNvbHM6IDIsIHJvd3M6IDIsIHk6IDAsIHg6IDIgfSBdO1xyXG5cclxuXHRcdHRoaXMuZ3JpZCA9IG5ldyBHcmlkTW9kZWwoe1xyXG5cdFx0XHRvaWQ6IHRoaXMub2lkLFxyXG5cdFx0XHRjb25maWc6IHt9XHJcblx0XHR9KTtcclxuXHRcdHRoaXMuX2dldF9ncmlkX2J5X29pZF9hbmRfdXBkYXRlX2NvbXBvbmVudCgpO1xyXG5cdH1cclxuXHJcblx0X2luaXRDYWxsYmFjayhpdGVtKSB7XHJcblx0XHR0aGlzLmluaXRDYWxsYmFjay5lbWl0KGl0ZW0pO1xyXG5cdH1cclxuXHJcblx0cmVtb3ZlSXRlbShpdGVtKSB7XHJcblx0XHR0aGlzLmdyaWQuaXRlbXMuc3BsaWNlKHRoaXMuZ3JpZC5pdGVtcy5pbmRleE9mKGl0ZW0pLCAxKTtcclxuXHR9XHJcblx0bWFrZV9wdWJsaWMoaXRlbTogSUdyaWRJdGVtTW9kZWw8YW55PiwgZXZlbnQ6IE1hdENoZWNrYm94Q2hhbmdlKSB7XHJcblx0XHRkZWJ1Z2dlcjtcclxuXHRcdGl0ZW0uYWNjZXNzID0gZXZlbnQuY2hlY2tlZCA/IFwicHVibGljXCIgOiBcInByaXZhdGVcIjtcclxuXHRcdHRoaXMuc2VydmljZS51cGRhdGVfaXRlbV9hY2Nlc3MoaXRlbSkuc3Vic2NyaWJlKGl0ZW0gPT4ge1xyXG5cdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRhZGRJdGVtKGUpIHtcclxuXHRcdGRlYnVnZ2VyO1xyXG5cdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRcdHRoaXMuZ3JpZC5pdGVtcy5wdXNoKHt9IGFzIElHcmlkSXRlbU1vZGVsPGFueT4pO1xyXG5cdH1cclxuXHRlbXB0eUNlbGxDbGljayhldmVudDogTW91c2VFdmVudCwgaXRlbTogR3JpZHN0ZXJJdGVtKSB7XHJcblx0XHRjb25zb2xlLmxvZyhcImVtcHR5IGNlbGwgY2xpY2tcIiwgZXZlbnQsIGl0ZW0pO1xyXG5cdFx0dGhpcy5ncmlkLml0ZW1zLnB1c2goaXRlbSBhcyBhbnkpO1xyXG5cdH1cclxuXHRvcGVuQ29uZmlnKGUpIHtcclxuXHRcdGRlYnVnZ2VyO1xyXG5cdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdHRoaXMuYm90dG9tU2hlZXQub3BlbihHcmlkQ29uZmlnQ29tcG9uZW50LCB7XHJcblx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRncmlkOiB0aGlzLmdyaWRcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cdHNhdmVDb25maWcoZSkge1xyXG5cdFx0ZGVidWdnZXI7XHJcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0ZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFRPRE86XHJcblx0XHQgKiDYp9it2LLYp9ixINmH2YjbjNiqINiv2LEg2LPZhdiqINmG2YjYryDYp9iq2K3Yp9mFINi02YjYr1xyXG5cdFx0KiDaqdin2YbZgduM2q8g2KjYsdin24wg2q/YsdmB2KrZhiDYtNmG2KfYs9mHINqp2KfYsdio2LFcclxuXHRcdCAqL1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVXBzZXJ0R3JpZFN0YXJ0QWN0aW9uKHRoaXMuZ3JpZCkpO1xyXG5cdH1cclxuXHRncmlkSXRlbVR5cGVDaGFuZ2VkKGl0ZW06IElHcmlkSXRlbU1vZGVsPGFueT4pIHtcclxuXHRcdGNvbnN0IGJzID0gdGhpcy5ib3R0b21TaGVldC5vcGVuKER5bmFtaWNHcmlkSXRlbUNvbmZpZ0NvbXBvbmVudCwge1xyXG5cdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0dHlwZTogaXRlbS50eXBlXHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0YnMuYWZ0ZXJEaXNtaXNzZWQoKS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblx0XHRcdGl0ZW0uY29uZmlnID0gYnMuaW5zdGFuY2UuY29uZmlnO1xyXG5cdFx0XHRpdGVtLnZhbGlkID0gYnMuaW5zdGFuY2UudmFsaWQ7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0c2hvd0NvbmZpZyhpdGVtOiBJR3JpZEl0ZW1Nb2RlbDxhbnk+KSB7XHJcblx0XHRjb25zdCBicyA9IHRoaXMuYm90dG9tU2hlZXQub3BlbihEeW5hbWljR3JpZEl0ZW1Db25maWdDb21wb25lbnQsIHtcclxuXHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdHR5cGU6IGl0ZW0udHlwZVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdGJzLmFmdGVyRGlzbWlzc2VkKCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cdFx0XHRpdGVtLmNvbmZpZyA9IGJzLmluc3RhbmNlLmNvbmZpZztcclxuXHRcdFx0aXRlbS52YWxpZCA9IGJzLmluc3RhbmNlLnZhbGlkO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptZW1iZXItb3JkZXJpbmdcclxuXHQvLyBAVmlld0NoaWxkKFwiRGlhZ3JhbVZpZXdDb21wb25lbnRcIikgX25nc0R5bmFtaWNHcmlkSXRlbVZpZXc6IERpYWdyYW1WaWV3Q29tcG9uZW50O1xyXG5cdGdvVG9FZGl0KCkge1xyXG5cdFx0ZGVidWdnZXI7XHJcblx0XHQvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tdW51c2VkLWV4cHJlc3Npb25cclxuXHRcdC8vIHRoaXMuX25nc0R5bmFtaWNHcmlkSXRlbVZpZXc7XHJcblx0fVxyXG5cdC8qKlxyXG5cdCAqIHByaXZhdGUgbWV0aG9kc1xyXG5cdCAqL1xyXG5cdF9nZXRfZ3JpZF9ieV9vaWRfYW5kX3VwZGF0ZV9jb21wb25lbnQoKSB7XHJcblx0XHR0aGlzLnNlcnZpY2Uuc2VsZWN0QnlJZCh0aGlzLm9pZCkucGlwZShmaWx0ZXIoZGF0YSA9PiBkYXRhICE9IHVuZGVmaW5lZCkpLnN1YnNjcmliZShkYXRhID0+IHtcclxuXHRcdFx0dGhpcy5ncmlkID0gZGF0YTtcclxuXHRcdFx0ZGVidWdnZXI7XHJcblx0XHRcdGRhdGEuY29uZmlnLm91dGVyTWFyZ2luQm90dG9tID0gK2RhdGEuY29uZmlnLm91dGVyTWFyZ2luQm90dG9tO1xyXG5cdFx0XHRkYXRhLmNvbmZpZy5vdXRlck1hcmdpblJpZ2h0ID0gK2RhdGEuY29uZmlnLm91dGVyTWFyZ2luUmlnaHQ7XHJcblx0XHRcdHRoaXMub3B0aW9ucyA9IHsgLi4udGhpcy5vcHRpb25zLCAuLi5kYXRhLmNvbmZpZyB9O1xyXG5cdFx0XHQvLyB0aGlzLm9wdGlvbnMuZHJhZ2dhYmxlID0ge1xyXG5cdFx0XHQvLyBcdGVuYWJsZWQ6IHRydWVcclxuXHRcdFx0Ly8gfTtcclxuXHRcdFx0Ly8gdGhpcy5vcHRpb25zLmVtcHR5Q2VsbENvbnRleHRNZW51Q2FsbGJhY2sgPSB0aGlzLmVtcHR5Q2VsbENsaWNrLmJpbmQodGhpcyk7XHJcblx0XHRcdC8vIHRoaXMub3B0aW9ucy5lbXB0eUNlbGxEcm9wQ2FsbGJhY2sgPSB0aGlzLmVtcHR5Q2VsbENsaWNrLmJpbmQodGhpcyk7XHJcblx0XHRcdGlmICh0aGlzLm9wdGlvbnMuZW5hYmxlRW1wdHlDZWxsRHJhZykgdGhpcy5vcHRpb25zLmVtcHR5Q2VsbERyYWdDYWxsYmFjayA9IHRoaXMuZW1wdHlDZWxsQ2xpY2suYmluZCh0aGlzKTtcclxuXHRcdFx0Ly8gaWYgKHRoaXMub3B0aW9ucy5lbmFibGVFbXB0eUNlbGxDbGljaykgdGhpcy5vcHRpb25zLmVtcHR5Q2VsbENsaWNrQ2FsbGJhY2sgPSB0aGlzLmVtcHR5Q2VsbENsaWNrLmJpbmQodGhpcyk7XHJcblx0XHRcdHRoaXMucmVhZHkgPSB0cnVlO1xyXG5cdFx0XHQvLyB0aGlzLm9wdGlvbnMuYXBpLm9wdGlvbnNDaGFuZ2VkKCk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuIl19