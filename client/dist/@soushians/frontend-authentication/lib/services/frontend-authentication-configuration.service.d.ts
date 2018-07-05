import { Store } from "@ngrx/store";
import { BehaviorSubject } from "rxjs";
import { FrontendAuthenticationModuleConfig } from "../frontend-authentication.config";
import { FrontendAuthenticationState } from "../reducers";
export declare class FrontendAuthenticationConfigurationService {
    private store;
    private _config;
    readonly config: FrontendAuthenticationModuleConfig;
    config$: BehaviorSubject<FrontendAuthenticationModuleConfig>;
    constructor(configFile: any, store: Store<FrontendAuthenticationState>);
}
