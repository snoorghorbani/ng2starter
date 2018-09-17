import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { AddFormComponent } from "../../add/add-form";

@Component({
    selector: "edit-form",
    templateUrl: "./edit-form.component.html",
    styleUrls: ["./edit-form.component.scss"]
})
export class EditFormComponent extends AddFormComponent {
    @Input() schema: any;
    emit() {
        if (!this.formGroup.valid) return;
        return this.submited.emit(this.formGroup.value);
    }
}
