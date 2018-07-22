import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { map, filter, tap, take, switchMap } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { HttpClient } from "@angular/common/http";

import { AppState } from "../page.reducer";
import { PageConfigurationService } from "./page-configuration.service";
import { PageModel } from "../models/page.model";
import { stringTemplate } from "@soushians/shared";
import { GetPagesApiModel, GetPageStartAction, UpsertPageApiModel } from "./api";
import { Location } from "@angular/common";

@Injectable()
export class PageService {
	constructor(
		private http: HttpClient,
		private store: Store<AppState>,
		private configurationService: PageConfigurationService,
		private _location: Location
	) {}

	get(name: string): Observable<PageModel> {
		return this.configurationService.config$.pipe(
			filter((config) => config.endpoints.get !== ""),
			take(1),
			switchMap((config) =>
				this.http.get(stringTemplate(config.env.frontend_server + config.endpoints.get, { name }))
			),
			map((response: UpsertPageApiModel.Response) => response.Result)
		);
	}

	getPages(): Observable<PageModel[]> {
		return this.configurationService.config$.pipe(
			filter((config) => config.endpoints.find != ""),
			switchMap((config) => this.http.get(config.env.frontend_server + config.endpoints.find)),
			map((response: GetPagesApiModel.Response) => response.Result)
		);
	}
	upsert<T>(page: UpsertPageApiModel.Request): Observable<PageModel> {
		const model = new UpsertPageApiModel.Request(page);
		return this.configurationService.config$.pipe(
			filter((config) => config.endpoints.upsert != ""),
			take(1),
			switchMap((config) =>
				this.http.post(config.env.frontend_server + config.endpoints.upsert, model.getRequestBody())
			),
			map((response: UpsertPageApiModel.Response) => response.Result),
			tap(() => this._location.back())
		);
	}
	// delete(name: string) {
	// 	return this.configurationService.config$
	// 		.filter((config) => config.endpoints.deleteForm != "")
	// 		.switchMap((config) => this.http.get(config.endpoints.deleteForm));
	// }
	selectByName(name: string): Observable<PageModel> {
		const subject = new BehaviorSubject<PageModel>(undefined);
		this.store
			.select((state) => state.pages.db.data)
			.pipe(
				filter((pages) => pages != null),
				map((pages) => pages.find((page) => page.name == name)),
				tap((page) => {
					if (page == null) {
						debugger;
						this.store.dispatch(new GetPageStartAction(name));
					}
				})
			)
			.subscribe((page) => subject.next(page));
		return subject.asObservable();
	}
}
