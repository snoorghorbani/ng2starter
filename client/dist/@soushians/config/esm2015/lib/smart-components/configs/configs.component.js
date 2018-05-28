/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { getConfigs } from "../../reducers";
export class ConfigsComponent {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
        this.configs = this.store.select(getConfigs);
    }
}
ConfigsComponent.decorators = [
    { type: Component, args: [{
                selector: "configs",
                template: `<div fxFlexLayout="row" fxLayoutWrap fxLayoutAlign="center center">
  <mat-card class="config-box" *ngFor="let config of (configs | async)" [fxFlex]="50">
      <h3>
        <a [routerLink]="['edit' ,  config.Name]">
          <mat-icon aria-label="edit config">edit</mat-icon>
        </a>
        {{config.Name}}
      </h3>
  </mat-card>
</div>`,
                styles: [`:host{width:100%}.config-box{margin:15px}`]
            },] },
];
/** @nocollapse */
ConfigsComponent.ctorParameters = () => [
    { type: Store }
];
function ConfigsComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    ConfigsComponent.prototype.configs;
    /** @type {?} */
    ConfigsComponent.prototype.store;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlncy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2NvbmZpZy8iLCJzb3VyY2VzIjpbImxpYi9zbWFydC1jb21wb25lbnRzL2NvbmZpZ3MvY29uZmlncy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFbEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUdwQyxPQUFPLEVBQUUsVUFBVSxFQUFnQixNQUFNLGdCQUFnQixDQUFDO0FBZ0IxRCxNQUFNOzs7O0lBRUwsWUFBb0IsS0FBMEI7UUFBMUIsVUFBSyxHQUFMLEtBQUssQ0FBcUI7UUFDN0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztLQUM3Qzs7O1lBbEJELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsU0FBUztnQkFDbkIsUUFBUSxFQUFFOzs7Ozs7Ozs7T0FTSjtnQkFDTixNQUFNLEVBQUUsQ0FBQywyQ0FBMkMsQ0FBQzthQUNyRDs7OztZQWxCUSxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgQ29uZmlnTW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IGdldENvbmZpZ3MsIEZlYXR1cmVTdGF0ZSB9IGZyb20gXCIuLi8uLi9yZWR1Y2Vyc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiY29uZmlnc1wiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiBmeEZsZXhMYXlvdXQ9XCJyb3dcIiBmeExheW91dFdyYXAgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIj5cclxuICA8bWF0LWNhcmQgY2xhc3M9XCJjb25maWctYm94XCIgKm5nRm9yPVwibGV0IGNvbmZpZyBvZiAoY29uZmlncyB8IGFzeW5jKVwiIFtmeEZsZXhdPVwiNTBcIj5cclxuICAgICAgPGgzPlxyXG4gICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnZWRpdCcgLCAgY29uZmlnLk5hbWVdXCI+XHJcbiAgICAgICAgICA8bWF0LWljb24gYXJpYS1sYWJlbD1cImVkaXQgY29uZmlnXCI+ZWRpdDwvbWF0LWljb24+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICAgIHt7Y29uZmlnLk5hbWV9fVxyXG4gICAgICA8L2gzPlxyXG4gIDwvbWF0LWNhcmQ+XHJcbjwvZGl2PmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e3dpZHRoOjEwMCV9LmNvbmZpZy1ib3h7bWFyZ2luOjE1cHh9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENvbmZpZ3NDb21wb25lbnQge1xyXG5cdGNvbmZpZ3M6IE9ic2VydmFibGU8Q29uZmlnTW9kZWw8YW55PltdPjtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlU3RhdGU+KSB7XHJcblx0XHR0aGlzLmNvbmZpZ3MgPSB0aGlzLnN0b3JlLnNlbGVjdChnZXRDb25maWdzKTtcclxuXHR9XHJcbn1cclxuIl19