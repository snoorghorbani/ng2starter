/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { getFrontendAuthenticationState } from "@soushians/frontend-authentication";
export class LinksViewComponent {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
    }
    /**
     * @param {?} widget
     * @return {?}
     */
    set widget(widget) {
        debugger;
        widget.Config.links.forEach(item => item.url = item.url.startsWith("www.") ? item.url = "http://" + item.url : item.url);
        widget.Config.links.forEach(item => item.isExternal = item.url.startsWith("http"));
        this._widget = widget;
    }
    /**
     * @return {?}
     */
    get widget() {
        return this._widget;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.havePermission$ = this.store.select(getFrontendAuthenticationState);
    }
}
LinksViewComponent.decorators = [
    { type: Component, args: [{
                selector: "widget-links-view",
                template: `<div fxLayout="column">
  <div class="actions" fxLayout="row" fxFlex fxLayoutAlign="end">
    <button fxFlex="nogrow" mat-icon-button color="primary" *ngIf="havePermission$ | async" [routerLink]="['/widget/upsert/links', (widget)?._id]">
      <mat-icon>edit</mat-icon>
    </button>
  </div>
  <div fxLayout="row" fxFlex fxLayoutAlign="end">
    <h3>
      {{widget.name}}
    </h3>
  </div>
  <mat-list fxLayout="column" fxFlex="100">
    <mat-list-item fxLayout="column" *ngFor="let link of (widget)?.Config.links" fxFlex="100">
      <mat-icon mat-list-icon>link</mat-icon>
      <a fxLayout="row" *ngIf="!link.isExternal" fxFlex="grow" [routerLink]="[link.url]">
        {{link.label}}
      </a>
      <a fxLayout="row" *ngIf="link.isExternal" target="_blank" fxFlex="grow" [href]="link.url">
        {{link.label}}
      </a>
    </mat-list-item>
  </mat-list>
</div>`,
                styles: [`:host{position:relative;height:100%;display:block}:host:hover .actions{opacity:1;visibility:visible}mat-list a{text-decoration:none}.actions{transition:opacity .4s ease-in-out;opacity:0;visibility:hidden}.actions mat-icon{color:#121212}h3{padding-right:20px}`]
            },] },
];
/** @nocollapse */
LinksViewComponent.ctorParameters = () => [
    { type: Store }
];
if (false) {
    /** @type {?} */
    LinksViewComponent.prototype._widget;
    /** @type {?} */
    LinksViewComponent.prototype.havePermission$;
    /** @type {?} */
    LinksViewComponent.prototype.store;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlua3Mtdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3dpZGdldC10eXBlcy8iLCJzb3VyY2VzIjpbImxpYi9saW5rcy9saW5rcy12aWV3L2xpbmtzLXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUV6RCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBR3BDLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBK0JwRixNQUFNOzs7O0lBYUwsWUFBb0IsS0FBaUI7UUFBakIsVUFBSyxHQUFMLEtBQUssQ0FBWTtLQUFLOzs7OztJQVYxQyxJQUFJLE1BQU0sQ0FBQyxNQUEyQztRQUNyRCxRQUFRLENBQUM7UUFDVCxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDekgsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ25GLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0tBQ3RCOzs7O0lBQ0QsSUFBSSxNQUFNO1FBQ1QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0tBQ3BCOzs7O0lBSUQsUUFBUTtRQUNQLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsOEJBQThCLENBQUMsQ0FBQztLQUN6RTs7O1lBNUNELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FzQko7Z0JBQ04sTUFBTSxFQUFFLENBQUMsb1FBQW9RLENBQUM7YUFDOVE7Ozs7WUFqQ1EsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgV2lkZ2V0TW9kZWwsIElXaWRnZXRWaWV3IH0gZnJvbSBcIkBzb3VzaGlhbnMvd2lkZ2V0XCI7XHJcbmltcG9ydCB7IGdldEZyb250ZW5kQXV0aGVudGljYXRpb25TdGF0ZSB9IGZyb20gXCJAc291c2hpYW5zL2Zyb250ZW5kLWF1dGhlbnRpY2F0aW9uXCI7XHJcblxyXG5pbXBvcnQgeyBMaW5rc1dpZGdldENvbmZpZ01vZGVsIH0gZnJvbSBcIi4uL2xpbmtzLXdpZGdldC1jb25maWcubW9kZWxcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcIndpZGdldC1saW5rcy12aWV3XCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4TGF5b3V0PVwiY29sdW1uXCI+XHJcbiAgPGRpdiBjbGFzcz1cImFjdGlvbnNcIiBmeExheW91dD1cInJvd1wiIGZ4RmxleCBmeExheW91dEFsaWduPVwiZW5kXCI+XHJcbiAgICA8YnV0dG9uIGZ4RmxleD1cIm5vZ3Jvd1wiIG1hdC1pY29uLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAqbmdJZj1cImhhdmVQZXJtaXNzaW9uJCB8IGFzeW5jXCIgW3JvdXRlckxpbmtdPVwiWycvd2lkZ2V0L3Vwc2VydC9saW5rcycsICh3aWRnZXQpPy5faWRdXCI+XHJcbiAgICAgIDxtYXQtaWNvbj5lZGl0PC9tYXQtaWNvbj5cclxuICAgIDwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgZnhMYXlvdXQ9XCJyb3dcIiBmeEZsZXggZnhMYXlvdXRBbGlnbj1cImVuZFwiPlxyXG4gICAgPGgzPlxyXG4gICAgICB7e3dpZGdldC5uYW1lfX1cclxuICAgIDwvaDM+XHJcbiAgPC9kaXY+XHJcbiAgPG1hdC1saXN0IGZ4TGF5b3V0PVwiY29sdW1uXCIgZnhGbGV4PVwiMTAwXCI+XHJcbiAgICA8bWF0LWxpc3QtaXRlbSBmeExheW91dD1cImNvbHVtblwiICpuZ0Zvcj1cImxldCBsaW5rIG9mICh3aWRnZXQpPy5Db25maWcubGlua3NcIiBmeEZsZXg9XCIxMDBcIj5cclxuICAgICAgPG1hdC1pY29uIG1hdC1saXN0LWljb24+bGluazwvbWF0LWljb24+XHJcbiAgICAgIDxhIGZ4TGF5b3V0PVwicm93XCIgKm5nSWY9XCIhbGluay5pc0V4dGVybmFsXCIgZnhGbGV4PVwiZ3Jvd1wiIFtyb3V0ZXJMaW5rXT1cIltsaW5rLnVybF1cIj5cclxuICAgICAgICB7e2xpbmsubGFiZWx9fVxyXG4gICAgICA8L2E+XHJcbiAgICAgIDxhIGZ4TGF5b3V0PVwicm93XCIgKm5nSWY9XCJsaW5rLmlzRXh0ZXJuYWxcIiB0YXJnZXQ9XCJfYmxhbmtcIiBmeEZsZXg9XCJncm93XCIgW2hyZWZdPVwibGluay51cmxcIj5cclxuICAgICAgICB7e2xpbmsubGFiZWx9fVxyXG4gICAgICA8L2E+XHJcbiAgICA8L21hdC1saXN0LWl0ZW0+XHJcbiAgPC9tYXQtbGlzdD5cclxuPC9kaXY+YCxcclxuXHRzdHlsZXM6IFtgOmhvc3R7cG9zaXRpb246cmVsYXRpdmU7aGVpZ2h0OjEwMCU7ZGlzcGxheTpibG9ja306aG9zdDpob3ZlciAuYWN0aW9uc3tvcGFjaXR5OjE7dmlzaWJpbGl0eTp2aXNpYmxlfW1hdC1saXN0IGF7dGV4dC1kZWNvcmF0aW9uOm5vbmV9LmFjdGlvbnN7dHJhbnNpdGlvbjpvcGFjaXR5IC40cyBlYXNlLWluLW91dDtvcGFjaXR5OjA7dmlzaWJpbGl0eTpoaWRkZW59LmFjdGlvbnMgbWF0LWljb257Y29sb3I6IzEyMTIxMn1oM3twYWRkaW5nLXJpZ2h0OjIwcHh9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIExpbmtzVmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgSVdpZGdldFZpZXc8TGlua3NXaWRnZXRDb25maWdNb2RlbD4ge1xyXG5cdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1pbnB1dC1yZW5hbWVcclxuXHRfd2lkZ2V0OiBXaWRnZXRNb2RlbDxMaW5rc1dpZGdldENvbmZpZ01vZGVsPjtcclxuXHRzZXQgd2lkZ2V0KHdpZGdldDogV2lkZ2V0TW9kZWw8TGlua3NXaWRnZXRDb25maWdNb2RlbD4pIHtcclxuXHRcdGRlYnVnZ2VyO1xyXG5cdFx0d2lkZ2V0LkNvbmZpZy5saW5rcy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS51cmwgPSBpdGVtLnVybC5zdGFydHNXaXRoKFwid3d3LlwiKSA/IGl0ZW0udXJsID0gXCJodHRwOi8vXCIgKyBpdGVtLnVybCA6IGl0ZW0udXJsKTtcclxuXHRcdHdpZGdldC5Db25maWcubGlua3MuZm9yRWFjaChpdGVtID0+IGl0ZW0uaXNFeHRlcm5hbCA9IGl0ZW0udXJsLnN0YXJ0c1dpdGgoXCJodHRwXCIpKTtcclxuXHRcdHRoaXMuX3dpZGdldCA9IHdpZGdldDtcclxuXHR9XHJcblx0Z2V0IHdpZGdldCgpIHtcclxuXHRcdHJldHVybiB0aGlzLl93aWRnZXQ7XHJcblx0fVxyXG5cdGhhdmVQZXJtaXNzaW9uJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxhbnk+KSB7IH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLmhhdmVQZXJtaXNzaW9uJCA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldEZyb250ZW5kQXV0aGVudGljYXRpb25TdGF0ZSk7XHJcblx0fVxyXG59XHJcbiJdfQ==