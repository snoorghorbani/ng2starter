/*
* Public API Surface of user
*/

export { UserModuleConfig } from "./lib/user.config";
export { UserModel } from "./lib/models/user.model";

// actions
export { NgsUserModule } from "./lib/user.module";
export { NgsUserRoutingModule } from "./lib/user.routing-module";
export { NgsUserModuleOutlets } from "./lib/models/user-outlets.enum";
// services
export { UserService } from "./lib/services/user.service";
export { UserFacadeService } from "./lib/services/user.facade-service";

export { getAccountInfo } from "./lib/user.reducers";

export { UserActionTypes } from "./lib/dashboard/user.actions";
