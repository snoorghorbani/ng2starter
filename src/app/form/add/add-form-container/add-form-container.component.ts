import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";

import * as MainContainerReducer from "../../main-container/main-container.reducers";
import { FormModel } from "app/models/form";
import { AddFormAction } from "app/form/add/add-form.actions";

@Component({
	template: `<add-form (submited)=add($event)></add-form>`
})
export class AddFormContainerComponent implements OnInit {
	constructor(private store: Store<MainContainerReducer.MainContainerState>) {}
	ngOnInit() {}
	add(form: FormModel) {
		debugger;
		this.store.dispatch(new AddFormAction(form));
	}
}
