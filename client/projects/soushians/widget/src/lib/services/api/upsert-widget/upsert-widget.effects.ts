import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { map, switchMap, catchError, pluck } from "rxjs/operators";
import { of } from "rxjs";

import { WidgetService } from "../../widget.service";
import {
	UPSERT_WIDGET_ACTION_TYPES,
	UpsertWidgetActions,
	UpsertWidgetSucceedAction,
	UpsertWidgetFailedAction
} from "./upsert-widget.actions";

@Injectable()
export class UpsertWidgetApiEffects {
	constructor(private actions$: Actions<UpsertWidgetActions>, private service: WidgetService) {}

	@Effect()
	start$ = this.actions$.pipe(
		ofType(UPSERT_WIDGET_ACTION_TYPES.START),
		pluck<any, any>("payload"),
		switchMap(payload => this.service.upsert(payload)),
		map(res => new UpsertWidgetSucceedAction(res)),
		catchError(err => of(new UpsertWidgetFailedAction(err)))
	);
}
