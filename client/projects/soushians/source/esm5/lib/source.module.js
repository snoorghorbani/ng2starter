/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatIconModule, MatButtonModule, MatCardModule, MatSnackBarModule, MatSidenavModule, MatExpansionModule, MatSelectModule, MatFormFieldModule, MatListModule, MatMenuModule, MatRadioModule, MatInputModule, MatCheckboxModule, MatToolbarModule, MatDatepickerModule, MatProgressBarModule } from "@angular/material";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from "@soushians/shared";
import { SourceReducers } from "./reducers";
import { RoutingModule } from "./source.routing-module";
import { SourceEffects } from "./effects/source.effects";
import { SourceListComponent } from "./smart-components/source-list/source-list.component";
import { SourceUpsertComponent } from "./smart-components/source-upsert/source-upsert.component";
import { SourceModuleContainerComponent } from "./smart-components/source-module-container/source-module-container.component";
var SourceModule = /** @class */ (function () {
    function SourceModule() {
    }
    return SourceModule;
}());
export { SourceModule };
SourceModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    FormsModule,
                    ReactiveFormsModule,
                    HttpClientModule,
                    FlexLayoutModule,
                    MatIconModule,
                    MatButtonModule,
                    MatCardModule,
                    MatSnackBarModule,
                    MatSidenavModule,
                    MatExpansionModule,
                    MatSelectModule,
                    MatFormFieldModule,
                    MatListModule,
                    MatMenuModule,
                    MatCheckboxModule,
                    MatRadioModule,
                    MatInputModule,
                    MatToolbarModule,
                    MatDatepickerModule,
                    MatProgressBarModule,
                    BrowserModule,
                    StoreModule.forFeature("source", SourceReducers),
                    BrowserAnimationsModule,
                    RoutingModule,
                    EffectsModule.forFeature([SourceEffects]),
                    SharedModule
                ],
                declarations: [SourceListComponent, SourceUpsertComponent, SourceModuleContainerComponent],
                exports: []
            },] },
];
//# sourceMappingURL=source.module.js.map
