import { GridModel } from "./grid.model";
export declare namespace UpsertGridApiModel {
    class Request {
        grid: GridModel;
        constructor(initValue?: Partial<UpsertGridApiModel.Request>);
        getRequestBody(): GridModel;
    }
    class Response {
        Result: GridModel;
        constructor();
    }
}
