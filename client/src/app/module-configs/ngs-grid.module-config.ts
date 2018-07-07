import { env } from "./env";
import { DiagramSelectorComponent, diagramViewComponent } from "@soushians/diagram";

export const ngsGridModuleConfig = {
	types: {
		// article: { configComponent: WidgetSelectorComponent, viewComponent: DynamicWidgetViewComponent },
		diagram: { configComponent: DiagramSelectorComponent, viewComponent: diagramViewComponent }
	}
};
