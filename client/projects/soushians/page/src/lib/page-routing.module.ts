import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PageViewComponent } from "./view/page-view.component";
import { RootComponent } from "./root/root.component";
import { UpsertComponent } from "./upsert/upsert.component";
import { PagesManagementComponent } from "./mangement/page-management.component";

const routes: Routes = [
	{
		path: "pages",
		component: RootComponent,
		children: [
			{
				path: "management",
				component: PagesManagementComponent
			},
			{
				path: "upsert",
				component: UpsertComponent
			},
			{
				path: "upsert/:_id",
				component: UpsertComponent
			}
		]
	},
	{
		path: "page/:name",
		component: PageViewComponent
	}
];

export const RoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
