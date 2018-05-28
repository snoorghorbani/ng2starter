import { BehaviorSubject } from "rxjs";
import { Store } from "@ngrx/store";
import { FormModuleConfig } from "../form.config";
import { MainContainerState } from "../main-container";
export declare class FormConfigurationService {
    private store;
    private _config;
    readonly config: FormModuleConfig;
    config$: BehaviorSubject<FormModuleConfig>;
    constructor(configFile: any, store: Store<MainContainerState>);
}
