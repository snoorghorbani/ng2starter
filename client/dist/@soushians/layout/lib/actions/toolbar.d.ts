import { Action } from "@ngrx/store";
export declare enum ToolbarActionTypes {
    COMPORTABLE = "[Layout][TOOLBAR] COMPORTABLE",
    COMPACT = "[Layout][TOOLBAR] COMPACT",
    SUMMARY = "[Layout][TOOLBAR] SUMMARY",
    ENABLE_COMFORTABLE_MODE = "[Layout][TOOLBAR] ENABLE_COMFORTABLE_MODE",
    DISBALE_COMFORTABLE_MODE = "[Layout][TOOLBAR] DISBALE_COMFORTABLE_MODE",
    VISIBLE = "[Layout][TOOLBAR] VISIBLE",
    INVISIBLE = "[Layout][TOOLBAR] INVISIBLE"
}
export declare class ChangeToolbatToComfortableModeAction implements Action {
    readonly type: ToolbarActionTypes;
}
export declare class ChangeToolbatToCompactModeAction implements Action {
    readonly type: ToolbarActionTypes;
}
export declare class ChangeToolbatToSummaryModeAction implements Action {
    readonly type: ToolbarActionTypes;
}
export declare class EnableComfortableModeAction implements Action {
    readonly type: ToolbarActionTypes;
}
export declare class DisableComfortableModeAction implements Action {
    readonly type: ToolbarActionTypes;
}
export declare class VisibleToolbarAction implements Action {
    readonly type: ToolbarActionTypes;
}
export declare class InvisibleToolbarAction implements Action {
    readonly type: ToolbarActionTypes;
}
export declare type ToolbarActions = ChangeToolbatToComfortableModeAction | ChangeToolbatToCompactModeAction | ChangeToolbatToSummaryModeAction | EnableComfortableModeAction | DisableComfortableModeAction | VisibleToolbarAction | InvisibleToolbarAction;
