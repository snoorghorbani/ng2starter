import { Injector } from "@angular/core";
import { Store } from "@ngrx/store";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { RuleModuleConfig } from "../rule.config";
import { RuleState } from "../rule.reducers";
export declare class RuleConfigurationService {
    private store;
    private injector;
    private _config;
    readonly config: RuleModuleConfig;
    config$: BehaviorSubject<RuleModuleConfig>;
    constructor(configFile: RuleModuleConfig, store: Store<RuleState>, injector: Injector);
}
