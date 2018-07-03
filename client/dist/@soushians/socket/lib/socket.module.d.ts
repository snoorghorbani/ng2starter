import { ModuleWithProviders } from "@angular/core";
import { SocketModuleConfig } from "./socket.config";
import { SocketService } from "./services/socket.service";
export declare class NgsSocketModule {
    static forRoot(config?: SocketModuleConfig): ModuleWithProviders;
}
export declare class NgsSocketRootModule {
    private socketService;
    constructor(socketService: SocketService);
}
