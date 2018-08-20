import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { SigninGuard } from "./routing-guards";
import { AuthenticationContainerComponent } from "./smart-components/authentication-container/authentication-container.component";
import { SigninContainerComponent } from "./smart-components/signin-container/signin-container.component";
import { SignupContainerComponent } from "./smart-components/signup-container/signup-container.component";

const routes: Routes = [
	{
		path: "auth",
		component: AuthenticationContainerComponent,
		children: [
			{
				path: "signin",
				// canActivate: [ SigninGuard ],
				component: SigninContainerComponent
			},
			{
				path: "signup",
				// canActivate: [ SigninGuard ],
				component: SignupContainerComponent
			}
		]
	}
];

export const AuthenticationRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
