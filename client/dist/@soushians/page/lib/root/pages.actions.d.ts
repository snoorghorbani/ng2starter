import { Action } from "@ngrx/store";
import { PageModel } from "../models/page.model";
export declare enum PagesActionTypes {
    UPSERT = "[PAGE][DB] UPSERT",
    DELETE = "[PAGE][DB] DELETE",
}
export declare class UpsertPageAction implements Action {
    payload: PageModel[];
    readonly type: PagesActionTypes;
    constructor(payload: PageModel[]);
}
export declare class DeletePageAction implements Action {
    payload: PageModel;
    readonly type: PagesActionTypes;
    constructor(payload: PageModel);
}
export declare type PagesActions = UpsertPageAction | DeletePageAction;
