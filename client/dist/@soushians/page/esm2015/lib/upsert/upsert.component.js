/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        this.page$ = this.route.params.pipe(pluck("name"), filter((name) => name != undefined), switchMap((name) => this.service.selectByName(name)), filter((page) => page != undefined));
    }
    /**
     * @return {?}
     */
    _update_formgroup_base_on_page() {
        this.page$.subscribe((page) => {
            this.formGroup.patchValue(page);
        });
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
    /** @type {?} */
    UpsertComponent.prototype.store;
    /** @type {?} */
    UpsertComponent.prototype.route;
    /** @type {?} */
    UpsertComponent.prototype.service;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBzZXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvcGFnZS8iLCJzb3VyY2VzIjpbImxpYi91cHNlcnQvdXBzZXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFHcEMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFeEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRWpELE9BQU8sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzFELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUt2RCxNQUFNLE9BQU8sZUFBZTs7Ozs7O0lBRzNCLFlBQW9CLEtBQXNCLEVBQVUsS0FBcUIsRUFBVSxPQUFvQjtRQUFuRixVQUFLLEdBQUwsS0FBSyxDQUFpQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBYTtRQUN0RyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7S0FDdkI7Ozs7O0lBS0QsTUFBTTtRQUNMLFFBQVEsQ0FBQzs7UUFDVCxNQUFNLElBQUkscUJBQ04sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQ3RCO1FBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0tBQ3JEOzs7O0lBQ0QsUUFBUTtRQUNQLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsOEJBQThCLEVBQUUsQ0FBQztLQUN0Qzs7Ozs7SUFLRCxlQUFlO1FBQ2QsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFNBQVMsQ0FBQztZQUM5QixHQUFHLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDO1lBQ3hCLElBQUksRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLENBQUM7WUFDekIsSUFBSSxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQztTQUN6QixDQUFDLENBQUM7S0FDSDs7OztJQUVELFlBQVk7UUFDWCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDbEMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUNiLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxJQUFJLFNBQVMsQ0FBQyxFQUNuQyxTQUFTLENBQUMsQ0FBQyxJQUFZLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQzVELE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxJQUFJLFNBQVMsQ0FBQyxDQUNuQyxDQUFDO0tBQ0Y7Ozs7SUFDRCw4QkFBOEI7UUFDN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNoQyxDQUFDLENBQUM7S0FDSDs7O1lBaERELFNBQVMsU0FBQztnQkFDVixzMENBQXNDO2FBQ3RDOzs7O1lBWlEsS0FBSztZQUtMLGNBQWM7WUFHZCxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0IHsgVXBzZXJ0UGFnZVN0YXJ0QWN0aW9uIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FwaVwiO1xyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi9wYWdlLnJlZHVjZXJcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFBhZ2VNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvcGFnZS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBwbHVjaywgc3dpdGNoTWFwLCBmaWx0ZXIgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgUGFnZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvcGFnZS5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHR0ZW1wbGF0ZVVybDogXCIuL3Vwc2VydC5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVcHNlcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdGZvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG5cdHBhZ2UkOiBPYnNlcnZhYmxlPFBhZ2VNb2RlbD47XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8QXBwU3RhdGU+LCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBzZXJ2aWNlOiBQYWdlU2VydmljZSkge1xyXG5cdFx0dGhpcy5faW5pdF9mb3JtZ3JvdXAoKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIHZpZXcgbWV0aG9kc1xyXG5cdCAqL1xyXG5cdHVwc2VydCgpIHtcclxuXHRcdGRlYnVnZ2VyO1xyXG5cdFx0Y29uc3QgcGFnZSA9IHtcclxuXHRcdFx0Li4udGhpcy5mb3JtR3JvdXAudmFsdWVcclxuXHRcdH07XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVcHNlcnRQYWdlU3RhcnRBY3Rpb24ocGFnZSkpO1xyXG5cdH1cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMuX3NlbGVjdF9wYWdlKCk7XHJcblx0XHR0aGlzLl91cGRhdGVfZm9ybWdyb3VwX2Jhc2Vfb25fcGFnZSgpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogcHJpdmF0ZSBtZXRob2RzXHJcblx0ICovXHJcblx0X2luaXRfZm9ybWdyb3VwKCkge1xyXG5cdFx0dGhpcy5mb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0X2lkOiBuZXcgRm9ybUNvbnRyb2woXCJcIiksXHJcblx0XHRcdG5hbWU6IG5ldyBGb3JtQ29udHJvbChcIlwiKSxcclxuXHRcdFx0Z3JpZDogbmV3IEZvcm1Db250cm9sKFwiXCIpXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdF9zZWxlY3RfcGFnZSgpIHtcclxuXHRcdHRoaXMucGFnZSQgPSB0aGlzLnJvdXRlLnBhcmFtcy5waXBlKFxyXG5cdFx0XHRwbHVjayhcIm5hbWVcIiksXHJcblx0XHRcdGZpbHRlcigobmFtZSkgPT4gbmFtZSAhPSB1bmRlZmluZWQpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoKG5hbWU6IHN0cmluZykgPT4gdGhpcy5zZXJ2aWNlLnNlbGVjdEJ5TmFtZShuYW1lKSksXHJcblx0XHRcdGZpbHRlcigocGFnZSkgPT4gcGFnZSAhPSB1bmRlZmluZWQpXHJcblx0XHQpO1xyXG5cdH1cclxuXHRfdXBkYXRlX2Zvcm1ncm91cF9iYXNlX29uX3BhZ2UoKSB7XHJcblx0XHR0aGlzLnBhZ2UkLnN1YnNjcmliZSgocGFnZSkgPT4ge1xyXG5cdFx0XHR0aGlzLmZvcm1Hcm91cC5wYXRjaFZhbHVlKHBhZ2UpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcbiJdfQ==