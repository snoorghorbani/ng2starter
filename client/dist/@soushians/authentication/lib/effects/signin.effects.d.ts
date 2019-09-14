import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Actions } from "@ngrx/effects";
import { SigninSecceed, SigninFailed, SignupSecceed, SignupFailed } from "../actions/signin.actions";
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
    signup$: Observable<SignupSecceed | SignupFailed>;
    signupSucceed$: Observable<never>;
    SignInRequired$: Observable<any>;
    SigninSucceed$: Observable<any>;
    AfterSigninFiled$: Observable<NewCaptcha>;
    DoSignout$: Observable<any>;
    redirectToLoginPage$: Observable<never>;
    redirectAfterSignout$: Observable<never>;
}
