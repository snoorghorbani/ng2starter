import { UserModuleConfig } from "@soushians/user";

export class NgsUserModuleConfig implements UserModuleConfig {
	static mapUserDisplayName = (user$) =>
		user$.map((user) => {
			debugger;
			return user.Username;
		});
}
