import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { HttpClient } from "@angular/common/http";
import { UserFacadeService } from "@soushians/user";
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
    private userFacadeService;
    userId$: Observable<string>;
    constructor(http: HttpClient, store: Store<AppState>, configurationService: PageConfigurationService, _location: Location, userFacadeService: UserFacadeService);
    get(name: string): Observable<PageModel>;
    delete(_id: string): Observable<PageModel>;
    getPages(): Observable<PageModel[]>;
    upsert<T>(page: UpsertPageApiModel.Request): Observable<PageModel>;
    selectByName(name: string): Observable<PageModel>;
}
