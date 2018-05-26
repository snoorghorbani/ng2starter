import { OnInit, EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Observable } from "rxjs/Observable";
export declare class ProfileEditComponent implements OnInit {
    submited: EventEmitter<{}>;
    formId: string;
    formGroup: FormGroup;
    roles$: Observable<string[]>;
    groups: string[];
    constructor();
    ngOnInit(): void;
    editProfile(): void;
}
