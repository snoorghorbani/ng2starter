import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { HttpClient } from "@angular/common/http";
import { AppState } from "../widget.reducer";
import { WidgetConfigurationService } from "./widget-configuration.service";
import { WidgetModel } from "../models/widget.model";
import { UpsertWidgetApiModel } from "./api";
import { Location } from "@angular/common";
export declare class WidgetService {
    private http;
    private store;
    private configurationService;
    private _location;
    constructor(http: HttpClient, store: Store<AppState>, configurationService: WidgetConfigurationService, _location: Location);
    get<T>(_id: string): Observable<WidgetModel<T>>;
    getWidgets(): Observable<WidgetModel<any>[]>;
    upsert<T>(widget: UpsertWidgetApiModel.Request): Observable<WidgetModel<T>>;
    delete(widget: WidgetModel<any>): Observable<WidgetModel<any>>;
    selectById<T>(_id: string): Observable<WidgetModel<T>>;
}
