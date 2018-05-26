import { HttpRequestBaseModel } from "@soushians/shared";
import { FailedLoginModel } from './failed-login.model';
export declare module FailedLoginReportModel {
    class Request implements HttpRequestBaseModel<Request> {
        Username: string;
        constructor(initValue?: FailedLoginReportModel.Request);
        getRequestBody(): {};
        static readonly formGroup: void;
    }
    class Response {
        data: FailedLoginModel[];
        constructor();
    }
}
