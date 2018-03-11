import { Action } from "@ngrx/store";

import { BpmnModel } from "../models";

export enum UpsertBpmnActionTypes {
	UPSERT = "[BPMN][UPSERT] UPSERT_BPMN_PROFILE",
	UPSERT_START = "[BPMN][UPSERT] UPSERT_BPMN_START",
	UPSERT_SUCCEED = "[BPMN][UPSERT] UPSERT_BPMN_SUCCEED",
	UPSERT_FAILED = "[BPMN][UPSERT] UPSERT_BPMN_FAILED"
}

export class UpsertBpmnAction implements Action {
	readonly type = UpsertBpmnActionTypes.UPSERT;
	constructor(public payload: BpmnModel) {}
}
export class UpsertBpmnStartAction implements Action {
	readonly type = UpsertBpmnActionTypes.UPSERT_START;
	constructor(public payload: BpmnModel) {}
}
export class UpsertBpmnSucceedAction implements Action {
	readonly type = UpsertBpmnActionTypes.UPSERT_SUCCEED;
}
export class UpsertBpmnFailedAction implements Action {
	readonly type = UpsertBpmnActionTypes.UPSERT_FAILED;
}

export type UpsertBpmnActions =
	| UpsertBpmnAction
	| UpsertBpmnStartAction
	| UpsertBpmnSucceedAction
	| UpsertBpmnFailedAction;
