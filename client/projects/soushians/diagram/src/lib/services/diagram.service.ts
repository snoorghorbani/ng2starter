import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, Subscription, Subject } from "rxjs/Rx";
import { Store } from "@ngrx/store";
declare var c3: any;

import { DiagramConfigurationService } from "./diagram-configuration.service";
import { FeatureState } from "../reducers";
import { GetDiagramsApiModel } from "../models/get-diagrams-api.model";
import { SourceModel } from "../models/source.model";
import { AddDiagramApiModel } from "../models/add-diagram-api.model";
import { DiagramModuleConfig } from "../diagram.config";
import { switchMap, map, takeUntil } from "rxjs/operators";

declare var _: any;

@Injectable({
	providedIn: "root"
})
export class DiagramService {
	config: DiagramModuleConfig;
	constructor(
		private http: HttpClient,
		private store: Store<FeatureState>,
		private configurationService: DiagramConfigurationService
	) {
		this.config = this.configurationService.config;
	}

	getDiagrams(): Observable<GetDiagramsApiModel.Response> {
		return this.http
			.get<GetDiagramsApiModel.Response>(this.config.env.frontend_server + "/api/diagram")
			.map((response) => response)
			.catch((err) => {
				return Observable.throw(err);
			});
	}
	getSources(): Observable<SourceModel[]> {
		return this.http
			.get(this.config.env.frontend_server + "/api/source")
			.map((response) => (response as any).Result)
			.catch((err) => {
				return Observable.throw(err);
			});
	}
	getGroups(): Observable<string[]> {
		return this.http
			.get(this.config.env.frontend_server + "/api/diagram/groups")
			.map((response) => (response as any).Result)
			.catch((err) => {
				return Observable.throw(err);
			});
	}
	getDiagram(id: string): Observable<any> {
		if (!id) debugger;
		return this.http
			.get(this.config.env.frontend_server + `/api/diagram/${id}`)
			.map((response) => response)
			.catch((err) => {
				return Observable.throw(err);
			});
	}
	addDiagram(data: any): Observable<AddDiagramApiModel.Response> {
		const model = new AddDiagramApiModel.Request(data);
		return this.http
			.post<AddDiagramApiModel.Response>(this.config.env.frontend_server + "/api/diagram", model.getRequestBody())
			.map((response) => response)
			.catch((err) => {
				return Observable.throw(err);
			});
	}
	updateDiagram(body: any): Observable<any> {
		return this.http
			.put(this.config.env.frontend_server + "/api/diagram", body)
			.map((response) => response)
			.catch((err) => {
				return Observable.throw(err);
			});
	}
	deleteDiagram(id: string): Observable<any> {
		return this.http
			.delete(`${this.config.env.frontend_server}/api/diagram/${id}`)
			.map((response) => response)
			.catch((err) => {
				return Observable.throw(err);
			});
	}
	getData(source: SourceModel, unsubscribe: Subject<void>, time: number = 0, once: Boolean = false): Observable<any> {
		if (once && time !== 0) {
			return this.http
				.get(`${this.config.env.frontend_server}/api/data`, {
					params: {
						sourceId: source._id,
						time: this.getFloorTime(source.Interval, time).toString()
					}
				})
				.map((res: any) => res.Result);
		} else if (source.Interval == 0) {
			return this.http
				.get(`${this.config.env.frontend_server}/api/data`, {
					params: {
						sourceId: source._id,
						time: null
					}
				})
				.map((res: any) => res.Result);
		} else {
			time = time || Date.now();
			return Observable.timer(0, source.Interval).pipe(
				takeUntil(unsubscribe),
				switchMap((i) =>
					this.http
						.get(`${this.config.env.frontend_server}/api/data`, {
							params: {
								sourceId: source._id,
								time: this.getFloorTime(source.Interval, time).toString()
							}
						}).pipe(
							map((res: any) => res.Result)
						)
				)
			);
		}
	}
	extract_columns_from_data(data: any, columnsMappings) {
		let res = [];

		columnsMappings.forEach((item) => {
			const ValueData = _.getValue(data, item.ValuePath);

			if (!item.NamePath) {
				return res.push([item.ValuePath.split(".").pop()].concat(ValueData));
			}
			const NameData = _.getValue(data, item.NamePath);

			if (_.is.array(NameData)) {
				return (res = res.concat(NameData.map((_item, i) => [_item].concat(ValueData[i]))));
			} else {
				return res.push([NameData].concat(ValueData));
			}
		});
		return res;
	}
	get_data_report(data: any) {
		return _.report(data);
	}
	get_last_node_of_data(data: any) {
		return (_.report(data) as any[]).filter((item) => item.isLastNode);
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

		return this.getData({} as SourceModel, new Subject<void>(), sync).subscribe((data) => {
			this.charts[id].load({
				columns: this.extract_columns_from_data(data.Data, config.ColumnMappings)
			});
		});
	}
	getFloorTime(precision = 60 * 1000, time: number = 0) {
		return Math.floor((time || Date.now()) / precision);
	}
}
