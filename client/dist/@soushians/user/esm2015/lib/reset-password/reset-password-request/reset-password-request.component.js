/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { MatSnackBar } from "@angular/material";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
export class ResetPasswordRequestComponent {
    /**
     * @param {?} snackBar
     */
    constructor(snackBar) {
        this.snackBar = snackBar;
        this.submitted = new EventEmitter();
        this.maximumResendingHappend$ = new BehaviorSubject(false);
        this.timer$ = Observable.timer(0, 100)
            .map(i => i + 1)
            .takeWhile(i => i * 100 <= 3000)
            .map(i => 3000 - i * 100);
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
            let message = (this.maximumResendingHappend$.getValue())
                ? 'عدم امکان ...'
                : 'پیامک جدید برای شما ارسال گردید.';
            this.snackBar.open(message, '', {
                duration: 3000,
            });
        }
    }
}
ResetPasswordRequestComponent.decorators = [
    { type: Component, args: [{
                selector: 'user-reset-password-request',
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXQtcGFzc3dvcmQtcmVxdWVzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3VzZXIvIiwic291cmNlcyI6WyJsaWIvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQtcmVxdWVzdC9yZXNldC1wYXNzd29yZC1yZXF1ZXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsU0FBUyxFQUEyQixNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUc3QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDaEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBeUN2RCxNQUFNOzs7O0lBaUJFLFlBQ2U7UUFBQSxhQUFRLEdBQVIsUUFBUTt5QkFqQkQsSUFBSSxZQUFZLEVBQXFDO3dDQWNoRCxJQUFJLGVBQWUsQ0FBQyxLQUFLLENBQUM7UUFLN0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7YUFDN0IsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNmLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDO2FBQy9CLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7S0FDekM7Ozs7O0lBbEJELElBQWEsT0FBTyxDQUFDLFNBQWtCO1FBQy9CLElBQUksU0FBUyxFQUFFO1lBQ1AsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNoQztRQUVELElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUM7S0FDL0I7Ozs7SUFjRCxRQUFRO1FBQ0EsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNoQyxJQUFJLElBQUksR0FBRyxDQUFDLEVBQUU7Z0JBQ04sSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNoRDtTQUNSLENBQUMsQ0FBQTtLQUNUOzs7O0lBRUQsTUFBTTtRQUNFLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7WUFDMUMsSUFBSSxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ2hELENBQUMsQ0FBQyxlQUFlO2dCQUNqQixDQUFDLENBQUMsa0NBQWtDLENBQUM7WUFDN0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsRUFBRTtnQkFDeEIsUUFBUSxFQUFFLElBQUk7YUFDckIsQ0FBQyxDQUFBO1NBQ1Q7S0FDUjs7O1lBbkZSLFNBQVMsU0FBQztnQkFDSCxRQUFRLEVBQUUsNkJBQTZCO2dCQUN2QyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FrQ2pCO2dCQUNPLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQzthQUNuQjs7OztZQXpDUSxXQUFXOzs7d0JBMkNYLE1BQU07d0JBRU4sS0FBSztnQ0FDTCxLQUFLOzRCQUNMLEtBQUs7c0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcblxyXG5pbXBvcnQgeyBSZXNldFBhc3N3b3JkUmVxdWVzdE1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBNYXRTbmFja0JhciB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgICAgIHNlbGVjdG9yOiAndXNlci1yZXNldC1wYXNzd29yZC1yZXF1ZXN0JyxcclxuICAgICAgICB0ZW1wbGF0ZTogYDxmb3JtIFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwXCIgKG5nU3VibWl0KT1cInN1Ym1pdCgpXCIgZnhMYXlvdXQ9XCJjb2x1bW5cIj5cclxuICA8bWF0LWNhcmQ+XHJcbiAgICA8bWF0LWNhcmQtaGVhZGVyPlxyXG4gICAgICA8bWF0LWNhcmQtdGl0bGU+XHJcbiAgICAgICAgPGgzPtiv2LHYrtmI2KfYs9iqINio2KfYstuM2KfYqNuMINix2YXYsiDYudio2YjYsTwvaDM+XHJcbiAgICAgIDwvbWF0LWNhcmQtdGl0bGU+XHJcbiAgICA8L21hdC1jYXJkLWhlYWRlcj5cclxuICAgIDxtYXQtY2FyZC1jb250ZW50PlxyXG4gICAgICA8cD7YqNix2KfbjCDYqNin2LLbjNin2KjbjCDYsdmF2LIg2LnYqNmI2LEg2LTZhdin2LHZhyDYqtmE2YHZhiDYrtmI2K8g2LHYpyDZiNin2LHYryDZhtmF2KfbjNuM2K88L3A+XHJcbiAgICAgIDxtYXQtcmFkaW8tZ3JvdXAgZnhGbGV4RmlsbCBmb3JtQ29udHJvbE5hbWU9XCJUeXBlXCI+XHJcbiAgICAgICAgPG1hdC1yYWRpby1idXR0b24gdmFsdWU9XCJzbXNcIj7ZvtuM2KfZhdqpPC9tYXQtcmFkaW8tYnV0dG9uPlxyXG4gICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIHZhbHVlPVwiZW1haWxcIj7Zvtiz2Kog2KfZhNqp2KrYsdmI2YbbjNqp24w8L21hdC1yYWRpby1idXR0b24+XHJcbiAgICAgIDwvbWF0LXJhZGlvLWdyb3VwPlxyXG4gICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4RmlsbD5cclxuICAgICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLYtNmF2KfYsdmHINiq2YTZgdmGINmH2YXYsdin2YdcIiBmb3JtQ29udHJvbE5hbWU9XCJVc2VybmFtZVwiPlxyXG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgPC9tYXQtY2FyZC1jb250ZW50PlxyXG4gICAgPG1hdC1jYXJkLWFjdGlvbnM+XHJcbiAgICAgIDwhLS08YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBbZGlzYWJsZWRdPScoY2FuUmVxdWVzdFBpbiB8IGFzeW5jKSB8fCAobWF4aW11bVJlc2VuZGluZ0hhcHBlbmQkIHwgYXN5bmMpJyAoY2xpY2spPVwic3VibWl0KClcIiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIj4tLT5cclxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgW2Rpc2FibGVkXT0nKGNhblJlcXVlc3RQaW4gfCBhc3luYyknIChjbGljayk9XCJzdWJtaXQoKVwiIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgIDxzcGFuICpuZ0lmPSchKGNhblJlcXVlc3RQaW4gfCBhc3luYyknPlxyXG4gICAgICAgICAg2KjYp9iy24zYp9io24wg2LHZhdiyINi52KjZiNixXHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwhLS08ZGl2ICpuZ0lmPScoY2FuUmVxdWVzdFBpbiB8IGFzeW5jKSAmJiAhKG1heGltdW1SZXNlbmRpbmdIYXBwZW5kJCB8IGFzeW5jKSc+XHJcbiAgICAgICAgICB7e3RpbWVyJCB8IGFzeW5jfX0g2KvYp9mG24zZhyDYqtinINin2YXaqdin2YYg2K/YsSDYrtmI2KfYs9iqINiv2YjYqNin2LHZhyDYr9ix24zYp9mB2Kog2b7bjNin2YXaqS5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2ICpuZ0lmPScobWF4aW11bVJlc2VuZGluZ0hhcHBlbmQkIHwgYXN5bmMpJz5cclxuICAgICAgICAgINi52K/ZhSDYp9mF2qnYp9mGINiv2LHYrtmI2KfYs9iqXHJcbiAgICAgICAgPC9kaXY+LS0+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8YSBtYXQtYnV0dG9uIHJvdXRlckxpbms9Jy9hdXRoL3NpZ25pbic+2KfZhti12LHYp9mBPC9hPlxyXG4gICAgPC9tYXQtY2FyZC1hY3Rpb25zPlxyXG4gIDwvbWF0LWNhcmQ+XHJcbjwvZm9ybT5cclxuYCxcclxuICAgICAgICBzdHlsZXM6IFtgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFJlc2V0UGFzc3dvcmRSZXF1ZXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgICAgICBAT3V0cHV0KCkgc3VibWl0dGVkID0gbmV3IEV2ZW50RW1pdHRlcjxSZXNldFBhc3N3b3JkUmVxdWVzdE1vZGVsLlJlcXVlc3Q+KCk7XHJcblxyXG4gICAgICAgIEBJbnB1dCgpIGZvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG4gICAgICAgIEBJbnB1dCgpIG51bWJlck9mUmVxdWVzdGVkOiBPYnNlcnZhYmxlPG51bWJlcj47XHJcbiAgICAgICAgQElucHV0KCkgY2FuUmVxdWVzdFBpbjogT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuICAgICAgICBASW5wdXQoKSBzZXQgcGVuZGluZyhpc1BlbmRpbmc6IGJvb2xlYW4pIHtcclxuICAgICAgICAgICAgICAgIGlmIChpc1BlbmRpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtR3JvdXAuZGlzYWJsZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLmVuYWJsZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGltZXIkOiBPYnNlcnZhYmxlPG51bWJlcj47XHJcbiAgICAgICAgbWF4aW11bVJlc2VuZGluZ0hhcHBlbmQkID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgICAgICAgICAgcHVibGljIHNuYWNrQmFyOiBNYXRTbmFja0JhclxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lciQgPSBPYnNlcnZhYmxlLnRpbWVyKDAsIDEwMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChpID0+IGkgKyAxKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGFrZVdoaWxlKGkgPT4gaSAqIDEwMCA8PSAzMDAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKGkgPT4gMzAwMCAtIGkgKiAxMDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm51bWJlck9mUmVxdWVzdGVkLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEgPiAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXhpbXVtUmVzZW5kaW5nSGFwcGVuZCQubmV4dCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN1Ym1pdCgpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm1Hcm91cC52YWxpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdHRlZC5lbWl0KHRoaXMuZm9ybUdyb3VwLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSAodGhpcy5tYXhpbXVtUmVzZW5kaW5nSGFwcGVuZCQuZ2V0VmFsdWUoKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICfYudiv2YUg2KfZhdqp2KfZhiAuLi4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAn2b7bjNin2YXaqSDYrNiv24zYryDYqNix2KfbjCDYtNmF2Kcg2KfYsdiz2KfZhCDar9ix2K/bjNivLic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc25hY2tCYXIub3BlbihtZXNzYWdlLCAnJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxufVxyXG4iXX0=