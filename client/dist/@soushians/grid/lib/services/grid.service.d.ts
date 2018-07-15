import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Store } from "@ngrx/store";
import { UserFacadeService } from "@soushians/user";
import { GridConfigurationService } from "./grid-configuration.service";
import { UpsertGridApiModel } from "./api/upsert-grid/upsert-grid.model";
import { AppState } from "../grid.reducer";
import { GridModel } from "../models";
export declare class GridService {
    private http;
    private store;
    private userFacadeService;
    private configurationService;
    userId$: Observable<string>;
    constructor(http: HttpClient, store: Store<AppState>, userFacadeService: UserFacadeService, configurationService: GridConfigurationService);
    get(_id: string): Observable<GridModel>;
    getGrids(): Observable<GridModel[]>;
    upsert(grid: UpsertGridApiModel.Request): Observable<GridModel>;
    selectById(_id: string): Observable<GridModel>;
    selectByOid(_id: string): Observable<GridModel>;
}
