import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConfigsComponent, ConfigEditComponent, ConfigModuleContainerComponent } from './smart-components';

const routes: Routes = [
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

export const RoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
