import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { map, filter, tap, take, switchMap } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { HttpClient } from "@angular/common/http";

import { stringTemplate } from "@soushians/shared";

import { AppState } from "../grid.reducer";
import { GridConfigurationService } from "./grid-configuration.service";
import { GridModel } from "../models";
import { UpsertGridApiModel } from "./api/upsert-grid/upsert-grid.model";
import { GetGridsApiModel } from "./api/get-grids/get-grids.model";
import { GetGridStartAction } from "./api/get-grid/get-grid.actions";

@Injectable({
	providedIn: "root"
})
export class GridService {
	constructor(
		private http: HttpClient,
		private store: Store<AppState>,
		private configurationService: GridConfigurationService
	) {}

	get(_id: string): Observable<GridModel> {
		return this.configurationService.config$.pipe(
			filter((config) => config.endpoints.get !== ""),
			take(1),
			switchMap((config) => this.http.get(stringTemplate(config.endpoints.get, { _id }))),
			map((response: UpsertGridApiModel.Response) => response.Result)
		);
	}

	getGrids(): Observable<GridModel[]> {
		return this.configurationService.config$.pipe(
			filter((config) => config.endpoints.find != ""),
			switchMap((config) => this.http.get(config.endpoints.find)),
			map((response: GetGridsApiModel.Response) => response.Result)
		);
	}
	upsert(grid: UpsertGridApiModel.Request): Observable<GridModel> {
		const model = new UpsertGridApiModel.Request(grid);
		return this.configurationService.config$.pipe(
			filter((config) => config.endpoints.upsert != ""),
			take(1),
			switchMap((config) => this.http.post(config.endpoints.upsert, model.getRequestBody())),
			map((response: UpsertGridApiModel.Response) => response.Result)
		);
	}
	// delete(_id: string) {
	// 	return this.configurationService.config$
	// 		.filter((config) => config.endpoints.deleteForm != "")
	// 		.switchMap((config) => this.http.get(config.endpoints.deleteForm));
	// }
	selectById(_id: string): Observable<GridModel> {
		const subject = new BehaviorSubject<GridModel>(undefined);
		this.store
			.select((state) => state.grids.db.data)
			.pipe(
				filter((grids) => grids != null),
				map((grids) => grids.find((grid) => grid._id == _id)),
				tap((grid) => {
					if (grid == null) {
						this.store.dispatch(new GetGridStartAction(_id));
					}
				})
			)
			.subscribe((FormSchemaModel) => subject.next(FormSchemaModel));
		return subject.asObservable();
	}
	selectByOid(_id: string): Observable<GridModel> {
		const subject = new BehaviorSubject<GridModel>(undefined);
		this.store
			.select((state) => state.grids.db.data)
			.pipe(
				filter((grids) => grids != null),
				map((grids) => grids.find((grid) => grid._id == _id)),
				tap((grid) => {
					if (grid == null) {
						this.store.dispatch(new GetGridStartAction(_id));
					}
				})
			)
			.subscribe((FormSchemaModel) => subject.next(FormSchemaModel));
		return subject.asObservable();
	}
}
