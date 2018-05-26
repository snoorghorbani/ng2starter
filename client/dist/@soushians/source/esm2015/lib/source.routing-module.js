/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { RouterModule } from "@angular/router";
import { SourceListComponent, SourceUpsertComponent, SourceModuleContainerComponent } from "./smart-components";
const /** @type {?} */ routes = [
    {
        path: "source",
        component: SourceModuleContainerComponent,
        children: [
            {
                path: "",
                component: SourceListComponent
            },
            {
                path: "edit/:id",
                component: SourceUpsertComponent
            },
            {
                path: "add",
                component: SourceUpsertComponent
            }
        ]
    }
];
export const /** @type {?} */ RoutingModule = RouterModule.forChild(routes);
//# sourceMappingURL=source.routing-module.js.map
