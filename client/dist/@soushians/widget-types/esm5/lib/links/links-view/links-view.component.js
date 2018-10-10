/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { getFrontendAuthenticationState } from "@soushians/frontend-authentication";
var LinksViewComponent = /** @class */ (function () {
    function LinksViewComponent(store) {
        this.store = store;
    }
    Object.defineProperty(LinksViewComponent.prototype, "widget", {
        get: /**
         * @return {?}
         */
        function () {
            return this._widget;
        },
        set: /**
         * @param {?} widget
         * @return {?}
         */
        function (widget) {
            debugger;
            widget.Config.links.forEach(function (item) { return item.url = item.url.startsWith("www.") ? item.url = "http://" + item.url : item.url; });
            widget.Config.links.forEach(function (item) { return item.isExternal = item.url.startsWith("http"); });
            this._widget = widget;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LinksViewComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.havePermission$ = this.store.select(getFrontendAuthenticationState);
    };
    LinksViewComponent.decorators = [
        { type: Component, args: [{
                    selector: "widget-links-view",
                    template: "<div fxLayout=\"column\">\n  <div class=\"actions\" fxLayout=\"row\" fxFlex fxLayoutAlign=\"end\">\n    <button fxFlex=\"nogrow\" mat-icon-button color=\"primary\" *ngIf=\"havePermission$ | async\" [routerLink]=\"['/widget/upsert/links', (widget)?._id]\">\n      <mat-icon>edit</mat-icon>\n    </button>\n  </div>\n  <div fxLayout=\"row\" fxFlex fxLayoutAlign=\"end\">\n    <h3>\n      {{widget.name}}\n    </h3>\n  </div>\n  <mat-list fxLayout=\"column\" fxFlex=\"100\">\n    <mat-list-item fxLayout=\"column\" *ngFor=\"let link of (widget)?.Config.links\" fxFlex=\"100\">\n      <mat-icon mat-list-icon>link</mat-icon>\n      <a fxLayout=\"row\" *ngIf=\"!link.isExternal\" fxFlex=\"grow\" [routerLink]=\"[link.url]\">\n        {{link.label}}\n      </a>\n      <a fxLayout=\"row\" *ngIf=\"link.isExternal\" target=\"_blank\" fxFlex=\"grow\" [href]=\"link.url\">\n        {{link.label}}\n      </a>\n    </mat-list-item>\n  </mat-list>\n</div>",
                    styles: [":host{position:relative;height:100%;display:block}:host:hover .actions{opacity:1;visibility:visible}mat-list a{text-decoration:none}.actions{transition:opacity .4s ease-in-out;opacity:0;visibility:hidden}.actions mat-icon{color:#121212}h3{padding-right:20px}"]
                },] },
    ];
    /** @nocollapse */
    LinksViewComponent.ctorParameters = function () { return [
        { type: Store }
    ]; };
    return LinksViewComponent;
}());
export { LinksViewComponent };
if (false) {
    /** @type {?} */
    LinksViewComponent.prototype._widget;
    /** @type {?} */
    LinksViewComponent.prototype.havePermission$;
    /** @type {?} */
    LinksViewComponent.prototype.store;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlua3Mtdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3dpZGdldC10eXBlcy8iLCJzb3VyY2VzIjpbImxpYi9saW5rcy9saW5rcy12aWV3L2xpbmtzLXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUV6RCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBR3BDLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDOztJQTRDbkYsNEJBQW9CLEtBQWlCO1FBQWpCLFVBQUssR0FBTCxLQUFLLENBQVk7S0FBSztJQVYxQyxzQkFBSSxzQ0FBTTs7OztRQU1WO1lBQ0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3BCOzs7OztRQVJELFVBQVcsTUFBMkM7WUFDckQsUUFBUSxDQUFDO1lBQ1QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBbkYsQ0FBbUYsQ0FBQyxDQUFDO1lBQ3pILE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQTdDLENBQTZDLENBQUMsQ0FBQztZQUNuRixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztTQUN0Qjs7O09BQUE7Ozs7SUFPRCxxQ0FBUTs7O0lBQVI7UUFDQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLDhCQUE4QixDQUFDLENBQUM7S0FDekU7O2dCQTVDRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsUUFBUSxFQUFFLGs3QkFzQko7b0JBQ04sTUFBTSxFQUFFLENBQUMsb1FBQW9RLENBQUM7aUJBQzlROzs7O2dCQWpDUSxLQUFLOzs2QkFGZDs7U0FvQ2Esa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBXaWRnZXRNb2RlbCwgSVdpZGdldFZpZXcgfSBmcm9tIFwiQHNvdXNoaWFucy93aWRnZXRcIjtcclxuaW1wb3J0IHsgZ2V0RnJvbnRlbmRBdXRoZW50aWNhdGlvblN0YXRlIH0gZnJvbSBcIkBzb3VzaGlhbnMvZnJvbnRlbmQtYXV0aGVudGljYXRpb25cIjtcclxuXHJcbmltcG9ydCB7IExpbmtzV2lkZ2V0Q29uZmlnTW9kZWwgfSBmcm9tIFwiLi4vbGlua3Mtd2lkZ2V0LWNvbmZpZy5tb2RlbFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwid2lkZ2V0LWxpbmtzLXZpZXdcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgZnhMYXlvdXQ9XCJjb2x1bW5cIj5cclxuICA8ZGl2IGNsYXNzPVwiYWN0aW9uc1wiIGZ4TGF5b3V0PVwicm93XCIgZnhGbGV4IGZ4TGF5b3V0QWxpZ249XCJlbmRcIj5cclxuICAgIDxidXR0b24gZnhGbGV4PVwibm9ncm93XCIgbWF0LWljb24tYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiICpuZ0lmPVwiaGF2ZVBlcm1pc3Npb24kIHwgYXN5bmNcIiBbcm91dGVyTGlua109XCJbJy93aWRnZXQvdXBzZXJ0L2xpbmtzJywgKHdpZGdldCk/Ll9pZF1cIj5cclxuICAgICAgPG1hdC1pY29uPmVkaXQ8L21hdC1pY29uPlxyXG4gICAgPC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBmeExheW91dD1cInJvd1wiIGZ4RmxleCBmeExheW91dEFsaWduPVwiZW5kXCI+XHJcbiAgICA8aDM+XHJcbiAgICAgIHt7d2lkZ2V0Lm5hbWV9fVxyXG4gICAgPC9oMz5cclxuICA8L2Rpdj5cclxuICA8bWF0LWxpc3QgZnhMYXlvdXQ9XCJjb2x1bW5cIiBmeEZsZXg9XCIxMDBcIj5cclxuICAgIDxtYXQtbGlzdC1pdGVtIGZ4TGF5b3V0PVwiY29sdW1uXCIgKm5nRm9yPVwibGV0IGxpbmsgb2YgKHdpZGdldCk/LkNvbmZpZy5saW5rc1wiIGZ4RmxleD1cIjEwMFwiPlxyXG4gICAgICA8bWF0LWljb24gbWF0LWxpc3QtaWNvbj5saW5rPC9tYXQtaWNvbj5cclxuICAgICAgPGEgZnhMYXlvdXQ9XCJyb3dcIiAqbmdJZj1cIiFsaW5rLmlzRXh0ZXJuYWxcIiBmeEZsZXg9XCJncm93XCIgW3JvdXRlckxpbmtdPVwiW2xpbmsudXJsXVwiPlxyXG4gICAgICAgIHt7bGluay5sYWJlbH19XHJcbiAgICAgIDwvYT5cclxuICAgICAgPGEgZnhMYXlvdXQ9XCJyb3dcIiAqbmdJZj1cImxpbmsuaXNFeHRlcm5hbFwiIHRhcmdldD1cIl9ibGFua1wiIGZ4RmxleD1cImdyb3dcIiBbaHJlZl09XCJsaW5rLnVybFwiPlxyXG4gICAgICAgIHt7bGluay5sYWJlbH19XHJcbiAgICAgIDwvYT5cclxuICAgIDwvbWF0LWxpc3QtaXRlbT5cclxuICA8L21hdC1saXN0PlxyXG48L2Rpdj5gLFxyXG5cdHN0eWxlczogW2A6aG9zdHtwb3NpdGlvbjpyZWxhdGl2ZTtoZWlnaHQ6MTAwJTtkaXNwbGF5OmJsb2NrfTpob3N0OmhvdmVyIC5hY3Rpb25ze29wYWNpdHk6MTt2aXNpYmlsaXR5OnZpc2libGV9bWF0LWxpc3QgYXt0ZXh0LWRlY29yYXRpb246bm9uZX0uYWN0aW9uc3t0cmFuc2l0aW9uOm9wYWNpdHkgLjRzIGVhc2UtaW4tb3V0O29wYWNpdHk6MDt2aXNpYmlsaXR5OmhpZGRlbn0uYWN0aW9ucyBtYXQtaWNvbntjb2xvcjojMTIxMjEyfWgze3BhZGRpbmctcmlnaHQ6MjBweH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGlua3NWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBJV2lkZ2V0VmlldzxMaW5rc1dpZGdldENvbmZpZ01vZGVsPiB7XHJcblx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWlucHV0LXJlbmFtZVxyXG5cdF93aWRnZXQ6IFdpZGdldE1vZGVsPExpbmtzV2lkZ2V0Q29uZmlnTW9kZWw+O1xyXG5cdHNldCB3aWRnZXQod2lkZ2V0OiBXaWRnZXRNb2RlbDxMaW5rc1dpZGdldENvbmZpZ01vZGVsPikge1xyXG5cdFx0ZGVidWdnZXI7XHJcblx0XHR3aWRnZXQuQ29uZmlnLmxpbmtzLmZvckVhY2goaXRlbSA9PiBpdGVtLnVybCA9IGl0ZW0udXJsLnN0YXJ0c1dpdGgoXCJ3d3cuXCIpID8gaXRlbS51cmwgPSBcImh0dHA6Ly9cIiArIGl0ZW0udXJsIDogaXRlbS51cmwpO1xyXG5cdFx0d2lkZ2V0LkNvbmZpZy5saW5rcy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5pc0V4dGVybmFsID0gaXRlbS51cmwuc3RhcnRzV2l0aChcImh0dHBcIikpO1xyXG5cdFx0dGhpcy5fd2lkZ2V0ID0gd2lkZ2V0O1xyXG5cdH1cclxuXHRnZXQgd2lkZ2V0KCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3dpZGdldDtcclxuXHR9XHJcblx0aGF2ZVBlcm1pc3Npb24kOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPGFueT4pIHsgfVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMuaGF2ZVBlcm1pc3Npb24kID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0RnJvbnRlbmRBdXRoZW50aWNhdGlvblN0YXRlKTtcclxuXHR9XHJcbn1cclxuIl19