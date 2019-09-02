import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";

import { SignInActionTypes, FailedHappened, ProgressingStarted, ProgressingFinished } from "../actions";
import { map } from "rxjs/operators";

@Injectable()
export class AuthenticationEffects {
	constructor(private actions$: Actions<any>) {}

	@Effect()
	dispachProgressingStarted$ = this.actions$.pipe(
		ofType(SignInActionTypes.SIGNIN),
		map(() => new ProgressingStarted())
	);

	@Effect()
	dispachProgressingFinished$ = this.actions$.pipe(
		ofType(SignInActionTypes.SIGNIN_FAILURE, SignInActionTypes.SIGNIN_SUCCEED),
		map(() => new ProgressingFinished())
	);
}
