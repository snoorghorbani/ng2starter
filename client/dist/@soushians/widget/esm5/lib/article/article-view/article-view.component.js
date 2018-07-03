/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { WidgetService } from "@soushians/widget";
var ArticleViewComponent = /** @class */ (function () {
    function ArticleViewComponent(store, service) {
        this.store = store;
        this.service = service;
    }
    /**
     * @return {?}
     */
    ArticleViewComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    ArticleViewComponent.decorators = [
        { type: Component, args: [{
                    selector: "widget-article-view",
                    template: "<mat-card>\n  <mat-card-title>{{widget.name}}</mat-card-title>\n  <mat-card-content>\n    <p>\n      article-view works!\n    </p>\n    <!-- <editor apiKey=\"test\" [init]=\"{plugins: 'link'}\"></editor> -->\n    {{(widget)?.Config.content}}\n  </mat-card-content>\n</mat-card>\n",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    ArticleViewComponent.ctorParameters = function () { return [
        { type: Store },
        { type: WidgetService }
    ]; };
    return ArticleViewComponent;
}());
export { ArticleViewComponent };
function ArticleViewComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    ArticleViewComponent.prototype.widget;
    /** @type {?} */
    ArticleViewComponent.prototype.store;
    /** @type {?} */
    ArticleViewComponent.prototype.service;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJ0aWNsZS12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0LXR5cGVzLyIsInNvdXJjZXMiOlsibGliL2FydGljbGUvYXJ0aWNsZS12aWV3L2FydGljbGUtdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRXpELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFcEMsT0FBTyxFQUFlLGFBQWEsRUFBZSxNQUFNLG1CQUFtQixDQUFDOztJQXNCM0UsOEJBQW9CLEtBQWlCLEVBQVUsT0FBc0I7UUFBakQsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWU7S0FBSTs7OztJQUV6RSx1Q0FBUTs7O0lBQVIsZUFBYTs7Z0JBcEJiLFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUscUJBQXFCO29CQUMvQixRQUFRLEVBQUUseVJBVVY7b0JBQ0EsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO2lCQUNaOzs7O2dCQXBCUSxLQUFLO2dCQUVRLGFBQWE7OytCQUpuQzs7U0F1QmEsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcblxuaW1wb3J0IHsgV2lkZ2V0TW9kZWwsIFdpZGdldFNlcnZpY2UsIElXaWRnZXRWaWV3IH0gZnJvbSBcIkBzb3VzaGlhbnMvd2lkZ2V0XCI7XG5cbmltcG9ydCB7IEFydGljbGVXaWRnZXRDb25maWdNb2RlbCB9IGZyb20gXCIuLi9hcnRpY2xlLXdpZGdldC1jb25maWcubW9kZWxcIjtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcIndpZGdldC1hcnRpY2xlLXZpZXdcIixcblx0dGVtcGxhdGU6IGA8bWF0LWNhcmQ+XG4gIDxtYXQtY2FyZC10aXRsZT57e3dpZGdldC5uYW1lfX08L21hdC1jYXJkLXRpdGxlPlxuICA8bWF0LWNhcmQtY29udGVudD5cbiAgICA8cD5cbiAgICAgIGFydGljbGUtdmlldyB3b3JrcyFcbiAgICA8L3A+XG4gICAgPCEtLSA8ZWRpdG9yIGFwaUtleT1cInRlc3RcIiBbaW5pdF09XCJ7cGx1Z2luczogJ2xpbmsnfVwiPjwvZWRpdG9yPiAtLT5cbiAgICB7eyh3aWRnZXQpPy5Db25maWcuY29udGVudH19XG4gIDwvbWF0LWNhcmQtY29udGVudD5cbjwvbWF0LWNhcmQ+XG5gLFxuXHRzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgQXJ0aWNsZVZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIElXaWRnZXRWaWV3PEFydGljbGVXaWRnZXRDb25maWdNb2RlbD4ge1xuXHQvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8taW5wdXQtcmVuYW1lXG5cdHdpZGdldDogV2lkZ2V0TW9kZWw8QXJ0aWNsZVdpZGdldENvbmZpZ01vZGVsPjtcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8YW55PiwgcHJpdmF0ZSBzZXJ2aWNlOiBXaWRnZXRTZXJ2aWNlKSB7fVxuXG5cdG5nT25Jbml0KCkge31cbn1cbiJdfQ==