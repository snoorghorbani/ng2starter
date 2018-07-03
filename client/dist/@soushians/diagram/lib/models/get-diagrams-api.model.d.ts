import { DiagramModel } from "./diagram.model";
export declare namespace GetDiagramsApiModel {
    class Request {
        diagram: string;
        constructor(initValue?: GetDiagramsApiModel.Request);
        getRequestBody(): {};
    }
    class Response {
        Result: DiagramModel[];
        constructor();
    }
}
