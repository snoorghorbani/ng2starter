import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Actions, Effect } from "@ngrx/effects";
import { map, switchMap, catchError } from "rxjs/operators";

import { WidgetService } from "../../widget.service";
import {
	GET_WIDGET_ACTION_TYPES,
	GetWidgetActions,
	GetWidgetSucceedAction,
	GetWidgetFailedAction
} from "./get-widget.actions";

@Injectable()
export class GetWidgetApiEffects {
	constructor(private actions$: Actions<GetWidgetActions>, private service: WidgetService) {}

	@Effect()
	start$ = this.actions$
		.ofType(GET_WIDGET_ACTION_TYPES.START)
		.pipe(
			map((action) => action.payload),
			switchMap((payload) => this.service.get(payload)),
			map((res) => new GetWidgetSucceedAction(res)),
			catchError((err) => Observable.of(new GetWidgetFailedAction(err)))
		);
}
