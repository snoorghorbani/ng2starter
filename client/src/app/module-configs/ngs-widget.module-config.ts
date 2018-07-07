import { env } from "./env";

import { WidgetModuleConfig } from "@soushians/widget";

import { ArticleViewComponent, ArticleUpsertComponent } from "@soushians/widget-types";

export class NgsWidgetModuleConfig implements WidgetModuleConfig {
	static types = {
		article: {
			view: ArticleViewComponent,
			upsert: ArticleUpsertComponent
		}
	};
}