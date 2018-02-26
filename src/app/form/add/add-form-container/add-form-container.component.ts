import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";

import * as MainContainerReducer from "../../main-container/main-container.reducers";
import { FormSchemaModel } from "../../models";
import { AddFormAction } from "app/form/add/add-form.actions";

@Component({
	template: `<ngs-form-add (submited)=add($event)></ngs-form-add>`
})
export class AddFormContainerComponent implements OnInit {
	constructor(private store: Store<MainContainerReducer.MainContainerState>) {}
	ngOnInit() {}
	add(form: FormSchemaModel) {
		debugger;
		this.store.dispatch(new AddFormAction(form));
	}
}
