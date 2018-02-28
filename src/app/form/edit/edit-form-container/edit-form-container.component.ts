import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";

import { MainContainerState } from "../../main-container";
import { FormSchemaModel, EditFormApiModel } from "../../models";
import { FormService } from "app/form/services";
import { AddFormAction } from "app/form/add/add-form.actions";
import { EditFormAction } from "app/form/edit/edit-form.actions";
import { ActivatedRoute } from "@angular/router";
import { AddFormContainerComponent } from "app/form/add";

@Component({
	template: `<edit-form
					[formGroup]="formGroup"
					[schema]="schema"
					(changes)="update_schema($event)"
					(submited)="update($event)">
				</edit-form>`
})
export class EditFormContainerComponent extends AddFormContainerComponent {
	formGroup = EditFormApiModel.Request.formGroup;
	constructor(public service: FormService, private route: ActivatedRoute, public store: Store<MainContainerState>) {
		super(store, service);
	}

	ngOnInit() {
		this.route.params
			.map(params => params["_id"])
			.switchMap(_id => this.service.get(_id))
			.filter(data => data != null)
			.take(1)
			.subscribe(formSchema => {
				this.schema = formSchema;
				this.formGroup.patchValue(formSchema);
			});
	}

	update(data) {
		this.store.dispatch(new EditFormAction(data));
	}
}
