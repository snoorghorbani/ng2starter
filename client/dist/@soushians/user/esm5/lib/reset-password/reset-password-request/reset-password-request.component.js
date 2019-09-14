/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Observable } from "rxjs/Observable";
import { MatSnackBar } from "@angular/material";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { map, takeWhile } from "rxjs/operators";
var ResetPasswordRequestComponent = /** @class */ (function () {
    function ResetPasswordRequestComponent(snackBar) {
        this.snackBar = snackBar;
        this.submitted = new EventEmitter();
        this.maximumResendingHappend$ = new BehaviorSubject(false);
        this.timer$ = Observable.timer(0, 100).pipe(map((/**
         * @param {?} i
         * @return {?}
         */
        function (i) { return i + 1; })), takeWhile((/**
         * @param {?} i
         * @return {?}
         */
        function (i) { return i * 100 <= 3000; })), map((/**
         * @param {?} i
         * @return {?}
         */
        function (i) { return 3000 - i * 100; })));
    }
    Object.defineProperty(ResetPasswordRequestComponent.prototype, "pending", {
        set: /**
         * @param {?} isPending
         * @return {?}
         */
        function (isPending) {
            if (isPending) {
                this.formGroup.disable();
            }
            this.formGroup.enable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ResetPasswordRequestComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.numberOfRequested.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            if (data > 2) {
                _this.maximumResendingHappend$.next(true);
            }
        }));
    };
    /**
     * @return {?}
     */
    ResetPasswordRequestComponent.prototype.submit = /**
     * @return {?}
     */
    function () {
        if (this.formGroup.valid) {
            this.submitted.emit(this.formGroup.value);
            /** @type {?} */
            var message = this.maximumResendingHappend$.getValue()
                ? "عدم امکان ..."
                : "پیامک جدید برای شما ارسال گردید.";
            this.snackBar.open(message, "", {
                duration: 3000
            });
        }
    };
    ResetPasswordRequestComponent.decorators = [
        { type: Component, args: [{
                    selector: "user-reset-password-request",
                    template: "<form [formGroup]=\"formGroup\" (ngSubmit)=\"submit()\" fxLayout=\"column\">\r\n  <mat-card>\r\n    <mat-card-header>\r\n      <mat-card-title>\r\n        <h3>\u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0628\u0627\u0632\u06CC\u0627\u0628\u06CC \u0631\u0645\u0632 \u0639\u0628\u0648\u0631</h3>\r\n      </mat-card-title>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n      <p>\u0628\u0631\u0627\u06CC \u0628\u0627\u0632\u06CC\u0627\u0628\u06CC \u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u0634\u0645\u0627\u0631\u0647 \u062A\u0644\u0641\u0646 \u062E\u0648\u062F \u0631\u0627 \u0648\u0627\u0631\u062F \u0646\u0645\u0627\u06CC\u06CC\u062F</p>\r\n      <mat-radio-group fxFlexFill formControlName=\"Type\">\r\n        <mat-radio-button value=\"sms\">\u067E\u06CC\u0627\u0645\u06A9</mat-radio-button>\r\n        <mat-radio-button value=\"email\">\u067E\u0633\u062A \u0627\u0644\u06A9\u062A\u0631\u0648\u0646\u06CC\u06A9\u06CC</mat-radio-button>\r\n      </mat-radio-group>\r\n      <mat-form-field fxFlexFill>\r\n        <input matInput placeholder=\"\u0634\u0645\u0627\u0631\u0647 \u062A\u0644\u0641\u0646 \u0647\u0645\u0631\u0627\u0647\" formControlName=\"Username\">\r\n      </mat-form-field>\r\n    </mat-card-content>\r\n    <mat-card-actions>\r\n      <!--<button type=\"submit\" [disabled]='(canRequestPin | async) || (maximumResendingHappend$ | async)' (click)=\"submit()\" mat-raised-button color=\"primary\">-->\r\n      <button type=\"submit\" [disabled]='(canRequestPin | async)' (click)=\"submit()\" mat-raised-button color=\"primary\">\r\n        <span *ngIf='!(canRequestPin | async)'>\r\n          \u0628\u0627\u0632\u06CC\u0627\u0628\u06CC \u0631\u0645\u0632 \u0639\u0628\u0648\u0631\r\n        </span>\r\n        <!--<div *ngIf='(canRequestPin | async) && !(maximumResendingHappend$ | async)'>\r\n          {{timer$ | async}} \u062B\u0627\u0646\u06CC\u0647 \u062A\u0627 \u0627\u0645\u06A9\u0627\u0646 \u062F\u0631 \u062E\u0648\u0627\u0633\u062A \u062F\u0648\u0628\u0627\u0631\u0647 \u062F\u0631\u06CC\u0627\u0641\u062A \u067E\u06CC\u0627\u0645\u06A9.\r\n        </div>\r\n        <div *ngIf='(maximumResendingHappend$ | async)'>\r\n          \u0639\u062F\u0645 \u0627\u0645\u06A9\u0627\u0646 \u062F\u0631\u062E\u0648\u0627\u0633\u062A\r\n        </div>-->\r\n      </button>\r\n      <a mat-button routerLink='/auth/signin'>\u0627\u0646\u0635\u0631\u0627\u0641</a>\r\n    </mat-card-actions>\r\n  </mat-card>\r\n</form>\r\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ResetPasswordRequestComponent.ctorParameters = function () { return [
        { type: MatSnackBar }
    ]; };
    ResetPasswordRequestComponent.propDecorators = {
        submitted: [{ type: Output }],
        formGroup: [{ type: Input }],
        numberOfRequested: [{ type: Input }],
        canRequestPin: [{ type: Input }],
        pending: [{ type: Input }]
    };
    return ResetPasswordRequestComponent;
}());
export { ResetPasswordRequestComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXQtcGFzc3dvcmQtcmVxdWVzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3VzZXIvIiwic291cmNlcyI6WyJsaWIvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQtcmVxdWVzdC9yZXNldC1wYXNzd29yZC1yZXF1ZXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsU0FBUyxFQUEyQixNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUc3QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDaEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFaEQ7SUF1QkMsdUNBQW1CLFFBQXFCO1FBQXJCLGFBQVEsR0FBUixRQUFRLENBQWE7UUFqQjlCLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBcUMsQ0FBQztRQWU1RSw2QkFBd0IsR0FBRyxJQUFJLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUdyRCxJQUFJLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FDMUMsR0FBRzs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxHQUFHLENBQUMsRUFBTCxDQUFLLEVBQUMsRUFDZixTQUFTOzs7O1FBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLEdBQUcsR0FBRyxJQUFJLElBQUksRUFBZixDQUFlLEVBQUMsRUFDL0IsR0FBRzs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsSUFBSSxHQUFHLENBQUMsR0FBRyxHQUFHLEVBQWQsQ0FBYyxFQUFDLENBQ3hCLENBQUM7SUFDSCxDQUFDO0lBbEJELHNCQUNJLGtEQUFPOzs7OztRQURYLFVBQ1ksU0FBa0I7WUFDN0IsSUFBSSxTQUFTLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUN6QjtZQUVELElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDekIsQ0FBQzs7O09BQUE7Ozs7SUFhRCxnREFBUTs7O0lBQVI7UUFBQSxpQkFNQztRQUxBLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxJQUFJO1lBQ3BDLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRTtnQkFDYixLQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3pDO1FBQ0YsQ0FBQyxFQUFDLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsOENBQU07OztJQUFOO1FBQ0MsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRTtZQUN6QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDOztnQkFDdEMsT0FBTyxHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxRQUFRLEVBQUU7Z0JBQ3JELENBQUMsQ0FBQyxlQUFlO2dCQUNqQixDQUFDLENBQUMsa0NBQWtDO1lBQ3JDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLEVBQUU7Z0JBQy9CLFFBQVEsRUFBRSxJQUFJO2FBQ2QsQ0FBQyxDQUFDO1NBQ0g7SUFDRixDQUFDOztnQkFqREQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSw2QkFBNkI7b0JBQ3ZDLDQ1RUFBc0Q7O2lCQUV0RDs7OztnQkFSUSxXQUFXOzs7NEJBVWxCLE1BQU07NEJBRU4sS0FBSztvQ0FDTCxLQUFLO2dDQUNMLEtBQUs7MEJBQ0wsS0FBSzs7SUF1Q1Asb0NBQUM7Q0FBQSxBQWxERCxJQWtEQztTQTdDWSw2QkFBNkI7OztJQUN6QyxrREFBNEU7O0lBRTVFLGtEQUE4Qjs7SUFDOUIsMERBQStDOztJQUMvQyxzREFBNEM7O0lBVTVDLCtDQUEyQjs7SUFDM0IsaUVBQXNEOztJQUUxQyxpREFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5cclxuaW1wb3J0IHsgUmVzZXRQYXNzd29yZFJlcXVlc3RNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvcmVzZXQtcGFzc3dvcmQtcmVxdWVzdC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBNYXRTbmFja0JhciB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcclxuaW1wb3J0IHsgbWFwLCB0YWtlV2hpbGUgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcInVzZXItcmVzZXQtcGFzc3dvcmQtcmVxdWVzdFwiLFxyXG5cdHRlbXBsYXRlVXJsOiBcIi4vcmVzZXQtcGFzc3dvcmQtcmVxdWVzdC5jb21wb25lbnQuaHRtbFwiLFxyXG5cdHN0eWxlVXJsczogWyBcIi4vcmVzZXQtcGFzc3dvcmQtcmVxdWVzdC5jb21wb25lbnQuc2Nzc1wiIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFJlc2V0UGFzc3dvcmRSZXF1ZXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRAT3V0cHV0KCkgc3VibWl0dGVkID0gbmV3IEV2ZW50RW1pdHRlcjxSZXNldFBhc3N3b3JkUmVxdWVzdE1vZGVsLlJlcXVlc3Q+KCk7XHJcblxyXG5cdEBJbnB1dCgpIGZvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG5cdEBJbnB1dCgpIG51bWJlck9mUmVxdWVzdGVkOiBPYnNlcnZhYmxlPG51bWJlcj47XHJcblx0QElucHV0KCkgY2FuUmVxdWVzdFBpbjogT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuXHRASW5wdXQoKVxyXG5cdHNldCBwZW5kaW5nKGlzUGVuZGluZzogYm9vbGVhbikge1xyXG5cdFx0aWYgKGlzUGVuZGluZykge1xyXG5cdFx0XHR0aGlzLmZvcm1Hcm91cC5kaXNhYmxlKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5mb3JtR3JvdXAuZW5hYmxlKCk7XHJcblx0fVxyXG5cclxuXHR0aW1lciQ6IE9ic2VydmFibGU8bnVtYmVyPjtcclxuXHRtYXhpbXVtUmVzZW5kaW5nSGFwcGVuZCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcclxuXHJcblx0Y29uc3RydWN0b3IocHVibGljIHNuYWNrQmFyOiBNYXRTbmFja0Jhcikge1xyXG5cdFx0dGhpcy50aW1lciQgPSBPYnNlcnZhYmxlLnRpbWVyKDAsIDEwMCkucGlwZShcclxuXHRcdFx0bWFwKGkgPT4gaSArIDEpLFxyXG5cdFx0XHR0YWtlV2hpbGUoaSA9PiBpICogMTAwIDw9IDMwMDApLFxyXG5cdFx0XHRtYXAoaSA9PiAzMDAwIC0gaSAqIDEwMClcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMubnVtYmVyT2ZSZXF1ZXN0ZWQuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cdFx0XHRpZiAoZGF0YSA+IDIpIHtcclxuXHRcdFx0XHR0aGlzLm1heGltdW1SZXNlbmRpbmdIYXBwZW5kJC5uZXh0KHRydWUpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHN1Ym1pdCgpIHtcclxuXHRcdGlmICh0aGlzLmZvcm1Hcm91cC52YWxpZCkge1xyXG5cdFx0XHR0aGlzLnN1Ym1pdHRlZC5lbWl0KHRoaXMuZm9ybUdyb3VwLnZhbHVlKTtcclxuXHRcdFx0bGV0IG1lc3NhZ2UgPSB0aGlzLm1heGltdW1SZXNlbmRpbmdIYXBwZW5kJC5nZXRWYWx1ZSgpXHJcblx0XHRcdFx0PyBcIti52K/ZhSDYp9mF2qnYp9mGIC4uLlwiXHJcblx0XHRcdFx0OiBcItm+24zYp9mF2qkg2KzYr9uM2K8g2KjYsdin24wg2LTZhdinINin2LHYs9in2YQg2q/Ysdiv24zYry5cIjtcclxuXHRcdFx0dGhpcy5zbmFja0Jhci5vcGVuKG1lc3NhZ2UsIFwiXCIsIHtcclxuXHRcdFx0XHRkdXJhdGlvbjogMzAwMFxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIl19