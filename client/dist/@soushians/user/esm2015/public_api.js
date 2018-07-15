/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
* Public API Surface of user
*/
export { MODULE_DEFAULT_CONFIG, MODULE_CONFIG_TOKEN } from "./lib/user.config";
export { UserModel, ChangePasswordModel, ResetPasswordRequestModel, ResetPasswordModel, EditProfile_ApiModel, ProfileViewModel, FailedLoginReportModel, FailedLoginModel } from "./lib/models";
//actions
export { NgsUserModule, RootNgsUserModule } from "./lib/user.module";
export { routes, NgsUserRoutingModule } from "./lib/user.routing-module";
export { UserService } from "./lib/services/user.service";
export { UserFacadeService } from "./lib/services/user.facade-service";
export { getAccountInfo } from "./lib/user.reducers";

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljX2FwaS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvdXNlci8iLCJzb3VyY2VzIjpbInB1YmxpY19hcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLDJEQUFjLG1CQUFtQixDQUFDO0FBQ2xDLGdMQUFjLGNBQWMsQ0FBQzs7QUFHN0IsaURBQWMsbUJBQW1CLENBQUM7QUFDbEMsNkNBQWMsMkJBQTJCLENBQUM7QUFFMUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzFELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRXZFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiogUHVibGljIEFQSSBTdXJmYWNlIG9mIHVzZXJcclxuKi9cclxuXHJcbmV4cG9ydCAqIGZyb20gXCIuL2xpYi91c2VyLmNvbmZpZ1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9saWIvbW9kZWxzXCI7XHJcblxyXG4vL2FjdGlvbnNcclxuZXhwb3J0ICogZnJvbSBcIi4vbGliL3VzZXIubW9kdWxlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2xpYi91c2VyLnJvdXRpbmctbW9kdWxlXCI7XHJcbi8vc2VydmljZXNcclxuZXhwb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi9saWIvc2VydmljZXMvdXNlci5zZXJ2aWNlXCI7XHJcbmV4cG9ydCB7IFVzZXJGYWNhZGVTZXJ2aWNlIH0gZnJvbSBcIi4vbGliL3NlcnZpY2VzL3VzZXIuZmFjYWRlLXNlcnZpY2VcIjtcclxuXHJcbmV4cG9ydCB7IGdldEFjY291bnRJbmZvIH0gZnJvbSBcIi4vbGliL3VzZXIucmVkdWNlcnNcIjtcclxuIl19