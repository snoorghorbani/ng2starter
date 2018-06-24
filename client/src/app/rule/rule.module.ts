import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
	MatExpansionModule,
	MatSnackBarModule,
	MatIconModule,
	MatButtonModule,
	MatCardModule,
	MatSelectModule,
	MatInputModule,
	MatFormFieldModule,
	MatTabsModule,
	MatRadioModule,
	MatSlideToggleModule,
	MatDividerModule,
	MatCheckboxModule,
	MatTableModule
} from "@angular/material";
import { StoreModule } from "@ngrx/store";
import { EffectsModule, mergeEffects } from "@ngrx/effects";

import { SharedModule } from "@soushians/shared";

import { RuleModuleConfig, MODULE_CONFIG_TOKEN } from "./rule.config";
import { RoutingModule } from "./rule-routing.module";
import { RuleReducers } from "./rule.reducers";
import { RuleService, RuleConfigurationService } from "./services";

import { RuleComponent } from "./rule.component";
import { RuleAnchorDirective } from "./rule-anchor/rule-anchor.directive";
import { GwtViewComponent } from "./gwt-view/gwt-view.component";
import { OperationGwtStepComponent } from "./operation-gwt-step/operation-gwt-step.component";
import { StepLoaderDirective } from "./step-loader/step-loader.directive";
import { GwtThenAuthorizeStepComponent } from "./gwt-then-authorize-step/gwt-then-authorize-step.component";
import { ScenariosListEffects } from "./db/scenario-db.effects";
import { RulesListEffects } from "./db/rule-db.effects";

@NgModule({
	imports: [
		HttpClientModule,
		FormsModule,
		RouterModule,
		CommonModule,
		MatExpansionModule,
		MatSnackBarModule,
		MatIconModule,
		MatButtonModule,
		MatCardModule,
		MatCheckboxModule,
		MatTableModule,
		MatSelectModule,
		MatInputModule,
		MatFormFieldModule,
		MatTabsModule,
		MatDividerModule,
		FlexLayoutModule,
		MatRadioModule,
		MatSlideToggleModule,
		ReactiveFormsModule,
		BrowserAnimationsModule
	],
	declarations: [
		RuleComponent,
		RuleAnchorDirective,
		GwtViewComponent,
		OperationGwtStepComponent,
		StepLoaderDirective,
		GwtThenAuthorizeStepComponent
	],
	entryComponents: [ GwtViewComponent, OperationGwtStepComponent, GwtThenAuthorizeStepComponent ],
	exports: [ RuleAnchorDirective ]
})
export class RuleModule {
	static forRoot(config?: RuleModuleConfig): ModuleWithProviders {
		return {
			ngModule: RootRuleModule,
			providers: [
				{ provide: MODULE_CONFIG_TOKEN, useValue: config || {} },
				RuleService,
				RuleConfigurationService
			]
		};
	}
}

@NgModule({
	imports: [
		RuleModule,
		StoreModule.forFeature("rule", RuleReducers),
		EffectsModule.forFeature([ ScenariosListEffects, RulesListEffects ]),
		RoutingModule
	],
	exports: [ RuleModule ]
})
export class RootRuleModule {}
