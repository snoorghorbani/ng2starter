import { responseStatusTypes } from "@soushians/shared";
import { FormSchemaModel } from "../models";
import { FormsListActions } from "./list.actions";
export interface State {
    status: responseStatusTypes;
    data: FormSchemaModel[];
}
export declare const initialState: State;
export declare function reducer(state: State, action: FormsListActions): State;
export declare var getStatus: (state: State) => responseStatusTypes;
