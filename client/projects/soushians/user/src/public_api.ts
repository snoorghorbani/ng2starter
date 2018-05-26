/*
* Public API Surface of user
*/

export * from "./lib/user.config";
export * from "./lib/models";

//actions
export * from "./lib/user.module";
export * from "./lib/user.routing-module";
//services
export { UserService } from "./lib/services/user.service";

export { getUserInfo } from "./lib/feature/feature.reducers";
