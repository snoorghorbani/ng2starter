/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Observable } from "rxjs/Observable";
import { MatSnackBar } from "@angular/material";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { map, takeWhile } from "rxjs/operators";
export class ResetPasswordRequestComponent {
    /**
     * @param {?} snackBar
     */
    constructor(snackBar) {
        this.snackBar = snackBar;
        this.submitted = new EventEmitter();
        this.maximumResendingHappend$ = new BehaviorSubject(false);
        this.timer$ = Observable.timer(0, 100).pipe(map(i => i + 1), takeWhile(i => i * 100 <= 3000), map(i => 3000 - i * 100));
    }
    /**
     * @param {?} isPending
     * @return {?}
     */
    set pending(isPending) {
        if (isPending) {
            this.formGroup.disable();
        }
        this.formGroup.enable();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.numberOfRequested.subscribe(data => {
            if (data > 2) {
                this.maximumResendingHappend$.next(true);
            }
        });
    }
    /**
     * @return {?}
     */
    submit() {
        if (this.formGroup.valid) {
            this.submitted.emit(this.formGroup.value);
            /** @type {?} */
            let message = this.maximumResendingHappend$.getValue()
                ? "عدم امکان ..."
                : "پیامک جدید برای شما ارسال گردید.";
            this.snackBar.open(message, "", {
                duration: 3000
            });
        }
    }
}
ResetPasswordRequestComponent.decorators = [
    { type: Component, args: [{
                selector: "user-reset-password-request",
                template: `<form [formGroup]="formGroup" (ngSubmit)="submit()" fxLayout="column">
  <mat-card>
    <mat-card-header>
      <mat-card-title>
        <h3>درخواست بازیابی رمز عبور</h3>
      </mat-card-title>
    </mat-card-header>
    <mat-card-content>
      <p>برای بازیابی رمز عبور شماره تلفن خود را وارد نمایید</p>
      <mat-radio-group fxFlexFill formControlName="Type">
        <mat-radio-button value="sms">پیامک</mat-radio-button>
        <mat-radio-button value="email">پست الکترونیکی</mat-radio-button>
      </mat-radio-group>
      <mat-form-field fxFlexFill>
        <input matInput placeholder="شماره تلفن همراه" formControlName="Username">
      </mat-form-field>
    </mat-card-content>
    <mat-card-actions>
      <!--<button type="submit" [disabled]='(canRequestPin | async) || (maximumResendingHappend$ | async)' (click)="submit()" mat-raised-button color="primary">-->
      <button type="submit" [disabled]='(canRequestPin | async)' (click)="submit()" mat-raised-button color="primary">
        <span *ngIf='!(canRequestPin | async)'>
          بازیابی رمز عبور
        </span>
        <!--<div *ngIf='(canRequestPin | async) && !(maximumResendingHappend$ | async)'>
          {{timer$ | async}} ثانیه تا امکان در خواست دوباره دریافت پیامک.
        </div>
        <div *ngIf='(maximumResendingHappend$ | async)'>
          عدم امکان درخواست
        </div>-->
      </button>
      <a mat-button routerLink='/auth/signin'>انصراف</a>
    </mat-card-actions>
  </mat-card>
</form>
`,
                styles: [``]
            },] },
];
/** @nocollapse */
ResetPasswordRequestComponent.ctorParameters = () => [
    { type: MatSnackBar }
];
ResetPasswordRequestComponent.propDecorators = {
    submitted: [{ type: Output }],
    formGroup: [{ type: Input }],
    numberOfRequested: [{ type: Input }],
    canRequestPin: [{ type: Input }],
    pending: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ResetPasswordRequestComponent.prototype.submitted;
    /** @type {?} */
    ResetPasswordRequestComponent.prototype.formGroup;
    /** @type {?} */
    ResetPasswordRequestComponent.prototype.numberOfRequested;
    /** @type {?} */
    ResetPasswordRequestComponent.prototype.canRequestPin;
    /** @type {?} */
    ResetPasswordRequestComponent.prototype.timer$;
    /** @type {?} */
    ResetPasswordRequestComponent.prototype.maximumResendingHappend$;
    /** @type {?} */
    ResetPasswordRequestComponent.prototype.snackBar;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXQtcGFzc3dvcmQtcmVxdWVzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3VzZXIvIiwic291cmNlcyI6WyJsaWIvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQtcmVxdWVzdC9yZXNldC1wYXNzd29yZC1yZXF1ZXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsU0FBUyxFQUEyQixNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUc3QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDaEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUF5Q2hELE1BQU07Ozs7SUFrQkwsWUFBbUIsUUFBcUI7UUFBckIsYUFBUSxHQUFSLFFBQVEsQ0FBYTt5QkFqQmxCLElBQUksWUFBWSxFQUFxQzt3Q0FlaEQsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDO1FBR3BELElBQUksQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUMxQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQ2YsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUMsRUFDL0IsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FDeEIsQ0FBQztLQUNGOzs7OztJQWxCRCxJQUNJLE9BQU8sQ0FBQyxTQUFrQjtRQUM3QixJQUFJLFNBQVMsRUFBRTtZQUNkLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDekI7UUFFRCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDO0tBQ3hCOzs7O0lBYUQsUUFBUTtRQUNQLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDdkMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFO2dCQUNiLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDekM7U0FDRCxDQUFDLENBQUM7S0FDSDs7OztJQUVELE1BQU07UUFDTCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7O1lBQzFDLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxRQUFRLEVBQUU7Z0JBQ3JELENBQUMsQ0FBQyxlQUFlO2dCQUNqQixDQUFDLENBQUMsa0NBQWtDLENBQUM7WUFDdEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsRUFBRTtnQkFDL0IsUUFBUSxFQUFFLElBQUk7YUFDZCxDQUFDLENBQUM7U0FDSDtLQUNEOzs7WUFuRkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSw2QkFBNkI7Z0JBQ3ZDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQWtDVjtnQkFDQSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7YUFDWjs7OztZQTFDUSxXQUFXOzs7d0JBNENsQixNQUFNO3dCQUVOLEtBQUs7Z0NBQ0wsS0FBSzs0QkFDTCxLQUFLO3NCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5cclxuaW1wb3J0IHsgUmVzZXRQYXNzd29yZFJlcXVlc3RNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvcmVzZXQtcGFzc3dvcmQtcmVxdWVzdC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBNYXRTbmFja0JhciB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcclxuaW1wb3J0IHsgbWFwLCB0YWtlV2hpbGUgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcInVzZXItcmVzZXQtcGFzc3dvcmQtcmVxdWVzdFwiLFxyXG5cdHRlbXBsYXRlOiBgPGZvcm0gW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIiAobmdTdWJtaXQpPVwic3VibWl0KClcIiBmeExheW91dD1cImNvbHVtblwiPlxyXG4gIDxtYXQtY2FyZD5cclxuICAgIDxtYXQtY2FyZC1oZWFkZXI+XHJcbiAgICAgIDxtYXQtY2FyZC10aXRsZT5cclxuICAgICAgICA8aDM+2K/Ysdiu2YjYp9iz2Kog2KjYp9iy24zYp9io24wg2LHZhdiyINi52KjZiNixPC9oMz5cclxuICAgICAgPC9tYXQtY2FyZC10aXRsZT5cclxuICAgIDwvbWF0LWNhcmQtaGVhZGVyPlxyXG4gICAgPG1hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgIDxwPtio2LHYp9uMINio2KfYstuM2KfYqNuMINix2YXYsiDYudio2YjYsSDYtNmF2KfYsdmHINiq2YTZgdmGINiu2YjYryDYsdinINmI2KfYsdivINmG2YXYp9uM24zYrzwvcD5cclxuICAgICAgPG1hdC1yYWRpby1ncm91cCBmeEZsZXhGaWxsIGZvcm1Db250cm9sTmFtZT1cIlR5cGVcIj5cclxuICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiB2YWx1ZT1cInNtc1wiPtm+24zYp9mF2qk8L21hdC1yYWRpby1idXR0b24+XHJcbiAgICAgICAgPG1hdC1yYWRpby1idXR0b24gdmFsdWU9XCJlbWFpbFwiPtm+2LPYqiDYp9mE2qnYqtix2YjZhtuM2qnbjDwvbWF0LXJhZGlvLWJ1dHRvbj5cclxuICAgICAgPC9tYXQtcmFkaW8tZ3JvdXA+XHJcbiAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXhGaWxsPlxyXG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIti02YXYp9ix2Ycg2KrZhNmB2YYg2YfZhdix2KfZh1wiIGZvcm1Db250cm9sTmFtZT1cIlVzZXJuYW1lXCI+XHJcbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICA8bWF0LWNhcmQtYWN0aW9ucz5cclxuICAgICAgPCEtLTxidXR0b24gdHlwZT1cInN1Ym1pdFwiIFtkaXNhYmxlZF09JyhjYW5SZXF1ZXN0UGluIHwgYXN5bmMpIHx8IChtYXhpbXVtUmVzZW5kaW5nSGFwcGVuZCQgfCBhc3luYyknIChjbGljayk9XCJzdWJtaXQoKVwiIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiPi0tPlxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBbZGlzYWJsZWRdPScoY2FuUmVxdWVzdFBpbiB8IGFzeW5jKScgKGNsaWNrKT1cInN1Ym1pdCgpXCIgbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgPHNwYW4gKm5nSWY9JyEoY2FuUmVxdWVzdFBpbiB8IGFzeW5jKSc+XHJcbiAgICAgICAgICDYqNin2LLbjNin2KjbjCDYsdmF2LIg2LnYqNmI2LFcclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPCEtLTxkaXYgKm5nSWY9JyhjYW5SZXF1ZXN0UGluIHwgYXN5bmMpICYmICEobWF4aW11bVJlc2VuZGluZ0hhcHBlbmQkIHwgYXN5bmMpJz5cclxuICAgICAgICAgIHt7dGltZXIkIHwgYXN5bmN9fSDYq9in2YbbjNmHINiq2Kcg2KfZhdqp2KfZhiDYr9ixINiu2YjYp9iz2Kog2K/ZiNio2KfYsdmHINiv2LHbjNin2YHYqiDZvtuM2KfZhdqpLlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgKm5nSWY9JyhtYXhpbXVtUmVzZW5kaW5nSGFwcGVuZCQgfCBhc3luYyknPlxyXG4gICAgICAgICAg2LnYr9mFINin2YXaqdin2YYg2K/Ysdiu2YjYp9iz2KpcclxuICAgICAgICA8L2Rpdj4tLT5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxhIG1hdC1idXR0b24gcm91dGVyTGluaz0nL2F1dGgvc2lnbmluJz7Yp9mG2LXYsdin2YE8L2E+XHJcbiAgICA8L21hdC1jYXJkLWFjdGlvbnM+XHJcbiAgPC9tYXQtY2FyZD5cclxuPC9mb3JtPlxyXG5gLFxyXG5cdHN0eWxlczogW2BgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVzZXRQYXNzd29yZFJlcXVlc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdEBPdXRwdXQoKSBzdWJtaXR0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFJlc2V0UGFzc3dvcmRSZXF1ZXN0TW9kZWwuUmVxdWVzdD4oKTtcclxuXHJcblx0QElucHV0KCkgZm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcblx0QElucHV0KCkgbnVtYmVyT2ZSZXF1ZXN0ZWQ6IE9ic2VydmFibGU8bnVtYmVyPjtcclxuXHRASW5wdXQoKSBjYW5SZXF1ZXN0UGluOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG5cdEBJbnB1dCgpXHJcblx0c2V0IHBlbmRpbmcoaXNQZW5kaW5nOiBib29sZWFuKSB7XHJcblx0XHRpZiAoaXNQZW5kaW5nKSB7XHJcblx0XHRcdHRoaXMuZm9ybUdyb3VwLmRpc2FibGUoKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmZvcm1Hcm91cC5lbmFibGUoKTtcclxuXHR9XHJcblxyXG5cdHRpbWVyJDogT2JzZXJ2YWJsZTxudW1iZXI+O1xyXG5cdG1heGltdW1SZXNlbmRpbmdIYXBwZW5kJCA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgc25hY2tCYXI6IE1hdFNuYWNrQmFyKSB7XHJcblx0XHR0aGlzLnRpbWVyJCA9IE9ic2VydmFibGUudGltZXIoMCwgMTAwKS5waXBlKFxyXG5cdFx0XHRtYXAoaSA9PiBpICsgMSksXHJcblx0XHRcdHRha2VXaGlsZShpID0+IGkgKiAxMDAgPD0gMzAwMCksXHJcblx0XHRcdG1hcChpID0+IDMwMDAgLSBpICogMTAwKVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5udW1iZXJPZlJlcXVlc3RlZC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblx0XHRcdGlmIChkYXRhID4gMikge1xyXG5cdFx0XHRcdHRoaXMubWF4aW11bVJlc2VuZGluZ0hhcHBlbmQkLm5leHQodHJ1ZSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0c3VibWl0KCkge1xyXG5cdFx0aWYgKHRoaXMuZm9ybUdyb3VwLnZhbGlkKSB7XHJcblx0XHRcdHRoaXMuc3VibWl0dGVkLmVtaXQodGhpcy5mb3JtR3JvdXAudmFsdWUpO1xyXG5cdFx0XHRsZXQgbWVzc2FnZSA9IHRoaXMubWF4aW11bVJlc2VuZGluZ0hhcHBlbmQkLmdldFZhbHVlKClcclxuXHRcdFx0XHQ/IFwi2LnYr9mFINin2YXaqdin2YYgLi4uXCJcclxuXHRcdFx0XHQ6IFwi2b7bjNin2YXaqSDYrNiv24zYryDYqNix2KfbjCDYtNmF2Kcg2KfYsdiz2KfZhCDar9ix2K/bjNivLlwiO1xyXG5cdFx0XHR0aGlzLnNuYWNrQmFyLm9wZW4obWVzc2FnZSwgXCJcIiwge1xyXG5cdFx0XHRcdGR1cmF0aW9uOiAzMDAwXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iXX0=