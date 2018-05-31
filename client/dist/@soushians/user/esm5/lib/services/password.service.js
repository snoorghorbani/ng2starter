/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { Store } from "@ngrx/store";
import * as FeatureReducer from "../user.reducers";
import { ResetPasswordModel, ResetPasswordRequestModel, ChangePasswordModel } from "../models";
import { UserConfigurationService } from "./user-configuration.service";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@ngrx/store";
import * as i3 from "./user-configuration.service";
var PasswordService = /** @class */ (function () {
    function PasswordService(http, store, userConfigurationService) {
        this.http = http;
        this.store = store;
        this.userConfigurationService = userConfigurationService;
        this.numberOfRequeseted$ = this.store.select(FeatureReducer.getNumberOfRequeseted);
    }
    /**
     * @return {?}
     */
    PasswordService.prototype.isValidResetPasswordRequest = /**
     * @return {?}
     */
    function () {
        return this.numberOfRequeseted$
            .take(1)
            .switchMap(function (count) { return (count < 3 ? Observable.of(true) : Observable.of(false)); });
    };
    /**
     * @param {?} data
     * @return {?}
     */
    PasswordService.prototype.isValidResetPasswordReset = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var /** @type {?} */ model = new ResetPasswordModel.Request(data);
        var Token = model.Token;
        return this.http
            .get("http://wifi.shatel.ir/api/v1/reset/tokens/" + Token, { withCredentials: true })
            .map(function (response) { return response; });
    };
    /**
     * @param {?} data
     * @return {?}
     */
    PasswordService.prototype.requestResetPasswordLink = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var /** @type {?} */ model = new ResetPasswordRequestModel.Request(data);
        // TODO:
        // return this.http.post(this.userConfigurationService.config.endpoints.resetPasswordRequest(model), model.getRequestBody(), { withCredentials: true })
        return this.http
            .post(this.userConfigurationService.config.endpoints.editProfile, model.getRequestBody(), {
            withCredentials: true
        })
            .map(function (response) { return response; });
    };
    /**
     * @param {?} data
     * @return {?}
     */
    PasswordService.prototype.changePassword = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var /** @type {?} */ model = new ChangePasswordModel.Request(data);
        return this.http
            .patch("this.userConfigurationService.config.endpoints.changePassword(model)", model.getRequestBody(), {
            withCredentials: true
        })
            .map(function (response) { return response; });
    };
    /**
     * @param {?} data
     * @return {?}
     */
    PasswordService.prototype.resetPassword = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var /** @type {?} */ model = new ResetPasswordModel.Request(data);
        var Token = model.Token;
        return this.http
            .patch("http://wifi.shatel.ir/api/v1/reset/tokens/" + Token, model.getRequestBody(), {
            withCredentials: true
        })
            .map(function (response) { return response; });
    };
    PasswordService.decorators = [
        { type: Injectable, args: [{
                    providedIn: "root"
                },] },
    ];
    /** @nocollapse */
    PasswordService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: Store },
        { type: UserConfigurationService }
    ]; };
    /** @nocollapse */ PasswordService.ngInjectableDef = i0.defineInjectable({ factory: function PasswordService_Factory() { return new PasswordService(i0.inject(i1.HttpClient), i0.inject(i2.Store), i0.inject(i3.UserConfigurationService)); }, token: PasswordService, providedIn: "root" });
    return PasswordService;
}());
export { PasswordService };
function PasswordService_tsickle_Closure_declarations() {
    /** @type {?} */
    PasswordService.prototype.numberOfRequeseted$;
    /** @type {?} */
    PasswordService.prototype.http;
    /** @type {?} */
    PasswordService.prototype.store;
    /** @type {?} */
    PasswordService.prototype.userConfigurationService;
}
export var /** @type {?} */ PasswordServiceStub = {};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFzc3dvcmQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvdXNlci8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9wYXNzd29yZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBZSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFcEMsT0FBTyxLQUFLLGNBQWMsTUFBTSxrQkFBa0IsQ0FBQztBQUVuRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUseUJBQXlCLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDL0YsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7OztJQVF2RSx5QkFDUyxNQUNBLE9BQ0E7UUFGQSxTQUFJLEdBQUosSUFBSTtRQUNKLFVBQUssR0FBTCxLQUFLO1FBQ0wsNkJBQXdCLEdBQXhCLHdCQUF3QjtRQUVoQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLHFCQUFxQixDQUFDLENBQUM7S0FDbkY7Ozs7SUFFRCxxREFBMkI7OztJQUEzQjtRQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQW1CO2FBQzdCLElBQUksQ0FBQyxDQUFDLENBQUM7YUFDUCxTQUFTLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBeEQsQ0FBd0QsQ0FBQyxDQUFDO0tBQy9FOzs7OztJQUVELG1EQUF5Qjs7OztJQUF6QixVQUEwQixJQUFnQztRQUN6RCxxQkFBSSxLQUFLLEdBQUcsSUFBSSxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0MsSUFBQSxtQkFBSyxDQUFXO1FBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSTthQUNkLEdBQUcsQ0FBQywrQ0FBNkMsS0FBTyxFQUFFLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxDQUFDO2FBQ3BGLEdBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsRUFBUixDQUFRLENBQUMsQ0FBQztLQUM1Qjs7Ozs7SUFFRCxrREFBd0I7Ozs7SUFBeEIsVUFBeUIsSUFBdUM7UUFDL0QscUJBQUksS0FBSyxHQUFHLElBQUkseUJBQXlCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDOzs7UUFJeEQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJO2FBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsY0FBYyxFQUFFLEVBQUU7WUFDekYsZUFBZSxFQUFFLElBQUk7U0FDckIsQ0FBQzthQUNELEdBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsRUFBUixDQUFRLENBQUMsQ0FBQztLQUM1Qjs7Ozs7SUFFRCx3Q0FBYzs7OztJQUFkLFVBQWUsSUFBaUM7UUFDL0MscUJBQUksS0FBSyxHQUFHLElBQUksbUJBQW1CLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSTthQUNkLEtBQUssQ0FBQyxzRUFBc0UsRUFBRSxLQUFLLENBQUMsY0FBYyxFQUFFLEVBQUU7WUFDdEcsZUFBZSxFQUFFLElBQUk7U0FDckIsQ0FBQzthQUNELEdBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsRUFBUixDQUFRLENBQUMsQ0FBQztLQUM1Qjs7Ozs7SUFFRCx1Q0FBYTs7OztJQUFiLFVBQWMsSUFBZ0M7UUFDN0MscUJBQUksS0FBSyxHQUFHLElBQUksa0JBQWtCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNDLElBQUEsbUJBQUssQ0FBVztRQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7YUFDZCxLQUFLLENBQUMsK0NBQTZDLEtBQU8sRUFBRSxLQUFLLENBQUMsY0FBYyxFQUFFLEVBQUU7WUFDcEYsZUFBZSxFQUFFLElBQUk7U0FDckIsQ0FBQzthQUNELEdBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsRUFBUixDQUFRLENBQUMsQ0FBQztLQUM1Qjs7Z0JBekRELFVBQVUsU0FBQztvQkFDWCxVQUFVLEVBQUUsTUFBTTtpQkFDbEI7Ozs7Z0JBWHFCLFVBQVU7Z0JBRXZCLEtBQUs7Z0JBS0wsd0JBQXdCOzs7MEJBVGpDOztTQWNhLGVBQWU7Ozs7Ozs7Ozs7O0FBeUQ1QixNQUFNLENBQUMscUJBQUksbUJBQW1CLEdBQUcsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgSHR0cEhlYWRlcnMsIEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBGZWF0dXJlUmVkdWNlciBmcm9tIFwiLi4vdXNlci5yZWR1Y2Vyc1wiO1xyXG5cclxuaW1wb3J0IHsgUmVzZXRQYXNzd29yZE1vZGVsLCBSZXNldFBhc3N3b3JkUmVxdWVzdE1vZGVsLCBDaGFuZ2VQYXNzd29yZE1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBVc2VyQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi91c2VyLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46IFwicm9vdFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYXNzd29yZFNlcnZpY2Uge1xyXG5cdG51bWJlck9mUmVxdWVzZXRlZCQ6IE9ic2VydmFibGU8bnVtYmVyPjtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxhbnk+LFxyXG5cdFx0cHJpdmF0ZSB1c2VyQ29uZmlndXJhdGlvblNlcnZpY2U6IFVzZXJDb25maWd1cmF0aW9uU2VydmljZVxyXG5cdCkge1xyXG5cdFx0dGhpcy5udW1iZXJPZlJlcXVlc2V0ZWQkID0gdGhpcy5zdG9yZS5zZWxlY3QoRmVhdHVyZVJlZHVjZXIuZ2V0TnVtYmVyT2ZSZXF1ZXNldGVkKTtcclxuXHR9XHJcblxyXG5cdGlzVmFsaWRSZXNldFBhc3N3b3JkUmVxdWVzdCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcclxuXHRcdHJldHVybiB0aGlzLm51bWJlck9mUmVxdWVzZXRlZCRcclxuXHRcdFx0LnRha2UoMSlcclxuXHRcdFx0LnN3aXRjaE1hcChjb3VudCA9PiAoY291bnQgPCAzID8gT2JzZXJ2YWJsZS5vZih0cnVlKSA6IE9ic2VydmFibGUub2YoZmFsc2UpKSk7XHJcblx0fVxyXG5cclxuXHRpc1ZhbGlkUmVzZXRQYXNzd29yZFJlc2V0KGRhdGE6IFJlc2V0UGFzc3dvcmRNb2RlbC5SZXF1ZXN0KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdHZhciBtb2RlbCA9IG5ldyBSZXNldFBhc3N3b3JkTW9kZWwuUmVxdWVzdChkYXRhKTtcclxuXHRcdGxldCB7IFRva2VuIH0gPSBtb2RlbDtcclxuXHRcdHJldHVybiB0aGlzLmh0dHBcclxuXHRcdFx0LmdldChgaHR0cDovL3dpZmkuc2hhdGVsLmlyL2FwaS92MS9yZXNldC90b2tlbnMvJHtUb2tlbn1gLCB7IHdpdGhDcmVkZW50aWFsczogdHJ1ZSB9KVxyXG5cdFx0XHQubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlKTtcclxuXHR9XHJcblxyXG5cdHJlcXVlc3RSZXNldFBhc3N3b3JkTGluayhkYXRhOiBSZXNldFBhc3N3b3JkUmVxdWVzdE1vZGVsLlJlcXVlc3QpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0dmFyIG1vZGVsID0gbmV3IFJlc2V0UGFzc3dvcmRSZXF1ZXN0TW9kZWwuUmVxdWVzdChkYXRhKTtcclxuXHJcblx0XHQvLyBUT0RPOlxyXG5cdFx0Ly8gcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMudXNlckNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZy5lbmRwb2ludHMucmVzZXRQYXNzd29yZFJlcXVlc3QobW9kZWwpLCBtb2RlbC5nZXRSZXF1ZXN0Qm9keSgpLCB7IHdpdGhDcmVkZW50aWFsczogdHJ1ZSB9KVxyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cFxyXG5cdFx0XHQucG9zdCh0aGlzLnVzZXJDb25maWd1cmF0aW9uU2VydmljZS5jb25maWcuZW5kcG9pbnRzLmVkaXRQcm9maWxlLCBtb2RlbC5nZXRSZXF1ZXN0Qm9keSgpLCB7XHJcblx0XHRcdFx0d2l0aENyZWRlbnRpYWxzOiB0cnVlXHJcblx0XHRcdH0pXHJcblx0XHRcdC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UpO1xyXG5cdH1cclxuXHJcblx0Y2hhbmdlUGFzc3dvcmQoZGF0YTogQ2hhbmdlUGFzc3dvcmRNb2RlbC5SZXF1ZXN0KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdHZhciBtb2RlbCA9IG5ldyBDaGFuZ2VQYXNzd29yZE1vZGVsLlJlcXVlc3QoZGF0YSk7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdC5wYXRjaChcInRoaXMudXNlckNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZy5lbmRwb2ludHMuY2hhbmdlUGFzc3dvcmQobW9kZWwpXCIsIG1vZGVsLmdldFJlcXVlc3RCb2R5KCksIHtcclxuXHRcdFx0XHR3aXRoQ3JlZGVudGlhbHM6IHRydWVcclxuXHRcdFx0fSlcclxuXHRcdFx0Lm1hcChyZXNwb25zZSA9PiByZXNwb25zZSk7XHJcblx0fVxyXG5cclxuXHRyZXNldFBhc3N3b3JkKGRhdGE6IFJlc2V0UGFzc3dvcmRNb2RlbC5SZXF1ZXN0KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdHZhciBtb2RlbCA9IG5ldyBSZXNldFBhc3N3b3JkTW9kZWwuUmVxdWVzdChkYXRhKTtcclxuXHRcdGxldCB7IFRva2VuIH0gPSBtb2RlbDtcclxuXHRcdHJldHVybiB0aGlzLmh0dHBcclxuXHRcdFx0LnBhdGNoKGBodHRwOi8vd2lmaS5zaGF0ZWwuaXIvYXBpL3YxL3Jlc2V0L3Rva2Vucy8ke1Rva2VufWAsIG1vZGVsLmdldFJlcXVlc3RCb2R5KCksIHtcclxuXHRcdFx0XHR3aXRoQ3JlZGVudGlhbHM6IHRydWVcclxuXHRcdFx0fSlcclxuXHRcdFx0Lm1hcChyZXNwb25zZSA9PiByZXNwb25zZSk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgdmFyIFBhc3N3b3JkU2VydmljZVN0dWIgPSB7fTtcclxuIl19