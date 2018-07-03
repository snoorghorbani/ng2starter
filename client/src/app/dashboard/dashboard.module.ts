import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedModule } from "@soushians/shared";
import { NgsWidgetTypesModule } from "@soushians/widget-types";
import { NgsWidgetModule } from "@soushians/widget";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./smart-components";
import { NgsGridModule } from "@soushians/grid";
import { RuleModule } from "@soushians/rule";

@NgModule({
	imports: [
		CommonModule,
		SharedModule,
		DashboardRoutingModule,
		NgsWidgetTypesModule,
		NgsWidgetModule,
		NgsGridModule.forRoot()
	],
	declarations: [ DashboardComponent ],
	providers: []
})
export class DashboardModule {}
