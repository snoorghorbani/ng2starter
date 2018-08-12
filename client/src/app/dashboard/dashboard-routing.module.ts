import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './smart-components/dashboard/dashboard.component';

const routes: Routes = [
        {
                path: 'dashboard',
                component: DashboardComponent
        }
];
//{ path: '**', component: PageNotFoundComponent }


export const DashboardRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);