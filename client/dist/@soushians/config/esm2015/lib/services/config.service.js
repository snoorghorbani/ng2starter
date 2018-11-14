/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { EditConfigApiModel } from "../models";
import { GetConfigAction } from "../actions";
import { ConfigurationService } from "./configuration.service";
import { take, map, catchError } from "rxjs/operators";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@ngrx/store";
import * as i3 from "./configuration.service";
export class ConfigService {
    /**
     * @param {?} http
     * @param {?} store
     * @param {?} configurationService
     */
    constructor(http, store, configurationService) {
        this.http = http;
        this.store = store;
        this.configurationService = configurationService;
        setTimeout(() => {
            this.store.dispatch(new GetConfigAction());
        }, 999);
    }
    /**
     * @return {?}
     */
    getConfigs() {
        return this.http
            .get(`${this.configurationService.config.env.frontend_server}/api/config`)
            .pipe(take(1), map((response) => response.Result), catchError(err => Observable.throw(err)));
    }
    /**
     * @param {?} name
     * @return {?}
     */
    getConfigByName(name) {
        return this.http.get(`${this.configurationService.config.env.frontend_server}/api/config/${name}`).pipe(map(response => response), catchError(err => {
            return Observable.throw(err);
        }));
    }
    /**
     * @param {?} body
     * @return {?}
     */
    editConfig(body) {
        /** @type {?} */
        const model = new EditConfigApiModel.Request(body);
        return this.http
            .put(`${this.configurationService.config.env.frontend_server}/api/config/${model.Name}`, model.getRequestBody())
            .pipe(map(response => response), catchError(err => {
            return Observable.throw(err);
        }));
    }
    /**
     * @return {?}
     */
    getLayoutConfigs() {
        return this.http.get(`${this.configurationService.config.env.frontend_server}/api/layout-config`).pipe(map((response) => response), catchError(err => {
            return Observable.throw(err);
        }));
    }
}
ConfigService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] },
];
/** @nocollapse */
ConfigService.ctorParameters = () => [
    { type: HttpClient },
    { type: Store },
    { type: ConfigurationService }
];
/** @nocollapse */ ConfigService.ngInjectableDef = i0.defineInjectable({ factory: function ConfigService_Factory() { return new ConfigService(i0.inject(i1.HttpClient), i0.inject(i2.Store), i0.inject(i3.ConfigurationService)); }, token: ConfigService, providedIn: "root" });
if (false) {
    /** @type {?} */
    ConfigService.prototype.responseCache;
    /** @type {?} */
    ConfigService.prototype.http;
    /** @type {?} */
    ConfigService.prototype.store;
    /** @type {?} */
    ConfigService.prototype.configurationService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2NvbmZpZy8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXBDLE9BQU8sRUFBRSxrQkFBa0IsRUFBbUMsTUFBTSxXQUFXLENBQUM7QUFHaEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUM3QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7QUFLdkQsTUFBTTs7Ozs7O0lBR0wsWUFDUyxNQUNBLE9BQ0E7UUFGQSxTQUFJLEdBQUosSUFBSTtRQUNKLFVBQUssR0FBTCxLQUFLO1FBQ0wseUJBQW9CLEdBQXBCLG9CQUFvQjtRQUU1QixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2YsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxlQUFlLEVBQUUsQ0FBQyxDQUFDO1NBQzNDLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDUjs7OztJQUVELFVBQVU7UUFDVCxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2QsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsZUFBZSxhQUFhLENBQUM7YUFDekUsSUFBSSxDQUNKLElBQUksQ0FBQyxDQUFDLENBQUMsRUFDUCxHQUFHLENBQUMsQ0FBQyxRQUFxQyxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQy9ELFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FDeEMsQ0FBQztLQUNIOzs7OztJQUNELGVBQWUsQ0FBQyxJQUFZO1FBQzNCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLGVBQWUsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQ3RHLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUN6QixVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDaEIsT0FBTyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzdCLENBQUMsQ0FDRixDQUFDO0tBQ0Y7Ozs7O0lBQ0QsVUFBVSxDQUFDLElBQWdDOztRQUMxQyxNQUFNLEtBQUssR0FBRyxJQUFJLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVuRCxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2QsR0FBRyxDQUNILEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsZUFBZSxlQUFlLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFDbEYsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUN0QjthQUNBLElBQUksQ0FDSixHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFDekIsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2hCLE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUM3QixDQUFDLENBQ0YsQ0FBQztLQUNIOzs7O0lBRUQsZ0JBQWdCO1FBQ2YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGVBQWUsb0JBQW9CLENBQUMsQ0FBQyxJQUFJLENBQ3JHLEdBQUcsQ0FBQyxDQUFDLFFBQWEsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQ2hDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNoQixPQUFPLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDN0IsQ0FBQyxDQUNGLENBQUM7S0FDRjs7O1lBeERELFVBQVUsU0FBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQjs7OztZQWJRLFVBQVU7WUFFVixLQUFLO1lBTUwsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBFZGl0Q29uZmlnQXBpTW9kZWwsIEdldENvbmZpZ3NBcGlNb2RlbCwgQ29uZmlnTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcblxyXG5pbXBvcnQgeyBDb25maWdTdGF0ZSB9IGZyb20gXCIuLi9yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBHZXRDb25maWdBY3Rpb24gfSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuL2NvbmZpZ3VyYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyB0YWtlLCBtYXAsIGNhdGNoRXJyb3IgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29uZmlnU2VydmljZSB7XHJcblx0cmVzcG9uc2VDYWNoZTogYW55O1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPENvbmZpZ1N0YXRlPixcclxuXHRcdHByaXZhdGUgY29uZmlndXJhdGlvblNlcnZpY2U6IENvbmZpZ3VyYXRpb25TZXJ2aWNlXHJcblx0KSB7XHJcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgR2V0Q29uZmlnQWN0aW9uKCkpO1xyXG5cdFx0fSwgOTk5KTtcclxuXHR9XHJcblxyXG5cdGdldENvbmZpZ3MoKTogT2JzZXJ2YWJsZTxDb25maWdNb2RlbDxhbnk+W10+IHtcclxuXHRcdHJldHVybiB0aGlzLmh0dHBcclxuXHRcdFx0LmdldChgJHt0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyfS9hcGkvY29uZmlnYClcclxuXHRcdFx0LnBpcGUoXHJcblx0XHRcdFx0dGFrZSgxKSxcclxuXHRcdFx0XHRtYXAoKHJlc3BvbnNlOiBHZXRDb25maWdzQXBpTW9kZWwuUmVzcG9uc2UpID0+IHJlc3BvbnNlLlJlc3VsdCksXHJcblx0XHRcdFx0Y2F0Y2hFcnJvcihlcnIgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnIpKVxyXG5cdFx0XHQpO1xyXG5cdH1cclxuXHRnZXRDb25maWdCeU5hbWUobmFtZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnLmVudi5mcm9udGVuZF9zZXJ2ZXJ9L2FwaS9jb25maWcvJHtuYW1lfWApLnBpcGUoXHJcblx0XHRcdG1hcChyZXNwb25zZSA9PiByZXNwb25zZSksXHJcblx0XHRcdGNhdGNoRXJyb3IoZXJyID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnIpO1xyXG5cdFx0XHR9KVxyXG5cdFx0KTtcclxuXHR9XHJcblx0ZWRpdENvbmZpZyhib2R5OiBFZGl0Q29uZmlnQXBpTW9kZWwuUmVxdWVzdCk6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHRjb25zdCBtb2RlbCA9IG5ldyBFZGl0Q29uZmlnQXBpTW9kZWwuUmVxdWVzdChib2R5KTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5odHRwXHJcblx0XHRcdC5wdXQoXHJcblx0XHRcdFx0YCR7dGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWcuZW52LmZyb250ZW5kX3NlcnZlcn0vYXBpL2NvbmZpZy8ke21vZGVsLk5hbWV9YCxcclxuXHRcdFx0XHRtb2RlbC5nZXRSZXF1ZXN0Qm9keSgpXHJcblx0XHRcdClcclxuXHRcdFx0LnBpcGUoXHJcblx0XHRcdFx0bWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlKSxcclxuXHRcdFx0XHRjYXRjaEVycm9yKGVyciA9PiB7XHJcblx0XHRcdFx0XHRyZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnIpO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCk7XHJcblx0fVxyXG5cclxuXHRnZXRMYXlvdXRDb25maWdzKCk6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyfS9hcGkvbGF5b3V0LWNvbmZpZ2ApLnBpcGUoXHJcblx0XHRcdG1hcCgocmVzcG9uc2U6IGFueSkgPT4gcmVzcG9uc2UpLFxyXG5cdFx0XHRjYXRjaEVycm9yKGVyciA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyKTtcclxuXHRcdFx0fSlcclxuXHRcdCk7XHJcblx0fVxyXG59XHJcbiJdfQ==