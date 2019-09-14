import { OnInit, EventEmitter } from "@angular/core";
import { GridsterConfig, GridsterItem } from "angular-gridster2";
import { Store } from "@ngrx/store";
import { MatBottomSheet, MatCheckboxChange } from "@angular/material";
import { Observable } from "rxjs";
import { UserFacadeService } from "@soushians/user";
import { AppState } from "../grid.reducer";
import { GridModel } from "../models/grid.model";
import { GridService } from "../services/grid.service";
import { GridConfigurationService } from "../services/grid-configuration.service";
import { IGridItemModel } from "../models/gird-item.model";
export declare class GridComponent implements OnInit {
    private store;
    private service;
    private userFacadeService;
    private configurationService;
    private bottomSheet;
    itemValidateCallback: EventEmitter<any>;
    itemRemovedCallback: EventEmitter<any>;
    itemInitCallback: EventEmitter<any>;
    itemResizeCallback: EventEmitter<any>;
    itemChangeCallback: EventEmitter<any>;
    gridSizeChangedCallback: EventEmitter<any>;
    destroyCallback: EventEmitter<any>;
    initCallback: EventEmitter<any>;
    oid: string;
    havePermission$: Observable<boolean>;
    username: string;
    options: GridsterConfig;
    grid: GridModel;
    ready: boolean;
    gridItemTypes: any[string];
    constructor(store: Store<AppState>, service: GridService, userFacadeService: UserFacadeService, configurationService: GridConfigurationService, bottomSheet: MatBottomSheet);
    static itemChange(item: any, itemComponent: any): void;
    static itemResize(item: any, itemComponent: any): void;
    ngOnInit(): void;
    _initCallback(item: any): void;
    removeItem(item: any): void;
    make_public(item: IGridItemModel<any>, event: MatCheckboxChange): void;
    addItem(e: any): void;
    emptyCellClick(event: MouseEvent, item: GridsterItem): void;
    openConfig(e: any): void;
    saveConfig(e: any): void;
    gridItemTypeChanged(item: IGridItemModel<any>): void;
    showConfig(item: IGridItemModel<any>): void;
    goToEdit(): void;
    /**
     * private methods
     */
    _get_grid_by_oid_and_update_component(): void;
}
