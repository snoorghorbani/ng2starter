/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.havePermission$ = this.store.select(getFrontendAuthenticationState);
    };
    ListViewComponent.decorators = [
        { type: Component, args: [{
                    selector: "widget-list-view",
                    template: "<div fxLayout=\"column\">\r\n  <div class=\"actions\" fxLayout=\"row\" fxFlex fxLayoutAlign=\"end\">\r\n    <button fxFlex=\"nogrow\" mat-icon-button color=\"primary\" *ngIf=\"havePermission$ | async\" [routerLink]=\"['/widget/upsert/links', (widget)?._id]\">\r\n      <mat-icon>edit</mat-icon>\r\n    </button>\r\n  </div>\r\n  <div fxLayout=\"row\" fxFlex fxLayoutAlign=\"end\">\r\n    <h3>\r\n      {{widget.name}}\r\n    </h3>\r\n  </div>\r\n  <mat-list fxLayout=\"column\" fxFlex=\"100\">\r\n    <mat-list-item fxLayout=\"column\" *ngFor=\"let item of (widget)?.Config.list\" fxFlex=\"100\">\r\n      <mat-icon class=\"large-icon\" mat-list-icon>account_box</mat-icon>\r\n      <h4 mat-line> {{item.title}}</h4>\r\n      <p mat-line> {{item.subtitle}} </p>\r\n      <p mat-line> {{item.description}} </p>\r\n    </mat-list-item>\r\n  </mat-list>\r\n</div>",
                    styles: [":host{position:relative;height:100%;display:block}:host:hover .actions{opacity:1;visibility:visible}mat-list a{text-decoration:none}.actions{transition:opacity .4s ease-in-out;opacity:0;visibility:hidden}.actions mat-icon{color:#121212}h3{padding-right:20px}.large-icon{font-size:50px!important;width:50px!important;height:50px!important;color:#999}mat-list{direction:rtl}"]
                }] }
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
    /**
     * @type {?}
     * @private
     */
    ListViewComponent.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0LXR5cGVzLyIsInNvdXJjZXMiOlsibGliL2xpc3QvbGlzdC12aWV3L2xpc3Qtdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRXpELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFHcEMsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFJcEY7SUFRQywyQkFBb0IsS0FBaUI7UUFBakIsVUFBSyxHQUFMLEtBQUssQ0FBWTtJQUFJLENBQUM7Ozs7SUFFMUMsb0NBQVE7OztJQUFSO1FBQ0MsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0lBQzFFLENBQUM7O2dCQVpELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsa0JBQWtCO29CQUM1Qix3MkJBQXlDOztpQkFFekM7Ozs7Z0JBWFEsS0FBSzs7SUFvQmQsd0JBQUM7Q0FBQSxBQWJELElBYUM7U0FSWSxpQkFBaUI7OztJQUM3QixtQ0FBMkM7O0lBQzNDLDRDQUFxQzs7Ozs7SUFDekIsa0NBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBXaWRnZXRNb2RlbCwgSVdpZGdldFZpZXcgfSBmcm9tIFwiQHNvdXNoaWFucy93aWRnZXRcIjtcclxuaW1wb3J0IHsgZ2V0RnJvbnRlbmRBdXRoZW50aWNhdGlvblN0YXRlIH0gZnJvbSBcIkBzb3VzaGlhbnMvZnJvbnRlbmQtYXV0aGVudGljYXRpb25cIjtcclxuXHJcbmltcG9ydCB7IExpc3RXaWRnZXRDb25maWdNb2RlbCB9IGZyb20gXCIuLi9saXN0LXdpZGdldC1jb25maWcubW9kZWxcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcIndpZGdldC1saXN0LXZpZXdcIixcclxuXHR0ZW1wbGF0ZVVybDogXCIuL2xpc3Qtdmlldy5jb21wb25lbnQuaHRtbFwiLFxyXG5cdHN0eWxlVXJsczogW1wiLi9saXN0LXZpZXcuY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIElXaWRnZXRWaWV3PExpc3RXaWRnZXRDb25maWdNb2RlbD4ge1xyXG5cdHdpZGdldDogV2lkZ2V0TW9kZWw8TGlzdFdpZGdldENvbmZpZ01vZGVsPjtcclxuXHRoYXZlUGVybWlzc2lvbiQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8YW55PikgeyB9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5oYXZlUGVybWlzc2lvbiQgPSB0aGlzLnN0b3JlLnNlbGVjdChnZXRGcm9udGVuZEF1dGhlbnRpY2F0aW9uU3RhdGUpO1xyXG5cdH1cclxufVxyXG4iXX0=