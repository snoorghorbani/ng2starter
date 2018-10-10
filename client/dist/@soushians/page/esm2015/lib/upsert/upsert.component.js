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
                template: `<div fxLayout="row" fxLayoutAlign="center center" class="main-container">
    <mat-card fxFlex="50">
        <mat-card-header>
            <mat-card-title fxLayout="row" fxLayoutGap="5px">
                <mat-icon>receipt</mat-icon>
                <span>ایجاد صفحه جدید</span>
            </mat-card-title>
            <mat-card-subtitle fxLayout="row" fxLayoutAlign="space-between center">
                <span>
                    نام صفحه را وارد نمایید و به مرحله بعد بروید ...
                </span>
            </mat-card-subtitle>
        </mat-card-header>

        <mat-card-content [formGroup]="formGroup">
            <mat-form-field>
                <input type="text" matInput placeholder="نام" formControlName="name">
            </mat-form-field>
        </mat-card-content>
        <mat-card-actions align="end">
            <button mat-raised-button color="primary" (click)="upsert()">ثبت</button>
        </mat-card-actions>
    </mat-card>
</div>`
            },] },
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBzZXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvcGFnZS8iLCJzb3VyY2VzIjpbImxpYi91cHNlcnQvdXBzZXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFHcEMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFeEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRWpELE9BQU8sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzFELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQTRCdkQsTUFBTTs7Ozs7O0lBR0wsWUFBb0IsS0FBc0IsRUFBVSxLQUFxQixFQUFVLE9BQW9CO1FBQW5GLFVBQUssR0FBTCxLQUFLLENBQWlCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFhO1FBQ3RHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztLQUN2Qjs7Ozs7SUFLRCxNQUFNO1FBQ0wsUUFBUSxDQUFDOztRQUNULE1BQU0sSUFBSSxxQkFDTixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFDdEI7UUFDRixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7S0FDckQ7Ozs7SUFDRCxRQUFRO1FBQ1AsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyw4QkFBOEIsRUFBRSxDQUFDO0tBQ3RDOzs7OztJQUtELGVBQWU7UUFDZCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksU0FBUyxDQUFDO1lBQzlCLEdBQUcsRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLENBQUM7WUFDeEIsSUFBSSxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQztZQUN6QixJQUFJLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDO1NBQ3pCLENBQUMsQ0FBQztLQUNIOzs7O0lBRUQsWUFBWTtRQUNYLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUNsQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQ2IsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLElBQUksU0FBUyxDQUFDLEVBQ25DLFNBQVMsQ0FBQyxDQUFDLElBQVksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsRUFDNUQsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLElBQUksU0FBUyxDQUFDLENBQ25DLENBQUM7S0FDRjs7OztJQUNELDhCQUE4QjtRQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQzdCLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2hDLENBQUMsQ0FBQztLQUNIOzs7WUF2RUQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0F1Qko7YUFDTjs7OztZQW5DUSxLQUFLO1lBS0wsY0FBYztZQUdkLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5pbXBvcnQgeyBVcHNlcnRQYWdlU3RhcnRBY3Rpb24gfSBmcm9tIFwiLi4vc2VydmljZXMvYXBpXCI7XHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uL3BhZ2UucmVkdWNlclwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUGFnZU1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9wYWdlLm1vZGVsXCI7XHJcbmltcG9ydCB7IHBsdWNrLCBzd2l0Y2hNYXAsIGZpbHRlciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBQYWdlU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9wYWdlLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHRlbXBsYXRlOiBgPGRpdiBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCIgY2xhc3M9XCJtYWluLWNvbnRhaW5lclwiPlxyXG4gICAgPG1hdC1jYXJkIGZ4RmxleD1cIjUwXCI+XHJcbiAgICAgICAgPG1hdC1jYXJkLWhlYWRlcj5cclxuICAgICAgICAgICAgPG1hdC1jYXJkLXRpdGxlIGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRHYXA9XCI1cHhcIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtaWNvbj5yZWNlaXB0PC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPtin24zYrNin2K8g2LXZgdit2Ycg2KzYr9uM2K88L3NwYW4+XHJcbiAgICAgICAgICAgIDwvbWF0LWNhcmQtdGl0bGU+XHJcbiAgICAgICAgICAgIDxtYXQtY2FyZC1zdWJ0aXRsZSBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0QWxpZ249XCJzcGFjZS1iZXR3ZWVuIGNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAg2YbYp9mFINi12YHYrdmHINix2Kcg2YjYp9ix2K8g2YbZhdin24zbjNivINmIINio2Ycg2YXYsdit2YTZhyDYqNi52K8g2KjYsdmI24zYryAuLi5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9tYXQtY2FyZC1zdWJ0aXRsZT5cclxuICAgICAgICA8L21hdC1jYXJkLWhlYWRlcj5cclxuXHJcbiAgICAgICAgPG1hdC1jYXJkLWNvbnRlbnQgW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIj5cclxuICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLZhtin2YVcIiBmb3JtQ29udHJvbE5hbWU9XCJuYW1lXCI+XHJcbiAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPC9tYXQtY2FyZC1jb250ZW50PlxyXG4gICAgICAgIDxtYXQtY2FyZC1hY3Rpb25zIGFsaWduPVwiZW5kXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cInVwc2VydCgpXCI+2KvYqNiqPC9idXR0b24+XHJcbiAgICAgICAgPC9tYXQtY2FyZC1hY3Rpb25zPlxyXG4gICAgPC9tYXQtY2FyZD5cclxuPC9kaXY+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVXBzZXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRmb3JtR3JvdXA6IEZvcm1Hcm91cDtcclxuXHRwYWdlJDogT2JzZXJ2YWJsZTxQYWdlTW9kZWw+O1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPEFwcFN0YXRlPiwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgc2VydmljZTogUGFnZVNlcnZpY2UpIHtcclxuXHRcdHRoaXMuX2luaXRfZm9ybWdyb3VwKCk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiB2aWV3IG1ldGhvZHNcclxuXHQgKi9cclxuXHR1cHNlcnQoKSB7XHJcblx0XHRkZWJ1Z2dlcjtcclxuXHRcdGNvbnN0IHBhZ2UgPSB7XHJcblx0XHRcdC4uLnRoaXMuZm9ybUdyb3VwLnZhbHVlXHJcblx0XHR9O1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVXBzZXJ0UGFnZVN0YXJ0QWN0aW9uKHBhZ2UpKTtcclxuXHR9XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLl9zZWxlY3RfcGFnZSgpO1xyXG5cdFx0dGhpcy5fdXBkYXRlX2Zvcm1ncm91cF9iYXNlX29uX3BhZ2UoKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIHByaXZhdGUgbWV0aG9kc1xyXG5cdCAqL1xyXG5cdF9pbml0X2Zvcm1ncm91cCgpIHtcclxuXHRcdHRoaXMuZm9ybUdyb3VwID0gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdF9pZDogbmV3IEZvcm1Db250cm9sKFwiXCIpLFxyXG5cdFx0XHRuYW1lOiBuZXcgRm9ybUNvbnRyb2woXCJcIiksXHJcblx0XHRcdGdyaWQ6IG5ldyBGb3JtQ29udHJvbChcIlwiKVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRfc2VsZWN0X3BhZ2UoKSB7XHJcblx0XHR0aGlzLnBhZ2UkID0gdGhpcy5yb3V0ZS5wYXJhbXMucGlwZShcclxuXHRcdFx0cGx1Y2soXCJuYW1lXCIpLFxyXG5cdFx0XHRmaWx0ZXIoKG5hbWUpID0+IG5hbWUgIT0gdW5kZWZpbmVkKSxcclxuXHRcdFx0c3dpdGNoTWFwKChuYW1lOiBzdHJpbmcpID0+IHRoaXMuc2VydmljZS5zZWxlY3RCeU5hbWUobmFtZSkpLFxyXG5cdFx0XHRmaWx0ZXIoKHBhZ2UpID0+IHBhZ2UgIT0gdW5kZWZpbmVkKVxyXG5cdFx0KTtcclxuXHR9XHJcblx0X3VwZGF0ZV9mb3JtZ3JvdXBfYmFzZV9vbl9wYWdlKCkge1xyXG5cdFx0dGhpcy5wYWdlJC5zdWJzY3JpYmUoKHBhZ2UpID0+IHtcclxuXHRcdFx0dGhpcy5mb3JtR3JvdXAucGF0Y2hWYWx1ZShwYWdlKTtcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG4iXX0=