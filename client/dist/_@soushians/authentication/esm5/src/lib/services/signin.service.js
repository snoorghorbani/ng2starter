/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { throwError } from "rxjs";
import { MatSnackBar } from "@angular/material";
import { map, switchMap, take, filter, tap } from "rxjs/operators";
import { Store } from "@ngrx/store";
// import { environment } from "../../environments/environment";
import { stringTemplate } from "@soushians/shared";
import { AuthenticationConfigurationService } from "./authentication-configuration.service";
import { WhoAmIAction } from "../actions";
import { Cookie } from "@soushians/shared";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@ngrx/store";
import * as i3 from "./authentication-configuration.service";
import * as i4 from "@angular/material/snack-bar";
/** @type {?} */
var COOKIE_NAME = "ngs-authentication";
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
        return this.configurationService.config$.pipe(filter(function (config) { return config.endpoints.signUp != ""; }), take(1), switchMap(function (config) {
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
        return this.configurationService.config$.pipe(filter(function (config) { return config.endpoints.signIn != ""; }), take(1), switchMap(function (config) { return _this.http.post(config.env[config.server] + config.endpoints.signIn, model); }), map(this.configurationService.config.responseToUser), map(function (user) {
            if (user.Role) {
                user.Roles = [user.Role];
            }
            return user;
        }), tap(function (user) {
            if (_this.configurationService.config.mode == "token-base")
                Cookie.setCookie(COOKIE_NAME, JSON.stringify(user), _this.configurationService.config.token.time);
        }), tap(function (user) { return _this.configurationService.config.afterSignin(user); }));
    };
    // TODO:
    // TODO:
    /**
     * @return {?}
     */
    SigninService.prototype.signout = 
    // TODO:
    /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var config = this.configurationService.config;
        /** @type {?} */
        var tokenObject = JSON.parse(Cookie.getCookie(COOKIE_NAME));
        /** @type {?} */
        var endpoint = stringTemplate(config.env[config.server] + config.endpoints.signOut, tokenObject);
        /** @type {?} */
        var method = config.endpoints.signOutMethod || "get";
        if (["get", "put", "post", "patch", "delete"].indexOf(method) === -1) {
            throwError(method + " is not valid http method. [ @starter/authentication/signinservice/singout ]");
        }
        return this.http[method](endpoint).pipe(tap(function () {
            Cookie.deleteCookie(COOKIE_NAME);
        }));
    };
    /**
     * @return {?}
     */
    SigninService.prototype.whoAmI = /**
     * @return {?}
     */
    function () {
        var _this = this;
        debugger;
        /** @type {?} */
        var user = { Token: "--" };
        if (this.configurationService.config.mode == "token-base") {
            try {
                user = JSON.parse(Cookie.getCookie(COOKIE_NAME));
            }
            catch (error) { }
        }
        return this.configurationService.config$.pipe(filter(function (config) { return config.endpoints.whoAmI != ""; }), take(1), switchMap(function (config) {
            return _this.http.get(stringTemplate(config.env[config.server] + config.endpoints.whoAmI, { user: user }));
        }));
    };
    SigninService.decorators = [
        { type: Injectable, args: [{
                    providedIn: "root"
                },] }
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
    /**
     * @type {?}
     * @private
     */
    SigninService.prototype.http;
    /**
     * @type {?}
     * @private
     */
    SigninService.prototype.store;
    /**
     * @type {?}
     * @private
     */
    SigninService.prototype.configurationService;
    /**
     * @type {?}
     * @private
     */
    SigninService.prototype.snackBar;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmluLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2F1dGhlbnRpY2F0aW9uLyIsInNvdXJjZXMiOlsic3JjL2xpYi9zZXJ2aWNlcy9zaWduaW4uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFaEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQWMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDOztBQUdwQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFHbkQsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFNUYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLFlBQVksQ0FBQztBQUMxQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7Ozs7SUFFckMsV0FBVyxHQUFHLG9CQUFvQjtBQUV4QztJQUlDLHVCQUNTLElBQWdCLEVBQ2hCLEtBQTBCLEVBQzFCLG9CQUF3RCxFQUN4RCxRQUFxQjtRQUo5QixpQkFPQztRQU5RLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsVUFBSyxHQUFMLEtBQUssQ0FBcUI7UUFDMUIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFvQztRQUN4RCxhQUFRLEdBQVIsUUFBUSxDQUFhO1FBRTdCLFVBQVUsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxZ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LE9BQUEsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLEVBQUUsSUFBSSxNQUFBLEVBQUUsQ0FBQyxDQUFDO1FBQTVGLENBQTRGLENBQzVGLENBQ0QsQ0FBQztJQUNILENBQUM7O2dCQXBGRCxVQUFVLFNBQUM7b0JBQ1gsVUFBVSxFQUFFLE1BQU07aUJBQ2xCOzs7O2dCQXBCUSxVQUFVO2dCQUtWLEtBQUs7Z0JBTUwsa0NBQWtDO2dCQVRsQyxXQUFXOzs7d0JBSHBCO0NBd0dDLEFBckZELElBcUZDO1NBbEZZLGFBQWE7Ozs7OztJQUV4Qiw2QkFBd0I7Ozs7O0lBQ3hCLDhCQUFrQzs7Ozs7SUFDbEMsNkNBQWdFOzs7OztJQUNoRSxpQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgTWF0U25hY2tCYXIgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XHJcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwLCB0YWtlLCBmaWx0ZXIsIHRhcCwgY2F0Y2hFcnJvciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuLy8gaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tIFwiLi4vLi4vZW52aXJvbm1lbnRzL2Vudmlyb25tZW50XCI7XHJcbmltcG9ydCB7IHN0cmluZ1RlbXBsYXRlIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcblxyXG5pbXBvcnQgeyBTaWduaW5fQXBpTW9kZWwsIFVzZXJNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25Db25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuL2F1dGhlbnRpY2F0aW9uLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBGZWF0dXJlU3RhdGUgfSBmcm9tIFwiLi4vcmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgV2hvQW1JQWN0aW9uIH0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcclxuaW1wb3J0IHsgQ29va2llIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcblxyXG5jb25zdCBDT09LSUVfTkFNRSA9IFwibmdzLWF1dGhlbnRpY2F0aW9uXCI7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogXCJyb290XCJcclxufSlcclxuZXhwb3J0IGNsYXNzIFNpZ25pblNlcnZpY2Uge1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVN0YXRlPixcclxuXHRcdHByaXZhdGUgY29uZmlndXJhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uQ29uZmlndXJhdGlvblNlcnZpY2UsXHJcblx0XHRwcml2YXRlIHNuYWNrQmFyOiBNYXRTbmFja0JhclxyXG5cdCkge1xyXG5cdFx0c2V0VGltZW91dCgoKSA9PiB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBXaG9BbUlBY3Rpb24oKSksIDMwMCk7XHJcblx0fVxyXG5cclxuXHRzaWdudXAobW9kZWw6IGFueSk6IE9ic2VydmFibGU8VXNlck1vZGVsPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLnBpcGUoXHJcblx0XHRcdGZpbHRlcihjb25maWcgPT4gY29uZmlnLmVuZHBvaW50cy5zaWduVXAgIT0gXCJcIiksXHJcblx0XHRcdHRha2UoMSksXHJcblx0XHRcdHN3aXRjaE1hcChjb25maWcgPT5cclxuXHRcdFx0XHR0aGlzLmh0dHAucG9zdDxTaWduaW5fQXBpTW9kZWwuUmVzcG9uc2U+KGNvbmZpZy5lbnZbY29uZmlnLnNlcnZlcl0gKyBjb25maWcuZW5kcG9pbnRzLnNpZ25VcCwgbW9kZWwpXHJcblx0XHRcdCksXHJcblx0XHRcdG1hcChyZXNwb25zZSA9PiB7XHJcblx0XHRcdFx0Y29uc3QgdXNlcjogYW55ID0gT2JqZWN0LmFzc2lnbih7fSwgcmVzcG9uc2UuUmVzdWx0KTtcclxuXHRcdFx0XHRpZiAodXNlci5Sb2xlKSB7XHJcblx0XHRcdFx0XHR1c2VyLlJvbGVzID0gWyB1c2VyLlJvbGUgXTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIHVzZXI7XHJcblx0XHRcdH0pXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0c2lnbmluKG1vZGVsOiBhbnkpOiBPYnNlcnZhYmxlPFVzZXJNb2RlbD4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5waXBlKFxyXG5cdFx0XHRmaWx0ZXIoY29uZmlnID0+IGNvbmZpZy5lbmRwb2ludHMuc2lnbkluICE9IFwiXCIpLFxyXG5cdFx0XHR0YWtlKDEpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoY29uZmlnID0+IHRoaXMuaHR0cC5wb3N0PGFueT4oY29uZmlnLmVudltjb25maWcuc2VydmVyXSArIGNvbmZpZy5lbmRwb2ludHMuc2lnbkluLCBtb2RlbCkpLFxyXG5cdFx0XHRtYXAodGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWcucmVzcG9uc2VUb1VzZXIpLFxyXG5cdFx0XHRtYXAodXNlciA9PiB7XHJcblx0XHRcdFx0aWYgKHVzZXIuUm9sZSkge1xyXG5cdFx0XHRcdFx0dXNlci5Sb2xlcyA9IFsgdXNlci5Sb2xlIF07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiB1c2VyO1xyXG5cdFx0XHR9KSxcclxuXHRcdFx0dGFwKHVzZXIgPT4ge1xyXG5cdFx0XHRcdGlmICh0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZy5tb2RlID09IFwidG9rZW4tYmFzZVwiKVxyXG5cdFx0XHRcdFx0Q29va2llLnNldENvb2tpZShDT09LSUVfTkFNRSwgSlNPTi5zdHJpbmdpZnkodXNlciksIHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnLnRva2VuLnRpbWUpO1xyXG5cdFx0XHR9KSxcclxuXHRcdFx0dGFwKHVzZXIgPT4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWcuYWZ0ZXJTaWduaW4odXNlcikpXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0Ly8gVE9ETzpcclxuXHRzaWdub3V0KCk6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHRjb25zdCBjb25maWcgPSB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZztcclxuXHRcdGNvbnN0IHRva2VuT2JqZWN0ID0gSlNPTi5wYXJzZShDb29raWUuZ2V0Q29va2llKENPT0tJRV9OQU1FKSk7XHJcblxyXG5cdFx0Y29uc3QgZW5kcG9pbnQgPSBzdHJpbmdUZW1wbGF0ZShjb25maWcuZW52W2NvbmZpZy5zZXJ2ZXJdICsgY29uZmlnLmVuZHBvaW50cy5zaWduT3V0LCB0b2tlbk9iamVjdCk7XHJcblx0XHRjb25zdCBtZXRob2QgPSBjb25maWcuZW5kcG9pbnRzLnNpZ25PdXRNZXRob2QgfHwgXCJnZXRcIjtcclxuXHJcblx0XHRpZiAoWyBcImdldFwiLCBcInB1dFwiLCBcInBvc3RcIiwgXCJwYXRjaFwiLCBcImRlbGV0ZVwiIF0uaW5kZXhPZihtZXRob2QpID09PSAtMSkge1xyXG5cdFx0XHR0aHJvd0Vycm9yKGAke21ldGhvZH0gaXMgbm90IHZhbGlkIGh0dHAgbWV0aG9kLiBbIEBzdGFydGVyL2F1dGhlbnRpY2F0aW9uL3NpZ25pbnNlcnZpY2Uvc2luZ291dCBdYCk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cFttZXRob2RdKGVuZHBvaW50KS5waXBlKFxyXG5cdFx0XHR0YXAoKCkgPT4ge1xyXG5cdFx0XHRcdENvb2tpZS5kZWxldGVDb29raWUoQ09PS0lFX05BTUUpO1xyXG5cdFx0XHR9KVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdHdob0FtSSgpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0ZGVidWdnZXI7XHJcblx0XHRsZXQgdXNlciA9IHsgVG9rZW46IFwiLS1cIiB9O1xyXG5cdFx0aWYgKHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnLm1vZGUgPT0gXCJ0b2tlbi1iYXNlXCIpIHtcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHR1c2VyID0gSlNPTi5wYXJzZShDb29raWUuZ2V0Q29va2llKENPT0tJRV9OQU1FKSk7XHJcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJC5waXBlKFxyXG5cdFx0XHRmaWx0ZXIoY29uZmlnID0+IGNvbmZpZy5lbmRwb2ludHMud2hvQW1JICE9IFwiXCIpLFxyXG5cdFx0XHR0YWtlKDEpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoY29uZmlnID0+XHJcblx0XHRcdFx0dGhpcy5odHRwLmdldChzdHJpbmdUZW1wbGF0ZShjb25maWcuZW52W2NvbmZpZy5zZXJ2ZXJdICsgY29uZmlnLmVuZHBvaW50cy53aG9BbUksIHsgdXNlciB9KSlcclxuXHRcdFx0KVxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuIl19