import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Action } from "@ngrx/store";
import { Actions, Effect } from "@ngrx/effects";
import { of } from "rxjs/observable/of";
import { Store } from "@ngrx/store";
import { map, switchMap, catchError } from "rxjs/operators";
import { Router } from "@angular/router";

import { SourceActionTypes, SourceSubmit, SourceSubmitSucceed, SourceSubmitFailed } from "../actions";
import { SourceModel, UpsertSourceApiModel } from "../models";
import { SourceService } from "../services/source.service";

@Injectable()
export class SourceEffects {
	constructor(private actions$: Actions<any>, private router: Router, private sourceService: SourceService) {}

	@Effect()
	afterSubmitSource$ = this.actions$.ofType(SourceActionTypes.SOURCE_SUBMIT).pipe(
		map(action => action.payload),
		switchMap((data: UpsertSourceApiModel.Request) => {
			return this.sourceService
				.upsertSource(data)
				.pipe(map(res => new SourceSubmitSucceed()), catchError(() => Observable.of(new SourceSubmitFailed())));
		})
	);

	@Effect()
	SigninSucceed$ = this.actions$.ofType(SourceActionTypes.SOURCE_SUBMIT_SUCCEED).pipe(
		switchMap(() => {
			this.router.navigate([ "source" ]);
			return Observable.empty();
		})
	);
}
