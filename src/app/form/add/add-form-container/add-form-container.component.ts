import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";

import { MainContainerState } from "../../main-container";
import { FormSchemaModel } from "../../models";
import { AddFormAction } from "app/form/add/add-form.actions";

@Component({
	template: `<ngs-form-add (submited)=add($event)></ngs-form-add>`
})
export class AddFormContainerComponent {
	constructor(public store: Store<MainContainerState>) {}
	add(form: FormSchemaModel) {
		this.store.dispatch(new AddFormAction(form));
	}
}
