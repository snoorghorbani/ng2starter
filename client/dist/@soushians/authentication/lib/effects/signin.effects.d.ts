import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Action } from "@ngrx/store";
import { Actions } from "@ngrx/effects";
import { SignoutAction, SigninSecceed, SigninFailed } from "../actions/signin.actions";
import { SigninService } from "../services/signin.service";
import { NewCaptcha } from "../actions";
export declare class SigninEffects {
    private actions$;
    private router;
    signinService: SigninService;
    constructor(actions$: Actions, router: Router, signinService: SigninService);
    whoAmI$: Observable<SigninSecceed | SigninFailed>;
    preSignUpStart$: Observable<SigninSecceed | SigninFailed>;
    SigninSucceed$: Observable<any>;
    AfterSigninFiled$: Observable<NewCaptcha>;
    DoSignout$: Observable<SignoutAction>;
    Signout$: Observable<SignoutAction>;
    redirectToLoginPage$: Observable<Action>;
}
