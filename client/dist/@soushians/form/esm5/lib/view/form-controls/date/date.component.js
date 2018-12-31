/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
var DateFormInputControlComponent = /** @class */ (function () {
    function DateFormInputControlComponent() {
    }
    DateFormInputControlComponent.decorators = [
        { type: Component, args: [{
                    selector: "ngs-form-control-date",
                    template: "<mat-form-field fxFlexFill [formGroup]=\"group\">\r\n\r\n  <!-- <input matInput [id]=\"config.name\" [type]=\"config.inputType\" [placeholder]=\"config.title\" [formControlName]=\"config.name\"> -->\r\n  <input matInput [id]=\"config.name\" [matDatepicker]=\"_datepicker\" [placeholder]=\"config.title\" [formControlName]=\"config.name\">\r\n  <mat-datepicker-toggle matSuffix [for]=\"_datepicker\"></mat-datepicker-toggle>\r\n  <mat-datepicker #_datepicker></mat-datepicker>\r\n\r\n  <mat-error *ngIf=\"group.get(config.name).errors?.required\">\r\n    {{config.validator.required.message}}\r\n  </mat-error>\r\n  <mat-error *ngIf=\"group.get(config.name).errors?.minlength\">\r\n    {{config.validator.minlength.message}}\r\n  </mat-error>\r\n  <!-- <mat-error *ngIf=\"group.get(config.name).email?.minlength\">\r\n    {{config.validator.email.message}}\r\n  </mat-error> -->\r\n\r\n  <!-- <div *ngIf=\"form.get(config.name).invalid && (form.get(config.name).dirty || form.get(config.name).touched)\" class=\"alert alert-danger\">\r\n  </div> -->\r\n\r\n</mat-form-field>\r\n\r\n<!-- \r\n\r\n<div [formGroup]=\"formGroup\">\r\n    <div class=\"field-wrapper\">\r\n      <div [@filedAnimation]=\"mode\">\r\n        <mat-form-field class=\"fit\" [(ngClass)]=\"mode\">\r\n            <input matInput [matDatepicker]=\"_datepicker\" [placeholder]=\"placeholder\" [formControlName]=\"controlName\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"_datepicker\"></mat-datepicker-toggle>\r\n            <mat-datepicker #_datepicker></mat-datepicker>\r\n            \r\n          <mat-icon class=\"tooltip md-18\" *ngIf=\"tooltip\" [matTooltip]=\"tooltip\">help</mat-icon>\r\n        </mat-form-field>\r\n        <div class=\"value-box\"> \r\n          <span class=\"name\">\r\n            {{ placeholder }} :\r\n          </span>\r\n          <span class=\"value\">\r\n            {{(DisplayValue$ | async | persianDate)}} \r\n          </span>\r\n          </div>\r\n      </div>\r\n    </div>\r\n</div> -->",
                    styles: [":host{display:block}.mat-form-field{width:100%}"]
                }] }
    ];
    /** @nocollapse */
    DateFormInputControlComponent.ctorParameters = function () { return []; };
    return DateFormInputControlComponent;
}());
export { DateFormInputControlComponent };
if (false) {
    /** @type {?} */
    DateFormInputControlComponent.prototype.config;
    /** @type {?} */
    DateFormInputControlComponent.prototype.group;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2Zvcm0vIiwic291cmNlcyI6WyJsaWIvdmlldy9mb3JtLWNvbnRyb2xzL2RhdGUvZGF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWlCLE1BQU0sZUFBZSxDQUFDOztJQWN4RDtLQUFnQjs7Z0JBVGhCLFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyx1K0RBQW9DOztpQkFFcEM7Ozs7d0NBVEQ7O1NBVWEsNkJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5pbXBvcnQgeyBGaWVsZENvbmZpZywgRmllbGQgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJuZ3MtZm9ybS1jb250cm9sLWRhdGVcIixcclxuXHR0ZW1wbGF0ZVVybDogXCIuL2RhdGUuY29tcG9uZW50Lmh0bWxcIixcclxuXHRzdHlsZVVybHM6IFsgXCIuL2RhdGUuY29tcG9uZW50LnNjc3NcIiBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXRlRm9ybUlucHV0Q29udHJvbENvbXBvbmVudCBpbXBsZW1lbnRzIEZpZWxkIHtcclxuXHRjb25maWc6IEZpZWxkQ29uZmlnO1xyXG5cdGdyb3VwOiBGb3JtR3JvdXA7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge31cclxufVxyXG4iXX0=