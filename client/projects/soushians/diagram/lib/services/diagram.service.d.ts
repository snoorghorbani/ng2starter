import { HttpClient } from "@angular/common/http";
import { Observable, Subscription } from "rxjs/Rx";
import { Store } from "@ngrx/store";
import { AddDiagramApiModel, GetDiagramsApiModel, SourceModel } from "../models";
import { DiagramConfigurationService } from "./diagram-configuration.service";
import { FeatureState } from "../reducers";
export declare class DiagramService {
    private http;
    private store;
    private userConfigurationService;
    constructor(http: HttpClient, store: Store<FeatureState>, userConfigurationService: DiagramConfigurationService);
    getDiagrams(): Observable<GetDiagramsApiModel.Response>;
    getSources(): Observable<SourceModel[]>;
    getGroups(): Observable<string[]>;
    getDiagram(id: string): Observable<any>;
    addDiagram(data: any): Observable<AddDiagramApiModel.Response>;
    updateDiagram(body: any): Observable<any>;
    deleteDiagram(id: string): Observable<any>;
    getData(source: SourceModel, time?: number, once?: Boolean): Observable<any>;
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
