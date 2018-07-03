import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Actions, Effect } from "@ngrx/effects";
import { map, switchMap, catchError } from "rxjs/operators";
import { of } from "rxjs";

import { GridService } from "../../grid.service";
import {
	GET_GRIDS_ACTION_TYPES,
	GetGridsActions,
	GetGridsSucceedAction,
	GetGridsFailedAction
} from "./get-grids.actions";

@Injectable()
export class GetGridsApiEffects {
	constructor(private actions$: Actions<GetGridsActions>, private service: GridService) {}

	@Effect()
	start$ = this.actions$
		.ofType(GET_GRIDS_ACTION_TYPES.START)
		.pipe(
			switchMap(() =>
				this.service
					.getGrids()
					.pipe(
						map((res) => new GetGridsSucceedAction(res)),
						catchError((err) => of(new GetGridsFailedAction(err)))
					)
			)
		);
}
