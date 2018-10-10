import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Action } from "@ngrx/store";
import { Actions, Effect } from "@ngrx/effects";
import { of } from "rxjs/observable/of";
import { Store } from "@ngrx/store";
import { map, switchMap, catchError } from "rxjs/operators";

import { DiagramService } from "../services/diagram.service";
import { AddDiagramApiModel } from "../models/add-diagram-api.model";
import {
	AddDiagramActionTypes,
	AddDiagramActionStart,
	AddDiagramActionSucceed,
	AddDiagramActionFailed,
	DataLoadedAction,
	StructureDefinitionStartAction,
	GenerateDiagramAction,
	StructureDefinitionFinishedAction
} from "../actions/add-diagram.actions";

@Injectable()
export class AddDiagramEffects {
	constructor(private actions$: Actions<any>, private router: Router, private diagramService: DiagramService) {}

	@Effect()
	addDiagramRequest$ = this.actions$
		.ofType(AddDiagramActionTypes.ADD_DIAGRAM)
		.pipe(map(action => action.payload), map(data => new AddDiagramActionStart(data)));

	@Effect()
	addDiagram$ = this.actions$
		.ofType(AddDiagramActionTypes.ADD_DIAGRAM_START)
		.pipe(
			map(action => action.payload),
			switchMap((data: AddDiagramApiModel.Request) =>
				this.diagramService
					.addDiagram(data)
					.pipe(
						map(res => new AddDiagramActionSucceed(res)),
						catchError(() => of(new AddDiagramActionFailed()))
					)
			)
		);

	@Effect({ dispatch: false })
	ADD_DIAGRAM_SUCCEED$ = this.actions$.ofType(AddDiagramActionTypes.ADD_DIAGRAM_SUCCEED).pipe(
		map(action => action.payload),
		map(data => {
			this.router.navigate([ "diagrams" ]);
			return Observable.empty();
		})
	);

	@Effect()
	HAVE_ENDPOINT$ = this.actions$
		.ofType(AddDiagramActionTypes.HAVE_ENDPOINT)
		.pipe(map(action => action.payload), map(data => new DataLoadedAction(data)));

	@Effect()
	DATA_LOADED$ = this.actions$
		.ofType(AddDiagramActionTypes.DATA_LOADED)
		.pipe(map(action => action.payload), map(data => new StructureDefinitionStartAction(data)));

	@Effect()
	DIAGRAM_CONFIG_CHANGED$ = this.actions$
		.ofType(AddDiagramActionTypes.DIAGRAM_CONFIG_CHANGED)
		.pipe(map(action => action.payload), map(data => new GenerateDiagramAction(data)));

	@Effect()
	STRUCTURE_DEFINITION_START$ = this.actions$
		.ofType(AddDiagramActionTypes.STRUCTURE_DEFINITION_START)
		.pipe(
			map(action => action.payload),
			switchMap(data => data.getDataStructure().map(() => new StructureDefinitionFinishedAction(data)))
		);

	@Effect()
	COLUMNS_MAPPING_CHANGED$ = this.actions$
		.ofType(AddDiagramActionTypes.COLUMNS_MAPPING_CHANGED)
		.pipe(
			map(action => action.payload),
			switchMap(data => data.calculateColumns().map(() => new StructureDefinitionFinishedAction(data)))
		);

	@Effect()
	STRUCTURE_DEFINITION_END$ = this.actions$
		.ofType(AddDiagramActionTypes.STRUCTURE_DEFINITION_END)
		// .skipUntil(this.actions$.ofType(AddDiagramActionTypes.DATA_LOADED))
		.pipe(
			map(action => action.payload),
			switchMap(data => data.calculateColumns().map(() => new GenerateDiagramAction(data)))
		);

	@Effect({ dispatch: false })
	GenerateDiagram$ = this.actions$
		.ofType(AddDiagramActionTypes.GENERATE_DIAGRAM)
		.pipe(map(action => action.payload), map(data => data.generateDiagram()));
}
