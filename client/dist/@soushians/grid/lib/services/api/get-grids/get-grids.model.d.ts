import { GridModel } from "../../../models/grid.model";
export declare namespace GetGridsApiModel {
    class Request {
        constructor(initValue?: {});
        getRequestBody(): {};
    }
    class Response {
        Result: GridModel[];
        constructor();
    }
}
