import { Action } from "@ngrx/store";
export declare enum SocketActionTypes {
    SOCKET_RUN_SUCCESSFULLY = "[SOCKET] SOCKET_RUN_SUCCESSFULLY",
    SOCKET_INITIALAZATION_FAILD = "[SOCKET] SOCKET_INITIALAZATION_FAILD"
}
export declare class SocketRunSuccessfullyAction implements Action {
    readonly type = SocketActionTypes.SOCKET_RUN_SUCCESSFULLY;
}
export declare class SocketInitialazationFailedAction implements Action {
    readonly type = SocketActionTypes.SOCKET_INITIALAZATION_FAILD;
}
export declare type SocketActions = SocketRunSuccessfullyAction | SocketInitialazationFailedAction;
