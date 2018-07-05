import { SigninAction, SignInActionTypes } from "../actions/signin.actions";
import { UserModel } from "../models/user.model";

export interface State {
	loggedIn: boolean;
	user: UserModel;
}

export const initialState: State = {
	loggedIn: false,
	user: new UserModel({ Id: 1 })
};

export function UserReducer(state = initialState, action: SigninAction): State {
	switch (action.type) {
		case SignInActionTypes.SIGNIN_SUCCEED: {
			return {
				...state,
				loggedIn: true,
				user: action.payload
			};
		}

		case SignInActionTypes.SIGNOUT: {
			debugger;
			return {
				...state,
				loggedIn: false,
				user: new UserModel()
			};
		}

		default: {
			return state;
		}
	}
}

//#region  selectors
export const getLoggedIn = (state: State) => state.loggedIn;
export const getUser = (state: State) => state.user;
//#endregion
