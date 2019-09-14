/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        widget.Config.links.forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => item.url = item.url.startsWith("www.") ? item.url = "http://" + item.url : item.url));
        widget.Config.links.forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => item.isExternal = item.url.startsWith("http")));
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
                template: "<div fxLayout=\"column\">\r\n  <div class=\"actions\" fxLayout=\"row\" fxFlex fxLayoutAlign=\"end\">\r\n    <button fxFlex=\"nogrow\" mat-icon-button color=\"primary\" *ngIf=\"havePermission$ | async\" [routerLink]=\"['/widget/upsert/links', (widget)?._id]\">\r\n      <mat-icon>edit</mat-icon>\r\n    </button>\r\n  </div>\r\n  <div fxLayout=\"row\" fxFlex fxLayoutAlign=\"end\">\r\n    <h3>\r\n      {{widget.name}}\r\n    </h3>\r\n  </div>\r\n  <mat-list fxLayout=\"column\" fxFlex=\"100\">\r\n    <mat-list-item fxLayout=\"column\" *ngFor=\"let link of (widget)?.Config.links\" fxFlex=\"100\">\r\n      <mat-icon mat-list-icon>link</mat-icon>\r\n      <a fxLayout=\"row\" *ngIf=\"!link.isExternal\" fxFlex=\"grow\" [routerLink]=\"[link.url]\">\r\n        {{link.label}}\r\n      </a>\r\n      <a fxLayout=\"row\" *ngIf=\"link.isExternal\" target=\"_blank\" fxFlex=\"grow\" [href]=\"link.url\">\r\n        {{link.label}}\r\n      </a>\r\n    </mat-list-item>\r\n  </mat-list>\r\n</div>",
                styles: [":host{position:relative;height:100%;display:block}:host:hover .actions{opacity:1;visibility:visible}mat-list a{text-decoration:none}.actions{transition:opacity .4s ease-in-out;opacity:0;visibility:hidden}.actions mat-icon{color:#121212}h3{padding-right:20px}"]
            }] }
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
    /**
     * @type {?}
     * @private
     */
    LinksViewComponent.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlua3Mtdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3dpZGdldC10eXBlcy8iLCJzb3VyY2VzIjpbImxpYi9saW5rcy9saW5rcy12aWV3L2xpbmtzLXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUV6RCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBR3BDLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBU3BGLE1BQU0sT0FBTyxrQkFBa0I7Ozs7SUFhOUIsWUFBb0IsS0FBaUI7UUFBakIsVUFBSyxHQUFMLEtBQUssQ0FBWTtJQUFJLENBQUM7Ozs7O0lBVjFDLElBQUksTUFBTSxDQUFDLE1BQTJDO1FBQ3JELFFBQVEsQ0FBQztRQUNULE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU87Ozs7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUMsQ0FBQztRQUN6SCxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFDLENBQUM7UUFDbkYsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7SUFDdkIsQ0FBQzs7OztJQUNELElBQUksTUFBTTtRQUNULE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDOzs7O0lBSUQsUUFBUTtRQUNQLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsOEJBQThCLENBQUMsQ0FBQztJQUMxRSxDQUFDOzs7WUF0QkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLHcrQkFBMEM7O2FBRTFDOzs7O1lBWFEsS0FBSzs7OztJQWNiLHFDQUE2Qzs7SUFVN0MsNkNBQXFDOzs7OztJQUN6QixtQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IFdpZGdldE1vZGVsLCBJV2lkZ2V0VmlldyB9IGZyb20gXCJAc291c2hpYW5zL3dpZGdldFwiO1xyXG5pbXBvcnQgeyBnZXRGcm9udGVuZEF1dGhlbnRpY2F0aW9uU3RhdGUgfSBmcm9tIFwiQHNvdXNoaWFucy9mcm9udGVuZC1hdXRoZW50aWNhdGlvblwiO1xyXG5cclxuaW1wb3J0IHsgTGlua3NXaWRnZXRDb25maWdNb2RlbCB9IGZyb20gXCIuLi9saW5rcy13aWRnZXQtY29uZmlnLm1vZGVsXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJ3aWRnZXQtbGlua3Mtdmlld1wiLFxyXG5cdHRlbXBsYXRlVXJsOiBcIi4vbGlua3Mtdmlldy5jb21wb25lbnQuaHRtbFwiLFxyXG5cdHN0eWxlVXJsczogW1wiLi9saW5rcy12aWV3LmNvbXBvbmVudC5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIExpbmtzVmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgSVdpZGdldFZpZXc8TGlua3NXaWRnZXRDb25maWdNb2RlbD4ge1xyXG5cdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1pbnB1dC1yZW5hbWVcclxuXHRfd2lkZ2V0OiBXaWRnZXRNb2RlbDxMaW5rc1dpZGdldENvbmZpZ01vZGVsPjtcclxuXHRzZXQgd2lkZ2V0KHdpZGdldDogV2lkZ2V0TW9kZWw8TGlua3NXaWRnZXRDb25maWdNb2RlbD4pIHtcclxuXHRcdGRlYnVnZ2VyO1xyXG5cdFx0d2lkZ2V0LkNvbmZpZy5saW5rcy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS51cmwgPSBpdGVtLnVybC5zdGFydHNXaXRoKFwid3d3LlwiKSA/IGl0ZW0udXJsID0gXCJodHRwOi8vXCIgKyBpdGVtLnVybCA6IGl0ZW0udXJsKTtcclxuXHRcdHdpZGdldC5Db25maWcubGlua3MuZm9yRWFjaChpdGVtID0+IGl0ZW0uaXNFeHRlcm5hbCA9IGl0ZW0udXJsLnN0YXJ0c1dpdGgoXCJodHRwXCIpKTtcclxuXHRcdHRoaXMuX3dpZGdldCA9IHdpZGdldDtcclxuXHR9XHJcblx0Z2V0IHdpZGdldCgpIHtcclxuXHRcdHJldHVybiB0aGlzLl93aWRnZXQ7XHJcblx0fVxyXG5cdGhhdmVQZXJtaXNzaW9uJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxhbnk+KSB7IH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLmhhdmVQZXJtaXNzaW9uJCA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldEZyb250ZW5kQXV0aGVudGljYXRpb25TdGF0ZSk7XHJcblx0fVxyXG59XHJcbiJdfQ==