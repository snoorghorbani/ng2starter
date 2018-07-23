/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { getFrontendAuthenticationState } from "@soushians/frontend-authentication";
var LinksViewComponent = /** @class */ (function () {
    function LinksViewComponent(store) {
        this.store = store;
    }
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
                    template: "<div fxLayout=\"column\">\n    <div class=\"actions\" fxLayout=\"row\" fxFlex fxLayoutAlign=\"end\">\n      <button fxFlex=\"nogrow\" mat-icon-button color=\"primary\" *ngIf=\"havePermission$ | async\" [routerLink]=\"['/widget/upsert/links', (widget)?._id]\">\n        <mat-icon>edit</mat-icon>\n      </button>\n    </div>\n    <div fxLayout=\"row\" fxFlex fxLayoutAlign=\"end\">\n    <h3>\n        {{widget.name}}\n    </h3>\n    </div>\n    <mat-list fxLayout=\"column\" fxFlex=\"100\" >\n        <mat-list-item fxLayout=\"column\" *ngFor=\"let link of (widget)?.Config.links\" fxFlex=\"100\">\n          <mat-icon mat-list-icon>link</mat-icon>\n          <a fxLayout=\"row\" fxFlex=\"grow\" [routerLink]=\"[link.url]\">\n            {{link.label}}\n          </a>\n        </mat-list-item>\n    </mat-list>\n</div>",
                    styles: [":host{position:relative;height:100%;display:block}:host:hover .actions{opacity:1;visibility:visible}mat-list a{text-decoration:none}.actions{transition:opacity .4s ease-in-out;opacity:0;visibility:hidden}.actions mat-icon{color:#121212}"]
                },] },
    ];
    /** @nocollapse */
    LinksViewComponent.ctorParameters = function () { return [
        { type: Store }
    ]; };
    return LinksViewComponent;
}());
export { LinksViewComponent };
function LinksViewComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    LinksViewComponent.prototype.widget;
    /** @type {?} */
    LinksViewComponent.prototype.havePermission$;
    /** @type {?} */
    LinksViewComponent.prototype.store;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlua3Mtdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3dpZGdldC10eXBlcy8iLCJzb3VyY2VzIjpbImxpYi9saW5rcy9saW5rcy12aWV3L2xpbmtzLXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUV6RCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBR3BDLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDOztJQWdDbkYsNEJBQW9CLEtBQWlCO1FBQWpCLFVBQUssR0FBTCxLQUFLLENBQVk7S0FBSTs7OztJQUV6QyxxQ0FBUTs7O0lBQVI7UUFDQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLDhCQUE4QixDQUFDLENBQUM7S0FDekU7O2dCQWhDRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsUUFBUSxFQUFFLG96QkFtQko7b0JBQ04sTUFBTSxFQUFFLENBQUMsOE9BQThPLENBQUM7aUJBQ3hQOzs7O2dCQTlCUSxLQUFLOzs2QkFGZDs7U0FpQ2Esa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBXaWRnZXRNb2RlbCwgSVdpZGdldFZpZXcgfSBmcm9tIFwiQHNvdXNoaWFucy93aWRnZXRcIjtcclxuaW1wb3J0IHsgZ2V0RnJvbnRlbmRBdXRoZW50aWNhdGlvblN0YXRlIH0gZnJvbSBcIkBzb3VzaGlhbnMvZnJvbnRlbmQtYXV0aGVudGljYXRpb25cIjtcclxuXHJcbmltcG9ydCB7IExpbmtzV2lkZ2V0Q29uZmlnTW9kZWwgfSBmcm9tIFwiLi4vbGlua3Mtd2lkZ2V0LWNvbmZpZy5tb2RlbFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwid2lkZ2V0LWxpbmtzLXZpZXdcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgZnhMYXlvdXQ9XCJjb2x1bW5cIj5cclxuICAgIDxkaXYgY2xhc3M9XCJhY3Rpb25zXCIgZnhMYXlvdXQ9XCJyb3dcIiBmeEZsZXggZnhMYXlvdXRBbGlnbj1cImVuZFwiPlxyXG4gICAgICA8YnV0dG9uIGZ4RmxleD1cIm5vZ3Jvd1wiIG1hdC1pY29uLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAqbmdJZj1cImhhdmVQZXJtaXNzaW9uJCB8IGFzeW5jXCIgW3JvdXRlckxpbmtdPVwiWycvd2lkZ2V0L3Vwc2VydC9saW5rcycsICh3aWRnZXQpPy5faWRdXCI+XHJcbiAgICAgICAgPG1hdC1pY29uPmVkaXQ8L21hdC1pY29uPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBmeExheW91dD1cInJvd1wiIGZ4RmxleCBmeExheW91dEFsaWduPVwiZW5kXCI+XHJcbiAgICA8aDM+XHJcbiAgICAgICAge3t3aWRnZXQubmFtZX19XHJcbiAgICA8L2gzPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8bWF0LWxpc3QgZnhMYXlvdXQ9XCJjb2x1bW5cIiBmeEZsZXg9XCIxMDBcIiA+XHJcbiAgICAgICAgPG1hdC1saXN0LWl0ZW0gZnhMYXlvdXQ9XCJjb2x1bW5cIiAqbmdGb3I9XCJsZXQgbGluayBvZiAod2lkZ2V0KT8uQ29uZmlnLmxpbmtzXCIgZnhGbGV4PVwiMTAwXCI+XHJcbiAgICAgICAgICA8bWF0LWljb24gbWF0LWxpc3QtaWNvbj5saW5rPC9tYXQtaWNvbj5cclxuICAgICAgICAgIDxhIGZ4TGF5b3V0PVwicm93XCIgZnhGbGV4PVwiZ3Jvd1wiIFtyb3V0ZXJMaW5rXT1cIltsaW5rLnVybF1cIj5cclxuICAgICAgICAgICAge3tsaW5rLmxhYmVsfX1cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L21hdC1saXN0LWl0ZW0+XHJcbiAgICA8L21hdC1saXN0PlxyXG48L2Rpdj5gLFxyXG5cdHN0eWxlczogW2A6aG9zdHtwb3NpdGlvbjpyZWxhdGl2ZTtoZWlnaHQ6MTAwJTtkaXNwbGF5OmJsb2NrfTpob3N0OmhvdmVyIC5hY3Rpb25ze29wYWNpdHk6MTt2aXNpYmlsaXR5OnZpc2libGV9bWF0LWxpc3QgYXt0ZXh0LWRlY29yYXRpb246bm9uZX0uYWN0aW9uc3t0cmFuc2l0aW9uOm9wYWNpdHkgLjRzIGVhc2UtaW4tb3V0O29wYWNpdHk6MDt2aXNpYmlsaXR5OmhpZGRlbn0uYWN0aW9ucyBtYXQtaWNvbntjb2xvcjojMTIxMjEyfWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaW5rc1ZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIElXaWRnZXRWaWV3PExpbmtzV2lkZ2V0Q29uZmlnTW9kZWw+IHtcclxuXHQvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8taW5wdXQtcmVuYW1lXHJcblx0d2lkZ2V0OiBXaWRnZXRNb2RlbDxMaW5rc1dpZGdldENvbmZpZ01vZGVsPjtcclxuXHRoYXZlUGVybWlzc2lvbiQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8YW55Pikge31cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLmhhdmVQZXJtaXNzaW9uJCA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldEZyb250ZW5kQXV0aGVudGljYXRpb25TdGF0ZSk7XHJcblx0fVxyXG59XHJcbiJdfQ==