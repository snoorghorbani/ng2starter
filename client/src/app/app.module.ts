import { NgModule, LOCALE_ID } from "@angular/core";
import { CommonModule } from "@angular/common";
// import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// import { ServiceWorkerModule } from "@angular/service-worker";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { StoreModule, Store } from "@ngrx/store";
import { StoreRouterConnectingModule, routerReducer } from "@ngrx/router-store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { environment } from "../environments/environment";

import { SharedModule } from "@soushians/shared";
import { NgsAuthenticationModule } from "@soushians/authentication";
import { NgsFrontendAuthenticationModule } from "@soushians/frontend-authentication";
import { NgsLayoutModule } from "@soushians/layout";
import { NgsUserModule, NgsUserRoutingModule } from "@soushians/user";
import { NgsConfigModule } from "@soushians/config";
import { SourceModule } from "@soushians/source";
import { NgsSocketModule } from "@soushians/socket";
import { NgsDiagramModule } from "@soushians/diagram";
import { NgsFormModule } from "@soushians/form";
import { NgsGridModule } from "@soushians/grid";
import { RuleModule } from "@soushians/rule";
import { NgsWidgetModule } from "@soushians/widget";
import { NgsWidgetTypesModule } from "@soushians/widget-types";
// import { NgsWidgetModule, WidgetSelectorComponent, DynamicWidgetViewComponent } from "@soushians/widget";

/**
 *  module configs
 * */
import { ngsAuthenticationModuleConfig } from "./module-configs/ngs-authentication.module-config";
import { ngsFrontendAuthenticationModuleConfig } from "./module-configs/ngs-frontend-authentication.module-config";
import { ngsConfigModuleConfig } from "./module-configs/ngs-config.module-config";
import { ngsGridModuleConfig } from "./module-configs/ngs-grid.module-config";
import { ngsSocketModuleConfig } from "./module-configs/ngs-socket.module-config";
import { ngsRuleModuleConfig } from "./module-configs/ngs-rule.module-config";
import { NgsWidgetModuleConfig } from "./module-configs/ngs-widget.module-config";
import { NgsUserModuleConfig } from "./module-configs/ngs-user.module-config";
import { NgsLayoutModuleConfig } from "./module-configs/ngs-layout.module-config";

import { StaticPageModule } from "./static-page/static-page.module";

import { CoreModule } from "./core/core.module";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { reducers } from "./app.reducers";

import { DashboardModule } from "./dashboard/dashboard.module";
import { GwtStepsModule } from "./gwt-steps/gwt-steps.module";

@NgModule({
	imports: [
		CoreModule,
		CommonModule,
		// ServiceWorkerModule.register("/ngsw-worker.js", { enabled: environment.production }),
		// ServiceWorkerModule.register('/ngsw-worker.js', {enabled: true}),
		StoreModule.forRoot(reducers),
		StoreDevtoolsModule.instrument({
			maxAge: 25
		}),
		EffectsModule.forRoot([]),

		SharedModule,
		SourceModule,
		NgsLayoutModule.forRoot(NgsLayoutModuleConfig),
		NgsAuthenticationModule.forRoot(ngsAuthenticationModuleConfig),
		NgsFrontendAuthenticationModule.forRoot(ngsFrontendAuthenticationModuleConfig),
		NgsConfigModule.forRoot(ngsConfigModuleConfig),
		NgsDiagramModule.forRoot(),
		NgsUserModule.forRoot(NgsUserModuleConfig),
		NgsUserRoutingModule,
		NgsSocketModule.forRoot(ngsSocketModuleConfig),
		NgsWidgetModule.forRoot(NgsWidgetModuleConfig),
		NgsWidgetTypesModule,
		NgsFormModule.forRoot(),
		RuleModule.forRoot(ngsRuleModuleConfig),
		GwtStepsModule,
		NgsGridModule.forRoot(ngsGridModuleConfig),

		StaticPageModule,
		AppRoutingModule,
		DashboardModule
	],
	declarations: [ AppComponent ],
	providers: [
		// { provide: LOCALE_ID, useValue: 'fa-IR' },
	],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
