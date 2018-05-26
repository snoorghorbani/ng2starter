import { Action } from "@ngrx/store";

export enum ToolbarActionTypes {
	COMPORTABLE = "[Layout][TOOLBAR] COMPORTABLE",
	COMPACT = "[Layout][TOOLBAR] COMPACT",
	SUMMARY = "[Layout][TOOLBAR] SUMMARY",
	ENABLE_COMFORTABLE_MODE = "[Layout][TOOLBAR] ENABLE_COMFORTABLE_MODE",
	DISBALE_COMFORTABLE_MODE = "[Layout][TOOLBAR] DISBALE_COMFORTABLE_MODE"
}

export class ChangeToolbatToComfortableModeAction implements Action {
	readonly type = ToolbarActionTypes.COMPORTABLE;
}
export class ChangeToolbatToCompactModeAction implements Action {
	readonly type = ToolbarActionTypes.COMPACT;
}
export class ChangeToolbatToSummaryModeAction implements Action {
	readonly type = ToolbarActionTypes.SUMMARY;
}
export class EnableComfortableModeAction implements Action {
	readonly type = ToolbarActionTypes.ENABLE_COMFORTABLE_MODE;
}
export class DisableComfortableModeAction implements Action {
	readonly type = ToolbarActionTypes.DISBALE_COMFORTABLE_MODE;
}
export type ToolbarActions =
	| ChangeToolbatToComfortableModeAction
	| ChangeToolbatToCompactModeAction
	| ChangeToolbatToSummaryModeAction
	| EnableComfortableModeAction
	| DisableComfortableModeAction;
