import { UserModuleConfig } from "@soushians/user";

export class NgsUserModuleConfig implements UserModuleConfig {
	static mapUserDisplayName = (user) => user.Username;
	static responseToUserInfo = (user) => user.Username;
}
