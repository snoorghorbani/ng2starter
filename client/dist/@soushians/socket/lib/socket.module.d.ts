import { ModuleWithProviders } from "@angular/core";
import { SocketService } from "./services";
import { SocketModuleConfig } from "./socket.config";
export declare class NgsSocketModule {
    static forRoot(config?: SocketModuleConfig): ModuleWithProviders;
}
export declare class NgsSocketRootModule {
    private socketService;
    constructor(socketService: SocketService);
}
