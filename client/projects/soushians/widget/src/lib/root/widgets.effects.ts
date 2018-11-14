import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { Observable } from "rxjs";
import { map, pluck, switchMap } from "rxjs/operators";

import { GET_WIDGET_ACTION_TYPES, GET_WIDGETS_ACTION_TYPES } from "../services/api";
import { WidgetModel } from "../models/widget.model";
import { UpsertWidgetAction, WidgetsActionTypes, DeleteWidgetAction } from "./widget.actions";
import { DELETE_WIDGET_ACTION_TYPES } from "../services/api/delete-widget";

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

	@Effect()
	Delete$ = this.actions$
		.ofType(DELETE_WIDGET_ACTION_TYPES.SUCCEED)
		.pipe(pluck("payload"), map((widget: WidgetModel<any>) => new DeleteWidgetAction(widget)));
}
