import { BehaviorSubject } from "rxjs";
import { Store } from "@ngrx/store";
import { SocketModuleConfig } from "../socket.config";
import { AppState } from "../socket.reducer";
export declare class SocketConfigurationService {
    private store;
    private _config;
    readonly config: SocketModuleConfig;
    config$: BehaviorSubject<SocketModuleConfig>;
    constructor(configFile: any, store: Store<AppState>);
}
