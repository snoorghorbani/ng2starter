import { Action } from '@ngrx/store';


export const enum EventActionTypes {
    FAILED_HAPPENED = '[APP][EVENT] FAILED_HAPPENED'
}

export class FailedHappened implements Action {
    readonly type = EventActionTypes.FAILED_HAPPENED;
    constructor(public payload) { 
    }
}

export type EventAction =
    FailedHappened;