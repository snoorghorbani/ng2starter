// ./effects/auth.ts
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
import { FlowModel } from "../models";
import {
	BpmnsListAction,
	BpmnsListActionTypes,
	BpmnsListActions,
	BpmnsListFailedAction,
	BpmnsListStartAction,
	BpmnsListSucceedAction,
	BpmnSchemaFechedAction
} from "./list.actions";

@Injectable()
export class BpmnsListEffects {
	constructor(private actions$: Actions<any>, private router: Router, private service: BpmnService) {}

	@Effect()
	EditProfileRequest$ = this.actions$.ofType(BpmnsListActionTypes.BPMN_LIST).map(data => new BpmnsListStartAction());

	@Effect()
	GetBpmn$ = this.actions$
		.ofType(BpmnsListActionTypes.GET_BPMN_SCHEMA)
		.map(toPayload)
		.switchMap(id => this.service.get(id))
		.map(bpmnSchema => new BpmnSchemaFechedAction(bpmnSchema));

	@Effect()
	get_bpmns_list$ = this.actions$
		.ofType(BpmnsListActionTypes.BPMN_LIST_START)
		.switchMap((data: any) => this.service.getList())
		.map(res => new BpmnsListSucceedAction(res))
		.catch(() => Observable.of(new BpmnsListFailedAction()));
}
