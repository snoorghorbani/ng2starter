import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";

import { MainContainerState } from "../../main-container/main-container.reducers";
import { EditFormApiModel } from "../../models";
import { FormService } from "../../services/form.service";
import { EditFormAction } from "../../edit/edit-form.actions";
import { AddFormContainerComponent } from "../../add/add-form-container";
import { GetFormSchemaAction } from "../../list/list.actions";

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
			.map((params) => params["_id"])
			.subscribe((id) => this.store.dispatch(new GetFormSchemaAction(id)));

		this.route.params
			.map((params) => params["_id"])
			.switchMap((id) => this.service.selectFormById(id))
			.filter((data) => data != null)
			.take(1)
			.subscribe((formSchema) => {
				this.schema = formSchema;
				this.formGroup.patchValue(formSchema);
			});
	}

	update(data) {
		this.store.dispatch(new EditFormAction(data));
	}
}
