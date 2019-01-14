import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Action } from "@ngrx/store";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { of } from "rxjs/observable/of";
import { Store } from "@ngrx/store";
import { map, switchMap, catchError, pluck } from "rxjs/operators";
import { Router } from "@angular/router";

import { SourceActionTypes, SourceSubmit, SourceSubmitSucceed, SourceSubmitFailed } from "../actions";
import { SourceModel, UpsertSourceApiModel } from "../models";
import { SourceService } from "../services/source.service";

@Injectable()
export class SourceEffects {
	constructor(private actions$: Actions<any>, private router: Router, private sourceService: SourceService) {}

	@Effect()
	afterSubmitSource$ = this.actions$.pipe(
		ofType(SourceActionTypes.SOURCE_SUBMIT),
		pluck("payload"),
		switchMap((data: UpsertSourceApiModel.Request) => {
			return this.sourceService
				.upsertSource(data)
				.pipe(map(res => new SourceSubmitSucceed()), catchError(() => of(new SourceSubmitFailed())));
		})
	);

	@Effect()
	SigninSucceed$ = this.actions$.pipe(
		ofType(SourceActionTypes.SOURCE_SUBMIT_SUCCEED),
		switchMap(() => {
			this.router.navigate([ "source" ]);
			return Observable.empty();
		})
	);
}
