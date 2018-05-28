/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
        this.sex$ = new BehaviorSubject('');
        this.identifierType$ = new BehaviorSubject('');
    }
    /**
     * @return {?}
     */
    ProfileComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.information.subscribe(function (data) {
            if (data == null)
                return;
        });
    };
    ProfileComponent.decorators = [
        { type: Component, args: [{
                    selector: 'user-profile',
                    template: "<div fxFlex=\"450px\">\n  <mat-card>\n    <mat-card-header>\n      <mat-card-title>\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u067E\u0631\u0648\u0641\u0627\u06CC\u0644</mat-card-title>\n    </mat-card-header>\n    <mat-card-content *ngIf='dataStatus$ | async'>\n      <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>\u0627\u06CC\u0645\u06CC\u0644</p>\n        <p fxFlex='60'>{{(information | async).Email}}</p>\n      </div>\n      <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>roles</p>\n        <p fxFlex='60'>{{(information | async).Roles | json}}</p>\n      </div>\n      <!-- <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>\u0646\u0627\u0645</p>\n        <p fxFlex='60'>{{(userInformation | async).FirstName}}</p>\n      </div>\n      <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>\u0646\u0627\u0645 \u062E\u0627\u0646\u0648\u0627\u062F\u06AF\u06CC</p>\n        <p fxFlex='60'>{{(userInformation | async).LastName}}</p>\n      </div>\n      <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>\u0646\u0627\u0645 \u06A9\u0627\u0631\u0628\u0631\u06CC</p>\n        <p fxFlex='60'>{{(userInformation | async).Username}}</p>\n      </div>\n      <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>\u062A\u0644\u0641\u0646 \u0647\u0645\u0631\u0627\u0647</p>\n        <p fxFlex='60'>{{(userInformation | async).MobileNumber | persianNumber}}</p>\n      </div>\n      <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>\u062C\u0646\u0633\u06CC\u062A</p>\n        <p fxFlex='60'>{{sex$ | async}}</p>\n      </div>\n      <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>\u062A\u0627\u0631\u06CC\u062E \u062A\u0648\u0644\u062F</p>\n        <p fxFlex='60'>{{(userInformation | async).Birthdate | persianDate : false}}</p>\n      </div>\n      <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>\u0627\u06CC\u0645\u06CC\u0644</p>\n        <p fxFlex='60'>{{(userInformation | async).Email}}</p>\n      </div>\n      <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>{{(identifierType$ | async)}}</p>\n        <p fxFlex='60'>{{(userInformation | async).IdentificationNo | persianNumber}}</p>\n      </div>\n      <div class='list-item' fxFlexLayout='row'>\n        <p fxFlex='40'>\u062A\u0627\u0631\u06CC\u062E \u0639\u0636\u0648\u06CC\u062A</p>\n        <p fxFlex='60'>{{(userInformation | async).RegisterDate | persianDate}}</p>\n      </div> -->\n    </mat-card-content>\n\n    <mat-card-actions>\n      <button id=\"profile-edit-button\" fxFlex mat-raised-button color=\"primary\" routerLink='edit'>\u0648\u06CC\u0631\u0627\u06CC\u0634</button>\n    </mat-card-actions>\n  </mat-card>\n</div>",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    ProfileComponent.ctorParameters = function () { return []; };
    ProfileComponent.propDecorators = {
        information: [{ type: Input }],
        dataStatus$: [{ type: Input }]
    };
    return ProfileComponent;
}());
export { ProfileComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3VzZXIvIiwic291cmNlcyI6WyJsaWIvcHJvZmlsZS12aWV3L3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUc3QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0lBcUVuRDtvQkFGTyxJQUFJLGVBQWUsQ0FBQyxFQUFFLENBQUM7K0JBQ1osSUFBSSxlQUFlLENBQUMsRUFBRSxDQUFDO0tBRXhDOzs7O0lBRUQsbUNBQVE7OztJQUFSO1FBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJO1lBQzNCLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUM7Z0JBQUMsTUFBTSxDQUFDO1NBRTVCLENBQUMsQ0FBQTtLQUNMOztnQkEzRUosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxjQUFjO29CQUN4QixRQUFRLEVBQUUsaXRGQXdEUDtvQkFDSCxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7aUJBQ2Y7Ozs7OzhCQUVJLEtBQUs7OEJBQ0wsS0FBSzs7MkJBckVWOztTQW1FYSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuXHJcbmltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndXNlci1wcm9maWxlJyxcclxuICAgIHRlbXBsYXRlOiBgPGRpdiBmeEZsZXg9XCI0NTBweFwiPlxyXG4gIDxtYXQtY2FyZD5cclxuICAgIDxtYXQtY2FyZC1oZWFkZXI+XHJcbiAgICAgIDxtYXQtY2FyZC10aXRsZT7Yp9i32YTYp9i52KfYqiDZvtix2YjZgdin24zZhDwvbWF0LWNhcmQtdGl0bGU+XHJcbiAgICA8L21hdC1jYXJkLWhlYWRlcj5cclxuICAgIDxtYXQtY2FyZC1jb250ZW50ICpuZ0lmPSdkYXRhU3RhdHVzJCB8IGFzeW5jJz5cclxuICAgICAgPGRpdiBjbGFzcz0nbGlzdC1pdGVtJyBmeEZsZXhMYXlvdXQ9J3Jvdyc+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc0MCc+2KfbjNmF24zZhDwvcD5cclxuICAgICAgICA8cCBmeEZsZXg9JzYwJz57eyhpbmZvcm1hdGlvbiB8IGFzeW5jKS5FbWFpbH19PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz0nbGlzdC1pdGVtJyBmeEZsZXhMYXlvdXQ9J3Jvdyc+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc0MCc+cm9sZXM8L3A+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc2MCc+e3soaW5mb3JtYXRpb24gfCBhc3luYykuUm9sZXMgfCBqc29ufX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8IS0tIDxkaXYgY2xhc3M9J2xpc3QtaXRlbScgZnhGbGV4TGF5b3V0PSdyb3cnPlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNDAnPtmG2KfZhTwvcD5cclxuICAgICAgICA8cCBmeEZsZXg9JzYwJz57eyh1c2VySW5mb3JtYXRpb24gfCBhc3luYykuRmlyc3ROYW1lfX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPSdsaXN0LWl0ZW0nIGZ4RmxleExheW91dD0ncm93Jz5cclxuICAgICAgICA8cCBmeEZsZXg9JzQwJz7Zhtin2YUg2K7Yp9mG2YjYp9iv2q/bjDwvcD5cclxuICAgICAgICA8cCBmeEZsZXg9JzYwJz57eyh1c2VySW5mb3JtYXRpb24gfCBhc3luYykuTGFzdE5hbWV9fTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9J2xpc3QtaXRlbScgZnhGbGV4TGF5b3V0PSdyb3cnPlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNDAnPtmG2KfZhSDaqdin2LHYqNix24w8L3A+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc2MCc+e3sodXNlckluZm9ybWF0aW9uIHwgYXN5bmMpLlVzZXJuYW1lfX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPSdsaXN0LWl0ZW0nIGZ4RmxleExheW91dD0ncm93Jz5cclxuICAgICAgICA8cCBmeEZsZXg9JzQwJz7YqtmE2YHZhiDZh9mF2LHYp9mHPC9wPlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNjAnPnt7KHVzZXJJbmZvcm1hdGlvbiB8IGFzeW5jKS5Nb2JpbGVOdW1iZXIgfCBwZXJzaWFuTnVtYmVyfX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPSdsaXN0LWl0ZW0nIGZ4RmxleExheW91dD0ncm93Jz5cclxuICAgICAgICA8cCBmeEZsZXg9JzQwJz7YrNmG2LPbjNiqPC9wPlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNjAnPnt7c2V4JCB8IGFzeW5jfX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPSdsaXN0LWl0ZW0nIGZ4RmxleExheW91dD0ncm93Jz5cclxuICAgICAgICA8cCBmeEZsZXg9JzQwJz7Yqtin2LHbjNiuINiq2YjZhNivPC9wPlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNjAnPnt7KHVzZXJJbmZvcm1hdGlvbiB8IGFzeW5jKS5CaXJ0aGRhdGUgfCBwZXJzaWFuRGF0ZSA6IGZhbHNlfX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPSdsaXN0LWl0ZW0nIGZ4RmxleExheW91dD0ncm93Jz5cclxuICAgICAgICA8cCBmeEZsZXg9JzQwJz7Yp9uM2YXbjNmEPC9wPlxyXG4gICAgICAgIDxwIGZ4RmxleD0nNjAnPnt7KHVzZXJJbmZvcm1hdGlvbiB8IGFzeW5jKS5FbWFpbH19PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz0nbGlzdC1pdGVtJyBmeEZsZXhMYXlvdXQ9J3Jvdyc+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc0MCc+e3soaWRlbnRpZmllclR5cGUkIHwgYXN5bmMpfX08L3A+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc2MCc+e3sodXNlckluZm9ybWF0aW9uIHwgYXN5bmMpLklkZW50aWZpY2F0aW9uTm8gfCBwZXJzaWFuTnVtYmVyfX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPSdsaXN0LWl0ZW0nIGZ4RmxleExheW91dD0ncm93Jz5cclxuICAgICAgICA8cCBmeEZsZXg9JzQwJz7Yqtin2LHbjNiuINi52LbZiNuM2Ko8L3A+XHJcbiAgICAgICAgPHAgZnhGbGV4PSc2MCc+e3sodXNlckluZm9ybWF0aW9uIHwgYXN5bmMpLlJlZ2lzdGVyRGF0ZSB8IHBlcnNpYW5EYXRlfX08L3A+XHJcbiAgICAgIDwvZGl2PiAtLT5cclxuICAgIDwvbWF0LWNhcmQtY29udGVudD5cclxuXHJcbiAgICA8bWF0LWNhcmQtYWN0aW9ucz5cclxuICAgICAgPGJ1dHRvbiBpZD1cInByb2ZpbGUtZWRpdC1idXR0b25cIiBmeEZsZXggbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgcm91dGVyTGluaz0nZWRpdCc+2YjbjNix2KfbjNi0PC9idXR0b24+XHJcbiAgICA8L21hdC1jYXJkLWFjdGlvbnM+XHJcbiAgPC9tYXQtY2FyZD5cclxuPC9kaXY+YCxcclxuICAgIHN0eWxlczogW2BgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJvZmlsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBASW5wdXQoKSBpbmZvcm1hdGlvbjogT2JzZXJ2YWJsZTxVc2VyTW9kZWw+O1xyXG4gICAgQElucHV0KCkgZGF0YVN0YXR1cyQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPjtcclxuXHJcbiAgICBzZXgkID0gbmV3IEJlaGF2aW9yU3ViamVjdCgnJyk7XHJcbiAgICBpZGVudGlmaWVyVHlwZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KCcnKTtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuaW5mb3JtYXRpb24uc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YSA9PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG59Il19