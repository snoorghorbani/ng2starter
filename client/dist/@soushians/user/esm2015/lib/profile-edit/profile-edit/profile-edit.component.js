/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Output, EventEmitter, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Observable } from "rxjs/Observable";
export class ProfileEditComponent {
    constructor() {
        this.submited = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @return {?}
     */
    editProfile() {
        if (!this.formGroup.valid)
            return;
        this.submited.emit(this.formGroup.value);
    }
}
ProfileEditComponent.decorators = [
    { type: Component, args: [{
                selector: "profile-edit",
                template: `<div fxFlex="450px">

  
  <form [formGroup]="formGroup" (ngSubmit)="editProfile()" fxLayout="column">
    <mat-card>
      <mat-card-content>
          <!-- <ngs-form-view [id]="formId"></ngs-form-view> -->
      </mat-card-content>
      <mat-card-actions fxLayoutAlign="center center">
        <button fxFlex="nogrow" type="submit" mat-raised-button color="primary">ویرایش</button>
        <button fxFlex="nogrow" type="button" routerLink="/user/panel/profile" mat-raised-button>بازگشت</button>
      </mat-card-actions>
    </mat-card>
  </form>
</div>`
            },] },
];
/** @nocollapse */
ProfileEditComponent.ctorParameters = () => [];
ProfileEditComponent.propDecorators = {
    submited: [{ type: Output }],
    formId: [{ type: Input }],
    formGroup: [{ type: Input }],
    roles$: [{ type: Input, args: ["roles",] }],
    groups: [{ type: Input }]
};
function ProfileEditComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    ProfileEditComponent.prototype.submited;
    /** @type {?} */
    ProfileEditComponent.prototype.formId;
    /** @type {?} */
    ProfileEditComponent.prototype.formGroup;
    /** @type {?} */
    ProfileEditComponent.prototype.roles$;
    /** @type {?} */
    ProfileEditComponent.prototype.groups;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS1lZGl0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvdXNlci8iLCJzb3VyY2VzIjpbImxpYi9wcm9maWxlLWVkaXQvcHJvZmlsZS1lZGl0L3Byb2ZpbGUtZWRpdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFL0UsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQW9CN0MsTUFBTTtJQU9MO3dCQU5xQixJQUFJLFlBQVksRUFBRTtLQU12Qjs7OztJQUVoQixRQUFRLE1BQUs7Ozs7SUFDYixXQUFXO1FBQ1YsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztZQUFDLE1BQU0sQ0FBQztRQUNsQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3pDOzs7WUEvQkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxjQUFjO2dCQUN4QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7O09BY0o7YUFDTjs7Ozs7dUJBRUMsTUFBTTtxQkFFTixLQUFLO3dCQUNMLEtBQUs7cUJBQ0wsS0FBSyxTQUFDLE9BQU87cUJBQ2IsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IENoYW5nZVBhc3N3b3JkTW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IENvbmZpZ01vZGVsIH0gZnJvbSBcIkBzb3VzaGlhbnMvY29uZmlnXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJwcm9maWxlLWVkaXRcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgZnhGbGV4PVwiNDUwcHhcIj5cclxuXHJcbiAgXHJcbiAgPGZvcm0gW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIiAobmdTdWJtaXQpPVwiZWRpdFByb2ZpbGUoKVwiIGZ4TGF5b3V0PVwiY29sdW1uXCI+XHJcbiAgICA8bWF0LWNhcmQ+XHJcbiAgICAgIDxtYXQtY2FyZC1jb250ZW50PlxyXG4gICAgICAgICAgPCEtLSA8bmdzLWZvcm0tdmlldyBbaWRdPVwiZm9ybUlkXCI+PC9uZ3MtZm9ybS12aWV3PiAtLT5cclxuICAgICAgPC9tYXQtY2FyZC1jb250ZW50PlxyXG4gICAgICA8bWF0LWNhcmQtYWN0aW9ucyBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiPlxyXG4gICAgICAgIDxidXR0b24gZnhGbGV4PVwibm9ncm93XCIgdHlwZT1cInN1Ym1pdFwiIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiPtmI24zYsdin24zYtDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gZnhGbGV4PVwibm9ncm93XCIgdHlwZT1cImJ1dHRvblwiIHJvdXRlckxpbms9XCIvdXNlci9wYW5lbC9wcm9maWxlXCIgbWF0LXJhaXNlZC1idXR0b24+2KjYp9iy2q/YtNiqPC9idXR0b24+XHJcbiAgICAgIDwvbWF0LWNhcmQtYWN0aW9ucz5cclxuICAgIDwvbWF0LWNhcmQ+XHJcbiAgPC9mb3JtPlxyXG48L2Rpdj5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQcm9maWxlRWRpdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0QE91dHB1dCgpIHN1Ym1pdGVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuXHRASW5wdXQoKSBmb3JtSWQ6IHN0cmluZztcclxuXHRASW5wdXQoKSBmb3JtR3JvdXA6IEZvcm1Hcm91cDtcclxuXHRASW5wdXQoXCJyb2xlc1wiKSByb2xlcyQ6IE9ic2VydmFibGU8c3RyaW5nW10+O1xyXG5cdEBJbnB1dCgpIGdyb3Vwczogc3RyaW5nW107XHJcblx0Y29uc3RydWN0b3IoKSB7fVxyXG5cclxuXHRuZ09uSW5pdCgpIHt9XHJcblx0ZWRpdFByb2ZpbGUoKSB7XHJcblx0XHRpZiAoIXRoaXMuZm9ybUdyb3VwLnZhbGlkKSByZXR1cm47XHJcblx0XHR0aGlzLnN1Ym1pdGVkLmVtaXQodGhpcy5mb3JtR3JvdXAudmFsdWUpO1xyXG5cdH1cclxufVxyXG4iXX0=