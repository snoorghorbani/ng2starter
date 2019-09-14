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
const io = _io;
import { SocketConfigurationService } from "./socket-configuration.service";
import { SocketRunSuccessfullyAction } from "../socket.actions";
export class SocketService {
    /**
     * @param {?} configService
     * @param {?} store
     */
    constructor(configService, store) {
        this.configService = configService;
        this.store = store;
        this.configService.config$
            .pipe(map((/**
         * @param {?} config
         * @return {?}
         */
        config => config.env.frontend_server)), map((/**
         * @param {?} uri
         * @return {?}
         */
        uri => {
            // console.log(uri, this.configService.config);
            this.socket = io(uri);
            return this.store.dispatch(new SocketRunSuccessfullyAction());
        })))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.socket.on("DISPATCH_ACTION", (/**
             * @param {?} data
             * @return {?}
             */
            data => {
                this.store.dispatch({
                    type: data.type,
                    payload: data.payload
                });
            }));
        }));
    }
    /**
     * \@example
     * this.socketService.on<number>("chnage-number").subscribe(data=>{})
     * @template T
     * @param {?} message
     * @return {?}
     * Observable<T>
     */
    on(message) {
        /** @type {?} */
        const observer$ = new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        observer => {
            this.socket.on(message, (/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                observer.next(data);
            }));
        }));
        return observer$;
    }
    /**
     * \@example
     * this.socketService.emit("chnage-number",{number:2})
     * @param {?} message
     * @param {?} payload
     * @return {?}
     * void
     */
    emit(message, payload) {
        this.socket.emit(message, payload);
    }
}
SocketService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] }
];
/** @nocollapse */
SocketService.ctorParameters = () => [
    { type: SocketConfigurationService },
    { type: Store }
];
/** @nocollapse */ SocketService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function SocketService_Factory() { return new SocketService(i0.ɵɵinject(i1.SocketConfigurationService), i0.ɵɵinject(i2.Store)); }, token: SocketService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ja2V0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3NvY2tldC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9zb2NrZXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3BDLE9BQU8sS0FBSyxHQUFHLE1BQU0sa0JBQWtCLENBQUM7Ozs7O01BQ2xDLEVBQUUsR0FBRyxHQUFHO0FBSWQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDNUUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFLaEUsTUFBTSxPQUFPLGFBQWE7Ozs7O0lBR3pCLFlBQW9CLGFBQXlDLEVBQVUsS0FBc0I7UUFBekUsa0JBQWEsR0FBYixhQUFhLENBQTRCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBaUI7UUFDNUYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPO2FBQ3hCLElBQUksQ0FDSixHQUFHOzs7O1FBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBQyxFQUN6QyxHQUFHOzs7O1FBQUMsR0FBRyxDQUFDLEVBQUU7WUFDVCwrQ0FBK0M7WUFDL0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLDJCQUEyQixFQUFFLENBQUMsQ0FBQztRQUMvRCxDQUFDLEVBQUMsQ0FDRjthQUNBLFNBQVM7OztRQUFDLEdBQUcsRUFBRTtZQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLGlCQUFpQjs7OztZQUFFLElBQUksQ0FBQyxFQUFFO2dCQUN4QyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztvQkFDbkIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO29CQUNmLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztpQkFDckIsQ0FBQyxDQUFDO1lBQ0osQ0FBQyxFQUFDLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7Ozs7OztJQU9ELEVBQUUsQ0FBSSxPQUFPOztjQUNOLFNBQVMsR0FBRyxJQUFJLFVBQVU7Ozs7UUFBSSxRQUFRLENBQUMsRUFBRTtZQUM5QyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPOzs7O1lBQUUsQ0FBQyxJQUFPLEVBQUUsRUFBRTtnQkFDbkMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNyQixDQUFDLEVBQUMsQ0FBQztRQUNKLENBQUMsRUFBQztRQUNGLE9BQU8sU0FBUyxDQUFDO0lBQ2xCLENBQUM7Ozs7Ozs7OztJQU9ELElBQUksQ0FBQyxPQUFlLEVBQUUsT0FBWTtRQUNqQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7O1lBL0NELFVBQVUsU0FBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQjs7OztZQUxRLDBCQUEwQjtZQU4xQixLQUFLOzs7OztJQWFiLCtCQUFZOztJQUNaLDRCQUFZOzs7OztJQUNBLHNDQUFpRDs7Ozs7SUFBRSw4QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IG1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgKiBhcyBfaW8gZnJvbSBcInNvY2tldC5pby1jbGllbnRcIjtcclxuY29uc3QgaW8gPSBfaW87XHJcblxyXG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi9zb2NrZXQucmVkdWNlclwiO1xyXG5cclxuaW1wb3J0IHsgU29ja2V0Q29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9zb2NrZXQtY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFNvY2tldFJ1blN1Y2Nlc3NmdWxseUFjdGlvbiB9IGZyb20gXCIuLi9zb2NrZXQuYWN0aW9uc1wiO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG5cdHByb3ZpZGVkSW46IFwicm9vdFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTb2NrZXRTZXJ2aWNlIHtcclxuXHRzb2NrZXQ6IGFueTtcclxuXHR1cmk6IHN0cmluZztcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IFNvY2tldENvbmZpZ3VyYXRpb25TZXJ2aWNlLCBwcml2YXRlIHN0b3JlOiBTdG9yZTxBcHBTdGF0ZT4pIHtcclxuXHRcdHRoaXMuY29uZmlnU2VydmljZS5jb25maWckXHJcblx0XHRcdC5waXBlKFxyXG5cdFx0XHRcdG1hcChjb25maWcgPT4gY29uZmlnLmVudi5mcm9udGVuZF9zZXJ2ZXIpLFxyXG5cdFx0XHRcdG1hcCh1cmkgPT4ge1xyXG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2codXJpLCB0aGlzLmNvbmZpZ1NlcnZpY2UuY29uZmlnKTtcclxuXHRcdFx0XHRcdHRoaXMuc29ja2V0ID0gaW8odXJpKTtcclxuXHRcdFx0XHRcdHJldHVybiB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBTb2NrZXRSdW5TdWNjZXNzZnVsbHlBY3Rpb24oKSk7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KVxyXG5cdFx0XHQuc3Vic2NyaWJlKCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLnNvY2tldC5vbihcIkRJU1BBVENIX0FDVElPTlwiLCBkYXRhID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2goe1xyXG5cdFx0XHRcdFx0XHR0eXBlOiBkYXRhLnR5cGUsXHJcblx0XHRcdFx0XHRcdHBheWxvYWQ6IGRhdGEucGF5bG9hZFxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxuXHQvKipcclxuXHQgKiBAZXhhbXBsZVxyXG5cdCAqIHRoaXMuc29ja2V0U2VydmljZS5vbjxudW1iZXI+KFwiY2huYWdlLW51bWJlclwiKS5zdWJzY3JpYmUoZGF0YT0+e30pXHJcblx0ICogQHJldHVybnNcclxuXHQgKiBPYnNlcnZhYmxlPFQ+XHJcblx0ICovXHJcblx0b248VD4obWVzc2FnZSk6IE9ic2VydmFibGU8VD4ge1xyXG5cdFx0Y29uc3Qgb2JzZXJ2ZXIkID0gbmV3IE9ic2VydmFibGU8VD4ob2JzZXJ2ZXIgPT4ge1xyXG5cdFx0XHR0aGlzLnNvY2tldC5vbihtZXNzYWdlLCAoZGF0YTogVCkgPT4ge1xyXG5cdFx0XHRcdG9ic2VydmVyLm5leHQoZGF0YSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gb2JzZXJ2ZXIkO1xyXG5cdH1cclxuXHQvKipcclxuXHQgKiBAZXhhbXBsZVxyXG5cdCAqIHRoaXMuc29ja2V0U2VydmljZS5lbWl0KFwiY2huYWdlLW51bWJlclwiLHtudW1iZXI6Mn0pXHJcblx0ICogQHJldHVybnNcclxuXHQgKiB2b2lkXHJcblx0ICovXHJcblx0ZW1pdChtZXNzYWdlOiBzdHJpbmcsIHBheWxvYWQ6IGFueSk6IHZvaWQge1xyXG5cdFx0dGhpcy5zb2NrZXQuZW1pdChtZXNzYWdlLCBwYXlsb2FkKTtcclxuXHR9XHJcbn1cclxuIl19