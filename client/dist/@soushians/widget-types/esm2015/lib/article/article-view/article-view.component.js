/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { getFrontendAuthenticationState } from "@soushians/frontend-authentication";
export class ArticleViewComponent {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.havePermission$ = this.store.select(getFrontendAuthenticationState);
    }
}
ArticleViewComponent.decorators = [
    { type: Component, args: [{
                selector: "widget-article-view",
                template: "<div fxLayout=\"row\" fxFlex=\"100\" fxLayoutAlign=\"center start\">\r\n  <button mat-mini-fab color=\"accent\" *ngIf=\"havePermission$ | async\" [routerLink]=\"['/widget/upsert/article', (widget)?._id]\">\r\n    <mat-icon>edit</mat-icon>\r\n  </button>\r\n\r\n  <div fxFlex=\"90\" [froalaView]=\"(widget)?.Config.content\" align=\"right\" class=\"article\"></div>\r\n</div>",
                styles: [":host{position:relative;display:block}.mat-mini-fab{position:absolute;top:-20px;right:-20px}.article{direction:rtl;text-align:right;padding-top:25px}"]
            }] }
];
/** @nocollapse */
ArticleViewComponent.ctorParameters = () => [
    { type: Store }
];
if (false) {
    /** @type {?} */
    ArticleViewComponent.prototype.widget;
    /** @type {?} */
    ArticleViewComponent.prototype.havePermission$;
    /**
     * @type {?}
     * @private
     */
    ArticleViewComponent.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJ0aWNsZS12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0LXR5cGVzLyIsInNvdXJjZXMiOlsibGliL2FydGljbGUvYXJ0aWNsZS12aWV3L2FydGljbGUtdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRXpELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFHcEMsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFTcEYsTUFBTSxPQUFPLG9CQUFvQjs7OztJQUloQyxZQUFvQixLQUFpQjtRQUFqQixVQUFLLEdBQUwsS0FBSyxDQUFZO0lBQUcsQ0FBQzs7OztJQUV6QyxRQUFRO1FBQ1AsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0lBQzFFLENBQUM7OztZQWJELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixrWUFBNEM7O2FBRTVDOzs7O1lBWFEsS0FBSzs7OztJQWNiLHNDQUE4Qzs7SUFDOUMsK0NBQXFDOzs7OztJQUN6QixxQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IFdpZGdldE1vZGVsLCBJV2lkZ2V0VmlldyB9IGZyb20gXCJAc291c2hpYW5zL3dpZGdldFwiO1xyXG5pbXBvcnQgeyBnZXRGcm9udGVuZEF1dGhlbnRpY2F0aW9uU3RhdGUgfSBmcm9tIFwiQHNvdXNoaWFucy9mcm9udGVuZC1hdXRoZW50aWNhdGlvblwiO1xyXG5cclxuaW1wb3J0IHsgQXJ0aWNsZVdpZGdldENvbmZpZ01vZGVsIH0gZnJvbSBcIi4uL2FydGljbGUtd2lkZ2V0LWNvbmZpZy5tb2RlbFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwid2lkZ2V0LWFydGljbGUtdmlld1wiLFxyXG5cdHRlbXBsYXRlVXJsOiBcIi4vYXJ0aWNsZS12aWV3LmNvbXBvbmVudC5odG1sXCIsXHJcblx0c3R5bGVVcmxzOiBbIFwiLi9hcnRpY2xlLXZpZXcuY29tcG9uZW50LmNzc1wiIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFydGljbGVWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBJV2lkZ2V0VmlldzxBcnRpY2xlV2lkZ2V0Q29uZmlnTW9kZWw+IHtcclxuXHQvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8taW5wdXQtcmVuYW1lXHJcblx0d2lkZ2V0OiBXaWRnZXRNb2RlbDxBcnRpY2xlV2lkZ2V0Q29uZmlnTW9kZWw+O1xyXG5cdGhhdmVQZXJtaXNzaW9uJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxhbnk+KSB7fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMuaGF2ZVBlcm1pc3Npb24kID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0RnJvbnRlbmRBdXRoZW50aWNhdGlvblN0YXRlKTtcclxuXHR9XHJcbn1cclxuIl19