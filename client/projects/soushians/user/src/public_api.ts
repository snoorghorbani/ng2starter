/*
* Public API Surface of user
*/

export * from "./lib/user.config";
export * from "./lib/models";

// actions
export * from "./lib/user.module";
export * from "./lib/user.routing-module";
export { NgsUserModuleOutlets } from "./lib/models/user-outlets.enum";
// services
export { UserService } from "./lib/services/user.service";
export { UserFacadeService } from "./lib/services/user.facade-service";

export { getAccountInfo } from "./lib/user.reducers";

export { UserActionTypes } from "./lib/dashboard/user.actions";
