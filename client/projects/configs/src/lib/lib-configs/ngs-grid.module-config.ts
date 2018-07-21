import { env } from "./env";

import { DiagramSelectorComponent, diagramViewComponent } from "@soushians/diagram";
import { DynamicWidgetViewComponent } from "@soushians/widget";
import { WidgetSelectorComponent } from "@soushians/widget";

export const NgsGridModuleConfig = {
	types: {
		widget: { configComponent: WidgetSelectorComponent, viewComponent: DynamicWidgetViewComponent },
		diagram: { configComponent: DiagramSelectorComponent, viewComponent: diagramViewComponent }
	},
	env
};
