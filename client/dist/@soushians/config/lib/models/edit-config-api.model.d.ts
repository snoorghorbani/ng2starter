import { HttpRequestBaseModel } from "@soushians/shared";
import { FormGroup } from "@angular/forms";
import { ConfigModel } from "../models";
export declare module EditConfigApiModel {
    class Request implements HttpRequestBaseModel<Request> {
        Name: string;
        Config: {};
        constructor(initValue?: Request);
        getRequestBody(): {
            Name: string;
            Config: {};
        };
        static readonly formGroup: FormGroup;
    }
    class Response {
        Result: ConfigModel<any>;
        constructor();
    }
}
