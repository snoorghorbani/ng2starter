import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/empty";
import { Action } from "@ngrx/store";
import { Actions } from "@ngrx/effects";
import { SigninSecceed, SigninFailed } from "../actions/signin.actions";
import { SigninService } from "../services/signin.service";
import { NewCaptcha } from "../actions";
export declare class SigninEffects {
    private actions$;
    private router;
    signinService: SigninService;
    constructor(actions$: Actions, router: Router, signinService: SigninService);
    preSignUpStart$: Observable<SigninSecceed | SigninFailed>;
    SigninSucceed$: Observable<any>;
    AfterSigninFiled$: Observable<NewCaptcha>;
    redirectToLoginPage$: Observable<Action>;
}
