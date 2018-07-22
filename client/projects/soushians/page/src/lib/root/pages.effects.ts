import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { map, pluck } from "rxjs/operators";
import { Observable } from "rxjs/Observable";

import { GET_PAGE_ACTION_TYPES, GET_PAGES_ACTION_TYPES } from "../services/api";
import { PageModel } from "../models/page.model";
import { UpsertPageAction } from "./pages.actions";

@Injectable()
export class PageDbEffects {
	constructor(private actions$: Actions<any>) {}

	@Effect()
	Upsert$ = this.actions$
		.ofType(GET_PAGE_ACTION_TYPES.SUCCEED)
		.pipe(pluck("payload"), map((page: PageModel) => new UpsertPageAction([ page ])));

	@Effect()
	UpsertMany$ = this.actions$
		.ofType(GET_PAGES_ACTION_TYPES.SUCCEED)
		.pipe(pluck("payload"), map((pages: PageModel[]) => new UpsertPageAction(pages)));
}
