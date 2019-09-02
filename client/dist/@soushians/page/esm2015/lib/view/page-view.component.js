/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ComponentFactoryResolver, ViewContainerRef } from "@angular/core";
import { Store } from "@ngrx/store";
import { pluck, filter, switchMap } from "rxjs/operators";
import { PageService } from "../services/page.service";
import { ActivatedRoute } from "@angular/router";
export class PageViewComponent {
    /**
     * @param {?} store
     * @param {?} service
     * @param {?} route
     * @param {?} resolver
     * @param {?} container
     */
    constructor(store, service, route, resolver, container) {
        this.store = store;
        this.service = service;
        this.route = route;
        this.resolver = resolver;
        this.container = container;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._selectPage();
    }
    /**
     * @return {?}
     */
    _selectPage() {
        this.page$ = this.route.params.pipe(pluck("name"), switchMap((name) => this.service.selectByName(name)), filter((page) => page != undefined));
    }
}
PageViewComponent.decorators = [
    { type: Component, args: [{
                template: "<div *ngIf=\"(page$ | async)?.grid\">\r\n    <ngs-grid [oid]=\"(page$ | async)?.grid\"></ngs-grid>\r\n</div>"
            }] }
];
/** @nocollapse */
PageViewComponent.ctorParameters = () => [
    { type: Store },
    { type: PageService },
    { type: ActivatedRoute },
    { type: ComponentFactoryResolver },
    { type: ViewContainerRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvcGFnZS8iLCJzb3VyY2VzIjpbImxpYi92aWV3L3BhZ2Utdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTixTQUFTLEVBR1Qsd0JBQXdCLEVBQ3hCLGdCQUFnQixFQUdoQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBa0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUkxRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFdkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBS2pELE1BQU0sT0FBTyxpQkFBaUI7Ozs7Ozs7O0lBRTdCLFlBQ1EsS0FBc0IsRUFDckIsT0FBb0IsRUFDcEIsS0FBcUIsRUFDckIsUUFBa0MsRUFDbEMsU0FBMkI7UUFKNUIsVUFBSyxHQUFMLEtBQUssQ0FBaUI7UUFDckIsWUFBTyxHQUFQLE9BQU8sQ0FBYTtRQUNwQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixhQUFRLEdBQVIsUUFBUSxDQUEwQjtRQUNsQyxjQUFTLEdBQVQsU0FBUyxDQUFrQjtJQUNqQyxDQUFDOzs7O0lBQ0osUUFBUTtRQUNQLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNwQixDQUFDOzs7O0lBQ0QsV0FBVztRQUNWLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUNsQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQ2IsU0FBUyxDQUFDLENBQUMsSUFBWSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUM1RCxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksSUFBSSxTQUFTLENBQUMsQ0FDbkMsQ0FBQztJQUNILENBQUM7OztZQXJCRCxTQUFTLFNBQUM7Z0JBQ1Ysd0hBQXlDO2FBQ3pDOzs7O1lBWFEsS0FBSztZQUtMLFdBQVc7WUFFWCxjQUFjO1lBYnRCLHdCQUF3QjtZQUN4QixnQkFBZ0I7Ozs7SUFrQmhCLGtDQUE2Qjs7SUFFNUIsa0NBQTZCOzs7OztJQUM3QixvQ0FBNEI7Ozs7O0lBQzVCLGtDQUE2Qjs7Ozs7SUFDN0IscUNBQTBDOzs7OztJQUMxQyxzQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG5cdENvbXBvbmVudCxcclxuXHRPbkluaXQsXHJcblx0Q29tcG9uZW50UmVmLFxyXG5cdENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuXHRWaWV3Q29udGFpbmVyUmVmLFxyXG5cdERpcmVjdGl2ZSxcclxuXHRJbnB1dFxyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IHBsdWNrLCBmaWx0ZXIsIHN3aXRjaE1hcCwgbWFwLCBzdGFydFdpdGggfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbmltcG9ydCB7IFBhZ2VNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvcGFnZS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi9wYWdlLnJlZHVjZXJcIjtcclxuaW1wb3J0IHsgUGFnZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvcGFnZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFBhZ2VDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9wYWdlLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHRlbXBsYXRlVXJsOiBcIi4vcGFnZS12aWV3LmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIFBhZ2VWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRwYWdlJDogT2JzZXJ2YWJsZTxQYWdlTW9kZWw+O1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHVibGljIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4sXHJcblx0XHRwcml2YXRlIHNlcnZpY2U6IFBhZ2VTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcblx0XHRwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcblx0XHRwcml2YXRlIGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZlxyXG5cdCkge31cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMuX3NlbGVjdFBhZ2UoKTtcclxuXHR9XHJcblx0X3NlbGVjdFBhZ2UoKSB7XHJcblx0XHR0aGlzLnBhZ2UkID0gdGhpcy5yb3V0ZS5wYXJhbXMucGlwZShcclxuXHRcdFx0cGx1Y2soXCJuYW1lXCIpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoKG5hbWU6IHN0cmluZykgPT4gdGhpcy5zZXJ2aWNlLnNlbGVjdEJ5TmFtZShuYW1lKSksXHJcblx0XHRcdGZpbHRlcigocGFnZSkgPT4gcGFnZSAhPSB1bmRlZmluZWQpXHJcblx0XHQpO1xyXG5cdH1cclxufVxyXG4iXX0=