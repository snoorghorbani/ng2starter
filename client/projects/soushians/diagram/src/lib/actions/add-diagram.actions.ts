import { Action } from '@ngrx/store';

import { AddDiagramApiModel } from "../models";

export enum AddDiagramActionTypes {
  ADD_DIAGRAM = '[DIAGRAM][ADD] ADD_DIAGRAM',
  ADD_DIAGRAM_START = '[DIAGRAM][ADD] ADD_DIAGRAM_START',
  ADD_DIAGRAM_SUCCEED = '[DIAGRAM][ADD] ADD_DIAGRAM_SUCCEED',
  DIAGRAM_CONFIG_CHANGED = '[DIAGRAM][ADD] DIAGRAM_CONFIG_CHANGED',
  ADD_DIAGRAM_FAILED = '[DIAGRAM][ADD] ADD_DIAGRAM_FAILED',
  STRUCTURE_DEFINITION_START = '[DIAGRAM][ADD] STRUCTURE_DEFINITION_START',
  HAVE_ENDPOINT = '[DIAGRAM][ADD] HAVE_STRUCTURE',
  DATA_LOADED = '[DIAGRAM][ADD] DATA_LOADED',
  STRUCTURE_DEFINITION_END = '[DIAGRAM][ADD] STRUCTURE_DEFINITION_END',
  COLUMNS_MAPPING_CHANGED = '[DIAGRAM][ADD] COLUMNS_MAPPING_CHANGED',
  DATA_CALCULATED = '[DIAGRAM][ADD] DATA_CALCULATED',
  COLUMN_ADDED = '[DIAGRAM][ADD] COLUMN_ADDED',
  GENERATE_DIAGRAM = '[DIAGRAM][ADD] GENERATE_DIAGRAM'
}

export class AddDiagramAction implements Action {
  readonly type = AddDiagramActionTypes.ADD_DIAGRAM;
  constructor(public payload: AddDiagramApiModel.Response) { }
}
export class AddDiagramActionStart implements Action {
  readonly type = AddDiagramActionTypes.ADD_DIAGRAM_START;
  constructor(public payload: AddDiagramApiModel.Response) { }
}
export class AddDiagramActionSucceed implements Action {
  readonly type = AddDiagramActionTypes.ADD_DIAGRAM_SUCCEED;
  constructor(public payload: AddDiagramApiModel.Response) { }
}
export class AddDiagramActionFailed implements Action {
  readonly type = AddDiagramActionTypes.ADD_DIAGRAM_FAILED;
}
export class DiagramConfigChangedAction implements Action {
  readonly type = AddDiagramActionTypes.DIAGRAM_CONFIG_CHANGED;
  constructor(public payload: any) { }
}
export class HaveEndpointAction implements Action {
  readonly type = AddDiagramActionTypes.HAVE_ENDPOINT;
  constructor(public payload: any) { }
}
export class DataLoadedAction implements Action {
  readonly type = AddDiagramActionTypes.DATA_LOADED;
  constructor(public payload: any) { }
}
export class StructureDefinitionStartAction implements Action {
  readonly type = AddDiagramActionTypes.STRUCTURE_DEFINITION_START;
  constructor(public payload: any) { }
}
export class StructureDefinitionFinishedAction implements Action {
  readonly type = AddDiagramActionTypes.STRUCTURE_DEFINITION_END;
  constructor(public payload: any) { }
}
export class ColumnsMappingChangedAction implements Action {
  readonly type = AddDiagramActionTypes.COLUMNS_MAPPING_CHANGED;
  constructor(public payload: any) { }
}
export class DataCalculatedAction implements Action {
  readonly type = AddDiagramActionTypes.DATA_CALCULATED;
  constructor(public payload: any) { }
}
export class GenerateDiagramAction implements Action {
  readonly type = AddDiagramActionTypes.GENERATE_DIAGRAM;
  constructor(public payload: any) { }
}

export class ColumnAdded implements Action {
  readonly type = AddDiagramActionTypes.COLUMN_ADDED;
}


export type AddDiagramActions =
  AddDiagramAction
  | AddDiagramActionStart
  | AddDiagramActionSucceed
  | AddDiagramActionFailed
  | HaveEndpointAction
  | DataLoadedAction
  | StructureDefinitionStartAction
  | StructureDefinitionFinishedAction
  | ColumnsMappingChangedAction
  | DataCalculatedAction
  | GenerateDiagramAction
  | DiagramConfigChangedAction;
