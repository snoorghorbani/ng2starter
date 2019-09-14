/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Store } from "@ngrx/store";
import { UpsertPageStartAction } from "../services/api";
import { ActivatedRoute } from "@angular/router";
import { pluck, switchMap, filter } from "rxjs/operators";
import { PageService } from "../services/page.service";
export class UpsertComponent {
    /**
     * @param {?} store
     * @param {?} route
     * @param {?} service
     */
    constructor(store, route, service) {
        this.store = store;
        this.route = route;
        this.service = service;
        this._init_formgroup();
    }
    /**
     * view methods
     * @return {?}
     */
    upsert() {
        debugger;
        /** @type {?} */
        const page = Object.assign({}, this.formGroup.value);
        this.store.dispatch(new UpsertPageStartAction(page));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._select_page();
        this._update_formgroup_base_on_page();
    }
    /**
     * private methods
     * @return {?}
     */
    _init_formgroup() {
        this.formGroup = new FormGroup({
            _id: new FormControl(""),
            name: new FormControl(""),
            grid: new FormControl("")
        });
    }
    /**
     * @return {?}
     */
    _select_page() {
        this.page$ = this.route.params.pipe(pluck("name"), filter((/**
         * @param {?} name
         * @return {?}
         */
        (name) => name != undefined)), switchMap((/**
         * @param {?} name
         * @return {?}
         */
        (name) => this.service.selectByName(name))), filter((/**
         * @param {?} page
         * @return {?}
         */
        (page) => page != undefined)));
    }
    /**
     * @return {?}
     */
    _update_formgroup_base_on_page() {
        this.page$.subscribe((/**
         * @param {?} page
         * @return {?}
         */
        (page) => {
            this.formGroup.patchValue(page);
        }));
    }
}
UpsertComponent.decorators = [
    { type: Component, args: [{
                template: "<div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"main-container\">\r\n    <mat-card fxFlex=\"50\">\r\n        <mat-card-header>\r\n            <mat-card-title fxLayout=\"row\" fxLayoutGap=\"5px\">\r\n                <mat-icon>receipt</mat-icon>\r\n                <span>\u0627\u06CC\u062C\u0627\u062F \u0635\u0641\u062D\u0647 \u062C\u062F\u06CC\u062F</span>\r\n            </mat-card-title>\r\n            <mat-card-subtitle fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                <span>\r\n                    \u0646\u0627\u0645 \u0635\u0641\u062D\u0647 \u0631\u0627 \u0648\u0627\u0631\u062F \u0646\u0645\u0627\u06CC\u06CC\u062F \u0648 \u0628\u0647 \u0645\u0631\u062D\u0644\u0647 \u0628\u0639\u062F \u0628\u0631\u0648\u06CC\u062F ...\r\n                </span>\r\n            </mat-card-subtitle>\r\n        </mat-card-header>\r\n\r\n        <mat-card-content [formGroup]=\"formGroup\">\r\n            <mat-form-field>\r\n                <input type=\"text\" matInput placeholder=\"\u0646\u0627\u0645\" formControlName=\"name\">\r\n            </mat-form-field>\r\n        </mat-card-content>\r\n        <mat-card-actions align=\"end\">\r\n            <button mat-raised-button color=\"primary\" (click)=\"upsert()\">\u062B\u0628\u062A</button>\r\n        </mat-card-actions>\r\n    </mat-card>\r\n</div>"
            }] }
];
/** @nocollapse */
UpsertComponent.ctorParameters = () => [
    { type: Store },
    { type: ActivatedRoute },
    { type: PageService }
];
if (false) {
    /** @type {?} */
    UpsertComponent.prototype.formGroup;
    /** @type {?} */
    UpsertComponent.prototype.page$;
    /**
     * @type {?}
     * @private
     */
    UpsertComponent.prototype.store;
    /**
     * @type {?}
     * @private
     */
    UpsertComponent.prototype.route;
    /**
     * @type {?}
     * @private
     */
    UpsertComponent.prototype.service;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBzZXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvcGFnZS8iLCJzb3VyY2VzIjpbImxpYi91cHNlcnQvdXBzZXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFHcEMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFeEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRWpELE9BQU8sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzFELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUt2RCxNQUFNLE9BQU8sZUFBZTs7Ozs7O0lBRzNCLFlBQW9CLEtBQXNCLEVBQVUsS0FBcUIsRUFBVSxPQUFvQjtRQUFuRixVQUFLLEdBQUwsS0FBSyxDQUFpQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBYTtRQUN0RyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFLRCxNQUFNO1FBQ0wsUUFBUSxDQUFDOztjQUNILElBQUkscUJBQ04sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQ3ZCO1FBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3RELENBQUM7Ozs7SUFDRCxRQUFRO1FBQ1AsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyw4QkFBOEIsRUFBRSxDQUFDO0lBQ3ZDLENBQUM7Ozs7O0lBS0QsZUFBZTtRQUNkLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxTQUFTLENBQUM7WUFDOUIsR0FBRyxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQztZQUN4QixJQUFJLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDO1lBQ3pCLElBQUksRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLENBQUM7U0FDekIsQ0FBQyxDQUFDO0lBQ0osQ0FBQzs7OztJQUVELFlBQVk7UUFDWCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDbEMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUNiLE1BQU07Ozs7UUFBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxJQUFJLFNBQVMsRUFBQyxFQUNuQyxTQUFTOzs7O1FBQUMsQ0FBQyxJQUFZLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFDLEVBQzVELE1BQU07Ozs7UUFBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxJQUFJLFNBQVMsRUFBQyxDQUNuQyxDQUFDO0lBQ0gsQ0FBQzs7OztJQUNELDhCQUE4QjtRQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQzdCLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pDLENBQUMsRUFBQyxDQUFDO0lBQ0osQ0FBQzs7O1lBaERELFNBQVMsU0FBQztnQkFDVixzMENBQXNDO2FBQ3RDOzs7O1lBWlEsS0FBSztZQUtMLGNBQWM7WUFHZCxXQUFXOzs7O0lBTW5CLG9DQUFxQjs7SUFDckIsZ0NBQTZCOzs7OztJQUNqQixnQ0FBOEI7Ozs7O0lBQUUsZ0NBQTZCOzs7OztJQUFFLGtDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmltcG9ydCB7IFVwc2VydFBhZ2VTdGFydEFjdGlvbiB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hcGlcIjtcclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vcGFnZS5yZWR1Y2VyXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBQYWdlTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3BhZ2UubW9kZWxcIjtcclxuaW1wb3J0IHsgcGx1Y2ssIHN3aXRjaE1hcCwgZmlsdGVyIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IFBhZ2VTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3BhZ2Uuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0dGVtcGxhdGVVcmw6IFwiLi91cHNlcnQuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgVXBzZXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRmb3JtR3JvdXA6IEZvcm1Hcm91cDtcclxuXHRwYWdlJDogT2JzZXJ2YWJsZTxQYWdlTW9kZWw+O1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPiwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgc2VydmljZTogUGFnZVNlcnZpY2UpIHtcclxuXHRcdHRoaXMuX2luaXRfZm9ybWdyb3VwKCk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiB2aWV3IG1ldGhvZHNcclxuXHQgKi9cclxuXHR1cHNlcnQoKSB7XHJcblx0XHRkZWJ1Z2dlcjtcclxuXHRcdGNvbnN0IHBhZ2UgPSB7XHJcblx0XHRcdC4uLnRoaXMuZm9ybUdyb3VwLnZhbHVlXHJcblx0XHR9O1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVXBzZXJ0UGFnZVN0YXJ0QWN0aW9uKHBhZ2UpKTtcclxuXHR9XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLl9zZWxlY3RfcGFnZSgpO1xyXG5cdFx0dGhpcy5fdXBkYXRlX2Zvcm1ncm91cF9iYXNlX29uX3BhZ2UoKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIHByaXZhdGUgbWV0aG9kc1xyXG5cdCAqL1xyXG5cdF9pbml0X2Zvcm1ncm91cCgpIHtcclxuXHRcdHRoaXMuZm9ybUdyb3VwID0gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdF9pZDogbmV3IEZvcm1Db250cm9sKFwiXCIpLFxyXG5cdFx0XHRuYW1lOiBuZXcgRm9ybUNvbnRyb2woXCJcIiksXHJcblx0XHRcdGdyaWQ6IG5ldyBGb3JtQ29udHJvbChcIlwiKVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRfc2VsZWN0X3BhZ2UoKSB7XHJcblx0XHR0aGlzLnBhZ2UkID0gdGhpcy5yb3V0ZS5wYXJhbXMucGlwZShcclxuXHRcdFx0cGx1Y2soXCJuYW1lXCIpLFxyXG5cdFx0XHRmaWx0ZXIoKG5hbWUpID0+IG5hbWUgIT0gdW5kZWZpbmVkKSxcclxuXHRcdFx0c3dpdGNoTWFwKChuYW1lOiBzdHJpbmcpID0+IHRoaXMuc2VydmljZS5zZWxlY3RCeU5hbWUobmFtZSkpLFxyXG5cdFx0XHRmaWx0ZXIoKHBhZ2UpID0+IHBhZ2UgIT0gdW5kZWZpbmVkKVxyXG5cdFx0KTtcclxuXHR9XHJcblx0X3VwZGF0ZV9mb3JtZ3JvdXBfYmFzZV9vbl9wYWdlKCkge1xyXG5cdFx0dGhpcy5wYWdlJC5zdWJzY3JpYmUoKHBhZ2UpID0+IHtcclxuXHRcdFx0dGhpcy5mb3JtR3JvdXAucGF0Y2hWYWx1ZShwYWdlKTtcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG4iXX0=