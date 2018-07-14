import { env } from './env';

import { DiagramSelectorComponent, diagramViewComponent } from '@soushians/diagram';
import { WidgetSelectorComponent } from '@soushians/widget';
import { DynamicWidgetViewComponent } from '@soushians/widget';

export const NgsGridModuleConfig = {
	types: {
		article: { configComponent: WidgetSelectorComponent, viewComponent: DynamicWidgetViewComponent },
		diagram: { configComponent: DiagramSelectorComponent, viewComponent: diagramViewComponent }
	},
	env
};
