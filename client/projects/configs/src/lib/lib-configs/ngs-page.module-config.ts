import { env } from "./env";

import { PageModuleConfig } from "@soushians/page";

export class NgsPageModuleConfig implements PageModuleConfig {
	static env = env;
}
