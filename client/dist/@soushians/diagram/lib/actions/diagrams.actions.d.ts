import { Action } from '@ngrx/store';
import { GetDiagramsApiModel } from "../models";
export declare enum DiagramsActionTypes {
    GET_DIAGRAM = "[DIAGRAM] GET_DIAGRAM",
    GET_DIAGRAM_START = "[DIAGRAM] GET_DIAGRAM_START",
    GET_DIAGRAM_SUCCEED = "[DIAGRAM] GET_DIAGRAM_SUCCEED",
    GET_DIAGRAM_FAILED = "[DIAGRAM] GET_DIAGRAM_FAILED",
}
export declare class GetDiagrams implements Action {
    readonly type: DiagramsActionTypes;
}
export declare class GetDiagramsStart implements Action {
    readonly type: DiagramsActionTypes;
}
export declare class GetDiagramsSucceed implements Action {
    payload: GetDiagramsApiModel.Response;
    readonly type: DiagramsActionTypes;
    constructor(payload: GetDiagramsApiModel.Response);
}
export declare class GetDiagramsFailed implements Action {
    readonly type: DiagramsActionTypes;
}
export declare type DiagramsAction = GetDiagrams | GetDiagramsStart | GetDiagramsSucceed | GetDiagramsFailed;
