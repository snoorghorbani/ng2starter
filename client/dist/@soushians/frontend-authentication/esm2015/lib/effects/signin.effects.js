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
import { SignoutAction, SignInActionTypes, SigninSecceed, SigninFailed } from "../actions/signin.actions";
import { FrontendSigninService } from "../services/signin.service";
import { SigninContainerComponent } from "../smart-components/signin-container";
import { MatBottomSheet } from "@angular/material";
import { FrontendAuthenticationConfigurationService } from "../services/frontend-authentication-configuration.service";
export class SigninEffects {
    /**
     * @param {?} actions$
     * @param {?} router
     * @param {?} frontendSigninService
     * @param {?} configurationService
     * @param {?} bottomSheet
     */
    constructor(actions$, router, frontendSigninService, configurationService, bottomSheet) {
        this.actions$ = actions$;
        this.router = router;
        this.frontendSigninService = frontendSigninService;
        this.configurationService = configurationService;
        this.bottomSheet = bottomSheet;
        this.whoAmI$ = this.actions$
            .ofType(SignInActionTypes.WHO_AM_I)
            .pipe(switchMap(() => this.frontendSigninService.whoAmI()), map(user => new SigninSecceed(user)), catchError(error => of(new SigninFailed(error))));
        this.Signin$ = this.actions$
            .ofType(SignInActionTypes.SIGNIN)
            .pipe(pluck("payload"), switchMap(payload => this.frontendSigninService.signin(payload)), map(user => new SigninSecceed(user)), catchError(error => of(new SigninFailed(error))));
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
            debugger;
            if (location.pathname.indexOf("signin") > -1)
                this.router.navigate(["/"]);
        }));
        this.DoSignout$ = this.actions$.ofType(SignInActionTypes.DO_SIGNOUT).pipe(switchMap(data => this.frontendSigninService.signout().pipe(map(() => new SignoutAction()), catchError(err => {
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
    { type: Injectable },
];
/** @nocollapse */
SigninEffects.ctorParameters = () => [
    { type: Actions },
    { type: Router },
    { type: FrontendSigninService },
    { type: FrontendAuthenticationConfigurationService },
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
    SigninEffects.prototype.SignInRequired$;
    /** @type {?} */
    SigninEffects.prototype.SigninSucceed$;
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
    SigninEffects.prototype.frontendSigninService;
    /** @type {?} */
    SigninEffects.prototype.configurationService;
    /** @type {?} */
    SigninEffects.prototype.bottomSheet;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmluLmVmZmVjdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2Zyb250ZW5kLWF1dGhlbnRpY2F0aW9uLyIsInNvdXJjZXMiOlsibGliL2VmZmVjdHMvc2lnbmluLmVmZmVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQWtCLE1BQU0saUJBQWlCLENBQUM7QUFHekQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFaEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTFCLE9BQU8sRUFDTixhQUFhLEVBQ2IsaUJBQWlCLEVBQ2pCLGFBQWEsRUFDYixZQUFZLEVBR1osTUFBTSwyQkFBMkIsQ0FBQztBQUNuQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNoRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLDBDQUEwQyxFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFHdkgsTUFBTSxPQUFPLGFBQWE7Ozs7Ozs7O0lBQ3pCLFlBQ1MsVUFDQSxRQUNELHVCQUNBLHNCQUNDO1FBSkEsYUFBUSxHQUFSLFFBQVE7UUFDUixXQUFNLEdBQU4sTUFBTTtRQUNQLDBCQUFxQixHQUFyQixxQkFBcUI7UUFDckIseUJBQW9CLEdBQXBCLG9CQUFvQjtRQUNuQixnQkFBVyxHQUFYLFdBQVc7UUFHcEIsZUFDVSxJQUFJLENBQUMsUUFBUTthQUNyQixNQUFNLENBQUMsaUJB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SUFBSSxDQUNKLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBRSxDQUFDLENBQUMsQ0FDNUcsQ0FBQztLQXJFQzs7O1lBUkosVUFBVTs7OztZQWxCRixPQUFPO1lBSFAsTUFBTTtZQWdCTixxQkFBcUI7WUFHckIsMENBQTBDO1lBRDFDLGNBQWM7OztJQWFyQixNQUFNLEVBQUU7Ozs7SUFTUixNQUFNLEVBQUU7Ozs7SUFVUixNQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUM7Ozs7SUFhM0IsTUFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDOzs7O0lBUTNCLE1BQU0sRUFBRTs7OztJQWlCUixNQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUM7Ozs7SUFLM0IsTUFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBSb3V0ZXJBY3Rpb24gfSBmcm9tIFwiQG5ncngvcm91dGVyLXN0b3JlXCI7XHJcbmltcG9ydCB7IHN3aXRjaE1hcCwgbWFwLCBjYXRjaEVycm9yLCB0YXAsIHBsdWNrIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmltcG9ydCB7XHJcblx0U2lnbm91dEFjdGlvbixcclxuXHRTaWduSW5BY3Rpb25UeXBlcyxcclxuXHRTaWduaW5TZWNjZWVkLFxyXG5cdFNpZ25pbkZhaWxlZCxcclxuXHRTaWduaW5SZWRpcmVjdCxcclxuXHRTaWduaW5cclxufSBmcm9tIFwiLi4vYWN0aW9ucy9zaWduaW4uYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBGcm9udGVuZFNpZ25pblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvc2lnbmluLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgU2lnbmluQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4uL3NtYXJ0LWNvbXBvbmVudHMvc2lnbmluLWNvbnRhaW5lclwiO1xyXG5pbXBvcnQgeyBNYXRCb3R0b21TaGVldCB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBGcm9udGVuZEF1dGhlbnRpY2F0aW9uQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvZnJvbnRlbmQtYXV0aGVudGljYXRpb24tY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTaWduaW5FZmZlY3RzIHtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXHJcblx0XHRwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG5cdFx0cHVibGljIGZyb250ZW5kU2lnbmluU2VydmljZTogRnJvbnRlbmRTaWduaW5TZXJ2aWNlLFxyXG5cdFx0cHVibGljIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBGcm9udGVuZEF1dGhlbnRpY2F0aW9uQ29uZmlndXJhdGlvblNlcnZpY2UsXHJcblx0XHRwcml2YXRlIGJvdHRvbVNoZWV0OiBNYXRCb3R0b21TaGVldFxyXG5cdCkge31cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0d2hvQW1JJCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoU2lnbkluQWN0aW9uVHlwZXMuV0hPX0FNX0kpXHJcblx0XHQucGlwZShcclxuXHRcdFx0c3dpdGNoTWFwKCgpID0+IHRoaXMuZnJvbnRlbmRTaWduaW5TZXJ2aWNlLndob0FtSSgpKSxcclxuXHRcdFx0bWFwKHVzZXIgPT4gbmV3IFNpZ25pblNlY2NlZWQodXNlcikpLFxyXG5cdFx0XHRjYXRjaEVycm9yKGVycm9yID0+IG9mKG5ldyBTaWduaW5GYWlsZWQoZXJyb3IpKSlcclxuXHRcdCk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdFNpZ25pbiQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKFNpZ25JbkFjdGlvblR5cGVzLlNJR05JTilcclxuXHRcdC5waXBlKFxyXG5cdFx0XHRwbHVjayhcInBheWxvYWRcIiksXHJcblx0XHRcdHN3aXRjaE1hcChwYXlsb2FkID0+IHRoaXMuZnJvbnRlbmRTaWduaW5TZXJ2aWNlLnNpZ25pbihwYXlsb2FkKSksXHJcblx0XHRcdG1hcCh1c2VyID0+IG5ldyBTaWduaW5TZWNjZWVkKHVzZXIpKSxcclxuXHRcdFx0Y2F0Y2hFcnJvcihlcnJvciA9PiBvZihuZXcgU2lnbmluRmFpbGVkKGVycm9yKSkpXHJcblx0XHQpO1xyXG5cclxuXHRARWZmZWN0KHsgZGlzcGF0Y2g6IGZhbHNlIH0pXHJcblx0U2lnbkluUmVxdWlyZWQkID0gdGhpcy5hY3Rpb25zJC5vZlR5cGUoU2lnbkluQWN0aW9uVHlwZXMuU0lHTklOX1JFUVVJUkVEKS5waXBlKFxyXG5cdFx0dGFwKChkYXRhOiBhbnkpID0+IHtcclxuXHRcdFx0Y29uc3Qgc2lnbmluQm90dG9tU2hlZXRSZWYgPSB0aGlzLmJvdHRvbVNoZWV0Lm9wZW4oU2lnbmluQ29udGFpbmVyQ29tcG9uZW50LCB7XHJcblx0XHRcdFx0cGFuZWxDbGFzczogXCJjbGVhci1tYXQtY2FyZC1ib3hcIlxyXG5cdFx0XHR9KTtcclxuXHRcdFx0c2lnbmluQm90dG9tU2hlZXRSZWYuaW5zdGFuY2Uuc2lnbmVkSW4kLnN1YnNjcmliZSgoKSA9PiB7XHJcblx0XHRcdFx0c2lnbmluQm90dG9tU2hlZXRSZWYuZGlzbWlzcygpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0cmV0dXJuIHNpZ25pbkJvdHRvbVNoZWV0UmVmO1xyXG5cdFx0fSlcclxuXHQpO1xyXG5cclxuXHRARWZmZWN0KHsgZGlzcGF0Y2g6IGZhbHNlIH0pXHJcblx0U2lnbmluU3VjY2VlZCQgPSB0aGlzLmFjdGlvbnMkLm9mVHlwZShTaWduSW5BY3Rpb25UeXBlcy5TSUdOSU5fU1VDQ0VFRCkucGlwZShcclxuXHRcdHRhcCgoZGF0YTogYW55KSA9PiB7XHJcblx0XHRcdGRlYnVnZ2VyO1xyXG5cdFx0XHRpZiAobG9jYXRpb24ucGF0aG5hbWUuaW5kZXhPZihcInNpZ25pblwiKSA+IC0xKSB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbIFwiL1wiIF0pO1xyXG5cdFx0fSlcclxuXHQpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHREb1NpZ25vdXQkID0gdGhpcy5hY3Rpb25zJC5vZlR5cGUoU2lnbkluQWN0aW9uVHlwZXMuRE9fU0lHTk9VVCkucGlwZShcclxuXHRcdHN3aXRjaE1hcChkYXRhID0+XHJcblx0XHRcdHRoaXMuZnJvbnRlbmRTaWduaW5TZXJ2aWNlLnNpZ25vdXQoKS5waXBlKFxyXG5cdFx0XHRcdG1hcCgoKSA9PiBuZXcgU2lnbm91dEFjdGlvbigpKSxcclxuXHRcdFx0XHRjYXRjaEVycm9yKGVyciA9PiB7XHJcblx0XHRcdFx0XHQvLyBUT0RPOiBkaXNwYXRjaCB2YWxpZCBhY3Rpb25cclxuXHRcdFx0XHRcdGRlYnVnZ2VyO1xyXG5cdFx0XHRcdFx0cmV0dXJuIG9mKGVycik7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KVxyXG5cdFx0KVxyXG5cdCk7XHJcblxyXG5cdC8vIFRPRE9cclxuXHQvLyBARWZmZWN0KCkgU2lnbm91dCQgPSB0aGlzLmFjdGlvbnMkLm9mVHlwZShTaWduSW5BY3Rpb25UeXBlcy5ET19TSUdOT1VUKS5waXBlKG1hcCgoKSA9PiBuZXcgU2lnbm91dEFjdGlvbigpKSk7XHJcblxyXG5cdEBFZmZlY3QoeyBkaXNwYXRjaDogZmFsc2UgfSlcclxuXHRyZWRpcmVjdFRvTG9naW5QYWdlJCA9IHRoaXMuYWN0aW9ucyRcclxuXHRcdC5vZlR5cGUoU2lnbkluQWN0aW9uVHlwZXMuU0lHTklOX1JFRElSRUNUKVxyXG5cdFx0LnBpcGUodGFwKGF1dGhlZCA9PiB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbIFwiYXV0aC9zaWduaW5cIiBdKSkpO1xyXG5cclxuXHRARWZmZWN0KHsgZGlzcGF0Y2g6IGZhbHNlIH0pXHJcblx0cmVkaXJlY3RBZnRlclNpZ25vdXQkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShTaWduSW5BY3Rpb25UeXBlcy5TSUdOT1VUKVxyXG5cdFx0LnBpcGUoXHJcblx0XHRcdHRhcChhdXRoZWQgPT4gdGhpcy5yb3V0ZXIubmF2aWdhdGUoWyB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQuZ2V0VmFsdWUoKS5hZnRlclNpZ25vdXRSZWRpcmVjdFRvIF0pKVxyXG5cdFx0KTtcclxufVxyXG4iXX0=