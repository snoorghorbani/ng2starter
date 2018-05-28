import { Action } from '@ngrx/store';
import { AddDiagramApiModel } from "../models";
export declare enum AddDiagramActionTypes {
    ADD_DIAGRAM = "[DIAGRAM][ADD] ADD_DIAGRAM",
    ADD_DIAGRAM_START = "[DIAGRAM][ADD] ADD_DIAGRAM_START",
    ADD_DIAGRAM_SUCCEED = "[DIAGRAM][ADD] ADD_DIAGRAM_SUCCEED",
    DIAGRAM_CONFIG_CHANGED = "[DIAGRAM][ADD] DIAGRAM_CONFIG_CHANGED",
    ADD_DIAGRAM_FAILED = "[DIAGRAM][ADD] ADD_DIAGRAM_FAILED",
    STRUCTURE_DEFINITION_START = "[DIAGRAM][ADD] STRUCTURE_DEFINITION_START",
    HAVE_ENDPOINT = "[DIAGRAM][ADD] HAVE_STRUCTURE",
    DATA_LOADED = "[DIAGRAM][ADD] DATA_LOADED",
    STRUCTURE_DEFINITION_END = "[DIAGRAM][ADD] STRUCTURE_DEFINITION_END",
    COLUMNS_MAPPING_CHANGED = "[DIAGRAM][ADD] COLUMNS_MAPPING_CHANGED",
    DATA_CALCULATED = "[DIAGRAM][ADD] DATA_CALCULATED",
    COLUMN_ADDED = "[DIAGRAM][ADD] COLUMN_ADDED",
    GENERATE_DIAGRAM = "[DIAGRAM][ADD] GENERATE_DIAGRAM",
}
export declare class AddDiagramAction implements Action {
    payload: AddDiagramApiModel.Response;
    readonly type: AddDiagramActionTypes;
    constructor(payload: AddDiagramApiModel.Response);
}
export declare class AddDiagramActionStart implements Action {
    payload: AddDiagramApiModel.Response;
    readonly type: AddDiagramActionTypes;
    constructor(payload: AddDiagramApiModel.Response);
}
export declare class AddDiagramActionSucceed implements Action {
    payload: AddDiagramApiModel.Response;
    readonly type: AddDiagramActionTypes;
    constructor(payload: AddDiagramApiModel.Response);
}
export declare class AddDiagramActionFailed implements Action {
    readonly type: AddDiagramActionTypes;
}
export declare class DiagramConfigChangedAction implements Action {
    payload: any;
    readonly type: AddDiagramActionTypes;
    constructor(payload: any);
}
export declare class HaveEndpointAction implements Action {
    payload: any;
    readonly type: AddDiagramActionTypes;
    constructor(payload: any);
}
export declare class DataLoadedAction implements Action {
    payload: any;
    readonly type: AddDiagramActionTypes;
    constructor(payload: any);
}
export declare class StructureDefinitionStartAction implements Action {
    payload: any;
    readonly type: AddDiagramActionTypes;
    constructor(payload: any);
}
export declare class StructureDefinitionFinishedAction implements Action {
    payload: any;
    readonly type: AddDiagramActionTypes;
    constructor(payload: any);
}
export declare class ColumnsMappingChangedAction implements Action {
    payload: any;
    readonly type: AddDiagramActionTypes;
    constructor(payload: any);
}
export declare class DataCalculatedAction implements Action {
    payload: any;
    readonly type: AddDiagramActionTypes;
    constructor(payload: any);
}
export declare class GenerateDiagramAction implements Action {
    payload: any;
    readonly type: AddDiagramActionTypes;
    constructor(payload: any);
}
export declare class ColumnAdded implements Action {
    readonly type: AddDiagramActionTypes;
}
export declare type AddDiagramActions = AddDiagramAction | AddDiagramActionStart | AddDiagramActionSucceed | AddDiagramActionFailed | HaveEndpointAction | DataLoadedAction | StructureDefinitionStartAction | StructureDefinitionFinishedAction | ColumnsMappingChangedAction | DataCalculatedAction | GenerateDiagramAction | DiagramConfigChangedAction;
