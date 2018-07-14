import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { AppState } from '../widget.reducer';
import { WidgetConfigurationService } from './widget-configuration.service';
import { WidgetModel } from '../models/widget.model';
import { UpsertWidgetApiModel } from './api';
export declare class WidgetService {
    private http;
    private store;
    private configurationService;
    constructor(http: HttpClient, store: Store<AppState>, configurationService: WidgetConfigurationService);
    get<T>(_id: string): Observable<WidgetModel<T>>;
    getWidgets(): Observable<WidgetModel<any>[]>;
    upsert<T>(widget: UpsertWidgetApiModel.Request): Observable<WidgetModel<T>>;
    selectById<T>(_id: string): Observable<WidgetModel<T>>;
}
