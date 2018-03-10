import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { MainContainerComponent } from "./main-container";
import { ModelerComponent } from "./modeler";
import { BpmnListContainerComponent } from "./list";
import { UpsertContainerComponent } from "app/bpmn/upsert";

const routes: Routes = [
	{
		path: "bpmn",
		component: MainContainerComponent,
		children: [
			{
				path: "m",
				component: ModelerComponent
			},
			{
				path: "upsert",
				component: UpsertContainerComponent
			},
			{
				path: "upsert/:_id",
				component: UpsertContainerComponent
			},
			{
				path: "",
				component: BpmnListContainerComponent
			}
		]
	}
];

export const RoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
