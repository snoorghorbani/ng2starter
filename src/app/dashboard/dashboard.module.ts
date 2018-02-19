import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedModule } from "@soushians/shared";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./smart-components";

@NgModule({
	imports: [ CommonModule, SharedModule, DashboardRoutingModule ],
	declarations: [ DashboardComponent ],
	providers: []
})
export class DashboardModule {}
