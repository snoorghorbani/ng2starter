import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
	{
		//path: "user/panel",
		//component: DashboardContainerComponent,
		// children: [
		// 	{
		// 		path: "",
		// 		component: DashboardLinksComponent
		// 	}
		// ]
	}
];

export const RoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
