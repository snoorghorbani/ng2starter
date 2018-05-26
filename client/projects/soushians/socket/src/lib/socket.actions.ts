import { Action } from "@ngrx/store";

export enum SocketActionTypes {
	SOCKET_RUN_SUCCESSFULLY = "[SOCKET] SOCKET_RUN_SUCCESSFULLY",
	SOCKET_INITIALAZATION_FAILD = "[SOCKET] SOCKET_INITIALAZATION_FAILD"
}

export class SocketRunSuccessfullyAction implements Action {
	readonly type = SocketActionTypes.SOCKET_RUN_SUCCESSFULLY;
}
export class SocketInitialazationFailedAction implements Action {
	readonly type = SocketActionTypes.SOCKET_INITIALAZATION_FAILD;
}

export type SocketActions = SocketRunSuccessfullyAction | SocketInitialazationFailedAction;
