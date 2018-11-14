import { Action } from "@ngrx/store";
export declare enum RuleAnchorsActionTypes {
    SHOW_ANCHORS = "[RULE][ANCHORS] SHOW_ANCHORS",
    HIDE_ANCHORS = "[RULE][ANCHORS] HIDE_ANCHORS"
}
export declare class ShowAnchorsAction implements Action {
    readonly type: RuleAnchorsActionTypes;
}
export declare class HideAnchorsAction implements Action {
    readonly type: RuleAnchorsActionTypes;
}
export declare type RuleAnchorsAction = ShowAnchorsAction | HideAnchorsAction;
