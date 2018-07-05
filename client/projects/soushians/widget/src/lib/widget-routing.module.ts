import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { RootComponent } from "./root/root.component";
import { WidgetsManagementComponent } from "./mangement/widget-management.component";
import { UpsertComponent } from "./upsert/upsert.component";

const routes: Routes = [
	{
		path: "widget",
		component: RootComponent,
		children: [
			{
				path: "management",
				component: WidgetsManagementComponent
			},
			{
				path: "upsert/:type",
				component: UpsertComponent
			},
			{
				path: "upsert/:type/:_id",
				component: UpsertComponent
			}
		]
	}
];

export const WidgetRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
