import { EventEmitter, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { ResetPasswordRequestModel } from "../../models";
import { MatSnackBar } from "@angular/material";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
export declare class ResetPasswordRequestComponent implements OnInit {
    snackBar: MatSnackBar;
    submitted: EventEmitter<ResetPasswordRequestModel.Request>;
    formGroup: FormGroup;
    numberOfRequested: Observable<number>;
    canRequestPin: Observable<boolean>;
    pending: boolean;
    timer$: Observable<number>;
    maximumResendingHappend$: BehaviorSubject<boolean>;
    constructor(snackBar: MatSnackBar);
    ngOnInit(): void;
    submit(): void;
}
