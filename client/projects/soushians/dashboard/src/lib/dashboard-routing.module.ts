import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { WidgetListContainerComponent } from "./widget/list";
import { MainContainerComponent } from "app/bpmn/main-container";
import { AddWidgetContainerComponent } from "./widget/add";
import { ListComponent } from "./widget/component-list/list/view/list.component";

const routes: Routes = [
	{
		path: "dashboard",
		component: MainContainerComponent,
		children: [
			{
				path: "",
				component: WidgetListContainerComponent
			},
			{
				path: "add",
				component: AddWidgetContainerComponent
			},
			{
				path: "componentlist",
				component: ListComponent
			}
		]
	}
];

export const DashboardRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
