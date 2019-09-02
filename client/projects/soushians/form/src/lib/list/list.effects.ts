import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Action } from "@ngrx/store";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { of } from "rxjs/observable/of";
import { Store } from "@ngrx/store";
import { switchMap, map, catchError } from "rxjs/operators";

import { FormService } from "../services/form.service";
import { FormSchemaModel } from "../models";
import {
	FormsListAction,
	FormsListActionTypes,
	FormsListActions,
	FormsListFailedAction,
	FormsListStartAction,
	FormsListSucceedAction,
	FormSchemaFechedAction
} from "./list.actions";

@Injectable()
export class FormsListEffects {
	constructor(private actions$: Actions<any>, private router: Router, private service: FormService) {}

	@Effect()
	EditProfileRequest$ = this.actions$.pipe(
		ofType<any>(FormsListActionTypes.FORMS_LIST),
		map(data => new FormsListStartAction())
	);

	@Effect()
	GetForm$ = this.actions$.pipe(
		ofType<any>(FormsListActionTypes.GET_FORM_SCHEMA),
		map(action => action.payload),
		switchMap(id => this.service.get(id)),
		map(formSchema => new FormSchemaFechedAction(formSchema))
	);

	@Effect()
	get_forms_list$ = this.actions$.pipe(
		ofType(FormsListActionTypes.FORMS_LIST_START),
		switchMap((data: any) => this.service.getList()),
		map(res => new FormsListSucceedAction(res)),
		catchError(() => of(new FormsListFailedAction()))
	);
}
