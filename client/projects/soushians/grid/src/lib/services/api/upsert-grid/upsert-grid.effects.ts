import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { map, switchMap, catchError, pluck } from "rxjs/operators";

import { GridService } from "../../grid.service";
import {
	UPSERT_GRID_ACTION_TYPES,
	UpsertGridActions,
	UpsertGridSucceedAction,
	UpsertGridFailedAction
} from "./upsert-grid.actions";
import { of } from "rxjs";

@Injectable()
export class UpsertGridApiEffects {
	constructor(private actions$: Actions<UpsertGridActions>, private service: GridService) {}

	@Effect()
	start$ = this.actions$.pipe(
		ofType(UPSERT_GRID_ACTION_TYPES.START),
		pluck("payload"),
		switchMap((payload: any) => this.service.upsert(payload)),
		map(res => new UpsertGridSucceedAction(res)),
		catchError(err => of(new UpsertGridFailedAction(err)))
	);
}
