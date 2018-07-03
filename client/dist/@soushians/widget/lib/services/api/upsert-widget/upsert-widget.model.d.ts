import { WidgetModel } from "../../../models";
export declare namespace UpsertWidgetApiModel {
    class Request {
        widget: WidgetModel<any>;
        constructor(widgetConfig?: {});
        getRequestBody(): WidgetModel<any>;
    }
    class Response {
        Result: WidgetModel<any>;
        constructor();
    }
}
