import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Actions, Effect } from "@ngrx/effects";
import { map, switchMap, catchError } from "rxjs/operators";
import { of } from "rxjs";

import { GridService } from "../../grid.service";
import { GET_GRID_ACTION_TYPES, GetGridActions, GetGridSucceedAction, GetGridFailedAction } from "./get-grid.actions";

@Injectable()
export class GetGridApiEffects {
	constructor(private actions$: Actions<GetGridActions>, private service: GridService) {}

	@Effect()
	start$ = this.actions$
		.ofType(GET_GRID_ACTION_TYPES.START)
		.pipe(
			map((action) => action.payload),
			switchMap((payload) => this.service.get(payload)),
			map((res) => new GetGridSucceedAction(res)),
			catchError((err) => of(new GetGridFailedAction(err)))
		);
}
