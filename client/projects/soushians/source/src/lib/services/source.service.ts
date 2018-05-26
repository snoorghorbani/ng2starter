import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Rx";

import { UpsertSourceApiModel, GetSourcesApiModel, SourceModel } from "../models";

@Injectable({
	providedIn: "root"
})
export class SourceService {
	responseCache: any;

	constructor(private http: HttpClient) {}

	getSources(): Observable<GetSourcesApiModel.Response> {
		return this.http
			.get<GetSourcesApiModel.Response>("http://localhost:3000/api/source")
			.map(response => {
				return response;
			})
			.catch(err => {
				return Observable.throw(err);
			});
	}
	getSourceById(id: string): Observable<SourceModel> {
		return this.http
			.get(`http://localhost:3000/api/source/${id}`)
			.map((response: UpsertSourceApiModel.Response) => response.Result)
			.catch(err => {
				return Observable.throw(err);
			});
	}
	upsertSource(body: UpsertSourceApiModel.Request): Observable<any> {
		var model = new UpsertSourceApiModel.Request(body);
		return this.http
			.put("http://localhost:3000/api/source", model.getRequestBody(), { withCredentials: false })
			.map(response => response)
			.catch(err => {
				return Observable.throw(err);
			});
	}

	getData(source: SourceModel, time: number = 0): Observable<any> {
		return this.http
			.get(`http://localhost:3000/api/data`, {
				params: {
					sourceId: source._id,
					time: null
				}
			})
			.map((res: any) => res.Result);
	}
}
