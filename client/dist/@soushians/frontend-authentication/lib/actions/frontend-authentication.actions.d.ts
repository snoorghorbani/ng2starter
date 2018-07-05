import { Action } from "@ngrx/store";
export declare const enum FrontendAuthenticationActionTypes {
    PROGRESSING_STARTED = "[FRONTEND_AUTHENTICATION] PROGRESSING_STARTED",
    PROGRESSING_FINISHED = "[FRONTEND_AUTHENTICATION] PROGRESSING_FINISHED",
    FAILED_HAPPENED = "[FRONTEND_AUTHENTICATION] FAILED_HAPPENED",
}
export declare class ProgressingStarted implements Action {
    readonly type: FrontendAuthenticationActionTypes;
}
export declare class ProgressingFinished implements Action {
    readonly type: FrontendAuthenticationActionTypes;
}
export declare class FailedHappened implements Action {
    payload: any;
    readonly type: FrontendAuthenticationActionTypes;
    constructor(payload: any);
}
export declare type FrontendAuthenticationAction = ProgressingStarted | ProgressingFinished | FailedHappened;
