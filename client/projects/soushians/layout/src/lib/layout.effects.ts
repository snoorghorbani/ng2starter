import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/empty";
import { Action, Store } from "@ngrx/store";
import { Actions, Effect, ofType } from "@ngrx/effects";
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

	@Effect() DoSignout$ = this.actions$.pipe(ofType(LayoutActionTypes.DO_SIGNOUT), map(() => new DoSignoutAction()));

	@Effect()
	fullscreen$ = this.actions$.pipe(ofType(LayoutActionTypes.FULLSCREEN), map(() => new InvisibleToolbarAction()));

	@Effect()
	exit_fullscreen$ = this.actions$.pipe(
		ofType(LayoutActionTypes.EXIT_FULLSCREEN),
		map(() => new VisibleToolbarAction())
	);

	@Effect()
	fullscren_toolbar$ = this.actions$.pipe(
		ofType(LayoutActionTypes.TOGGLE_FULLSCREEN),
		withLatestFrom(this.store.select(getFullscreenMode)),
		map(([ action, toolbarMode ]) => {
			if (toolbarMode) return new ExitFullscreenAction();
			else return new FullscreenAction();
		})
	);
}
