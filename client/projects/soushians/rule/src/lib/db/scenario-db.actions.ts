import { Action } from "@ngrx/store";

import { GwtScenarioModel } from "../models/gwt-scenario.model";

export enum ScenariosListActionTypes {
	SCENARIOS_LIST = "[GWT][SCENARIO][DB][LIST] SCENARIOS_LIST",
	SCENARIOS_LIST_START = "[SCENARIO][DB] SCENARIOS_LIST_START",
	SCENARIOS_LIST_SUCCEED = "[SCENARIO][DB] SCENARIOS_LIST_SUCCEED",
	SCENARIOS_LIST_FAILED = "[SCENARIO][DB] SCENARIOS_LIST_FAILED",
	UPSERT = "[GWT][SCENARIO][DB][UPSERT] SCENARIO_UPSERT",
	GET_SCENARIO = "[SCENARIO][DB] GET_SCENARIO",
	SCENARIO_FETCHED = "[SCENARIO][DB] SCENARIO_FETCHED",
	/// new vision
	UPDATE_DB = "[GWT][SCENARIO][DB] UPDATE_DB"
}

export class ScenariosListAction implements Action {
	readonly type = ScenariosListActionTypes.SCENARIOS_LIST;
}
export class ScenariosListStartAction implements Action {
	readonly type = ScenariosListActionTypes.SCENARIOS_LIST_START;
}
export class ScenariosListSucceedAction implements Action {
	readonly type = ScenariosListActionTypes.SCENARIOS_LIST_SUCCEED;
	constructor(public payload: GwtScenarioModel[]) {}
}
export class ScenariosListFailedAction implements Action {
	readonly type = ScenariosListActionTypes.SCENARIOS_LIST_FAILED;
}
export class UpsertScenarioAction implements Action {
	readonly type = ScenariosListActionTypes.UPSERT;
	constructor(public payload: GwtScenarioModel) {}
}
export class GetScenarioAction implements Action {
	readonly type = ScenariosListActionTypes.GET_SCENARIO;
	constructor(public payload: string) {}
}
export class ScenarioFechedAction implements Action {
	readonly type = ScenariosListActionTypes.SCENARIO_FETCHED;
	constructor(public payload: GwtScenarioModel) {}
}
export class UpdateDbAction implements Action {
	readonly type = ScenariosListActionTypes.UPDATE_DB;
	constructor(public payload: GwtScenarioModel[]) {}
}

export type ScenariosListActions =
	| ScenariosListAction
	| ScenariosListStartAction
	| ScenariosListSucceedAction
	| ScenariosListFailedAction
	| UpsertScenarioAction
	| GetScenarioAction
	| ScenarioFechedAction
	| UpdateDbAction;
