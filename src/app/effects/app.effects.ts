import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import { Action } from "@ngrx/store";
import { Actions, Effect, toPayload } from "@ngrx/effects";
import { RouterAction } from "@ngrx/router-store";

import { SignoutAction as authSignoutAction } from "@soushians/authentication";
import { LayoutActionTypes } from "@soushians/layout";
import { ProgressActionTypes, ProgressStarted, ProgressFinished, FailedHappened, EventActionTypes } from "../actions";
import { EventHandlerService } from "app/services";
import { AuthenticationActionTypes } from "@soushians/authentication";

@Injectable()
export class AppEffects {
	constructor(private actions$: Actions, private router: Router, private eventHandlerService: EventHandlerService) {}

	@Effect()
	signout$ = this.actions$.ofType(LayoutActionTypes.SIGNOUT).map(toPayload).map((payload) => new authSignoutAction());

	@Effect()
	progressStart$ = this.actions$
		.ofType(AuthenticationActionTypes.PROGRESSING_STARTED)
		.map((payload) => new ProgressStarted());

	@Effect()
	progressFinished$ = this.actions$
		.ofType(AuthenticationActionTypes.PROGRESSING_FINISHED)
		.map((payload) => new ProgressFinished());

	@Effect()
	otherModuleFailedHappend$ = this.actions$
		.ofType(AuthenticationActionTypes.FAILED_HAPPENED)
		.map(toPayload)
		.map((error) => new FailedHappened(error));

	@Effect({ dispatch: false })
	failedHappend$ = this.actions$
		.ofType(EventActionTypes.FAILED_HAPPENED)
		.map(toPayload)
		.do((error) => this.eventHandlerService.failed(error));
}
