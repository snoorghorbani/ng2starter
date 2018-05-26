import { Action } from "@ngrx/store";
import { FormSchemaModel } from "../models";
export declare enum AddFormActionTypes {
    ADD_FORM = "[FORM][ADD] ADD_FORM_PROFILE",
    ADD_FORM_START = "[FORM][ADD] ADD_FORM_START",
    ADD_FORM_SUCCEED = "[FORM][ADD] ADD_FORM_SUCCEED",
    ADD_FORM_FAILED = "[FORM][ADD] ADD_FORM_FAILED",
}
export declare class AddFormAction implements Action {
    payload: FormSchemaModel;
    readonly type: AddFormActionTypes;
    constructor(payload: FormSchemaModel);
}
export declare class AddFormStartAction implements Action {
    payload: FormSchemaModel;
    readonly type: AddFormActionTypes;
    constructor(payload: FormSchemaModel);
}
export declare class AddFormSucceedAction implements Action {
    readonly type: AddFormActionTypes;
}
export declare class AddFormFailedAction implements Action {
    readonly type: AddFormActionTypes;
}
export declare type AddFormActions = AddFormAction | AddFormStartAction | AddFormSucceedAction | AddFormFailedAction;
