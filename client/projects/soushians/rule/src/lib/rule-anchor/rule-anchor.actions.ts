import { Action } from "@ngrx/store";

export enum RuleAnchorsActionTypes {
	SHOW_ANCHORS = "[RULE][ANCHORS] SHOW_ANCHORS",
	HIDE_ANCHORS = "[RULE][ANCHORS] HIDE_ANCHORS"
}

export class ShowAnchorsAction implements Action {
	readonly type = RuleAnchorsActionTypes.SHOW_ANCHORS;
}

export class HideAnchorsAction implements Action {
	readonly type = RuleAnchorsActionTypes.HIDE_ANCHORS;
}

export type RuleAnchorsAction = ShowAnchorsAction | HideAnchorsAction;
