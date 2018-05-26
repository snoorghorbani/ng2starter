import { Action } from '@ngrx/store';

import { GetDiagramsApiModel } from "../models";

export enum DiagramsActionTypes {
  GET_DIAGRAM = '[DIAGRAM] GET_DIAGRAM',
  GET_DIAGRAM_START = '[DIAGRAM] GET_DIAGRAM_START',
  GET_DIAGRAM_SUCCEED = '[DIAGRAM] GET_DIAGRAM_SUCCEED',
  GET_DIAGRAM_FAILED = '[DIAGRAM] GET_DIAGRAM_FAILED'
}

export class GetDiagrams implements Action {
  readonly type = DiagramsActionTypes.GET_DIAGRAM;
}
export class GetDiagramsStart implements Action {
  readonly type = DiagramsActionTypes.GET_DIAGRAM_START;
}
export class GetDiagramsSucceed implements Action {
  readonly type = DiagramsActionTypes.GET_DIAGRAM_SUCCEED;
  constructor(public payload: GetDiagramsApiModel.Response) { }
}
export class GetDiagramsFailed implements Action {
  readonly type = DiagramsActionTypes.GET_DIAGRAM_FAILED;
}


export type DiagramsAction =
  GetDiagrams
  | GetDiagramsStart
  | GetDiagramsSucceed
  | GetDiagramsFailed;
