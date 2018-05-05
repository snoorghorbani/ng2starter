import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent, ContactUsComponent, PoliciesComponent, PageNotFoundComponent, FaqComponent } from './dumb-components';

const routes: Routes = [
    {
        path: 'static',
        // component: SessionContainerComponent,
        children: [
            {
                path: 'about-us',
                component: AboutUsComponent
            },
            {
                path: 'contact-us',
                component: ContactUsComponent
            },
            {
                path: 'policies',
                component: PoliciesComponent
            },
            {
                path: 'faq',
                component: FaqComponent
            },
            {
                path: '**',
                component: PageNotFoundComponent
            }
        ]
    }
];

export const RoutingModule: ModuleWithProviders = RouterModule.forChild(routes);