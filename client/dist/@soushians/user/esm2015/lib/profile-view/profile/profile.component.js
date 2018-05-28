/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
export class ProfileComponent {
    constructor() {
        this.sex$ = new BehaviorSubject('');
        this.identifierType$ = new BehaviorSubject('');
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.information.subscribe(data => {
            if (data == null)
                return;
        });
    }
}
ProfileComponent.decorators = [
    { type: Component, args: [{
                selector: 'user-profile',
                template: `<div fxFlex="450px">
  <mat-card>
    <mat-card-header>
      <mat-card-title>اطلاعات پروفایل</mat-card-title>
    </mat-card-header>
    <mat-card-content *ngIf='dataStatus$ | async'>
      <div class='list-item' fxFlexLayout='row'>
        <p fxFlex='40'>ایمیل</p>
        <p fxFlex='60'>{{(information | async).Email}}</p>
      </div>
      <div class='list-item' fxFlexLayout='row'>
        <p fxFlex='40'>roles</p>
        <p fxFlex='60'>{{(information | async).Roles | json}}</p>
      </div>
      <!-- <div class='list-item' fxFlexLayout='row'>
        <p fxFlex='40'>نام</p>
        <p fxFlex='60'>{{(userInformation | async).FirstName}}</p>
      </div>
      <div class='list-item' fxFlexLayout='row'>
        <p fxFlex='40'>نام خانوادگی</p>
        <p fxFlex='60'>{{(userInformation | async).LastName}}</p>
      </div>
      <div class='list-item' fxFlexLayout='row'>
        <p fxFlex='40'>نام کاربری</p>
        <p fxFlex='60'>{{(userInformation | async).Username}}</p>
      </div>
      <div class='list-item' fxFlexLayout='row'>
        <p fxFlex='40'>تلفن همراه</p>
        <p fxFlex='60'>{{(userInformation | async).MobileNumber | persianNumber}}</p>
      </div>
      <div class='list-item' fxFlexLayout='row'>
        <p fxFlex='40'>جنسیت</p>
        <p fxFlex='60'>{{sex$ | async}}</p>
      </div>
      <div class='list-item' fxFlexLayout='row'>
        <p fxFlex='40'>تاریخ تولد</p>
        <p fxFlex='60'>{{(userInformation | async).Birthdate | persianDate : false}}</p>
      </div>
      <div class='list-item' fxFlexLayout='row'>
        <p fxFlex='40'>ایمیل</p>
        <p fxFlex='60'>{{(userInformation | async).Email}}</p>
      </div>
      <div class='list-item' fxFlexLayout='row'>
        <p fxFlex='40'>{{(identifierType$ | async)}}</p>
        <p fxFlex='60'>{{(userInformation | async).IdentificationNo | persianNumber}}</p>
      </div>
      <div class='list-item' fxFlexLayout='row'>
        <p fxFlex='40'>تاریخ عضویت</p>
        <p fxFlex='60'>{{(userInformation | async).RegisterDate | persianDate}}</p>
      </div> -->
    </mat-card-content>

    <mat-card-actions>
      <button id="profile-edit-button" fxFlex mat-raised-button color="primary" routerLink='edit'>ویرایش</button>
    </mat-card-actions>
  </mat-card>
</div>`,
                styles: [``]
            },] },
];
/** @nocollapse */
ProfileComponent.ctorParameters = () => [];
ProfileComponent.propDecorators = {
    information: [{ type: Input }],
    dataStatus$: [{ type: Input }]
};
function ProfileComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    ProfileComponent.prototype.information;
    /** @type {?} */
    ProfileComponent.prototype.dataStatus$;
    /** @type {?} */
    ProfileComponent.prototype.sex$;
    /** @type {?} */
    ProfileComponent.prototype.identifierType$;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3VzZXIvIiwic291cmNlcyI6WyJsaWIvcHJvZmlsZS12aWV3L3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUc3QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUErRHZELE1BQU07SUFNRjtvQkFGTyxJQUFJLGVBQWUsQ0FBQyxFQUFFLENBQUM7K0JBQ1osSUFBSSxlQUFlLENBQUMsRUFBRSxDQUFDO0tBRXhDOzs7O0lBRUQsUUFBUTtRQUNKLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzlCLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUM7Z0JBQUMsTUFBTSxDQUFDO1NBRTVCLENBQUMsQ0FBQTtLQUNMOzs7WUEzRUosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxjQUFjO2dCQUN4QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09Bd0RQO2dCQUNILE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQzthQUNmOzs7OzswQkFFSSxLQUFLOzBCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuXHJcbmltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndXNlci1wcm9maWxlJyxcclxuICAgIHRlbXBsYXRlOiBgPGRpdiBmeEZsZXg9XCI0NTBweFwiPlxyXG4gIDxtYXQtY2FyZD5cclxuICAgIDxtYXQtY2FyZC1oZWFkZXI+XHJcbiAgICAgIDxtYXQtY2FyZC10aXRsZT7Yp9i32YTYp9i52KfYqiDZvtix2YjZgdin24zZhDwvbWF0LWNhcmQtdGl0bGU+XHJcbiAgICA8L21hdC1jYXJkLWhlYWRlcj5cclxuICAgIDxtYXQtY2FyZC1jb250ZW50ICpuZ0lmPSdkYXRhU3RhdHVzJCB8IGFzeW5jJz5cclxuICAgICAgPGRpdiBjbGFzcz0nbGlzdC1pdGVtJyBmeEZsZXhMYXlvdXQ9J3Jvdyc+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc0MCc+2KfbjNmF24zZhDwvcD5cclxuICAgICAgICA8cCBmeEZsZXg9JzYwJz57eyhpbmZvcm1hdGlvbiB8IGFzeW5jKS5FbWFpbH19PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz0nbGlzdC1pdGVtJyBmeEZsZXhMYXlvdXQ9J3Jvdyc+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc0MCc+cm9sZXM8L3A+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc2MCc+e3soaW5mb3JtYXRpb24gfCBhc3luYykuUm9sZXMgfCBqc29ufX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8IS0tIDxkaXYgY2xhc3M9J2xpc3QtaXRlbScgZnhGbGV4TGF5b3V0PSdyb3cnPlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNDAnPtmG2KfZhTwvcD5cclxuICAgICAgICA8cCBmeEZsZXg9JzYwJz57eyh1c2VySW5mb3JtYXRpb24gfCBhc3luYykuRmlyc3ROYW1lfX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPSdsaXN0LWl0ZW0nIGZ4RmxleExheW91dD0ncm93Jz5cclxuICAgICAgICA8cCBmeEZsZXg9JzQwJz7Zhtin2YUg2K7Yp9mG2YjYp9iv2q/bjDwvcD5cclxuICAgICAgICA8cCBmeEZsZXg9JzYwJz57eyh1c2VySW5mb3JtYXRpb24gfCBhc3luYykuTGFzdE5hbWV9fTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9J2xpc3QtaXRlbScgZnhGbGV4TGF5b3V0PSdyb3cnPlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNDAnPtmG2KfZhSDaqdin2LHYqNix24w8L3A+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc2MCc+e3sodXNlckluZm9ybWF0aW9uIHwgYXN5bmMpLlVzZXJuYW1lfX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPSdsaXN0LWl0ZW0nIGZ4RmxleExheW91dD0ncm93Jz5cclxuICAgICAgICA8cCBmeEZsZXg9JzQwJz7YqtmE2YHZhiDZh9mF2LHYp9mHPC9wPlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNjAnPnt7KHVzZXJJbmZvcm1hdGlvbiB8IGFzeW5jKS5Nb2JpbGVOdW1iZXIgfCBwZXJzaWFuTnVtYmVyfX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPSdsaXN0LWl0ZW0nIGZ4RmxleExheW91dD0ncm93Jz5cclxuICAgICAgICA8cCBmeEZsZXg9JzQwJz7YrNmG2LPbjNiqPC9wPlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNjAnPnt7c2V4JCB8IGFzeW5jfX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPSdsaXN0LWl0ZW0nIGZ4RmxleExheW91dD0ncm93Jz5cclxuICAgICAgICA8cCBmeEZsZXg9JzQwJz7Yqtin2LHbjNiuINiq2YjZhNivPC9wPlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNjAnPnt7KHVzZXJJbmZvcm1hdGlvbiB8IGFzeW5jKS5CaXJ0aGRhdGUgfCBwZXJzaWFuRGF0ZSA6IGZhbHNlfX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPSdsaXN0LWl0ZW0nIGZ4RmxleExheW91dD0ncm93Jz5cclxuICAgICAgICA8cCBmeEZsZXg9JzQwJz7Yp9uM2YXbjNmEPC9wPlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNjAnPnt7KHVzZXJJbmZvcm1hdGlvbiB8IGFzeW5jKS5FbWFpbH19PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz0nbGlzdC1pdGVtJyBmeEZsZXhMYXlvdXQ9J3Jvdyc+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc0MCc+e3soaWRlbnRpZmllclR5cGUkIHwgYXN5bmMpfX08L3A+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc2MCc+e3sodXNlckluZm9ybWF0aW9uIHwgYXN5bmMpLklkZW50aWZpY2F0aW9uTm8gfCBwZXJzaWFuTnVtYmVyfX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPSdsaXN0LWl0ZW0nIGZ4RmxleExheW91dD0ncm93Jz5cclxuICAgICAgICA8cCBmeEZsZXg9JzQwJz7Yqtin2LHbjNiuINi52LbZiNuM2Ko8L3A+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc2MCc+e3sodXNlckluZm9ybWF0aW9uIHwgYXN5bmMpLlJlZ2lzdGVyRGF0ZSB8IHBlcnNpYW5EYXRlfX08L3A+XHJcbiAgICAgIDwvZGl2PiAtLT5cclxuICAgIDwvbWF0LWNhcmQtY29udGVudD5cclxuXHJcbiAgICA8bWF0LWNhcmQtYWN0aW9ucz5cclxuICAgICAgPGJ1dHRvbiBpZD1cInByb2ZpbGUtZWRpdC1idXR0b25cIiBmeEZsZXggbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgcm91dGVyTGluaz0nZWRpdCc+2YjbjNix2KfbjNi0PC9idXR0b24+XHJcbiAgICA8L21hdC1jYXJkLWFjdGlvbnM+XHJcbiAgPC9tYXQtY2FyZD5cclxuPC9kaXY+YCxcclxuICAgIHN0eWxlczogW2BgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJvZmlsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBASW5wdXQoKSBpbmZvcm1hdGlvbjogT2JzZXJ2YWJsZTxVc2VyTW9kZWw+O1xyXG4gICAgQElucHV0KCkgZGF0YVN0YXR1cyQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPjtcclxuXHJcbiAgICBzZXgkID0gbmV3IEJlaGF2aW9yU3ViamVjdCgnJyk7XHJcbiAgICBpZGVudGlmaWVyVHlwZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KCcnKTtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuaW5mb3JtYXRpb24uc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YSA9PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG59Il19