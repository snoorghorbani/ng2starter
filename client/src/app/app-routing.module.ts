import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes, PreloadAllModules } from "@angular/router";

import { CoreModule } from "./core";

const routes: Routes = [
	{
		path: "",
		redirectTo: "/",
		pathMatch: "full"
	}
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes, {
	enableTracing: false,
	preloadingStrategy: PreloadAllModules
});
