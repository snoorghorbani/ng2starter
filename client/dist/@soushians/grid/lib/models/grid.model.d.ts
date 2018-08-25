import { GridsterConfig } from "angular-gridster2";
import { IGridItemModel } from "./gird-item.model";
export declare class GridModel {
    _id: string;
    oid: string;
    name: string;
    type: string;
    owner: string;
    config: GridsterConfig;
    items: IGridItemModel<any>[];
    constructor({_id, oid, name, type, config, items}?: {
        _id?: string;
        oid?: string;
        name?: string;
        type?: string;
        config?: GridsterConfig;
        items?: any[];
    });
}
