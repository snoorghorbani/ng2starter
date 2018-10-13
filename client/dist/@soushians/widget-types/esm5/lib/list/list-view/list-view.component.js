/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { getFrontendAuthenticationState } from "@soushians/frontend-authentication";
var ListViewComponent = /** @class */ (function () {
    function ListViewComponent(store) {
        this.store = store;
    }
    /**
     * @return {?}
     */
    ListViewComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        debugger;
        this.havePermission$ = this.store.select(getFrontendAuthenticationState);
    };
    ListViewComponent.decorators = [
        { type: Component, args: [{
                    selector: "widget-list-view",
                    template: "<div fxLayout=\"column\">\n  <div class=\"actions\" fxLayout=\"row\" fxFlex fxLayoutAlign=\"end\">\n    <button fxFlex=\"nogrow\" mat-icon-button color=\"primary\" *ngIf=\"havePermission$ | async\" [routerLink]=\"['/widget/upsert/links', (widget)?._id]\">\n      <mat-icon>edit</mat-icon>\n    </button>\n  </div>\n  <div fxLayout=\"row\" fxFlex fxLayoutAlign=\"end\">\n    <h3>\n      {{widget.name}}\n    </h3>\n  </div>\n  <mat-list fxLayout=\"column\" fxFlex=\"100\">\n    <mat-list-item fxLayout=\"column\" *ngFor=\"let item of (widget)?.Config.list\" fxFlex=\"100\">\n      <mat-icon class=\"large-icon\" mat-list-icon>account_box</mat-icon>\n      <h4 mat-line> {{item.title}}</h4>\n      <p mat-line> {{item.subtitle}} </p>\n      <p mat-line> {{item.description}} </p>\n    </mat-list-item>\n  </mat-list>\n</div>",
                    styles: [":host{position:relative;height:100%;display:block}:host:hover .actions{opacity:1;visibility:visible}mat-list a{text-decoration:none}.actions{transition:opacity .4s ease-in-out;opacity:0;visibility:hidden}.actions mat-icon{color:#121212}h3{padding-right:20px}.large-icon{font-size:50px!important;width:50px!important;height:50px!important;color:#999}mat-list{direction:rtl}"]
                },] },
    ];
    /** @nocollapse */
    ListViewComponent.ctorParameters = function () { return [
        { type: Store }
    ]; };
    return ListViewComponent;
}());
export { ListViewComponent };
if (false) {
    /** @type {?} */
    ListViewComponent.prototype.widget;
    /** @type {?} */
    ListViewComponent.prototype.havePermission$;
    /** @type {?} */
    ListViewComponent.prototype.store;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0LXR5cGVzLyIsInNvdXJjZXMiOlsibGliL2xpc3QvbGlzdC12aWV3L2xpc3Qtdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRXpELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFHcEMsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7O0lBK0JuRiwyQkFBb0IsS0FBaUI7UUFBakIsVUFBSyxHQUFMLEtBQUssQ0FBWTtLQUFLOzs7O0lBRTFDLG9DQUFROzs7SUFBUjtRQUNDLFFBQVEsQ0FBQztRQUNULElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsOEJBQThCLENBQUMsQ0FBQztLQUN6RTs7Z0JBaENELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixRQUFRLEVBQUUsd3pCQW1CSjtvQkFDTixNQUFNLEVBQUUsQ0FBQyxzWEFBc1gsQ0FBQztpQkFDaFk7Ozs7Z0JBOUJRLEtBQUs7OzRCQUZkOztTQWlDYSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IFdpZGdldE1vZGVsLCBJV2lkZ2V0VmlldyB9IGZyb20gXCJAc291c2hpYW5zL3dpZGdldFwiO1xyXG5pbXBvcnQgeyBnZXRGcm9udGVuZEF1dGhlbnRpY2F0aW9uU3RhdGUgfSBmcm9tIFwiQHNvdXNoaWFucy9mcm9udGVuZC1hdXRoZW50aWNhdGlvblwiO1xyXG5cclxuaW1wb3J0IHsgTGlzdFdpZGdldENvbmZpZ01vZGVsIH0gZnJvbSBcIi4uL2xpc3Qtd2lkZ2V0LWNvbmZpZy5tb2RlbFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwid2lkZ2V0LWxpc3Qtdmlld1wiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiBmeExheW91dD1cImNvbHVtblwiPlxyXG4gIDxkaXYgY2xhc3M9XCJhY3Rpb25zXCIgZnhMYXlvdXQ9XCJyb3dcIiBmeEZsZXggZnhMYXlvdXRBbGlnbj1cImVuZFwiPlxyXG4gICAgPGJ1dHRvbiBmeEZsZXg9XCJub2dyb3dcIiBtYXQtaWNvbi1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKm5nSWY9XCJoYXZlUGVybWlzc2lvbiQgfCBhc3luY1wiIFtyb3V0ZXJMaW5rXT1cIlsnL3dpZGdldC91cHNlcnQvbGlua3MnLCAod2lkZ2V0KT8uX2lkXVwiPlxyXG4gICAgICA8bWF0LWljb24+ZWRpdDwvbWF0LWljb24+XHJcbiAgICA8L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGZ4TGF5b3V0PVwicm93XCIgZnhGbGV4IGZ4TGF5b3V0QWxpZ249XCJlbmRcIj5cclxuICAgIDxoMz5cclxuICAgICAge3t3aWRnZXQubmFtZX19XHJcbiAgICA8L2gzPlxyXG4gIDwvZGl2PlxyXG4gIDxtYXQtbGlzdCBmeExheW91dD1cImNvbHVtblwiIGZ4RmxleD1cIjEwMFwiPlxyXG4gICAgPG1hdC1saXN0LWl0ZW0gZnhMYXlvdXQ9XCJjb2x1bW5cIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiAod2lkZ2V0KT8uQ29uZmlnLmxpc3RcIiBmeEZsZXg9XCIxMDBcIj5cclxuICAgICAgPG1hdC1pY29uIGNsYXNzPVwibGFyZ2UtaWNvblwiIG1hdC1saXN0LWljb24+YWNjb3VudF9ib3g8L21hdC1pY29uPlxyXG4gICAgICA8aDQgbWF0LWxpbmU+IHt7aXRlbS50aXRsZX19PC9oND5cclxuICAgICAgPHAgbWF0LWxpbmU+IHt7aXRlbS5zdWJ0aXRsZX19IDwvcD5cclxuICAgICAgPHAgbWF0LWxpbmU+IHt7aXRlbS5kZXNjcmlwdGlvbn19IDwvcD5cclxuICAgIDwvbWF0LWxpc3QtaXRlbT5cclxuICA8L21hdC1saXN0PlxyXG48L2Rpdj5gLFxyXG5cdHN0eWxlczogW2A6aG9zdHtwb3NpdGlvbjpyZWxhdGl2ZTtoZWlnaHQ6MTAwJTtkaXNwbGF5OmJsb2NrfTpob3N0OmhvdmVyIC5hY3Rpb25ze29wYWNpdHk6MTt2aXNpYmlsaXR5OnZpc2libGV9bWF0LWxpc3QgYXt0ZXh0LWRlY29yYXRpb246bm9uZX0uYWN0aW9uc3t0cmFuc2l0aW9uOm9wYWNpdHkgLjRzIGVhc2UtaW4tb3V0O29wYWNpdHk6MDt2aXNpYmlsaXR5OmhpZGRlbn0uYWN0aW9ucyBtYXQtaWNvbntjb2xvcjojMTIxMjEyfWgze3BhZGRpbmctcmlnaHQ6MjBweH0ubGFyZ2UtaWNvbntmb250LXNpemU6NTBweCFpbXBvcnRhbnQ7d2lkdGg6NTBweCFpbXBvcnRhbnQ7aGVpZ2h0OjUwcHghaW1wb3J0YW50O2NvbG9yOiM5OTl9bWF0LWxpc3R7ZGlyZWN0aW9uOnJ0bH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIElXaWRnZXRWaWV3PExpc3RXaWRnZXRDb25maWdNb2RlbD4ge1xyXG5cdHdpZGdldDogV2lkZ2V0TW9kZWw8TGlzdFdpZGdldENvbmZpZ01vZGVsPjtcclxuXHRoYXZlUGVybWlzc2lvbiQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8YW55PikgeyB9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0ZGVidWdnZXI7XHJcblx0XHR0aGlzLmhhdmVQZXJtaXNzaW9uJCA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldEZyb250ZW5kQXV0aGVudGljYXRpb25TdGF0ZSk7XHJcblx0fVxyXG59XHJcbiJdfQ==