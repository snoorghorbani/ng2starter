import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { StoreModule } from "@ngrx/store";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
    MatIconModule, MatButtonModule,
    MatCardModule, MatSnackBarModule,
    MatSidenavModule, MatExpansionModule, MatSelectModule, MatFormFieldModule, MatListModule, MatMenuModule,
    MatRadioModule, MatInputModule,
    MatToolbarModule, MatDatepickerModule, MatProgressBarModule
} from '@angular/material';

import { throwIfAlreadyLoaded } from './module-import-guard';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        HttpClientModule,
        FlexLayoutModule,
        ReactiveFormsModule,
        MatIconModule, MatButtonModule,
        MatCardModule, MatSnackBarModule,
        MatSidenavModule, MatExpansionModule, MatSelectModule, MatFormFieldModule, MatListModule, MatMenuModule,
        MatRadioModule, MatInputModule,
        MatToolbarModule, MatDatepickerModule, MatProgressBarModule,
        BrowserModule,
        RouterModule,
        // BrowserAnimationsModule
    ],
    declarations: [
    ],
    providers: [],
    exports: []
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
}
