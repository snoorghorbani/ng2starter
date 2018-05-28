export declare class SourceModel {
    _id: string;
    Endpoint: string;
    Interval: number;
    IsActive: boolean;
    Thresholds: {
        Name: string;
        Formula: string;
        Message: string;
        Type: string;
    }[];
    constructor(initValue?: SourceModel);
}
