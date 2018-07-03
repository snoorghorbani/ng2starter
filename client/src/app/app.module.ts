import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { environment } from "../environments/environment";

import { SharedModule } from "@soushians/shared";
import { NgsAuthenticationModule } from "@soushians/authentication";
import { NgsLayoutModule } from "@soushians/layout";
import { NgsUserModule, NgsUserRoutingModule } from "@soushians/user";
import { NgsConfigModule } from "@soushians/config";
import { SourceModule } from "@soushians/source";
import { NgsSocketModule } from "@soushians/socket";
import { NgsDiagramModule } from "@soushians/diagram";
import { NgsFormModule } from "@soushians/form";
// import { RuleModule } from "@soushians/rule";

import { StaticPageModule } from "./static-page";

import { CoreModule } from "./core";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { reducers } from "./app.reducers";

// module configs
import { DashboardModule } from "./dashboard";
// import { GwtStepsModule } from "./gwt-steps/gwt-steps.module";

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
		NgsLayoutModule.forRoot(),
		NgsAuthenticationModule.forRoot({
			env: environment as any
		}),
		NgsConfigModule.forRoot({
			env: environment as any,
			dev_api_host: "http://localhost:3000",
			prod_api_host: "http://localhost:3000"
		}),
		NgsDiagramModule.forRoot(),
		NgsUserModule.forRoot(),
		NgsUserRoutingModule,
		// NgsBpmnModule.forRoot(),
		NgsSocketModule.forRoot(),
		SharedModule,
		SourceModule,
		StaticPageModule,
		NgsFormModule.forRoot(),
		// RuleModule.forRoot(ruleModuleConfig),
		// GwtStepsModule,
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
