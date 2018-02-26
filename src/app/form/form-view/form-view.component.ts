import { Component, OnInit, Input } from "@angular/core";
import { FormService } from "../services";
import { FormModel } from "../models";
import { Observable } from "rxjs/Observable";

@Component({
	selector: "ngs-form-view",
	templateUrl: "./form-view.component.html"
})
export class FormViewComponent {
	@Input()
	set id(id: string) {
		this.form = this.service.get(this.id);
	}
	form: Observable<FormModel>;
	constructor(private service: FormService) {}

	ngOnInit() {}
}
