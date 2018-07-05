import { Action } from "@ngrx/store";

export const enum FrontendAuthenticationActionTypes {
	PROGRESSING_STARTED = "[FRONTEND_AUTHENTICATION] PROGRESSING_STARTED",
	PROGRESSING_FINISHED = "[FRONTEND_AUTHENTICATION] PROGRESSING_FINISHED",
	FAILED_HAPPENED = "[FRONTEND_AUTHENTICATION] FAILED_HAPPENED"
}

export class ProgressingStarted implements Action {
	readonly type = FrontendAuthenticationActionTypes.PROGRESSING_STARTED;
}
export class ProgressingFinished implements Action {
	readonly type = FrontendAuthenticationActionTypes.PROGRESSING_FINISHED;
}
export class FailedHappened implements Action {
	readonly type = FrontendAuthenticationActionTypes.FAILED_HAPPENED;
	constructor(public payload: any) {}
}

export type FrontendAuthenticationAction = ProgressingStarted | ProgressingFinished | FailedHappened;
