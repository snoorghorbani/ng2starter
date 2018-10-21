/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Store } from "@ngrx/store";
import { filter, map } from "rxjs/operators";
import { MatBottomSheet } from "@angular/material";
import { getAccountInfo } from "@soushians/user";
import { GridModel } from "../models";
import { GridService } from "../services/grid.service";
import { GridConfigurationService } from "../services/grid-configuration.service";
import { DynamicGridItemConfigComponent } from "../grid-item/dynamic-grid-item-config.directive";
import { GridConfigComponent } from "../grid-config/grid-config.component";
import { UpsertGridStartAction } from "../services/api/upsert-grid/upsert-grid.actions";
import { UserFacadeService } from "@soushians/user";
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
                template: `<gridster [options]="options">
    <div class="actions" >
        <button mat-mini-fab (click)="addItem($event)">
            <mat-icon>add</mat-icon>
        </button>
        <button mat-mini-fab (click)="openConfig($event)" *ngIf="havePermission$ | async">
            <mat-icon>dashboard</mat-icon>
        </button>
        <button mat-mini-fab (click)="saveConfig($event)">
            <mat-icon>done</mat-icon>
        </button>
    </div>
    <gridster-item [item]="item" *ngFor="let item of grid.items">
        <div class="initializer" fxLayout="row" fxLayoutAlign="space-between center">
            <div fxFlex="nogrow">
                <button mat-icon-button [matMenuTriggerFor]="menu">
                    <mat-icon>more_horiz</mat-icon>
                </button>
                <mat-menu #menu="matMenu" class="rtl">
                    <mat-checkbox *ngIf="grid.owner == username" labelPosition="before" [checked]="item.access=='public'"
                        (change)="make_public(item,$event)">عمومی</mat-checkbox>
                    <button mat-menu-item class="rtl" (click)="goToEdit()">
                        <mat-icon>edit</mat-icon>
                        <span>ویرایش افزونه</span>
                    </button>
                    <!-- <button mat-menu-item class="rtl" (click)="showConfig(item)">
                        <mat-icon>settings</mat-icon>
                        <span>تنظیمات</span>
                    </button> -->
                    <button mat-menu-item class="rtl" (click)="removeItem(item)">
                        <mat-icon>delete</mat-icon>
                        <span>حذف</span>
                    </button>
                </mat-menu>
            </div>
        </div>
        <div class="widget-content">
            <div *ngIf="!item.valid" fxFlex="100" class="form-container">
                <h4>تنظیمات</h4>
                <mat-form-field fxFlex="grow">
                    <mat-select placeholder="Grid Item Type" [(ngModel)]="item.type" (selectionChange)="gridItemTypeChanged(item)">
                        <mat-option *ngFor="let item of gridItemTypes" [value]="item">
                            {{item}}
                        </mat-option>
                    </mat-select>
                </mat-form-field>
            </div>
            <div *ngIf="item.valid" #test [ngsDynamicGridItemView]="item"></div>
        </div>
    </gridster-item>
</gridster>`,
                styles: [`:host{width:100%;min-height:calc(100vh - 205px);display:block;direction:ltr}.initializer{position:absolute;z-index:10;top:5px;left:5px;height:25px}.actions{position:absolute;top:25px;right:25px;z-index:5}.actions button{margin-left:10px}.widget-content{position:relative;height:100%}.form-container{padding:25px;width:100%}[dir=rtl] .form-container{direction:rtl}.form-container mat-form-field{width:100%}.rtl{direction:rtl}`]
            },] },
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
    GridComponent.prototype.widget;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2dyaWQvIiwic291cmNlcyI6WyJsaWIvZ3JpZC9ncmlkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUUxRixPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGNBQWMsRUFBcUIsTUFBTSxtQkFBbUIsQ0FBQztBQUd0RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHakQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUN0QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDbEYsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDakcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFM0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDeEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUEyRHBELE1BQU07Ozs7Ozs7O0lBa0JMLFlBQ1MsT0FDQSxTQUNBLG1CQUNBLHNCQUNBO1FBSkEsVUFBSyxHQUFMLEtBQUs7UUFDTCxZQUFPLEdBQVAsT0FBTztRQUNQLHNCQUFpQixHQUFqQixpQkFBaUI7UUFDakIseUJBQW9CLEdBQXBCLG9CQUFvQjtRQUNwQixnQkFBVyxHQUFYLFdBQVc7b0NBdEJhLElBQUksWUFBWSxFQUFFO21DQUNuQixJ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Q0FBQztZQUMvRCxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztZQUM3RCxJQUFJLENBQUMsT0FBTyxxQkFBUSxJQUFJLENBQUMsT0FBTyxFQUFLLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQzs7Ozs7O1lBTW5ELElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUI7Z0JBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzs7WUFFMUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7O1NBRWxCLENBQUMsQ0FBQztLQUNIOzs7WUF0TkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxVQUFVO2dCQUNwQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBa0RDO2dCQUNYLE1BQU0sRUFBRSxDQUFDLDBhQUEwYSxDQUFDO2FBQ3BiOzs7O1lBekVRLEtBQUs7WUFTTCxXQUFXO1lBTVgsaUJBQWlCO1lBTGpCLHdCQUF3QjtZQVJ4QixjQUFjOzs7bUNBeUVyQixNQUFNO2tDQUNOLE1BQU07K0JBQ04sTUFBTTtpQ0FDTixNQUFNO2lDQUNOLE1BQU07c0NBQ04sTUFBTTs4QkFDTixNQUFNOzJCQUNOLE1BQU07a0JBRU4sS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEdyaWRzdGVyQ29uZmlnLCBHcmlkc3Rlckl0ZW0gfSBmcm9tIFwiYW5ndWxhci1ncmlkc3RlcjJcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgTWF0Qm90dG9tU2hlZXQsIE1hdENoZWNrYm94Q2hhbmdlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0IHsgZ2V0QWNjb3VudEluZm8gfSBmcm9tIFwiQHNvdXNoaWFucy91c2VyXCI7XHJcblxyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi9ncmlkLnJlZHVjZXJcIjtcclxuaW1wb3J0IHsgR3JpZE1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBHcmlkU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9ncmlkLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgR3JpZENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2dyaWQtY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IER5bmFtaWNHcmlkSXRlbUNvbmZpZ0NvbXBvbmVudCB9IGZyb20gXCIuLi9ncmlkLWl0ZW0vZHluYW1pYy1ncmlkLWl0ZW0tY29uZmlnLmRpcmVjdGl2ZVwiO1xyXG5pbXBvcnQgeyBHcmlkQ29uZmlnQ29tcG9uZW50IH0gZnJvbSBcIi4uL2dyaWQtY29uZmlnL2dyaWQtY29uZmlnLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBJR3JpZEl0ZW1Nb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvZ2lyZC1pdGVtLm1vZGVsXCI7XHJcbmltcG9ydCB7IFVwc2VydEdyaWRTdGFydEFjdGlvbiB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hcGkvdXBzZXJ0LWdyaWQvdXBzZXJ0LWdyaWQuYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBVc2VyRmFjYWRlU2VydmljZSB9IGZyb20gXCJAc291c2hpYW5zL3VzZXJcIjtcclxuaW1wb3J0IHsgV2lkZ2V0U2VsZWN0b3JDb21wb25lbnQsIFdpZGdldE1vZGVsIH0gZnJvbSBcIkBzb3VzaGlhbnMvd2lkZ2V0XCI7XHJcbmltcG9ydCB7IER5bmFtaWNHcmlkSXRlbVZpZXdEaXJlY3RpdmUgfSBmcm9tIFwiLi4vZ3JpZC1pdGVtL2R5bmFtaWMtZ3JpZC1pdGVtLXZpZXcuZGlyZWN0aXZlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJuZ3MtZ3JpZFwiLFxyXG5cdHRlbXBsYXRlOiBgPGdyaWRzdGVyIFtvcHRpb25zXT1cIm9wdGlvbnNcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJhY3Rpb25zXCIgPlxyXG4gICAgICAgIDxidXR0b24gbWF0LW1pbmktZmFiIChjbGljayk9XCJhZGRJdGVtKCRldmVudClcIj5cclxuICAgICAgICAgICAgPG1hdC1pY29uPmFkZDwvbWF0LWljb24+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBtYXQtbWluaS1mYWIgKGNsaWNrKT1cIm9wZW5Db25maWcoJGV2ZW50KVwiICpuZ0lmPVwiaGF2ZVBlcm1pc3Npb24kIHwgYXN5bmNcIj5cclxuICAgICAgICAgICAgPG1hdC1pY29uPmRhc2hib2FyZDwvbWF0LWljb24+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBtYXQtbWluaS1mYWIgKGNsaWNrKT1cInNhdmVDb25maWcoJGV2ZW50KVwiPlxyXG4gICAgICAgICAgICA8bWF0LWljb24+ZG9uZTwvbWF0LWljb24+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxncmlkc3Rlci1pdGVtIFtpdGVtXT1cIml0ZW1cIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBncmlkLml0ZW1zXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImluaXRpYWxpemVyXCIgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEFsaWduPVwic3BhY2UtYmV0d2VlbiBjZW50ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBmeEZsZXg9XCJub2dyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIFttYXRNZW51VHJpZ2dlckZvcl09XCJtZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uPm1vcmVfaG9yaXo8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8bWF0LW1lbnUgI21lbnU9XCJtYXRNZW51XCIgY2xhc3M9XCJydGxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LWNoZWNrYm94ICpuZ0lmPVwiZ3JpZC5vd25lciA9PSB1c2VybmFtZVwiIGxhYmVsUG9zaXRpb249XCJiZWZvcmVcIiBbY2hlY2tlZF09XCJpdGVtLmFjY2Vzcz09J3B1YmxpYydcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoY2hhbmdlKT1cIm1ha2VfcHVibGljKGl0ZW0sJGV2ZW50KVwiPti52YXZiNmF24w8L21hdC1jaGVja2JveD5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0gY2xhc3M9XCJydGxcIiAoY2xpY2spPVwiZ29Ub0VkaXQoKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24+ZWRpdDwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPtmI24zYsdin24zYtCDYp9mB2LLZiNmG2Yc8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSA8YnV0dG9uIG1hdC1tZW51LWl0ZW0gY2xhc3M9XCJydGxcIiAoY2xpY2spPVwic2hvd0NvbmZpZyhpdGVtKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24+c2V0dGluZ3M8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7YqtmG2LjbjNmF2KfYqjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj4gLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtIGNsYXNzPVwicnRsXCIgKGNsaWNrKT1cInJlbW92ZUl0ZW0oaXRlbSlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uPmRlbGV0ZTwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPtit2LDZgTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvbWF0LW1lbnU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3aWRnZXQtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiIWl0ZW0udmFsaWRcIiBmeEZsZXg9XCIxMDBcIiBjbGFzcz1cImZvcm0tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDQ+2KrZhti424zZhdin2Ko8L2g0PlxyXG4gICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleD1cImdyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LXNlbGVjdCBwbGFjZWhvbGRlcj1cIkdyaWQgSXRlbSBUeXBlXCIgWyhuZ01vZGVsKV09XCJpdGVtLnR5cGVcIiAoc2VsZWN0aW9uQ2hhbmdlKT1cImdyaWRJdGVtVHlwZUNoYW5nZWQoaXRlbSlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGl0ZW0gb2YgZ3JpZEl0ZW1UeXBlc1wiIFt2YWx1ZV09XCJpdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2l0ZW19fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJpdGVtLnZhbGlkXCIgI3Rlc3QgW25nc0R5bmFtaWNHcmlkSXRlbVZpZXddPVwiaXRlbVwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9ncmlkc3Rlci1pdGVtPlxyXG48L2dyaWRzdGVyPmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e3dpZHRoOjEwMCU7bWluLWhlaWdodDpjYWxjKDEwMHZoIC0gMjA1cHgpO2Rpc3BsYXk6YmxvY2s7ZGlyZWN0aW9uOmx0cn0uaW5pdGlhbGl6ZXJ7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoxMDt0b3A6NXB4O2xlZnQ6NXB4O2hlaWdodDoyNXB4fS5hY3Rpb25ze3Bvc2l0aW9uOmFic29sdXRlO3RvcDoyNXB4O3JpZ2h0OjI1cHg7ei1pbmRleDo1fS5hY3Rpb25zIGJ1dHRvbnttYXJnaW4tbGVmdDoxMHB4fS53aWRnZXQtY29udGVudHtwb3NpdGlvbjpyZWxhdGl2ZTtoZWlnaHQ6MTAwJX0uZm9ybS1jb250YWluZXJ7cGFkZGluZzoyNXB4O3dpZHRoOjEwMCV9W2Rpcj1ydGxdIC5mb3JtLWNvbnRhaW5lcntkaXJlY3Rpb246cnRsfS5mb3JtLWNvbnRhaW5lciBtYXQtZm9ybS1maWVsZHt3aWR0aDoxMDAlfS5ydGx7ZGlyZWN0aW9uOnJ0bH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgR3JpZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0QE91dHB1dCgpIGl0ZW1WYWxpZGF0ZUNhbGxiYWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBPdXRwdXQoKSBpdGVtUmVtb3ZlZENhbGxiYWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBPdXRwdXQoKSBpdGVtSW5pdENhbGxiYWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBPdXRwdXQoKSBpdGVtUmVzaXplQ2FsbGJhY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0QE91dHB1dCgpIGl0ZW1DaGFuZ2VDYWxsYmFjayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRAT3V0cHV0KCkgZ3JpZFNpemVDaGFuZ2VkQ2FsbGJhY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0QE91dHB1dCgpIGRlc3Ryb3lDYWxsYmFjayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRAT3V0cHV0KCkgaW5pdENhbGxiYWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuXHRASW5wdXQoKSBvaWQ6IHN0cmluZztcclxuXHR3aWRnZXQ6IFdpZGdldE1vZGVsPGFueT47XHJcblx0aGF2ZVBlcm1pc3Npb24kOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG5cdHVzZXJuYW1lOiBzdHJpbmc7XHJcblx0b3B0aW9uczogR3JpZHN0ZXJDb25maWc7XHJcblx0Z3JpZDogR3JpZE1vZGVsO1xyXG5cdHJlYWR5ID0gZmFsc2U7XHJcblx0Z3JpZEl0ZW1UeXBlczogYW55W3N0cmluZ107XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4sXHJcblx0XHRwcml2YXRlIHNlcnZpY2U6IEdyaWRTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSB1c2VyRmFjYWRlU2VydmljZTogVXNlckZhY2FkZVNlcnZpY2UsXHJcblx0XHRwcml2YXRlIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBHcmlkQ29uZmlndXJhdGlvblNlcnZpY2UsXHJcblx0XHRwcml2YXRlIGJvdHRvbVNoZWV0OiBNYXRCb3R0b21TaGVldFxyXG5cdCkge1xyXG5cdFx0dGhpcy5vcHRpb25zID0ge307XHJcblx0XHR0aGlzLnVzZXJGYWNhZGVTZXJ2aWNlXHJcblx0XHRcdC5nZXRJbmZvKClcclxuXHRcdFx0LnBpcGUoXHJcblx0XHRcdFx0ZmlsdGVyKCh1c2VyOiBhbnkpID0+IHVzZXIuQ3VycmVudFNlc3Npb24gIT0gdW5kZWZpbmVkKSxcclxuXHRcdFx0XHRtYXAoKHVzZXI6IGFueSkgPT4gdXNlci5DdXJyZW50U2Vzc2lvbi5Vc2VybmFtZSlcclxuXHRcdFx0KVxyXG5cdFx0XHQuc3Vic2NyaWJlKHVzZXJuYW1lID0+IHtcclxuXHRcdFx0XHR0aGlzLnVzZXJuYW1lID0gdXNlcm5hbWU7XHJcblx0XHRcdH0pO1xyXG5cdFx0dGhpcy5ncmlkSXRlbVR5cGVzID0gT2JqZWN0LmtleXModGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLmdldFZhbHVlKCkudHlwZXMpO1xyXG5cdFx0dGhpcy5oYXZlUGVybWlzc2lvbiQgPSB0aGlzLnN0b3JlLnNlbGVjdChnZXRBY2NvdW50SW5mbykucGlwZShcclxuXHRcdFx0bWFwKHVzZXIgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IGNyaXRlcmlhID0gWyB1c2VyLCB1c2VyLl9pZCwgdGhpcy5ncmlkLCB0aGlzLmdyaWQub3duZXIgXTtcclxuXHRcdFx0XHRpZiAoY3JpdGVyaWEuc29tZShpID0+ICFpKSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gdXNlci5faWQgPT0gdGhpcy5ncmlkLm93bmVyO1xyXG5cdFx0XHR9KVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBpdGVtQ2hhbmdlKGl0ZW0sIGl0ZW1Db21wb25lbnQpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiaXRlbUNoYW5nZWRcIiwgaXRlbSwgaXRlbUNvbXBvbmVudCk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgaXRlbVJlc2l6ZShpdGVtLCBpdGVtQ29tcG9uZW50KSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIml0ZW1SZXNpemVkXCIsIGl0ZW0sIGl0ZW1Db21wb25lbnQpO1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHQvLyB0aGlzLml0ZW1zID0gWyB7IGNvbHM6IDIsIHJvd3M6IDEsIHk6IDAsIHg6IDAgfSwgeyBjb2xzOiAyLCByb3dzOiAyLCB5OiAwLCB4OiAyIH0gXTtcclxuXHJcblx0XHR0aGlzLmdyaWQgPSBuZXcgR3JpZE1vZGVsKHtcclxuXHRcdFx0b2lkOiB0aGlzLm9pZCxcclxuXHRcdFx0Y29uZmlnOiB7fVxyXG5cdFx0fSk7XHJcblx0XHR0aGlzLl9nZXRfZ3JpZF9ieV9vaWRfYW5kX3VwZGF0ZV9jb21wb25lbnQoKTtcclxuXHR9XHJcblxyXG5cdF9pbml0Q2FsbGJhY2soaXRlbSkge1xyXG5cdFx0dGhpcy5pbml0Q2FsbGJhY2suZW1pdChpdGVtKTtcclxuXHR9XHJcblxyXG5cdHJlbW92ZUl0ZW0oaXRlbSkge1xyXG5cdFx0dGhpcy5ncmlkLml0ZW1zLnNwbGljZSh0aGlzLmdyaWQuaXRlbXMuaW5kZXhPZihpdGVtKSwgMSk7XHJcblx0fVxyXG5cdG1ha2VfcHVibGljKGl0ZW06IElHcmlkSXRlbU1vZGVsPGFueT4sIGV2ZW50OiBNYXRDaGVja2JveENoYW5nZSkge1xyXG5cdFx0ZGVidWdnZXI7XHJcblx0XHRpdGVtLmFjY2VzcyA9IGV2ZW50LmNoZWNrZWQgPyBcInB1YmxpY1wiIDogXCJwcml2YXRlXCI7XHJcblx0XHR0aGlzLnNlcnZpY2UudXBkYXRlX2l0ZW1fYWNjZXNzKGl0ZW0pLnN1YnNjcmliZShpdGVtID0+IHtcclxuXHRcdFx0ZGVidWdnZXI7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0YWRkSXRlbShlKSB7XHJcblx0XHRkZWJ1Z2dlcjtcclxuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHR0aGlzLmdyaWQuaXRlbXMucHVzaCh7fSBhcyBJR3JpZEl0ZW1Nb2RlbDxhbnk+KTtcclxuXHR9XHJcblx0ZW1wdHlDZWxsQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQsIGl0ZW06IEdyaWRzdGVySXRlbSkge1xyXG5cdFx0Y29uc29sZS5sb2coXCJlbXB0eSBjZWxsIGNsaWNrXCIsIGV2ZW50LCBpdGVtKTtcclxuXHRcdHRoaXMuZ3JpZC5pdGVtcy5wdXNoKGl0ZW0gYXMgYW55KTtcclxuXHR9XHJcblx0b3BlbkNvbmZpZyhlKSB7XHJcblx0XHRkZWJ1Z2dlcjtcclxuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHR0aGlzLmJvdHRvbVNoZWV0Lm9wZW4oR3JpZENvbmZpZ0NvbXBvbmVudCwge1xyXG5cdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0Z3JpZDogdGhpcy5ncmlkXHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHRzYXZlQ29uZmlnKGUpIHtcclxuXHRcdGRlYnVnZ2VyO1xyXG5cdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRcdGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBUT0RPOlxyXG5cdFx0ICog2KfYrdiy2KfYsSDZh9mI24zYqiDYr9ixINiz2YXYqiDZhtmI2K8g2KfYqtit2KfZhSDYtNmI2K9cclxuXHRcdCog2qnYp9mG2YHbjNqvINio2LHYp9uMINqv2LHZgdiq2YYg2LTZhtin2LPZhyDaqdin2LHYqNixXHJcblx0XHQgKi9cclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVwc2VydEdyaWRTdGFydEFjdGlvbih0aGlzLmdyaWQpKTtcclxuXHR9XHJcblx0Z3JpZEl0ZW1UeXBlQ2hhbmdlZChpdGVtOiBJR3JpZEl0ZW1Nb2RlbDxhbnk+KSB7XHJcblx0XHRjb25zdCBicyA9IHRoaXMuYm90dG9tU2hlZXQub3BlbihEeW5hbWljR3JpZEl0ZW1Db25maWdDb21wb25lbnQsIHtcclxuXHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdHR5cGU6IGl0ZW0udHlwZVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdGJzLmFmdGVyRGlzbWlzc2VkKCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cdFx0XHRpdGVtLmNvbmZpZyA9IGJzLmluc3RhbmNlLmNvbmZpZztcclxuXHRcdFx0aXRlbS52YWxpZCA9IGJzLmluc3RhbmNlLnZhbGlkO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdHNob3dDb25maWcoaXRlbTogSUdyaWRJdGVtTW9kZWw8YW55Pikge1xyXG5cdFx0Y29uc3QgYnMgPSB0aGlzLmJvdHRvbVNoZWV0Lm9wZW4oRHluYW1pY0dyaWRJdGVtQ29uZmlnQ29tcG9uZW50LCB7XHJcblx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHR0eXBlOiBpdGVtLnR5cGVcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRicy5hZnRlckRpc21pc3NlZCgpLnN1YnNjcmliZShkYXRhID0+IHtcclxuXHRcdFx0aXRlbS5jb25maWcgPSBicy5pbnN0YW5jZS5jb25maWc7XHJcblx0XHRcdGl0ZW0udmFsaWQgPSBicy5pbnN0YW5jZS52YWxpZDtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHQvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWVtYmVyLW9yZGVyaW5nXHJcblx0Ly8gQFZpZXdDaGlsZChcIkRpYWdyYW1WaWV3Q29tcG9uZW50XCIpIF9uZ3NEeW5hbWljR3JpZEl0ZW1WaWV3OiBEaWFncmFtVmlld0NvbXBvbmVudDtcclxuXHRnb1RvRWRpdCgpIHtcclxuXHRcdGRlYnVnZ2VyO1xyXG5cdFx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXVudXNlZC1leHByZXNzaW9uXHJcblx0XHQvLyB0aGlzLl9uZ3NEeW5hbWljR3JpZEl0ZW1WaWV3O1xyXG5cdH1cclxuXHQvKipcclxuXHQgKiBwcml2YXRlIG1ldGhvZHNcclxuXHQgKi9cclxuXHRfZ2V0X2dyaWRfYnlfb2lkX2FuZF91cGRhdGVfY29tcG9uZW50KCkge1xyXG5cdFx0dGhpcy5zZXJ2aWNlLnNlbGVjdEJ5SWQodGhpcy5vaWQpLnBpcGUoZmlsdGVyKGRhdGEgPT4gZGF0YSAhPSB1bmRlZmluZWQpKS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblx0XHRcdHRoaXMuZ3JpZCA9IGRhdGE7XHJcblx0XHRcdGRlYnVnZ2VyO1xyXG5cdFx0XHRkYXRhLmNvbmZpZy5vdXRlck1hcmdpbkJvdHRvbSA9ICtkYXRhLmNvbmZpZy5vdXRlck1hcmdpbkJvdHRvbTtcclxuXHRcdFx0ZGF0YS5jb25maWcub3V0ZXJNYXJnaW5SaWdodCA9ICtkYXRhLmNvbmZpZy5vdXRlck1hcmdpblJpZ2h0O1xyXG5cdFx0XHR0aGlzLm9wdGlvbnMgPSB7IC4uLnRoaXMub3B0aW9ucywgLi4uZGF0YS5jb25maWcgfTtcclxuXHRcdFx0Ly8gdGhpcy5vcHRpb25zLmRyYWdnYWJsZSA9IHtcclxuXHRcdFx0Ly8gXHRlbmFibGVkOiB0cnVlXHJcblx0XHRcdC8vIH07XHJcblx0XHRcdC8vIHRoaXMub3B0aW9ucy5lbXB0eUNlbGxDb250ZXh0TWVudUNhbGxiYWNrID0gdGhpcy5lbXB0eUNlbGxDbGljay5iaW5kKHRoaXMpO1xyXG5cdFx0XHQvLyB0aGlzLm9wdGlvbnMuZW1wdHlDZWxsRHJvcENhbGxiYWNrID0gdGhpcy5lbXB0eUNlbGxDbGljay5iaW5kKHRoaXMpO1xyXG5cdFx0XHRpZiAodGhpcy5vcHRpb25zLmVuYWJsZUVtcHR5Q2VsbERyYWcpIHRoaXMub3B0aW9ucy5lbXB0eUNlbGxEcmFnQ2FsbGJhY2sgPSB0aGlzLmVtcHR5Q2VsbENsaWNrLmJpbmQodGhpcyk7XHJcblx0XHRcdC8vIGlmICh0aGlzLm9wdGlvbnMuZW5hYmxlRW1wdHlDZWxsQ2xpY2spIHRoaXMub3B0aW9ucy5lbXB0eUNlbGxDbGlja0NhbGxiYWNrID0gdGhpcy5lbXB0eUNlbGxDbGljay5iaW5kKHRoaXMpO1xyXG5cdFx0XHR0aGlzLnJlYWR5ID0gdHJ1ZTtcclxuXHRcdFx0Ly8gdGhpcy5vcHRpb25zLmFwaS5vcHRpb25zQ2hhbmdlZCgpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcbiJdfQ==