/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter, Input, Injector } from "@angular/core";
import { FormGroup, Validators, FormControl } from "@angular/forms";
var ConfigAppConfigComponent = /** @class */ (function () {
    function ConfigAppConfigComponent(injector) {
        this.injector = injector;
        this.formGroup = new FormGroup({ AppTitle: new FormControl("", [Validators.required]) });
        this.configChanged = new EventEmitter();
        this.configFormGroup = this.injector.get("configFormGroup");
    }
    Object.defineProperty(ConfigAppConfigComponent.prototype, "configFormGroup", {
        set: /**
         * @param {?} configFormGroup
         * @return {?}
         */
        function (configFormGroup) {
            var _this = this;
            this.formGroup.patchValue(configFormGroup.value);
            configFormGroup.valueChanges.subscribe(function (data) {
                _this.formGroup.patchValue(data);
            });
        },
        enumerable: true,
        configurable: true
    });
    ConfigAppConfigComponent.decorators = [
        { type: Component, args: [{
                    selector: "config-app-config",
                    template: "<div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"25px\" class=\"main-container\">\n\n    <div class=\"content-action\">\n        <mat-card class=\"with-sticky-action\">\n            <mat-card-header>\n                <mat-card-title fxLayout=\"row\" fxLayoutGap=\"5px\">\n                    <mat-icon>settings_input_component</mat-icon>\n                    <span>\u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0633\u0627\u0645\u0627\u0646\u0647</span>\n                </mat-card-title>\n                <mat-card-subtitle fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                    <span>\n                        \u0634\u0627\u0645\u0644 \u062A\u0645\u0627\u0645\u06CC \u062F\u0631\u062E\u0648\u0627\u0633\u062A\u200C\u0647\u0627 \u0627\u0632 \u0642\u0628\u06CC\u0644 \u062F\u0627\u0626\u0631\u06CC\u060C \u062C\u0645\u0639\u200C\u0622\u0648\u0631\u06CC \u0648 ...\n                    </span>\n                </mat-card-subtitle>\n            </mat-card-header>\n\n            <div fxLayout=\"row wrap\" fxLayoutGap=\"10px\" fxLayoutAlign=\"start\">\n\n                <div [formGroup]=\"formGroup\">\n                    <mat-form-field>\n                        <input type=\"text\" (change)=\"configChanged.emit(formGroup.value)\" matInput placeholder=\"\u0646\u0627\u0645 \u067E\u0631\u0648\u0698\u0647\"\n                            formControlName=\"AppTitle\">\n                    </mat-form-field>\n                </div>\n            </div>\n\n        </mat-card>\n    </div>\n</div>"
                },] },
    ];
    /** @nocollapse */
    ConfigAppConfigComponent.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    ConfigAppConfigComponent.propDecorators = {
        configFormGroup: [{ type: Input }],
        configChanged: [{ type: Output }]
    };
    return ConfigAppConfigComponent;
}());
export { ConfigAppConfigComponent };
if (false) {
    /** @type {?} */
    ConfigAppConfigComponent.prototype.formGroup;
    /** @type {?} */
    ConfigAppConfigComponent.prototype.configChanged;
    /** @type {?} */
    ConfigAppConfigComponent.prototype.injector;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWNvbmZpZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2NvbmZpZy8iLCJzb3VyY2VzIjpbImxpYi9kdW1iLWNvbXBvbmVudHMvYXBwLWNvbmZpZy9hcHAtY29uZmlnLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFZLFNBQVMsRUFBVSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkcsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0lBNkNuRSxrQ0FBb0IsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTt5QkFUZixJQUFJLFNBQVMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBRSxVQUFVLENBQUMsUUFBUSxDQUFFLENBQUMsRUFBRSxDQUFDOzZCQVF0RSxJQUFJLFlBQVksRUFBRTtRQUUzQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7S0FDNUQ7SUFWRCxzQkFDSSxxREFBZTs7Ozs7UUFEbkIsVUFDb0IsZUFBMEI7WUFEOUMsaUJBTUM7WUFKQSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakQsZUFBZSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJO2dCQUMxQyxLQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNoQyxDQUFDLENBQUM7U0FDSDs7O09BQUE7O2dCQXhDRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsUUFBUSxFQUFFLHkvQ0E0Qko7aUJBQ047Ozs7Z0JBbkNrRSxRQUFROzs7a0NBc0N6RSxLQUFLO2dDQU9MLE1BQU07O21DQTdDUjs7U0FvQ2Esd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIENvbXBvbmVudCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIEluamVjdG9yIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBWYWxpZGF0b3JzLCBGb3JtQ29udHJvbCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiY29uZmlnLWFwcC1jb25maWdcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEFsaWduPVwiY2VudGVyXCIgZnhMYXlvdXRHYXA9XCIyNXB4XCIgY2xhc3M9XCJtYWluLWNvbnRhaW5lclwiPlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LWFjdGlvblwiPlxyXG4gICAgICAgIDxtYXQtY2FyZCBjbGFzcz1cIndpdGgtc3RpY2t5LWFjdGlvblwiPlxyXG4gICAgICAgICAgICA8bWF0LWNhcmQtaGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1jYXJkLXRpdGxlIGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRHYXA9XCI1cHhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24+c2V0dGluZ3NfaW5wdXRfY29tcG9uZW50PC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj7YqtmG2LjbjNmF2KfYqiDYs9in2YXYp9mG2Yc8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1jYXJkLXRpdGxlPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1jYXJkLXN1YnRpdGxlIGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRBbGlnbj1cInNwYWNlLWJldHdlZW4gY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgINi02KfZhdmEINiq2YXYp9mF24wg2K/Ysdiu2YjYp9iz2KrigIzZh9inINin2LIg2YLYqNuM2YQg2K/Yp9im2LHbjNiMINis2YXYueKAjNii2YjYsduMINmIIC4uLlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvbWF0LWNhcmQtc3VidGl0bGU+XHJcbiAgICAgICAgICAgIDwvbWF0LWNhcmQtaGVhZGVyPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBmeExheW91dD1cInJvdyB3cmFwXCIgZnhMYXlvdXRHYXA9XCIxMHB4XCIgZnhMYXlvdXRBbGlnbj1cInN0YXJ0XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgKGNoYW5nZSk9XCJjb25maWdDaGFuZ2VkLmVtaXQoZm9ybUdyb3VwLnZhbHVlKVwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwi2YbYp9mFINm+2LHZiNqY2YdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwiQXBwVGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L21hdC1jYXJkPlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PmBcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbmZpZ0FwcENvbmZpZ0NvbXBvbmVudCB7XHJcblx0Zm9ybUdyb3VwOiBGb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKHsgQXBwVGl0bGU6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSkgfSk7XHJcblx0QElucHV0KClcclxuXHRzZXQgY29uZmlnRm9ybUdyb3VwKGNvbmZpZ0Zvcm1Hcm91cDogRm9ybUdyb3VwKSB7XHJcblx0XHR0aGlzLmZvcm1Hcm91cC5wYXRjaFZhbHVlKGNvbmZpZ0Zvcm1Hcm91cC52YWx1ZSk7XHJcblx0XHRjb25maWdGb3JtR3JvdXAudmFsdWVDaGFuZ2VzLnN1YnNjcmliZShkYXRhID0+IHtcclxuXHRcdFx0dGhpcy5mb3JtR3JvdXAucGF0Y2hWYWx1ZShkYXRhKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRAT3V0cHV0KCkgY29uZmlnQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge1xyXG5cdFx0dGhpcy5jb25maWdGb3JtR3JvdXAgPSB0aGlzLmluamVjdG9yLmdldChcImNvbmZpZ0Zvcm1Hcm91cFwiKTtcclxuXHR9XHJcbn1cclxuIl19