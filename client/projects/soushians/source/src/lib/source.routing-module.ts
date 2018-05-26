import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { SourceListComponent, SourceUpsertComponent, SourceModuleContainerComponent } from "./smart-components";

const routes: Routes = [
	{
		path: "source",
		component: SourceModuleContainerComponent,
		children: [
			{
				path: "",
				component: SourceListComponent
			},
			{
				path: "edit/:id",
				component: SourceUpsertComponent
			},
			{
				path: "add",
				component: SourceUpsertComponent
			}
		]
	}
];

export const RoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
