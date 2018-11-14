import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { map, pluck } from "rxjs/operators";
import { Observable } from "rxjs";

import { GridModel } from "../models/grid.model";
import { UpsertGridAction } from "./widget.actions";
import { GET_GRID_ACTION_TYPES } from "../services/api/get-grid/get-grid.actions";
import { GET_GRIDS_ACTION_TYPES } from "../services/api/get-grids/get-grids.actions";
import { UPSERT_GRID_ACTION_TYPES } from "../services/api/upsert-grid/upsert-grid.actions";

@Injectable()
export class GridDbEffects {
	constructor(private actions$: Actions<any>) {}

	@Effect()
	Upsert$ = this.actions$
		.ofType(GET_GRID_ACTION_TYPES.SUCCEED, UPSERT_GRID_ACTION_TYPES.SUCCEED)
		.pipe(pluck("payload"), map((grid: GridModel) => new UpsertGridAction([ grid ])));

	@Effect()
	UpsertMany$ = this.actions$
		.ofType(GET_GRIDS_ACTION_TYPES.SUCCEED)
		.pipe(pluck("payload"), map((grids: GridModel[]) => new UpsertGridAction(grids)));
}
