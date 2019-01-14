import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { map, switchMap, catchError } from "rxjs/operators";
import { of } from "rxjs";

import { PageService } from "../../page.service";
import { GET_PAGE_ACTION_TYPES, GetPageActions, GetPageSucceedAction, GetPageFailedAction } from "./get-page.actions";

@Injectable()
export class GetPageApiEffects {
	constructor(private actions$: Actions<GetPageActions>, private service: PageService) {}

	@Effect()
	start$ = this.actions$.pipe(
		ofType<any>(GET_PAGE_ACTION_TYPES.START),
		map(action => action.payload),
		switchMap(payload => this.service.get(payload)),
		map(res => new GetPageSucceedAction(res)),
		catchError(err => of(new GetPageFailedAction(err)))
	);
}
