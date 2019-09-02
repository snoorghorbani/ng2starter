import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { map, pluck } from "rxjs/operators";
import { Observable } from "rxjs/Observable";

import { GET_PAGE_ACTION_TYPES, GET_PAGES_ACTION_TYPES, DELETE_PAGE_ACTION_TYPES } from "../services/api";
import { PageModel } from "../models/page.model";
import { UpsertPageAction, DeletePageAction } from "./pages.actions";

@Injectable()
export class PageDbEffects {
	constructor(private actions$: Actions<any>) {}

	@Effect()
	Upsert$ = this.actions$.pipe(
		ofType(GET_PAGE_ACTION_TYPES.SUCCEED),
		pluck("payload"),
		map((page: PageModel) => new UpsertPageAction([ page ]))
	);

	@Effect()
	UpsertMany$ = this.actions$.pipe(
		ofType(GET_PAGES_ACTION_TYPES.SUCCEED),
		pluck("payload"),
		map((pages: PageModel[]) => new UpsertPageAction(pages))
	);

	@Effect()
	delete$ = this.actions$.pipe(
		ofType(DELETE_PAGE_ACTION_TYPES.SUCCEED),
		pluck("payload"),
		map((page: PageModel) => new DeletePageAction(page))
	);
}
