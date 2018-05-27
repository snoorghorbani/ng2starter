/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
const SocketActionTypes = {
    SOCKET_RUN_SUCCESSFULLY: "[SOCKET] SOCKET_RUN_SUCCESSFULLY",
    SOCKET_INITIALAZATION_FAILD: "[SOCKET] SOCKET_INITIALAZATION_FAILD",
};
export { SocketActionTypes };
export class SocketRunSuccessfullyAction {
    constructor() {
        this.type = SocketActionTypes.SOCKET_RUN_SUCCESSFULLY;
    }
}
function SocketRunSuccessfullyAction_tsickle_Closure_declarations() {
    /** @type {?} */
    SocketRunSuccessfullyAction.prototype.type;
}
export class SocketInitialazationFailedAction {
    constructor() {
        this.type = SocketActionTypes.SOCKET_INITIALAZATION_FAILD;
    }
}
function SocketInitialazationFailedAction_tsickle_Closure_declarations() {
    /** @type {?} */
    SocketInitialazationFailedAction.prototype.type;
}
//# sourceMappingURL=socket.actions.js.map
