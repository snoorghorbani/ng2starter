/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
var SocketActionTypes = {
    SOCKET_RUN_SUCCESSFULLY: "[SOCKET] SOCKET_RUN_SUCCESSFULLY",
    SOCKET_INITIALAZATION_FAILD: "[SOCKET] SOCKET_INITIALAZATION_FAILD",
};
export { SocketActionTypes };
var SocketRunSuccessfullyAction = /** @class */ (function () {
    function SocketRunSuccessfullyAction() {
        this.type = SocketActionTypes.SOCKET_RUN_SUCCESSFULLY;
    }
    return SocketRunSuccessfullyAction;
}());
export { SocketRunSuccessfullyAction };
function SocketRunSuccessfullyAction_tsickle_Closure_declarations() {
    /** @type {?} */
    SocketRunSuccessfullyAction.prototype.type;
}
var SocketInitialazationFailedAction = /** @class */ (function () {
    function SocketInitialazationFailedAction() {
        this.type = SocketActionTypes.SOCKET_INITIALAZATION_FAILD;
    }
    return SocketInitialazationFailedAction;
}());
export { SocketInitialazationFailedAction };
function SocketInitialazationFailedAction_tsickle_Closure_declarations() {
    /** @type {?} */
    SocketInitialazationFailedAction.prototype.type;
}
//# sourceMappingURL=socket.actions.js.map
