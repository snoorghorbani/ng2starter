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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlua3Mtdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3dpZGdldC10eXBlcy8iLCJzb3VyY2VzIjpbImxpYi9saW5rcy9saW5rcy12aWV3L2xpbmtzLXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUV6RCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBR3BDLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBK0JwRixNQUFNLE9BQU8sa0JBQWtCOzs7O0lBYTlCLFlBQW9CLEtBQWlCO1FBQWpCLFVBQUssR0FBTCxLQUFLLENBQVk7S0FBSzs7Ozs7SUFWMUMsSUFBSSxNQUFNLENBQUMsTUFBMkM7UUFDckQsUUFBUSxDQUFDO1FBQ1QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pILE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNuRixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztLQUN0Qjs7OztJQUNELElBQUksTUFBTTtRQUNULE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztLQUNwQjs7OztJQUlELFFBQVE7UUFDUCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLDhCQUE4QixDQUFDLENBQUM7S0FDekU7OztZQTVDRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09Bc0JKO2dCQUNOLE1BQU0sRUFBRSxDQUFDLG9RQUFvUSxDQUFDO2FBQzlROzs7O1lBakNRLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IFdpZGdldE1vZGVsLCBJV2lkZ2V0VmlldyB9IGZyb20gXCJAc291c2hpYW5zL3dpZGdldFwiO1xyXG5pbXBvcnQgeyBnZXRGcm9udGVuZEF1dGhlbnRpY2F0aW9uU3RhdGUgfSBmcm9tIFwiQHNvdXNoaWFucy9mcm9udGVuZC1hdXRoZW50aWNhdGlvblwiO1xyXG5cclxuaW1wb3J0IHsgTGlua3NXaWRnZXRDb25maWdNb2RlbCB9IGZyb20gXCIuLi9saW5rcy13aWRnZXQtY29uZmlnLm1vZGVsXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJ3aWRnZXQtbGlua3Mtdmlld1wiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiBmeExheW91dD1cImNvbHVtblwiPlxyXG4gIDxkaXYgY2xhc3M9XCJhY3Rpb25zXCIgZnhMYXlvdXQ9XCJyb3dcIiBmeEZsZXggZnhMYXlvdXRBbGlnbj1cImVuZFwiPlxyXG4gICAgPGJ1dHRvbiBmeEZsZXg9XCJub2dyb3dcIiBtYXQtaWNvbi1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKm5nSWY9XCJoYXZlUGVybWlzc2lvbiQgfCBhc3luY1wiIFtyb3V0ZXJMaW5rXT1cIlsnL3dpZGdldC91cHNlcnQvbGlua3MnLCAod2lkZ2V0KT8uX2lkXVwiPlxyXG4gICAgICA8bWF0LWljb24+ZWRpdDwvbWF0LWljb24+XHJcbiAgICA8L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGZ4TGF5b3V0PVwicm93XCIgZnhGbGV4IGZ4TGF5b3V0QWxpZ249XCJlbmRcIj5cclxuICAgIDxoMz5cclxuICAgICAge3t3aWRnZXQubmFtZX19XHJcbiAgICA8L2gzPlxyXG4gIDwvZGl2PlxyXG4gIDxtYXQtbGlzdCBmeExheW91dD1cImNvbHVtblwiIGZ4RmxleD1cIjEwMFwiPlxyXG4gICAgPG1hdC1saXN0LWl0ZW0gZnhMYXlvdXQ9XCJjb2x1bW5cIiAqbmdGb3I9XCJsZXQgbGluayBvZiAod2lkZ2V0KT8uQ29uZmlnLmxpbmtzXCIgZnhGbGV4PVwiMTAwXCI+XHJcbiAgICAgIDxtYXQtaWNvbiBtYXQtbGlzdC1pY29uPmxpbms8L21hdC1pY29uPlxyXG4gICAgICA8YSBmeExheW91dD1cInJvd1wiICpuZ0lmPVwiIWxpbmsuaXNFeHRlcm5hbFwiIGZ4RmxleD1cImdyb3dcIiBbcm91dGVyTGlua109XCJbbGluay51cmxdXCI+XHJcbiAgICAgICAge3tsaW5rLmxhYmVsfX1cclxuICAgICAgPC9hPlxyXG4gICAgICA8YSBmeExheW91dD1cInJvd1wiICpuZ0lmPVwibGluay5pc0V4dGVybmFsXCIgdGFyZ2V0PVwiX2JsYW5rXCIgZnhGbGV4PVwiZ3Jvd1wiIFtocmVmXT1cImxpbmsudXJsXCI+XHJcbiAgICAgICAge3tsaW5rLmxhYmVsfX1cclxuICAgICAgPC9hPlxyXG4gICAgPC9tYXQtbGlzdC1pdGVtPlxyXG4gIDwvbWF0LWxpc3Q+XHJcbjwvZGl2PmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e3Bvc2l0aW9uOnJlbGF0aXZlO2hlaWdodDoxMDAlO2Rpc3BsYXk6YmxvY2t9Omhvc3Q6aG92ZXIgLmFjdGlvbnN7b3BhY2l0eToxO3Zpc2liaWxpdHk6dmlzaWJsZX1tYXQtbGlzdCBhe3RleHQtZGVjb3JhdGlvbjpub25lfS5hY3Rpb25ze3RyYW5zaXRpb246b3BhY2l0eSAuNHMgZWFzZS1pbi1vdXQ7b3BhY2l0eTowO3Zpc2liaWxpdHk6aGlkZGVufS5hY3Rpb25zIG1hdC1pY29ue2NvbG9yOiMxMjEyMTJ9aDN7cGFkZGluZy1yaWdodDoyMHB4fWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaW5rc1ZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIElXaWRnZXRWaWV3PExpbmtzV2lkZ2V0Q29uZmlnTW9kZWw+IHtcclxuXHQvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8taW5wdXQtcmVuYW1lXHJcblx0X3dpZGdldDogV2lkZ2V0TW9kZWw8TGlua3NXaWRnZXRDb25maWdNb2RlbD47XHJcblx0c2V0IHdpZGdldCh3aWRnZXQ6IFdpZGdldE1vZGVsPExpbmtzV2lkZ2V0Q29uZmlnTW9kZWw+KSB7XHJcblx0XHRkZWJ1Z2dlcjtcclxuXHRcdHdpZGdldC5Db25maWcubGlua3MuZm9yRWFjaChpdGVtID0+IGl0ZW0udXJsID0gaXRlbS51cmwuc3RhcnRzV2l0aChcInd3dy5cIikgPyBpdGVtLnVybCA9IFwiaHR0cDovL1wiICsgaXRlbS51cmwgOiBpdGVtLnVybCk7XHJcblx0XHR3aWRnZXQuQ29uZmlnLmxpbmtzLmZvckVhY2goaXRlbSA9PiBpdGVtLmlzRXh0ZXJuYWwgPSBpdGVtLnVybC5zdGFydHNXaXRoKFwiaHR0cFwiKSk7XHJcblx0XHR0aGlzLl93aWRnZXQgPSB3aWRnZXQ7XHJcblx0fVxyXG5cdGdldCB3aWRnZXQoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fd2lkZ2V0O1xyXG5cdH1cclxuXHRoYXZlUGVybWlzc2lvbiQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8YW55PikgeyB9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5oYXZlUGVybWlzc2lvbiQgPSB0aGlzLnN0b3JlLnNlbGVjdChnZXRGcm9udGVuZEF1dGhlbnRpY2F0aW9uU3RhdGUpO1xyXG5cdH1cclxufVxyXG4iXX0=