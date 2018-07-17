import { env } from "./env";

import { DiagramModuleConfig } from "@soushians/diagram";

export class NgsDiagramModuleConfig implements DiagramModuleConfig {
	static env = env;
}
