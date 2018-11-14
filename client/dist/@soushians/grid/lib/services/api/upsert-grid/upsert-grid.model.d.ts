import { GridModel } from "../../../models/grid.model";
export declare namespace UpsertGridApiModel {
    class Request {
        grid: GridModel;
        constructor(grid?: {});
        getRequestBody(): GridModel;
    }
    class Response {
        Result: GridModel;
        constructor();
    }
}
