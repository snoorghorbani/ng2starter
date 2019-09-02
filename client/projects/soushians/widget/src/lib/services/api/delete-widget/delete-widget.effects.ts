import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { map, switchMap, catchError, pluck } from "rxjs/operators";
import { of } from "rxjs";

import { WidgetService } from "../../widget.service";
import {
	DELETE_WIDGET_ACTION_TYPES,
	DeleteWidgetActions,
	DeleteWidgetSucceedAction,
	DeleteWidgetFailedAction
} from "./delete-widget.actions";
import { WidgetModel } from "../../../models/widget.model";

@Injectable()
export class DeleteWidgetApiEffects {
	constructor(private actions$: Actions<DeleteWidgetActions>, private service: WidgetService) {}

	@Effect()
	start$ = this.actions$.pipe(
		ofType(DELETE_WIDGET_ACTION_TYPES.START),
		pluck("payload"),
		switchMap((payload: any) =>
			this.service
				.delete(payload)
				.pipe(
					map(res => new DeleteWidgetSucceedAction(res)),
					catchError(err => of(new DeleteWidgetFailedAction(err)))
				)
		)
	);
}
