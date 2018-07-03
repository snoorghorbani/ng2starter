import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ConfigModuleContainerComponent } from "./smart-components/config-module-container/config-module-container.component";
import { ConfigsComponent } from "./smart-components/configs/configs.component";
import { ConfigEditComponent } from "./smart-components/config-edit/config-edit.component";

const routes: Routes = [
	{
		path: "configs",
		component: ConfigModuleContainerComponent,
		children: [
			{
				path: "",
				component: ConfigsComponent
			},
			{
				path: "edit/:name",
				component: ConfigEditComponent
			}
		]
	}
];

export const RoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
