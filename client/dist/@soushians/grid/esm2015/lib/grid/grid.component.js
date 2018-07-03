/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Store } from "@ngrx/store";
import { filter } from "rxjs/operators";
import { MatBottomSheet } from "@angular/material";
import { GridModel } from "../models";
import { GridService } from "../services/grid.service";
import { GridConfigurationService } from "../services/grid-configuration.service";
import { DynamicGridItemConfigComponent } from "../grid-item/dynamic-grid-item-config.directive";
import { GridConfigComponent } from "../grid-config/grid-config.component";
export class GridComponent {
    /**
     * @param {?} store
     * @param {?} service
     * @param {?} configurationService
     * @param {?} bottomSheet
     */
    constructor(store, service, configurationService, bottomSheet) {
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
     * @return {?}
     */
    addItem() {
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
     * @return {?}
     */
    openConfig() {
        this.bottomSheet.open(GridConfigComponent, {
            data: {
                grid: this.grid
            }
        });
    }
    /**
     * @param {?} item
     * @return {?}
     */
    gridItemTypeChanged(item) {
        const /** @type {?} */ bs = this.bottomSheet.open(DynamicGridItemConfigComponent, {
            data: {
                type: item.type
            }
        });
        bs.afterDismissed().subscribe((data) => {
            item.config = bs.instance.config;
            item["valid"] = bs.instance.valid;
        });
    }
    /**
     * @param {?} item
     * @return {?}
     */
    showConfig(item) {
        const /** @type {?} */ bs = this.bottomSheet.open(DynamicGridItemConfigComponent, {
            data: {
                type: item.type
            }
        });
        bs.afterDismissed().subscribe((data) => {
            item.config = bs.instance.config;
            item["valid"] = bs.instance.valid;
        });
    }
    /**
     * @return {?}
     */
    _get_grid_by_oid_and_update_component() {
        this.service.selectById(this.oid).pipe(filter((data) => data != undefined)).subscribe((data) => {
            this.grid = data;
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
                template: `<button mat-raised-button (click)="addItem()">add</button>
<button mat-raised-button (click)="openConfig()">openConfig</button>

<gridster [options]="options">
    <gridster-item [item]="item" *ngFor="let item of grid.items">
        <div class="initializer" fxLayout="row" fxLayoutAlign="space-between center">
            <div fxFlex="nogrow">
                <button mat-icon-button (click)="removeItem(item)">
                    <mat-icon>delete</mat-icon>
                </button>
                <button mat-icon-button (click)="showConfig(item)">
                    <mat-icon>settings</mat-icon>
                </button>
            </div>
        </div>
        <mat-form-field *ngIf="!item.valid"  fxFlex="100">
            <mat-select placeholder="Grid Item Type" [(ngModel)]="item.type" (selectionChange)="gridItemTypeChanged(item)">
                <mat-option *ngFor="let item of gridItemTypes" [value]="item">
                    {{item}}
                </mat-option>
            </mat-select>
        </mat-form-field>
        <div *ngIf="item.valid" [ngsDynamicGridItemView]="item"></div>
    </gridster-item>
</gridster>`,
                styles: [`:host{width:95vw;height:100vh;display:block;direction:ltr}.initializer{padding:25px}`]
            },] },
];
/** @nocollapse */
GridComponent.ctorParameters = () => [
    { type: Store },
    { type: GridService },
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2dyaWQvIiwic291cmNlcyI6WyJsaWIvZ3JpZC9ncmlkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFHbkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUN0QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDbEYsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDakcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFnQzNFLE1BQU07Ozs7Ozs7SUFlTCxZQUNTLE9BQ0EsU0FDQSxzQkFDQTtRQUhBLFVBQUssR0FBTCxLQUFLO1FBQ0wsWUFBTyxHQUFQLE9BQU87UUFDUCx5QkFBb0IsR0FBcEIsb0JBQW9CO1FBQ3BCLGdCQUFXLEdBQVgsV0FBVztvQ0FsQmEsSUFBSSxZQUFZLEVBQUU7bUNBQ25CLElBQUksWUFBWSxFQUFFO2dDQUNyQixJQUFJLFlBQVksRUFBRTtrQ0FDaEIsSUFBSSxZQUFZLEVBQUU7a0NBQ2xCLElBQUksWUFBWSxFQUFFO3VDQUNiLElBQUksWUFBWSxFQUFFOytCQUMxQixJQUFJLFlBQVksRUFBRTs0QkFDckIsSUFBSSxZQUFZLEVBQUU7cUJBS25DLEtBQUs7UUFRWixJQUFJLENBQUMsT0FBTyxH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SUFDRCxxQ0FBcUM7UUFDcEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQzlGLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLHFCQUFRLElBQUksQ0FBQyxPQUFPLEVBQUssSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDOzs7Ozs7WUFNbkQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQztnQkFBQyxJQUFJLENBQUMsT0FBTyxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOztZQUUxRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQzs7U0FFbEIsQ0FBQyxDQUFDO0tBQ0g7OztZQWxJRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBd0JDO2dCQUNYLE1BQU0sRUFBRSxDQUFDLHNGQUFzRixDQUFDO2FBQ2hHOzs7O1lBeENRLEtBQUs7WUFNTCxXQUFXO1lBQ1gsd0JBQXdCO1lBTHhCLGNBQWM7OzttQ0F3Q3JCLE1BQU07a0NBQ04sTUFBTTsrQkFDTixNQUFNO2lDQUNOLE1BQU07aUNBQ04sTUFBTTtzQ0FDTixNQUFNOzhCQUNOLE1BQU07MkJBQ04sTUFBTTtrQkFFTixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEdyaWRzdGVyQ29uZmlnLCBHcmlkc3Rlckl0ZW0gfSBmcm9tIFwiYW5ndWxhci1ncmlkc3RlcjJcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IE1hdEJvdHRvbVNoZWV0IH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcblxyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi9ncmlkLnJlZHVjZXJcIjtcclxuaW1wb3J0IHsgR3JpZE1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBHcmlkU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9ncmlkLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgR3JpZENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2dyaWQtY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IER5bmFtaWNHcmlkSXRlbUNvbmZpZ0NvbXBvbmVudCB9IGZyb20gXCIuLi9ncmlkLWl0ZW0vZHluYW1pYy1ncmlkLWl0ZW0tY29uZmlnLmRpcmVjdGl2ZVwiO1xyXG5pbXBvcnQgeyBHcmlkQ29uZmlnQ29tcG9uZW50IH0gZnJvbSBcIi4uL2dyaWQtY29uZmlnL2dyaWQtY29uZmlnLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBJR3JpZEl0ZW1Nb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvZ2lyZC1pdGVtLm1vZGVsXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJuZ3MtZ3JpZFwiLFxyXG5cdHRlbXBsYXRlOiBgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiAoY2xpY2spPVwiYWRkSXRlbSgpXCI+YWRkPC9idXR0b24+XHJcbjxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gKGNsaWNrKT1cIm9wZW5Db25maWcoKVwiPm9wZW5Db25maWc8L2J1dHRvbj5cclxuXHJcbjxncmlkc3RlciBbb3B0aW9uc109XCJvcHRpb25zXCI+XHJcbiAgICA8Z3JpZHN0ZXItaXRlbSBbaXRlbV09XCJpdGVtXCIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZ3JpZC5pdGVtc1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbml0aWFsaXplclwiIGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRBbGlnbj1cInNwYWNlLWJldHdlZW4gY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgZnhGbGV4PVwibm9ncm93XCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPVwicmVtb3ZlSXRlbShpdGVtKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbj5kZWxldGU8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPVwic2hvd0NvbmZpZyhpdGVtKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbj5zZXR0aW5nczwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkICpuZ0lmPVwiIWl0ZW0udmFsaWRcIiAgZnhGbGV4PVwiMTAwXCI+XHJcbiAgICAgICAgICAgIDxtYXQtc2VsZWN0IHBsYWNlaG9sZGVyPVwiR3JpZCBJdGVtIFR5cGVcIiBbKG5nTW9kZWwpXT1cIml0ZW0udHlwZVwiIChzZWxlY3Rpb25DaGFuZ2UpPVwiZ3JpZEl0ZW1UeXBlQ2hhbmdlZChpdGVtKVwiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGl0ZW0gb2YgZ3JpZEl0ZW1UeXBlc1wiIFt2YWx1ZV09XCJpdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3tpdGVtfX1cclxuICAgICAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPGRpdiAqbmdJZj1cIml0ZW0udmFsaWRcIiBbbmdzRHluYW1pY0dyaWRJdGVtVmlld109XCJpdGVtXCI+PC9kaXY+XHJcbiAgICA8L2dyaWRzdGVyLWl0ZW0+XHJcbjwvZ3JpZHN0ZXI+YCxcclxuXHRzdHlsZXM6IFtgOmhvc3R7d2lkdGg6OTV2dztoZWlnaHQ6MTAwdmg7ZGlzcGxheTpibG9jaztkaXJlY3Rpb246bHRyfS5pbml0aWFsaXplcntwYWRkaW5nOjI1cHh9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEdyaWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdEBPdXRwdXQoKSBpdGVtVmFsaWRhdGVDYWxsYmFjayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRAT3V0cHV0KCkgaXRlbVJlbW92ZWRDYWxsYmFjayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRAT3V0cHV0KCkgaXRlbUluaXRDYWxsYmFjayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRAT3V0cHV0KCkgaXRlbVJlc2l6ZUNhbGxiYWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBPdXRwdXQoKSBpdGVtQ2hhbmdlQ2FsbGJhY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0QE91dHB1dCgpIGdyaWRTaXplQ2hhbmdlZENhbGxiYWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBPdXRwdXQoKSBkZXN0cm95Q2FsbGJhY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0QE91dHB1dCgpIGluaXRDYWxsYmFjayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcblx0QElucHV0KCkgb2lkOiBzdHJpbmc7XHJcblx0b3B0aW9uczogR3JpZHN0ZXJDb25maWc7XHJcblx0Z3JpZDogR3JpZE1vZGVsO1xyXG5cdHJlYWR5ID0gZmFsc2U7XHJcblx0Z3JpZEl0ZW1UeXBlczogYW55W3N0cmluZ107XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4sXHJcblx0XHRwcml2YXRlIHNlcnZpY2U6IEdyaWRTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBjb25maWd1cmF0aW9uU2VydmljZTogR3JpZENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBib3R0b21TaGVldDogTWF0Qm90dG9tU2hlZXRcclxuXHQpIHtcclxuXHRcdHRoaXMub3B0aW9ucyA9IHt9O1xyXG5cdFx0dGhpcy5ncmlkSXRlbVR5cGVzID0gT2JqZWN0LmtleXModGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLmdldFZhbHVlKCkudHlwZXMpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGl0ZW1DaGFuZ2UoaXRlbSwgaXRlbUNvbXBvbmVudCkge1xyXG5cdFx0Y29uc29sZS5sb2coXCJpdGVtQ2hhbmdlZFwiLCBpdGVtLCBpdGVtQ29tcG9uZW50KTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBpdGVtUmVzaXplKGl0ZW0sIGl0ZW1Db21wb25lbnQpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiaXRlbVJlc2l6ZWRcIiwgaXRlbSwgaXRlbUNvbXBvbmVudCk7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdC8vIHRoaXMuaXRlbXMgPSBbIHsgY29sczogMiwgcm93czogMSwgeTogMCwgeDogMCB9LCB7IGNvbHM6IDIsIHJvd3M6IDIsIHk6IDAsIHg6IDIgfSBdO1xyXG5cclxuXHRcdHRoaXMuZ3JpZCA9IG5ldyBHcmlkTW9kZWwoe1xyXG5cdFx0XHRvaWQ6IHRoaXMub2lkLFxyXG5cdFx0XHRjb25maWc6IHt9XHJcblx0XHR9KTtcclxuXHRcdHRoaXMuX2dldF9ncmlkX2J5X29pZF9hbmRfdXBkYXRlX2NvbXBvbmVudCgpO1xyXG5cdH1cclxuXHJcblx0X2luaXRDYWxsYmFjayhpdGVtKSB7XHJcblx0XHR0aGlzLmluaXRDYWxsYmFjay5lbWl0KGl0ZW0pO1xyXG5cdH1cclxuXHJcblx0cmVtb3ZlSXRlbShpdGVtKSB7XHJcblx0XHR0aGlzLmdyaWQuaXRlbXMuc3BsaWNlKHRoaXMuZ3JpZC5pdGVtcy5pbmRleE9mKGl0ZW0pLCAxKTtcclxuXHR9XHJcblxyXG5cdGFkZEl0ZW0oKSB7XHJcblx0XHR0aGlzLmdyaWQuaXRlbXMucHVzaCh7fSBhcyBJR3JpZEl0ZW1Nb2RlbDxhbnk+KTtcclxuXHR9XHJcblx0ZW1wdHlDZWxsQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQsIGl0ZW06IEdyaWRzdGVySXRlbSkge1xyXG5cdFx0Y29uc29sZS5sb2coXCJlbXB0eSBjZWxsIGNsaWNrXCIsIGV2ZW50LCBpdGVtKTtcclxuXHRcdHRoaXMuZ3JpZC5pdGVtcy5wdXNoKGl0ZW0gYXMgYW55KTtcclxuXHR9XHJcblx0b3BlbkNvbmZpZygpIHtcclxuXHRcdHRoaXMuYm90dG9tU2hlZXQub3BlbihHcmlkQ29uZmlnQ29tcG9uZW50LCB7XHJcblx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRncmlkOiB0aGlzLmdyaWRcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cdGdyaWRJdGVtVHlwZUNoYW5nZWQoaXRlbTogSUdyaWRJdGVtTW9kZWw8YW55Pikge1xyXG5cdFx0Y29uc3QgYnMgPSB0aGlzLmJvdHRvbVNoZWV0Lm9wZW4oRHluYW1pY0dyaWRJdGVtQ29uZmlnQ29tcG9uZW50LCB7XHJcblx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHR0eXBlOiBpdGVtLnR5cGVcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRicy5hZnRlckRpc21pc3NlZCgpLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xyXG5cdFx0XHRpdGVtLmNvbmZpZyA9IGJzLmluc3RhbmNlLmNvbmZpZztcclxuXHRcdFx0aXRlbS52YWxpZCA9IGJzLmluc3RhbmNlLnZhbGlkO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdHNob3dDb25maWcoaXRlbTogSUdyaWRJdGVtTW9kZWw8YW55Pikge1xyXG5cdFx0Y29uc3QgYnMgPSB0aGlzLmJvdHRvbVNoZWV0Lm9wZW4oRHluYW1pY0dyaWRJdGVtQ29uZmlnQ29tcG9uZW50LCB7XHJcblx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHR0eXBlOiBpdGVtLnR5cGVcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRicy5hZnRlckRpc21pc3NlZCgpLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xyXG5cdFx0XHRpdGVtLmNvbmZpZyA9IGJzLmluc3RhbmNlLmNvbmZpZztcclxuXHRcdFx0aXRlbS52YWxpZCA9IGJzLmluc3RhbmNlLnZhbGlkO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdF9nZXRfZ3JpZF9ieV9vaWRfYW5kX3VwZGF0ZV9jb21wb25lbnQoKSB7XHJcblx0XHR0aGlzLnNlcnZpY2Uuc2VsZWN0QnlJZCh0aGlzLm9pZCkucGlwZShmaWx0ZXIoKGRhdGEpID0+IGRhdGEgIT0gdW5kZWZpbmVkKSkuc3Vic2NyaWJlKChkYXRhKSA9PiB7XHJcblx0XHRcdHRoaXMuZ3JpZCA9IGRhdGE7XHJcblx0XHRcdHRoaXMub3B0aW9ucyA9IHsgLi4udGhpcy5vcHRpb25zLCAuLi5kYXRhLmNvbmZpZyB9O1xyXG5cdFx0XHQvLyB0aGlzLm9wdGlvbnMuZHJhZ2dhYmxlID0ge1xyXG5cdFx0XHQvLyBcdGVuYWJsZWQ6IHRydWVcclxuXHRcdFx0Ly8gfTtcclxuXHRcdFx0Ly8gdGhpcy5vcHRpb25zLmVtcHR5Q2VsbENvbnRleHRNZW51Q2FsbGJhY2sgPSB0aGlzLmVtcHR5Q2VsbENsaWNrLmJpbmQodGhpcyk7XHJcblx0XHRcdC8vIHRoaXMub3B0aW9ucy5lbXB0eUNlbGxEcm9wQ2FsbGJhY2sgPSB0aGlzLmVtcHR5Q2VsbENsaWNrLmJpbmQodGhpcyk7XHJcblx0XHRcdGlmICh0aGlzLm9wdGlvbnMuZW5hYmxlRW1wdHlDZWxsRHJhZykgdGhpcy5vcHRpb25zLmVtcHR5Q2VsbERyYWdDYWxsYmFjayA9IHRoaXMuZW1wdHlDZWxsQ2xpY2suYmluZCh0aGlzKTtcclxuXHRcdFx0Ly8gaWYgKHRoaXMub3B0aW9ucy5lbmFibGVFbXB0eUNlbGxDbGljaykgdGhpcy5vcHRpb25zLmVtcHR5Q2VsbENsaWNrQ2FsbGJhY2sgPSB0aGlzLmVtcHR5Q2VsbENsaWNrLmJpbmQodGhpcyk7XHJcblx0XHRcdHRoaXMucmVhZHkgPSB0cnVlO1xyXG5cdFx0XHQvLyB0aGlzLm9wdGlvbnMuYXBpLm9wdGlvbnNDaGFuZ2VkKCk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuIl19