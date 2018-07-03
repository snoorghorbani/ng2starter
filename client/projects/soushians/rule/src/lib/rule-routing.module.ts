import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { RuleComponent } from "./rule.component";

const routes: Routes = [
	{
		path: "rule",
		component: RuleComponent
		// children: [ {} ]
	}
];

export const RoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
