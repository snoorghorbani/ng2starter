import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { map, pluck } from "rxjs/operators";

import { GET_WIDGET_ACTION_TYPES, GET_WIDGETS_ACTION_TYPES } from "../services/api";
import { WidgetModel } from "../models";
import { UpsertWidgetAction } from "./widget.actions";

@Injectable()
export class WidgetDbEffects {
	constructor(private actions$: Actions<any>) {}

	@Effect()
	Upsert$ = this.actions$
		.ofType(GET_WIDGET_ACTION_TYPES.SUCCEED)
		.pipe(pluck("payload"), map((widget: WidgetModel<any>) => new UpsertWidgetAction([ widget ])));

	@Effect()
	UpsertMany$ = this.actions$
		.ofType(GET_WIDGETS_ACTION_TYPES.SUCCEED)
		.pipe(pluck("payload"), map((widgets: WidgetModel<any>[]) => new UpsertWidgetAction(widgets)));
}
