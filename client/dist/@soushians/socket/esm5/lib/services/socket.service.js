/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Store } from "@ngrx/store";
import * as _io from "socket.io-client";
import * as i0 from "@angular/core";
import * as i1 from "./socket-configuration.service";
import * as i2 from "@ngrx/store";
var /** @type {?} */ io = _io;
import { SocketConfigurationService } from "./socket-configuration.service";
import { SocketRunSuccessfullyAction } from "../socket.actions";
var SocketService = /** @class */ (function () {
    function SocketService(configService, store) {
        var _this = this;
        this.configService = configService;
        this.store = store;
        this.configService.config$
            .pipe(map(function (config) { return config.env.frontend_server; }), map(function (uri) {
            console.log(uri, _this.configService.config);
            _this.socket = io(uri);
            return _this.store.dispatch(new SocketRunSuccessfullyAction());
        }))
            .subscribe(function () {
            _this.socket.on("DISPATCH_ACTION", function (data) {
                _this.store.dispatch({
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
    /**
     * \@example
     * this.socketService.on<number>("chnage-number").subscribe(data=>{})
     * @template T
     * @param {?} message
     * @return {?}
     * Observable<T>
     */
    SocketService.prototype.on = /**
     * \@example
     * this.socketService.on<number>("chnage-number").subscribe(data=>{})
     * @template T
     * @param {?} message
     * @return {?}
     * Observable<T>
     */
    function (message) {
        var _this = this;
        var /** @type {?} */ observer$ = new Observable(function (observer) {
            _this.socket.on(message, function (data) {
                observer.next(data);
            });
        });
        return observer$;
    };
    /**
     * @example
     * this.socketService.emit("chnage-number",{number:2})
     * @returns
     * void
     */
    /**
     * \@example
     * this.socketService.emit("chnage-number",{number:2})
     * @param {?} message
     * @param {?} payload
     * @return {?}
     * void
     */
    SocketService.prototype.emit = /**
     * \@example
     * this.socketService.emit("chnage-number",{number:2})
     * @param {?} message
     * @param {?} payload
     * @return {?}
     * void
     */
    function (message, payload) {
        this.socket.emit(message, payload);
    };
    SocketService.decorators = [
        { type: Injectable, args: [{
                    providedIn: "root"
                },] },
    ];
    /** @nocollapse */
    SocketService.ctorParameters = function () { return [
        { type: SocketConfigurationService },
        { type: Store }
    ]; };
    /** @nocollapse */ SocketService.ngInjectableDef = i0.defineInjectable({ factory: function SocketService_Factory() { return new SocketService(i0.inject(i1.SocketConfigurationService), i0.inject(i2.Store)); }, token: SocketService, providedIn: "root" });
    return SocketService;
}());
export { SocketService };
function SocketService_tsickle_Closure_declarations() {
    /** @type {?} */
    SocketService.prototype.socket;
    /** @type {?} */
    SocketService.prototype.uri;
    /** @type {?} */
    SocketService.prototype.configService;
    /** @type {?} */
    SocketService.prototype.store;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ja2V0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3NvY2tldC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9zb2NrZXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3BDLE9BQU8sS0FBSyxHQUFHLE1BQU0sa0JBQWtCLENBQUM7Ozs7QUFDeEMscUJBQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQztBQUlmLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLG1CQUFtQixDQUFDOztJQVEvRCx1QkFBb0IsYUFBeUMsRUFBVSxLQUFzQjtRQUE3RixpQkFrQkM7UUFsQm1CLGtCQUFhLEdBQWIsYUFBYSxDQUE0QjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWlCO1FBQzVGLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTzthQUN4QixJQUFJLENBQ0osR0FBRyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQTFCLENBQTBCLENBQUMsRUFDekMsR0FBRyxDQUFDLFVBQUEsR0FBRztZQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDNUMsS0FBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdEIsTUFBTSxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksMkJBQTJCLEVBQUUsQ0FBQyxDQUFDO1NBQzlELENBQUMsQ0FDRjthQUNBLFNBQVMsQ0FBQztZQUNWLEtBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLGlCQUFpQixFQUFFLFVBQUEsSUFBSTtnQkFDckMsS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7b0JBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtvQkFDZixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87aUJBQ3JCLENBQUMsQ0FBQzthQUNILENBQUMsQ0FBQztTQUNILENBQUMsQ0FBQztLQUNKO0lBQ0Q7Ozs7O09BS0c7Ozs7Ozs7OztJQUNILDBCQUFFOzs7Ozs7OztJQUFGLFVBQU0sT0FBTztRQUFiLGlCQU9DO1FBTkEscUJBQU0sU0FBUyxHQUFHLElBQUksVUFBVSxDQUFJLFVBQUEsUUFBUTtZQUMzQyxLQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBQyxJQUFPO2dCQUMvQixRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3BCLENBQUMsQ0FBQztTQUNILENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxTQUFTLENBQUM7S0FDakI7SUFDRDs7Ozs7T0FLRzs7Ozs7Ozs7O0lBQ0gsNEJBQUk7Ozs7Ozs7O0lBQUosVUFBSyxPQUFlLEVBQUUsT0FBWTtRQUNqQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDbkM7O2dCQS9DRCxVQUFVLFNBQUM7b0JBQ1gsVUFBVSxFQUFFLE1BQU07aUJBQ2xCOzs7O2dCQUxRLDBCQUEwQjtnQkFOMUIsS0FBSzs7O3dCQUhkOztTQWVhLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IG1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgKiBhcyBfaW8gZnJvbSBcInNvY2tldC5pby1jbGllbnRcIjtcclxuY29uc3QgaW8gPSBfaW87XHJcblxyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi9zb2NrZXQucmVkdWNlclwiO1xyXG5cclxuaW1wb3J0IHsgU29ja2V0Q29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9zb2NrZXQtY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFNvY2tldFJ1blN1Y2Nlc3NmdWxseUFjdGlvbiB9IGZyb20gXCIuLi9zb2NrZXQuYWN0aW9uc1wiO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46IFwicm9vdFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTb2NrZXRTZXJ2aWNlIHtcclxuXHRzb2NrZXQ6IGFueTtcclxuXHR1cmk6IHN0cmluZztcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IFNvY2tldENvbmZpZ3VyYXRpb25TZXJ2aWNlLCBwcml2YXRlIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4pIHtcclxuXHRcdHRoaXMuY29uZmlnU2VydmljZS5jb25maWckXHJcblx0XHRcdC5waXBlKFxyXG5cdFx0XHRcdG1hcChjb25maWcgPT4gY29uZmlnLmVudi5mcm9udGVuZF9zZXJ2ZXIpLFxyXG5cdFx0XHRcdG1hcCh1cmkgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2codXJpLCB0aGlzLmNvbmZpZ1NlcnZpY2UuY29uZmlnKTtcclxuXHRcdFx0XHRcdHRoaXMuc29ja2V0ID0gaW8odXJpKTtcclxuXHRcdFx0XHRcdHJldHVybiB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBTb2NrZXRSdW5TdWNjZXNzZnVsbHlBY3Rpb24oKSk7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KVxyXG5cdFx0XHQuc3Vic2NyaWJlKCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLnNvY2tldC5vbihcIkRJU1BBVENIX0FDVElPTlwiLCBkYXRhID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2goe1xyXG5cdFx0XHRcdFx0XHR0eXBlOiBkYXRhLnR5cGUsXHJcblx0XHRcdFx0XHRcdHBheWxvYWQ6IGRhdGEucGF5bG9hZFxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxuXHQvKipcclxuXHQgKiBAZXhhbXBsZVxyXG5cdCAqIHRoaXMuc29ja2V0U2VydmljZS5vbjxudW1iZXI+KFwiY2huYWdlLW51bWJlclwiKS5zdWJzY3JpYmUoZGF0YT0+e30pXHJcblx0ICogQHJldHVybnNcclxuXHQgKiBPYnNlcnZhYmxlPFQ+XHJcblx0ICovXHJcblx0b248VD4obWVzc2FnZSk6IE9ic2VydmFibGU8VD4ge1xyXG5cdFx0Y29uc3Qgb2JzZXJ2ZXIkID0gbmV3IE9ic2VydmFibGU8VD4ob2JzZXJ2ZXIgPT4ge1xyXG5cdFx0XHR0aGlzLnNvY2tldC5vbihtZXNzYWdlLCAoZGF0YTogVCkgPT4ge1xyXG5cdFx0XHRcdG9ic2VydmVyLm5leHQoZGF0YSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gb2JzZXJ2ZXIkO1xyXG5cdH1cclxuXHQvKipcclxuXHQgKiBAZXhhbXBsZVxyXG5cdCAqIHRoaXMuc29ja2V0U2VydmljZS5lbWl0KFwiY2huYWdlLW51bWJlclwiLHtudW1iZXI6Mn0pXHJcblx0ICogQHJldHVybnNcclxuXHQgKiB2b2lkXHJcblx0ICovXHJcblx0ZW1pdChtZXNzYWdlOiBzdHJpbmcsIHBheWxvYWQ6IGFueSk6IHZvaWQge1xyXG5cdFx0dGhpcy5zb2NrZXQuZW1pdChtZXNzYWdlLCBwYXlsb2FkKTtcclxuXHR9XHJcbn1cclxuIl19