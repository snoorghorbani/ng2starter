import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { map, filter, tap, take, switchMap } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { HttpClient } from "@angular/common/http";

import { AppState } from "../widget.reducer";
import { WidgetConfigurationService } from "./widget-configuration.service";
import { WidgetModel } from "../models";
import { stringTemplate } from "@soushians/shared";
import { GetWidgetsApiModel, GetWidgetStartAction, UpsertWidgetApiModel } from "./api";

// import { getWidgetModuleConfig } from "@soushians/config";

// import { WidgetConfigurationService } from "./widget-configuration.service";
// import { WidgetRunSuccessfullyAction } from "../widget.actions";

@Injectable({
	providedIn: "root"
})
export class WidgetService {
	constructor(
		private http: HttpClient,
		private store: Store<AppState>,
		private configurationService: WidgetConfigurationService
	) {}

	get<T>(_id: string): Observable<WidgetModel<T>> {
		return this.configurationService.config$.pipe(
			filter((config) => config.endpoints.get !== ""),
			take(1),
			switchMap((config) => this.http.get(stringTemplate(config.endpoints.get, { _id }))),
			map((response: UpsertWidgetApiModel.Response) => response.Result)
		);
	}

	getWidgets(): Observable<WidgetModel<any>[]> {
		return this.configurationService.config$.pipe(
			filter((config) => config.endpoints.find != ""),
			switchMap((config) => this.http.get(config.endpoints.find)),
			map((response: GetWidgetsApiModel.Response) => response.Result)
		);
	}
	upsert<T>(widget: UpsertWidgetApiModel.Request): Observable<WidgetModel<T>> {
		const model = new UpsertWidgetApiModel.Request(widget);
		return this.configurationService.config$.pipe(
			filter((config) => config.endpoints.upsert != ""),
			take(1),
			switchMap((config) => this.http.post(config.endpoints.upsert, model.getRequestBody())),
			map((response: UpsertWidgetApiModel.Response) => response.Result)
		);
	}
	// delete(_id: string) {
	// 	return this.configurationService.config$
	// 		.filter((config) => config.endpoints.deleteForm != "")
	// 		.switchMap((config) => this.http.get(config.endpoints.deleteForm));
	// }
	selectById<T>(_id: string): Observable<WidgetModel<T>> {
		const subject = new BehaviorSubject<WidgetModel<T>>(undefined);
		this.store
			.select((state) => state.widgets.db.data)
			.pipe(
				filter((widgets) => widgets != null),
				map((widgets) => widgets.find((widget) => widget._id == _id)),
				tap((widget) => {
					if (widget == null) {
						this.store.dispatch(new GetWidgetStartAction(_id));
					}
				})
			)
			.subscribe((FormSchemaModel) => subject.next(FormSchemaModel));
		return subject.asObservable();
	}
}
