import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Store } from "@ngrx/store";
import { UserFacadeService } from "@soushians/user";
import { UpsertGridApiModel } from "./api/upsert-grid/upsert-grid.model";
import { GridConfigurationService } from "./grid-configuration.service";
import { GridModel } from "../models/grid.model";
import { IGridItemModel } from "../models/gird-item.model";
import { AppState } from "../grid.reducer";
export declare class GridService {
    private http;
    private store;
    private userFacadeService;
    private configurationService;
    constructor(http: HttpClient, store: Store<AppState>, userFacadeService: UserFacadeService, configurationService: GridConfigurationService);
    get(_id: string): Observable<GridModel>;
    getGrids(): Observable<GridModel[]>;
    update_item(item: IGridItemModel<any>): Observable<GridModel[]>;
    update_item_access(item: IGridItemModel<any>): Observable<GridModel[]>;
    upsert(grid: UpsertGridApiModel.Request): Observable<GridModel>;
    selectById(_id: string): Observable<GridModel>;
    selectByOid(_id: string): Observable<GridModel>;
}
