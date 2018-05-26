// import { Injectable } from "@angular/core";
// import { Router } from "@angular/router";
// import { Observable } from "rxjs/Observable";
// import { Action } from "@ngrx/store";
// import { Actions, Effect } from "@ngrx/effects";
// import { of } from "rxjs/observable/of";
// import { Store } from "@ngrx/store";
// import { map, switchMap } from "rxjs/operators";

// import {
// 	AddDiagramActionTypes,
// 	AddDiagramAction,
// 	AddDiagramActionStart,
// 	AddDiagramActionSucceed,
// 	AddDiagramActionFailed
// } from "../actions";
// import { DiagramService } from "../services";
// import { AddDiagramApiModel } from "../models";

// @Injectable()
// export class EditDiagramEffects {
// 	constructor(private actions$: Actions<any>, private router: Router, private diagramService: DiagramService) { }

// 	@Effect()
// 	addDiagramRequest$ = this.actions$
// 		.ofType(AddDiagramActionTypes.ADD_DIAGRAM)
// 		.pipe(
// 			map(action => action.payload),
// 			map((data) => new AddDiagramActionStart(data))
// 		);

// 	@Effect()
// 	addDiagram$ = this.actions$
// 		.ofType(AddDiagramActionTypes.ADD_DIAGRAM_START)
// 		.pipe(
// 			map(action => action.payload),
// 			switchMap((data: AddDiagramApiModel.Request) => this.diagramService
// 				.addDiagram(data)
// 				.pipe(
// 					map((res) => new AddDiagramActionSucceed(res)),
// 						catch(() => Observable.of(new AddDiagramActionFailed()))
// 			)
// 	)
// 			)

// }
