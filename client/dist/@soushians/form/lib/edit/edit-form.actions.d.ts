import { Action } from "@ngrx/store";
import { FormSchemaModel } from "../models";
export declare enum EditFormActionTypes {
    EDIT_FORM = "[FORM][EDIT] EDIT_FORM",
    EDIT_FORM_START = "[FORM][EDIT] EDIT_FORM_START",
    EDIT_FORM_SUCCEED = "[FORM][EDIT] EDIT_FORM_SUCCEED",
    EDIT_FORM_FAILED = "[FORM][EDIT] EDIT_FORM_FAILED"
}
export declare class EditFormAction implements Action {
    payload: FormSchemaModel;
    readonly type = EditFormActionTypes.EDIT_FORM;
    constructor(payload: FormSchemaModel);
}
export declare class EditFormStartAction implements Action {
    payload: FormSchemaModel;
    readonly type = EditFormActionTypes.EDIT_FORM_START;
    constructor(payload: FormSchemaModel);
}
export declare class EditFormSucceedAction implements Action {
    payload: FormSchemaModel;
    readonly type = EditFormActionTypes.EDIT_FORM_SUCCEED;
    constructor(payload: FormSchemaModel);
}
export declare class EditFormFailedAction implements Action {
    readonly type = EditFormActionTypes.EDIT_FORM_FAILED;
}
export declare type EditFormActions = EditFormAction | EditFormStartAction | EditFormSucceedAction | EditFormFailedAction;
