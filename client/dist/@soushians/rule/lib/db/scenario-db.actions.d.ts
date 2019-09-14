import { Action } from "@ngrx/store";
import { GwtScenarioModel } from "../models/gwt-scenario.model";
export declare enum ScenariosListActionTypes {
    SCENARIOS_LIST = "[GWT][SCENARIO][DB][LIST] SCENARIOS_LIST",
    SCENARIOS_LIST_START = "[SCENARIO][DB] SCENARIOS_LIST_START",
    SCENARIOS_LIST_SUCCEED = "[SCENARIO][DB] SCENARIOS_LIST_SUCCEED",
    SCENARIOS_LIST_FAILED = "[SCENARIO][DB] SCENARIOS_LIST_FAILED",
    UPSERT = "[GWT][SCENARIO][DB][UPSERT] SCENARIO_UPSERT",
    GET_SCENARIO = "[SCENARIO][DB] GET_SCENARIO",
    SCENARIO_FETCHED = "[SCENARIO][DB] SCENARIO_FETCHED",
    UPDATE_DB = "[GWT][SCENARIO][DB] UPDATE_DB"
}
export declare class ScenariosListAction implements Action {
    readonly type = ScenariosListActionTypes.SCENARIOS_LIST;
}
export declare class ScenariosListStartAction implements Action {
    readonly type = ScenariosListActionTypes.SCENARIOS_LIST_START;
}
export declare class ScenariosListSucceedAction implements Action {
    payload: GwtScenarioModel[];
    readonly type = ScenariosListActionTypes.SCENARIOS_LIST_SUCCEED;
    constructor(payload: GwtScenarioModel[]);
}
export declare class ScenariosListFailedAction implements Action {
    readonly type = ScenariosListActionTypes.SCENARIOS_LIST_FAILED;
}
export declare class UpsertScenarioAction implements Action {
    payload: GwtScenarioModel;
    readonly type = ScenariosListActionTypes.UPSERT;
    constructor(payload: GwtScenarioModel);
}
export declare class GetScenarioAction implements Action {
    payload: string;
    readonly type = ScenariosListActionTypes.GET_SCENARIO;
    constructor(payload: string);
}
export declare class ScenarioFechedAction implements Action {
    payload: GwtScenarioModel;
    readonly type = ScenariosListActionTypes.SCENARIO_FETCHED;
    constructor(payload: GwtScenarioModel);
}
export declare class UpdateDbAction implements Action {
    payload: GwtScenarioModel[];
    readonly type = ScenariosListActionTypes.UPDATE_DB;
    constructor(payload: GwtScenarioModel[]);
}
export declare type ScenariosListActions = ScenariosListAction | ScenariosListStartAction | ScenariosListSucceedAction | ScenariosListFailedAction | UpsertScenarioAction | GetScenarioAction | ScenarioFechedAction | UpdateDbAction;
