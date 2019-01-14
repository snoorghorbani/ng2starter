import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { map, switchMap, catchError, pluck } from "rxjs/operators";
import { of } from "rxjs";

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
	start$ = this.actions$.pipe(
		ofType(GET_WIDGET_ACTION_TYPES.START),
		pluck<any, any>("payload"),
		switchMap(payload => this.service.get(payload)),
		map(res => new GetWidgetSucceedAction(res)),
		catchError(err => of(new GetWidgetFailedAction(err)))
	);
}
