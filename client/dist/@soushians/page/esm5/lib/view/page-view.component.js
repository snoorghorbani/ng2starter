/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ComponentFactoryResolver, ViewContainerRef, Input } from "@angular/core";
import { Store } from "@ngrx/store";
import { PageService } from "../services/page.service";
import { PageConfigurationService } from "../services/page-configuration.service";
var PageViewComponent = /** @class */ (function () {
    function PageViewComponent(store, service, configurationService, resolver, container) {
        this.store = store;
        this.service = service;
        this.configurationService = configurationService;
        this.resolver = resolver;
        this.container = container;
    }
    Object.defineProperty(PageViewComponent.prototype, "oid", {
        set: /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            this._selectPage(id);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    PageViewComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} id
     * @return {?}
     */
    PageViewComponent.prototype._selectPage = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        this.page$ = this.service.selectById(id);
    };
    PageViewComponent.decorators = [
        { type: Component, args: [{
                    template: ""
                },] },
    ];
    /** @nocollapse */
    PageViewComponent.ctorParameters = function () { return [
        { type: Store },
        { type: PageService },
        { type: PageConfigurationService },
        { type: ComponentFactoryResolver },
        { type: ViewContainerRef }
    ]; };
    PageViewComponent.propDecorators = {
        oid: [{ type: Input }]
    };
    return PageViewComponent;
}());
export { PageViewComponent };
function PageViewComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    PageViewComponent.prototype.page$;
    /** @type {?} */
    PageViewComponent.prototype.component;
    /** @type {?} */
    PageViewComponent.prototype.store;
    /** @type {?} */
    PageViewComponent.prototype.service;
    /** @type {?} */
    PageViewComponent.prototype.configurationService;
    /** @type {?} */
    PageViewComponent.prototype.resolver;
    /** @type {?} */
    PageViewComponent.prototype.container;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvcGFnZS8iLCJzb3VyY2VzIjpbImxpYi92aWV3L3BhZ2Utdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTixTQUFTLEVBR1Qsd0JBQXdCLEVBQ3hCLGdCQUFnQixFQUVoQixLQUFLLEVBQ0wsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUtwQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7O0lBWWpGLDJCQUNRLE9BQ0MsU0FDQSxzQkFDQSxVQUNBO1FBSkQsVUFBSyxHQUFMLEtBQUs7UUFDSixZQUFPLEdBQVAsT0FBTztRQUNQLHlCQUFvQixHQUFwQixvQkFBb0I7UUFDcEIsYUFBUSxHQUFSLFFBQVE7UUFDUixjQUFTLEdBQVQsU0FBUztLQUNkO0lBWkosc0JBQ0ksa0NBQUc7Ozs7O1FBRFAsVUFDUSxFQUFVO1lBQ2pCLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDckI7OztPQUFBOzs7O0lBVUQsb0NBQVE7OztJQUFSLGVBQWE7Ozs7O0lBQ2IsdUNBQVc7Ozs7SUFBWCxVQUFZLEVBQVU7UUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBTSxFQUFFLENBQUMsQ0FBQztLQUM5Qzs7Z0JBcEJELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsRUFBRTtpQkFDWjs7OztnQkFWUSxLQUFLO2dCQUtMLFdBQVc7Z0JBQ1gsd0JBQXdCO2dCQVpoQyx3QkFBd0I7Z0JBQ3hCLGdCQUFnQjs7O3NCQWlCZixLQUFLOzs0QkF0QlA7O1NBcUJhLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcblx0Q29tcG9uZW50LFxyXG5cdE9uSW5pdCxcclxuXHRDb21wb25lbnRSZWYsXHJcblx0Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG5cdFZpZXdDb250YWluZXJSZWYsXHJcblx0RGlyZWN0aXZlLFxyXG5cdElucHV0XHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgcGx1Y2ssIGZpbHRlciwgc3dpdGNoTWFwLCBtYXAsIHN0YXJ0V2l0aCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuaW1wb3J0IHsgUGFnZU1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9wYWdlLm1vZGVsXCI7XHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uL3BhZ2UucmVkdWNlclwiO1xyXG5pbXBvcnQgeyBQYWdlU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9wYWdlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUGFnZUNvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3BhZ2UtY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHR0ZW1wbGF0ZTogXCJcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGFnZVZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdEBJbnB1dCgpXHJcblx0c2V0IG9pZChpZDogc3RyaW5nKSB7XHJcblx0XHR0aGlzLl9zZWxlY3RQYWdlKGlkKTtcclxuXHR9XHJcblx0cGFnZSQ6IE9ic2VydmFibGU8UGFnZU1vZGVsPGFueT4+O1xyXG5cdGNvbXBvbmVudDogQ29tcG9uZW50UmVmPGFueT47XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwdWJsaWMgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPixcclxuXHRcdHByaXZhdGUgc2VydmljZTogUGFnZVNlcnZpY2UsXHJcblx0XHRwcml2YXRlIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBQYWdlQ29uZmlndXJhdGlvblNlcnZpY2UsXHJcblx0XHRwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcblx0XHRwcml2YXRlIGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZlxyXG5cdCkge31cclxuXHRuZ09uSW5pdCgpIHt9XHJcblx0X3NlbGVjdFBhZ2UoaWQ6IHN0cmluZykge1xyXG5cdFx0dGhpcy5wYWdlJCA9IHRoaXMuc2VydmljZS5zZWxlY3RCeUlkPGFueT4oaWQpO1xyXG5cdH1cclxufVxyXG4iXX0=