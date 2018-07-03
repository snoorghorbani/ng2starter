import { BehaviorSubject } from "rxjs";
import { Store } from "@ngrx/store";
import { GridModuleConfig } from "../grid.config";
import { AppState } from "../grid.reducer";
export declare class GridConfigurationService {
    private store;
    private _config;
    readonly config: GridModuleConfig;
    config$: BehaviorSubject<GridModuleConfig>;
    constructor(configFile: any, store: Store<AppState>);
}
