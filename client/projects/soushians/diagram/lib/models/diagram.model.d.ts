import { SourceModel } from "./source.model";
export declare class DiagramModel {
    _id: string;
    Name: string;
    IsActive: boolean;
    Description: string;
    Groups: string[];
    Box: {
        NumberOfColumns: number;
        Order: number;
        BackgroundColor: string;
    };
    Source: SourceModel;
    Widget: {
        "booleano": {
            "SuccessMessage": string;
            "FailureMessage": string;
        };
    };
    Chart: {
        data: {
            type: "pie" | "linear" | "scatter" | "bar" | "line";
            types: {
                [key: string]: string;
            };
            columns: any[];
            colors: any[];
        };
        Flow: boolean;
        ColumnMappings: {
            NamePath: string;
            ValuePath: string;
        }[];
        legend: {
            show: boolean;
        };
        subchart: {
            show: boolean;
        };
        zoom: {
            enabled: boolean;
        };
        tooltip: {
            grouped: boolean;
        };
    };
}
