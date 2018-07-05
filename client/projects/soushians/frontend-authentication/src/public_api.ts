/*
* Public API Surface of frontend-authentication
*/

// export * from "./lib/frontend-authentication.config";
export { UserModel } from "./lib/models";
export {
	SignInActionTypes,
	DoSignoutAction,
	FrontendAuthenticationActionTypes,
	SigninRequiredAction
} from "./lib/actions";

export { getFrontendAuthenticationState } from "./lib/reducers";
export { NgsFrontendAuthenticationModule } from "./lib/frontend-authentication.module";
