import { Action } from '@ngrx/store';
import { EditDiagramApiModel } from "../models";
export declare enum EditDiagramActionTypes {
    EDIT_DIAGRAM = "[DIAGRAM][EDIT] EDIT_DIAGRAM",
    EDIT_DIAGRAM_START = "[DIAGRAM][EDIT] EDIT_DIAGRAM_START",
    EDIT_DIAGRAM_SUCCEED = "[DIAGRAM][EDIT] EDIT_DIAGRAM_SUCCEED",
    EDIT_DIAGRAM_FAILED = "[DIAGRAM][EDIT] EDIT_DIAGRAM_FAILED",
}
export declare class EditDiagramAction implements Action {
    payload: EditDiagramApiModel.Response;
    readonly type: EditDiagramActionTypes;
    constructor(payload: EditDiagramApiModel.Response);
}
export declare class EditDiagramActionStart implements Action {
    payload: EditDiagramApiModel.Response;
    readonly type: EditDiagramActionTypes;
    constructor(payload: EditDiagramApiModel.Response);
}
export declare class EditDiagramActionSucceed implements Action {
    payload: EditDiagramApiModel.Response;
    readonly type: EditDiagramActionTypes;
    constructor(payload: EditDiagramApiModel.Response);
}
export declare class EditDiagramActionFailed implements Action {
    readonly type: EditDiagramActionTypes;
}
export declare type EditDiagramActions = EditDiagramAction | EditDiagramActionStart | EditDiagramActionSucceed | EditDiagramActionFailed;
