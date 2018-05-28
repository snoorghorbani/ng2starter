import { EventEmitter, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
export declare class ChangePasswordComponent implements OnInit {
    formGroup: FormGroup;
    submited: EventEmitter<{}>;
    ngOnInit(): void;
    submit(): void;
    constructor();
    changePassword(): void;
}
