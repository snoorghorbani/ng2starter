import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { HttpClient } from "@angular/common/http";
import { AppState } from "../page.reducer";
import { PageConfigurationService } from "./page-configuration.service";
import { PageModel } from "../models/page.model";
import { UpsertPageApiModel } from "./api";
import { Location } from "@angular/common";
export declare class PageService {
    private http;
    private store;
    private configurationService;
    private _location;
    constructor(http: HttpClient, store: Store<AppState>, configurationService: PageConfigurationService, _location: Location);
    get<T>(_id: string): Observable<PageModel<T>>;
    getPages(): Observable<PageModel<any>[]>;
    upsert<T>(page: UpsertPageApiModel.Request): Observable<PageModel<T>>;
    selectById<T>(_id: string): Observable<PageModel<T>>;
}
