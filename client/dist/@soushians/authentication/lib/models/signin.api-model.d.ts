import { HttpRequestBaseModel, HttpResponseBaseModel } from "@soushians/shared";
import { UserModel } from "../models";
export declare namespace Signin_ApiModel {
    class Request implements HttpRequestBaseModel<Request> {
    }
    class Response implements HttpResponseBaseModel<Response> {
        Result: {
            User: UserModel;
        };
        constructor(params: Response);
        extractData(): UserModel;
    }
}
