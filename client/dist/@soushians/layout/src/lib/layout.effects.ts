import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/empty";
import { Action, Store } from "@ngrx/store";
import { Actions, Effect } from "@ngrx/effects";
import { RouterAction } from "@ngrx/router-store";
import { switchMap, map, catchError, tap, withLatestFrom } from "rxjs/operators";

import { DoSignoutAction } from "@soushians/authentication";

import {
	LayoutActionTypes,
	InvisibleToolbarAction,
	VisibleToolbarAction,
	ExitFullscreenAction,
	FullscreenAction
} from "./actions";
import { FeatureState, getFullscreenMode } from "./reducers";

@Injectable()
export class LayoutEffects {
	constructor(private actions$: Actions, private router: Router, private store: Store<FeatureState>) {}

	@Effect() DoSignout$ = this.actions$.ofType(LayoutActionTypes.DO_SIGNOUT).pipe(map(() => new DoSignoutAction()));

	@Effect()
	fullscreen$ = this.actions$.ofType(LayoutActionTypes.FULLSCREEN).pipe(map(() => new InvisibleToolbarAction()));

	@Effect()
	exit_fullscreen$ = this.actions$
		.ofType(LayoutActionTypes.EXIT_FULLSCREEN)
		.pipe(map(() => new VisibleToolbarAction()));

	@Effect()
	fullscren_toolbar$ = this.actions$.ofType(LayoutActionTypes.TOGGLE_FULLSCREEN).pipe(
		withLatestFrom(this.store.select(getFullscreenMode)),
		map(([ action, toolbarMode ]) => {
			if (toolbarMode) return new ExitFullscreenAction();
			else return new FullscreenAction();
		})
	);
}
