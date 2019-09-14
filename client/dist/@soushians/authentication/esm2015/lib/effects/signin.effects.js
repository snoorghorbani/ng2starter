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
export class SigninEffects {
    /**
     * @param {?} actions$
     * @param {?} router
     * @param {?} signinService
     * @param {?} configurationService
     * @param {?} bottomSheet
     */
    constructor(actions$, router, signinService, configurationService, bottomSheet) {
        this.actions$ = actions$;
        this.router = router;
        this.signinService = signinService;
        this.configurationService = configurationService;
        this.bottomSheet = bottomSheet;
        this.whoAmI$ = this.actions$.pipe(ofType(SignInActionTypes.WHO_AM_I), switchMap((/**
         * @return {?}
         */
        () => this.signinService
            .whoAmI()
            .pipe(map((/**
         * @param {?} user
         * @return {?}
         */
        user => new SigninSecceed(user))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new SigninFailed(error))))))));
        this.Signin$ = this.actions$.pipe(ofType(SignInActionTypes.SIGNIN), pluck("payload"), switchMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => this.signinService
            .signin(payload)
            .pipe(map((/**
         * @param {?} user
         * @return {?}
         */
        user => new SigninSecceed(user))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new SigninFailed(error))))))));
        this.signup$ = this.actions$.pipe(ofType(SignInActionTypes.SIGNUP), pluck("payload"), switchMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => this.signinService
            .signup(payload)
            .pipe(map((/**
         * @param {?} user
         * @return {?}
         */
        user => new SignupSecceed(user))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new SignupFailed(error))))))));
        this.signupSucceed$ = this.actions$.pipe(ofType(SignInActionTypes.SIGNUP_SUCCEED), tap((/**
         * @return {?}
         */
        () => {
            debugger;
            this.router.navigate(["auth/signin"]);
        })));
        this.SignInRequired$ = this.actions$.pipe(ofType(SignInActionTypes.SIGNIN_REQUIRED), tap((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            /** @type {?} */
            const signinBottomSheetRef = this.bottomSheet.open(SigninContainerComponent, {
                panelClass: "clear-mat-card-box"
            });
            signinBottomSheetRef.instance.signedIn$.subscribe((/**
             * @return {?}
             */
            () => {
                signinBottomSheetRef.dismiss();
            }));
            return signinBottomSheetRef;
        })));
        this.SigninSucceed$ = this.actions$.pipe(ofType(SignInActionTypes.SIGNIN_SUCCEED), tap((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            if (location.pathname.indexOf("signin") > -1)
                this.router.navigate(["/"]);
        })));
        this.AfterSigninFiled$ = this.actions$.pipe(ofType(SignInActionTypes.SIGNIN_FAILURE), map((/**
         * @return {?}
         */
        () => new NewCaptcha())));
        this.DoSignout$ = this.actions$.pipe(ofType(SignInActionTypes.DO_SIGNOUT), switchMap((/**
         * @param {?} data
         * @return {?}
         */
        data => this.signinService.signout().pipe(map((/**
         * @return {?}
         */
        () => new SignoutAction())), catchError((/**
         * @param {?} err
         * @return {?}
         */
        err => {
            // TODO: dispatch valid action
            debugger;
            return of(err);
        }))))));
        // TODO
        // @Effect() Signout$ = this.actions$.ofType(SignInActionTypes.DO_SIGNOUT).pipe(map(() => new SignoutAction()));
        this.redirectToLoginPage$ = this.actions$.pipe(ofType(SignInActionTypes.SIGNIN_REDIRECT), tap((/**
         * @param {?} authed
         * @return {?}
         */
        authed => this.router.navigate(["auth/signin"]))));
        this.redirectAfterSignout$ = this.actions$.pipe(ofType(SignInActionTypes.SIGNOUT), tap((/**
         * @param {?} authed
         * @return {?}
         */
        authed => this.router.navigate([this.configurationService.config$.getValue().afterSignoutRedirectTo]))));
    }
}
SigninEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SigninEffects.ctorParameters = () => [
    { type: Actions },
    { type: Router },
    { type: SigninService },
    { type: AuthenticationConfigurationService },
    { type: MatBottomSheet }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmluLmVmZmVjdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2F1dGhlbnRpY2F0aW9uLyIsInNvdXJjZXMiOlsibGliL2VmZmVjdHMvc2lnbmluLmVmZmVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQWtCLE1BQU0saUJBQWlCLENBQUM7QUFHekQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXhELE9BQU8sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEUsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUxQixPQUFPLEVBQ04sYUFBYSxFQUNiLGlCQUFpQixFQUNqQixhQUFhLEVBQ2IsWUFBWSxFQUdaLGFBQWEsRUFDYixZQUFZLEVBQ1osTUFBTSwyQkFBMkIsQ0FBQztBQUNuQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDM0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUN4QyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNoRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFHdEcsTUFBTSxPQUFPLGFBQWE7Ozs7Ozs7O0lBQ3pCLFlBQ1MsUUFBaUIsRUFDakIsTUFBYyxFQUNmLGFBQTRCLEVBQzVCLG9CQUF3RCxFQUN2RCxXQUEyQjtRQUozQixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZixrQkFBYSxHQUFi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Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgUm91dGVyQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3JvdXRlci1zdG9yZVwiO1xyXG5pbXBvcnQgeyBzd2l0Y2hNYXAsIG1hcCwgY2F0Y2hFcnJvciwgdGFwLCBwbHVjayB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5pbXBvcnQge1xyXG5cdFNpZ25vdXRBY3Rpb24sXHJcblx0U2lnbkluQWN0aW9uVHlwZXMsXHJcblx0U2lnbmluU2VjY2VlZCxcclxuXHRTaWduaW5GYWlsZWQsXHJcblx0U2lnbmluUmVkaXJlY3QsXHJcblx0U2lnbmluLFxyXG5cdFNpZ251cFNlY2NlZWQsXHJcblx0U2lnbnVwRmFpbGVkXHJcbn0gZnJvbSBcIi4uL2FjdGlvbnMvc2lnbmluLmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgU2lnbmluU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zaWduaW4uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBOZXdDYXB0Y2hhIH0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcclxuaW1wb3J0IHsgU2lnbmluQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4uL3NtYXJ0LWNvbXBvbmVudHMvc2lnbmluLWNvbnRhaW5lclwiO1xyXG5pbXBvcnQgeyBNYXRCb3R0b21TaGVldCB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvbkNvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU2lnbmluRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxyXG5cdFx0cHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuXHRcdHB1YmxpYyBzaWduaW5TZXJ2aWNlOiBTaWduaW5TZXJ2aWNlLFxyXG5cdFx0cHVibGljIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvbkNvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBib3R0b21TaGVldDogTWF0Qm90dG9tU2hlZXRcclxuXHQpIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdHdob0FtSSQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXHJcblx0XHRvZlR5cGUoU2lnbkluQWN0aW9uVHlwZXMuV0hPX0FNX0kpLFxyXG5cdFx0c3dpdGNoTWFwKCgpID0+XHJcblx0XHRcdHRoaXMuc2lnbmluU2VydmljZVxyXG5cdFx0XHRcdC53aG9BbUkoKVxyXG5cdFx0XHRcdC5waXBlKG1hcCh1c2VyID0+IG5ldyBTaWduaW5TZWNjZWVkKHVzZXIpKSwgY2F0Y2hFcnJvcihlcnJvciA9PiBvZihuZXcgU2lnbmluRmFpbGVkKGVycm9yKSkpKVxyXG5cdFx0KVxyXG5cdCk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdFNpZ25pbiQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXHJcblx0XHRvZlR5cGUoU2lnbkluQWN0aW9uVHlwZXMuU0lHTklOKSxcclxuXHRcdHBsdWNrKFwicGF5bG9hZFwiKSxcclxuXHRcdHN3aXRjaE1hcChwYXlsb2FkID0+XHJcblx0XHRcdHRoaXMuc2lnbmluU2VydmljZVxyXG5cdFx0XHRcdC5zaWduaW4ocGF5bG9hZClcclxuXHRcdFx0XHQucGlwZShtYXAodXNlciA9PiBuZXcgU2lnbmluU2VjY2VlZCh1c2VyKSksIGNhdGNoRXJyb3IoZXJyb3IgPT4gb2YobmV3IFNpZ25pbkZhaWxlZChlcnJvcikpKSlcclxuXHRcdClcclxuXHQpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRzaWdudXAkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxyXG5cdFx0b2ZUeXBlKFNpZ25JbkFjdGlvblR5cGVzLlNJR05VUCksXHJcblx0XHRwbHVjayhcInBheWxvYWRcIiksXHJcblx0XHRzd2l0Y2hNYXAocGF5bG9hZCA9PlxyXG5cdFx0XHR0aGlzLnNpZ25pblNlcnZpY2VcclxuXHRcdFx0XHQuc2lnbnVwKHBheWxvYWQpXHJcblx0XHRcdFx0LnBpcGUobWFwKHVzZXIgPT4gbmV3IFNpZ251cFNlY2NlZWQodXNlcikpLCBjYXRjaEVycm9yKGVycm9yID0+IG9mKG5ldyBTaWdudXBGYWlsZWQoZXJyb3IpKSkpXHJcblx0XHQpXHJcblx0KTtcclxuXHJcblx0QEVmZmVjdCh7IGRpc3BhdGNoOiBmYWxzZSB9KVxyXG5cdHNpZ251cFN1Y2NlZWQkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxyXG5cdFx0b2ZUeXBlKFNpZ25JbkFjdGlvblR5cGVzLlNJR05VUF9TVUNDRUVEKSxcclxuXHRcdHRhcCgoKSA9PiB7XHJcblx0XHRcdGRlYnVnZ2VyO1xyXG5cdFx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbIFwiYXV0aC9zaWduaW5cIiBdKTtcclxuXHRcdH0pXHJcblx0KTtcclxuXHJcblx0QEVmZmVjdCh7IGRpc3BhdGNoOiBmYWxzZSB9KVxyXG5cdFNpZ25JblJlcXVpcmVkJCA9IHRoaXMuYWN0aW9ucyQucGlwZShcclxuXHRcdG9mVHlwZShTaWduSW5BY3Rpb25UeXBlcy5TSUdOSU5fUkVRVUlSRUQpLFxyXG5cdFx0dGFwKChkYXRhOiBhbnkpID0+IHtcclxuXHRcdFx0Y29uc3Qgc2lnbmluQm90dG9tU2hlZXRSZWYgPSB0aGlzLmJvdHRvbVNoZWV0Lm9wZW4oU2lnbmluQ29udGFpbmVyQ29tcG9uZW50LCB7XHJcblx0XHRcdFx0cGFuZWxDbGFzczogXCJjbGVhci1tYXQtY2FyZC1ib3hcIlxyXG5cdFx0XHR9KTtcclxuXHRcdFx0c2lnbmluQm90dG9tU2hlZXRSZWYuaW5zdGFuY2Uuc2lnbmVkSW4kLnN1YnNjcmliZSgoKSA9PiB7XHJcblx0XHRcdFx0c2lnbmluQm90dG9tU2hlZXRSZWYuZGlzbWlzcygpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0cmV0dXJuIHNpZ25pbkJvdHRvbVNoZWV0UmVmO1xyXG5cdFx0fSlcclxuXHQpO1xyXG5cclxuXHRARWZmZWN0KHsgZGlzcGF0Y2g6IGZhbHNlIH0pXHJcblx0U2lnbmluU3VjY2VlZCQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXHJcblx0XHRvZlR5cGUoU2lnbkluQWN0aW9uVHlwZXMuU0lHTklOX1NVQ0NFRUQpLFxyXG5cdFx0dGFwKChkYXRhOiBhbnkpID0+IHtcclxuXHRcdFx0aWYgKGxvY2F0aW9uLnBhdGhuYW1lLmluZGV4T2YoXCJzaWduaW5cIikgPiAtMSkgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWyBcIi9cIiBdKTtcclxuXHRcdH0pXHJcblx0KTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0QWZ0ZXJTaWduaW5GaWxlZCQgPSB0aGlzLmFjdGlvbnMkLnBpcGUob2ZUeXBlKFNpZ25JbkFjdGlvblR5cGVzLlNJR05JTl9GQUlMVVJFKSwgbWFwKCgpID0+IG5ldyBOZXdDYXB0Y2hhKCkpKTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0RG9TaWdub3V0JCA9IHRoaXMuYWN0aW9ucyQucGlwZShcclxuXHRcdG9mVHlwZShTaWduSW5BY3Rpb25UeXBlcy5ET19TSUdOT1VUKSxcclxuXHRcdHN3aXRjaE1hcChkYXRhID0+XHJcblx0XHRcdHRoaXMuc2lnbmluU2VydmljZS5zaWdub3V0KCkucGlwZShcclxuXHRcdFx0XHRtYXAoKCkgPT4gbmV3IFNpZ25vdXRBY3Rpb24oKSksXHJcblx0XHRcdFx0Y2F0Y2hFcnJvcihlcnIgPT4ge1xyXG5cdFx0XHRcdFx0Ly8gVE9ETzogZGlzcGF0Y2ggdmFsaWQgYWN0aW9uXHJcblx0XHRcdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdFx0XHRcdHJldHVybiBvZihlcnIpO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdClcclxuXHRcdClcclxuXHQpO1xyXG5cclxuXHQvLyBUT0RPXHJcblx0Ly8gQEVmZmVjdCgpIFNpZ25vdXQkID0gdGhpcy5hY3Rpb25zJC5vZlR5cGUoU2lnbkluQWN0aW9uVHlwZXMuRE9fU0lHTk9VVCkucGlwZShtYXAoKCkgPT4gbmV3IFNpZ25vdXRBY3Rpb24oKSkpO1xyXG5cclxuXHRARWZmZWN0KHsgZGlzcGF0Y2g6IGZhbHNlIH0pXHJcblx0cmVkaXJlY3RUb0xvZ2luUGFnZSQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXHJcblx0XHRvZlR5cGUoU2lnbkluQWN0aW9uVHlwZXMuU0lHTklOX1JFRElSRUNUKSxcclxuXHRcdHRhcChhdXRoZWQgPT4gdGhpcy5yb3V0ZXIubmF2aWdhdGUoWyBcImF1dGgvc2lnbmluXCIgXSkpXHJcblx0KTtcclxuXHJcblx0QEVmZmVjdCh7IGRpc3BhdGNoOiBmYWxzZSB9KVxyXG5cdHJlZGlyZWN0QWZ0ZXJTaWdub3V0JCA9IHRoaXMuYWN0aW9ucyQucGlwZShcclxuXHRcdG9mVHlwZShTaWduSW5BY3Rpb25UeXBlcy5TSUdOT1VUKSxcclxuXHRcdHRhcChhdXRoZWQgPT4gdGhpcy5yb3V0ZXIubmF2aWdhdGUoWyB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQuZ2V0VmFsdWUoKS5hZnRlclNpZ25vdXRSZWRpcmVjdFRvIF0pKVxyXG5cdCk7XHJcbn1cclxuIl19