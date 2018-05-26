import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { ChangePasswordModel } from "../../models";
// import { MdSnackBar } from "@angular/material";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Component({
        selector: 'user-change-password',
        templateUrl: './change-password.component.html',
        styleUrls:  ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
        @Input() formGroup: FormGroup;
        @Output() submited = new EventEmitter();

        ngOnInit() {
        }

        submit() {
        }

        constructor() { }

        changePassword() {
            if (!this.formGroup.valid) return;
            this.submited.emit(this.formGroup.value)
        }
}
