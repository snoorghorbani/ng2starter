import { NgModule, LOCALE_ID } from "@angular/core";
import { CommonModule } from "@angular/common";
// import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// import { ServiceWorkerModule } from "@angular/service-worker";
import { StoreModule, Store } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { TranslateModule, TranslateService } from "@ngx-translate/core";

/**
 *  ngs module
 * */
import { NgsFrontendAuthenticationModule } from "@soushians/frontend-authentication";
import { NgsAuthenticationModule } from "@soushians/authentication";
import { NgsUserModule, NgsUserRoutingModule } from "@soushians/user";
import { NgsWidgetTypesModule } from "@soushians/widget-types";
import { NgsDiagramModule } from "@soushians/diagram";
import { NgsSocketModule } from "@soushians/socket";
import { NgsLayoutModule } from "@soushians/layout";
import { NgsConfigModule } from "@soushians/config";
import { NgsWidgetModule } from "@soushians/widget";
import { SharedModule } from "@soushians/shared";
import { SourceModule } from "@soushians/source";
import { NgsPageModule } from "@soushians/page";
import { NgsFormModule } from "@soushians/form";
import { NgsGridModule } from "@soushians/grid";
import { RuleModule } from "@soushians/rule";
import { GwtStepsModule } from "@soushians/gwt-steps";

/**
 *  module configs
 * */
import {
	NgsFrontendAuthenticationModuleConfig,
	NgsAuthenticationModuleConfig,
	NgsDiagramModuleConfig,
	NgsLayoutModuleConfig,
	NgsConfigModuleConfig,
	NgsWidgetModuleConfig,
	NgsSocketModuleConfig,
	NgsGridModuleConfig,
	NgsRuleModuleConfig,
	NgsUserModuleConfig,
	NgsFormModuleConfig,
	NgsPageModuleConfig
} from "configs";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { reducers } from "./app.reducers";

import { DashboardModule } from "./dashboard/dashboard.module";

@NgModule({
	imports: [
		CommonModule,
		StoreModule.forRoot(reducers),
		StoreDevtoolsModule.instrument({
			maxAge: 25
		}),
		EffectsModule.forRoot([]),
		TranslateModule.forRoot(),

		SharedModule,
		SourceModule,
		NgsFrontendAuthenticationModule.forRoot(NgsFrontendAuthenticationModuleConfig),
		NgsUserModule.forRoot(NgsUserModuleConfig),
		NgsAuthenticationModule.forRoot(NgsAuthenticationModuleConfig),
		NgsDiagramModule.forRoot(NgsDiagramModuleConfig),
		NgsLayoutModule.forRoot(NgsLayoutModuleConfig),
		NgsConfigModule.forRoot(NgsConfigModuleConfig),
		NgsSocketModule.forRoot(NgsSocketModuleConfig),
		NgsWidgetModule.forRoot(NgsWidgetModuleConfig),
		NgsGridModule.forRoot(NgsGridModuleConfig),
		NgsFormModule.forRoot(NgsFormModuleConfig),
		RuleModule.forRoot(NgsRuleModuleConfig),
		NgsPageModule.forRoot(NgsPageModuleConfig),
		NgsUserRoutingModule,
		GwtStepsModule,

		NgsWidgetTypesModule,

		DashboardModule,
		AppRoutingModule
	],
	declarations: [ AppComponent ],
	providers: [
		// { provide: LOCALE_ID, useValue: 'fa-IR' },
	],
	bootstrap: [ AppComponent ]
})
export class AppModule {
	constructor(private translateService: TranslateService) {
		this.translateService.setDefaultLang("fa");
	}
}
