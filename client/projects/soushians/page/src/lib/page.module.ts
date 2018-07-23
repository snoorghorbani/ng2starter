import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatCardModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";
import { StoreModule } from "@ngrx/store";
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";

import { NgsGridModule } from "@soushians/grid";

import { RoutingModule } from "./page-routing.module";
import { PageViewComponent } from "./view/page-view.component";
import { PagesManagementComponent } from "./mangement/page-management.component";
import { RootComponent } from "./root/root.component";
import { UpsertComponent } from "./upsert/upsert.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PageModuleConfig, MODULE_CONFIG_TOKEN } from "./page.config";
import { PageConfigurationService } from "./services/page-configuration.service";
import { PageService } from "./services/page.service";
import { PageDbEffects } from "./root/pages.effects";
import { PageReducer } from "./page.reducer";
import { GetPageApiEffects } from "./services/api/get-page/get-page.effects";
import { GetPagesApiEffects } from "./services/api/get-pages/get-pages.effects";
import { UpsertPageApiEffects } from "./services/api/upsert-page/upsert-page.effects";
import { DeletePageApiEffects } from "./services/api/delete-page/delete-page.effects";

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		MatInputModule,
		MatFormFieldModule,
		MatCardModule,
		MatButtonModule,
		MatIconModule,
		FlexLayoutModule,
		FormsModule,
		ReactiveFormsModule,
		NgsGridModule
	],
	declarations: [ PageViewComponent, PagesManagementComponent, RootComponent, UpsertComponent ],
	exports: []
})
export class NgsPageModule {
	static forRoot(config?: PageModuleConfig): ModuleWithProviders {
		return {
			ngModule: NgsPageRootModule,
			providers: [ { provide: MODULE_CONFIG_TOKEN, useValue: config }, PageConfigurationService, PageService ]
		};
	}
}

@NgModule({
	imports: [
		NgsPageModule,
		RoutingModule,
		StoreModule.forFeature("pages", PageReducer),
		EffectsModule.forFeature([
			PageDbEffects,
			GetPageApiEffects,
			GetPagesApiEffects,
			UpsertPageApiEffects,
			DeletePageApiEffects
		])
	],
	exports: [ NgsPageModule ]
})
export class NgsPageRootModule {}
