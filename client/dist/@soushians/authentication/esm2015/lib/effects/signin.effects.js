/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, Effect } from "@ngrx/effects";
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
        this.whoAmI$ = this.actions$
            .ofType(SignInActionTypes.WHO_AM_I)
            .pipe(switchMap(() => this.signinService
            .whoAmI()
            .pipe(map(user => new SigninSecceed(user)), catchError(error => of(new SigninFailed(error))))));
        this.Signin$ = this.actions$
            .ofType(SignInActionTypes.SIGNIN)
            .pipe(pluck("payload"), switchMap(payload => this.signinService
            .signin(payload)
            .pipe(map(user => new SigninSecceed(user)), catchError(error => of(new SigninFailed(error))))));
        this.signup$ = this.actions$
            .ofType(SignInActionTypes.SIGNUP)
            .pipe(pluck("payload"), switchMap(payload => this.signinService
            .signup(payload)
            .pipe(map(user => new SignupSecceed(user)), catchError(error => of(new SignupFailed(error))))));
        this.signupSucceed$ = this.actions$.ofType(SignInActionTypes.SIGNUP_SUCCEED).pipe(tap(() => {
            debugger;
            this.router.navigate(["auth/signin"]);
        }));
        this.SignInRequired$ = this.actions$.ofType(SignInActionTypes.SIGNIN_REQUIRED).pipe(tap((data) => {
            /** @type {?} */
            const signinBottomSheetRef = this.bottomSheet.open(SigninContainerComponent, {
                panelClass: "clear-mat-card-box"
            });
            signinBottomSheetRef.instance.signedIn$.subscribe(() => {
                signinBottomSheetRef.dismiss();
            });
            return signinBottomSheetRef;
        }));
        this.SigninSucceed$ = this.actions$.ofType(SignInActionTypes.SIGNIN_SUCCEED).pipe(tap((data) => {
            if (location.pathname.indexOf("signin") > -1)
                this.router.navigate(["/"]);
        }));
        this.AfterSigninFiled$ = this.actions$.ofType(SignInActionTypes.SIGNIN_FAILURE).map(() => new NewCaptcha());
        this.DoSignout$ = this.actions$.ofType(SignInActionTypes.DO_SIGNOUT).pipe(switchMap(data => this.signinService.signout().pipe(map(() => new SignoutAction()), catchError(err => {
            // TODO: dispatch valid action
            debugger;
            return of(err);
        }))));
        // TODO
        // @Effect() Signout$ = this.actions$.ofType(SignInActionTypes.DO_SIGNOUT).pipe(map(() => new SignoutAction()));
        this.redirectToLoginPage$ = this.actions$
            .ofType(SignInActionTypes.SIGNIN_REDIRECT)
            .pipe(tap(authed => this.router.navigate(["auth/signin"])));
        this.redirectAfterSignout$ = this.actions$
            .ofType(SignInActionTypes.SIGNOUT)
            .pipe(tap(authed => this.router.navigate([this.configurationService.config$.getValue().afterSignoutRedirectTo])));
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
    /** @type {?} */
    SigninEffects.prototype.actions$;
    /** @type {?} */
    SigninEffects.prototype.router;
    /** @type {?} */
    SigninEffects.prototype.signinService;
    /** @type {?} */
    SigninEffects.prototype.configurationService;
    /** @type {?} */
    SigninEffects.prototype.bottomSheet;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmluLmVmZmVjdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2F1dGhlbnRpY2F0aW9uLyIsInNvdXJjZXMiOlsibGliL2VmZmVjdHMvc2lnbmluLmVmZmVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQWtCLE1BQU0saUJBQWlCLENBQUM7QUFHekQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFaEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTFCLE9BQU8sRUFDTixhQUFhLEVBQ2IsaUJBQWlCLEVBQ2pCLGFBQWEsRUFDYixZQUFZLEVBR1osYUFBYSxFQUNiLFlBQVksRUFDWixNQUFNLDJCQUEyQixDQUFDO0FBQ25DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3hDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUd0RyxNQUFNLE9BQU8sYUFBYTs7Ozs7Ozs7SUFDekIsWUFDUyxVQUNBLFFBQ0QsZUFDQSxzQkFDQztRQUpBLGFBQVEsR0FBUixRQUFRO1FBQ1IsV0FBTSxHQUFOLE1BQU07UUFDUCxrQkFBYSxHQUFiLGFBQWE7UUFDYix5QkFBb0IsR0FBcEIsb0JBQW9CO1FBQ25CLGdCQUFXLEdBQVgsV0FBVztR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QkYsT0FBTztZQUhQLE1BQU07WUFrQk4sYUFBYTtZQUliLGtDQUFrQztZQURsQyxjQUFjOzs7SUFhckIsTUFBTSxFQUFFOzs7O0lBV1IsTUFBTSxFQUFFOzs7O0lBWVIsTUFBTSxFQUFFOzs7O0lBWVIsTUFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDOzs7O0lBUTNCLE1BQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQzs7OztJQWEzQixNQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUM7Ozs7SUFPM0IsTUFBTSxFQUFFOzs7O0lBRVIsTUFBTSxFQUFFOzs7O0lBaUJSLE1BQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQzs7OztJQUszQixNQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IFJvdXRlckFjdGlvbiB9IGZyb20gXCJAbmdyeC9yb3V0ZXItc3RvcmVcIjtcclxuaW1wb3J0IHsgc3dpdGNoTWFwLCBtYXAsIGNhdGNoRXJyb3IsIHRhcCwgcGx1Y2sgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0IHtcclxuXHRTaWdub3V0QWN0aW9uLFxyXG5cdFNpZ25JbkFjdGlvblR5cGVzLFxyXG5cdFNpZ25pblNlY2NlZWQsXHJcblx0U2lnbmluRmFpbGVkLFxyXG5cdFNpZ25pblJlZGlyZWN0LFxyXG5cdFNpZ25pbixcclxuXHRTaWdudXBTZWNjZWVkLFxyXG5cdFNpZ251cEZhaWxlZFxyXG59IGZyb20gXCIuLi9hY3Rpb25zL3NpZ25pbi5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IFNpZ25pblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvc2lnbmluLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgTmV3Q2FwdGNoYSB9IGZyb20gXCIuLi9hY3Rpb25zXCI7XHJcbmltcG9ydCB7IFNpZ25pbkNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuLi9zbWFydC1jb21wb25lbnRzL3NpZ25pbi1jb250YWluZXJcIjtcclxuaW1wb3J0IHsgTWF0Qm90dG9tU2hlZXQgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25Db25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNpZ25pbkVmZmVjdHMge1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcclxuXHRcdHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcblx0XHRwdWJsaWMgc2lnbmluU2VydmljZTogU2lnbmluU2VydmljZSxcclxuXHRcdHB1YmxpYyBjb25maWd1cmF0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25Db25maWd1cmF0aW9uU2VydmljZSxcclxuXHRcdHByaXZhdGUgYm90dG9tU2hlZXQ6IE1hdEJvdHRvbVNoZWV0XHJcblx0KSB7IH1cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0d2hvQW1JJCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoU2lnbkluQWN0aW9uVHlwZXMuV0hPX0FNX0kpXHJcblx0XHQucGlwZShcclxuXHRcdFx0c3dpdGNoTWFwKCgpID0+XHJcblx0XHRcdFx0dGhpcy5zaWduaW5TZXJ2aWNlXHJcblx0XHRcdFx0XHQud2hvQW1JKClcclxuXHRcdFx0XHRcdC5waXBlKG1hcCh1c2VyID0+IG5ldyBTaWduaW5TZWNjZWVkKHVzZXIpKSwgY2F0Y2hFcnJvcihlcnJvciA9PiBvZihuZXcgU2lnbmluRmFpbGVkKGVycm9yKSkpKVxyXG5cdFx0XHQpXHJcblx0XHQpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRTaWduaW4kID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShTaWduSW5BY3Rpb25UeXBlcy5TSUdOSU4pXHJcblx0XHQucGlwZShcclxuXHRcdFx0cGx1Y2soXCJwYXlsb2FkXCIpLFxyXG5cdFx0XHRzd2l0Y2hNYXAocGF5bG9hZCA9PlxyXG5cdFx0XHRcdHRoaXMuc2lnbmluU2VydmljZVxyXG5cdFx0XHRcdFx0LnNpZ25pbihwYXlsb2FkKVxyXG5cdFx0XHRcdFx0LnBpcGUobWFwKHVzZXIgPT4gbmV3IFNpZ25pblNlY2NlZWQodXNlcikpLCBjYXRjaEVycm9yKGVycm9yID0+IG9mKG5ldyBTaWduaW5GYWlsZWQoZXJyb3IpKSkpXHJcblx0XHRcdClcclxuXHRcdCk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdHNpZ251cCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKFNpZ25JbkFjdGlvblR5cGVzLlNJR05VUClcclxuXHRcdC5waXBlKFxyXG5cdFx0XHRwbHVjayhcInBheWxvYWRcIiksXHJcblx0XHRcdHN3aXRjaE1hcChwYXlsb2FkID0+XHJcblx0XHRcdFx0dGhpcy5zaWduaW5TZXJ2aWNlXHJcblx0XHRcdFx0XHQuc2lnbnVwKHBheWxvYWQpXHJcblx0XHRcdFx0XHQucGlwZShtYXAodXNlciA9PiBuZXcgU2lnbnVwU2VjY2VlZCh1c2VyKSksIGNhdGNoRXJyb3IoZXJyb3IgPT4gb2YobmV3IFNpZ251cEZhaWxlZChlcnJvcikpKSlcclxuXHRcdFx0KVxyXG5cdFx0KTtcclxuXHJcblx0QEVmZmVjdCh7IGRpc3BhdGNoOiBmYWxzZSB9KVxyXG5cdHNpZ251cFN1Y2NlZWQkID0gdGhpcy5hY3Rpb25zJC5vZlR5cGUoU2lnbkluQWN0aW9uVHlwZXMuU0lHTlVQX1NVQ0NFRUQpLnBpcGUoXHJcblx0XHR0YXAoKCkgPT4ge1xyXG5cdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiYXV0aC9zaWduaW5cIl0pO1xyXG5cdFx0fSlcclxuXHQpO1xyXG5cclxuXHRARWZmZWN0KHsgZGlzcGF0Y2g6IGZhbHNlIH0pXHJcblx0U2lnbkluUmVxdWlyZWQkID0gdGhpcy5hY3Rpb25zJC5vZlR5cGUoU2lnbkluQWN0aW9uVHlwZXMuU0lHTklOX1JFUVVJUkVEKS5waXBlKFxyXG5cdFx0dGFwKChkYXRhOiBhbnkpID0+IHtcclxuXHRcdFx0Y29uc3Qgc2lnbmluQm90dG9tU2hlZXRSZWYgPSB0aGlzLmJvdHRvbVNoZWV0Lm9wZW4oU2lnbmluQ29udGFpbmVyQ29tcG9uZW50LCB7XHJcblx0XHRcdFx0cGFuZWxDbGFzczogXCJjbGVhci1tYXQtY2FyZC1ib3hcIlxyXG5cdFx0XHR9KTtcclxuXHRcdFx0c2lnbmluQm90dG9tU2hlZXRSZWYuaW5zdGFuY2Uuc2lnbmVkSW4kLnN1YnNjcmliZSgoKSA9PiB7XHJcblx0XHRcdFx0c2lnbmluQm90dG9tU2hlZXRSZWYuZGlzbWlzcygpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0cmV0dXJuIHNpZ25pbkJvdHRvbVNoZWV0UmVmO1xyXG5cdFx0fSlcclxuXHQpO1xyXG5cclxuXHRARWZmZWN0KHsgZGlzcGF0Y2g6IGZhbHNlIH0pXHJcblx0U2lnbmluU3VjY2VlZCQgPSB0aGlzLmFjdGlvbnMkLm9mVHlwZShTaWduSW5BY3Rpb25UeXBlcy5TSUdOSU5fU1VDQ0VFRCkucGlwZShcclxuXHRcdHRhcCgoZGF0YTogYW55KSA9PiB7XHJcblx0XHRcdGlmIChsb2NhdGlvbi5wYXRobmFtZS5pbmRleE9mKFwic2lnbmluXCIpID4gLTEpIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9cIl0pO1xyXG5cdFx0fSlcclxuXHQpO1xyXG5cclxuXHRARWZmZWN0KCkgQWZ0ZXJTaWduaW5GaWxlZCQgPSB0aGlzLmFjdGlvbnMkLm9mVHlwZShTaWduSW5BY3Rpb25UeXBlcy5TSUdOSU5fRkFJTFVSRSkubWFwKCgpID0+IG5ldyBOZXdDYXB0Y2hhKCkpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHREb1NpZ25vdXQkID0gdGhpcy5hY3Rpb25zJC5vZlR5cGUoU2lnbkluQWN0aW9uVHlwZXMuRE9fU0lHTk9VVCkucGlwZShcclxuXHRcdHN3aXRjaE1hcChkYXRhID0+XHJcblx0XHRcdHRoaXMuc2lnbmluU2VydmljZS5zaWdub3V0KCkucGlwZShcclxuXHRcdFx0XHRtYXAoKCkgPT4gbmV3IFNpZ25vdXRBY3Rpb24oKSksXHJcblx0XHRcdFx0Y2F0Y2hFcnJvcihlcnIgPT4ge1xyXG5cdFx0XHRcdFx0Ly8gVE9ETzogZGlzcGF0Y2ggdmFsaWQgYWN0aW9uXHJcblx0XHRcdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdFx0XHRcdHJldHVybiBvZihlcnIpO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdClcclxuXHRcdClcclxuXHQpO1xyXG5cclxuXHQvLyBUT0RPXHJcblx0Ly8gQEVmZmVjdCgpIFNpZ25vdXQkID0gdGhpcy5hY3Rpb25zJC5vZlR5cGUoU2lnbkluQWN0aW9uVHlwZXMuRE9fU0lHTk9VVCkucGlwZShtYXAoKCkgPT4gbmV3IFNpZ25vdXRBY3Rpb24oKSkpO1xyXG5cclxuXHRARWZmZWN0KHsgZGlzcGF0Y2g6IGZhbHNlIH0pXHJcblx0cmVkaXJlY3RUb0xvZ2luUGFnZSQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKFNpZ25JbkFjdGlvblR5cGVzLlNJR05JTl9SRURJUkVDVClcclxuXHRcdC5waXBlKHRhcChhdXRoZWQgPT4gdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiYXV0aC9zaWduaW5cIl0pKSk7XHJcblxyXG5cdEBFZmZlY3QoeyBkaXNwYXRjaDogZmFsc2UgfSlcclxuXHRyZWRpcmVjdEFmdGVyU2lnbm91dCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKFNpZ25JbkFjdGlvblR5cGVzLlNJR05PVVQpXHJcblx0XHQucGlwZShcclxuXHRcdFx0dGFwKGF1dGhlZCA9PiB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLmdldFZhbHVlKCkuYWZ0ZXJTaWdub3V0UmVkaXJlY3RUb10pKVxyXG5cdFx0KTtcclxufVxyXG4iXX0=