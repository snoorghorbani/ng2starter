import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Actions, Effect } from "@ngrx/effects";
import { map, switchMap, catchError } from "rxjs/operators";
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
	constructor(private actions$: Actions<DeleteWidgetActions>, private service: WidgetService) { }

	@Effect()
	start$ = this.actions$
		.ofType(DELETE_WIDGET_ACTION_TYPES.START)
		.pipe(
			map((action) => action.payload),
			switchMap((payload) =>
				this.service
					.delete(payload)
					.pipe(
						map((res) => new DeleteWidgetSucceedAction(res)),
						catchError((err) => of(new DeleteWidgetFailedAction(err)))
					)
			)
		);
}
