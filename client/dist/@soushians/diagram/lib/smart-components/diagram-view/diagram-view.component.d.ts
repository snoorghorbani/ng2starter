import { OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { DiagramService } from "../../services/diagram.service";
import { GetDiagramsApiModel } from "../../models/get-diagrams-api.model";
export declare class diagramViewComponent implements OnInit {
    private diagramService;
    diagrams: Observable<GetDiagramsApiModel.Response>;
    width: number;
    diagramData$: any;
    diagramId: string;
    constructor(diagramService: DiagramService);
    ngOnInit(): void;
}
