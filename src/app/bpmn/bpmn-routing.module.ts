import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { MainContainerComponent } from "./main-container";
import { ModelerComponent } from "./modeler";
import { BpmnListContainerComponent } from "./list";
import { UpsertContainerComponent } from "app/bpmn/upsert";
// import { AddBpmnContainerComponent } from "./add";
// import { EditBpmnContainerComponent } from "./edit";
// import { BpmnListContainerComponent } from "./list";

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
				path: "upsert/:_id",
				component: UpsertContainerComponent
			},
			// {
			// 	path: "edit/:_id",
			// 	component: EditBpmnContainerComponent
			// },
			{
				path: "",
				component: BpmnListContainerComponent
			}
		]
	}
];

export const RoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
