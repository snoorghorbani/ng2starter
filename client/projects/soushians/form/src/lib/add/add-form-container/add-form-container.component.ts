import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";

import { MainContainerState } from "../../main-container/main-container.reducers";
import { FormSchemaModel } from "../../models";
import { AddFormAction } from "../add-form.actions";
import { AddFormSchemaAction, UpdateFormSchemaAction } from "../../list/list.actions";
import { FormService } from "../../services/form.service";

@Component({
	template: `<ngs-form-add 
					[schema]="schema" 
					(changes)="update_schema($event)" 
					(submited)=add($event)
				></ngs-form-add>`
})
export class AddFormContainerComponent implements OnInit {
	schema: FormSchemaModel;
	constructor(public store: Store<MainContainerState>, public service: FormService) {}
	ngOnInit() {
		this.schema = new FormSchemaModel();
		this.schema.init();
		this.store.dispatch(new AddFormSchemaAction(this.schema));
	}
	add(form: FormSchemaModel) {
		this.store.dispatch(new AddFormAction(form));
	}
	update_schema(form: FormSchemaModel) {
		this.store.dispatch(new UpdateFormSchemaAction(form));
	}
}
