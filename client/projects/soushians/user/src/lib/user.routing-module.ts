import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardContainerComponent, DashboardLinksComponent } from "./dashboard";
import { ProfileContainerComponent } from "./profile-view";
import { ProfileEditContainerComponent } from "./profile-edit";
import { ChangePasswordContainerComponent } from "./change-password";
import { SearchComponent } from "./search-account";
import { FeatureContainerComponent } from "./feature";

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
