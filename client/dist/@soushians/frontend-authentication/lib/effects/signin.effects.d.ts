import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Action } from "@ngrx/store";
import { Actions } from "@ngrx/effects";
import { SigninSecceed, SigninFailed } from "../actions/signin.actions";
import { FrontendSigninService } from "../services/signin.service";
import { MatBottomSheet } from "@angular/material";
import { FrontendAuthenticationConfigurationService } from "../services/frontend-authentication-configuration.service";
export declare class SigninEffects {
    private actions$;
    private router;
    frontendSigninService: FrontendSigninService;
    configurationService: FrontendAuthenticationConfigurationService;
    private bottomSheet;
    constructor(actions$: Actions, router: Router, frontendSigninService: FrontendSigninService, configurationService: FrontendAuthenticationConfigurationService, bottomSheet: MatBottomSheet);
    whoAmI$: Observable<SigninSecceed | SigninFailed>;
    Signin$: Observable<SigninSecceed | SigninFailed>;
    SignInRequired$: Observable<any>;
    SigninSucceed$: Observable<any>;
    DoSignout$: Observable<any>;
    redirectToLoginPage$: Observable<Action>;
    redirectAfterSignout$: Observable<Action>;
}
