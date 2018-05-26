/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { RouterModule } from "@angular/router";
import { SigninGuard } from "./routing-guards";
import { AuthenticationContainerComponent } from "./smart-components/authentication-container/authentication-container.component";
import { SigninContainerComponent } from "./smart-components/signin-container/signin-container.component";
const /** @type {?} */ routes = [
    {
        path: "auth",
        component: AuthenticationContainerComponent,
        children: [
            {
                path: "signin",
                canActivate: [SigninGuard],
                component: SigninContainerComponent
            }
        ]
    }
];
export const /** @type {?} */ AuthenticationRoutingModule = RouterModule.forChild(routes);
//# sourceMappingURL=authentication-routing.module.js.map
