import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Action } from "@ngrx/store";
import { Actions, Effect } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, switchMap, catchError } from "rxjs/operators";

import { DiagramsActionTypes, GetDiagrams, GetDiagramsStart, GetDiagramsSucceed, GetDiagramsFailed } from "../actions";
import { DiagramService } from "../services/diagram.service";
import { DiagramModel, GetDiagramsApiModel } from "../models";

@Injectable()
export class DiagramEffects {
	constructor(private actions$: Actions<any>, private router: Router, private diagramService: DiagramService) {}

	@Effect()
	DiagramRequest$ = this.actions$.ofType().pipe(map(action => action.payload), map(data => new GetDiagramsStart()));

	@Effect()
	getDiagram$ = this.actions$
		.ofType()
		.pipe(
			map(action => action.payload),
			switchMap((data: GetDiagramsApiModel.Request) =>
				this.diagramService
					.getDiagrams()
					.pipe(
						map(res => new GetDiagramsSucceed(res)),
						catchError(() => Observable.of(new GetDiagramsFailed()))
					)
			)
		);
}
