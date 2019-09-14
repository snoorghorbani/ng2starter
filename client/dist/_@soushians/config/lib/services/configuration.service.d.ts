import { Store } from "@ngrx/store";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { ConfigModuleConfig } from "../config.config";
export declare class ConfigurationService {
    private store;
    private _config;
    readonly config: ConfigModuleConfig;
    config$: BehaviorSubject<ConfigModuleConfig>;
    constructor(configFile: ConfigModuleConfig, store: Store<any>);
}
