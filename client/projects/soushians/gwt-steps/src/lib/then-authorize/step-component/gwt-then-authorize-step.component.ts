import { Component, OnInit } from "@angular/core";
import { GwtThenStepUi } from "@soushians/rule";
import { FormGroup, FormControl } from "@angular/forms";
import { ThenShowBlockGwtStepParams } from "../authorize.gwt-then-step";
import { BehaviorSubject } from "rxjs";


@Component({
	templateUrl: "./gwt-then-authorize-step.component.html",
	styleUrls: ["./gwt-then-authorize-step.component.css"]
})
export class GwtThenAuthorizeStepComponent implements GwtThenStepUi<any> {
	formGroup: FormGroup;
	params$ = new BehaviorSubject<ThenShowBlockGwtStepParams>({} as ThenShowBlockGwtStepParams);
	set params(params) {
		if (this.formGroup) {
			this.formGroup.patchValue(params);
		}
		this.params$.next(params);
	}
	get params(): ThenShowBlockGwtStepParams {
		return Object.assign({}, this.formGroup.value);
	}
	constructor() {
		this.formGroup = this._create_formGroup();
		this.params$.subscribe(params => this.formGroup.patchValue(params));
	}

	/**
	 * private methods
	 */
	_create_formGroup() {
		return new FormGroup({
			verb: new FormControl("hidden")
		});
	}
}
