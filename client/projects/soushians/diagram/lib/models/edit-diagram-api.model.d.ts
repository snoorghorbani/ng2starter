import { FormGroup } from "@angular/forms";
import { DiagramModel } from "./diagram.model";
export declare namespace EditDiagramApiModel {
    class Request {
        constructor(params: Request);
        getRequestQueryParams(): {};
        static readonly formGroup: FormGroup;
    }
    class Response {
        Result: DiagramModel;
        constructor();
    }
}
