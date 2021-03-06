import { Action } from "@ngrx/store";
import { UpsertSourceApiModel } from "../models";
export declare enum SourceActionTypes {
    SOURCE_SUBMIT = "[SOURCE] source submit",
    SOURCE_SUBMIT_SUCCEED = "[SOURCE] source submit succeed",
    SOURCE_SUBMIT_FAILED = "[SOURCE] source submit failed"
}
export declare class SourceSubmit implements Action {
    payload: UpsertSourceApiModel.Request;
    readonly type = SourceActionTypes.SOURCE_SUBMIT;
    constructor(payload: UpsertSourceApiModel.Request);
}
export declare class SourceSubmitSucceed implements Action {
    readonly type = SourceActionTypes.SOURCE_SUBMIT_SUCCEED;
}
export declare class SourceSubmitFailed implements Action {
    readonly type = SourceActionTypes.SOURCE_SUBMIT_FAILED;
}
export declare type Actions = SourceSubmit | SourceSubmitSucceed | SourceSubmitFailed;
