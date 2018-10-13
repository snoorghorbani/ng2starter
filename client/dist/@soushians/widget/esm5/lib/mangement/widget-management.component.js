/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
                    template: "<div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"25px\" class=\"main-container\">\n\n  <div class=\"content-action\">\n    <mat-card class=\"with-sticky-action\">\n      <mat-card-header>\n        <mat-card-title fxLayout=\"row\" fxLayoutGap=\"5px\">\n          <mat-icon>widgets</mat-icon>\n          <span>\u0645\u062F\u06CC\u0631\u06CC\u062A \u0627\u0641\u0632\u0648\u0646\u0647\u200C\u0647\u0627</span>\n        </mat-card-title>\n        <mat-card-subtitle fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n          <span>\n            \u0627\u0641\u0632\u0648\u0646\u0647\u200C \u0645\u0648\u0631\u062F \u0646\u0638\u0631 \u0631\u0627 \u0628\u0631\u0627\u0633\u0627\u0633 \u0646\u0648\u0639 \u0622\u0646 \u0627\u06CC\u062C\u0627\u062F \u0646\u0645\u0627\u06CC\u06CC\u062F ...\n          </span>\n        </mat-card-subtitle>\n      </mat-card-header>\n\n      <div fxLayout=\"row wrap\" fxLayoutAlign=\"start\">\n\n        <button mat-raised-button fxFlex.gt-lg=\"19\" fxFlex.lg=\"24\" fxFlex.md=\"31.7\" fxFlex.sm=\"49\" fxFlex.xs=\"100\"\n          class='link' *ngFor=\"let item of (widgets$ | async)\">\n          <button mat-icon-button (click)=\"remove(item)\" class=\"remove-item\">\n            <mat-icon>delete</mat-icon>\n          </button>\n          <div class=\"link-button\" [routerLink]=\"['../upsert' ,  item.type,  item._id]\" fxLayout='column' fxLayoutAlign='space-between center'>\n            <mat-icon color='primary' [style.color]=\"anghazi[item.type].color\">{{anghazi[item.type].icon}}</mat-icon>\n            <div fxFlex=\"nogrow\" fxFlexAlign=\"stretch\" fxLayoutAlign=\"center center\" class=\"widget-type\">\n              {{item.type}}\n            </div>\n            <h4 class=\"title\">{{item.name}}</h4>\n          </div>\n        </button>\n      </div>\n\n    </mat-card>\n\n    <div fxLayout=\"column\" class=\"sticky-action\">\n      <a mat-mini-fab routerLink=\"../upsert/article\" [style.backgroundColor]=\"'#ffffff'\">\n        <mat-icon [style.color]=\"anghazi.article.color\">{{anghazi.article.icon}}</mat-icon>\n      </a>\n      <a mat-mini-fab routerLink=\"../upsert/links\" [style.backgroundColor]=\"'#ffffff'\">\n        <mat-icon [style.color]=\"anghazi.links.color\">{{anghazi.links.icon}}</mat-icon>\n      </a>\n      <a mat-mini-fab routerLink=\"../upsert/list\" [style.backgroundColor]=\"'#ffffff'\">\n        <mat-icon [style.color]=\"anghazi.list.color\">{{anghazi.list.icon}}</mat-icon>\n      </a>\n    </div>\n\n  </div>\n</div>",
                    styles: [".link{margin:.5%;box-sizing:border-box;position:relative;padding:0}button.link mat-icon{font-size:34px;width:34px;height:34px}.link h4{margin:0}.remove-item{position:absolute;top:0;left:0;z-index:100}.link-button{padding:25px 15px}button.link .remove-item mat-icon{font-size:initial;width:initial;height:initial;visibility:hidden;opacity:0;transition:opacity .3s ease-in-out}button.link:hover .remove-item mat-icon{visibility:visible;opacity:1}"]
                },] },
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LW1hbmFnZW1lbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy93aWRnZXQvIiwic291cmNlcyI6WyJsaWIvbWFuZ2VtZW50L3dpZGdldC1tYW5hZ2VtZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFFN0QsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUlwQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUN4RixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7SUF5RHZFLG9DQUFtQixLQUFzQjtRQUF0QixVQUFLLEdBQUwsS0FBSyxDQUFpQjtRQUN4QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFyQixDQUFxQixDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0tBQ3JCOzs7O0lBQ0QsNkNBQVE7OztJQUFSO1FBQ0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxxQkFBcUIsRUFBRSxDQUFDLENBQUM7S0FDakQ7Ozs7O0lBQ0QsMkNBQU07Ozs7SUFBTixVQUFPLElBQUk7UUFDVixRQUFRLENBQUM7UUFDVCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLHVCQUF1QixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7S0FDdkQ7Ozs7SUFDRCxrREFBYTs7O0lBQWI7UUFDQyxJQUFJLENBQUMsT0FBTyxHQUFHO1lBQ2QsT0FBTyxFQUFFO2dCQUNSLEtBQUssRUFBRSxPQUFPO2dCQUNkLElBQUksRUFBRSxhQUFhO2FBQ25CO1lBQ0QsS0FBSyxFQUFFO2dCQUNOLEtBQUssRUFBRSxRQUFRO2dCQUNmLElBQUksRUFBRSxNQUFNO2FBQ1o7WUFDRCxJQUFJLEVBQUU7Z0JBQ0wsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsSUFBSSxFQUFFLE1BQU07YUFDWjtTQUNELENBQUM7S0FDRjs7Z0JBakZELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsbzlFQWdESjtvQkFDTixNQUFNLEVBQUUsQ0FBQyw4YkFBOGIsQ0FBQztpQkFDeGM7Ozs7Z0JBMURRLEtBQUs7O3FDQUZkOztTQTZEYSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRGlyZWN0aXZlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IFdpZGdldE1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy93aWRnZXQubW9kZWxcIjtcclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vd2lkZ2V0LnJlZHVjZXJcIjtcclxuaW1wb3J0IHsgR2V0V2lkZ2V0c1N0YXJ0QWN0aW9uIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FwaS9nZXQtd2lkZ2V0cy9nZXQtd2lkZ2V0cy5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IERlbGV0ZVdpZGdldFN0YXJ0QWN0aW9uIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FwaS9kZWxldGUtd2lkZ2V0XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHR0ZW1wbGF0ZTogYDxkaXYgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEFsaWduPVwiY2VudGVyXCIgZnhMYXlvdXRHYXA9XCIyNXB4XCIgY2xhc3M9XCJtYWluLWNvbnRhaW5lclwiPlxyXG5cclxuICA8ZGl2IGNsYXNzPVwiY29udGVudC1hY3Rpb25cIj5cclxuICAgIDxtYXQtY2FyZCBjbGFzcz1cIndpdGgtc3RpY2t5LWFjdGlvblwiPlxyXG4gICAgICA8bWF0LWNhcmQtaGVhZGVyPlxyXG4gICAgICAgIDxtYXQtY2FyZC10aXRsZSBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0R2FwPVwiNXB4XCI+XHJcbiAgICAgICAgICA8bWF0LWljb24+d2lkZ2V0czwvbWF0LWljb24+XHJcbiAgICAgICAgICA8c3Bhbj7Zhdiv24zYsduM2Kog2KfZgdiy2YjZhtmH4oCM2YfYpzwvc3Bhbj5cclxuICAgICAgICA8L21hdC1jYXJkLXRpdGxlPlxyXG4gICAgICAgIDxtYXQtY2FyZC1zdWJ0aXRsZSBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0QWxpZ249XCJzcGFjZS1iZXR3ZWVuIGNlbnRlclwiPlxyXG4gICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgINin2YHYstmI2YbZh+KAjCDZhdmI2LHYryDZhti42LEg2LHYpyDYqNix2KfYs9in2LMg2YbZiNi5INii2YYg2KfbjNis2KfYryDZhtmF2KfbjNuM2K8gLi4uXHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9tYXQtY2FyZC1zdWJ0aXRsZT5cclxuICAgICAgPC9tYXQtY2FyZC1oZWFkZXI+XHJcblxyXG4gICAgICA8ZGl2IGZ4TGF5b3V0PVwicm93IHdyYXBcIiBmeExheW91dEFsaWduPVwic3RhcnRcIj5cclxuXHJcbiAgICAgICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBmeEZsZXguZ3QtbGc9XCIxOVwiIGZ4RmxleC5sZz1cIjI0XCIgZnhGbGV4Lm1kPVwiMzEuN1wiIGZ4RmxleC5zbT1cIjQ5XCIgZnhGbGV4LnhzPVwiMTAwXCJcclxuICAgICAgICAgIGNsYXNzPSdsaW5rJyAqbmdGb3I9XCJsZXQgaXRlbSBvZiAod2lkZ2V0cyQgfCBhc3luYylcIj5cclxuICAgICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIChjbGljayk9XCJyZW1vdmUoaXRlbSlcIiBjbGFzcz1cInJlbW92ZS1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxtYXQtaWNvbj5kZWxldGU8L21hdC1pY29uPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibGluay1idXR0b25cIiBbcm91dGVyTGlua109XCJbJy4uL3Vwc2VydCcgLCAgaXRlbS50eXBlLCAgaXRlbS5faWRdXCIgZnhMYXlvdXQ9J2NvbHVtbicgZnhMYXlvdXRBbGlnbj0nc3BhY2UtYmV0d2VlbiBjZW50ZXInPlxyXG4gICAgICAgICAgICA8bWF0LWljb24gY29sb3I9J3ByaW1hcnknIFtzdHlsZS5jb2xvcl09XCJhbmdoYXppW2l0ZW0udHlwZV0uY29sb3JcIj57e2FuZ2hhemlbaXRlbS50eXBlXS5pY29ufX08L21hdC1pY29uPlxyXG4gICAgICAgICAgICA8ZGl2IGZ4RmxleD1cIm5vZ3Jvd1wiIGZ4RmxleEFsaWduPVwic3RyZXRjaFwiIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCIgY2xhc3M9XCJ3aWRnZXQtdHlwZVwiPlxyXG4gICAgICAgICAgICAgIHt7aXRlbS50eXBlfX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxoNCBjbGFzcz1cInRpdGxlXCI+e3tpdGVtLm5hbWV9fTwvaDQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9tYXQtY2FyZD5cclxuXHJcbiAgICA8ZGl2IGZ4TGF5b3V0PVwiY29sdW1uXCIgY2xhc3M9XCJzdGlja3ktYWN0aW9uXCI+XHJcbiAgICAgIDxhIG1hdC1taW5pLWZhYiByb3V0ZXJMaW5rPVwiLi4vdXBzZXJ0L2FydGljbGVcIiBbc3R5bGUuYmFja2dyb3VuZENvbG9yXT1cIicjZmZmZmZmJ1wiPlxyXG4gICAgICAgIDxtYXQtaWNvbiBbc3R5bGUuY29sb3JdPVwiYW5naGF6aS5hcnRpY2xlLmNvbG9yXCI+e3thbmdoYXppLmFydGljbGUuaWNvbn19PC9tYXQtaWNvbj5cclxuICAgICAgPC9hPlxyXG4gICAgICA8YSBtYXQtbWluaS1mYWIgcm91dGVyTGluaz1cIi4uL3Vwc2VydC9saW5rc1wiIFtzdHlsZS5iYWNrZ3JvdW5kQ29sb3JdPVwiJyNmZmZmZmYnXCI+XHJcbiAgICAgICAgPG1hdC1pY29uIFtzdHlsZS5jb2xvcl09XCJhbmdoYXppLmxpbmtzLmNvbG9yXCI+e3thbmdoYXppLmxpbmtzLmljb259fTwvbWF0LWljb24+XHJcbiAgICAgIDwvYT5cclxuICAgICAgPGEgbWF0LW1pbmktZmFiIHJvdXRlckxpbms9XCIuLi91cHNlcnQvbGlzdFwiIFtzdHlsZS5iYWNrZ3JvdW5kQ29sb3JdPVwiJyNmZmZmZmYnXCI+XHJcbiAgICAgICAgPG1hdC1pY29uIFtzdHlsZS5jb2xvcl09XCJhbmdoYXppLmxpc3QuY29sb3JcIj57e2FuZ2hhemkubGlzdC5pY29ufX08L21hdC1pY29uPlxyXG4gICAgICA8L2E+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgPC9kaXY+XHJcbjwvZGl2PmAsXHJcblx0c3R5bGVzOiBbYC5saW5re21hcmdpbjouNSU7Ym94LXNpemluZzpib3JkZXItYm94O3Bvc2l0aW9uOnJlbGF0aXZlO3BhZGRpbmc6MH1idXR0b24ubGluayBtYXQtaWNvbntmb250LXNpemU6MzRweDt3aWR0aDozNHB4O2hlaWdodDozNHB4fS5saW5rIGg0e21hcmdpbjowfS5yZW1vdmUtaXRlbXtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7ei1pbmRleDoxMDB9LmxpbmstYnV0dG9ue3BhZGRpbmc6MjVweCAxNXB4fWJ1dHRvbi5saW5rIC5yZW1vdmUtaXRlbSBtYXQtaWNvbntmb250LXNpemU6aW5pdGlhbDt3aWR0aDppbml0aWFsO2hlaWdodDppbml0aWFsO3Zpc2liaWxpdHk6aGlkZGVuO29wYWNpdHk6MDt0cmFuc2l0aW9uOm9wYWNpdHkgLjNzIGVhc2UtaW4tb3V0fWJ1dHRvbi5saW5rOmhvdmVyIC5yZW1vdmUtaXRlbSBtYXQtaWNvbnt2aXNpYmlsaXR5OnZpc2libGU7b3BhY2l0eToxfWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBXaWRnZXRzTWFuYWdlbWVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0YW5naGF6aTogeyBbdHlwZTogc3RyaW5nXTogeyBjb2xvcjogc3RyaW5nOyBpY29uOiBzdHJpbmcgfSB9O1xyXG5cdHdpZGdldHMkOiBPYnNlcnZhYmxlPFdpZGdldE1vZGVsPGFueT5bXT47XHJcblx0Y29uc3RydWN0b3IocHVibGljIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4pIHtcclxuXHRcdHRoaXMud2lkZ2V0cyQgPSB0aGlzLnN0b3JlLnNlbGVjdCgoc3RhdGUpID0+IHN0YXRlLndpZGdldHMuZGIuZGF0YSk7XHJcblx0XHR0aGlzLl9maWxsX2FuZ2hhemkoKTtcclxuXHR9XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBHZXRXaWRnZXRzU3RhcnRBY3Rpb24oKSk7XHJcblx0fVxyXG5cdHJlbW92ZShpdGVtKSB7XHJcblx0XHRkZWJ1Z2dlcjtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IERlbGV0ZVdpZGdldFN0YXJ0QWN0aW9uKGl0ZW0pKTtcclxuXHR9XHJcblx0X2ZpbGxfYW5naGF6aSgpIHtcclxuXHRcdHRoaXMuYW5naGF6aSA9IHtcclxuXHRcdFx0YXJ0aWNsZToge1xyXG5cdFx0XHRcdGNvbG9yOiBcImdyZWVuXCIsXHJcblx0XHRcdFx0aWNvbjogXCJkZXNjcmlwdGlvblwiXHJcblx0XHRcdH0sXHJcblx0XHRcdGxpbmtzOiB7XHJcblx0XHRcdFx0Y29sb3I6IFwib3JhbmdlXCIsXHJcblx0XHRcdFx0aWNvbjogXCJsaW5rXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0bGlzdDoge1xyXG5cdFx0XHRcdGNvbG9yOiBcImJsdWVcIixcclxuXHRcdFx0XHRpY29uOiBcImxpc3RcIlxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdH1cclxufVxyXG5cclxuXHJcbiJdfQ==