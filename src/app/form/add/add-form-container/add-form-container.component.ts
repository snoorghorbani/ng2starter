import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";

import { MainContainerState } from "../../main-container";
import { FormSchemaModel } from "../../models";
import { AddFormAction } from "app/form/add/add-form.actions";
import { AddFormSchemaAction, UpdateFormSchemaAction } from "../../list";

@Component({
	template: `<ngs-form-add [schema]="schema" (change)="update_schema($event)" (submited)=add($event)></ngs-form-add>`
})
export class AddFormContainerComponent implements OnInit {
	schema: FormSchemaModel;
	constructor(public store: Store<MainContainerState>) {
		this.schema = new FormSchemaModel();
		this.schema.init();
		// 	setTimeout(() => {
		// }, 1000);
	}
	ngOnInit() {
		this.store.dispatch(new AddFormSchemaAction(this.schema));
	}
	add(form: FormSchemaModel) {
		this.store.dispatch(new AddFormAction(form));
	}
	update_schema(form: FormSchemaModel) {
		debugger;
		this.store.dispatch(new UpdateFormSchemaAction(form));
	}
}
