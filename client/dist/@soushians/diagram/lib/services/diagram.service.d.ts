import { HttpClient } from "@angular/common/http";
import { Observable, Subscription, Subject } from "rxjs/Rx";
import { Store } from "@ngrx/store";
import { DiagramConfigurationService } from "./diagram-configuration.service";
import { FeatureState } from "../reducers";
import { GetDiagramsApiModel } from "../models/get-diagrams-api.model";
import { SourceModel } from "../models/source.model";
import { AddDiagramApiModel } from "../models/add-diagram-api.model";
import { DiagramModuleConfig } from "../diagram.config";
export declare class DiagramService {
    private http;
    private store;
    private configurationService;
    config: DiagramModuleConfig;
    constructor(http: HttpClient, store: Store<FeatureState>, configurationService: DiagramConfigurationService);
    getDiagrams(): Observable<GetDiagramsApiModel.Response>;
    getSources(): Observable<SourceModel[]>;
    getGroups(): Observable<string[]>;
    getDiagram(id: string): Observable<any>;
    addDiagram(data: any): Observable<AddDiagramApiModel.Response>;
    updateDiagram(body: any): Observable<any>;
    deleteDiagram(id: string): Observable<any>;
    getData(source: SourceModel, unsubscribe: Subject<void>, time?: number, once?: Boolean): Observable<any>;
    extract_columns_from_data(data: any, columnsMappings: any): any[];
    get_data_report(data: any): any;
    get_last_node_of_data(data: any): any[];
    buildChartConfig(columns: any): {
        data: {
            columns: any;
        };
        legend: {
            show: boolean;
        };
    };
    charts: {};
    generateDiagram(config: any, id: string, route: string, sync: number): Subscription;
    getFloorTime(precision?: number, time?: number): number;
}
