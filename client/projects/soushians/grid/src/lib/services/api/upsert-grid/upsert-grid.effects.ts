import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Actions, Effect } from "@ngrx/effects";
import { map, switchMap, catchError } from "rxjs/operators";

import { GridService } from "../../grid.service";
import {
	UPSERT_GRID_ACTION_TYPES,
	UpsertGridActions,
	UpsertGridSucceedAction,
	UpsertGridFailedAction
} from "./upsert-grid.actions";

@Injectable()
export class UpsertGridApiEffects {
	constructor(private actions$: Actions<UpsertGridActions>, private service: GridService) {}

	@Effect()
	start$ = this.actions$
		.ofType(UPSERT_GRID_ACTION_TYPES.START)
		.pipe(
			map((action) => action.payload),
			switchMap((payload) => this.service.upsert(payload)),
			map((res) => new UpsertGridSucceedAction(res)),
			catchError((err) => Observable.of(new UpsertGridFailedAction(err)))
		);
}
