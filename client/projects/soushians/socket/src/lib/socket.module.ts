import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";

import { SocketModuleConfig, MODULE_CONFIG_TOKEN } from "./socket.config";
import { SocketConfigurationService } from "./services/socket-configuration.service";
import { SocketService } from "./services/socket.service";
import { SocketReducer } from "./socket.reducer";

@NgModule({
	imports: [ CommonModule ]
})
export class NgsSocketModule {
	static forRoot(config?: SocketModuleConfig): ModuleWithProviders {
		return {
			ngModule: NgsSocketRootModule,
			providers: [ { provide: MODULE_CONFIG_TOKEN, useValue: config }, SocketConfigurationService, SocketService ]
		};
	}
}

@NgModule({
	imports: [ NgsSocketModule, StoreModule.forFeature("socket", SocketReducer) ]
})
export class NgsSocketRootModule {
	constructor(private socketService: SocketService) {}
}
