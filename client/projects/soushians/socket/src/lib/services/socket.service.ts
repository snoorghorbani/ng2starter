import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { connect, Socket } from "socket.io-client";
import { AppState } from "../socket.reducer";

import { getSocketModuleConfig } from "@soushians/config";

import { SocketConfigurationService } from "./socket-configuration.service";
import { SocketRunSuccessfullyAction } from "../socket.actions";

@Injectable({
	providedIn: "root"
})
export class SocketService {
	socket: SocketIOClient.Socket;
	uri: string;
	constructor(private configService: SocketConfigurationService, private store: Store<AppState>) {
		this.configService.config$
			.pipe(
				map((config) => (config.env.production ? config.production_uri : config.development_uri)),
				map((uri) => {
					this.socket = connect(uri);
					return this.store.dispatch(new SocketRunSuccessfullyAction());
				})
			)
			.subscribe(() => {
				this.socket.on("DISPATCH_ACTION", (data) => {
					this.store.dispatch({
						type: data.type,
						payload: data.payload
					});
				});
			});
	}
	/**
	 * @example
	 * this.socketService.on<number>("chnage-number").subscribe(data=>{})
	 * @returns
	 * Observable<T>
	 */
	on<T>(message): Observable<T> {
		const observer$ = new Observable<T>((observer) => {
			this.socket.on(message, (data: T) => {
				observer.next(data);
			});
		});
		return observer$;
	}
	/**
	 * @example
	 * this.socketService.emit("chnage-number",{number:2})
	 * @returns
	 * void
	 */
	emit(message: string, payload: any): void {
		this.socket.emit(message, payload);
	}
}
