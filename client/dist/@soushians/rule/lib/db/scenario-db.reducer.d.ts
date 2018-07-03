import { responseStatusTypes } from "@soushians/shared";
import { GwtScenarioModel } from "../models/gwt-scenario.model";
import { ScenariosListActions } from "./scenario-db.actions";
export interface State {
    status: responseStatusTypes;
    data: GwtScenarioModel[];
}
export declare const initialState: State;
export declare function reducer(state: State, action: ScenariosListActions): State;
export declare var getStatus: (state: State) => responseStatusTypes;
