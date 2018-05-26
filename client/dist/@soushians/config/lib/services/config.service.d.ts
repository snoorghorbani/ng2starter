import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { ConfigState } from "../reducers";
import { Store } from "@ngrx/store";
import { EditConfigApiModel, ConfigModel, LayoutConfigModel } from "../models";
import { ConfigurationService } from "./configuration.service";
export declare class ConfigService {
    private http;
    private store;
    private configurationService;
    responseCache: any;
    configsEndpoint: string;
    constructor(http: HttpClient, store: Store<ConfigState>, configurationService: ConfigurationService);
    getConfigs(): Observable<ConfigModel<any>[]>;
    getConfigByName(name: string): Observable<any>;
    editConfig(body: EditConfigApiModel.Request): Observable<any>;
    getLayoutConfigs(): Observable<LayoutConfigModel>;
}
