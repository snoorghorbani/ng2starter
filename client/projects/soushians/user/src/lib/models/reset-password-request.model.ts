import { Injectable } from "@angular/core";
import { HttpRequestBaseModel } from "@soushians/shared";
import { FormGroup, FormControl, Validators } from "@angular/forms";

export module ResetPasswordRequestModel {

    export class Request implements HttpRequestBaseModel<Request>{

        Username: string;

        //@RequestBody("pegah")
        Token: string;

        //@UseIn('body')
        Captcha: string;

        //@UseIn('url')
        //@Validators([Validators.required])
        Type: 'sms' | 'email';

        constructor(initValue?: ResetPasswordRequestModel.Request) {
            Object.keys(initValue).forEach(key => this[key] = initValue[key]);
        }

        getRequestBody() {
            return {
                Username: this.Username,
                Token: this.Token,
                Captcha: this.Captcha
            }
        }

        static get formGroup() {
            return new FormGroup({
                Username: new FormControl('', [Validators.minLength(8), Validators.required]),
                Captcha: new FormControl(null, [Validators.required]),
                Token: new FormControl(null, [Validators.required]),
                Type: new FormControl('sms'),
            })
        }
    }

    export class Response {

        constructor() {
        }
    }

}
