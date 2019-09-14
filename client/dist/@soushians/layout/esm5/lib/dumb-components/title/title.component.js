/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { TitleChangedAction } from "../../actions";
import { getTitle } from "../../reducers";
import { Router, NavigationEnd } from "@angular/router";
var TitleComponent = /** @class */ (function () {
    function TitleComponent(store, router) {
        var _this = this;
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
        this.router.events.subscribe(function (event) {
            if (event instanceof NavigationEnd) {
                /** @type {?} */
                var title = "";
                _this.mapper.forEach(function (mapper) {
                    /** @type {?} */
                    var res = mapper(event);
                    if (res) {
                        title = res;
                        return true;
                    }
                    else {
                        return false;
                    }
                });
                _this.store.dispatch(new TitleChangedAction("" + title || ""));
            }
        });
    }
    TitleComponent.decorators = [
        { type: Component, args: [{
                    selector: "app-title",
                    template: "<div id=\"title\">\r\n    {{title$ | async}}\r\n</div>",
                    styles: ["#title{margin-right:-30px;font-weight:bolder;font-size:13px;padding:18px 40px}"]
                }] }
    ];
    /** @nocollapse */
    TitleComponent.ctorParameters = function () { return [
        { type: Store },
        { type: Router }
    ]; };
    return TitleComponent;
}());
export { TitleComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGl0bGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9sYXlvdXQvIiwic291cmNlcyI6WyJsaWIvZHVtYi1jb21wb25lbnRzL3RpdGxlL3RpdGxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBR3BDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQWdCLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXhELE9BQU8sRUFBUyxNQUFNLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0Q7SUFTQyx3QkFBb0IsS0FBMEIsRUFBVSxNQUFjO1FBQXRFLGlCQWdEQztRQWhEbUIsVUFBSyxHQUFMLEtBQUssQ0FBcUI7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ3JFLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLCtDQUErQztRQUMvQyxvRkFBb0Y7UUFDcEYsTUFBTTtRQUNOLCtDQUErQztRQUMvQyw4RkFBOEY7UUFDOUYsTUFBTTtRQUNOLCtDQUErQztRQUMvQyxpRkFBaUY7UUFDakYsTUFBTTtRQUNOLCtDQUErQztRQUMvQyxzRkFBc0Y7UUFDdEYsTUFBTTtRQUNOLCtDQUErQztRQUMvQyxvRkFBb0Y7UUFDcEYsTUFBTTtRQUNOLCtDQUErQztRQUMvQywwRkFBMEY7UUFDMUYsTUFBTTtRQUNOLCtDQUErQztRQUMvQyw0RkFBNEY7UUFDNUYsTUFBTTtRQUNOLCtDQUErQztRQUMvQyx3RkFBd0Y7UUFDeEYsTUFBTTtRQUNOLCtDQUErQztRQUMvQyxrRkFBa0Y7UUFDbEYsTUFBTTtRQUVOLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFMUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsS0FBSztZQUNqQyxJQUFJLEtBQUssWUFBWSxhQUFhLEVBQUU7O29CQUMvQixLQUFLLEdBQUcsRUFBRTtnQkFDZCxLQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFBLE1BQU07O3dCQUNyQixHQUFHLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztvQkFDdkIsSUFBSSxHQUFHLEVBQUU7d0JBQ1IsS0FBSyxHQUFHLEdBQUcsQ0FBQzt3QkFDWixPQUFPLElBQUksQ0FBQztxQkFDWjt5QkFBTTt3QkFDTixPQUFPLEtBQUssQ0FBQztxQkFDYjtnQkFDRixDQUFDLENBQUMsQ0FBQztnQkFFSCxLQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLGtCQUFrQixDQUFDLEVBQUUsR0FBRyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQzthQUM5RDtRQUNGLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQzs7Z0JBekRELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsV0FBVztvQkFDckIsa0VBQXFDOztpQkFFckM7Ozs7Z0JBWlEsS0FBSztnQkFNRSxNQUFNOztJQTREdEIscUJBQUM7Q0FBQSxBQTFERCxJQTBEQztTQXJEWSxjQUFjOzs7SUFDMUIsZ0NBQTJCOztJQUMzQixnQ0FBMkM7Ozs7O0lBRS9CLCtCQUFrQzs7Ozs7SUFBRSxnQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcblxyXG5pbXBvcnQgeyBUaXRsZUNoYW5nZWRBY3Rpb24gfSBmcm9tIFwiLi4vLi4vYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBGZWF0dXJlU3RhdGUsIGdldFRpdGxlIH0gZnJvbSBcIi4uLy4uL3JlZHVjZXJzXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFJvdXRlLCBSb3V0ZXIsIE5hdmlnYXRpb25FbmQgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJhcHAtdGl0bGVcIixcclxuXHR0ZW1wbGF0ZVVybDogXCIuL3RpdGxlLmNvbXBvbmVudC5odG1sXCIsXHJcblx0c3R5bGVVcmxzOiBbIFwiLi90aXRsZS5jb21wb25lbnQuc2Nzc1wiIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRpdGxlQ29tcG9uZW50IHtcclxuXHR0aXRsZSQ6IE9ic2VydmFibGU8c3RyaW5nPjtcclxuXHRtYXBwZXI6IHsgKHZhbDogTmF2aWdhdGlvbkVuZCk6IHN0cmluZyB9W107XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVTdGF0ZT4sIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuXHRcdHRoaXMubWFwcGVyID0gW107XHJcblx0XHQvLyB0aGlzLm1hcHBlci5wdXNoKChldmVudDogTmF2aWdhdGlvbkVuZCkgPT4ge1xyXG5cdFx0Ly8gICAgIHJldHVybiAoZXZlbnQudXJsLmVuZHNXaXRoKCdwcm9maWxlLWVkaXQnKSkgPyAn2YjbjNix2KfbjNi0INin2LfZhNin2LnYp9iqINqp2KfYsdio2LHbjCcgOiBudWxsO1xyXG5cdFx0Ly8gfSk7XHJcblx0XHQvLyB0aGlzLm1hcHBlci5wdXNoKChldmVudDogTmF2aWdhdGlvbkVuZCkgPT4ge1xyXG5cdFx0Ly8gICAgIHJldHVybiAoZXZlbnQudXJsLmVuZHNXaXRoKCdzdWNjZXNzLXBheW1lbnQtcmVwb3J0JykpID8gJ9qv2LLYp9ix2LQg2b7Ysdiv2KfYrtiqINmH2KfbjCDZhdmI2YHZgicgOiBudWxsO1xyXG5cdFx0Ly8gfSk7XHJcblx0XHQvLyB0aGlzLm1hcHBlci5wdXNoKChldmVudDogTmF2aWdhdGlvbkVuZCkgPT4ge1xyXG5cdFx0Ly8gICAgIHJldHVybiAoZXZlbnQudXJsLmVuZHNXaXRoKCdmYWlsZWQtbG9naW4tcmVwb3J0JykpID8gJ9qv2LLYp9ix2LQg2K7Yt9in2YfYpycgOiBudWxsO1xyXG5cdFx0Ly8gfSk7XHJcblx0XHQvLyB0aGlzLm1hcHBlci5wdXNoKChldmVudDogTmF2aWdhdGlvbkVuZCkgPT4ge1xyXG5cdFx0Ly8gICAgIHJldHVybiAoZXZlbnQudXJsLmVuZHNXaXRoKCdhY3RpdmUtc2Vzc2lvbi1pbmZvJykpID8gJ9is2LLYptuM2KfYqiDYqNiz2KrZhyDZgdi52KfZhCcgOiBudWxsO1xyXG5cdFx0Ly8gfSk7XHJcblx0XHQvLyB0aGlzLm1hcHBlci5wdXNoKChldmVudDogTmF2aWdhdGlvbkVuZCkgPT4ge1xyXG5cdFx0Ly8gICAgIHJldHVybiAoZXZlbnQudXJsLmVuZHNXaXRoKCdzZXNzaW9uLWRldGFpbC1yZXBvcnQnKSkgPyAn2KzYstim24zYp9iqINin2KrYtdin2YQnIDogbnVsbDtcclxuXHRcdC8vIH0pO1xyXG5cdFx0Ly8gdGhpcy5tYXBwZXIucHVzaCgoZXZlbnQ6IE5hdmlnYXRpb25FbmQpID0+IHtcclxuXHRcdC8vICAgICByZXR1cm4gKGV2ZW50LnVybC5lbmRzV2l0aCgnZGFpbHktc2Vzc2lvbi1yZXBvcnQnKSkgPyAn2q/Ystin2LHYtCDYqtis2YXbjNi524wg2LHZiNiy2KfZhtmHJyA6IG51bGw7XHJcblx0XHQvLyB9KTtcclxuXHRcdC8vIHRoaXMubWFwcGVyLnB1c2goKGV2ZW50OiBOYXZpZ2F0aW9uRW5kKSA9PiB7XHJcblx0XHQvLyAgICAgcmV0dXJuIChldmVudC51cmwuZW5kc1dpdGgoJ21vbnRobHktc2Vzc2lvbi1yZXBvcnQnKSkgPyAn2q/Ystin2LHYtCDYqtis2YXbjNi524wg2YXYp9mH2KfZhtmHJyA6IG51bGw7XHJcblx0XHQvLyB9KTtcclxuXHRcdC8vIHRoaXMubWFwcGVyLnB1c2goKGV2ZW50OiBOYXZpZ2F0aW9uRW5kKSA9PiB7XHJcblx0XHQvLyAgICAgcmV0dXJuIChldmVudC51cmwuc3RhcnRzV2l0aCgnL3BhY2thZ2VzL3VzZXItcGFja2FnZXMnKSkgPyAn2YTbjNiz2Kog2b7aqduM2Kwg2YfYpycgOiBudWxsO1xyXG5cdFx0Ly8gfSk7XHJcblx0XHQvLyB0aGlzLm1hcHBlci5wdXNoKChldmVudDogTmF2aWdhdGlvbkVuZCkgPT4ge1xyXG5cdFx0Ly8gICAgIHJldHVybiAoZXZlbnQudXJsLmVuZHNXaXRoKCcvY2hhbmdlLXBhc3N3b3JkJykpID8gJ9iq2LrbjNuM2LEg2qnZhNmF2Ycg2LnYqNmI2LEnIDogbnVsbDtcclxuXHRcdC8vIH0pO1xyXG5cclxuXHRcdHRoaXMudGl0bGUkID0gdGhpcy5zdG9yZS5zZWxlY3QoZ2V0VGl0bGUpO1xyXG5cclxuXHRcdHRoaXMucm91dGVyLmV2ZW50cy5zdWJzY3JpYmUoZXZlbnQgPT4ge1xyXG5cdFx0XHRpZiAoZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSB7XHJcblx0XHRcdFx0dmFyIHRpdGxlID0gXCJcIjtcclxuXHRcdFx0XHR0aGlzLm1hcHBlci5mb3JFYWNoKG1hcHBlciA9PiB7XHJcblx0XHRcdFx0XHRsZXQgcmVzID0gbWFwcGVyKGV2ZW50KTtcclxuXHRcdFx0XHRcdGlmIChyZXMpIHtcclxuXHRcdFx0XHRcdFx0dGl0bGUgPSByZXM7XHJcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBUaXRsZUNoYW5nZWRBY3Rpb24oXCJcIiArIHRpdGxlIHx8IFwiXCIpKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcbiJdfQ==