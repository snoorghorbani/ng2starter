import { WidgetModel } from "../../../models/widget.model";
export declare namespace UpsertWidgetApiModel {
    class Request {
        widget: WidgetModel<any>;
        constructor(widget?: {});
        getRequestBody(): WidgetModel<any>;
    }
    class Response {
        Result: WidgetModel<any>;
        constructor();
    }
}
