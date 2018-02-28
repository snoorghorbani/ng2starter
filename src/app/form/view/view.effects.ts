// import { Injectable } from "@angular/core";
// import { Router } from "@angular/router";
// import { Observable } from "rxjs/Observable";
// import { Action } from "@ngrx/store";
// import { Actions, Effect, toPayload } from "@ngrx/effects";
// import { of } from "rxjs/observable/of";
// import { Store } from "@ngrx/store";

// import { FormService } from "../services";
// import { AddFormApiModel } from "../models";
// import { AddFormActionTypes, AddFormStartAction, AddFormSucceedAction, AddFormFailedAction } from "./view.actions";

// @Injectable()
// export class AddFormEffects {
// 	constructor(private actions$: Actions<any>, private router: Router, private service: FormService) {}

// 	@Effect()
// 	AddForm$ = this.actions$
// 		.ofType(AddFormActionTypes.ADD_FORM)
// 		.map(toPayload)
// 		.map(data => new AddFormStartAction(data));

// 	@Effect()
// 	AddFormStart$ = this.actions$
// 		.ofType(AddFormActionTypes.ADD_FORM_START)
// 		.map(toPayload)
// 		.switchMap((data: AddFormApiModel.Request) => this.service.add(data))
// 		.map(res => new AddFormSucceedAction())
// 		.catch(() => Observable.of(new AddFormFailedAction()));
// }
