import { Action } from '@ngrx/store';

export const enum AuthenticationActionTypes {
	PROGRESSING_STARTED = '[AUTHENTICATION] PROGRESSING_STARTED',
	PROGRESSING_FINISHED = '[AUTHENTICATION] PROGRESSING_FINISHED',
	FAILED_HAPPENED = '[AUTHENTICATION] FAILED_HAPPENED'
}

export class ProgressingStarted implements Action {
	readonly type = AuthenticationActionTypes.PROGRESSING_STARTED;
}
export class ProgressingFinished implements Action {
	readonly type = AuthenticationActionTypes.PROGRESSING_FINISHED;
}
export class FailedHappened implements Action {
	readonly type = AuthenticationActionTypes.FAILED_HAPPENED;
	constructor(public payload: any) {}
}

export type AuthenticationAction = ProgressingStarted | ProgressingFinished | FailedHappened;
