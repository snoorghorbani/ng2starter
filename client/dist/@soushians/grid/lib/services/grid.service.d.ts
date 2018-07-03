import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { HttpClient } from "@angular/common/http";
import { AppState } from "../grid.reducer";
import { GridConfigurationService } from "./grid-configuration.service";
import { GridModel } from "../models";
import { UpsertGridApiModel } from "./api/upsert-grid/upsert-grid.model";
export declare class GridService {
    private http;
    private store;
    private configurationService;
    constructor(http: HttpClient, store: Store<AppState>, configurationService: GridConfigurationService);
    get(_id: string): Observable<GridModel>;
    getGrids(): Observable<GridModel[]>;
    upsert(grid: UpsertGridApiModel.Request): Observable<GridModel>;
    selectById(_id: string): Observable<GridModel>;
    selectByOid(_id: string): Observable<GridModel>;
}
