import { map, filter, tap, take, switchMap, combineLatest } from "rxjs/operators";
import { Observable, BehaviorSubject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";

import { stringTemplate } from "@soushians/shared";
import { UserFacadeService } from "@soushians/user";

import { GridConfigurationService } from "./grid-configuration.service";
import { UpsertGridApiModel } from "./api/upsert-grid/upsert-grid.model";
import { GetGridStartAction } from "./api/get-grid/get-grid.actions";
import { GetGridsApiModel } from "./api/get-grids/get-grids.model";
import { AppState } from "../grid.reducer";
import { GridModel } from "../models";

@Injectable({
	providedIn: "root"
})
export class GridService {
	userId$: Observable<string>;
	constructor(
		private http: HttpClient,
		private store: Store<AppState>,
		private userFacadeService: UserFacadeService,
		private configurationService: GridConfigurationService
	) {
		this.userId$ = this.userFacadeService.getDisplayName().filter(i => i != undefined);
	}

	get(_id: string): Observable<GridModel> {
		return this.configurationService.config$.pipe(
			filter(config => config.endpoints.get !== ""),
			take(1),
			combineLatest(this.userId$),
			switchMap(([ config, userId ]) => {
				debugger;
				return this.http
					.get(stringTemplate(config.env.frontend_server + config.endpoints.get, { _id }), {
						params: {
							userId: userId
						}
					})
					.pipe(map((response: UpsertGridApiModel.Response) => response.Result));
			})
		);
	}

	getGrids(): Observable<GridModel[]> {
		return this.configurationService.config$.pipe(
			filter(config => config.endpoints.find != ""),
			switchMap(config => this.http.get(config.env.frontend_server + config.endpoints.find)),
			map((response: GetGridsApiModel.Response) => response.Result)
		);
	}
	upsert(grid: UpsertGridApiModel.Request): Observable<GridModel> {
		const model = new UpsertGridApiModel.Request(grid);
		return this.configurationService.config$.pipe(
			filter(config => config.endpoints.upsert != ""),
			take(1),
			combineLatest(this.userId$),
			switchMap(([ config, userId ]) => {
				return this.http.post(config.env.frontend_server + config.endpoints.upsert, model.getRequestBody(), {
					params: {
						userId: userId
					}
				});
			}),
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
			.select(state => state.grids.db.data)
			.pipe(
				filter(grids => grids != null),
				map(grids => grids.find(grid => grid._id == _id)),
				tap(grid => {
					if (grid == null) {
						this.store.dispatch(new GetGridStartAction(_id));
					}
				})
			)
			.subscribe(FormSchemaModel => subject.next(FormSchemaModel));
		return subject.asObservable();
	}
	selectByOid(_id: string): Observable<GridModel> {
		const subject = new BehaviorSubject<GridModel>(undefined);
		this.store
			.select(state => state.grids.db.data)
			.pipe(
				filter(grids => grids != null),
				map(grids => grids.find(grid => grid._id == _id)),
				tap(grid => {
					if (grid == null) {
						this.store.dispatch(new GetGridStartAction(_id));
					}
				})
			)
			.subscribe(FormSchemaModel => subject.next(FormSchemaModel));
		return subject.asObservable();
	}
}
