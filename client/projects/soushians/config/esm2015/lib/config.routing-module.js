/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { RouterModule } from '@angular/router';
import { ConfigsComponent, ConfigEditComponent, ConfigModuleContainerComponent } from './smart-components';
const /** @type {?} */ routes = [
    {
        path: 'configs',
        component: ConfigModuleContainerComponent,
        children: [
            {
                path: '',
                component: ConfigsComponent
            },
            {
                path: 'edit/:name',
                component: ConfigEditComponent
            }
        ]
    }
];
export const /** @type {?} */ RoutingModule = RouterModule.forChild(routes);
//# sourceMappingURL=config.routing-module.js.map
