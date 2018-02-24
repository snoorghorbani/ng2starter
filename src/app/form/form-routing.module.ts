import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainContainerComponent } from "./main-container";
import { AddFormContainerComponent } from "app/form/add";
import { EditFormComponent } from "app/form/edit";
import { FormListComponent } from "app/form/list";

const routes: Routes = [
	{
		path: "form",
		component: MainContainerComponent,
		children: [
			{
				path: "add",
				component: AddFormContainerComponent
			},
			{
				path: "edit",
				component: EditFormComponent
			},
			{
				path: "list",
				component: FormListComponent
			}
		]
	}
];

export const RoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
