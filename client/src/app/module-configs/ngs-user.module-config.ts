import { env } from "./env";

import { UserModuleConfig } from "@soushians/user";

export class NgsUserModuleConfig implements UserModuleConfig {
	static env = env;
}
