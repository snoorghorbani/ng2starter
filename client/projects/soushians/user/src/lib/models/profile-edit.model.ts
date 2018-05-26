import { Injectable } from "@angular/core";
import { HttpRequestBaseModel, HttpResponseBaseModel } from "@soushians/shared";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UserModel } from "./user.model";

export module EditProfile_ApiModel {
    export class Request implements HttpRequestBaseModel<Request>{
        Email: string;
        Roles: string[];
        Groups: string[];

        constructor(initValue: Request = {} as Request) {
            Object.keys(initValue).forEach(key => this[key] = initValue[key]);
        }

        getRequestBody() {
            return this;
        }

        static get formGroup() {
            return new FormGroup({
                Email: new FormControl(null, [Validators.required]),
                Roles: new FormControl(null, [Validators.required]),
                Groups: new FormControl(null, [Validators.required]),
            })
        }
    }

    export class Response implements HttpResponseBaseModel<Response>{
        Result: { User: UserModel };
        constructor(initValue: Response = {} as Response) {
            Object.keys(initValue).forEach(key => this[key] = initValue[key]);
        }
        extractData() {
            return this.Result.User;
        }
    }
}