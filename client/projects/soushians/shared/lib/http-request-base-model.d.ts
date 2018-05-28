import { HttpParams } from "@angular/common/http";
export declare abstract class HttpRequestBaseModel<T> {
    constructor();
    abstract getRequestBody?<K extends keyof T>(keys: any): {
        [key: string]: any;
    };
    abstract getRequestQueryParams?<K extends keyof T>(keys: any): HttpParams;
}
