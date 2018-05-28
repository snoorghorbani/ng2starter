import { HttpRequestBaseModel } from "@soushians/shared";
import { FormGroup } from "@angular/forms";
export declare module ResetPasswordRequestModel {
    class Request implements HttpRequestBaseModel<Request> {
        Username: string;
        Token: string;
        Captcha: string;
        Type: 'sms' | 'email';
        constructor(initValue?: ResetPasswordRequestModel.Request);
        getRequestBody(): {
            Username: string;
            Token: string;
            Captcha: string;
        };
        static readonly formGroup: FormGroup;
    }
    class Response {
        constructor();
    }
}
