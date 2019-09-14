import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Actions } from "@ngrx/effects";
import { DiagramService } from "../services/diagram.service";
import { GetDiagramsSucceed, GetDiagramsFailed, GetDiagramsStart } from "../actions/diagrams.actions";
export declare class DiagramEffects {
    private actions$;
    private router;
    private diagramService;
    constructor(actions$: Actions<any>, router: Router, diagramService: DiagramService);
    DiagramRequest$: Observable<GetDiagramsStart>;
    getDiagram$: Observable<GetDiagramsSucceed | GetDiagramsFailed>;
}
