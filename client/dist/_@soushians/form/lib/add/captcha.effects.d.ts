import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/switchMap";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Actions } from "@ngrx/effects";
import { GetCaptchaSucceedAction, GetCaptchaFailedAction, GetCaptchaStartAction } from "./captcha.actions";
import { FormCaptchaService } from "../services/form-captcha.service";
export declare class CaptchaEffects {
    private actions$;
    private router;
    private service;
    constructor(actions$: Actions<any>, router: Router, service: FormCaptchaService);
    GetCaptcha$: Observable<GetCaptchaStartAction>;
    AddFormStart$: Observable<GetCaptchaSucceedAction | GetCaptchaFailedAction>;
}
