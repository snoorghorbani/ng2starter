/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Actions, Effect } from "@ngrx/effects";
import { switchMap, map, catchError, tap, pluck } from "rxjs/operators";
import { of } from "rxjs";
import { SignoutAction, SignInActionTypes, SigninSecceed, SigninFailed } from "../actions/signin.actions";
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
            .pipe(switchMap(() => this.signinService.whoAmI()), map((user) => new SigninSecceed(user)), catchError((error) => Observable.of(new SigninFailed(error))));
        this.Signin$ = this.actions$
            .ofType(SignInActionTypes.SIGNIN)
            .pipe(pluck("payload"), switchMap((payload) => this.signinService.signin(payload)), map((user) => new SigninSecceed(user)), catchError((error) => Observable.of(new SigninFailed(error))));
        this.SignInRequired$ = this.actions$.ofType(SignInActionTypes.SIGNIN_REQUIRED).pipe(tap((data) => {
            const /** @type {?} */ signinBottomSheetRef = this.bottomSheet.open(SigninContainerComponent, {
                panelClass: "clear-mat-card-box"
            });
            signinBottomSheetRef.instance.signedIn$.subscribe(() => {
                signinBottomSheetRef.dismiss();
            });
            return signinBottomSheetRef;
        }));
        this.SigninSucceed$ = this.actions$.ofType(SignInActionTypes.SIGNIN_SUCCEED).pipe(tap((data) => {
            debugger;
            if (location.pathname.indexOf("signin") > -1)
                this.router.navigate(["/"]);
        }));
        this.AfterSigninFiled$ = this.actions$.ofType(SignInActionTypes.SIGNIN_FAILURE).map(() => new NewCaptcha());
        this.DoSignout$ = this.actions$.ofType(SignInActionTypes.DO_SIGNOUT).pipe(switchMap((data) => this.signinService.signout().pipe(map(() => new SignoutAction()), catchError((err) => {
            // TODO: dispatch valid action
            debugger;
            return of(err);
        }))));
        // TODO
        // @Effect() Signout$ = this.actions$.ofType(SignInActionTypes.DO_SIGNOUT).pipe(map(() => new SignoutAction()));
        this.redirectToLoginPage$ = this.actions$
            .ofType(SignInActionTypes.SIGNIN_REDIRECT)
            .pipe(tap((authed) => this.router.navigate(["auth/signin"])));
        this.redirectAfterSignout$ = this.actions$
            .ofType(SignInActionTypes.SIGNOUT)
            .pipe(tap((authed) => this.router.navigate([this.configurationService.config$.getValue().afterSignoutRedirectTo])));
    }
}
SigninEffects.decorators = [
    { type: Injectable },
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
function SigninEffects_tsickle_Closure_declarations() {
    /** @type {?} */
    SigninEffects.prototype.whoAmI$;
    /** @type {?} */
    SigninEffects.prototype.Signin$;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmluLmVmZmVjdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2F1dGhlbnRpY2F0aW9uLyIsInNvdXJjZXMiOlsibGliL2VmZmVjdHMvc2lnbmluLmVmZmVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQWtCLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWhELE9BQU8sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEUsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUxQixPQUFPLEVBQ04sYUFBYSxFQUNiLGlCQUFpQixFQUNqQixhQUFhLEVBQ2IsWUFBWSxFQUdaLE1BQU0sMkJBQTJCLENBQUM7QUFDbkMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzNELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDeEMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBR3RHLE1BQU07Ozs7Ozs7O0lBQ0wsWUFDUyxVQUNBLFFBQ0QsZUFDQSxzQkFDQztRQUpBLGFBQVEsR0FBUixRQUFRO1FBQ1IsV0FBTSxHQUFOLE1BQU07UUFDUCxrQkFBYSxHQUFiLGFBQWE7UUFDYix5QkFBb0IsR0FBcEIsb0JBQW9CO1FBQ25CLGdCQUFX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QUM7YUFDekMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBRSxhQUFhLENBQUUsQ0FBQyxDQUFDLENBQUM7cUNBR3hDLElBQUksQ0FBQyxRQUFRO2FBQ25DLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUM7YUFDakMsSUFBSSxDQUNKLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLHNCQUFzQixDQUFFLENBQUMsQ0FDN0YsQ0FDRDtLQXpFRTs7O1lBUkosVUFBVTs7OztZQW5CRixPQUFPO1lBSFAsTUFBTTtZQWdCTixhQUFhO1lBSWIsa0NBQWtDO1lBRGxDLGNBQWM7OztJQWFyQixNQUFNLEVBQUU7Ozs7SUFTUixNQUFNLEVBQUU7Ozs7SUFVUixNQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUM7Ozs7SUFhM0IsTUFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDOzs7O0lBUTNCLE1BQU0sRUFBRTs7OztJQUVSLE1BQU0sRUFBRTs7OztJQWlCUixNQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUM7Ozs7SUFLM0IsTUFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBSb3V0ZXJBY3Rpb24gfSBmcm9tIFwiQG5ncngvcm91dGVyLXN0b3JlXCI7XHJcbmltcG9ydCB7IHN3aXRjaE1hcCwgbWFwLCBjYXRjaEVycm9yLCB0YXAsIHBsdWNrIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmltcG9ydCB7XHJcblx0U2lnbm91dEFjdGlvbixcclxuXHRTaWduSW5BY3Rpb25UeXBlcyxcclxuXHRTaWduaW5TZWNjZWVkLFxyXG5cdFNpZ25pbkZhaWxlZCxcclxuXHRTaWduaW5SZWRpcmVjdCxcclxuXHRTaWduaW5cclxufSBmcm9tIFwiLi4vYWN0aW9ucy9zaWduaW4uYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBTaWduaW5TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3NpZ25pbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IE5ld0NhcHRjaGEgfSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBTaWduaW5Db250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi4vc21hcnQtY29tcG9uZW50cy9zaWduaW4tY29udGFpbmVyXCI7XHJcbmltcG9ydCB7IE1hdEJvdHRvbVNoZWV0IH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvYXV0aGVudGljYXRpb24tY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTaWduaW5FZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXHJcblx0XHRwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG5cdFx0cHVibGljIHNpZ25pblNlcnZpY2U6IFNpZ25pblNlcnZpY2UsXHJcblx0XHRwdWJsaWMgY29uZmlndXJhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uQ29uZmlndXJhdGlvblNlcnZpY2UsXHJcblx0XHRwcml2YXRlIGJvdHRvbVNoZWV0OiBNYXRCb3R0b21TaGVldFxyXG5cdCkge31cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0d2hvQW1JJCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoU2lnbkluQWN0aW9uVHlwZXMuV0hPX0FNX0kpXHJcblx0XHQucGlwZShcclxuXHRcdFx0c3dpdGNoTWFwKCgpID0+IHRoaXMuc2lnbmluU2VydmljZS53aG9BbUkoKSksXHJcblx0XHRcdG1hcCgodXNlcikgPT4gbmV3IFNpZ25pblNlY2NlZWQodXNlcikpLFxyXG5cdFx0XHRjYXRjaEVycm9yKChlcnJvcikgPT4gT2JzZXJ2YWJsZS5vZihuZXcgU2lnbmluRmFpbGVkKGVycm9yKSkpXHJcblx0XHQpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRTaWduaW4kID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShTaWduSW5BY3Rpb25UeXBlcy5TSUdOSU4pXHJcblx0XHQucGlwZShcclxuXHRcdFx0cGx1Y2soXCJwYXlsb2FkXCIpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoKHBheWxvYWQpID0+IHRoaXMuc2lnbmluU2VydmljZS5zaWduaW4ocGF5bG9hZCkpLFxyXG5cdFx0XHRtYXAoKHVzZXIpID0+IG5ldyBTaWduaW5TZWNjZWVkKHVzZXIpKSxcclxuXHRcdFx0Y2F0Y2hFcnJvcigoZXJyb3IpID0+IE9ic2VydmFibGUub2YobmV3IFNpZ25pbkZhaWxlZChlcnJvcikpKVxyXG5cdFx0KTtcclxuXHJcblx0QEVmZmVjdCh7IGRpc3BhdGNoOiBmYWxzZSB9KVxyXG5cdFNpZ25JblJlcXVpcmVkJCA9IHRoaXMuYWN0aW9ucyQub2ZUeXBlKFNpZ25JbkFjdGlvblR5cGVzLlNJR05JTl9SRVFVSVJFRCkucGlwZShcclxuXHRcdHRhcCgoZGF0YTogYW55KSA9PiB7XHJcblx0XHRcdGNvbnN0IHNpZ25pbkJvdHRvbVNoZWV0UmVmID0gdGhpcy5ib3R0b21TaGVldC5vcGVuKFNpZ25pbkNvbnRhaW5lckNvbXBvbmVudCwge1xyXG5cdFx0XHRcdHBhbmVsQ2xhc3M6IFwiY2xlYXItbWF0LWNhcmQtYm94XCJcclxuXHRcdFx0fSk7XHJcblx0XHRcdHNpZ25pbkJvdHRvbVNoZWV0UmVmLmluc3RhbmNlLnNpZ25lZEluJC5zdWJzY3JpYmUoKCkgPT4ge1xyXG5cdFx0XHRcdHNpZ25pbkJvdHRvbVNoZWV0UmVmLmRpc21pc3MoKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHJldHVybiBzaWduaW5Cb3R0b21TaGVldFJlZjtcclxuXHRcdH0pXHJcblx0KTtcclxuXHJcblx0QEVmZmVjdCh7IGRpc3BhdGNoOiBmYWxzZSB9KVxyXG5cdFNpZ25pblN1Y2NlZWQkID0gdGhpcy5hY3Rpb25zJC5vZlR5cGUoU2lnbkluQWN0aW9uVHlwZXMuU0lHTklOX1NVQ0NFRUQpLnBpcGUoXHJcblx0XHR0YXAoKGRhdGE6IGFueSkgPT4ge1xyXG5cdFx0XHRkZWJ1Z2dlcjtcclxuXHRcdFx0aWYgKGxvY2F0aW9uLnBhdGhuYW1lLmluZGV4T2YoXCJzaWduaW5cIikgPiAtMSkgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWyBcIi9cIiBdKTtcclxuXHRcdH0pXHJcblx0KTtcclxuXHJcblx0QEVmZmVjdCgpIEFmdGVyU2lnbmluRmlsZWQkID0gdGhpcy5hY3Rpb25zJC5vZlR5cGUoU2lnbkluQWN0aW9uVHlwZXMuU0lHTklOX0ZBSUxVUkUpLm1hcCgoKSA9PiBuZXcgTmV3Q2FwdGNoYSgpKTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0RG9TaWdub3V0JCA9IHRoaXMuYWN0aW9ucyQub2ZUeXBlKFNpZ25JbkFjdGlvblR5cGVzLkRPX1NJR05PVVQpLnBpcGUoXHJcblx0XHRzd2l0Y2hNYXAoKGRhdGEpID0+XHJcblx0XHRcdHRoaXMuc2lnbmluU2VydmljZS5zaWdub3V0KCkucGlwZShcclxuXHRcdFx0XHRtYXAoKCkgPT4gbmV3IFNpZ25vdXRBY3Rpb24oKSksXHJcblx0XHRcdFx0Y2F0Y2hFcnJvcigoZXJyKSA9PiB7XHJcblx0XHRcdFx0XHQvLyBUT0RPOiBkaXNwYXRjaCB2YWxpZCBhY3Rpb25cclxuXHRcdFx0XHRcdGRlYnVnZ2VyO1xyXG5cdFx0XHRcdFx0cmV0dXJuIG9mKGVycik7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KVxyXG5cdFx0KVxyXG5cdCk7XHJcblxyXG5cdC8vIFRPRE9cclxuXHQvLyBARWZmZWN0KCkgU2lnbm91dCQgPSB0aGlzLmFjdGlvbnMkLm9mVHlwZShTaWduSW5BY3Rpb25UeXBlcy5ET19TSUdOT1VUKS5waXBlKG1hcCgoKSA9PiBuZXcgU2lnbm91dEFjdGlvbigpKSk7XHJcblxyXG5cdEBFZmZlY3QoeyBkaXNwYXRjaDogZmFsc2UgfSlcclxuXHRyZWRpcmVjdFRvTG9naW5QYWdlJCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoU2lnbkluQWN0aW9uVHlwZXMuU0lHTklOX1JFRElSRUNUKVxyXG5cdFx0LnBpcGUodGFwKChhdXRoZWQpID0+IHRoaXMucm91dGVyLm5hdmlnYXRlKFsgXCJhdXRoL3NpZ25pblwiIF0pKSk7XHJcblxyXG5cdEBFZmZlY3QoeyBkaXNwYXRjaDogZmFsc2UgfSlcclxuXHRyZWRpcmVjdEFmdGVyU2lnbm91dCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKFNpZ25JbkFjdGlvblR5cGVzLlNJR05PVVQpXHJcblx0XHQucGlwZShcclxuXHRcdFx0dGFwKChhdXRoZWQpID0+XHJcblx0XHRcdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoWyB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQuZ2V0VmFsdWUoKS5hZnRlclNpZ25vdXRSZWRpcmVjdFRvIF0pXHJcblx0XHRcdClcclxuXHRcdCk7XHJcbn1cclxuIl19