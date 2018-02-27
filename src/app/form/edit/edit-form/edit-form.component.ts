import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { FormSchemaModel, EditFormApiModel } from "../../models";
import { ActivatedRoute } from "@angular/router";
import { FormService } from "app/form/services";
import { AddFormComponent } from "app/form/add";

@Component({
	selector: "edit-form",
	templateUrl: "./edit-form.component.html"
})
export class EditFormComponent extends AddFormComponent {
	emit() {
		if (!this.formGroup.valid) return;
		return this.submited.emit(this.formGroup.value);
	}
}
