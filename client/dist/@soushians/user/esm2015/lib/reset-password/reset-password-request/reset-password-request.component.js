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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXQtcGFzc3dvcmQtcmVxdWVzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3VzZXIvIiwic291cmNlcyI6WyJsaWIvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQtcmVxdWVzdC9yZXNldC1wYXNzd29yZC1yZXF1ZXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsU0FBUyxFQUEyQixNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUc3QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDaEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUF5Q2hELE1BQU0sT0FBTyw2QkFBNkI7Ozs7SUFrQnpDLFlBQW1CLFFBQXFCO1FBQXJCLGFBQVEsR0FBUixRQUFRLENBQWE7UUFqQnhDLGlCQUFzQixJQUFJLFlBQVksRUFBcUMsQ0FBQztRQWU1RSxnQ0FBMkIsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFHckQsSUFBSSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQzFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFDZixTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxFQUMvQixHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUN4QixDQUFDO0tBQ0Y7Ozs7O0lBbEJELElBQ0ksT0FBTyxDQUFDLFNBQWtCO1FBQzdCLElBQUksU0FBUyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUN6QjtRQUVELElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUM7S0FDeEI7Ozs7SUFhRCxRQUFRO1FBQ1AsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN2QyxJQUFJLElBQUksR0FBRyxDQUFDLEVBQUU7Z0JBQ2IsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN6QztTQUNELENBQUMsQ0FBQztLQUNIOzs7O0lBRUQsTUFBTTtRQUNMLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUU7WUFDekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7WUFDMUMsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFFBQVEsRUFBRTtnQkFDckQsQ0FBQyxDQUFDLGVBQWU7Z0JBQ2pCLENBQUMsQ0FBQyxrQ0FBa0MsQ0FBQztZQUN0QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxFQUFFO2dCQUMvQixRQUFRLEVBQUUsSUFBSTthQUNkLENBQUMsQ0FBQztTQUNIO0tBQ0Q7OztZQW5GRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLDZCQUE2QjtnQkFDdkMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBa0NWO2dCQUNBLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQzthQUNaOzs7O1lBMUNRLFdBQVc7Ozt3QkE0Q2xCLE1BQU07d0JBRU4sS0FBSztnQ0FDTCxLQUFLOzRCQUNMLEtBQUs7c0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcblxyXG5pbXBvcnQgeyBSZXNldFBhc3N3b3JkUmVxdWVzdE1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVscy9yZXNldC1wYXNzd29yZC1yZXF1ZXN0Lm1vZGVsXCI7XHJcbmltcG9ydCB7IE1hdFNuYWNrQmFyIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xyXG5pbXBvcnQgeyBtYXAsIHRha2VXaGlsZSB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwidXNlci1yZXNldC1wYXNzd29yZC1yZXF1ZXN0XCIsXHJcblx0dGVtcGxhdGU6IGA8Zm9ybSBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cFwiIChuZ1N1Ym1pdCk9XCJzdWJtaXQoKVwiIGZ4TGF5b3V0PVwiY29sdW1uXCI+XHJcbiAgPG1hdC1jYXJkPlxyXG4gICAgPG1hdC1jYXJkLWhlYWRlcj5cclxuICAgICAgPG1hdC1jYXJkLXRpdGxlPlxyXG4gICAgICAgIDxoMz7Yr9ix2K7ZiNin2LPYqiDYqNin2LLbjNin2KjbjCDYsdmF2LIg2LnYqNmI2LE8L2gzPlxyXG4gICAgICA8L21hdC1jYXJkLXRpdGxlPlxyXG4gICAgPC9tYXQtY2FyZC1oZWFkZXI+XHJcbiAgICA8bWF0LWNhcmQtY29udGVudD5cclxuICAgICAgPHA+2KjYsdin24wg2KjYp9iy24zYp9io24wg2LHZhdiyINi52KjZiNixINi02YXYp9ix2Ycg2KrZhNmB2YYg2K7ZiNivINix2Kcg2YjYp9ix2K8g2YbZhdin24zbjNivPC9wPlxyXG4gICAgICA8bWF0LXJhZGlvLWdyb3VwIGZ4RmxleEZpbGwgZm9ybUNvbnRyb2xOYW1lPVwiVHlwZVwiPlxyXG4gICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIHZhbHVlPVwic21zXCI+2b7bjNin2YXaqTwvbWF0LXJhZGlvLWJ1dHRvbj5cclxuICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiB2YWx1ZT1cImVtYWlsXCI+2b7Ys9iqINin2YTaqdiq2LHZiNmG24zaqduMPC9tYXQtcmFkaW8tYnV0dG9uPlxyXG4gICAgICA8L21hdC1yYWRpby1ncm91cD5cclxuICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleEZpbGw+XHJcbiAgICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwi2LTZhdin2LHZhyDYqtmE2YHZhiDZh9mF2LHYp9mHXCIgZm9ybUNvbnRyb2xOYW1lPVwiVXNlcm5hbWVcIj5cclxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgIDwvbWF0LWNhcmQtY29udGVudD5cclxuICAgIDxtYXQtY2FyZC1hY3Rpb25zPlxyXG4gICAgICA8IS0tPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgW2Rpc2FibGVkXT0nKGNhblJlcXVlc3RQaW4gfCBhc3luYykgfHwgKG1heGltdW1SZXNlbmRpbmdIYXBwZW5kJCB8IGFzeW5jKScgKGNsaWNrKT1cInN1Ym1pdCgpXCIgbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCI+LS0+XHJcbiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIFtkaXNhYmxlZF09JyhjYW5SZXF1ZXN0UGluIHwgYXN5bmMpJyAoY2xpY2spPVwic3VibWl0KClcIiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICA8c3BhbiAqbmdJZj0nIShjYW5SZXF1ZXN0UGluIHwgYXN5bmMpJz5cclxuICAgICAgICAgINio2KfYstuM2KfYqNuMINix2YXYsiDYudio2YjYsVxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8IS0tPGRpdiAqbmdJZj0nKGNhblJlcXVlc3RQaW4gfCBhc3luYykgJiYgIShtYXhpbXVtUmVzZW5kaW5nSGFwcGVuZCQgfCBhc3luYyknPlxyXG4gICAgICAgICAge3t0aW1lciQgfCBhc3luY319INir2KfZhtuM2Ycg2KrYpyDYp9mF2qnYp9mGINiv2LEg2K7ZiNin2LPYqiDYr9mI2KjYp9ix2Ycg2K/YsduM2KfZgdiqINm+24zYp9mF2qkuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiAqbmdJZj0nKG1heGltdW1SZXNlbmRpbmdIYXBwZW5kJCB8IGFzeW5jKSc+XHJcbiAgICAgICAgICDYudiv2YUg2KfZhdqp2KfZhiDYr9ix2K7ZiNin2LPYqlxyXG4gICAgICAgIDwvZGl2Pi0tPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPGEgbWF0LWJ1dHRvbiByb3V0ZXJMaW5rPScvYXV0aC9zaWduaW4nPtin2YbYtdix2KfZgTwvYT5cclxuICAgIDwvbWF0LWNhcmQtYWN0aW9ucz5cclxuICA8L21hdC1jYXJkPlxyXG48L2Zvcm0+XHJcbmAsXHJcblx0c3R5bGVzOiBbYGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZXNldFBhc3N3b3JkUmVxdWVzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0QE91dHB1dCgpIHN1Ym1pdHRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8UmVzZXRQYXNzd29yZFJlcXVlc3RNb2RlbC5SZXF1ZXN0PigpO1xyXG5cclxuXHRASW5wdXQoKSBmb3JtR3JvdXA6IEZvcm1Hcm91cDtcclxuXHRASW5wdXQoKSBudW1iZXJPZlJlcXVlc3RlZDogT2JzZXJ2YWJsZTxudW1iZXI+O1xyXG5cdEBJbnB1dCgpIGNhblJlcXVlc3RQaW46IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcblx0QElucHV0KClcclxuXHRzZXQgcGVuZGluZyhpc1BlbmRpbmc6IGJvb2xlYW4pIHtcclxuXHRcdGlmIChpc1BlbmRpbmcpIHtcclxuXHRcdFx0dGhpcy5mb3JtR3JvdXAuZGlzYWJsZSgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuZm9ybUdyb3VwLmVuYWJsZSgpO1xyXG5cdH1cclxuXHJcblx0dGltZXIkOiBPYnNlcnZhYmxlPG51bWJlcj47XHJcblx0bWF4aW11bVJlc2VuZGluZ0hhcHBlbmQkID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBzbmFja0JhcjogTWF0U25hY2tCYXIpIHtcclxuXHRcdHRoaXMudGltZXIkID0gT2JzZXJ2YWJsZS50aW1lcigwLCAxMDApLnBpcGUoXHJcblx0XHRcdG1hcChpID0+IGkgKyAxKSxcclxuXHRcdFx0dGFrZVdoaWxlKGkgPT4gaSAqIDEwMCA8PSAzMDAwKSxcclxuXHRcdFx0bWFwKGkgPT4gMzAwMCAtIGkgKiAxMDApXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLm51bWJlck9mUmVxdWVzdGVkLnN1YnNjcmliZShkYXRhID0+IHtcclxuXHRcdFx0aWYgKGRhdGEgPiAyKSB7XHJcblx0XHRcdFx0dGhpcy5tYXhpbXVtUmVzZW5kaW5nSGFwcGVuZCQubmV4dCh0cnVlKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRzdWJtaXQoKSB7XHJcblx0XHRpZiAodGhpcy5mb3JtR3JvdXAudmFsaWQpIHtcclxuXHRcdFx0dGhpcy5zdWJtaXR0ZWQuZW1pdCh0aGlzLmZvcm1Hcm91cC52YWx1ZSk7XHJcblx0XHRcdGxldCBtZXNzYWdlID0gdGhpcy5tYXhpbXVtUmVzZW5kaW5nSGFwcGVuZCQuZ2V0VmFsdWUoKVxyXG5cdFx0XHRcdD8gXCLYudiv2YUg2KfZhdqp2KfZhiAuLi5cIlxyXG5cdFx0XHRcdDogXCLZvtuM2KfZhdqpINis2K/bjNivINio2LHYp9uMINi02YXYpyDYp9ix2LPYp9mEINqv2LHYr9uM2K8uXCI7XHJcblx0XHRcdHRoaXMuc25hY2tCYXIub3BlbihtZXNzYWdlLCBcIlwiLCB7XHJcblx0XHRcdFx0ZHVyYXRpb246IDMwMDBcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiJdfQ==