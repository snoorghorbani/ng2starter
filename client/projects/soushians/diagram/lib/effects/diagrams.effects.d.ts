import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Actions } from "@ngrx/effects";
import { GetDiagramsStart, GetDiagramsSucceed, GetDiagramsFailed } from "../actions";
import { DiagramService } from "../services/diagram.service";
export declare class DiagramEffects {
    private actions$;
    private router;
    private diagramService;
    constructor(actions$: Actions<any>, router: Router, diagramService: DiagramService);
    DiagramRequest$: Observable<GetDiagramsStart>;
    getDiagram$: Observable<GetDiagramsSucceed | GetDiagramsFailed>;
}
