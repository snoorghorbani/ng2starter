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
// import { NgsWidgetModule, WidgetSelectorComponent, DynamicWidgetViewComponent } from "@soushians/widget";
// import { NgsWidgetTypesModule, ArticleUpsertComponent, ArticleViewComponent } from "@soushians/widget-types";

import { StaticPageModule } from "./static-page";

import { CoreModule } from "./core";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { reducers } from "./app.reducers";

// module configs
import { DashboardModule } from "./dashboard";
import { NgsGridModule } from "@soushians/grid";
import { diagramViewComponent, DiagramSelectorComponent } from "@soushians/diagram";
import { RuleModule } from "@soushians/rule";
import { ruleModuleConfig } from "./gwt-steps";
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
		NgsLayoutModule.forRoot(),
		NgsAuthenticationModule.forRoot({
			env: environment as any
		}),
		NgsFrontendAuthenticationModule.forRoot({
			env: environment as any,
			afterSignoutRedirectTo: "/",
			endpoints: {
				signIn: "http://localhost:3000/api/user/signin",
				signOut: "http://localhost:3000/api/user/signout",
				whoAmI: "http://localhost:3000/api/user/account/profile"
			},
			forms: {
				signIn: "5a951cfbfd791632a09b3bc6"
			}
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
		// NgsWidgetTypesModule,
		// NgsWidgetModule.forRoot({
		// 	types: {
		// 		article: { upsert: ArticleUpsertComponent, view: ArticleViewComponent }
		// 	}
		// }),
		StaticPageModule,
		NgsFormModule.forRoot(),
		RuleModule.forRoot(ruleModuleConfig),
		GwtStepsModule,
		NgsGridModule.forRoot({
			types: {
				// article: { configComponent: WidgetSelectorComponent, viewComponent: DynamicWidgetViewComponent },
				diagram: { configComponent: DiagramSelectorComponent, viewComponent: diagramViewComponent }
			}
		}),
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
