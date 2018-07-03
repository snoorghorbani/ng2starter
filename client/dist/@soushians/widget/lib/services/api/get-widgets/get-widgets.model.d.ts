import { WidgetModel } from "../../../models";
export declare namespace GetWidgetsApiModel {
    class Request {
        constructor(initValue?: {});
        getRequestBody(): {};
    }
    class Response {
        Result: WidgetModel<any>[];
        constructor();
    }
}
