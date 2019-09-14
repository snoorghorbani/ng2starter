import { Store } from "@ngrx/store";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { LayoutModuleConfigModel } from "../layout.config";
import { FeatureState } from "../reducers";
export declare class LayoutConfigurationService {
    private store;
    private _config;
    readonly config: LayoutModuleConfigModel;
    config$: BehaviorSubject<LayoutModuleConfigModel>;
    constructor(configFile: any, store: Store<FeatureState>);
}
