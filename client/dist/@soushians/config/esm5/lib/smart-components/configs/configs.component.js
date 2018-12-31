/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { getConfigs } from "../../reducers";
var ConfigsComponent = /** @class */ (function () {
    function ConfigsComponent(store) {
        this.store = store;
        this.configs = this.store.select(getConfigs);
    }
    ConfigsComponent.decorators = [
        { type: Component, args: [{
                    selector: "configs",
                    template: "<div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"25px\" class=\"main-container\">\r\n\r\n  <div class=\"content-action\">\r\n    <mat-card class=\"with-sticky-action\">\r\n      <mat-card-header>\r\n        <mat-card-title fxLayout=\"row\" fxLayoutGap=\"5px\">\r\n          <mat-icon>settings_input_component</mat-icon>\r\n          <span>\u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0633\u0627\u0645\u0627\u0646\u0647 \u0648 \u0645\u0627\u0698\u0648\u0644 \u0647\u0627</span>\r\n        </mat-card-title>\r\n        <!-- <mat-card-subtitle fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n          <span>\r\n            \u0634\u0627\u0645\u0644 \u062A\u0645\u0627\u0645\u06CC \u062F\u0631\u062E\u0648\u0627\u0633\u062A\u200C\u0647\u0627 \u0627\u0632 \u0642\u0628\u06CC\u0644 \u062F\u0627\u0626\u0631\u06CC\u060C \u062C\u0645\u0639\u200C\u0622\u0648\u0631\u06CC \u0648 ...\r\n          </span>\r\n        </mat-card-subtitle> -->\r\n      </mat-card-header>\r\n\r\n      <div fxLayout=\"row wrap\" fxLayoutGap=\"10px\" fxLayoutAlign=\"start\">\r\n\r\n        <button fxFlex.lt-lg=\"18\" fxFlex.lg=\"23.5\" fxFlex.md=\"31\" fxFlex.sm=\"48\" fxFlex.xs=\"100\" class='link'\r\n          mat-raised-button [routerLink]=\"['edit' ,  config.Name]\" *ngFor=\"let config of (configs | async)\">\r\n          <div fxLayout='column' fxLayoutAlign='center center'>\r\n            <mat-icon color='primary'>settings</mat-icon>\r\n            <h3 class='title'>{{config.Name}}</h3>\r\n          </div>\r\n        </button>\r\n\r\n      </div>\r\n\r\n    </mat-card>\r\n  </div>\r\n</div>",
                    styles: [":host{width:100%}.config-box{margin:15px}button.link{padding:25px 15px;margin:.5%;box-sizing:border-box}button mat-icon{font-size:34px;width:34px;height:34px}"]
                }] }
    ];
    /** @nocollapse */
    ConfigsComponent.ctorParameters = function () { return [
        { type: Store }
    ]; };
    return ConfigsComponent;
}());
export { ConfigsComponent };
if (false) {
    /** @type {?} */
    ConfigsComponent.prototype.configs;
    /** @type {?} */
    ConfigsComponent.prototype.store;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlncy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2NvbmZpZy8iLCJzb3VyY2VzIjpbImxpYi9zbWFydC1jb21wb25lbnRzL2NvbmZpZ3MvY29uZmlncy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFbEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUdwQyxPQUFPLEVBQUUsVUFBVSxFQUFnQixNQUFNLGdCQUFnQixDQUFDOztJQVN6RCwwQkFBb0IsS0FBMEI7UUFBMUIsVUFBSyxHQUFMLEtBQUssQ0FBcUI7UUFDN0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztLQUM3Qzs7Z0JBVEQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxTQUFTO29CQUNuQiwwa0RBQXVDOztpQkFFdkM7Ozs7Z0JBVFEsS0FBSzs7MkJBRmQ7O1NBWWEsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgQ29uZmlnTW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IGdldENvbmZpZ3MsIEZlYXR1cmVTdGF0ZSB9IGZyb20gXCIuLi8uLi9yZWR1Y2Vyc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiY29uZmlnc1wiLFxyXG5cdHRlbXBsYXRlVXJsOiBcIi4vY29uZmlncy5jb21wb25lbnQuaHRtbFwiLFxyXG5cdHN0eWxlVXJsczogWyBcIi4vY29uZmlncy5jb21wb25lbnQuc2Nzc1wiIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENvbmZpZ3NDb21wb25lbnQge1xyXG5cdGNvbmZpZ3M6IE9ic2VydmFibGU8Q29uZmlnTW9kZWw8YW55PltdPjtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlU3RhdGU+KSB7XHJcblx0XHR0aGlzLmNvbmZpZ3MgPSB0aGlzLnN0b3JlLnNlbGVjdChnZXRDb25maWdzKTtcclxuXHR9XHJcbn1cclxuIl19