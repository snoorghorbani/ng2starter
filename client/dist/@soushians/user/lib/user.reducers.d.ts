import { MemoizedSelector } from "@ngrx/store";
import * as userReducer from "./dashboard/account.reducer";
import * as resetPasswordRequestReducer from "./reset-password/reset-password-request.reducer";
import * as changePassword from "./change-password/change-password.reducer";
import * as editProfileReducer from "./profile-edit/edit-profile.reducer";
import * as searchReducer from "./search-account/search.reducer";
import { UserModel } from "./models";
export interface UserState {
    user: userReducer.State;
    resetPasswordRequest: resetPasswordRequestReducer.State;
    searchView: searchReducer.State;
    changePassword: changePassword.State;
    editProfile: editProfileReducer.State;
}
export declare const UserReducers: {
    user: typeof userReducer.userReducer;
    resetPasswordRequest: typeof resetPasswordRequestReducer.reducer;
    changePassword: typeof changePassword.reducer;
    searchView: typeof searchReducer.reducer;
    editProfile: typeof editProfileReducer.reducer;
};
export interface AppState {
    "user": UserState;
}
export declare const selectFeatureState: MemoizedSelector<object, UserState>;
export declare const getUserInforamtionStatus: MemoizedSelector<object, boolean>;
export declare const isSignedIn: MemoizedSelector<object, boolean>;
export declare const selectResetPasswordRequestState: MemoizedSelector<object, resetPasswordRequestReducer.State>;
export declare const getNumberOfRequeseted: MemoizedSelector<object, number>;
export declare const getResetPasswordRequestStatus: MemoizedSelector<object, boolean>;
export declare const selectUserInformaionState: MemoizedSelector<object, userReducer.State>;
export declare const getAccountInfo: MemoizedSelector<object, UserModel>;
export declare const selectSearchState: MemoizedSelector<object, searchReducer.State>;
export declare const getSearchStatus: MemoizedSelector<object, import("../../../../../../../../Projects/ng2starter/client/node_modules/@soushians/shared/lib/enums/response-status-type.enum").responseStatusTypes>;
