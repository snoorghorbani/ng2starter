/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
                template: `<div *ngIf="(page$ | async)?.grid">
    <ngs-grid [oid]="(page$ | async)?.grid"></ngs-grid>
</div>`
            },] },
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
    /** @type {?} */
    PageViewComponent.prototype.service;
    /** @type {?} */
    PageViewComponent.prototype.route;
    /** @type {?} */
    PageViewComponent.prototype.resolver;
    /** @type {?} */
    PageViewComponent.prototype.container;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvcGFnZS8iLCJzb3VyY2VzIjpbImxpYi92aWV3L3BhZ2Utdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTixTQUFTLEVBR1Qsd0JBQXdCLEVBQ3hCLGdCQUFnQixFQUdoQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBa0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUkxRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFdkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBT2pELE1BQU0sT0FBTyxpQkFBaUI7Ozs7Ozs7O0lBRTdCLFlBQ1EsT0FDQyxTQUNBLE9BQ0EsVUFDQTtRQUpELFVBQUssR0FBTCxLQUFLO1FBQ0osWUFBTyxHQUFQLE9BQU87UUFDUCxVQUFLLEdBQUwsS0FBSztRQUNMLGFBQVEsR0FBUixRQUFRO1FBQ1IsY0FBUyxHQUFULFNBQVM7S0FDZDs7OztJQUNKLFFBQVE7UUFDUCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDbkI7Ozs7SUFDRCxXQUFXO1FBQ1YsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQ2xDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFDYixTQUFTLENBQUMsQ0FBQyxJQUFZLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQzVELE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxJQUFJLFNBQVMsQ0FBQyxDQUNuQyxDQUFDO0tBQ0Y7OztZQXZCRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFOztPQUVKO2FBQ047Ozs7WUFiUSxLQUFLO1lBS0wsV0FBVztZQUVYLGNBQWM7WUFidEIsd0JBQXdCO1lBQ3hCLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcblx0Q29tcG9uZW50LFxyXG5cdE9uSW5pdCxcclxuXHRDb21wb25lbnRSZWYsXHJcblx0Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG5cdFZpZXdDb250YWluZXJSZWYsXHJcblx0RGlyZWN0aXZlLFxyXG5cdElucHV0XHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgcGx1Y2ssIGZpbHRlciwgc3dpdGNoTWFwLCBtYXAsIHN0YXJ0V2l0aCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuaW1wb3J0IHsgUGFnZU1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9wYWdlLm1vZGVsXCI7XHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uL3BhZ2UucmVkdWNlclwiO1xyXG5pbXBvcnQgeyBQYWdlU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9wYWdlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUGFnZUNvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3BhZ2UtY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0dGVtcGxhdGU6IGA8ZGl2ICpuZ0lmPVwiKHBhZ2UkIHwgYXN5bmMpPy5ncmlkXCI+XHJcbiAgICA8bmdzLWdyaWQgW29pZF09XCIocGFnZSQgfCBhc3luYyk/LmdyaWRcIj48L25ncy1ncmlkPlxyXG48L2Rpdj5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYWdlVmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0cGFnZSQ6IE9ic2VydmFibGU8UGFnZU1vZGVsPjtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHB1YmxpYyBzdG9yZTogU3RvcmU8QXBwU3RhdGU+LFxyXG5cdFx0cHJpdmF0ZSBzZXJ2aWNlOiBQYWdlU2VydmljZSxcclxuXHRcdHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG5cdFx0cHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG5cdFx0cHJpdmF0ZSBjb250YWluZXI6IFZpZXdDb250YWluZXJSZWZcclxuXHQpIHt9XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLl9zZWxlY3RQYWdlKCk7XHJcblx0fVxyXG5cdF9zZWxlY3RQYWdlKCkge1xyXG5cdFx0dGhpcy5wYWdlJCA9IHRoaXMucm91dGUucGFyYW1zLnBpcGUoXHJcblx0XHRcdHBsdWNrKFwibmFtZVwiKSxcclxuXHRcdFx0c3dpdGNoTWFwKChuYW1lOiBzdHJpbmcpID0+IHRoaXMuc2VydmljZS5zZWxlY3RCeU5hbWUobmFtZSkpLFxyXG5cdFx0XHRmaWx0ZXIoKHBhZ2UpID0+IHBhZ2UgIT0gdW5kZWZpbmVkKVxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuIl19