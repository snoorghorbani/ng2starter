/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { BehaviorSubject } from "rxjs";
export class GwtThenAuthorizeStepComponent {
    constructor() {
        this.params$ = new BehaviorSubject(/** @type {?} */ ({}));
        this.formGroup = this._create_formGroup();
        this.params$.subscribe(params => this.formGroup.patchValue(params));
    }
    /**
     * @param {?} params
     * @return {?}
     */
    set params(params) {
        if (this.formGroup) {
            this.formGroup.patchValue(params);
        }
        this.params$.next(params);
    }
    /**
     * @return {?}
     */
    get params() {
        return Object.assign({}, this.formGroup.value);
    }
    /**
     * private methods
     * @return {?}
     */
    _create_formGroup() {
        return new FormGroup({
            verb: new FormControl("hidden")
        });
    }
}
GwtThenAuthorizeStepComponent.decorators = [
    { type: Component, args: [{
                template: `<mat-card class="step" fxLayout="row" fxLayoutGap="5px" fxLayoutAlign="start end" [formGroup]="formGroup">
  <div fxFlex="0 0 auto" class="step-text then">
    آنگاه
  </div>
  <div fxFlex="0 0 auto" class="step-text">
    این بخش قابل نمایش
  </div>
  <div fxFlex="nogrow">
    <mat-form-field fxFlex="nogrow">
      <mat-select formControlName="verb">
        <mat-option value="visible">باشد</mat-option>
        <mat-option value="hidden">نباشد</mat-option>
      </mat-select>
    </mat-form-field>
  </div>
</mat-card>`,
                styles: [`:host{width:100%}`]
            },] },
];
/** @nocollapse */
GwtThenAuthorizeStepComponent.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    GwtThenAuthorizeStepComponent.prototype.formGroup;
    /** @type {?} */
    GwtThenAuthorizeStepComponent.prototype.params$;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3d0LXRoZW4tYXV0aG9yaXplLXN0ZXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9nd3Qtc3RlcHMvIiwic291cmNlcyI6WyJsaWIvdGhlbi1hdXRob3JpemUvc3RlcC1jb21wb25lbnQvZ3d0LXRoZW4tYXV0aG9yaXplLXN0ZXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRWxELE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQXNCdkMsTUFBTSxPQUFPLDZCQUE2QjtJQVl6QztRQVZBLGVBQVUsSUFBSSxlQUFlLG1CQUE2QixFQUFnQyxFQUFDLENBQUM7UUFXM0YsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUMxQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7S0FDcEU7Ozs7O0lBWkQsSUFBSSxNQUFNLENBQUMsTUFBTTtRQUNoQixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDbEM7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUMxQjs7OztJQUNELElBQUksTUFBTTtRQUNULE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUMvQzs7Ozs7SUFTRCxpQkFBaUI7UUFDaEIsT0FBTyxJQUFJLFNBQVMsQ0FBQztZQUNwQixJQUFJLEVBQUUsSUFBSSxXQUFXLENBQUMsUUFBUSxDQUFDO1NBQy9CLENBQUMsQ0FBQztLQUNIOzs7WUEzQ0QsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7O1lBZUM7Z0JBQ1gsTUFBTSxFQUFFLENBQUMsbUJBQW1CLENBQUM7YUFDN0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEd3dFRoZW5TdGVwVWkgfSBmcm9tIFwiQHNvdXNoaWFucy9ydWxlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgVGhlblNob3dCbG9ja0d3dFN0ZXBQYXJhbXMgfSBmcm9tIFwiLi4vYXV0aG9yaXplLmd3dC10aGVuLXN0ZXBcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anNcIjtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHR0ZW1wbGF0ZTogYDxtYXQtY2FyZCBjbGFzcz1cInN0ZXBcIiBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0R2FwPVwiNXB4XCIgZnhMYXlvdXRBbGlnbj1cInN0YXJ0IGVuZFwiIFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwXCI+XHJcbiAgPGRpdiBmeEZsZXg9XCIwIDAgYXV0b1wiIGNsYXNzPVwic3RlcC10ZXh0IHRoZW5cIj5cclxuICAgINii2Ybar9in2YdcclxuICA8L2Rpdj5cclxuICA8ZGl2IGZ4RmxleD1cIjAgMCBhdXRvXCIgY2xhc3M9XCJzdGVwLXRleHRcIj5cclxuICAgINin24zZhiDYqNiu2LQg2YLYp9io2YQg2YbZhdin24zYtFxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgZnhGbGV4PVwibm9ncm93XCI+XHJcbiAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4PVwibm9ncm93XCI+XHJcbiAgICAgIDxtYXQtc2VsZWN0IGZvcm1Db250cm9sTmFtZT1cInZlcmJcIj5cclxuICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInZpc2libGVcIj7YqNin2LTYrzwvbWF0LW9wdGlvbj5cclxuICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cImhpZGRlblwiPtmG2KjYp9i02K88L21hdC1vcHRpb24+XHJcbiAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgPC9kaXY+XHJcbjwvbWF0LWNhcmQ+YCxcclxuXHRzdHlsZXM6IFtgOmhvc3R7d2lkdGg6MTAwJX1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgR3d0VGhlbkF1dGhvcml6ZVN0ZXBDb21wb25lbnQgaW1wbGVtZW50cyBHd3RUaGVuU3RlcFVpPGFueT4ge1xyXG5cdGZvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG5cdHBhcmFtcyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFRoZW5TaG93QmxvY2tHd3RTdGVwUGFyYW1zPih7fSBhcyBUaGVuU2hvd0Jsb2NrR3d0U3RlcFBhcmFtcyk7XHJcblx0c2V0IHBhcmFtcyhwYXJhbXMpIHtcclxuXHRcdGlmICh0aGlzLmZvcm1Hcm91cCkge1xyXG5cdFx0XHR0aGlzLmZvcm1Hcm91cC5wYXRjaFZhbHVlKHBhcmFtcyk7XHJcblx0XHR9XHJcblx0XHR0aGlzLnBhcmFtcyQubmV4dChwYXJhbXMpO1xyXG5cdH1cclxuXHRnZXQgcGFyYW1zKCk6IFRoZW5TaG93QmxvY2tHd3RTdGVwUGFyYW1zIHtcclxuXHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmZvcm1Hcm91cC52YWx1ZSk7XHJcblx0fVxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5mb3JtR3JvdXAgPSB0aGlzLl9jcmVhdGVfZm9ybUdyb3VwKCk7XHJcblx0XHR0aGlzLnBhcmFtcyQuc3Vic2NyaWJlKHBhcmFtcyA9PiB0aGlzLmZvcm1Hcm91cC5wYXRjaFZhbHVlKHBhcmFtcykpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogcHJpdmF0ZSBtZXRob2RzXHJcblx0ICovXHJcblx0X2NyZWF0ZV9mb3JtR3JvdXAoKSB7XHJcblx0XHRyZXR1cm4gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdHZlcmI6IG5ldyBGb3JtQ29udHJvbChcImhpZGRlblwiKVxyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcbiJdfQ==