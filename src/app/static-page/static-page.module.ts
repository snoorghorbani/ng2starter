import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
        MatIconModule, MatButtonModule,
        MatCardModule, MatSnackBarModule,
        MatSidenavModule, MatExpansionModule, MatSelectModule, MatFormFieldModule, MatListModule, MatMenuModule,
        MatRadioModule, MatInputModule,
        MatToolbarModule, MatDatepickerModule, MatProgressBarModule
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoutingModule } from './static-page.routing-module';

import {
        PageNotFoundComponent,
        AboutUsComponent,
        ContactUsComponent,
        PoliciesComponent,
        FaqComponent
} from './dumb-components';

@NgModule({
        imports: [
                CommonModule,
                RouterModule,
                FormsModule,
                HttpClientModule,
                FlexLayoutModule,
                MatIconModule, MatButtonModule,
                MatCardModule, MatSnackBarModule,
                MatSidenavModule, MatExpansionModule, MatSelectModule, MatFormFieldModule, MatListModule, MatMenuModule,
                MatRadioModule, MatInputModule,
                MatToolbarModule, MatDatepickerModule, MatProgressBarModule,
                BrowserModule,
                RouterModule,
                BrowserAnimationsModule,
                RoutingModule
        ],
        declarations: [
                PageNotFoundComponent,
                AboutUsComponent,
                ContactUsComponent,
                PoliciesComponent,
                FaqComponent

        ],
        exports: []
})
export class StaticPageModule { }