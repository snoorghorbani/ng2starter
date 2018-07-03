import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SourceModuleContainerComponent } from "./smart-components/source-module-container/source-module-container.component";
import { SourceListComponent } from "./smart-components/source-list/source-list.component";
import { SourceUpsertComponent } from "./smart-components/source-upsert/source-upsert.component";

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
