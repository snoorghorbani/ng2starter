import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Action } from "@ngrx/store";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { of } from "rxjs/observable/of";
import { Store } from "@ngrx/store";

import { FormService } from "../services/form.service";
import { EditFormApiModel } from "../models";
import {
	EditFormActionTypes,
	EditFormStartAction,
	EditFormSucceedAction,
	EditFormFailedAction
} from "./edit-form.actions";
import { UpdateFormSchemaAction } from "../list";
import { map, switchMap, catchError } from "rxjs/operators";

@Injectable()
export class EditFormEffects {
	constructor(private actions$: Actions<any>, private router: Router, private service: FormService) {}

	@Effect()
	EditForm$ = this.actions$.pipe(
		ofType<any>(EditFormActionTypes.EDIT_FORM),
		map(action => action.payload),
		map(data => new EditFormStartAction(data))
	);

	@Effect()
	EditFormStart$ = this.actions$.pipe(
		ofType<any>(EditFormActionTypes.EDIT_FORM_START),
		map(action => action.payload),
		switchMap((data: EditFormApiModel.Request) => this.service.update(data)),
		map(formSchema => new EditFormSucceedAction(formSchema)),
		catchError(() => of(new EditFormFailedAction()))
	);

	@Effect()
	UpdateFormsListStart$ = this.actions$.pipe(
		ofType<any>(EditFormActionTypes.EDIT_FORM_SUCCEED),
		map(action => action.payload),
		map(formSchema => new UpdateFormSchemaAction(formSchema))
	);
}
