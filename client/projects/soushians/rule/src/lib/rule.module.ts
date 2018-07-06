import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
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
import { EffectsModule } from "@ngrx/effects";

import { RuleModuleConfig, MODULE_CONFIG_TOKEN } from "./rule.config";
import { RoutingModule } from "./rule-routing.module";
import { RuleReducers } from "./rule.reducers";
import { RuleComponent } from "./rule.component";
import { RuleAnchorDirective } from "./rule-anchor/rule-anchor.directive";
import { GwtViewComponent } from "./gwt-view/gwt-view.component";
import { StepLoaderDirective } from "./step-loader/step-loader.directive";
import { ScenariosDbEffects } from "./db/scenario-db.effects";
import { RulesListEffects } from "./db/rule-db.effects";
import { GwtModeButtonComponent } from "./mode-button/mode-button.component";
import { RuleService } from "./services/rule.service";
import { RuleConfigurationService } from "./services/rule-configuration.service";
import { ScenarioService } from "./services/scenario.service";

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
	declarations: [ RuleComponent, RuleAnchorDirective, GwtViewComponent, StepLoaderDirective, GwtModeButtonComponent ],
	entryComponents: [ GwtViewComponent ],
	exports: [ RuleAnchorDirective, GwtModeButtonComponent ]
})
export class RuleModule {
	static forRoot(config?: RuleModuleConfig): ModuleWithProviders {
		return {
			ngModule: RootRuleModule,
			providers: [
				{ provide: MODULE_CONFIG_TOKEN, useValue: config || {} },
				RuleService,
				RuleConfigurationService,
				ScenarioService
			]
		};
	}
}

@NgModule({
	imports: [
		RuleModule,
		StoreModule.forFeature("rule", RuleReducers),
		EffectsModule.forFeature([ RulesListEffects, ScenariosDbEffects ]),
		RoutingModule
	],
	exports: [ RuleModule ]
})
export class RootRuleModule {}
