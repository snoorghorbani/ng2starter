import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { ResetPasswordRequestModel } from "../../models";
import { MatSnackBar } from "@angular/material";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Component({
        selector: 'user-reset-password-request',
        templateUrl: './reset-password-request.component.html',
        styleUrls: ['./reset-password-request.component.scss']
})
export class ResetPasswordRequestComponent implements OnInit {
        @Output() submitted = new EventEmitter<ResetPasswordRequestModel.Request>();

        @Input() formGroup: FormGroup;
        @Input() numberOfRequested: Observable<number>;
        @Input() canRequestPin: Observable<boolean>;
        @Input() set pending(isPending: boolean) {
                if (isPending) {
                        this.formGroup.disable();
                }

                this.formGroup.enable();
        }

        timer$: Observable<number>;
        maximumResendingHappend$ = new BehaviorSubject(false);

        constructor(
                public snackBar: MatSnackBar
        ) {
                this.timer$ = Observable.timer(0, 100)
                        .map(i => i + 1)
                        .takeWhile(i => i * 100 <= 3000)
                        .map(i => 3000 - i * 100);
        }

        ngOnInit() {
                this.numberOfRequested.subscribe(data => {
                        if (data > 2) {
                                this.maximumResendingHappend$.next(true);
                        }
                })
        }

        submit() {
                if (this.formGroup.valid) {
                        this.submitted.emit(this.formGroup.value);
                        let message = (this.maximumResendingHappend$.getValue())
                                ? 'عدم امکان ...'
                                : 'پیامک جدید برای شما ارسال گردید.';
                        this.snackBar.open(message, '', {
                                duration: 3000,
                        })
                }
        }
}
