import { HttpRequestBaseModel } from "@soushians/shared";
import { FormGroup } from "@angular/forms";
export declare namespace ChangePasswordModel {
    class Request implements HttpRequestBaseModel<Request> {
        Username: string;
        Password: string;
        constructor(initValue?: ChangePasswordModel.Request);
        getRequestBody(): {
            Password: string;
        };
        static readonly formGroup: FormGroup;
    }
    class Response {
        constructor();
    }
}
