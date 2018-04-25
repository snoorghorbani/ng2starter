import "hammerjs";
import { NgModule, LOCALE_ID } from "@angular/core";
import { MatSidenavModule, MatToolbarModule, MatFormFieldModule } from "@angular/material";
// import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { StoreModule, Store } from "@ngrx/store";
import { StoreRouterConnectingModule, routerReducer } from "@ngrx/router-store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { ServiceWorkerModule } from "@angular/service-worker";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { environment } from "../environments/environment";

import { SharedModule } from "@soushians/shared";
import { NgsAuthenticationModule } from "@soushians/authentication";
import { InfraModule } from "@soushians/infra";
import { NgsLayoutModule } from "@soushians/layout";
import { NgsUserModule, NgsUserRoutingModule } from "@soushians/user";
import { NgsConfigModule } from "@soushians/config";
import * as FeatureReducer from "@soushians/config";
import { SourceModule } from "@soushians/source";
import { NgsDiagramModule } from "@soushians/diagram";
import { NgsFormModule } from "@soushians/form";

import { StaticPageModule } from "app/static-page";

import { CoreModule } from "./core";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { reducers } from "./reducers";
import { AppEffects } from "./effects";

//module configs
import { DashboardModule } from "./dashboard";
import { EventHandlerService } from "./services";
// import { NgsBpmnModule } from "./bpmn";

@NgModule({
	imports: [
		CoreModule,
		ServiceWorkerModule.register("/ngsw-worker.js", { enabled: environment.production }),
		// ServiceWorkerModule.register('/ngsw-worker.js', {enabled: true}),
		MatSidenavModule,
		MatToolbarModule,
		StoreModule.forRoot(reducers),
		StoreDevtoolsModule.instrument({
			maxAge: 25
		}),
		EffectsModule.forRoot([AppEffects]),
		NgsLayoutModule.forRoot(),
		NgsAuthenticationModule.forRoot({
			env: environment as any
		}),
		NgsConfigModule.forRoot({
			env: environment as any
		}),
		NgsDiagramModule.forRoot(),
		NgsUserModule.forRoot(),
		NgsUserRoutingModule,
		// NgsBpmnModule.forRoot(),
		InfraModule,
		SharedModule,
		DashboardModule,
		SourceModule,
		StaticPageModule,
		NgsFormModule.forRoot(),
		AppRoutingModule,
		MatFormFieldModule,
		FormsModule,
		ReactiveFormsModule
	],
	declarations: [AppComponent],
	providers: [
		// { provide: LOCALE_ID, useValue: 'fa-IR' },
		EventHandlerService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
