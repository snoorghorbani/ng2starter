import { BehaviorSubject } from "rxjs";
import { Store } from "@ngrx/store";
import { WidgetModuleConfig } from "../widget.config";
import { AppState } from "../widget.reducer";
export declare class WidgetConfigurationService {
    private store;
    private _config;
    readonly config: WidgetModuleConfig;
    config$: BehaviorSubject<WidgetModuleConfig>;
    constructor(configFile: any, store: Store<AppState>);
}
