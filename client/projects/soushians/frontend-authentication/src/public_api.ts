/*
* Public API Surface of frontend-authentication
*/

// export * from "./lib/frontend-authentication.config";
export { UserModel } from "./lib/models/user.model";
export { SignInActionTypes, DoSignoutAction, SigninRequiredAction } from "./lib/actions/signin.actions";

export { getFrontendAuthenticationState, getFrontendUser } from "./lib/reducers";
export { NgsFrontendAuthenticationModule } from "./lib/frontend-authentication.module";
