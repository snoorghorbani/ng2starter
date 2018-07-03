import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedModule } from "@soushians/shared";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./smart-components";
import { RuleModule } from "@soushians/rule";

@NgModule({
	imports: [ CommonModule, SharedModule, DashboardRoutingModule, RuleModule ],
	declarations: [ DashboardComponent ],
	providers: []
})
export class DashboardModule {}
