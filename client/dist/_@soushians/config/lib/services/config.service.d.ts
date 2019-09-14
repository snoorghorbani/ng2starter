import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { EditConfigApiModel, ConfigModel } from "../models";
import { ConfigState } from "../reducers";
import { ConfigurationService } from "./configuration.service";
export declare class ConfigService {
    private http;
    private store;
    private configurationService;
    responseCache: any;
    constructor(http: HttpClient, store: Store<ConfigState>, configurationService: ConfigurationService);
    getConfigs(): Observable<ConfigModel<any>[]>;
    getConfigByName(name: string): Observable<any>;
    editConfig(body: EditConfigApiModel.Request): Observable<any>;
    getLayoutConfigs(): Observable<any>;
}
