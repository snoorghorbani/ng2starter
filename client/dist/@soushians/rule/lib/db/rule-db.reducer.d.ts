import { responseStatusTypes } from "@soushians/shared";
import { RuleModel } from "../models";
import { RulesListActions } from "./rule-db.actions";
export interface State {
    status: responseStatusTypes;
    data: RuleModel[];
}
export declare const initialState: State;
export declare function reducer(state: State, action: RulesListActions): State;
export declare var getStatus: (state: State) => responseStatusTypes;
