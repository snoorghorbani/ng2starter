/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
const COOKIE_NAME = "ngs-authentication";
export class SigninService {
    /**
     * @param {?} http
     * @param {?} store
     * @param {?} configurationService
     * @param {?} snackBar
     */
    constructor(http, store, configurationService, snackBar) {
        this.http = http;
        this.store = store;
        this.configurationService = configurationService;
        this.snackBar = snackBar;
        setTimeout((/**
         * @return {?}
         */
        () => this.store.dispatch(new WhoAmIAction())), 300);
    }
    /**
     * @param {?} model
     * @return {?}
     */
    signup(model) {
        return this.configurationService.config$.pipe(filter((/**
         * @param {?} config
         * @return {?}
         */
        config => config.endpoints.signUp != "")), take(1), switchMap((/**
         * @param {?} config
         * @return {?}
         */
        config => this.http.post(config.env[config.server] + config.endpoints.signUp, model))), map((/**
         * @param {?} response
         * @return {?}
         */
        response => {
            /** @type {?} */
            const user = Object.assign({}, response.Result);
            if (user.Role) {
                user.Roles = [user.Role];
            }
            return user;
        })));
    }
    /**
     * @param {?} model
     * @return {?}
     */
    signin(model) {
        return this.configurationService.config$.pipe(filter((/**
         * @param {?} config
         * @return {?}
         */
        config => config.endpoints.signIn != "")), take(1), switchMap((/**
         * @param {?} config
         * @return {?}
         */
        config => this.http.post(config.env[config.server] + config.endpoints.signIn, model))), map(this.configurationService.config.responseToUser), map((/**
         * @param {?} user
         * @return {?}
         */
        user => {
            if (user.Role) {
                user.Roles = [user.Role];
            }
            return user;
        })), tap((/**
         * @param {?} user
         * @return {?}
         */
        user => {
            if (this.configurationService.config.mode == "token-base")
                Cookie.setCookie(COOKIE_NAME, JSON.stringify(user), this.configurationService.config.token.time);
        })), tap((/**
         * @param {?} user
         * @return {?}
         */
        user => this.configurationService.config.afterSignin(user))));
    }
    // TODO:
    /**
     * @return {?}
     */
    signout() {
        /** @type {?} */
        const config = this.configurationService.config;
        /** @type {?} */
        const tokenObject = JSON.parse(Cookie.getCookie(COOKIE_NAME));
        /** @type {?} */
        const endpoint = stringTemplate(config.env[config.server] + config.endpoints.signOut, tokenObject);
        /** @type {?} */
        const method = config.endpoints.signOutMethod || "get";
        if (["get", "put", "post", "patch", "delete"].indexOf(method) === -1) {
            throwError(`${method} is not valid http method. [ @starter/authentication/signinservice/singout ]`);
        }
        return this.http[method](endpoint).pipe(tap((/**
         * @return {?}
         */
        () => {
            Cookie.deleteCookie(COOKIE_NAME);
        })));
    }
    /**
     * @return {?}
     */
    whoAmI() {
        debugger;
        /** @type {?} */
        let user = { Token: "--" };
        if (this.configurationService.config.mode == "token-base") {
            try {
                user = JSON.parse(Cookie.getCookie(COOKIE_NAME));
            }
            catch (error) { }
        }
        return this.configurationService.config$.pipe(filter((/**
         * @param {?} config
         * @return {?}
         */
        config => config.endpoints.whoAmI != "")), take(1), switchMap((/**
         * @param {?} config
         * @return {?}
         */
        config => this.http.get(stringTemplate(config.env[config.server] + config.endpoints.whoAmI, { user })))));
    }
}
SigninService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] }
];
/** @nocollapse */
SigninService.ctorParameters = () => [
    { type: HttpClient },
    { type: Store },
    { type: AuthenticationConfigurationService },
    { type: MatSnackBar }
];
/** @nocollapse */ SigninService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function SigninService_Factory() { return new SigninService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.Store), i0.ɵɵinject(i3.AuthenticationConfigurationService), i0.ɵɵinject(i4.MatSnackBar)); }, token: SigninService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmluLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2F1dGhlbnRpY2F0aW9uLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3NpZ25pbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQWMsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVoRCxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBYyxNQUFNLGdCQUFnQixDQUFDO0FBQy9FLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7O0FBR3BDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUduRCxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUU1RixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7OztNQUVyQyxXQUFXLEdBQUcsb0JBQW9CO0FBS3hDLE1BQU0sT0FBTyxhQUFhOzs7Ozs7O0lBQ3pCLFlBQ1MsSUFBZ0IsRUFDaEIsS0FBMEIsRUFDMUIsb0JBQXdELEVBQ3hELFFBQXFCO1FBSHJCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsVUFBSyxHQUFMLEtBQUssQ0FBcUI7UUFDMUIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFvQztRQUN4RCxhQUFRLEdBQVIsUUFBUSxDQUFhO1FBRTdCLFVBQVU7OztRQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFB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QUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQzVGLENBQ0QsQ0FBQztJQUNILENBQUM7OztZQXBGRCxVQUFVLFNBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEI7Ozs7WUFwQlEsVUFBVTtZQUtWLEtBQUs7WUFNTCxrQ0FBa0M7WUFUbEMsV0FBVzs7Ozs7Ozs7SUFxQmxCLDZCQUF3Qjs7Ozs7SUFDeEIsOEJBQWtDOzs7OztJQUNsQyw2Q0FBZ0U7Ozs7O0lBQ2hFLGlDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBNYXRTbmFja0JhciB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcclxuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIHRha2UsIGZpbHRlciwgdGFwLCBjYXRjaEVycm9yIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG4vLyBpbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gXCIuLi8uLi9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnRcIjtcclxuaW1wb3J0IHsgc3RyaW5nVGVtcGxhdGUgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuXHJcbmltcG9ydCB7IFNpZ25pbl9BcGlNb2RlbCwgVXNlck1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvbkNvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vYXV0aGVudGljYXRpb24tY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEZlYXR1cmVTdGF0ZSB9IGZyb20gXCIuLi9yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBXaG9BbUlBY3Rpb24gfSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBDb29raWUgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuXHJcbmNvbnN0IENPT0tJRV9OQU1FID0gXCJuZ3MtYXV0aGVudGljYXRpb25cIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2lnbmluU2VydmljZSB7XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxGZWF0dXJlU3RhdGU+LFxyXG5cdFx0cHJpdmF0ZSBjb25maWd1cmF0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25Db25maWd1cmF0aW9uU2VydmljZSxcclxuXHRcdHByaXZhdGUgc25hY2tCYXI6IE1hdFNuYWNrQmFyXHJcblx0KSB7XHJcblx0XHRzZXRUaW1lb3V0KCgpID0+IHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFdob0FtSUFjdGlvbigpKSwgMzAwKTtcclxuXHR9XHJcblxyXG5cdHNpZ251cChtb2RlbDogYW55KTogT2JzZXJ2YWJsZTxVc2VyTW9kZWw+IHtcclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQucGlwZShcclxuXHRcdFx0ZmlsdGVyKGNvbmZpZyA9PiBjb25maWcuZW5kcG9pbnRzLnNpZ25VcCAhPSBcIlwiKSxcclxuXHRcdFx0dGFrZSgxKSxcclxuXHRcdFx0c3dpdGNoTWFwKGNvbmZpZyA9PlxyXG5cdFx0XHRcdHRoaXMuaHR0cC5wb3N0PFNpZ25pbl9BcGlNb2RlbC5SZXNwb25zZT4oY29uZmlnLmVudltjb25maWcuc2VydmVyXSArIGNvbmZpZy5lbmRwb2ludHMuc2lnblVwLCBtb2RlbClcclxuXHRcdFx0KSxcclxuXHRcdFx0bWFwKHJlc3BvbnNlID0+IHtcclxuXHRcdFx0XHRjb25zdCB1c2VyOiBhbnkgPSBPYmplY3QuYXNzaWduKHt9LCByZXNwb25zZS5SZXN1bHQpO1xyXG5cdFx0XHRcdGlmICh1c2VyLlJvbGUpIHtcclxuXHRcdFx0XHRcdHVzZXIuUm9sZXMgPSBbIHVzZXIuUm9sZSBdO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gdXNlcjtcclxuXHRcdFx0fSlcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRzaWduaW4obW9kZWw6IGFueSk6IE9ic2VydmFibGU8VXNlck1vZGVsPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLnBpcGUoXHJcblx0XHRcdGZpbHRlcihjb25maWcgPT4gY29uZmlnLmVuZHBvaW50cy5zaWduSW4gIT0gXCJcIiksXHJcblx0XHRcdHRha2UoMSksXHJcblx0XHRcdHN3aXRjaE1hcChjb25maWcgPT4gdGhpcy5odHRwLnBvc3Q8YW55Pihjb25maWcuZW52W2NvbmZpZy5zZXJ2ZXJdICsgY29uZmlnLmVuZHBvaW50cy5zaWduSW4sIG1vZGVsKSksXHJcblx0XHRcdG1hcCh0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZy5yZXNwb25zZVRvVXNlciksXHJcblx0XHRcdG1hcCh1c2VyID0+IHtcclxuXHRcdFx0XHRpZiAodXNlci5Sb2xlKSB7XHJcblx0XHRcdFx0XHR1c2VyLlJvbGVzID0gWyB1c2VyLlJvbGUgXTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIHVzZXI7XHJcblx0XHRcdH0pLFxyXG5cdFx0XHR0YXAodXNlciA9PiB7XHJcblx0XHRcdFx0aWYgKHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnLm1vZGUgPT0gXCJ0b2tlbi1iYXNlXCIpXHJcblx0XHRcdFx0XHRDb29raWUuc2V0Q29va2llKENPT0tJRV9OQU1FLCBKU09OLnN0cmluZ2lmeSh1c2VyKSwgdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWcudG9rZW4udGltZSk7XHJcblx0XHRcdH0pLFxyXG5cdFx0XHR0YXAodXNlciA9PiB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZy5hZnRlclNpZ25pbih1c2VyKSlcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHQvLyBUT0RPOlxyXG5cdHNpZ25vdXQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdGNvbnN0IGNvbmZpZyA9IHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnO1xyXG5cdFx0Y29uc3QgdG9rZW5PYmplY3QgPSBKU09OLnBhcnNlKENvb2tpZS5nZXRDb29raWUoQ09PS0lFX05BTUUpKTtcclxuXHJcblx0XHRjb25zdCBlbmRwb2ludCA9IHN0cmluZ1RlbXBsYXRlKGNvbmZpZy5lbnZbY29uZmlnLnNlcnZlcl0gKyBjb25maWcuZW5kcG9pbnRzLnNpZ25PdXQsIHRva2VuT2JqZWN0KTtcclxuXHRcdGNvbnN0IG1ldGhvZCA9IGNvbmZpZy5lbmRwb2ludHMuc2lnbk91dE1ldGhvZCB8fCBcImdldFwiO1xyXG5cclxuXHRcdGlmIChbIFwiZ2V0XCIsIFwicHV0XCIsIFwicG9zdFwiLCBcInBhdGNoXCIsIFwiZGVsZXRlXCIgXS5pbmRleE9mKG1ldGhvZCkgPT09IC0xKSB7XHJcblx0XHRcdHRocm93RXJyb3IoYCR7bWV0aG9kfSBpcyBub3QgdmFsaWQgaHR0cCBtZXRob2QuIFsgQHN0YXJ0ZXIvYXV0aGVudGljYXRpb24vc2lnbmluc2VydmljZS9zaW5nb3V0IF1gKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gdGhpcy5odHRwW21ldGhvZF0oZW5kcG9pbnQpLnBpcGUoXHJcblx0XHRcdHRhcCgoKSA9PiB7XHJcblx0XHRcdFx0Q29va2llLmRlbGV0ZUNvb2tpZShDT09LSUVfTkFNRSk7XHJcblx0XHRcdH0pXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0d2hvQW1JKCk6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHRkZWJ1Z2dlcjtcclxuXHRcdGxldCB1c2VyID0geyBUb2tlbjogXCItLVwiIH07XHJcblx0XHRpZiAodGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWcubW9kZSA9PSBcInRva2VuLWJhc2VcIikge1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdHVzZXIgPSBKU09OLnBhcnNlKENvb2tpZS5nZXRDb29raWUoQ09PS0lFX05BTUUpKTtcclxuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHt9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLnBpcGUoXHJcblx0XHRcdGZpbHRlcihjb25maWcgPT4gY29uZmlnLmVuZHBvaW50cy53aG9BbUkgIT0gXCJcIiksXHJcblx0XHRcdHRha2UoMSksXHJcblx0XHRcdHN3aXRjaE1hcChjb25maWcgPT5cclxuXHRcdFx0XHR0aGlzLmh0dHAuZ2V0KHN0cmluZ1RlbXBsYXRlKGNvbmZpZy5lbnZbY29uZmlnLnNlcnZlcl0gKyBjb25maWcuZW5kcG9pbnRzLndob0FtSSwgeyB1c2VyIH0pKVxyXG5cdFx0XHQpXHJcblx0XHQpO1xyXG5cdH1cclxufVxyXG4iXX0=