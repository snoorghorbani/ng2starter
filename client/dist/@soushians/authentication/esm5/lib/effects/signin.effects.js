/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { switchMap, map, catchError, tap, pluck } from "rxjs/operators";
import { of } from "rxjs";
import { SignoutAction, SignInActionTypes, SigninSecceed, SigninFailed, SignupSecceed, SignupFailed } from "../actions/signin.actions";
import { SigninService } from "../services/signin.service";
import { NewCaptcha } from "../actions";
import { SigninContainerComponent } from "../smart-components/signin-container";
import { MatBottomSheet } from "@angular/material";
import { AuthenticationConfigurationService } from "../services/authentication-configuration.service";
var SigninEffects = /** @class */ (function () {
    function SigninEffects(actions$, router, signinService, configurationService, bottomSheet) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.signinService = signinService;
        this.configurationService = configurationService;
        this.bottomSheet = bottomSheet;
        this.whoAmI$ = this.actions$.pipe(ofType(SignInActionTypes.WHO_AM_I), switchMap((/**
         * @return {?}
         */
        function () {
            return _this.signinService
                .whoAmI()
                .pipe(map((/**
             * @param {?} user
             * @return {?}
             */
            function (user) { return new SigninSecceed(user); })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return of(new SigninFailed(error)); })));
        })));
        this.Signin$ = this.actions$.pipe(ofType(SignInActionTypes.SIGNIN), pluck("payload"), switchMap((/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            return _this.signinService
                .signin(payload)
                .pipe(map((/**
             * @param {?} user
             * @return {?}
             */
            function (user) { return new SigninSecceed(user); })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return of(new SigninFailed(error)); })));
        })));
        this.signup$ = this.actions$.pipe(ofType(SignInActionTypes.SIGNUP), pluck("payload"), switchMap((/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            return _this.signinService
                .signup(payload)
                .pipe(map((/**
             * @param {?} user
             * @return {?}
             */
            function (user) { return new SignupSecceed(user); })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return of(new SignupFailed(error)); })));
        })));
        this.signupSucceed$ = this.actions$.pipe(ofType(SignInActionTypes.SIGNUP_SUCCEED), tap((/**
         * @return {?}
         */
        function () {
            debugger;
            _this.router.navigate(["auth/signin"]);
        })));
        this.SignInRequired$ = this.actions$.pipe(ofType(SignInActionTypes.SIGNIN_REQUIRED), tap((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            /** @type {?} */
            var signinBottomSheetRef = _this.bottomSheet.open(SigninContainerComponent, {
                panelClass: "clear-mat-card-box"
            });
            signinBottomSheetRef.instance.signedIn$.subscribe((/**
             * @return {?}
             */
            function () {
                signinBottomSheetRef.dismiss();
            }));
            return signinBottomSheetRef;
        })));
        this.SigninSucceed$ = this.actions$.pipe(ofType(SignInActionTypes.SIGNIN_SUCCEED), tap((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            if (location.pathname.indexOf("signin") > -1)
                _this.router.navigate(["/"]);
        })));
        this.AfterSigninFiled$ = this.actions$.pipe(ofType(SignInActionTypes.SIGNIN_FAILURE), map((/**
         * @return {?}
         */
        function () { return new NewCaptcha(); })));
        this.DoSignout$ = this.actions$.pipe(ofType(SignInActionTypes.DO_SIGNOUT), switchMap((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            return _this.signinService.signout().pipe(map((/**
             * @return {?}
             */
            function () { return new SignoutAction(); })), catchError((/**
             * @param {?} err
             * @return {?}
             */
            function (err) {
                // TODO: dispatch valid action
                debugger;
                return of(err);
            })));
        })));
        // TODO
        // @Effect() Signout$ = this.actions$.ofType(SignInActionTypes.DO_SIGNOUT).pipe(map(() => new SignoutAction()));
        this.redirectToLoginPage$ = this.actions$.pipe(ofType(SignInActionTypes.SIGNIN_REDIRECT), tap((/**
         * @param {?} authed
         * @return {?}
         */
        function (authed) { return _this.router.navigate(["auth/signin"]); })));
        this.redirectAfterSignout$ = this.actions$.pipe(ofType(SignInActionTypes.SIGNOUT), tap((/**
         * @param {?} authed
         * @return {?}
         */
        function (authed) { return _this.router.navigate([_this.configurationService.config$.getValue().afterSignoutRedirectTo]); })));
    }
    SigninEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SigninEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: Router },
        { type: SigninService },
        { type: AuthenticationConfigurationService },
        { type: MatBottomSheet }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], SigninEffects.prototype, "whoAmI$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], SigninEffects.prototype, "Signin$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], SigninEffects.prototype, "signup$", void 0);
    tslib_1.__decorate([
        Effect({ dispatch: false }),
        tslib_1.__metadata("design:type", Object)
    ], SigninEffects.prototype, "signupSucceed$", void 0);
    tslib_1.__decorate([
        Effect({ dispatch: false }),
        tslib_1.__metadata("design:type", Object)
    ], SigninEffects.prototype, "SignInRequired$", void 0);
    tslib_1.__decorate([
        Effect({ dispatch: false }),
        tslib_1.__metadata("design:type", Object)
    ], SigninEffects.prototype, "SigninSucceed$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], SigninEffects.prototype, "AfterSigninFiled$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], SigninEffects.prototype, "DoSignout$", void 0);
    tslib_1.__decorate([
        Effect({ dispatch: false }),
        tslib_1.__metadata("design:type", Object)
    ], SigninEffects.prototype, "redirectToLoginPage$", void 0);
    tslib_1.__decorate([
        Effect({ dispatch: false }),
        tslib_1.__metadata("design:type", Object)
    ], SigninEffects.prototype, "redirectAfterSignout$", void 0);
    return SigninEffects;
}());
export { SigninEffects };
if (false) {
    /** @type {?} */
    SigninEffects.prototype.whoAmI$;
    /** @type {?} */
    SigninEffects.prototype.Signin$;
    /** @type {?} */
    SigninEffects.prototype.signup$;
    /** @type {?} */
    SigninEffects.prototype.signupSucceed$;
    /** @type {?} */
    SigninEffects.prototype.SignInRequired$;
    /** @type {?} */
    SigninEffects.prototype.SigninSucceed$;
    /** @type {?} */
    SigninEffects.prototype.AfterSigninFiled$;
    /** @type {?} */
    SigninEffects.prototype.DoSignout$;
    /** @type {?} */
    SigninEffects.prototype.redirectToLoginPage$;
    /** @type {?} */
    SigninEffects.prototype.redirectAfterSignout$;
    /**
     * @type {?}
     * @private
     */
    SigninEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    SigninEffects.prototype.router;
    /** @type {?} */
    SigninEffects.prototype.signinService;
    /** @type {?} */
    SigninEffects.prototype.configurationService;
    /**
     * @type {?}
     * @private
     */
    SigninEffects.prototype.bottomSheet;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmluLmVmZmVjdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2F1dGhlbnRpY2F0aW9uLyIsInNvdXJjZXMiOlsibGliL2VmZmVjdHMvc2lnbmluLmVmZmVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQWtCLE1BQU0saUJBQWlCLENBQUM7QUFHekQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXhELE9BQU8sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEUsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUxQixPQUFPLEVBQ04sYUFBYSxFQUNiLGlCQUFpQixFQUNqQixhQUFhLEVBQ2IsWUFBWSxFQUdaLGFBQWEsRUFDYixZQUFZLEVBQ1osTUFBTSwyQkFBMkIsQ0FBQztBQUNuQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDM0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUN4QyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNoRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFFdEc7SUFFQyx1QkFDUyxRQUFpQixFQUNqQixNQUFjLEVBQ2YsYUFBNEIsRUFDNUIsb0JBQXdELEVBQ3ZELFdBQTJCO1FBTHBDLGlCQU1JO1FBTEssYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2Ysa0JBQWEsR0FBYixhQUFhLENBQWU7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QUVGLHdDQVlFOztJQUVGLHVDQU1FOztJQUVGLDBDQUM4Rzs7SUFFOUcsbUNBYUU7O0lBS0YsNkNBSUU7O0lBRUYsOENBSUU7Ozs7O0lBckdELGlDQUF5Qjs7Ozs7SUFDekIsK0JBQXNCOztJQUN0QixzQ0FBbUM7O0lBQ25DLDZDQUErRDs7Ozs7SUFDL0Qsb0NBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IFJvdXRlckFjdGlvbiB9IGZyb20gXCJAbmdyeC9yb3V0ZXItc3RvcmVcIjtcclxuaW1wb3J0IHsgc3dpdGNoTWFwLCBtYXAsIGNhdGNoRXJyb3IsIHRhcCwgcGx1Y2sgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0IHtcclxuXHRTaWdub3V0QWN0aW9uLFxyXG5cdFNpZ25JbkFjdGlvblR5cGVzLFxyXG5cdFNpZ25pblNlY2NlZWQsXHJcblx0U2lnbmluRmFpbGVkLFxyXG5cdFNpZ25pblJlZGlyZWN0LFxyXG5cdFNpZ25pbixcclxuXHRTaWdudXBTZWNjZWVkLFxyXG5cdFNpZ251cEZhaWxlZFxyXG59IGZyb20gXCIuLi9hY3Rpb25zL3NpZ25pbi5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IFNpZ25pblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvc2lnbmluLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgTmV3Q2FwdGNoYSB9IGZyb20gXCIuLi9hY3Rpb25zXCI7XHJcbmltcG9ydCB7IFNpZ25pbkNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuLi9zbWFydC1jb21wb25lbnRzL3NpZ25pbi1jb250YWluZXJcIjtcclxuaW1wb3J0IHsgTWF0Qm90dG9tU2hlZXQgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25Db25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNpZ25pbkVmZmVjdHMge1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcclxuXHRcdHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcblx0XHRwdWJsaWMgc2lnbmluU2VydmljZTogU2lnbmluU2VydmljZSxcclxuXHRcdHB1YmxpYyBjb25maWd1cmF0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25Db25maWd1cmF0aW9uU2VydmljZSxcclxuXHRcdHByaXZhdGUgYm90dG9tU2hlZXQ6IE1hdEJvdHRvbVNoZWV0XHJcblx0KSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHR3aG9BbUkkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxyXG5cdFx0b2ZUeXBlKFNpZ25JbkFjdGlvblR5cGVzLldIT19BTV9JKSxcclxuXHRcdHN3aXRjaE1hcCgoKSA9PlxyXG5cdFx0XHR0aGlzLnNpZ25pblNlcnZpY2VcclxuXHRcdFx0XHQud2hvQW1JKClcclxuXHRcdFx0XHQucGlwZShtYXAodXNlciA9PiBuZXcgU2lnbmluU2VjY2VlZCh1c2VyKSksIGNhdGNoRXJyb3IoZXJyb3IgPT4gb2YobmV3IFNpZ25pbkZhaWxlZChlcnJvcikpKSlcclxuXHRcdClcclxuXHQpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRTaWduaW4kID0gdGhpcy5hY3Rpb25zJC5waXBlKFxyXG5cdFx0b2ZUeXBlKFNpZ25JbkFjdGlvblR5cGVzLlNJR05JTiksXHJcblx0XHRwbHVjayhcInBheWxvYWRcIiksXHJcblx0XHRzd2l0Y2hNYXAocGF5bG9hZCA9PlxyXG5cdFx0XHR0aGlzLnNpZ25pblNlcnZpY2VcclxuXHRcdFx0XHQuc2lnbmluKHBheWxvYWQpXHJcblx0XHRcdFx0LnBpcGUobWFwKHVzZXIgPT4gbmV3IFNpZ25pblNlY2NlZWQodXNlcikpLCBjYXRjaEVycm9yKGVycm9yID0+IG9mKG5ldyBTaWduaW5GYWlsZWQoZXJyb3IpKSkpXHJcblx0XHQpXHJcblx0KTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0c2lnbnVwJCA9IHRoaXMuYWN0aW9ucyQucGlwZShcclxuXHRcdG9mVHlwZShTaWduSW5BY3Rpb25UeXBlcy5TSUdOVVApLFxyXG5cdFx0cGx1Y2soXCJwYXlsb2FkXCIpLFxyXG5cdFx0c3dpdGNoTWFwKHBheWxvYWQgPT5cclxuXHRcdFx0dGhpcy5zaWduaW5TZXJ2aWNlXHJcblx0XHRcdFx0LnNpZ251cChwYXlsb2FkKVxyXG5cdFx0XHRcdC5waXBlKG1hcCh1c2VyID0+IG5ldyBTaWdudXBTZWNjZWVkKHVzZXIpKSwgY2F0Y2hFcnJvcihlcnJvciA9PiBvZihuZXcgU2lnbnVwRmFpbGVkKGVycm9yKSkpKVxyXG5cdFx0KVxyXG5cdCk7XHJcblxyXG5cdEBFZmZlY3QoeyBkaXNwYXRjaDogZmFsc2UgfSlcclxuXHRzaWdudXBTdWNjZWVkJCA9IHRoaXMuYWN0aW9ucyQucGlwZShcclxuXHRcdG9mVHlwZShTaWduSW5BY3Rpb25UeXBlcy5TSUdOVVBfU1VDQ0VFRCksXHJcblx0XHR0YXAoKCkgPT4ge1xyXG5cdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoWyBcImF1dGgvc2lnbmluXCIgXSk7XHJcblx0XHR9KVxyXG5cdCk7XHJcblxyXG5cdEBFZmZlY3QoeyBkaXNwYXRjaDogZmFsc2UgfSlcclxuXHRTaWduSW5SZXF1aXJlZCQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXHJcblx0XHRvZlR5cGUoU2lnbkluQWN0aW9uVHlwZXMuU0lHTklOX1JFUVVJUkVEKSxcclxuXHRcdHRhcCgoZGF0YTogYW55KSA9PiB7XHJcblx0XHRcdGNvbnN0IHNpZ25pbkJvdHRvbVNoZWV0UmVmID0gdGhpcy5ib3R0b21TaGVldC5vcGVuKFNpZ25pbkNvbnRhaW5lckNvbXBvbmVudCwge1xyXG5cdFx0XHRcdHBhbmVsQ2xhc3M6IFwiY2xlYXItbWF0LWNhcmQtYm94XCJcclxuXHRcdFx0fSk7XHJcblx0XHRcdHNpZ25pbkJvdHRvbVNoZWV0UmVmLmluc3RhbmNlLnNpZ25lZEluJC5zdWJzY3JpYmUoKCkgPT4ge1xyXG5cdFx0XHRcdHNpZ25pbkJvdHRvbVNoZWV0UmVmLmRpc21pc3MoKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHJldHVybiBzaWduaW5Cb3R0b21TaGVldFJlZjtcclxuXHRcdH0pXHJcblx0KTtcclxuXHJcblx0QEVmZmVjdCh7IGRpc3BhdGNoOiBmYWxzZSB9KVxyXG5cdFNpZ25pblN1Y2NlZWQkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxyXG5cdFx0b2ZUeXBlKFNpZ25JbkFjdGlvblR5cGVzLlNJR05JTl9TVUNDRUVEKSxcclxuXHRcdHRhcCgoZGF0YTogYW55KSA9PiB7XHJcblx0XHRcdGlmIChsb2NhdGlvbi5wYXRobmFtZS5pbmRleE9mKFwic2lnbmluXCIpID4gLTEpIHRoaXMucm91dGVyLm5hdmlnYXRlKFsgXCIvXCIgXSk7XHJcblx0XHR9KVxyXG5cdCk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdEFmdGVyU2lnbmluRmlsZWQkID0gdGhpcy5hY3Rpb25zJC5waXBlKG9mVHlwZShTaWduSW5BY3Rpb25UeXBlcy5TSUdOSU5fRkFJTFVSRSksIG1hcCgoKSA9PiBuZXcgTmV3Q2FwdGNoYSgpKSk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdERvU2lnbm91dCQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXHJcblx0XHRvZlR5cGUoU2lnbkluQWN0aW9uVHlwZXMuRE9fU0lHTk9VVCksXHJcblx0XHRzd2l0Y2hNYXAoZGF0YSA9PlxyXG5cdFx0XHR0aGlzLnNpZ25pblNlcnZpY2Uuc2lnbm91dCgpLnBpcGUoXHJcblx0XHRcdFx0bWFwKCgpID0+IG5ldyBTaWdub3V0QWN0aW9uKCkpLFxyXG5cdFx0XHRcdGNhdGNoRXJyb3IoZXJyID0+IHtcclxuXHRcdFx0XHRcdC8vIFRPRE86IGRpc3BhdGNoIHZhbGlkIGFjdGlvblxyXG5cdFx0XHRcdFx0ZGVidWdnZXI7XHJcblx0XHRcdFx0XHRyZXR1cm4gb2YoZXJyKTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpXHJcblx0XHQpXHJcblx0KTtcclxuXHJcblx0Ly8gVE9ET1xyXG5cdC8vIEBFZmZlY3QoKSBTaWdub3V0JCA9IHRoaXMuYWN0aW9ucyQub2ZUeXBlKFNpZ25JbkFjdGlvblR5cGVzLkRPX1NJR05PVVQpLnBpcGUobWFwKCgpID0+IG5ldyBTaWdub3V0QWN0aW9uKCkpKTtcclxuXHJcblx0QEVmZmVjdCh7IGRpc3BhdGNoOiBmYWxzZSB9KVxyXG5cdHJlZGlyZWN0VG9Mb2dpblBhZ2UkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxyXG5cdFx0b2ZUeXBlKFNpZ25JbkFjdGlvblR5cGVzLlNJR05JTl9SRURJUkVDVCksXHJcblx0XHR0YXAoYXV0aGVkID0+IHRoaXMucm91dGVyLm5hdmlnYXRlKFsgXCJhdXRoL3NpZ25pblwiIF0pKVxyXG5cdCk7XHJcblxyXG5cdEBFZmZlY3QoeyBkaXNwYXRjaDogZmFsc2UgfSlcclxuXHRyZWRpcmVjdEFmdGVyU2lnbm91dCQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXHJcblx0XHRvZlR5cGUoU2lnbkluQWN0aW9uVHlwZXMuU0lHTk9VVCksXHJcblx0XHR0YXAoYXV0aGVkID0+IHRoaXMucm91dGVyLm5hdmlnYXRlKFsgdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLmdldFZhbHVlKCkuYWZ0ZXJTaWdub3V0UmVkaXJlY3RUbyBdKSlcclxuXHQpO1xyXG59XHJcbiJdfQ==