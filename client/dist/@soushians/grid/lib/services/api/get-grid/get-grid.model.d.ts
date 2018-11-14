import { GridModel } from "../../../models/grid.model";
export declare namespace GetGridApiModel {
    class Request {
        _id: string;
        constructor(initValue?: {});
        getRequestBody(): {};
    }
    class Response {
        Result: GridModel;
        constructor();
    }
}
