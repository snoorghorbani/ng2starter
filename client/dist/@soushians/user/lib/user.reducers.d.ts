import { MemoizedSelector } from "@ngrx/store";
import * as userReducer from "./dashboard/account.reducer";
import * as resetPasswordRequestReducer from "./reset-password/reset-password-request.reducer";
import * as changePassword from "./change-password/change-password.reducer";
import * as editProfileReducer from "./profile-edit/edit-profile.reducer";
import * as searchReducer from "./search-account/search.reducer";
import { UserModel } from "./models/user.model";
import { responseStatusTypes } from "@soushians/shared";
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
export declare const selectFeatureState: MemoizedSelector<object, UserState, import("@ngrx/store").DefaultProjectorFn<UserState>>;
export declare const getUserInforamtionStatus: MemoizedSelector<object, boolean, import("@ngrx/store").DefaultProjectorFn<boolean>>;
export declare const isSignedIn: MemoizedSelector<object, boolean, import("@ngrx/store").DefaultProjectorFn<boolean>>;
export declare const selectResetPasswordRequestState: MemoizedSelector<object, resetPasswordRequestReducer.State, import("@ngrx/store").DefaultProjectorFn<resetPasswordRequestReducer.State>>;
export declare const getNumberOfRequeseted: MemoizedSelector<object, number, import("@ngrx/store").DefaultProjectorFn<number>>;
export declare const getResetPasswordRequestStatus: MemoizedSelector<object, boolean, import("@ngrx/store").DefaultProjectorFn<boolean>>;
export declare const selectUserInformaionState: MemoizedSelector<object, userReducer.State, import("@ngrx/store").DefaultProjectorFn<userReducer.State>>;
export declare const getAccountInfo: MemoizedSelector<object, UserModel, import("@ngrx/store").DefaultProjectorFn<UserModel>>;
export declare const selectSearchState: MemoizedSelector<object, searchReducer.State, import("@ngrx/store").DefaultProjectorFn<searchReducer.State>>;
export declare const getSearchStatus: MemoizedSelector<object, responseStatusTypes, import("@ngrx/store").DefaultProjectorFn<responseStatusTypes>>;
