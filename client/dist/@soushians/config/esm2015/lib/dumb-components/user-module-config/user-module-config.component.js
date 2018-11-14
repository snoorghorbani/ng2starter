/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter, Input, Injector } from "@angular/core";
import { FormGroup, Validators, FormControl, FormArray } from "@angular/forms";
export class UserModuleConfigComponent {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        this.injector = injector;
        this.formGroup = new FormGroup({
            endpoints: new FormGroup({
                changePassword: new FormControl("", [Validators.required]),
                editProfile: new FormControl("", [Validators.required]),
                getUserInfo: new FormControl("", [Validators.required]),
                whoAmI: new FormControl("", [Validators.required])
            }),
            forms: new FormGroup({
                profile_edit: new FormControl("", [Validators.required])
            }),
            dashboardLinks: new FormArray([])
        });
        this.configChanged = new EventEmitter();
        this.configFormGroup = this.injector.get("configFormGroup");
    }
    /**
     * @param {?} configFormGroup
     * @return {?}
     */
    set configFormGroup(configFormGroup) {
        this._configFormGroup = configFormGroup;
        (/** @type {?} */ (configFormGroup.controls["dashboardLinks"])).controls.forEach(control => {
            (/** @type {?} */ (this.formGroup.controls["dashboardLinks"])).push(new FormGroup({
                route: new FormControl("", [Validators.required]),
                icon: new FormControl("", [Validators.required]),
                title: new FormControl("", [Validators.required])
            }));
        });
        this.formGroup.patchValue(configFormGroup.value);
        configFormGroup.valueChanges.subscribe(data => {
            this.formGroup.patchValue(data);
        });
    }
    /**
     * @return {?}
     */
    get configFormGroup() {
        return this._configFormGroup;
    }
    /**
     * @return {?}
     */
    addMenu() {
        /** @type {?} */
        var menuItem = new FormGroup({
            route: new FormControl("", [Validators.required]),
            icon: new FormControl("", [Validators.required]),
            title: new FormControl("", [Validators.required])
        });
        (/** @type {?} */ (this.formGroup.get("dashboardLinks"))).push(menuItem);
        (/** @type {?} */ (this.configFormGroup.get("dashboardLinks"))).push(menuItem);
    }
}
UserModuleConfigComponent.decorators = [
    { type: Component, args: [{
                selector: "config-user-module-config",
                template: `<div fxLayout="row" fxLayoutAlign="center" fxLayoutGap="25px" class="main-container">

    <div class="content-action">
        <mat-card fxLayout="column" fxLayoutGap="10px" fxLayoutAlign="" class="with-sticky-action">
            <h2>Endpoints</h2>
            <div [formGroup]="formGroup.get('endpoints')" fxLayout="column">
                <mat-form-field>
                    <input type="text" (change)="configChanged.emit(formGroup.value)" matInput placeholder="change password"
                        formControlName="changePassword">
                </mat-form-field>
                <mat-form-field>
                    <input type="text" (change)="configChanged.emit(formGroup.value)" matInput placeholder="edit profile"
                        formControlName="editProfile">
                </mat-form-field>
                <mat-form-field>
                    <input type="text" (change)="configChanged.emit(formGroup.value)" matInput placeholder="get user info"
                        formControlName="getUserInfo">
                </mat-form-field>
                <mat-form-field>
                    <input type="text" (change)="configChanged.emit(formGroup.value)" matInput placeholder="Who Am I"
                        formControlName="whoAmI">
                </mat-form-field>
            </div>
            <h2>Forms</h2>
            <div [formGroup]="formGroup.get('forms')" fxLayout="column">
                <mat-form-field>
                    <input type="text" (change)="configChanged.emit(formGroup.value)" matInput placeholder="profile edit"
                        formControlName="profile_edit">
                </mat-form-field>
                <!-- <ngs-form-selector (select)="setFormId($event,'signIn')"></ngs-form-selector> -->
            </div>


            <h2 fxFlex="100">
                Dashobard Links
                <button mat-icon-button color="primary" (click)="addMenu()">
                    <mat-icon aria-label="icon-button icon">add</mat-icon>
                </button>
            </h2>
            <div fxFlex="100" *ngFor="let item of $any(formGroup.get('dashboardLinks')).controls">
                <div [formGroup]="item">
                    <mat-form-field>
                        <input type="text" (change)="configChanged.emit(formGroup.value)" matInput placeholder="route"
                            formControlName="route">
                    </mat-form-field>
                    <mat-form-field>
                        <input type="text" (change)="configChanged.emit(formGroup.value)" matInput placeholder="icon"
                            formControlName="icon">
                    </mat-form-field>
                    <mat-form-field>
                        <input type="text" (change)="configChanged.emit(formGroup.value)" matInput placeholder="title"
                            formControlName="title">
                    </mat-form-field>
                </div>
            </div>
        </mat-card>
    </div>
</div>`
            },] },
];
/** @nocollapse */
UserModuleConfigComponent.ctorParameters = () => [
    { type: Injector }
];
UserModuleConfigComponent.propDecorators = {
    configFormGroup: [{ type: Input }],
    configChanged: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    UserModuleConfigComponent.prototype.formGroup;
    /** @type {?} */
    UserModuleConfigComponent.prototype._configFormGroup;
    /** @type {?} */
    UserModuleConfigComponent.prototype.configChanged;
    /** @type {?} */
    UserModuleConfigComponent.prototype.injector;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1tb2R1bGUtY29uZmlnLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvY29uZmlnLyIsInNvdXJjZXMiOlsibGliL2R1bWItY29tcG9uZW50cy91c2VyLW1vZHVsZS1jb25maWcvdXNlci1tb2R1bGUtY29uZmlnLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFZLFNBQVMsRUFBVSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkcsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBZ0UvRSxNQUFNOzs7O0lBb0NMLFlBQW9CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7eUJBbkNmLElBQUksU0FBUyxDQUFDO1lBQ3BDLFNBQVMsRUFBRSxJQUFJLFNBQVMsQ0FBQztnQkFDeEIsY0FBYyxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUUsQ0FBQztnQkFDNUQsV0FBVyxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUUsQ0FBQztnQkFDekQsV0FBVyxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUUsQ0FBQztnQkFDekQsTUFBTSxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUUsQ0FBQzthQUNwRCxDQUFDO1lBQ0YsS0FBSyxFQUFFLElBQUksU0FBUyxDQUFDO2dCQUNwQixZQUFZLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFLENBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBRSxDQUFDO2FBQzFELENBQUM7WUFDRixjQUFjLEVBQUUsSUFBSSxTQUFTLENBQUMsRUFBRSxDQUFDO1NBQ2pDLENBQUM7NkJBdUJ3QixJQUFJLFlBQVksRUFBRTtRQUUzQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7S0FDNUQ7Ozs7O0lBeEJELElBQ0ksZUFBZSxDQUFDLGVBQTBCO1FBQzdDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxlQUFlLENBQUM7UUFDeEMsbUJBQUMsZUFBZSxDQUFDLFFBQVEsa0JBQTRCLEVBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ2pGLG1CQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxrQkFBNEIsRUFBQyxDQUFDLElBQUksQ0FDekQsSUFBSSxTQUFTLENBQUM7Z0JBQ2IsS0FBSyxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUUsQ0FBQztnQkFDbkQsSUFBSSxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUUsQ0FBQztnQkFDbEQsS0FBSyxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUUsQ0FBQzthQUNuRCxDQUFDLENBQ0YsQ0FBQztTQUNGLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqRCxlQUFlLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM3QyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNoQyxDQUFDLENBQUM7S0FDSDs7OztJQUNELElBQUksZUFBZTtRQUNsQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztLQUM3Qjs7OztJQUtELE9BQU87O1FBQ04sSUFBSSxRQUFRLEdBQUcsSUFBSSxTQUFTLENBQUM7WUFDNUIsS0FBSyxFQUFFLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUUsQ0FBQztZQUNuRCxJQUFJLEVBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFLENBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBRSxDQUFDO1lBQ2xELEtBQUssRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBRSxVQUFVLENBQUMsUUFBUSxDQUFFLENBQUM7U0FDbkQsQ0FBQyxDQUFDO1FBRUgsbUJBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQWMsRUFBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNuRSxtQkFBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBYyxFQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQ3pFOzs7WUE3R0QsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BeURKO2FBQ047Ozs7WUFoRWtFLFFBQVE7Ozs4QkErRXpFLEtBQUs7NEJBcUJMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgQ29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgSW5qZWN0b3IgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIFZhbGlkYXRvcnMsIEZvcm1Db250cm9sLCBGb3JtQXJyYXkgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJjb25maWctdXNlci1tb2R1bGUtY29uZmlnXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRBbGlnbj1cImNlbnRlclwiIGZ4TGF5b3V0R2FwPVwiMjVweFwiIGNsYXNzPVwibWFpbi1jb250YWluZXJcIj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1hY3Rpb25cIj5cclxuICAgICAgICA8bWF0LWNhcmQgZnhMYXlvdXQ9XCJjb2x1bW5cIiBmeExheW91dEdhcD1cIjEwcHhcIiBmeExheW91dEFsaWduPVwiXCIgY2xhc3M9XCJ3aXRoLXN0aWNreS1hY3Rpb25cIj5cclxuICAgICAgICAgICAgPGgyPkVuZHBvaW50czwvaDI+XHJcbiAgICAgICAgICAgIDxkaXYgW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXAuZ2V0KCdlbmRwb2ludHMnKVwiIGZ4TGF5b3V0PVwiY29sdW1uXCI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkLmVtaXQoZm9ybUdyb3VwLnZhbHVlKVwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwiY2hhbmdlIHBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwiY2hhbmdlUGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkLmVtaXQoZm9ybUdyb3VwLnZhbHVlKVwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwiZWRpdCBwcm9maWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwiZWRpdFByb2ZpbGVcIj5cclxuICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkLmVtaXQoZm9ybUdyb3VwLnZhbHVlKVwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwiZ2V0IHVzZXIgaW5mb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cImdldFVzZXJJbmZvXCI+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZC5lbWl0KGZvcm1Hcm91cC52YWx1ZSlcIiBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIldobyBBbSBJXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwid2hvQW1JXCI+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGgyPkZvcm1zPC9oMj5cclxuICAgICAgICAgICAgPGRpdiBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cC5nZXQoJ2Zvcm1zJylcIiBmeExheW91dD1cImNvbHVtblwiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIChjaGFuZ2UpPVwiY29uZmlnQ2hhbmdlZC5lbWl0KGZvcm1Hcm91cC52YWx1ZSlcIiBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cInByb2ZpbGUgZWRpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cInByb2ZpbGVfZWRpdFwiPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgIDwhLS0gPG5ncy1mb3JtLXNlbGVjdG9yIChzZWxlY3QpPVwic2V0Rm9ybUlkKCRldmVudCwnc2lnbkluJylcIj48L25ncy1mb3JtLXNlbGVjdG9yPiAtLT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgPGgyIGZ4RmxleD1cIjEwMFwiPlxyXG4gICAgICAgICAgICAgICAgRGFzaG9iYXJkIExpbmtzXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwiYWRkTWVudSgpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uIGFyaWEtbGFiZWw9XCJpY29uLWJ1dHRvbiBpY29uXCI+YWRkPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICA8ZGl2IGZ4RmxleD1cIjEwMFwiICpuZ0Zvcj1cImxldCBpdGVtIG9mICRhbnkoZm9ybUdyb3VwLmdldCgnZGFzaGJvYXJkTGlua3MnKSkuY29udHJvbHNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgW2Zvcm1Hcm91cF09XCJpdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQuZW1pdChmb3JtR3JvdXAudmFsdWUpXCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJyb3V0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJyb3V0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAoY2hhbmdlKT1cImNvbmZpZ0NoYW5nZWQuZW1pdChmb3JtR3JvdXAudmFsdWUpXCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJpY29uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cImljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkLmVtaXQoZm9ybUdyb3VwLnZhbHVlKVwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwidGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbWF0LWNhcmQ+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVXNlck1vZHVsZUNvbmZpZ0NvbXBvbmVudCB7XHJcblx0Zm9ybUdyb3VwOiBGb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdGVuZHBvaW50czogbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdGNoYW5nZVBhc3N3b3JkOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRlZGl0UHJvZmlsZTogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0Z2V0VXNlckluZm86IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdHdob0FtSTogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKVxyXG5cdFx0fSksXHJcblx0XHRmb3JtczogbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdHByb2ZpbGVfZWRpdDogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKVxyXG5cdFx0fSksXHJcblx0XHRkYXNoYm9hcmRMaW5rczogbmV3IEZvcm1BcnJheShbXSlcclxuXHR9KTtcclxuXHRfY29uZmlnRm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcblx0QElucHV0KClcclxuXHRzZXQgY29uZmlnRm9ybUdyb3VwKGNvbmZpZ0Zvcm1Hcm91cDogRm9ybUdyb3VwKSB7XHJcblx0XHR0aGlzLl9jb25maWdGb3JtR3JvdXAgPSBjb25maWdGb3JtR3JvdXA7XHJcblx0XHQoY29uZmlnRm9ybUdyb3VwLmNvbnRyb2xzLmRhc2hib2FyZExpbmtzIGFzIEZvcm1BcnJheSkuY29udHJvbHMuZm9yRWFjaChjb250cm9sID0+IHtcclxuXHRcdFx0KHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzLmRhc2hib2FyZExpbmtzIGFzIEZvcm1BcnJheSkucHVzaChcclxuXHRcdFx0XHRuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0XHRcdHJvdXRlOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdFx0aWNvbjogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRcdHRpdGxlOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuZm9ybUdyb3VwLnBhdGNoVmFsdWUoY29uZmlnRm9ybUdyb3VwLnZhbHVlKTtcclxuXHRcdGNvbmZpZ0Zvcm1Hcm91cC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cdFx0XHR0aGlzLmZvcm1Hcm91cC5wYXRjaFZhbHVlKGRhdGEpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdGdldCBjb25maWdGb3JtR3JvdXAoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fY29uZmlnRm9ybUdyb3VwO1xyXG5cdH1cclxuXHRAT3V0cHV0KCkgY29uZmlnQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge1xyXG5cdFx0dGhpcy5jb25maWdGb3JtR3JvdXAgPSB0aGlzLmluamVjdG9yLmdldChcImNvbmZpZ0Zvcm1Hcm91cFwiKTtcclxuXHR9XHJcblx0YWRkTWVudSgpIHtcclxuXHRcdHZhciBtZW51SXRlbSA9IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRyb3V0ZTogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0aWNvbjogbmV3IEZvcm1Db250cm9sKFwiXCIsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0dGl0bGU6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSlcclxuXHRcdH0pO1xyXG5cclxuXHRcdCh0aGlzLmZvcm1Hcm91cC5nZXQoXCJkYXNoYm9hcmRMaW5rc1wiKSBhcyBGb3JtQXJyYXkpLnB1c2gobWVudUl0ZW0pO1xyXG5cdFx0KHRoaXMuY29uZmlnRm9ybUdyb3VwLmdldChcImRhc2hib2FyZExpbmtzXCIpIGFzIEZvcm1BcnJheSkucHVzaChtZW51SXRlbSk7XHJcblx0fVxyXG59XHJcbiJdfQ==