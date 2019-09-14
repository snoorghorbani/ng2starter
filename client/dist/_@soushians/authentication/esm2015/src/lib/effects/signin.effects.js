/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.whoAmI$ = this.actions$.pipe(ofType(SignInActionTypes.WHO_AM_I), switchMap(() => this.signinService
            .whoAmI()
            .pipe(map(user => new SigninSecceed(user)), catchError(error => of(new SigninFailed(error))))));
        this.Signin$ = this.actions$.pipe(ofType(SignInActionTypes.SIGNIN), pluck("payload"), switchMap(payload => this.signinService
            .signin(payload)
            .pipe(map(user => new SigninSecceed(user)), catchError(error => of(new SigninFailed(error))))));
        this.signup$ = this.actions$.pipe(ofType(SignInActionTypes.SIGNUP), pluck("payload"), switchMap(payload => this.signinService
            .signup(payload)
            .pipe(map(user => new SignupSecceed(user)), catchError(error => of(new SignupFailed(error))))));
        this.signupSucceed$ = this.actions$.pipe(ofType(SignInActionTypes.SIGNUP_SUCCEED), tap(() => {
            debugger;
            this.router.navigate(["auth/signin"]);
        }));
        this.SignInRequired$ = this.actions$.pipe(ofType(SignInActionTypes.SIGNIN_REQUIRED), tap((data) => {
            /** @type {?} */
            const signinBottomSheetRef = this.bottomSheet.open(SigninContainerComponent, {
                panelClass: "clear-mat-card-box"
            });
            signinBottomSheetRef.instance.signedIn$.subscribe(() => {
                signinBottomSheetRef.dismiss();
            });
            return signinBottomSheetRef;
        }));
        this.SigninSucceed$ = this.actions$.pipe(ofType(SignInActionTypes.SIGNIN_SUCCEED), tap((data) => {
            if (location.pathname.indexOf("signin") > -1)
                this.router.navigate(["/"]);
        }));
        this.AfterSigninFiled$ = this.actions$.pipe(ofType(SignInActionTypes.SIGNIN_FAILURE), map(() => new NewCaptcha()));
        this.DoSignout$ = this.actions$.pipe(ofType(SignInActionTypes.DO_SIGNOUT), switchMap(data => this.signinService.signout().pipe(map(() => new SignoutAction()), catchError(err => {
            // TODO: dispatch valid action
            debugger;
            return of(err);
        }))));
        // TODO
        // @Effect() Signout$ = this.actions$.ofType(SignInActionTypes.DO_SIGNOUT).pipe(map(() => new SignoutAction()));
        this.redirectToLoginPage$ = this.actions$.pipe(ofType(SignInActionTypes.SIGNIN_REDIRECT), tap(authed => this.router.navigate(["auth/signin"])));
        this.redirectAfterSignout$ = this.actions$.pipe(ofType(SignInActionTypes.SIGNOUT), tap(authed => this.router.navigate([this.configurationService.config$.getValue().afterSignoutRedirectTo])));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmluLmVmZmVjdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2F1dGhlbnRpY2F0aW9uLyIsInNvdXJjZXMiOlsic3JjL2xpYi9lZmZlY3RzL3NpZ25pbi5lZmZlY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFrQixNQUFNLGlCQUFpQixDQUFDO0FBR3pELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV4RCxPQUFPLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFMUIsT0FBTyxFQUNOLGFBQWEsRUFDYixpQkFBaUIsRUFDakIsYUFBYSxFQUNiLFlBQVksRUFHWixhQUFhLEVBQ2IsWUFBWSxFQUNaLE1BQU0sMkJBQTJCLENBQUM7QUFDbkMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzNELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDeEMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBR3RHLE1BQU0sT0FBTyxhQUFhOzs7Ozs7OztJQUN6QixZQUNTLFFBQWlCLEVBQ2pCLE1BQWMsRUFDZixhQUE0QixFQUM1QixvQkFBd0QsRUFDdkQsV0FBMkI7UUFKM0IsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2Ysa0JBQWEs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ZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgUm91dGVyQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3JvdXRlci1zdG9yZVwiO1xyXG5pbXBvcnQgeyBzd2l0Y2hNYXAsIG1hcCwgY2F0Y2hFcnJvciwgdGFwLCBwbHVjayB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5pbXBvcnQge1xyXG5cdFNpZ25vdXRBY3Rpb24sXHJcblx0U2lnbkluQWN0aW9uVHlwZXMsXHJcblx0U2lnbmluU2VjY2VlZCxcclxuXHRTaWduaW5GYWlsZWQsXHJcblx0U2lnbmluUmVkaXJlY3QsXHJcblx0U2lnbmluLFxyXG5cdFNpZ251cFNlY2NlZWQsXHJcblx0U2lnbnVwRmFpbGVkXHJcbn0gZnJvbSBcIi4uL2FjdGlvbnMvc2lnbmluLmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgU2lnbmluU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zaWduaW4uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBOZXdDYXB0Y2hhIH0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcclxuaW1wb3J0IHsgU2lnbmluQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4uL3NtYXJ0LWNvbXBvbmVudHMvc2lnbmluLWNvbnRhaW5lclwiO1xyXG5pbXBvcnQgeyBNYXRCb3R0b21TaGVldCB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvbkNvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU2lnbmluRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxyXG5cdFx0cHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuXHRcdHB1YmxpYyBzaWduaW5TZXJ2aWNlOiBTaWduaW5TZXJ2aWNlLFxyXG5cdFx0cHVibGljIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvbkNvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBib3R0b21TaGVldDogTWF0Qm90dG9tU2hlZXRcclxuXHQpIHt9XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdHdob0FtSSQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXHJcblx0XHRvZlR5cGUoU2lnbkluQWN0aW9uVHlwZXMuV0hPX0FNX0kpLFxyXG5cdFx0c3dpdGNoTWFwKCgpID0+XHJcblx0XHRcdHRoaXMuc2lnbmluU2VydmljZVxyXG5cdFx0XHRcdC53aG9BbUkoKVxyXG5cdFx0XHRcdC5waXBlKG1hcCh1c2VyID0+IG5ldyBTaWduaW5TZWNjZWVkKHVzZXIpKSwgY2F0Y2hFcnJvcihlcnJvciA9PiBvZihuZXcgU2lnbmluRmFpbGVkKGVycm9yKSkpKVxyXG5cdFx0KVxyXG5cdCk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdFNpZ25pbiQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXHJcblx0XHRvZlR5cGUoU2lnbkluQWN0aW9uVHlwZXMuU0lHTklOKSxcclxuXHRcdHBsdWNrKFwicGF5bG9hZFwiKSxcclxuXHRcdHN3aXRjaE1hcChwYXlsb2FkID0+XHJcblx0XHRcdHRoaXMuc2lnbmluU2VydmljZVxyXG5cdFx0XHRcdC5zaWduaW4ocGF5bG9hZClcclxuXHRcdFx0XHQucGlwZShtYXAodXNlciA9PiBuZXcgU2lnbmluU2VjY2VlZCh1c2VyKSksIGNhdGNoRXJyb3IoZXJyb3IgPT4gb2YobmV3IFNpZ25pbkZhaWxlZChlcnJvcikpKSlcclxuXHRcdClcclxuXHQpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRzaWdudXAkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxyXG5cdFx0b2ZUeXBlKFNpZ25JbkFjdGlvblR5cGVzLlNJR05VUCksXHJcblx0XHRwbHVjayhcInBheWxvYWRcIiksXHJcblx0XHRzd2l0Y2hNYXAocGF5bG9hZCA9PlxyXG5cdFx0XHR0aGlzLnNpZ25pblNlcnZpY2VcclxuXHRcdFx0XHQuc2lnbnVwKHBheWxvYWQpXHJcblx0XHRcdFx0LnBpcGUobWFwKHVzZXIgPT4gbmV3IFNpZ251cFNlY2NlZWQodXNlcikpLCBjYXRjaEVycm9yKGVycm9yID0+IG9mKG5ldyBTaWdudXBGYWlsZWQoZXJyb3IpKSkpXHJcblx0XHQpXHJcblx0KTtcclxuXHJcblx0QEVmZmVjdCh7IGRpc3BhdGNoOiBmYWxzZSB9KVxyXG5cdHNpZ251cFN1Y2NlZWQkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxyXG5cdFx0b2ZUeXBlKFNpZ25JbkFjdGlvblR5cGVzLlNJR05VUF9TVUNDRUVEKSxcclxuXHRcdHRhcCgoKSA9PiB7XHJcblx0XHRcdGRlYnVnZ2VyO1xyXG5cdFx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbIFwiYXV0aC9zaWduaW5cIiBdKTtcclxuXHRcdH0pXHJcblx0KTtcclxuXHJcblx0QEVmZmVjdCh7IGRpc3BhdGNoOiBmYWxzZSB9KVxyXG5cdFNpZ25JblJlcXVpcmVkJCA9IHRoaXMuYWN0aW9ucyQucGlwZShcclxuXHRcdG9mVHlwZShTaWduSW5BY3Rpb25UeXBlcy5TSUdOSU5fUkVRVUlSRUQpLFxyXG5cdFx0dGFwKChkYXRhOiBhbnkpID0+IHtcclxuXHRcdFx0Y29uc3Qgc2lnbmluQm90dG9tU2hlZXRSZWYgPSB0aGlzLmJvdHRvbVNoZWV0Lm9wZW4oU2lnbmluQ29udGFpbmVyQ29tcG9uZW50LCB7XHJcblx0XHRcdFx0cGFuZWxDbGFzczogXCJjbGVhci1tYXQtY2FyZC1ib3hcIlxyXG5cdFx0XHR9KTtcclxuXHRcdFx0c2lnbmluQm90dG9tU2hlZXRSZWYuaW5zdGFuY2Uuc2lnbmVkSW4kLnN1YnNjcmliZSgoKSA9PiB7XHJcblx0XHRcdFx0c2lnbmluQm90dG9tU2hlZXRSZWYuZGlzbWlzcygpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0cmV0dXJuIHNpZ25pbkJvdHRvbVNoZWV0UmVmO1xyXG5cdFx0fSlcclxuXHQpO1xyXG5cclxuXHRARWZmZWN0KHsgZGlzcGF0Y2g6IGZhbHNlIH0pXHJcblx0U2lnbmluU3VjY2VlZCQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXHJcblx0XHRvZlR5cGUoU2lnbkluQWN0aW9uVHlwZXMuU0lHTklOX1NVQ0NFRUQpLFxyXG5cdFx0dGFwKChkYXRhOiBhbnkpID0+IHtcclxuXHRcdFx0aWYgKGxvY2F0aW9uLnBhdGhuYW1lLmluZGV4T2YoXCJzaWduaW5cIikgPiAtMSkgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWyBcIi9cIiBdKTtcclxuXHRcdH0pXHJcblx0KTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0QWZ0ZXJTaWduaW5GaWxlZCQgPSB0aGlzLmFjdGlvbnMkLnBpcGUob2ZUeXBlKFNpZ25JbkFjdGlvblR5cGVzLlNJR05JTl9GQUlMVVJFKSwgbWFwKCgpID0+IG5ldyBOZXdDYXB0Y2hhKCkpKTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0RG9TaWdub3V0JCA9IHRoaXMuYWN0aW9ucyQucGlwZShcclxuXHRcdG9mVHlwZShTaWduSW5BY3Rpb25UeXBlcy5ET19TSUdOT1VUKSxcclxuXHRcdHN3aXRjaE1hcChkYXRhID0+XHJcblx0XHRcdHRoaXMuc2lnbmluU2VydmljZS5zaWdub3V0KCkucGlwZShcclxuXHRcdFx0XHRtYXAoKCkgPT4gbmV3IFNpZ25vdXRBY3Rpb24oKSksXHJcblx0XHRcdFx0Y2F0Y2hFcnJvcihlcnIgPT4ge1xyXG5cdFx0XHRcdFx0Ly8gVE9ETzogZGlzcGF0Y2ggdmFsaWQgYWN0aW9uXHJcblx0XHRcdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdFx0XHRcdHJldHVybiBvZihlcnIpO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdClcclxuXHRcdClcclxuXHQpO1xyXG5cclxuXHQvLyBUT0RPXHJcblx0Ly8gQEVmZmVjdCgpIFNpZ25vdXQkID0gdGhpcy5hY3Rpb25zJC5vZlR5cGUoU2lnbkluQWN0aW9uVHlwZXMuRE9fU0lHTk9VVCkucGlwZShtYXAoKCkgPT4gbmV3IFNpZ25vdXRBY3Rpb24oKSkpO1xyXG5cclxuXHRARWZmZWN0KHsgZGlzcGF0Y2g6IGZhbHNlIH0pXHJcblx0cmVkaXJlY3RUb0xvZ2luUGFnZSQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXHJcblx0XHRvZlR5cGUoU2lnbkluQWN0aW9uVHlwZXMuU0lHTklOX1JFRElSRUNUKSxcclxuXHRcdHRhcChhdXRoZWQgPT4gdGhpcy5yb3V0ZXIubmF2aWdhdGUoWyBcImF1dGgvc2lnbmluXCIgXSkpXHJcblx0KTtcclxuXHJcblx0QEVmZmVjdCh7IGRpc3BhdGNoOiBmYWxzZSB9KVxyXG5cdHJlZGlyZWN0QWZ0ZXJTaWdub3V0JCA9IHRoaXMuYWN0aW9ucyQucGlwZShcclxuXHRcdG9mVHlwZShTaWduSW5BY3Rpb25UeXBlcy5TSUdOT1VUKSxcclxuXHRcdHRhcChhdXRoZWQgPT4gdGhpcy5yb3V0ZXIubmF2aWdhdGUoWyB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQuZ2V0VmFsdWUoKS5hZnRlclNpZ25vdXRSZWRpcmVjdFRvIF0pKVxyXG5cdCk7XHJcbn1cclxuIl19