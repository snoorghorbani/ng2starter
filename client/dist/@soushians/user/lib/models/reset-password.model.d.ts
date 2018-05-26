import { HttpRequestBaseModel } from "@soushians/shared";
import { FormGroup } from "@angular/forms";
export declare namespace ResetPasswordModel {
    class Request implements HttpRequestBaseModel<Request> {
        Password: string;
        Token: string;
        constructor(initValue?: ResetPasswordModel.Request);
        getRequestBody(): {
            Password: string;
        };
        static readonly formGroup: FormGroup;
    }
    class Response {
        constructor();
    }
}
