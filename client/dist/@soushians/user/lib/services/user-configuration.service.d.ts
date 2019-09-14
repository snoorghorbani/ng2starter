import { Store } from "@ngrx/store";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { UserModuleConfig } from "../user.config";
export declare class UserConfigurationService {
    private store;
    private _config;
    readonly config: UserModuleConfig;
    config$: BehaviorSubject<UserModuleConfig>;
    constructor(configFile: any, store: Store<any>);
}
