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

import { FormService } from "../services";
import { EditFormApiModel } from "../models";
import {
	EditFormActionTypes,
	EditFormStartAction,
	EditFormSucceedAction,
	EditFormFailedAction
} from "./edit-form.actions";

@Injectable()
export class EditFormEffects {
	constructor(private actions$: Actions<any>, private router: Router, private service: FormService) {}

	@Effect()
	EditForm$ = this.actions$
		.ofType(EditFormActionTypes.EDIT_FORM)
		.map(toPayload)
		.map((data) => new EditFormStartAction(data));

	@Effect()
	EditFormStart$ = this.actions$
		.ofType(EditFormActionTypes.EDIT_FORM_START)
		.map(toPayload)
		.switchMap((data: EditFormApiModel.Request) => this.service.update(data))
		.map((res) => new EditFormSucceedAction())
		.catch(() => Observable.of(new EditFormFailedAction()));
}
