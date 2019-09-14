import { OnInit, EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Observable } from "rxjs/Observable";
import { Router } from "@angular/router";
export declare class ProfileEditComponent implements OnInit {
    private router;
    submited: EventEmitter<any>;
    userInfo: any;
    formId: string;
    roles$: Observable<string[]>;
    groups: string[];
    constructor(router: Router);
    ngOnInit(): void;
    editProfile(form: FormGroup): void;
    goback(): void;
}
