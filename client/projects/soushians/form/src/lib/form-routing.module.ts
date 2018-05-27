import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { MainContainerComponent } from "./main-container/main-container.component/main-container.component";
import { AddFormContainerComponent } from "./add/add-form-container/add-form-container.component";
import { EditFormContainerComponent } from "./edit";
import { FormListContainerComponent } from "./list";

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
				component: EditFormContainerComponent
			},
			{
				path: "",
				component: FormListContainerComponent
			}
		]
	}
];

export const RoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
