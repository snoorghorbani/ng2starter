import { NgModule, LOCALE_ID } from "@angular/core";
import { MatSidenavModule, MatToolbarModule, MatFormFieldModule } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { StoreModule, Store } from "@ngrx/store";
import { StoreRouterConnectingModule, routerReducer } from "@ngrx/router-store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { ServiceWorkerModule } from "@angular/service-worker";
import "hammerjs";

import { environment } from "../environments/environment";

import { CoreModule } from "./core";
import { SharedModule } from "@soushians/shared";
import { NgsAuthenticationModule } from "@soushians/authentication";
import { InfraModule } from "@soushians/infra";
import { NgsLayoutModule } from "@soushians/layout";
import { NgsUserModule } from "@soushians/user";
import { StaticPageModule } from "app/static-page";
import { NgsConfigModule } from "@soushians/config";
import { SourceModule } from "@soushians/source";
import * as FeatureReducer from "@soushians/config";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { reducers } from "./reducers";
import { AppEffects } from "./effects";

//module configs
import { DashboardModule } from "./dashboard";
import { authenticationModuleConfig, userModuleConfig } from "./modules-config";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { EventHandlerService } from "./services";
import { DynamicformComponent } from "./dynamicform/dynamicform.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddformComponent } from "./addform/addform.component";
import { FormGroupComponent } from "./form-group/form-group.component";
import { FormArrayComponent } from "./form-array/form-array.component";
import { FormControlComponent } from "./form-control/form-control.component";

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
		EffectsModule.forRoot([ AppEffects ]),
		NgsLayoutModule.forRoot(),
		NgsAuthenticationModule.forRoot({
			env: environment as any
		}),
		NgsConfigModule.forRoot({
			env: environment as any
		}),
		NgsUserModule.forRoot(userModuleConfig),
		InfraModule,
		SharedModule,
		DashboardModule,
		SourceModule,
		StaticPageModule,
		AppRoutingModule,
		MatFormFieldModule,
		FormsModule,
		ReactiveFormsModule
	],
	declarations: [
		AppComponent,
		DynamicformComponent,
		AddformComponent,
		FormGroupComponent,
		FormArrayComponent,
		FormControlComponent
	],
	providers: [
		// { provide: LOCALE_ID, useValue: 'fa-IR' },
		EventHandlerService
	],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
