import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/switchMap";

import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Action } from "@ngrx/store";
import { Actions, Effect } from "@ngrx/effects";
import { of } from "rxjs/observable/of";
import { Store } from "@ngrx/store";

import { FormService } from "../services/form.service";
import { AddFormApiModel } from "../models";
import {
	CaptchaActionTypes,
	GetCaptchaSucceedAction,
	GetCaptchaFailedAction,
	GetCaptchaStartAction
} from "./captcha.actions";
import { map, switchMap, catchError } from "rxjs/operators";
import { FormCaptchaService } from "../services/form-captcha.service";

@Injectable()
export class CaptchaEffects {
	constructor(private actions$: Actions<any>, private router: Router, private service: FormCaptchaService) {}

	@Effect()
	GetCaptcha$ = this.actions$
		.ofType(CaptchaActionTypes.GET_CAPTCHA)
		.pipe(map(action => action.payload), map(data => new GetCaptchaStartAction(data)));

	@Effect()
	AddFormStart$ = this.actions$
		.ofType(CaptchaActionTypes.GET_CAPTCHA_START)
		.pipe(
			map(action => action.payload),
			switchMap((data: AddFormApiModel.Request) => this.service.getCaptcha()),
			map(res => new GetCaptchaSucceedAction()),
			catchError(() => of(new GetCaptchaFailedAction()))
		);
}
