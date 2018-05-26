import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";

import { FormSchemaModel } from "../../models";
import { MainContainerState } from "../../main-container";

@Component({
	selector: "ngs-form-selector",
	templateUrl: "form-selector.component.html"
})
export class NgsFormSelectorComponent {
	forms$: Observable<FormSchemaModel[]>;
	@Output() select = new EventEmitter();
	constructor(private store: Store<MainContainerState>) {
		this.forms$ = this.store.select(state => state.form.list.data);
	}
}
