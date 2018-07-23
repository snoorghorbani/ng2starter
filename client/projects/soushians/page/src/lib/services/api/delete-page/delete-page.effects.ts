import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Actions, Effect } from "@ngrx/effects";
import { map, switchMap, catchError } from "rxjs/operators";
import { of } from "rxjs";

import { PageService } from "../../page.service";
import {
	DELETE_PAGE_ACTION_TYPES,
	DeletePageActions,
	DeletePageSucceedAction,
	DeletePageFailedAction
} from "./delete-page.actions";

@Injectable()
export class DeletePageApiEffects {
	constructor(private actions$: Actions<DeletePageActions>, private service: PageService) {}

	@Effect()
	start$ = this.actions$
		.ofType(DELETE_PAGE_ACTION_TYPES.START)
		.pipe(
			map((action) => action.payload),
			switchMap((payload) => this.service.delete(payload)),
			map((res) => new DeletePageSucceedAction(res)),
			catchError((err) => of(new DeletePageFailedAction(err)))
		);
}
