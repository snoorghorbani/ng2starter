import { Action } from '@ngrx/store';
export declare const enum AuthenticationActionTypes {
    PROGRESSING_STARTED = "[AUTHENTICATION] PROGRESSING_STARTED",
    PROGRESSING_FINISHED = "[AUTHENTICATION] PROGRESSING_FINISHED",
    FAILED_HAPPENED = "[AUTHENTICATION] FAILED_HAPPENED",
}
export declare class ProgressingStarted implements Action {
    readonly type: AuthenticationActionTypes;
}
export declare class ProgressingFinished implements Action {
    readonly type: AuthenticationActionTypes;
}
export declare class FailedHappened implements Action {
    payload: any;
    readonly type: AuthenticationActionTypes;
    constructor(payload: any);
}
export declare type AuthenticationAction = ProgressingStarted | ProgressingFinished | FailedHappened;
