import { responseStatusTypes } from '@soushians/shared';
import { EditProfileAction } from './edit-profile.actions';
export interface State {
    status: responseStatusTypes;
}
export declare const initialState: State;
export declare function reducer(state: State, action: EditProfileAction): State;
export declare var getStatus: (state: State) => responseStatusTypes;
