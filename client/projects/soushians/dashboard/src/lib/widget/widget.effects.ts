import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Action } from "@ngrx/store";
import { Actions, Effect } from "@ngrx/effects";
import { of } from "rxjs/observable/of";
import { Store } from "@ngrx/store";
import { switchMap, map, catchError } from "rxjs/operators";

import { WidgetService } from "app/dashboard/services/widget.service";
import {
	//ADD
	AddWidgetAction,
	AddWidgetFailed,
	AddWidgetSucceed,
	AddWidgetStartAction,

	//DELETE
	DeleteWidgetAction,
	DeleteWidgetStartAction,
	DeleteWidgetSucceedAction,
	DeleteWidgetFailedAction,

	//EDIT
	EditWidgetSucceedAction,
	EditWidgetFailedAction,

	//BULK EDIT
	BulkEditWidgetsSucceedAction,
	BulkEditWidgetsFailedAction,

	//FETCH
	WidgetListAction,
	WidgetListStartAction,
	WidgetListFailedAction,
	GetWidgetListAction,
	GetWidgetListSucceedAction,
	WidgetActionTypes
} from "./widget.actions";
import { WidgetModel } from "app/dashboard/models/widget.model";
import { WidgetListApiModel } from "app/dashboard/models/widget-list-api.model";
import { AddWidgetApiModel } from "app/dashboard/models/add-widget-api.model";

@Injectable()
export class WidgetEffects {
	constructor(private actions$: Actions<any>, private router: Router, private service: WidgetService) {}

	//FETCH
	@Effect()
	get_widget_list$ = this.actions$
		.ofType(WidgetActionTypes.GET_WIDGET_LIST)
		.switchMap((data: WidgetModel[]) => this.service.getList())
		.map(res => new GetWidgetListSucceedAction(res))
		.catch(() => Observable.of(new WidgetListFailedAction()));

	//ADD
	@Effect()
	add_widget$ = this.actions$
		.ofType(WidgetActionTypes.ADD_WIDGET)
		.pipe(
			map(action => action.payload),
			switchMap((data: AddWidgetApiModel.Request) => this.service.add(data)),
			map(res => new AddWidgetSucceed(res)),
			catchError(() => Observable.of(new AddWidgetFailed()))
		);

	//EDIT
	@Effect()
	save_widgets$ = this.actions$
		.ofType(WidgetActionTypes.EDIT_WIDGET)
		.pipe(
			map(action => action.payload),
			switchMap((data: WidgetModel) => this.service.editWidget(data)),
			map(res => new EditWidgetSucceedAction(res)),
			catchError(() => Observable.of(new EditWidgetFailedAction()))
		);

	//BULK EDIT
	@Effect()
	save_all_widgets$ = this.actions$
		.ofType(WidgetActionTypes.BULK_EDIT_WIDGETS)
		.pipe(
			map(action => action.payload),
			switchMap((data: WidgetListApiModel.Request) => this.service.bulkEditWidgets(data)),
			map(res => new BulkEditWidgetsSucceedAction(res)),
			catchError(() => Observable.of(new BulkEditWidgetsFailedAction()))
		);

	//DELETE
	@Effect()
	delete_widget$ = this.actions$
		.ofType(WidgetActionTypes.DELETE_WIDGET)
		.pipe(
			map(action => action.payload),
			switchMap((data: string) => this.service.delete(data)),
			map((res: any) => new DeleteWidgetSucceedAction(res)),
			catchError(() => Observable.of(new DeleteWidgetFailedAction()))
		);
}
