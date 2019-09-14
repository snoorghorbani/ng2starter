import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Actions } from "@ngrx/effects";
import { DiagramService } from "../services/diagram.service";
import { AddDiagramActionStart, AddDiagramActionSucceed, AddDiagramActionFailed, DataLoadedAction, StructureDefinitionStartAction, GenerateDiagramAction } from "../actions/add-diagram.actions";
export declare class AddDiagramEffects {
    private actions$;
    private router;
    private diagramService;
    constructor(actions$: Actions<any>, router: Router, diagramService: DiagramService);
    addDiagramRequest$: Observable<AddDiagramActionStart>;
    addDiagram$: Observable<AddDiagramActionSucceed | AddDiagramActionFailed>;
    ADD_DIAGRAM_SUCCEED$: Observable<Observable<never>>;
    HAVE_ENDPOINT$: Observable<DataLoadedAction>;
    DATA_LOADED$: Observable<StructureDefinitionStartAction>;
    DIAGRAM_CONFIG_CHANGED$: Observable<GenerateDiagramAction>;
    STRUCTURE_DEFINITION_START$: Observable<unknown>;
    COLUMNS_MAPPING_CHANGED$: Observable<unknown>;
    STRUCTURE_DEFINITION_END$: Observable<unknown>;
    GenerateDiagram$: Observable<any>;
}
