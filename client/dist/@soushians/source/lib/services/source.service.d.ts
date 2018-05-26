import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { UpsertSourceApiModel, GetSourcesApiModel, SourceModel } from "../models";
export declare class SourceService {
    private http;
    responseCache: any;
    constructor(http: HttpClient);
    getSources(): Observable<GetSourcesApiModel.Response>;
    getSourceById(id: string): Observable<SourceModel>;
    upsertSource(body: UpsertSourceApiModel.Request): Observable<any>;
    getData(source: SourceModel, time?: number): Observable<any>;
}
