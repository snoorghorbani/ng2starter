import { HttpRequestBaseModel } from "@soushians/shared";
import { FormGroup } from "@angular/forms";
import { FormSchemaModel } from "../models";
export declare namespace FormListApiModel {
    class Request implements HttpRequestBaseModel<Request> {
        Name: string;
        Controls: object[];
        constructor(initValue?: Request);
        getRequestBody(): {
            Name: string;
            Controls: object[];
        };
        static readonly formGroup: FormGroup;
    }
    class Response {
        Result: FormSchemaModel[];
        constructor();
    }
}
