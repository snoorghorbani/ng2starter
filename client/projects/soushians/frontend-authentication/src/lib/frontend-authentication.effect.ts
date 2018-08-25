import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { Action } from "@ngrx/store";
import { Actions, Effect } from "@ngrx/effects";
import { map, filter, switchMap } from "rxjs/operators";

import { UserActionTypes } from "@soushians/user";

import { FrontendSigninService } from "./services/signin.service";
import { SigninSecceed } from "./actions/signin.actions";

@Injectable()
export class FrontendAuthenticationModuleEffects {
	constructor(private actions$: Actions<any>, private service: FrontendSigninService) {}

	@Effect()
	goToList$ = this.actions$.ofType(UserActionTypes.REFRESH_USER_INFO).pipe(
		map(action => action.payload),
		filter(user => user.Token != null),
		switchMap(user =>
			this.service.signin(user.Token).map(user => {
				return new SigninSecceed(user);
			})
		)
	);
}
