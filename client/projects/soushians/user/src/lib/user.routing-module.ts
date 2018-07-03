import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DashboardContainerComponent } from "./dashboard/dashboard-container/dashboard.component";
import { ProfileContainerComponent } from "./profile-view/profile-container/profile-container.component";
import { ProfileEditContainerComponent } from "./profile-edit/profile-edit-container/profile-edit-container.component";
import { ChangePasswordContainerComponent } from "./change-password/change-password-container/change-password-container.component";
import { SearchComponent } from "./search-account/search/search.component";
import { FeatureContainerComponent } from "./feature/feature-container/feature-container.component";
import { DashboardLinksComponent } from "./dashboard/dashboard-links/dashboard-links.component";

export const routes: Routes = [
	{
		path: "user/panel",
		component: DashboardContainerComponent,
		children: [
			{
				path: "",
				component: DashboardLinksComponent
			},
			{
				path: "profile",
				component: ProfileContainerComponent
			},
			{
				path: "profile/edit",
				component: ProfileEditContainerComponent
			},
			{
				path: "password/change",
				component: ChangePasswordContainerComponent
			}
		]
	},
	{
		path: "admin/user",
		children: [
			{ path: "managment", component: SearchComponent },
			{
				path: ":Email",
				component: FeatureContainerComponent,
				children: [
					{
						path: "profile-edit",
						component: ProfileEditContainerComponent
					},
					{
						path: "change-password",
						component: ChangePasswordContainerComponent
					}
				]
			}
		]
	}
];

export const NgsUserRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
