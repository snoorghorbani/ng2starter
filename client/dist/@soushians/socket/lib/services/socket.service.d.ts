import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { AppState } from "../socket.reducer";
import { SocketConfigurationService } from "./socket-configuration.service";
export declare class SocketService {
    private configService;
    private store;
    socket: any;
    uri: string;
    constructor(configService: SocketConfigurationService, store: Store<AppState>);
    /**
     * @example
     * this.socketService.on<number>("chnage-number").subscribe(data=>{})
     * @returns
     * Observable<T>
     */
    on<T>(message: any): Observable<T>;
    /**
     * @example
     * this.socketService.emit("chnage-number",{number:2})
     * @returns
     * void
     */
    emit(message: string, payload: any): void;
}
