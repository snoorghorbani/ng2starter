/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { RouterModule } from "@angular/router";
import { MainContainerComponent } from "./main-container/main-container.component/main-container.component";
import { AddFormContainerComponent } from "./add/add-form-container/add-form-container.component";
import { EditFormContainerComponent } from "./edit";
import { FormListContainerComponent } from "./list";
const /** @type {?} */ routes = [
    {
        path: "form",
        component: MainContainerComponent,
        children: [
            {
                path: "add",
                component: AddFormContainerComponent
            },
            {
                path: "edit/:_id",
                component: EditFormContainerComponent
            },
            {
                path: "",
                component: FormListContainerComponent
            }
        ]
    }
];
export const /** @type {?} */ RoutingModule = RouterModule.forChild(routes);
//# sourceMappingURL=form-routing.module.js.map
