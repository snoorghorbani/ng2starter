import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { map, switchMap, catchError } from "rxjs/operators";
import { of } from "rxjs";

import { PageService } from "../../page.service";
import {
	GET_PAGES_ACTION_TYPES,
	GetPagesActions,
	GetPagesSucceedAction,
	GetPagesFailedAction
} from "./get-pages.actions";

@Injectable()
export class GetPagesApiEffects {
	constructor(private actions$: Actions<GetPagesActions>, private service: PageService) {}

	@Effect()
	start$ = this.actions$.pipe(
		ofType(GET_PAGES_ACTION_TYPES.START),
		switchMap(() =>
			this.service
				.getPages()
				.pipe(map(res => new GetPagesSucceedAction(res)), catchError(err => of(new GetPagesFailedAction(err))))
		)
	);
}
