import { Injectable } from "@angular/core";
import { HttpRequestBaseModel } from "@soushians/shared";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { FailedLoginModel } from './failed-login.model';

export module FailedLoginReportModel {
    export class Request implements HttpRequestBaseModel<Request>{
        Username: string;

        constructor(initValue?: FailedLoginReportModel.Request) {
            Object.keys(initValue).forEach(key => this[key] = initValue[key]);
        }

        getRequestBody() {
            return {
            }
        }

        static get formGroup() {
            return 
        }
    }

    export class Response  {
        data: FailedLoginModel[] = [];

        constructor() {
            
        }
    }
}