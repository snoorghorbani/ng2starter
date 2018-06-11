/*
 * Public API Surface of authentication
 */

// export * from "./lib/authentication.config";
export { UserModel } from "./lib/models";
export { SignInActionTypes, DoSignoutAction, AuthenticationActionTypes } from "./lib/actions";
// export * from "./lib/reducers";
export { SigninService } from "./lib/services/signin.service";
export { NgsAuthenticationModule } from "./lib/authentication.module";
