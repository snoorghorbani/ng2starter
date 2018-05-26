import { ParentGuardAction, ParentGuardActionTypes } from '../actions';

export interface State {
        route: string;
        result: boolean;
};
export const initialState: State = {
        route: '',
        result: false
};

export function ParentGuardReducer(state = initialState, action: ParentGuardAction): State {
        switch (action.type) {
                default: {
                        return state;
                }
        }
}

export var getParentRoutingGuard = (state: State) => state;