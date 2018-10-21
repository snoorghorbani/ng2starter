import { Action } from "@ngrx/store";
import { FormSchemaModel } from "../models";
export declare enum FormsListActionTypes {
    FORMS_LIST = "[FORM][LIST] FORMS_LIST",
    FORMS_LIST_START = "[FORM][LIST] FORMS_LIST_START",
    FORMS_LIST_SUCCEED = "[FORM][LIST] FORMS_LIST_SUCCEED",
    FORMS_LIST_FAILED = "[FORM][LIST] FORMS_LIST_FAILED",
    ADD_FORM_SCHEMA = "[FORM][LIST] ADD_FORM_SCHEMA",
    FORM_SCHEMA_UPDATE = "[FORM][LIST] FORM_SCHEMA_UPDATE",
    GET_FORM_SCHEMA = "[FORM][LIST] GET_FORM_SCHEMA",
    FORM_SCHEMA_FETCHED = "[FORM][LIST] FORM_SCHEMA_FETCHED",
}
export declare class FormsListAction implements Action {
    readonly type: FormsListActionTypes;
}
export declare class FormsListStartAction implements Action {
    readonly type: FormsListActionTypes;
}
export declare class FormsListSucceedAction implements Action {
    payload: FormSchemaModel[];
    readonly type: FormsListActionTypes;
    constructor(payload: FormSchemaModel[]);
}
export declare class FormsListFailedAction implements Action {
    readonly type: FormsListActionTypes;
}
export declare class UpdateFormSchemaAction implements Action {
    payload: FormSchemaModel;
    readonly type: FormsListActionTypes;
    constructor(payload: FormSchemaModel);
}
export declare class AddFormSchemaAction implements Action {
    payload: FormSchemaModel;
    readonly type: FormsListActionTypes;
    constructor(payload: FormSchemaModel);
}
export declare class GetFormSchemaAction implements Action {
    payload: string;
    readonly type: FormsListActionTypes;
    constructor(payload: string);
}
export declare class FormSchemaFechedAction implements Action {
    payload: FormSchemaModel;
    readonly type: FormsListActionTypes;
    constructor(payload: FormSchemaModel);
}
export declare type FormsListActions = FormsListAction | FormsListStartAction | FormsListSucceedAction | FormsListFailedAction | UpdateFormSchemaAction | AddFormSchemaAction | GetFormSchemaAction | FormSchemaFechedAction;
