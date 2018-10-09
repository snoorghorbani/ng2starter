/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MatSnackBar } from "@angular/material";
import { map, switchMap, take, filter } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { AuthenticationConfigurationService } from "./authentication-configuration.service";
import { WhoAmIAction } from "../actions";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@ngrx/store";
import * as i3 from "./authentication-configuration.service";
import * as i4 from "@angular/material/snack-bar";
var SigninService = /** @class */ (function () {
    function SigninService(http, store, configurationService, snackBar) {
        var _this = this;
        this.http = http;
        this.store = store;
        this.configurationService = configurationService;
        this.snackBar = snackBar;
        setTimeout(function () { return _this.store.dispatch(new WhoAmIAction()); }, 300);
    }
    /**
     * @param {?} model
     * @return {?}
     */
    SigninService.prototype.signup = /**
     * @param {?} model
     * @return {?}
     */
    function (model) {
        var _this = this;
        return this.configurationService.config$.pipe(filter(function (config) { return config.endpoints.signIn != ""; }), take(1), switchMap(function (config) {
            return _this.http.post(config.env[config.server] + config.endpoints.signUp, model);
        }), map(function (response) {
            /** @type {?} */
            var user = Object.assign({}, response.Result);
            if (user.Role) {
                user.Roles = [user.Role];
            }
            return user;
        }));
    };
    /**
     * @param {?} model
     * @return {?}
     */
    SigninService.prototype.signin = /**
     * @param {?} model
     * @return {?}
     */
    function (model) {
        var _this = this;
        return this.configurationService.config$.pipe(filter(function (config) { return config.endpoints.signIn != ""; }), take(1), switchMap(function (config) {
            return _this.http.post(config.env[config.server] + config.endpoints.signIn, model);
        }), map(function (response) {
            /** @type {?} */
            var user = Object.assign({}, response.Result);
            if (user.Role) {
                user.Roles = [user.Role];
            }
            return user;
        }));
        // .catch(err => {
        // 	if (err.status == 400) {
        // 		this.snackBar.open("کد امنیتی اشتباه است", null, {
        // 			duration: 5000
        // 		});
        // 	} else if (err.status == 403) {
        // 		this.snackBar.open(" شماره موبایل و یا کلمه عبور اشتباه است", null, {
        // 			duration: 5000
        // 		});
        // 	}
        // 	return Observable.throw(err);
        // });
    };
    // TODO:
    /**
     * @return {?}
     */
    SigninService.prototype.signout = /**
     * @return {?}
     */
    function () {
        return this.http
            .get(this.configurationService.config.env[this.configurationService.config.server] + this.configurationService.config.endpoints.signOut)
            .map(function (response) { return response; });
    };
    // TODO: remove it
    /**
     * @return {?}
     */
    SigninService.prototype.whoAmI = /**
     * @return {?}
     */
    function () {
        return this.http.get(this.configurationService.config.endpoints.whoAmI).map(function (response) { return response; });
    };
    SigninService.decorators = [
        { type: Injectable, args: [{
                    providedIn: "root"
                },] },
    ];
    /** @nocollapse */
    SigninService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: Store },
        { type: AuthenticationConfigurationService },
        { type: MatSnackBar }
    ]; };
    /** @nocollapse */ SigninService.ngInjectableDef = i0.defineInjectable({ factory: function SigninService_Factory() { return new SigninService(i0.inject(i1.HttpClient), i0.inject(i2.Store), i0.inject(i3.AuthenticationConfigurationService), i0.inject(i4.MatSnackBar)); }, token: SigninService, providedIn: "root" });
    return SigninService;
}());
export { SigninService };
if (false) {
    /** @type {?} */
    SigninService.prototype.http;
    /** @type {?} */
    SigninService.prototype.store;
    /** @type {?} */
    SigninService.prototype.configurationService;
    /** @type {?} */
    SigninService.prototype.snackBar;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmluLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2F1dGhlbnRpY2F0aW9uLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3NpZ25pbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFaEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBTyxNQUFNLGdCQUFnQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFLcEMsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFNUYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLFlBQVksQ0FBQzs7Ozs7OztJQU16Qyx1QkFDUyxNQUNBLE9BQ0Esc0JBQ0E7UUFKVCxpQkFPQztRQU5RLFNBQUksR0FBSixJQUFJO1FBQ0osVUFBSyxHQUFMLEtBQUs7UUFDTCx5QkFBb0IsR0FBcEIsb0JBQW9CO1FBQ3BCLGFBQVEsR0FBUixRQUFRO1FBRWhCLFVBQVUsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxZQUFZLEVBQUUsQ0FBQyxFQUF2QyxDQUF1QyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQy9EOzs7OztJQUVELDhCQUFNOzs7O0lBQU4sVUFBTyxLQUFVO1FBQWpCLGlCQWVDO1FBZEEsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksQ0FDNUMsTUFBTSxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLElBQUksRUFBRSxFQUE3QixDQUE2QixDQUFDLEVBQy9DLElBQUksQ0FBQyxDQUFDLENBQUMsRUFDUCxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ2YsT0FBQSxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBMkIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDO1FBQXBHLENBQW9HLENBQ3BHLEVBQ0QsR0FBRyxDQUFDLFVBQUEsUUFBUTs7WUFDWCxJQUFNLElBQUksR0FBUSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDckQsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNkLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDekI7WUFDRCxPQUFPLElBQUksQ0FBQztTQUNaLENBQUMsQ0FDRixDQUFDO0tBQ0Y7Ozs7O0lBRUQsOEJBQU07Ozs7SUFBTixVQUFPLEtBQVU7UUFBakIsaUJBMkJDO1FBMUJBLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQzVDLE1BQU0sQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxJQUFJLEVBQUUsRUFBN0IsQ0FBNkIsQ0FBQyxFQUMvQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ1AsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUNmLE9BQUEsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQTJCLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQztRQUFwRyxDQUFvRyxDQUNwRyxFQUNELEdBQUcsQ0FBQyxVQUFBLFFBQVE7O1lBQ1gsSUFBTSxJQUFJLEdBQVEsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3JELElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDZCxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3pCO1lBQ0QsT0FBTyxJQUFJLENBQUM7U0FDWixDQUFDLENBQ0YsQ0FBQzs7Ozs7Ozs7Ozs7OztLQWFGO0lBRUQsUUFBUTs7OztJQUNSLCtCQUFPOzs7SUFBUDtRQUNDLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDZCxHQUFHLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7YUFDdkksR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxFQUFSLENBQVEsQ0FBQyxDQUFDO0tBQzVCO0lBRUQsa0JBQWtCOzs7O0lBQ2xCLDhCQUFNOzs7SUFBTjtRQUNDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxFQUFSLENBQVEsQ0FBQyxDQUFDO0tBQ2xHOztnQkFyRUQsVUFBVSxTQUFDO29CQUNYLFVBQVUsRUFBRSxNQUFNO2lCQUNsQjs7OztnQkFoQlEsVUFBVTtnQkFLVixLQUFLO2dCQUtMLGtDQUFrQztnQkFSbEMsV0FBVzs7O3dCQUhwQjs7U0FrQmEsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xyXG5pbXBvcnQgeyBNYXRTbmFja0JhciB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcclxuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIHRha2UsIGZpbHRlciwgdGFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG4vLyBpbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gXCIuLi8uLi9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnRcIjtcclxuXHJcbmltcG9ydCB7IFNpZ25pbl9BcGlNb2RlbCwgVXNlck1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvbkNvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vYXV0aGVudGljYXRpb24tY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEZlYXR1cmVTdGF0ZSB9IGZyb20gXCIuLi9yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBXaG9BbUlBY3Rpb24gfSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46IFwicm9vdFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaWduaW5TZXJ2aWNlIHtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVTdGF0ZT4sXHJcblx0XHRwcml2YXRlIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvbkNvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBzbmFja0JhcjogTWF0U25hY2tCYXJcclxuXHQpIHtcclxuXHRcdHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgV2hvQW1JQWN0aW9uKCkpLCAzMDApO1xyXG5cdH1cclxuXHJcblx0c2lnbnVwKG1vZGVsOiBhbnkpOiBPYnNlcnZhYmxlPFVzZXJNb2RlbD4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5waXBlKFxyXG5cdFx0XHRmaWx0ZXIoY29uZmlnID0+IGNvbmZpZy5lbmRwb2ludHMuc2lnbkluICE9IFwiXCIpLFxyXG5cdFx0XHR0YWtlKDEpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoY29uZmlnID0+XHJcblx0XHRcdFx0dGhpcy5odHRwLnBvc3Q8U2lnbmluX0FwaU1vZGVsLlJlc3BvbnNlPihjb25maWcuZW52W2NvbmZpZy5zZXJ2ZXJdICsgY29uZmlnLmVuZHBvaW50cy5zaWduVXAsIG1vZGVsKVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRtYXAocmVzcG9uc2UgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IHVzZXI6IGFueSA9IE9iamVjdC5hc3NpZ24oe30sIHJlc3BvbnNlLlJlc3VsdCk7XHJcblx0XHRcdFx0aWYgKHVzZXIuUm9sZSkge1xyXG5cdFx0XHRcdFx0dXNlci5Sb2xlcyA9IFt1c2VyLlJvbGVdO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gdXNlcjtcclxuXHRcdFx0fSlcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRzaWduaW4obW9kZWw6IGFueSk6IE9ic2VydmFibGU8VXNlck1vZGVsPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLnBpcGUoXHJcblx0XHRcdGZpbHRlcihjb25maWcgPT4gY29uZmlnLmVuZHBvaW50cy5zaWduSW4gIT0gXCJcIiksXHJcblx0XHRcdHRha2UoMSksXHJcblx0XHRcdHN3aXRjaE1hcChjb25maWcgPT5cclxuXHRcdFx0XHR0aGlzLmh0dHAucG9zdDxTaWduaW5fQXBpTW9kZWwuUmVzcG9uc2U+KGNvbmZpZy5lbnZbY29uZmlnLnNlcnZlcl0gKyBjb25maWcuZW5kcG9pbnRzLnNpZ25JbiwgbW9kZWwpXHJcblx0XHRcdCksXHJcblx0XHRcdG1hcChyZXNwb25zZSA9PiB7XHJcblx0XHRcdFx0Y29uc3QgdXNlcjogYW55ID0gT2JqZWN0LmFzc2lnbih7fSwgcmVzcG9uc2UuUmVzdWx0KTtcclxuXHRcdFx0XHRpZiAodXNlci5Sb2xlKSB7XHJcblx0XHRcdFx0XHR1c2VyLlJvbGVzID0gW3VzZXIuUm9sZV07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiB1c2VyO1xyXG5cdFx0XHR9KVxyXG5cdFx0KTtcclxuXHRcdC8vIC5jYXRjaChlcnIgPT4ge1xyXG5cdFx0Ly8gXHRpZiAoZXJyLnN0YXR1cyA9PSA0MDApIHtcclxuXHRcdC8vIFx0XHR0aGlzLnNuYWNrQmFyLm9wZW4oXCLaqdivINin2YXZhtuM2KrbjCDYp9i02KrYqNin2Ycg2KfYs9iqXCIsIG51bGwsIHtcclxuXHRcdC8vIFx0XHRcdGR1cmF0aW9uOiA1MDAwXHJcblx0XHQvLyBcdFx0fSk7XHJcblx0XHQvLyBcdH0gZWxzZSBpZiAoZXJyLnN0YXR1cyA9PSA0MDMpIHtcclxuXHRcdC8vIFx0XHR0aGlzLnNuYWNrQmFyLm9wZW4oXCIg2LTZhdin2LHZhyDZhdmI2KjYp9uM2YQg2Ygg24zYpyDaqdmE2YXZhyDYudio2YjYsSDYp9i02KrYqNin2Ycg2KfYs9iqXCIsIG51bGwsIHtcclxuXHRcdC8vIFx0XHRcdGR1cmF0aW9uOiA1MDAwXHJcblx0XHQvLyBcdFx0fSk7XHJcblx0XHQvLyBcdH1cclxuXHRcdC8vIFx0cmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyKTtcclxuXHRcdC8vIH0pO1xyXG5cdH1cclxuXHJcblx0Ly8gVE9ETzpcclxuXHRzaWdub3V0KCk6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdC5nZXQodGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWcuZW52W3RoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnLnNlcnZlcl0gKyB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZy5lbmRwb2ludHMuc2lnbk91dClcclxuXHRcdFx0Lm1hcChyZXNwb25zZSA9PiByZXNwb25zZSk7XHJcblx0fVxyXG5cclxuXHQvLyBUT0RPOiByZW1vdmUgaXRcclxuXHR3aG9BbUkoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnLmVuZHBvaW50cy53aG9BbUkpLm1hcChyZXNwb25zZSA9PiByZXNwb25zZSk7XHJcblx0fVxyXG59XHJcbiJdfQ==