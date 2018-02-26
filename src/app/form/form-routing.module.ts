import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { MainContainerComponent } from "./main-container";
import { AddFormContainerComponent } from "./add";
import { EditFormComponent } from "./edit";
import { FormListComponent } from "./list";

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
				path: "edit/:_id",
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
