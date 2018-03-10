import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/switchMap";

import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Action } from "@ngrx/store";
import { Actions, Effect, toPayload } from "@ngrx/effects";
import { of } from "rxjs/observable/of";
import { Store } from "@ngrx/store";

import { BpmnService } from "../services";
import { UpsertApiModel } from "../models";
import {
	UpsertBpmnActionTypes,
	UpsertBpmnStartAction,
	UpsertBpmnSucceedAction,
	UpsertBpmnFailedAction
} from "./upsert.actions";

@Injectable()
export class UpsertBpmnEffects {
	constructor(private actions$: Actions<any>, private router: Router, private service: BpmnService) {}

	@Effect()
	UpsertBpmn$ = this.actions$
		.ofType(UpsertBpmnActionTypes.UPSERT)
		.map(toPayload)
		.map(data => new UpsertBpmnStartAction(data));

	@Effect()
	UpsertBpmnStart$ = this.actions$
		.ofType(UpsertBpmnActionTypes.UPSERT_START)
		.map(toPayload)
		.switchMap((data: UpsertApiModel.Request) => this.service.upsert(data))
		.map(res => new UpsertBpmnSucceedAction())
		.catch(() => Observable.of(new UpsertBpmnFailedAction()));
}
