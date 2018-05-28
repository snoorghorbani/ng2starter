/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { RouterModule } from "@angular/router";
import { DiagramModuleContainerComponent } from "./smart-components/diagram-module-container/diagram-module-container.component";
import { DiagramsComponent } from "./smart-components/diagrams/diagrams.component";
import { AddDiagramComponent } from "./smart-components/add-diagram/add-diagram.component";
import { NumericDiagramComponent } from "./dumb-components/numeric-diagram/numeric-diagram.component";
import { ServerConnectingTimeDiagramComponent } from "./dumb-components/server-connecting-time-diagram/server-connecting-time-diagram.component";
import { ServerStatusDiagramComponent } from "./dumb-components/server-status-diagram/server-status-diagram.component";
const /** @type {?} */ routes = [
    {
        path: "diagrams",
        component: DiagramModuleContainerComponent,
        children: [
            {
                path: "",
                component: DiagramsComponent
            },
            {
                path: "add",
                component: AddDiagramComponent
            },
            {
                path: "edit/:id",
                component: AddDiagramComponent
            },
            {
                path: "numero",
                component: NumericDiagramComponent
            },
            {
                path: "tempo",
                component: ServerConnectingTimeDiagramComponent
            },
            {
                path: "booleano",
                component: ServerStatusDiagramComponent
            }
        ]
    }
];
export const /** @type {?} */ RoutingModule = RouterModule.forChild(routes);
//# sourceMappingURL=diagram-routing.module.js.map
