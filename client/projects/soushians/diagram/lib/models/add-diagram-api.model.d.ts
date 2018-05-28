import { FormGroup } from "@angular/forms";
import { HttpRequestBaseModel } from "@soushians/shared";
import { DiagramModel } from "./diagram.model";
import { SourceModel } from "./source.model";
export declare namespace AddDiagramApiModel {
    class Request implements HttpRequestBaseModel<Request> {
        _id: string;
        Name: string;
        IsActive: Boolean;
        Type: string;
        Types: {
            [columnLabel: string]: string;
        };
        Legend: Boolean;
        Subchart: Boolean;
        Zoom: Boolean;
        Tooltip: Boolean;
        Route: string;
        Sync: number;
        Colors: string[];
        ColumnMappings: {
            NamePath: string;
            ValuePath: string;
        }[];
        Flow: string;
        columns: any[];
        Cols: number;
        Rows: number;
        TextColor: String;
        BackgroundColor: string;
        booleano: any;
        Source: SourceModel;
        Groups: string[];
        constructor(initValue?: AddDiagramApiModel.Request);
        getRequestBody(): {
            _id: string;
            Name: string;
            IsActive: Boolean;
            Source: SourceModel;
            Type: string;
            Groups: string[];
            Widget: {
                booleano: any;
            };
            Chart: {
                data: {
                    type: string;
                    columns: any[];
                    colors: string[];
                    types: {
                        [columnLabel: string]: string;
                    };
                };
                ColumnMappings: {
                    NamePath: string;
                    ValuePath: string;
                }[];
                Flow: string;
                legend: {
                    show: Boolean;
                };
                subchart: {
                    show: Boolean;
                };
                zoom: {
                    enabled: Boolean;
                };
                tooltip: {
                    grouped: Boolean;
                };
            };
            Box: {
                Cols: number;
                Rows: number;
                TextColor: String;
                BackgroundColor: string;
            };
        };
        static readonly formGroup: FormGroup;
    }
    class Response {
        Result: DiagramModel;
        constructor();
    }
}
