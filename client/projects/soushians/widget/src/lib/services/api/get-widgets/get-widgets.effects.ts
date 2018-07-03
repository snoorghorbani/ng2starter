import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Actions, Effect } from "@ngrx/effects";
import { map, switchMap, catchError } from "rxjs/operators";
import { of } from "rxjs";

import { WidgetService } from "../../widget.service";
import {
	GET_WIDGETS_ACTION_TYPES,
	GetWidgetsActions,
	GetWidgetsSucceedAction,
	GetWidgetsFailedAction
} from "./get-widgets.actions";

@Injectable()
export class GetWidgetsApiEffects {
	constructor(private actions$: Actions<GetWidgetsActions>, private service: WidgetService) {}

	@Effect()
	start$ = this.actions$
		.ofType(GET_WIDGETS_ACTION_TYPES.START)
		.pipe(
			switchMap(() =>
				this.service
					.getWidgets()
					.pipe(
						map((res) => new GetWidgetsSucceedAction(res)),
						catchError((err) => of(new GetWidgetsFailedAction(err)))
					)
			)
		);
}
