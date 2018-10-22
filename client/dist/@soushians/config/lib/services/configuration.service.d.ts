import { Store } from "@ngrx/store";
import { ConfigModuleConfig } from "../config.config";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
export declare class ConfigurationService {
    private store;
    private _config;
    readonly config: ConfigModuleConfig;
    config$: BehaviorSubject<ConfigModuleConfig>;
    constructor(configFile: ConfigModuleConfig, store: Store<any>);
}
