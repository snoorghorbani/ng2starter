/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { RouterModule } from "@angular/router";
import { DashboardContainerComponent, DashboardLinksComponent } from "./dashboard";
import { ProfileContainerComponent } from "./profile-view";
import { ProfileEditContainerComponent } from "./profile-edit";
import { ChangePasswordContainerComponent } from "./change-password";
import { SearchComponent } from "./search-account";
import { FeatureContainerComponent } from "./feature";
export var /** @type {?} */ routes = [
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
export var /** @type {?} */ NgsUserRoutingModule = RouterModule.forChild(routes);
//# sourceMappingURL=user.routing-module.js.map
