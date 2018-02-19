import { Action } from '@ngrx/store';


export const enum ProgressActionTypes {
    PROGRESS_STARTED = '[APP][PROGRESS] PROGRESS_STARTED',
    PROGRESS_FINISHED = '[APP][PROGRESS] PROGRESS_FINISHED',
}

export class ProgressStarted implements Action {
    readonly type = ProgressActionTypes.PROGRESS_STARTED;
}
export class ProgressFinished implements Action {
    readonly type = ProgressActionTypes.PROGRESS_FINISHED;
}

export type ProgressAction =
    ProgressStarted
    | ProgressFinished;