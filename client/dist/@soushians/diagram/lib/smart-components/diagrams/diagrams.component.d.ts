import { OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { GetDiagramsApiModel } from "../../models";
import { DiagramService } from "../../services/diagram.service";
export declare class DiagramsComponent implements OnInit {
    private diagramService;
    diagrams: Observable<GetDiagramsApiModel.Response>;
    width: number;
    constructor(diagramService: DiagramService);
    ngOnInit(): void;
}
