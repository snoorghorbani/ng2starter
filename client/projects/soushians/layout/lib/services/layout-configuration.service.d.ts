import { Store } from "@ngrx/store";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { LayoutModuleConfig } from "../layout.config";
import { FeatureState } from "../reducers";
export declare class LayoutConfigurationService {
    private store;
    private _config;
    readonly config: any;
    config$: BehaviorSubject<LayoutModuleConfig>;
    constructor(configFile: any, store: Store<FeatureState>);
}
