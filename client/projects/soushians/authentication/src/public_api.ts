/*
* Public API Surface of authentication
*/

export { AuthenticationModuleConfig } from "./lib/authentication.config";
export { UserModel } from "./lib/models/user.model";
export { SignInActionTypes, DoSignoutAction, SigninRequiredAction } from "./lib/actions/signin.actions";
export { AuthenticationActionTypes } from "./lib/actions/authentication.actions";
// export * from "./lib/reducers";
export { SigninService } from "./lib/services/signin.service";
export { SigninContainerComponent } from "./lib/smart-components/signin-container/signin-container.component";
export { NgsAuthenticationModule } from "./lib/authentication.module";
export { getUser } from "./lib/reducers/index";
