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
const /** @type {?} */ io = _io;
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
            .pipe(map(config => (config.env.production ? config.production_uri : config.development_uri)), map(uri => {
            this.socket = io(uri);
            return this.store.dispatch(new SocketRunSuccessfullyAction());
        }))
            .subscribe(() => {
            this.socket.on("DISPATCH_ACTION", data => {
                this.store.dispatch({
                    type: data.type,
                    payload: data.payload
                });
            });
        });
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
        const /** @type {?} */ observer$ = new Observable(observer => {
            this.socket.on(message, (data) => {
                observer.next(data);
            });
        });
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
            },] },
];
/** @nocollapse */
SocketService.ctorParameters = () => [
    { type: SocketConfigurationService },
    { type: Store }
];
/** @nocollapse */ SocketService.ngInjectableDef = i0.defineInjectable({ factory: function SocketService_Factory() { return new SocketService(i0.inject(i1.SocketConfigurationService), i0.inject(i2.Store)); }, token: SocketService, providedIn: "root" });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ja2V0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3NvY2tldC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9zb2NrZXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBSXBDLE9BQU8sS0FBSyxHQUFHLE1BQU0sa0JBQWtCLENBQUM7Ozs7QUFDeEMsdUJBQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQztBQUtmLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBS2hFLE1BQU07Ozs7O0lBR0wsWUFBb0IsYUFBeUMsRUFBVSxLQUFzQjtRQUF6RSxrQkFBYSxHQUFiLGFBQWEsQ0FBNEI7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFpQjtRQUM1RixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU87YUFDeEIsSUFBSSxDQUNKLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxFQUN2RixHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDVCxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSwyQkFBMkIsRUFBRSxDQUFDLENBQUM7U0FDOUQsQ0FBQyxDQUNGO2FBQ0EsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxFQUFFO2dCQUN4QyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztvQkFDbkIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO29CQUNmLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztpQkFDckIsQ0FBQyxDQUFDO2FBQ0gsQ0FBQyxDQUFDO1NBQ0gsQ0FBQyxDQUFDO0tBQ0o7Ozs7Ozs7OztJQU9ELEVBQUUsQ0FBSSxPQUFPO1FBQ1osdUJBQU0sU0FBUyxHQUFHLElBQUksVUFBVSxDQUFJLFFBQVEsQ0FBQyxFQUFFO1lBQzlDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQU8sRUFBRSxFQUFFO2dCQUNuQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3BCLENBQUMsQ0FBQztTQUNILENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxTQUFTLENBQUM7S0FDakI7Ozs7Ozs7OztJQU9ELElBQUksQ0FBQyxPQUFlLEVBQUUsT0FBWTtRQUNqQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDbkM7OztZQTlDRCxVQUFVLFNBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEI7Ozs7WUFMUSwwQkFBMEI7WUFWMUIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgbWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbi8vIGltcG9ydCAqIGFzIHNvY2tldElvIGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCI7XHJcbi8vIGNvbnN0IHNvY2tldElvID0gcmVxdWlyZShcInNvY2tldC5pby1jbGllbnRcIik7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kZWJ1Z2dlclxyXG5pbXBvcnQgKiBhcyBfaW8gZnJvbSBcInNvY2tldC5pby1jbGllbnRcIjtcclxuY29uc3QgaW8gPSBfaW87XHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uL3NvY2tldC5yZWR1Y2VyXCI7XHJcblxyXG5pbXBvcnQgeyBnZXRTb2NrZXRNb2R1bGVDb25maWcgfSBmcm9tIFwiQHNvdXNoaWFucy9jb25maWdcIjtcclxuXHJcbmltcG9ydCB7IFNvY2tldENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vc29ja2V0LWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBTb2NrZXRSdW5TdWNjZXNzZnVsbHlBY3Rpb24gfSBmcm9tIFwiLi4vc29ja2V0LmFjdGlvbnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgU29ja2V0U2VydmljZSB7XHJcblx0c29ja2V0OiBhbnk7XHJcblx0dXJpOiBzdHJpbmc7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBTb2NrZXRDb25maWd1cmF0aW9uU2VydmljZSwgcHJpdmF0ZSBzdG9yZTogU3RvcmU8QXBwU3RhdGU+KSB7XHJcblx0XHR0aGlzLmNvbmZpZ1NlcnZpY2UuY29uZmlnJFxyXG5cdFx0XHQucGlwZShcclxuXHRcdFx0XHRtYXAoY29uZmlnID0+IChjb25maWcuZW52LnByb2R1Y3Rpb24gPyBjb25maWcucHJvZHVjdGlvbl91cmkgOiBjb25maWcuZGV2ZWxvcG1lbnRfdXJpKSksXHJcblx0XHRcdFx0bWFwKHVyaSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnNvY2tldCA9IGlvKHVyaSk7XHJcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgU29ja2V0UnVuU3VjY2Vzc2Z1bGx5QWN0aW9uKCkpO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdClcclxuXHRcdFx0LnN1YnNjcmliZSgoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5zb2NrZXQub24oXCJESVNQQVRDSF9BQ1RJT05cIiwgZGF0YSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKHtcclxuXHRcdFx0XHRcdFx0dHlwZTogZGF0YS50eXBlLFxyXG5cdFx0XHRcdFx0XHRwYXlsb2FkOiBkYXRhLnBheWxvYWRcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHR9XHJcblx0LyoqXHJcblx0ICogQGV4YW1wbGVcclxuXHQgKiB0aGlzLnNvY2tldFNlcnZpY2Uub248bnVtYmVyPihcImNobmFnZS1udW1iZXJcIikuc3Vic2NyaWJlKGRhdGE9Pnt9KVxyXG5cdCAqIEByZXR1cm5zXHJcblx0ICogT2JzZXJ2YWJsZTxUPlxyXG5cdCAqL1xyXG5cdG9uPFQ+KG1lc3NhZ2UpOiBPYnNlcnZhYmxlPFQ+IHtcclxuXHRcdGNvbnN0IG9ic2VydmVyJCA9IG5ldyBPYnNlcnZhYmxlPFQ+KG9ic2VydmVyID0+IHtcclxuXHRcdFx0dGhpcy5zb2NrZXQub24obWVzc2FnZSwgKGRhdGE6IFQpID0+IHtcclxuXHRcdFx0XHRvYnNlcnZlci5uZXh0KGRhdGEpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIG9ic2VydmVyJDtcclxuXHR9XHJcblx0LyoqXHJcblx0ICogQGV4YW1wbGVcclxuXHQgKiB0aGlzLnNvY2tldFNlcnZpY2UuZW1pdChcImNobmFnZS1udW1iZXJcIix7bnVtYmVyOjJ9KVxyXG5cdCAqIEByZXR1cm5zXHJcblx0ICogdm9pZFxyXG5cdCAqL1xyXG5cdGVtaXQobWVzc2FnZTogc3RyaW5nLCBwYXlsb2FkOiBhbnkpOiB2b2lkIHtcclxuXHRcdHRoaXMuc29ja2V0LmVtaXQobWVzc2FnZSwgcGF5bG9hZCk7XHJcblx0fVxyXG59XHJcbiJdfQ==