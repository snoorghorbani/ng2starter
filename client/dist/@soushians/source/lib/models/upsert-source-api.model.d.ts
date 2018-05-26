import { FormGroup } from "@angular/forms";
import { SourceModel } from "../models";
export declare namespace UpsertSourceApiModel {
    class Request {
        _id: string;
        Endpoint: string;
        Interval: number;
        IsActive: boolean;
        Thresholds: {
            Name: string;
            Formula: string;
            Message: string;
            Type: boolean;
        }[];
        constructor(initValue?: Request);
        getRequestBody(): {
            _id: string;
            Endpoint: string;
            Interval: number;
            IsActive: boolean;
            Thresholds: {
                Name: string;
                Formula: string;
                Message: string;
                Type: boolean;
            }[];
        };
        static readonly formGroup: FormGroup;
    }
    class Response {
        Result: SourceModel;
        constructor();
    }
}
