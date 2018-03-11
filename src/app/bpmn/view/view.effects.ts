import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Action } from "@ngrx/store";
import { Actions, Effect, toPayload } from "@ngrx/effects";
import { of } from "rxjs/observable/of";
import { Store } from "@ngrx/store";

import { BpmnService } from "../services";
// import { ViewApiModel } from "../models";
// import { ViewBpmnActionTypes, ViewBpmnStartAction, ViewBpmnSucceedAction, ViewBpmnFailedAction } from "./view.actions";

@Injectable()
export class ViewBpmnEffects {
	constructor(private actions$: Actions<any>, private router: Router, private service: BpmnService) {}

	// @Effect()
	// ViewBpmn$ = this.actions$
	// 	.ofType(ViewBpmnActionTypes.UPSERT)
	// 	.map(toPayload)
	// 	.map(data => new ViewBpmnStartAction(data));

	// @Effect()
	// ViewBpmnStart$ = this.actions$
	// 	.ofType(ViewBpmnActionTypes.UPSERT_START)
	// 	.map(toPayload)
	// 	.switchMap((data: ViewApiModel.Request) => this.service.view(data))
	// 	.map(res => new ViewBpmnSucceedAction())
	// 	.catch(() => Observable.of(new ViewBpmnFailedAction()));
}
