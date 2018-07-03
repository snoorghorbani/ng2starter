import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RootComponent } from "./root/root.component";

const routes: Routes = [
	{
		path: "grid",
		component: RootComponent,
		children: []
	}
];

export const GridRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
