/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatIconModule, MatButtonModule, MatCardModule, MatSnackBarModule, MatSidenavModule, MatExpansionModule, MatSelectModule, MatFormFieldModule, MatListModule, MatMenuModule, MatRadioModule, MatInputModule, MatToolbarModule, MatDatepickerModule, MatProgressBarModule, MatSlideToggleModule } from "@angular/material";
import { EffectsModule } from "@ngrx/effects";
import { MODULE_CONFIG_TOKEN } from "./config.config";
import { ConfigsComponent } from "./smart-components/configs/configs.component";
import { ConfigEditComponent } from "./smart-components/config-edit/config-edit.component";
import { ConfigAppConfigComponent } from "./dumb-components/app-config/app-config.component";
import { UserModuleConfigComponent } from "./dumb-components/user-module-config/user-module-config.component";
import { LayoutModuleConfigComponent } from "./dumb-components/layout-config/layout-module-config.component";
import { ConfigModuleContainerComponent } from "./smart-components/config-module-container/config-module-container.component";
import { AuthenticationModuleConfigComponent } from "./dumb-components/authentication-module-config/authentication-module-config.component";
import { DynamicConfigComponentSelectorComponent } from "./smart-components/dynamic-config-component-selector/dynamic-config-component-selector.component";
import { LoadConfigEffects } from "./effects/load-config.effects";
import { ConfigReducers } from "./reducers";
import { RoutingModule } from "./config.routing-module";
export class NgsConfigModule {
    /**
     * @param {?} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: RootNgsConfigModule,
            providers: [{ provide: MODULE_CONFIG_TOKEN, useValue: config }]
        };
    }
}
NgsConfigModule.decorators = [
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
                    MatRadioModule,
                    MatInputModule,
                    MatSlideToggleModule,
                    MatToolbarModule,
                    MatDatepickerModule,
                    MatProgressBarModule,
                    BrowserAnimationsModule,
                    RoutingModule
                ],
                declarations: [
                    ConfigsComponent,
                    ConfigEditComponent,
                    ConfigAppConfigComponent,
                    UserModuleConfigComponent,
                    LayoutModuleConfigComponent,
                    ConfigModuleContainerComponent,
                    AuthenticationModuleConfigComponent,
                    DynamicConfigComponentSelectorComponent
                ],
                providers: []
            },] },
];
export class RootNgsConfigModule {
}
RootNgsConfigModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    NgsConfigModule,
                    StoreModule.forFeature("config", ConfigReducers),
                    EffectsModule.forFeature([LoadConfigEffects])
                ],
                exports: [NgsConfigModule]
            },] },
];
//# sourceMappingURL=config.module.js.map
