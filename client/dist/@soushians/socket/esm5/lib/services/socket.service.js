/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Store } from "@ngrx/store";
import * as _io from "socket.io-client";
import * as i0 from "@angular/core";
import * as i1 from "./socket-configuration.service";
import * as i2 from "@ngrx/store";
/** @type {?} */
var io = _io;
import { SocketConfigurationService } from "./socket-configuration.service";
import { SocketRunSuccessfullyAction } from "../socket.actions";
var SocketService = /** @class */ (function () {
    function SocketService(configService, store) {
        var _this = this;
        this.configService = configService;
        this.store = store;
        this.configService.config$
            .pipe(map((/**
         * @param {?} config
         * @return {?}
         */
        function (config) { return config.env.frontend_server; })), map((/**
         * @param {?} uri
         * @return {?}
         */
        function (uri) {
            // console.log(uri, this.configService.config);
            _this.socket = io(uri);
            return _this.store.dispatch(new SocketRunSuccessfullyAction());
        })))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.socket.on("DISPATCH_ACTION", (/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                _this.store.dispatch({
                    type: data.type,
                    payload: data.payload
                });
            }));
        }));
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
        /** @type {?} */
        var observer$ = new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            _this.socket.on(message, (/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                observer.next(data);
            }));
        }));
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
                },] }
    ];
    /** @nocollapse */
    SocketService.ctorParameters = function () { return [
        { type: SocketConfigurationService },
        { type: Store }
    ]; };
    /** @nocollapse */ SocketService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function SocketService_Factory() { return new SocketService(i0.ɵɵinject(i1.SocketConfigurationService), i0.ɵɵinject(i2.Store)); }, token: SocketService, providedIn: "root" });
    return SocketService;
}());
export { SocketService };
if (false) {
    /** @type {?} */
    SocketService.prototype.socket;
    /** @type {?} */
    SocketService.prototype.uri;
    /**
     * @type {?}
     * @private
     */
    SocketService.prototype.configService;
    /**
     * @type {?}
     * @private
     */
    SocketService.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ja2V0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3NvY2tldC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9zb2NrZXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3BDLE9BQU8sS0FBSyxHQUFHLE1BQU0sa0JBQWtCLENBQUM7Ozs7O0lBQ2xDLEVBQUUsR0FBRyxHQUFHO0FBSWQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDNUUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFaEU7SUFNQyx1QkFBb0IsYUFBeUMsRUFBVSxLQUFzQjtRQUE3RixpQkFrQkM7UUFsQm1CLGtCQUFhLEdBQWIsYUFBYSxDQUE0QjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWlCO1FBQzVGLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTzthQUN4QixJQUFJLENBQ0osR0FBRzs7OztRQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQTFCLENBQTBCLEVBQUMsRUFDekMsR0FBRzs7OztRQUFDLFVBQUEsR0FBRztZQUNOLCtDQUErQztZQUMvQyxLQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN0QixPQUFPLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksMkJBQTJCLEVBQUUsQ0FBQyxDQUFDO1FBQy9ELENBQUMsRUFBQyxDQUNGO2FBQ0EsU0FBUzs7O1FBQUM7WUFDVixLQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxpQkFBaUI7Ozs7WUFBRSxVQUFBLElBQUk7Z0JBQ3JDLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO29CQUNuQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7b0JBQ2YsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO2lCQUNyQixDQUFDLENBQUM7WUFDSixDQUFDLEVBQUMsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztJQUNEOzs7OztPQUtHOzs7Ozs7Ozs7SUFDSCwwQkFBRTs7Ozs7Ozs7SUFBRixVQUFNLE9BQU87UUFBYixpQkFPQzs7WUFOTSxTQUFTLEdBQUcsSUFBSSxVQUFVOzs7O1FBQUksVUFBQSxRQUFRO1lBQzNDLEtBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU87Ozs7WUFBRSxVQUFDLElBQU87Z0JBQy9CLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDckIsQ0FBQyxFQUFDLENBQUM7UUFDSixDQUFDLEVBQUM7UUFDRixPQUFPLFNBQVMsQ0FBQztJQUNsQixDQUFDO0lBQ0Q7Ozs7O09BS0c7Ozs7Ozs7OztJQUNILDRCQUFJOzs7Ozs7OztJQUFKLFVBQUssT0FBZSxFQUFFLE9BQVk7UUFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7O2dCQS9DRCxVQUFVLFNBQUM7b0JBQ1gsVUFBVSxFQUFFLE1BQU07aUJBQ2xCOzs7O2dCQUxRLDBCQUEwQjtnQkFOMUIsS0FBSzs7O3dCQUhkO0NBNERDLEFBaERELElBZ0RDO1NBN0NZLGFBQWE7OztJQUN6QiwrQkFBWTs7SUFDWiw0QkFBWTs7Ozs7SUFDQSxzQ0FBaUQ7Ozs7O0lBQUUsOEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBtYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0ICogYXMgX2lvIGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCI7XHJcbmNvbnN0IGlvID0gX2lvO1xyXG5cclxuaW1wb3J0IHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vc29ja2V0LnJlZHVjZXJcIjtcclxuXHJcbmltcG9ydCB7IFNvY2tldENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vc29ja2V0LWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBTb2NrZXRSdW5TdWNjZXNzZnVsbHlBY3Rpb24gfSBmcm9tIFwiLi4vc29ja2V0LmFjdGlvbnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgU29ja2V0U2VydmljZSB7XHJcblx0c29ja2V0OiBhbnk7XHJcblx0dXJpOiBzdHJpbmc7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBTb2NrZXRDb25maWd1cmF0aW9uU2VydmljZSwgcHJpdmF0ZSBzdG9yZTogU3RvcmU8QXBwU3RhdGU+KSB7XHJcblx0XHR0aGlzLmNvbmZpZ1NlcnZpY2UuY29uZmlnJFxyXG5cdFx0XHQucGlwZShcclxuXHRcdFx0XHRtYXAoY29uZmlnID0+IGNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyKSxcclxuXHRcdFx0XHRtYXAodXJpID0+IHtcclxuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKHVyaSwgdGhpcy5jb25maWdTZXJ2aWNlLmNvbmZpZyk7XHJcblx0XHRcdFx0XHR0aGlzLnNvY2tldCA9IGlvKHVyaSk7XHJcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgU29ja2V0UnVuU3VjY2Vzc2Z1bGx5QWN0aW9uKCkpO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdClcclxuXHRcdFx0LnN1YnNjcmliZSgoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5zb2NrZXQub24oXCJESVNQQVRDSF9BQ1RJT05cIiwgZGF0YSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKHtcclxuXHRcdFx0XHRcdFx0dHlwZTogZGF0YS50eXBlLFxyXG5cdFx0XHRcdFx0XHRwYXlsb2FkOiBkYXRhLnBheWxvYWRcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHR9XHJcblx0LyoqXHJcblx0ICogQGV4YW1wbGVcclxuXHQgKiB0aGlzLnNvY2tldFNlcnZpY2Uub248bnVtYmVyPihcImNobmFnZS1udW1iZXJcIikuc3Vic2NyaWJlKGRhdGE9Pnt9KVxyXG5cdCAqIEByZXR1cm5zXHJcblx0ICogT2JzZXJ2YWJsZTxUPlxyXG5cdCAqL1xyXG5cdG9uPFQ+KG1lc3NhZ2UpOiBPYnNlcnZhYmxlPFQ+IHtcclxuXHRcdGNvbnN0IG9ic2VydmVyJCA9IG5ldyBPYnNlcnZhYmxlPFQ+KG9ic2VydmVyID0+IHtcclxuXHRcdFx0dGhpcy5zb2NrZXQub24obWVzc2FnZSwgKGRhdGE6IFQpID0+IHtcclxuXHRcdFx0XHRvYnNlcnZlci5uZXh0KGRhdGEpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIG9ic2VydmVyJDtcclxuXHR9XHJcblx0LyoqXHJcblx0ICogQGV4YW1wbGVcclxuXHQgKiB0aGlzLnNvY2tldFNlcnZpY2UuZW1pdChcImNobmFnZS1udW1iZXJcIix7bnVtYmVyOjJ9KVxyXG5cdCAqIEByZXR1cm5zXHJcblx0ICogdm9pZFxyXG5cdCAqL1xyXG5cdGVtaXQobWVzc2FnZTogc3RyaW5nLCBwYXlsb2FkOiBhbnkpOiB2b2lkIHtcclxuXHRcdHRoaXMuc29ja2V0LmVtaXQobWVzc2FnZSwgcGF5bG9hZCk7XHJcblx0fVxyXG59XHJcbiJdfQ==