/*
 * Public API Surface of frontend-authentication
 */

// export * from "./lib/frontend-authentication.config";
export { UserModel } from "./lib/models/user.model";
export { SignInActionTypes, SignoutAction } from "./lib/actions/signin.actions";
// export * from "./lib/reducers";
export * from "./lib/services/signin.service";
export * from "./lib/frontend-authentication.module";
