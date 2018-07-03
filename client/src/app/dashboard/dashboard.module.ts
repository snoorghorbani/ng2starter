import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedModule } from "@soushians/shared";
import { NgsWidgetModule } from "@soushians/widget";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./smart-components";
import { NgsGridModule } from "@soushians/grid";

@NgModule({
	imports: [ CommonModule, SharedModule, DashboardRoutingModule, NgsWidgetModule, NgsGridModule.forRoot() ],
	declarations: [ DashboardComponent ],
	providers: []
})
export class DashboardModule {}
