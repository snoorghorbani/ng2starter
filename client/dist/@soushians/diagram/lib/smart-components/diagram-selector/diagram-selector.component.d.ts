import { OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { IGridItemComponent } from "@soushians/grid";
import { DiagramModel } from "../../models";
import { DiagramService } from "../../services/diagram.service";
export declare class DiagramSelectorComponent implements OnInit, IGridItemComponent<{
    diagramId: string;
}> {
    private diagramService;
    diagrams$: Observable<DiagramModel[]>;
    selectedDiagramId: string;
    readonly valid: boolean;
    readonly config: {
        diagramId: string;
    };
    constructor(diagramService: DiagramService);
    ngOnInit(): void;
}
