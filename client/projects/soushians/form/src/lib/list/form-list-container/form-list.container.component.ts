import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";

import { MainContainerState, FormReducers } from "../../main-container";
import { FormService } from "../../services";
import { FormSchemaModel } from "../../models";
import { FormsListAction } from "../../list/list.actions";

@Component({
	template: `<form-list
					[data]="data$">
				</form-list>`
})
export class FormListContainerComponent implements OnInit {
	data$: Observable<FormSchemaModel[]>;
	constructor(public store: Store<MainContainerState>) {
		this.data$ = this.store.select(state => state.form.list.data);
	}
	ngOnInit() {
		this.store.dispatch(new FormsListAction());
	}
}
