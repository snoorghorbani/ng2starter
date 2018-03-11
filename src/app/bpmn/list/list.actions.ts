import { Action } from "@ngrx/store";

import { BpmnModel } from "../models";

export enum BpmnsListActionTypes {
	BPMN_LIST = "[BPMN][LIST]		BPMN_LIST",
	BPMN_LIST_START = "[BPMN][LIST]		BPMN_LIST_START",
	BPMN_LIST_SUCCEED = "[BPMN][LIST]		BPMN_LIST_SUCCEED",
	BPMN_LIST_FAILED = "[BPMN][LIST]		BPMN_LIST_FAILED",
	ADD_BPMN_SCHEMA = "[BPMN][LIST]		ADD_BPMN_SCHEMA",
	BPMN_SCHEMA_UPDATE = "[BPMN][LIST]		BPMN_SCHEMA_UPDATE",
	GET_BPMN_SCHEMA = "[BPMN][LIST]		GET_BPMN_SCHEMA",
	BPMN_SCHEMA_FETCHED = "[BPMN][LIST]		BPMN_SCHEMA_FETCHED"
}

export class BpmnsListAction implements Action {
	readonly type = BpmnsListActionTypes.BPMN_LIST;
}
export class BpmnsListStartAction implements Action {
	readonly type = BpmnsListActionTypes.BPMN_LIST_START;
}
export class BpmnsListSucceedAction implements Action {
	readonly type = BpmnsListActionTypes.BPMN_LIST_SUCCEED;
	constructor(public payload: BpmnModel[]) {}
}
export class BpmnsListFailedAction implements Action {
	readonly type = BpmnsListActionTypes.BPMN_LIST_FAILED;
}
export class UpdateBpmnSchemaAction implements Action {
	readonly type = BpmnsListActionTypes.BPMN_SCHEMA_UPDATE;
	constructor(public payload: BpmnModel) {}
}
export class AddBpmnSchemaAction implements Action {
	readonly type = BpmnsListActionTypes.ADD_BPMN_SCHEMA;
	constructor(public payload: BpmnModel) {}
}
export class GetBpmnSchemaAction implements Action {
	readonly type = BpmnsListActionTypes.GET_BPMN_SCHEMA;
	constructor(public payload: string) {}
}
export class BpmnSchemaFechedAction implements Action {
	readonly type = BpmnsListActionTypes.BPMN_SCHEMA_FETCHED;
	constructor(public payload: BpmnModel) {}
}

export type BpmnsListActions =
	| BpmnsListAction
	| BpmnsListStartAction
	| BpmnsListSucceedAction
	| BpmnsListFailedAction
	| UpdateBpmnSchemaAction
	| AddBpmnSchemaAction
	| GetBpmnSchemaAction
	| BpmnSchemaFechedAction;
