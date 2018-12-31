import { BehaviorSubject } from "rxjs";
import { Store } from "@ngrx/store";
import { PageModuleConfig } from "../page.config";
import { AppState } from "../page.reducer";
export declare class PageConfigurationService {
    private store;
    private _config;
    readonly config: PageModuleConfig;
    config$: BehaviorSubject<PageModuleConfig>;
    constructor(configFile: any, store: Store<AppState>);
}
