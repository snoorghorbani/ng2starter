/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { connect } from "socket.io-client";
import { SocketConfigurationService } from "./socket-configuration.service";
import { SocketRunSuccessfullyAction } from "../socket.actions";
import * as i0 from "@angular/core";
import * as i1 from "./socket-configuration.service";
import * as i2 from "@ngrx/store";
export class SocketService {
    /**
     * @param {?} configService
     * @param {?} store
     */
    constructor(configService, store) {
        this.configService = configService;
        this.store = store;
        this.configService.config$
            .pipe(map((config) => (config.env.production ? config.production_uri : config.development_uri)), map((uri) => {
            this.socket = connect(uri);
            return this.store.dispatch(new SocketRunSuccessfullyAction());
        }))
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
     * \@example
     * this.socketService.on<number>("chnage-number").subscribe(data=>{})
     * @template T
     * @param {?} message
     * @return {?}
     * Observable<T>
     */
    on(message) {
        const /** @type {?} */ observer$ = new Observable((observer) => {
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
    { type: SocketConfigurationService, },
    { type: Store, },
];
/** @nocollapse */ SocketService.ngInjectableDef = i0.defineInjectable({ factory: function SocketService_Factory() { return new SocketService(i0.inject(i1.SocketConfigurationService), i0.inject(i2.Store)); }, token: SocketService, providedIn: "root" });
function SocketService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    SocketService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    SocketService.ctorParameters;
    /** @type {?} */
    SocketService.prototype.socket;
    /** @type {?} */
    SocketService.prototype.uri;
    /** @type {?} */
    SocketService.prototype.configService;
    /** @type {?} */
    SocketService.prototype.store;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ja2V0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3NvY2tldC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9zb2NrZXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxPQUFPLEVBQVUsTUFBTSxrQkFBa0IsQ0FBQztBQUtuRCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQUtoRSxNQUFNOzs7OztJQUdMLFlBQW9CLGFBQXlDLEVBQVUsS0FBc0I7UUFBekUsa0JBQWEsR0FBYixhQUFhLENBQTRCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBaUI7UUFDNUYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPO2FBQ3hCLElBQUksQ0FDSixHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxFQUN6RixHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNYLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLDJCQUEyQixFQUFFLENBQUMsQ0FBQztTQUM5RCxDQUFDLENBQ0Y7YUFDQSxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDMUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7b0JBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtvQkFDZixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87aUJBQ3JCLENBQUMsQ0FBQzthQUNILENBQUMsQ0FBQztTQUNILENBQUMsQ0FBQztLQUNKOzs7Ozs7Ozs7SUFPRCxFQUFFLENBQUksT0FBTztRQUNaLHVCQUFNLFNBQVMsR0FBRyxJQUFJLFVBQVUsQ0FBSSxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQ2hELElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQU8sRUFBRSxFQUFFO2dCQUNuQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3BCLENBQUMsQ0FBQztTQUNILENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxTQUFTLENBQUM7S0FDakI7Ozs7Ozs7OztJQU9ELElBQUksQ0FBQyxPQUFlLEVBQUUsT0FBWTtRQUNqQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDbkM7OztZQTlDRCxVQUFVLFNBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEI7Ozs7WUFMUSwwQkFBMEI7WUFOMUIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgbWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QsIFNvY2tldCB9IGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCI7XHJcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uL3NvY2tldC5yZWR1Y2VyXCI7XHJcblxyXG5pbXBvcnQgeyBnZXRTb2NrZXRNb2R1bGVDb25maWcgfSBmcm9tIFwiQHNvdXNoaWFucy9jb25maWdcIjtcclxuXHJcbmltcG9ydCB7IFNvY2tldENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vc29ja2V0LWNvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBTb2NrZXRSdW5TdWNjZXNzZnVsbHlBY3Rpb24gfSBmcm9tIFwiLi4vc29ja2V0LmFjdGlvbnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgU29ja2V0U2VydmljZSB7XHJcblx0c29ja2V0OiBTb2NrZXRJT0NsaWVudC5Tb2NrZXQ7XHJcblx0dXJpOiBzdHJpbmc7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBTb2NrZXRDb25maWd1cmF0aW9uU2VydmljZSwgcHJpdmF0ZSBzdG9yZTogU3RvcmU8QXBwU3RhdGU+KSB7XHJcblx0XHR0aGlzLmNvbmZpZ1NlcnZpY2UuY29uZmlnJFxyXG5cdFx0XHQucGlwZShcclxuXHRcdFx0XHRtYXAoKGNvbmZpZykgPT4gKGNvbmZpZy5lbnYucHJvZHVjdGlvbiA/IGNvbmZpZy5wcm9kdWN0aW9uX3VyaSA6IGNvbmZpZy5kZXZlbG9wbWVudF91cmkpKSxcclxuXHRcdFx0XHRtYXAoKHVyaSkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5zb2NrZXQgPSBjb25uZWN0KHVyaSk7XHJcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgU29ja2V0UnVuU3VjY2Vzc2Z1bGx5QWN0aW9uKCkpO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdClcclxuXHRcdFx0LnN1YnNjcmliZSgoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5zb2NrZXQub24oXCJESVNQQVRDSF9BQ1RJT05cIiwgKGRhdGEpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2goe1xyXG5cdFx0XHRcdFx0XHR0eXBlOiBkYXRhLnR5cGUsXHJcblx0XHRcdFx0XHRcdHBheWxvYWQ6IGRhdGEucGF5bG9hZFxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxuXHQvKipcclxuXHQgKiBAZXhhbXBsZVxyXG5cdCAqIHRoaXMuc29ja2V0U2VydmljZS5vbjxudW1iZXI+KFwiY2huYWdlLW51bWJlclwiKS5zdWJzY3JpYmUoZGF0YT0+e30pXHJcblx0ICogQHJldHVybnNcclxuXHQgKiBPYnNlcnZhYmxlPFQ+XHJcblx0ICovXHJcblx0b248VD4obWVzc2FnZSk6IE9ic2VydmFibGU8VD4ge1xyXG5cdFx0Y29uc3Qgb2JzZXJ2ZXIkID0gbmV3IE9ic2VydmFibGU8VD4oKG9ic2VydmVyKSA9PiB7XHJcblx0XHRcdHRoaXMuc29ja2V0Lm9uKG1lc3NhZ2UsIChkYXRhOiBUKSA9PiB7XHJcblx0XHRcdFx0b2JzZXJ2ZXIubmV4dChkYXRhKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiBvYnNlcnZlciQ7XHJcblx0fVxyXG5cdC8qKlxyXG5cdCAqIEBleGFtcGxlXHJcblx0ICogdGhpcy5zb2NrZXRTZXJ2aWNlLmVtaXQoXCJjaG5hZ2UtbnVtYmVyXCIse251bWJlcjoyfSlcclxuXHQgKiBAcmV0dXJuc1xyXG5cdCAqIHZvaWRcclxuXHQgKi9cclxuXHRlbWl0KG1lc3NhZ2U6IHN0cmluZywgcGF5bG9hZDogYW55KTogdm9pZCB7XHJcblx0XHR0aGlzLnNvY2tldC5lbWl0KG1lc3NhZ2UsIHBheWxvYWQpO1xyXG5cdH1cclxufVxyXG4iXX0=