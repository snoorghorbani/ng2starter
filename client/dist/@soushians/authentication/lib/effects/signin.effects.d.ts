import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Action } from "@ngrx/store";
import { Actions } from "@ngrx/effects";
import { SignoutAction, SigninSecceed, SigninFailed } from "../actions/signin.actions";
import { SigninService } from "../services/signin.service";
import { NewCaptcha } from "../actions";
import { MatBottomSheet } from "@angular/material";
import { AuthenticationConfigurationService } from "../services/authentication-configuration.service";
export declare class SigninEffects {
    private actions$;
    private router;
    signinService: SigninService;
    configurationService: AuthenticationConfigurationService;
    private bottomSheet;
    constructor(actions$: Actions, router: Router, signinService: SigninService, configurationService: AuthenticationConfigurationService, bottomSheet: MatBottomSheet);
    whoAmI$: Observable<SigninSecceed | SigninFailed>;
    Signin$: Observable<SigninSecceed | SigninFailed>;
    SignInRequired$: Observable<any>;
    SigninSucceed$: Observable<any>;
    AfterSigninFiled$: Observable<NewCaptcha>;
    DoSignout$: Observable<SignoutAction>;
    Signout$: Observable<SignoutAction>;
    redirectToLoginPage$: Observable<Action>;
    redirectAfterSignout$: Observable<Action>;
}
