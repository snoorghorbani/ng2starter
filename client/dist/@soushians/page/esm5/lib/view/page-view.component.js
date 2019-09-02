/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ComponentFactoryResolver, ViewContainerRef } from "@angular/core";
import { Store } from "@ngrx/store";
import { pluck, filter, switchMap } from "rxjs/operators";
import { PageService } from "../services/page.service";
import { ActivatedRoute } from "@angular/router";
var PageViewComponent = /** @class */ (function () {
    function PageViewComponent(store, service, route, resolver, container) {
        this.store = store;
        this.service = service;
        this.route = route;
        this.resolver = resolver;
        this.container = container;
    }
    /**
     * @return {?}
     */
    PageViewComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._selectPage();
    };
    /**
     * @return {?}
     */
    PageViewComponent.prototype._selectPage = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.page$ = this.route.params.pipe(pluck("name"), switchMap(function (name) { return _this.service.selectByName(name); }), filter(function (page) { return page != undefined; }));
    };
    PageViewComponent.decorators = [
        { type: Component, args: [{
                    template: "<div *ngIf=\"(page$ | async)?.grid\">\r\n    <ngs-grid [oid]=\"(page$ | async)?.grid\"></ngs-grid>\r\n</div>"
                }] }
    ];
    /** @nocollapse */
    PageViewComponent.ctorParameters = function () { return [
        { type: Store },
        { type: PageService },
        { type: ActivatedRoute },
        { type: ComponentFactoryResolver },
        { type: ViewContainerRef }
    ]; };
    return PageViewComponent;
}());
export { PageViewComponent };
if (false) {
    /** @type {?} */
    PageViewComponent.prototype.page$;
    /** @type {?} */
    PageViewComponent.prototype.store;
    /**
     * @type {?}
     * @private
     */
    PageViewComponent.prototype.service;
    /**
     * @type {?}
     * @private
     */
    PageViewComponent.prototype.route;
    /**
     * @type {?}
     * @private
     */
    PageViewComponent.prototype.resolver;
    /**
     * @type {?}
     * @private
     */
    PageViewComponent.prototype.container;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvcGFnZS8iLCJzb3VyY2VzIjpbImxpYi92aWV3L3BhZ2Utdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTixTQUFTLEVBR1Qsd0JBQXdCLEVBQ3hCLGdCQUFnQixFQUdoQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBa0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUkxRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFdkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRWpEO0lBS0MsMkJBQ1EsS0FBc0IsRUFDckIsT0FBb0IsRUFDcEIsS0FBcUIsRUFDckIsUUFBa0MsRUFDbEMsU0FBMkI7UUFKNUIsVUFBSyxHQUFMLEtBQUssQ0FBaUI7UUFDckIsWUFBTyxHQUFQLE9BQU8sQ0FBYTtRQUNwQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixhQUFRLEdBQVIsUUFBUSxDQUEwQjtRQUNsQyxjQUFTLEdBQVQsU0FBUyxDQUFrQjtJQUNqQyxDQUFDOzs7O0lBQ0osb0NBQVE7OztJQUFSO1FBQ0MsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFDRCx1Q0FBVzs7O0lBQVg7UUFBQSxpQkFNQztRQUxBLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUNsQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQ2IsU0FBUyxDQUFDLFVBQUMsSUFBWSxJQUFLLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQS9CLENBQStCLENBQUMsRUFDNUQsTUFBTSxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsSUFBSSxJQUFJLFNBQVMsRUFBakIsQ0FBaUIsQ0FBQyxDQUNuQyxDQUFDO0lBQ0gsQ0FBQzs7Z0JBckJELFNBQVMsU0FBQztvQkFDVix3SEFBeUM7aUJBQ3pDOzs7O2dCQVhRLEtBQUs7Z0JBS0wsV0FBVztnQkFFWCxjQUFjO2dCQWJ0Qix3QkFBd0I7Z0JBQ3hCLGdCQUFnQjs7SUFvQ2pCLHdCQUFDO0NBQUEsQUF0QkQsSUFzQkM7U0FuQlksaUJBQWlCOzs7SUFDN0Isa0NBQTZCOztJQUU1QixrQ0FBNkI7Ozs7O0lBQzdCLG9DQUE0Qjs7Ozs7SUFDNUIsa0NBQTZCOzs7OztJQUM3QixxQ0FBMEM7Ozs7O0lBQzFDLHNDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcblx0Q29tcG9uZW50LFxyXG5cdE9uSW5pdCxcclxuXHRDb21wb25lbnRSZWYsXHJcblx0Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG5cdFZpZXdDb250YWluZXJSZWYsXHJcblx0RGlyZWN0aXZlLFxyXG5cdElucHV0XHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgcGx1Y2ssIGZpbHRlciwgc3dpdGNoTWFwLCBtYXAsIHN0YXJ0V2l0aCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuaW1wb3J0IHsgUGFnZU1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9wYWdlLm1vZGVsXCI7XHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uL3BhZ2UucmVkdWNlclwiO1xyXG5pbXBvcnQgeyBQYWdlU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9wYWdlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUGFnZUNvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3BhZ2UtY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0dGVtcGxhdGVVcmw6IFwiLi9wYWdlLXZpZXcuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGFnZVZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdHBhZ2UkOiBPYnNlcnZhYmxlPFBhZ2VNb2RlbD47XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwdWJsaWMgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPixcclxuXHRcdHByaXZhdGUgc2VydmljZTogUGFnZVNlcnZpY2UsXHJcblx0XHRwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuXHRcdHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuXHRcdHByaXZhdGUgY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmXHJcblx0KSB7fVxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5fc2VsZWN0UGFnZSgpO1xyXG5cdH1cclxuXHRfc2VsZWN0UGFnZSgpIHtcclxuXHRcdHRoaXMucGFnZSQgPSB0aGlzLnJvdXRlLnBhcmFtcy5waXBlKFxyXG5cdFx0XHRwbHVjayhcIm5hbWVcIiksXHJcblx0XHRcdHN3aXRjaE1hcCgobmFtZTogc3RyaW5nKSA9PiB0aGlzLnNlcnZpY2Uuc2VsZWN0QnlOYW1lKG5hbWUpKSxcclxuXHRcdFx0ZmlsdGVyKChwYWdlKSA9PiBwYWdlICE9IHVuZGVmaW5lZClcclxuXHRcdCk7XHJcblx0fVxyXG59XHJcbiJdfQ==