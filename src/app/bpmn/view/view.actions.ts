import { Action } from "@ngrx/store";

import { ProcessModel } from "../models";

export enum ViewBpmnActionTypes {
	VIEW = "[BPMN][VIEW] VIEW_BPMN_PROFILE",
	VIEW_START = "[BPMN][VIEW] VIEW_BPMN_START",
	VIEW_SUCCEED = "[BPMN][VIEW] VIEW_BPMN_SUCCEED",
	VIEW_FAILED = "[BPMN][VIEW] VIEW_BPMN_FAILED"
}

export class ViewBpmnAction implements Action {
	readonly type = ViewBpmnActionTypes.VIEW;
	constructor(public payload: ProcessModel) {}
}
export class ViewBpmnStartAction implements Action {
	readonly type = ViewBpmnActionTypes.VIEW_START;
	constructor(public payload: ProcessModel) {}
}
export class ViewBpmnSucceedAction implements Action {
	readonly type = ViewBpmnActionTypes.VIEW_SUCCEED;
}
export class ViewBpmnFailedAction implements Action {
	readonly type = ViewBpmnActionTypes.VIEW_FAILED;
}

export type ViewBpmnActions = ViewBpmnAction | ViewBpmnStartAction | ViewBpmnSucceedAction | ViewBpmnFailedAction;
