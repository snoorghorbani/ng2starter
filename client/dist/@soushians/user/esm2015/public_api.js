/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
* Public API Surface of user
*/
export { MODULE_DEFAULT_CONFIG, MODULE_CONFIG_TOKEN } from "./lib/user.config";
export {
	UserModel,
	ChangePasswordModel,
	ResetPasswordRequestModel,
	ResetPasswordModel,
	EditProfile_ApiModel,
	ProfileViewModel,
	FailedLoginReportModel,
	FailedLoginModel
} from "./lib/models";
// actions
export { NgsUserModule, RootNgsUserModule } from "./lib/user.module";
export { routes, NgsUserRoutingModule } from "./lib/user.routing-module";
export { NgsUserModuleOutlets } from "./lib/models/user-outlets.enum";
export { UserService } from "./lib/services/user.service";
export { UserFacadeService } from "./lib/services/user.facade-service";
export { getAccountInfo } from "./lib/user.reducers";
