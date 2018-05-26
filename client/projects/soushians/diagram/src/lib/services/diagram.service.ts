import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, Subscription } from "rxjs/Rx";
import { Store } from "@ngrx/store";
declare var c3: any;

import { AddDiagramApiModel, GetDiagramsApiModel, DiagramModel, SourceModel } from "../models";
import { DiagramConfigurationService } from "./diagram-configuration.service";
import { FeatureState } from "../reducers";

declare var _: any;

@Injectable()
export class DiagramService {
	constructor(
		private http: HttpClient,
		private store: Store<FeatureState>,
		private userConfigurationService: DiagramConfigurationService
	) {}

	getDiagrams(): Observable<GetDiagramsApiModel.Response> {
		return this.http
			.get<GetDiagramsApiModel.Response>("http://localhost:3000/api/diagram")
			.map(response => response)
			.catch(err => {
				return Observable.throw(err);
			});
	}
	getSources(): Observable<SourceModel[]> {
		return this.http
			.get("http://localhost:3000/api/source")
			.map(response => (response as any).Result)
			.catch(err => {
				return Observable.throw(err);
			});
	}
	getGroups(): Observable<string[]> {
		return this.http
			.get("http://localhost:3000/api/diagram/groups")
			.map(response => (response as any).Result)
			.catch(err => {
				return Observable.throw(err);
			});
	}
	getDiagram(id: string): Observable<any> {
		debugger;
		if (!id) debugger;
		return this.http.get(`http://localhost:3000/api/diagram/${id}`).map(response => response).catch(err => {
			return Observable.throw(err);
		});
	}
	addDiagram(data: any): Observable<AddDiagramApiModel.Response> {
		var model = new AddDiagramApiModel.Request(data);
		debugger;
		return this.http
			.post<AddDiagramApiModel.Response>("http://localhost:3000/api/diagram", model.getRequestBody())
			.map(response => response)
			.catch(err => {
				return Observable.throw(err);
			});
	}
	updateDiagram(body: any): Observable<any> {
		debugger;
		return this.http.put("http://localhost:3000/api/diagram", body).map(response => response).catch(err => {
			return Observable.throw(err);
		});
	}
	deleteDiagram(id: string): Observable<any> {
		return this.http.delete(`http://localhost:3000/api/diagram/${id}`).map(response => response).catch(err => {
			return Observable.throw(err);
		});
	}
	getData(source: SourceModel, time: number = 0, once: Boolean = false): Observable<any> {
		if (once && time !== 0) {
			return this.http
				.get(`http://localhost:3000/api/data`, {
					params: {
						sourceId: source._id,
						time: this.getFloorTime(source.Interval, time).toString()
					}
				})
				.map((res: any) => res.Result);
		} else if (source.Interval == 0) {
			return this.http
				.get(`http://localhost:3000/api/data`, {
					params: {
						sourceId: source._id,
						time: null
					}
				})
				.map((res: any) => res.Result);
		} else {
			time = time || Date.now();
			return Observable.timer(0, source.Interval).switchMap(i =>
				this.http
					.get(`http://localhost:3000/api/data`, {
						params: {
							sourceId: source._id,
							time: this.getFloorTime(source.Interval, time).toString()
						}
					})
					.map((res: any) => res.Result)
			);
		}
	}
	extract_columns_from_data(data: any, columnsMappings) {
		let res = [];

		columnsMappings.forEach(item => {
			var ValueData = _.getValue(data, item.ValuePath);

			if (!item.NamePath) {
				return res.push([ item.ValuePath.split(".").pop() ].concat(ValueData));
			}
			var NameData = _.getValue(data, item.NamePath);

			if (_.is.array(NameData)) {
				return (res = res.concat(NameData.map((item, i) => [ item ].concat(ValueData[i]))));
			} else {
				return res.push([ NameData ].concat(ValueData));
			}
		});
		return res;
	}
	get_data_report(data: any) {
		return _.report(data);
	}
	get_last_node_of_data(data: any) {
		return (_.report(data) as any[]).filter(item => item.isLastNode);
	}
	buildChartConfig(columns) {
		return {
			data: {
				columns
			},
			legend: {
				show: true
			}
		};
	}
	// TODO: implement interface of c3 config
	charts = {};
	generateDiagram(config: any, id: string, route: string, sync: number): Subscription {
		this.charts[id] = c3.generate({
			...config,
			bindto: `#diagram_${id}`
		});

		return this.getData({} as SourceModel, sync).subscribe(data => {
			this.charts[id].load({
				columns: this.extract_columns_from_data(data.Data, config.ColumnMappings)
			});
		});
	}
	getFloorTime(precision = 60 * 1000, time: number = 0) {
		return Math.floor((time || Date.now()) / precision);
	}
}
