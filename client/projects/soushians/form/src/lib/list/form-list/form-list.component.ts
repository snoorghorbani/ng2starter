import { Component, Input } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { FormSchemaModel } from "../../models";

@Component({
	selector: "form-list",
	templateUrl: "./form-list.component.html",
	styleUrls: ["./form-list.component.scss"]
})
export class FormListComponent {
	// tslint:disable-next-line:no-input-rename
	@Input("data") data$: Observable<FormSchemaModel[]>;
}
