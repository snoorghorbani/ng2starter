import { responseStatusTypes } from '@soushians/shared';
import { EditProfileAction, EditProfileActionTypes } from './edit-profile.actions';

export interface State {
	status: responseStatusTypes;
}
export const initialState: State = {
	status: 'pristine'
};
export function reducer(state = initialState, action: EditProfileAction): State {
	switch (action.type) {
		case EditProfileActionTypes.EDIT_PROFILE: {
			return {
				status: 'dirty'
			};
		}
		case EditProfileActionTypes.EDIT_PROFILE_START: {
			return {
				status: 'pending'
			};
		}
		case EditProfileActionTypes.EDIT_PROFILE_SUCCEED: {
			return {
				status: 'succeed'
			};
		}
		case EditProfileActionTypes.EDIT_PROFILE_FAILED: {
			return {
				status: 'failed'
			};
		}

		default: {
			return state;
		}
	}
}

export var getStatus = (state: State) => state.status;
