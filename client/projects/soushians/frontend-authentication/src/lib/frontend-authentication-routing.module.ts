import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// import { SigninGuard } from "./routing-guards";
import { FrontendAuthenticationContainerComponent } from "./smart-components/frontend-authentication-container/frontend-authentication-container.component";
import { SigninContainerComponent } from "./smart-components/signin-container/signin-container.component";

const routes: Routes = [
	{
		path: "auth/frontend",
		component: FrontendAuthenticationContainerComponent,
		children: [
			{
				path: "signin",
				// canActivate: [ SigninGuard ],
				component: SigninContainerComponent
			}
		]
	}
];

export const FrontendAuthenticationRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
