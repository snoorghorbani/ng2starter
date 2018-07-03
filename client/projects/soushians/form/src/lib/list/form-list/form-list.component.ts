import { Component, Input } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { FormSchemaModel } from "../../models";

@Component({
	selector: "form-list",
	templateUrl: "./form-list.component.html"
})
export class FormListComponent {
	@Input("data") data$: Observable<FormSchemaModel[]>;
}
