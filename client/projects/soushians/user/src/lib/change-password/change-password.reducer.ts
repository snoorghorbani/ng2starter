import { responseStatusTypes } from "@soushians/shared";
import { ChangePasswordAction, ChangePasswordActionTypes } from "./change-password.actions";

export interface State {
	status: responseStatusTypes;
}
export const initialState: State = {
	status: "pristine"
};
export function reducer(state = initialState, action: ChangePasswordAction): State {
	switch (action.type) {
		case ChangePasswordActionTypes.CHANGE_PASSWORD: {
			return {
				status: "dirty"
			};
		}
		case ChangePasswordActionTypes.PASSWORD_CHANGED_START: {
			return {
				status: "pending"
			};
		}
		case ChangePasswordActionTypes.PASSWORD_CHANGED_SUCCEED: {
			return {
				status: "succeed"
			};
		}
		case ChangePasswordActionTypes.PASSWORD_CHANGED_FAILED: {
			return {
				status: "failed"
			};
		}

		default: {
			return initialState;
		}
	}
}

export var getStatus = (state: State) => state.status;
