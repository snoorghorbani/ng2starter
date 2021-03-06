import { HttpRequestBaseModel } from "@soushians/shared";
import { FormGroup } from "@angular/forms";
import { FormSchemaModel } from "../models";
export declare namespace EditFormApiModel {
    class Request implements HttpRequestBaseModel<Request> {
        _id: string;
        name: string;
        form: any[];
        events: any[];
        constructor(initValue?: Request);
        getRequestBody(): {
            _id: string;
            name: string;
            form: any[];
            events: any[];
        };
        static readonly formGroup: FormGroup;
    }
    class Response {
        Result: FormSchemaModel;
        constructor();
    }
}
