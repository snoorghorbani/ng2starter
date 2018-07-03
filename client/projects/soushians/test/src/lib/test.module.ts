import { NgModule } from "@angular/core";
import { TestComponent } from "./test.component";

import { NgsAuthenticationModule } from "@soushians/authentication";
import { NgsConfigModule } from "@soushians/config";
import { NgsDiagramModule } from "@soushians/diagram";
import { NgsFormModule } from "@soushians/form";
import { NgsLayoutModule } from "@soushians/layout";
import { SharedModule } from "@soushians/shared";
import { SourceModule } from "@soushians/source";
import { NgsUserModule } from "@soushians/user";
import { NgsSocketModule } from "@soushians/socket";

@NgModule({
	imports: [
		NgsAuthenticationModule.forRoot(),
		NgsConfigModule,
		NgsDiagramModule.forRoot(),
		NgsFormModule.forRoot(),
		NgsLayoutModule.forRoot(),
		SharedModule,
		SourceModule,
		NgsUserModule.forRoot(),
		NgsSocketModule.forRoot()
	],
	declarations: [ TestComponent ],
	exports: [ TestComponent ]
})
export class TestModule {}
