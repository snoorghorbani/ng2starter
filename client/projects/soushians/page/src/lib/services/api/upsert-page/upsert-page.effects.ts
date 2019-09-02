import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { map, switchMap, catchError } from "rxjs/operators";
import { of } from "rxjs";

import { PageService } from "../../page.service";
import {
	UPSERT_PAGE_ACTION_TYPES,
	UpsertPageActions,
	UpsertPageSucceedAction,
	UpsertPageFailedAction
} from "./upsert-page.actions";

@Injectable()
export class UpsertPageApiEffects {
	constructor(private actions$: Actions<UpsertPageActions>, private service: PageService) {}

	@Effect()
	start$ = this.actions$.pipe(
		ofType<any>(UPSERT_PAGE_ACTION_TYPES.START),
		map(action => action.payload),
		switchMap(payload => this.service.upsert(payload)),
		map(res => new UpsertPageSucceedAction(res)),
		catchError(err => of(new UpsertPageFailedAction(err)))
	);
}
