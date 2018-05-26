import { Action } from '@ngrx/store';

import { EditDiagramApiModel } from "../models";

export enum EditDiagramActionTypes {
  EDIT_DIAGRAM = '[DIAGRAM][EDIT] EDIT_DIAGRAM',
  EDIT_DIAGRAM_START = '[DIAGRAM][EDIT] EDIT_DIAGRAM_START',
  EDIT_DIAGRAM_SUCCEED = '[DIAGRAM][EDIT] EDIT_DIAGRAM_SUCCEED',
  EDIT_DIAGRAM_FAILED = '[DIAGRAM][EDIT] EDIT_DIAGRAM_FAILED'
}

export class EditDiagramAction implements Action {
  readonly type = EditDiagramActionTypes.EDIT_DIAGRAM;
  constructor(public payload: EditDiagramApiModel.Response) { }
}
export class EditDiagramActionStart implements Action {
  readonly type = EditDiagramActionTypes.EDIT_DIAGRAM_START;
  constructor(public payload: EditDiagramApiModel.Response) { }
}
export class EditDiagramActionSucceed implements Action {
  readonly type = EditDiagramActionTypes.EDIT_DIAGRAM_SUCCEED;
  constructor(public payload: EditDiagramApiModel.Response) { }
}
export class EditDiagramActionFailed implements Action {
  readonly type = EditDiagramActionTypes.EDIT_DIAGRAM_FAILED;
}


export type EditDiagramActions =
  EditDiagramAction
  | EditDiagramActionStart
  | EditDiagramActionSucceed
  | EditDiagramActionFailed;
