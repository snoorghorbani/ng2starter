import { Action } from "@ngrx/store";
import { SourceModel, UpsertSourceApiModel } from "../models";

export enum SourceActionTypes {
	SOURCE_SUBMIT = "[SOURCE] source submit",
	SOURCE_SUBMIT_SUCCEED = "[SOURCE] source submit succeed",
	SOURCE_SUBMIT_FAILED = "[SOURCE] source submit failed"
}

export class SourceSubmit implements Action {
	readonly type = SourceActionTypes.SOURCE_SUBMIT;
	constructor(public payload: UpsertSourceApiModel.Request) {}
}
export class SourceSubmitSucceed implements Action {
	readonly type = SourceActionTypes.SOURCE_SUBMIT_SUCCEED;
}
export class SourceSubmitFailed implements Action {
	readonly type = SourceActionTypes.SOURCE_SUBMIT_FAILED;
}
export type Actions = SourceSubmit | SourceSubmitSucceed | SourceSubmitFailed;
