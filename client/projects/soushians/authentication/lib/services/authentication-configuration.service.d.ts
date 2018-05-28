import { Store } from "@ngrx/store";
import { BehaviorSubject } from "rxjs";
import { AuthenticationModuleConfig } from "../authentication.config";
import { AuthenticationState } from "../reducers";
export declare class AuthenticationConfigurationService {
    private store;
    private _config;
    readonly config: AuthenticationModuleConfig;
    config$: BehaviorSubject<AuthenticationModuleConfig>;
    constructor(configFile: any, store: Store<AuthenticationState>);
}
