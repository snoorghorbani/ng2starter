import { HttpRequestBaseModel } from "@soushians/shared";
import { ConfigModel } from "./config.model";
export declare namespace GetConfigsApiModel {
    class Request implements HttpRequestBaseModel<Request> {
        constructor(initValue?: GetConfigsApiModel.Request);
        getRequestBody(): {};
    }
    class Response {
        Result: ConfigModel<any>[];
        constructor();
    }
}
