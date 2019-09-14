/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { GetWidgetsStartAction } from "../services/api/get-widgets/get-widgets.actions";
import { DeleteWidgetStartAction } from "../services/api/delete-widget";
var WidgetsManagementComponent = /** @class */ (function () {
    function WidgetsManagementComponent(store) {
        this.store = store;
        this.widgets$ = this.store.select(function (state) { return state.widgets.db.data; });
        this._fill_anghazi();
    }
    /**
     * @return {?}
     */
    WidgetsManagementComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.store.dispatch(new GetWidgetsStartAction());
    };
    /**
     * @param {?} item
     * @return {?}
     */
    WidgetsManagementComponent.prototype.remove = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        debugger;
        this.store.dispatch(new DeleteWidgetStartAction(item));
    };
    /**
     * @return {?}
     */
    WidgetsManagementComponent.prototype._fill_anghazi = /**
     * @return {?}
     */
    function () {
        this.anghazi = {
            article: {
                color: "green",
                icon: "description"
            },
            links: {
                color: "orange",
                icon: "link"
            },
            list: {
                color: "blue",
                icon: "list"
            }
        };
    };
    WidgetsManagementComponent.decorators = [
        { type: Component, args: [{
                    template: "<div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"25px\" class=\"main-container\">\r\n\r\n  <div class=\"content-action\">\r\n    <mat-card class=\"with-sticky-action\">\r\n      <mat-card-header>\r\n        <mat-card-title fxLayout=\"row\" fxLayoutGap=\"5px\">\r\n          <mat-icon>widgets</mat-icon>\r\n          <span>\u0645\u062F\u06CC\u0631\u06CC\u062A \u0627\u0641\u0632\u0648\u0646\u0647\u200C\u0647\u0627</span>\r\n        </mat-card-title>\r\n        <mat-card-subtitle fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n          <span>\r\n            \u0627\u0641\u0632\u0648\u0646\u0647\u200C \u0645\u0648\u0631\u062F \u0646\u0638\u0631 \u0631\u0627 \u0628\u0631\u0627\u0633\u0627\u0633 \u0646\u0648\u0639 \u0622\u0646 \u0627\u06CC\u062C\u0627\u062F \u0646\u0645\u0627\u06CC\u06CC\u062F ...\r\n          </span>\r\n        </mat-card-subtitle>\r\n      </mat-card-header>\r\n\r\n      <div fxLayout=\"row wrap\" fxLayoutAlign=\"start\">\r\n\r\n        <button mat-raised-button fxFlex.gt-lg=\"19\" fxFlex.lg=\"24\" fxFlex.md=\"31.7\" fxFlex.sm=\"49\" fxFlex.xs=\"100\"\r\n          class='link' *ngFor=\"let item of (widgets$ | async)\">\r\n          <button mat-icon-button (click)=\"remove(item)\" class=\"remove-item\">\r\n            <mat-icon>delete</mat-icon>\r\n          </button>\r\n          <div class=\"link-button\" [routerLink]=\"['../upsert' ,  item.type,  item._id]\" fxLayout='column' fxLayoutAlign='space-between center'>\r\n            <mat-icon color='primary' [style.color]=\"anghazi[item.type].color\">{{anghazi[item.type].icon}}</mat-icon>\r\n            <div fxFlex=\"nogrow\" fxFlexAlign=\"stretch\" fxLayoutAlign=\"center center\" class=\"widget-type\">\r\n              {{item.type}}\r\n            </div>\r\n            <h4 class=\"title\">{{item.name}}</h4>\r\n          </div>\r\n        </button>\r\n      </div>\r\n\r\n    </mat-card>\r\n\r\n    <div fxLayout=\"column\" class=\"sticky-action\">\r\n      <a mat-mini-fab routerLink=\"../upsert/article\" [style.backgroundColor]=\"'#ffffff'\">\r\n        <mat-icon [style.color]=\"anghazi.article.color\">{{anghazi.article.icon}}</mat-icon>\r\n      </a>\r\n      <a mat-mini-fab routerLink=\"../upsert/links\" [style.backgroundColor]=\"'#ffffff'\">\r\n        <mat-icon [style.color]=\"anghazi.links.color\">{{anghazi.links.icon}}</mat-icon>\r\n      </a>\r\n      <a mat-mini-fab routerLink=\"../upsert/list\" [style.backgroundColor]=\"'#ffffff'\">\r\n        <mat-icon [style.color]=\"anghazi.list.color\">{{anghazi.list.icon}}</mat-icon>\r\n      </a>\r\n    </div>\r\n\r\n  </div>\r\n</div>",
                    styles: [".link{margin:.5%;box-sizing:border-box;position:relative;padding:0}button.link mat-icon{font-size:34px;width:34px;height:34px}.link h4{margin:0}.remove-item{position:absolute;top:0;left:0;z-index:100}.link-button{padding:25px 15px}button.link .remove-item mat-icon{font-size:initial;width:initial;height:initial;visibility:hidden;opacity:0;transition:opacity .3s ease-in-out}button.link:hover .remove-item mat-icon{visibility:visible;opacity:1}"]
                }] }
    ];
    /** @nocollapse */
    WidgetsManagementComponent.ctorParameters = function () { return [
        { type: Store }
    ]; };
    return WidgetsManagementComponent;
}());
export { WidgetsManagementComponent };
if (false) {
    /** @type {?} */
    WidgetsManagementComponent.prototype.anghazi;
    /** @type {?} */
    WidgetsManagementComponent.prototype.widgets$;
    /** @type {?} */
    WidgetsManagementComponent.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LW1hbmFnZW1lbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy93aWRnZXQvIiwic291cmNlcyI6WyJsaWIvbWFuZ2VtZW50L3dpZGdldC1tYW5hZ2VtZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFFN0QsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUlwQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUN4RixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUV4RTtJQU9DLG9DQUFtQixLQUFzQjtRQUF0QixVQUFLLEdBQUwsS0FBSyxDQUFpQjtRQUN4QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFyQixDQUFxQixDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFDRCw2Q0FBUTs7O0lBQVI7UUFDQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLHFCQUFxQixFQUFFLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7OztJQUNELDJDQUFNOzs7O0lBQU4sVUFBTyxJQUFJO1FBQ1YsUUFBUSxDQUFDO1FBQ1QsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFDRCxrREFBYTs7O0lBQWI7UUFDQyxJQUFJLENBQUMsT0FBTyxHQUFHO1lBQ2QsT0FBTyxFQUFFO2dCQUNSLEtBQUssRUFBRSxPQUFPO2dCQUNkLElBQUksRUFBRSxhQUFhO2FBQ25CO1lBQ0QsS0FBSyxFQUFFO2dCQUNOLEtBQUssRUFBRSxRQUFRO2dCQUNmLElBQUksRUFBRSxNQUFNO2FBQ1o7WUFDRCxJQUFJLEVBQUU7Z0JBQ0wsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsSUFBSSxFQUFFLE1BQU07YUFDWjtTQUNELENBQUM7SUFDSCxDQUFDOztnQkFqQ0QsU0FBUyxTQUFDO29CQUNWLDhqRkFBK0M7O2lCQUUvQzs7OztnQkFWUSxLQUFLOztJQXlDZCxpQ0FBQztDQUFBLEFBbENELElBa0NDO1NBOUJZLDBCQUEwQjs7O0lBQ3RDLDZDQUE2RDs7SUFDN0QsOENBQXlDOztJQUM3QiwyQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRGlyZWN0aXZlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IFdpZGdldE1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy93aWRnZXQubW9kZWxcIjtcclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vd2lkZ2V0LnJlZHVjZXJcIjtcclxuaW1wb3J0IHsgR2V0V2lkZ2V0c1N0YXJ0QWN0aW9uIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FwaS9nZXQtd2lkZ2V0cy9nZXQtd2lkZ2V0cy5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IERlbGV0ZVdpZGdldFN0YXJ0QWN0aW9uIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FwaS9kZWxldGUtd2lkZ2V0XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHR0ZW1wbGF0ZVVybDogXCJ3aWRnZXQtbWFuYWdlbWVudC5jb21wb25lbnQuaHRtbFwiLFxyXG5cdHN0eWxlVXJsczogW1wid2lkZ2V0LW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIFdpZGdldHNNYW5hZ2VtZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRhbmdoYXppOiB7IFt0eXBlOiBzdHJpbmddOiB7IGNvbG9yOiBzdHJpbmc7IGljb246IHN0cmluZyB9IH07XHJcblx0d2lkZ2V0cyQ6IE9ic2VydmFibGU8V2lkZ2V0TW9kZWw8YW55PltdPjtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPikge1xyXG5cdFx0dGhpcy53aWRnZXRzJCA9IHRoaXMuc3RvcmUuc2VsZWN0KChzdGF0ZSkgPT4gc3RhdGUud2lkZ2V0cy5kYi5kYXRhKTtcclxuXHRcdHRoaXMuX2ZpbGxfYW5naGF6aSgpO1xyXG5cdH1cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEdldFdpZGdldHNTdGFydEFjdGlvbigpKTtcclxuXHR9XHJcblx0cmVtb3ZlKGl0ZW0pIHtcclxuXHRcdGRlYnVnZ2VyO1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgRGVsZXRlV2lkZ2V0U3RhcnRBY3Rpb24oaXRlbSkpO1xyXG5cdH1cclxuXHRfZmlsbF9hbmdoYXppKCkge1xyXG5cdFx0dGhpcy5hbmdoYXppID0ge1xyXG5cdFx0XHRhcnRpY2xlOiB7XHJcblx0XHRcdFx0Y29sb3I6IFwiZ3JlZW5cIixcclxuXHRcdFx0XHRpY29uOiBcImRlc2NyaXB0aW9uXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0bGlua3M6IHtcclxuXHRcdFx0XHRjb2xvcjogXCJvcmFuZ2VcIixcclxuXHRcdFx0XHRpY29uOiBcImxpbmtcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHRsaXN0OiB7XHJcblx0XHRcdFx0Y29sb3I6IFwiYmx1ZVwiLFxyXG5cdFx0XHRcdGljb246IFwibGlzdFwiXHJcblx0XHRcdH1cclxuXHRcdH07XHJcblx0fVxyXG59XHJcblxyXG5cclxuIl19