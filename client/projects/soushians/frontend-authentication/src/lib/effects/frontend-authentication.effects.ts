import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import { Action } from "@ngrx/store";
import { Actions, Effect } from "@ngrx/effects";

import { SignInActionTypes, FailedHappened, ProgressingStarted, ProgressingFinished } from "../actions";
import { map } from "rxjs/operators";

@Injectable()
export class FrontendAuthenticationEffects {
	constructor(private actions$: Actions<any>, private router: Router) {}

	@Effect()
	dispachProgressingStarted$ = this.actions$
		.ofType(SignInActionTypes.SIGNIN)
		.pipe(map(() => new ProgressingStarted()));

	@Effect()
	dispachProgressingFinished$ = this.actions$
		.ofType(SignInActionTypes.SIGNIN_FAILURE, SignInActionTypes.SIGNIN_SUCCEED)
		.pipe(map(() => new ProgressingFinished()));
}
