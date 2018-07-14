import { NgModule, LOCALE_ID } from "@angular/core";
import { CommonModule } from "@angular/common";
// import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// import { ServiceWorkerModule } from "@angular/service-worker";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { StoreModule, Store } from "@ngrx/store";
import { StoreRouterConnectingModule, routerReducer } from "@ngrx/router-store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

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
import { NgsFormModule } from "@soushians/form";
import { NgsGridModule } from "@soushians/grid";
import { RuleModule } from "@soushians/rule";

/**
 *  module configs
 * */
import { NgsFrontendAuthenticationModuleConfig } from "./module-configs/ngs-frontend-authentication.module-config";
import { NgsAuthenticationModuleConfig } from "./module-configs/ngs-authentication.module-config";
import { NgsDiagramModuleConfig } from "./module-configs/ngs-diagram.module-config";
import { NgsLayoutModuleConfig } from "./module-configs/ngs-layout.module-config";
import { NgsConfigModuleConfig } from "./module-configs/ngs-config.module-config";
import { NgsWidgetModuleConfig } from "./module-configs/ngs-widget.module-config";
import { NgsSocketModuleConfig } from "./module-configs/ngs-socket.module-config";
import { NgsGridModuleConfig } from "./module-configs/ngs-grid.module-config";
import { NgsRuleModuleConfig } from "./module-configs/ngs-rule.module-config";
import { NgsUserModuleConfig } from "./module-configs/ngs-user.module-config";
import { NgsFormModuleConfig } from "./module-configs/ngs-form.module-config";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { reducers } from "./app.reducers";

import { DashboardModule } from "./dashboard/dashboard.module";
import { GwtStepsModule } from "./gwt-steps/gwt-steps.module";

@NgModule({
	imports: [
		CommonModule,
		StoreModule.forRoot(reducers),
		StoreDevtoolsModule.instrument({
			maxAge: 25
		}),
		EffectsModule.forRoot([]),

		SharedModule,
		SourceModule,
		NgsFrontendAuthenticationModule.forRoot(NgsFrontendAuthenticationModuleConfig),
		NgsAuthenticationModule.forRoot(NgsAuthenticationModuleConfig),
		NgsDiagramModule.forRoot(NgsDiagramModuleConfig),
		NgsLayoutModule.forRoot(NgsLayoutModuleConfig),
		NgsConfigModule.forRoot(NgsConfigModuleConfig),
		NgsSocketModule.forRoot(NgsSocketModuleConfig),
		NgsWidgetModule.forRoot(NgsWidgetModuleConfig),
		NgsUserModule.forRoot(NgsUserModuleConfig),
		NgsGridModule.forRoot(NgsGridModuleConfig),
		NgsFormModule.forRoot(NgsFormModuleConfig),
		RuleModule.forRoot(NgsRuleModuleConfig),
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
export class AppModule {}
