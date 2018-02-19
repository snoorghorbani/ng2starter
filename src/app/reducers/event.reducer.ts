import { responseStatusTypes } from '@soushians/shared';

import { ProgressAction, ProgressActionTypes } from '../actions';

export interface State {
    status: boolean;
}

export const initialState: State = {
    status: false
};


export function Reducer(state = initialState, action: ProgressAction): State {
    switch (action.type) {
        case ProgressActionTypes.PROGRESS_STARTED: {
            return {
                ...state,
                status: true
            };
        }

        case ProgressActionTypes.PROGRESS_FINISHED: {
            return {
                ...state,
                status: false
            };
        }

        default: {
            return state;
        }
    }
}

//#region  selectors
export const getProgressStatus = (state: State) => state.status;
//#endregion