/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { TitleChangedAction } from "../../actions";
import { getTitle } from "../../reducers";
import { Router, NavigationEnd } from "@angular/router";
export class TitleComponent {
    /**
     * @param {?} store
     * @param {?} router
     */
    constructor(store, router) {
        this.store = store;
        this.router = router;
        this.mapper = [];
        // this.mapper.push((event: NavigationEnd) => {
        //     return (event.url.endsWith('profile-edit')) ? 'ویرایش اطلاعات کاربری' : null;
        // });
        // this.mapper.push((event: NavigationEnd) => {
        //     return (event.url.endsWith('success-payment-report')) ? 'گزارش پرداخت های موفق' : null;
        // });
        // this.mapper.push((event: NavigationEnd) => {
        //     return (event.url.endsWith('failed-login-report')) ? 'گزارش خطاها' : null;
        // });
        // this.mapper.push((event: NavigationEnd) => {
        //     return (event.url.endsWith('active-session-info')) ? 'جزئیات بسته فعال' : null;
        // });
        // this.mapper.push((event: NavigationEnd) => {
        //     return (event.url.endsWith('session-detail-report')) ? 'جزئیات اتصال' : null;
        // });
        // this.mapper.push((event: NavigationEnd) => {
        //     return (event.url.endsWith('daily-session-report')) ? 'گزارش تجمیعی روزانه' : null;
        // });
        // this.mapper.push((event: NavigationEnd) => {
        //     return (event.url.endsWith('monthly-session-report')) ? 'گزارش تجمیعی ماهانه' : null;
        // });
        // this.mapper.push((event: NavigationEnd) => {
        //     return (event.url.startsWith('/packages/user-packages')) ? 'لیست پکیج ها' : null;
        // });
        // this.mapper.push((event: NavigationEnd) => {
        //     return (event.url.endsWith('/change-password')) ? 'تغییر کلمه عبور' : null;
        // });
        this.title$ = this.store.select(getTitle);
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                /** @type {?} */
                var title = "";
                this.mapper.forEach(mapper => {
                    /** @type {?} */
                    let res = mapper(event);
                    if (res) {
                        title = res;
                        return true;
                    }
                    else {
                        return false;
                    }
                });
                this.store.dispatch(new TitleChangedAction("" + title || ""));
            }
        });
    }
}
TitleComponent.decorators = [
    { type: Component, args: [{
                selector: "app-title",
                template: "<div id=\"title\">\r\n    {{title$ | async}}\r\n</div>",
                styles: ["#title{margin-right:-30px;font-weight:bolder;font-size:13px;padding:18px 40px}"]
            }] }
];
/** @nocollapse */
TitleComponent.ctorParameters = () => [
    { type: Store },
    { type: Router }
];
if (false) {
    /** @type {?} */
    TitleComponent.prototype.title$;
    /** @type {?} */
    TitleComponent.prototype.mapper;
    /**
     * @type {?}
     * @private
     */
    TitleComponent.prototype.store;
    /**
     * @type {?}
     * @private
     */
    TitleComponent.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGl0bGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9sYXlvdXQvIiwic291cmNlcyI6WyJsaWIvZHVtYi1jb21wb25lbnRzL3RpdGxlL3RpdGxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBR3BDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQWdCLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXhELE9BQU8sRUFBUyxNQUFNLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFPL0QsTUFBTSxPQUFPLGNBQWM7Ozs7O0lBSTFCLFlBQW9CLEtBQTBCLEVBQVUsTUFBYztRQUFsRCxVQUFLLEdBQUwsS0FBSyxDQUFxQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDckUsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDakIsK0NBQStDO1FBQy9DLG9GQUFvRjtRQUNwRixNQUFNO1FBQ04sK0NBQStDO1FBQy9DLDhGQUE4RjtRQUM5RixNQUFNO1FBQ04sK0NBQStDO1FBQy9DLGlGQUFpRjtRQUNqRixNQUFNO1FBQ04sK0NBQStDO1FBQy9DLHNGQUFzRjtRQUN0RixNQUFNO1FBQ04sK0NBQStDO1FBQy9DLG9GQUFvRjtRQUNwRixNQUFNO1FBQ04sK0NBQStDO1FBQy9DLDBGQUEwRjtRQUMxRixNQUFNO1FBQ04sK0NBQStDO1FBQy9DLDRGQUE0RjtRQUM1RixNQUFNO1FBQ04sK0NBQStDO1FBQy9DLHdGQUF3RjtRQUN4RixNQUFNO1FBQ04sK0NBQStDO1FBQy9DLGtGQUFrRjtRQUNsRixNQUFNO1FBRU4sSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUUxQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDcEMsSUFBSSxLQUFLLFlBQVksYUFBYSxFQUFFOztvQkFDL0IsS0FBSyxHQUFHLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7O3dCQUN4QixHQUFHLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztvQkFDdkIsSUFBSSxHQUFHLEVBQUU7d0JBQ1IsS0FBSyxHQUFHLEdBQUcsQ0FBQzt3QkFDWixPQUFPLElBQUksQ0FBQztxQkFDWjt5QkFBTTt3QkFDTixPQUFPLEtBQUssQ0FBQztxQkFDYjtnQkFDRixDQUFDLENBQUMsQ0FBQztnQkFFSCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLGtCQUFrQixDQUFDLEVBQUUsR0FBRyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQzthQUM5RDtRQUNGLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQzs7O1lBekRELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsV0FBVztnQkFDckIsa0VBQXFDOzthQUVyQzs7OztZQVpRLEtBQUs7WUFNRSxNQUFNOzs7O0lBUXJCLGdDQUEyQjs7SUFDM0IsZ0NBQTJDOzs7OztJQUUvQiwrQkFBa0M7Ozs7O0lBQUUsZ0NBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5cclxuaW1wb3J0IHsgVGl0bGVDaGFuZ2VkQWN0aW9uIH0gZnJvbSBcIi4uLy4uL2FjdGlvbnNcIjtcclxuaW1wb3J0IHsgRmVhdHVyZVN0YXRlLCBnZXRUaXRsZSB9IGZyb20gXCIuLi8uLi9yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZSwgUm91dGVyLCBOYXZpZ2F0aW9uRW5kIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiYXBwLXRpdGxlXCIsXHJcblx0dGVtcGxhdGVVcmw6IFwiLi90aXRsZS5jb21wb25lbnQuaHRtbFwiLFxyXG5cdHN0eWxlVXJsczogWyBcIi4vdGl0bGUuY29tcG9uZW50LnNjc3NcIiBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUaXRsZUNvbXBvbmVudCB7XHJcblx0dGl0bGUkOiBPYnNlcnZhYmxlPHN0cmluZz47XHJcblx0bWFwcGVyOiB7ICh2YWw6IE5hdmlnYXRpb25FbmQpOiBzdHJpbmcgfVtdO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlU3RhdGU+LCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcblx0XHR0aGlzLm1hcHBlciA9IFtdO1xyXG5cdFx0Ly8gdGhpcy5tYXBwZXIucHVzaCgoZXZlbnQ6IE5hdmlnYXRpb25FbmQpID0+IHtcclxuXHRcdC8vICAgICByZXR1cm4gKGV2ZW50LnVybC5lbmRzV2l0aCgncHJvZmlsZS1lZGl0JykpID8gJ9mI24zYsdin24zYtCDYp9i32YTYp9i52KfYqiDaqdin2LHYqNix24wnIDogbnVsbDtcclxuXHRcdC8vIH0pO1xyXG5cdFx0Ly8gdGhpcy5tYXBwZXIucHVzaCgoZXZlbnQ6IE5hdmlnYXRpb25FbmQpID0+IHtcclxuXHRcdC8vICAgICByZXR1cm4gKGV2ZW50LnVybC5lbmRzV2l0aCgnc3VjY2Vzcy1wYXltZW50LXJlcG9ydCcpKSA/ICfar9iy2KfYsdi0INm+2LHYr9in2K7YqiDZh9in24wg2YXZiNmB2YInIDogbnVsbDtcclxuXHRcdC8vIH0pO1xyXG5cdFx0Ly8gdGhpcy5tYXBwZXIucHVzaCgoZXZlbnQ6IE5hdmlnYXRpb25FbmQpID0+IHtcclxuXHRcdC8vICAgICByZXR1cm4gKGV2ZW50LnVybC5lbmRzV2l0aCgnZmFpbGVkLWxvZ2luLXJlcG9ydCcpKSA/ICfar9iy2KfYsdi0INiu2LfYp9mH2KcnIDogbnVsbDtcclxuXHRcdC8vIH0pO1xyXG5cdFx0Ly8gdGhpcy5tYXBwZXIucHVzaCgoZXZlbnQ6IE5hdmlnYXRpb25FbmQpID0+IHtcclxuXHRcdC8vICAgICByZXR1cm4gKGV2ZW50LnVybC5lbmRzV2l0aCgnYWN0aXZlLXNlc3Npb24taW5mbycpKSA/ICfYrNiy2KbbjNin2Kog2KjYs9iq2Ycg2YHYudin2YQnIDogbnVsbDtcclxuXHRcdC8vIH0pO1xyXG5cdFx0Ly8gdGhpcy5tYXBwZXIucHVzaCgoZXZlbnQ6IE5hdmlnYXRpb25FbmQpID0+IHtcclxuXHRcdC8vICAgICByZXR1cm4gKGV2ZW50LnVybC5lbmRzV2l0aCgnc2Vzc2lvbi1kZXRhaWwtcmVwb3J0JykpID8gJ9is2LLYptuM2KfYqiDYp9iq2LXYp9mEJyA6IG51bGw7XHJcblx0XHQvLyB9KTtcclxuXHRcdC8vIHRoaXMubWFwcGVyLnB1c2goKGV2ZW50OiBOYXZpZ2F0aW9uRW5kKSA9PiB7XHJcblx0XHQvLyAgICAgcmV0dXJuIChldmVudC51cmwuZW5kc1dpdGgoJ2RhaWx5LXNlc3Npb24tcmVwb3J0JykpID8gJ9qv2LLYp9ix2LQg2KrYrNmF24zYuduMINix2YjYstin2YbZhycgOiBudWxsO1xyXG5cdFx0Ly8gfSk7XHJcblx0XHQvLyB0aGlzLm1hcHBlci5wdXNoKChldmVudDogTmF2aWdhdGlvbkVuZCkgPT4ge1xyXG5cdFx0Ly8gICAgIHJldHVybiAoZXZlbnQudXJsLmVuZHNXaXRoKCdtb250aGx5LXNlc3Npb24tcmVwb3J0JykpID8gJ9qv2LLYp9ix2LQg2KrYrNmF24zYuduMINmF2KfZh9in2YbZhycgOiBudWxsO1xyXG5cdFx0Ly8gfSk7XHJcblx0XHQvLyB0aGlzLm1hcHBlci5wdXNoKChldmVudDogTmF2aWdhdGlvbkVuZCkgPT4ge1xyXG5cdFx0Ly8gICAgIHJldHVybiAoZXZlbnQudXJsLnN0YXJ0c1dpdGgoJy9wYWNrYWdlcy91c2VyLXBhY2thZ2VzJykpID8gJ9mE24zYs9iqINm+2qnbjNisINmH2KcnIDogbnVsbDtcclxuXHRcdC8vIH0pO1xyXG5cdFx0Ly8gdGhpcy5tYXBwZXIucHVzaCgoZXZlbnQ6IE5hdmlnYXRpb25FbmQpID0+IHtcclxuXHRcdC8vICAgICByZXR1cm4gKGV2ZW50LnVybC5lbmRzV2l0aCgnL2NoYW5nZS1wYXNzd29yZCcpKSA/ICfYqti624zbjNixINqp2YTZhdmHINi52KjZiNixJyA6IG51bGw7XHJcblx0XHQvLyB9KTtcclxuXHJcblx0XHR0aGlzLnRpdGxlJCA9IHRoaXMuc3RvcmUuc2VsZWN0KGdldFRpdGxlKTtcclxuXHJcblx0XHR0aGlzLnJvdXRlci5ldmVudHMuc3Vic2NyaWJlKGV2ZW50ID0+IHtcclxuXHRcdFx0aWYgKGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCkge1xyXG5cdFx0XHRcdHZhciB0aXRsZSA9IFwiXCI7XHJcblx0XHRcdFx0dGhpcy5tYXBwZXIuZm9yRWFjaChtYXBwZXIgPT4ge1xyXG5cdFx0XHRcdFx0bGV0IHJlcyA9IG1hcHBlcihldmVudCk7XHJcblx0XHRcdFx0XHRpZiAocmVzKSB7XHJcblx0XHRcdFx0XHRcdHRpdGxlID0gcmVzO1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVGl0bGVDaGFuZ2VkQWN0aW9uKFwiXCIgKyB0aXRsZSB8fCBcIlwiKSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG4iXX0=