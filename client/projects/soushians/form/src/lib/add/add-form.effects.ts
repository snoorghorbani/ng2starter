import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/switchMap";

import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Action } from "@ngrx/store";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { of } from "rxjs/observable/of";
import { Store } from "@ngrx/store";

import { FormService } from "../services/form.service";
import { AddFormApiModel } from "../models";
import { AddFormActionTypes, AddFormStartAction, AddFormSucceedAction, AddFormFailedAction } from "./add-form.actions";
import { map, switchMap, catchError } from "rxjs/operators";

@Injectable()
export class AddFormEffects {
	constructor(private actions$: Actions<any>, private router: Router, private service: FormService) {}

	@Effect()
	AddForm$ = this.actions$.pipe(
		ofType<any>(AddFormActionTypes.ADD_FORM),
		map(action => action.payload),
		map(data => new AddFormStartAction(data))
	);

	@Effect()
	AddFormStart$ = this.actions$.pipe(
		ofType<any>(AddFormActionTypes.ADD_FORM_START),
		map(action => action.payload),
		switchMap((data: AddFormApiModel.Request) => this.service.add(data)),
		map(res => new AddFormSucceedAction()),
		catchError(() => of(new AddFormFailedAction()))
	);
}
