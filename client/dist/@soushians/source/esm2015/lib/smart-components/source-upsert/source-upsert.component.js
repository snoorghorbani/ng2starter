/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { UpsertSourceApiModel } from "../../models";
import { SourceService } from "../../services/source.service";
import { Store } from "@ngrx/store";
import { ActivatedRoute } from "@angular/router";
import { SourceSubmit } from "../../actions";
export class SourceUpsertComponent {
    /**
     * @param {?} sourceService
     * @param {?} formBuilder
     * @param {?} route
     * @param {?} store
     */
    constructor(sourceService, formBuilder, route, store) {
        this.sourceService = sourceService;
        this.formBuilder = formBuilder;
        this.route = route;
        this.store = store;
        //configInforamation;
        this.formGroup = UpsertSourceApiModel.Request.formGroup;
        this.types = ["critical", "goal"];
        // this.sources = this.sourceService.getSources();
        this.thresholds = ((/** @type {?} */ (this.formGroup.controls.Thresholds))).controls;
        this.route.params.subscribe((/**
         * @param {?} params
         * @return {?}
         */
        params => {
            /** @type {?} */
            const sourceId = params["id"];
            sourceId &&
                this.sourceService.getSourceById(sourceId).subscribe((/**
                 * @param {?} data
                 * @return {?}
                 */
                data => {
                    this.formGroup.patchValue({
                        _id: data._id,
                        Endpoint: data.Endpoint,
                        Interval: data.Interval,
                        IsActive: data.IsActive || false,
                        Thresholds: data.Thresholds
                    });
                    data.Thresholds.forEach((/**
                     * @param {?} mapping
                     * @return {?}
                     */
                    mapping => this.addItem(mapping.Name, mapping.Formula, mapping.Message, mapping.Type)));
                }));
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?=} Name
     * @param {?=} Formula
     * @param {?=} Message
     * @param {?=} Type
     * @return {?}
     */
    addItem(Name = "", Formula = "", Message = "", Type = "critical") {
        /** @type {?} */
        const control = (/** @type {?} */ (this.formGroup.controls["Thresholds"]));
        control.push(new FormGroup({
            Name: new FormControl(Name, [Validators.required]),
            Formula: new FormControl(Formula, [Validators.required]),
            Message: new FormControl(Message, [Validators.required]),
            Type: new FormControl(Type, [Validators.required])
        }));
        //    control.push(this.formBuilder.group({
        //      Name: [Name],
        //      Formula: [Formula],
        //      Message: [Message]
        //    }));
    }
    /**
     * @param {?} i
     * @return {?}
     */
    removeItem(i) {
        /** @type {?} */
        const control = (/** @type {?} */ (this.formGroup.controls["Thresholds"]));
        control.removeAt(i);
    }
    /**
     * @return {?}
     */
    getData() {
        /** @type {?} */
        const o$ = this.sourceService.getData(this.formGroup.value);
        o$.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.data = data.Data;
        }));
        return o$;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    add(data) {
        //if (!this.formGroup.valid) return;
        this.store.dispatch(new SourceSubmit(this.formGroup.value));
    }
}
SourceUpsertComponent.decorators = [
    { type: Component, args: [{
                selector: "source-source-upsert",
                template: "<div fxLayout=\"column\">\r\n  <div fxFlex=\"100\">\r\n    <mat-card fxLayout=\"column\" fxFlex=\"50\">\r\n      <form [formGroup]=\"formGroup\" fxLayout='column'>\r\n\r\n        <mat-card-header>\r\n          <mat-card-title>\u0627\u0641\u0632\u0648\u062F\u0646 \u0646\u0645\u0648\u062F\u0627\u0631 \u062C\u062F\u06CC\u062F</mat-card-title>\r\n        </mat-card-header>\r\n        <mat-card-content>\r\n          <mat-form-field fxFlexFill>\r\n            <input matInput placeholder=\"\u0622\u062F\u0631\u0633\" formControlName=\"Endpoint\">\r\n          </mat-form-field>\r\n\r\n          <mat-form-field fxFlexFill>\r\n            <input matInput placeholder=\"\u0645\u062F\u062A \u0632\u0645\u0627\u0646 \u0628\u0647 \u0631\u0648\u0632 \u0631\u0633\u0627\u0646\u06CC \u062F\u0627\u062F\u0647\" formControlName=\"Interval\">\r\n          </mat-form-field>\r\n          <div>\r\n            <mat-checkbox formControlName=\"IsActive\" fxFlexFill>\u0648\u0636\u0639\u06CC\u062A</mat-checkbox>\r\n          </div>\r\n        </mat-card-content>\r\n      </form>\r\n    </mat-card>\r\n\r\n    <mat-card fxLayout=\"column\" fxFlex=\"20\">\r\n      <mat-card-content fxLayout=\"column\">\r\n        <div>\r\n          <button fxFlex mat-raised-button color=\"primary\" (click)=\"getData()\">\u0633\u0627\u062E\u062A\u0627\u0631 \u062F\u06CC\u062A\u0627</button>\r\n        </div>\r\n        <div class=\"item-margin\">\r\n          <!-- TODO: -->\r\n          <!-- <data-mapper destination=\"value\" [data]=\"data\"></data-mapper> -->\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card fxLayout=\"column\" fxFlex=\"30\">\r\n      <mat-card-content fxLayout=\"column\">\r\n        <div fxLayout=\"column\" fxLayoutGap=\"5px\">\r\n          <div *ngFor=\"let threshold of thresholds; let i=index\" fxFlex=\"100\" class=\"add-item\">\r\n            <div fxLayout=\"column\">\r\n              <div [formGroup]=\"thresholds[i]\" fxLayout=\"column\">\r\n                <mat-form-field fxFlexFill>\r\n                  <input matInput placeholder=\"\u0646\u0627\u0645\" formControlName=\"Name\">\r\n                </mat-form-field>\r\n                <mat-form-field fxFlexFill>\r\n                  <input class=\"ltr\" matInput placeholder=\"\u0641\u0631\u0645\u0648\u0644\" formControlName=\"Formula\">\r\n                </mat-form-field>\r\n                <mat-form-field fxFlexFill>\r\n                  <input matInput placeholder=\"\u062A\u0648\u0636\u06CC\u062D\" formControlName=\"Message\">\r\n                </mat-form-field>\r\n                <mat-radio-group formControlName=\"Type\" fxFlexFill>\r\n                  <label>\u0646\u0648\u0639 :</label>\r\n                  <mat-radio-button *ngFor=\"let item of types\" [value]=\"item\" class=\"form-element-margin\">\r\n                    {{item}}\r\n                  </mat-radio-button>\r\n                </mat-radio-group>\r\n\r\n                <button (click)=\"removeItem(i)\" fxFlex mat-button color=\"primary\" type=\"button\">\u067E\u0627\u06A9 \u06A9\u0631\u062F\u0646</button>\r\n              </div>\r\n              <br />\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"item-margin\">\r\n          <button (click)=\"addItem()\" fxFlex mat-raised-button color=\"primary\" type=\"button\">\u0627\u0641\u0632\u0648\u062F\u0646 \u0622\u0633\u062A\u0627\u0646\u0647</button>\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n  <div fxFlex=\"100\">\r\n    <mat-card fxLayoutAlign=\"end center\" fxLayout=\"row\" fxFlex=\"100\">\r\n      <mat-card-content>\r\n        <button mat-raised-button fxFlex color=\"primary\" (click)=\"add($event)\">\u062B\u0628\u062A</button>\r\n        <button fxFlex mat-raised-button routerLink='/source'  fxLayoutGap=\"5px\">\u0627\u0646\u0635\u0631\u0627\u0641</button>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n",
                styles: ["mat-card{margin:5px}.add-item{border:1px solid #eaeaea;padding:10px;margin:5px 0}.item-margin{margin-top:10px}button[type=submit]{margin-left:5px}.ltr{direction:ltr}.form-element-margin{margin:5px 10px}"]
            }] }
];
/** @nocollapse */
SourceUpsertComponent.ctorParameters = () => [
    { type: SourceService },
    { type: FormBuilder },
    { type: ActivatedRoute },
    { type: Store }
];
if (false) {
    /** @type {?} */
    SourceUpsertComponent.prototype.formGroup;
    /** @type {?} */
    SourceUpsertComponent.prototype.sources;
    /** @type {?} */
    SourceUpsertComponent.prototype.thresholds;
    /** @type {?} */
    SourceUpsertComponent.prototype.data;
    /** @type {?} */
    SourceUpsertComponent.prototype.types;
    /**
     * @type {?}
     * @private
     */
    SourceUpsertComponent.prototype.sourceService;
    /**
     * @type {?}
     * @private
     */
    SourceUpsertComponent.prototype.formBuilder;
    /**
     * @type {?}
     * @private
     */
    SourceUpsertComponent.prototype.route;
    /**
     * @type {?}
     * @private
     */
    SourceUpsertComponent.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLXVwc2VydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3NvdXJjZS8iLCJzb3VyY2VzIjpbImxpYi9zbWFydC1jb21wb25lbnRzL3NvdXJjZS11cHNlcnQvc291cmNlLXVwc2VydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBWSxTQUFTLEVBQW9FLE1BQU0sZUFBZSxDQUFDO0FBRXRILE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBOEIsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0csT0FBTyxFQUFFLG9CQUFvQixFQUFlLE1BQU0sY0FBYyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVqRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUzdDLE1BQU0sT0FBTyxxQkFBcUI7Ozs7Ozs7SUFPakMsWUFDUyxhQUE0QixFQUM1QixXQUF3QixFQUN4QixLQUFxQixFQUNyQixLQUF5QztRQUh6QyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixVQUFLLEdBQUwsS0FBSyxDQUFvQzs7UUFUbEQsY0FBUyxHQUFjLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7UUFJOUQsVUFBSyxHQUFHLENBQUUsVUFBVSxFQUFFLE1BQU0sQ0FBRSxDQUFDO1FBTzlCLGtEQUFrRDtRQUNsRCxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsbUJBQUEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFhLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFDN0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUzs7OztRQUFDLE1BQU0sQ0FBQyxFQUFFOztrQkFDOUIsUUFBUSxHQUFXLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDckMsUUFBUTtnQkFDUCxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTOzs7O2dCQUFDLElBQUksQ0FBQyxFQUFFO29CQUMzRCxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQzt3QkFDekIsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHO3dCQUNiLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTt3QkFDdkIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO3dCQUN2QixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsSUFBSSxLQUFLO3dCQUNoQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7cUJBQzNCLENBQUMsQ0FBQztvQkFFSCxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7b0JBQUMsT0FBTyxDQUFDLEVBQUUsQ0FDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQzFFLENBQUM7Z0JBQ0gsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxRQUFRLEtBQUksQ0FBQzs7Ozs7Ozs7SUFFYixPQUFPLENBQUMsT0FBZSxFQUFFLEVBQUUsVUFBa0IsRUFBRSxFQUFFLFVBQWtCLEVBQUUsRUFBRSxPQUFlLFVBQVU7O2NBQ3pGLE9BQU8sR0FBRyxtQkFBVyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBQTtRQUNoRSxPQUFPLENBQUMsSUFBSSxDQUNYLElBQUksU0FBUyxDQUFDO1lBQ2IsSUFBSSxFQUFFLElBQUksV0FBVyxDQUFDLElBQUksRUFBRSxDQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUUsQ0FBQztZQUNwRCxPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBRSxDQUFDO1lBQzFELE9BQU8sRUFBRSxJQUFJLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBRSxVQUFVLENBQUMsUUFBUSxDQUFFLENBQUM7WUFDMUQsSUFBSSxFQUFFLElBQUksV0FBVyxDQUFDLElBQUksRUFBRSxDQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUUsQ0FBQztTQUNwRCxDQUFDLENBQ0YsQ0FBQztRQUNGLDJDQUEyQztRQUMzQyxxQkFBcUI7UUFDckIsMkJBQTJCO1FBQzNCLDBCQUEwQjtRQUMxQixVQUFVO0lBQ1gsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsQ0FBUzs7Y0FDYixPQUFPLEdBQUcsbUJBQVcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUE7UUFDaEUsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQsT0FBTzs7Y0FDQSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7UUFDM0QsRUFBRSxDQUFDLFNBQVM7Ozs7UUFBQyxJQUFJLENBQUMsRUFBRTtZQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDdkIsQ0FBQyxFQUFDLENBQUM7UUFDSCxPQUFPLEVBQUUsQ0FBQztJQUNYLENBQUM7Ozs7O0lBRUQsR0FBRyxDQUFDLElBQUk7UUFDUCxvQ0FBb0M7UUFDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzdELENBQUM7OztZQTFFRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsMDNIQUE2Qzs7YUFFN0M7Ozs7WUFaUSxhQUFhO1lBRkYsV0FBVztZQUl0QixjQUFjO1lBRGQsS0FBSzs7OztJQWNiLDBDQUE4RDs7SUFDOUQsd0NBQW1DOztJQUNuQywyQ0FBOEI7O0lBQzlCLHFDQUFVOztJQUNWLHNDQUErQjs7Ozs7SUFFOUIsOENBQW9DOzs7OztJQUNwQyw0Q0FBZ0M7Ozs7O0lBQ2hDLHNDQUE2Qjs7Ozs7SUFDN0Isc0NBQWlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIENvbXBvbmVudCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIFZpZXdDaGlsZCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBGb3JtQ29udHJvbCwgQWJzdHJhY3RDb250cm9sLCBGb3JtQXJyYXksIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgVXBzZXJ0U291cmNlQXBpTW9kZWwsIFNvdXJjZU1vZGVsIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBTb3VyY2VTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3NvdXJjZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTb3VyY2VTdWJtaXQgfSBmcm9tIFwiLi4vLi4vYWN0aW9uc1wiO1xyXG5pbXBvcnQgKiBhcyBGZWF0dXJlUmVkdWNlciBmcm9tIFwiLi4vLi4vcmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anMvUnhcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcInNvdXJjZS1zb3VyY2UtdXBzZXJ0XCIsXHJcblx0dGVtcGxhdGVVcmw6IFwiLi9zb3VyY2UtdXBzZXJ0LmNvbXBvbmVudC5odG1sXCIsXHJcblx0c3R5bGVVcmxzOiBbIFwiLi9zb3VyY2UtdXBzZXJ0LmNvbXBvbmVudC5zY3NzXCIgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU291cmNlVXBzZXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHQvL2NvbmZpZ0luZm9yYW1hdGlvbjtcclxuXHRmb3JtR3JvdXA6IEZvcm1Hcm91cCA9IFVwc2VydFNvdXJjZUFwaU1vZGVsLlJlcXVlc3QuZm9ybUdyb3VwO1xyXG5cdHNvdXJjZXM6IE9ic2VydmFibGU8U291cmNlTW9kZWxbXT47XHJcblx0dGhyZXNob2xkczogQWJzdHJhY3RDb250cm9sW107XHJcblx0ZGF0YTogYW55O1xyXG5cdHR5cGVzID0gWyBcImNyaXRpY2FsXCIsIFwiZ29hbFwiIF07XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIHNvdXJjZVNlcnZpY2U6IFNvdXJjZVNlcnZpY2UsXHJcblx0XHRwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcclxuXHRcdHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVJlZHVjZXIuRmVhdHVyZVN0YXRlPlxyXG5cdCkge1xyXG5cdFx0Ly8gdGhpcy5zb3VyY2VzID0gdGhpcy5zb3VyY2VTZXJ2aWNlLmdldFNvdXJjZXMoKTtcclxuXHRcdHRoaXMudGhyZXNob2xkcyA9ICh0aGlzLmZvcm1Hcm91cC5jb250cm9scy5UaHJlc2hvbGRzIGFzIEZvcm1BcnJheSkuY29udHJvbHM7XHJcblx0XHR0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuXHRcdFx0Y29uc3Qgc291cmNlSWQ6IHN0cmluZyA9IHBhcmFtc1tcImlkXCJdO1xyXG5cdFx0XHRzb3VyY2VJZCAmJlxyXG5cdFx0XHRcdHRoaXMuc291cmNlU2VydmljZS5nZXRTb3VyY2VCeUlkKHNvdXJjZUlkKS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmZvcm1Hcm91cC5wYXRjaFZhbHVlKHtcclxuXHRcdFx0XHRcdFx0X2lkOiBkYXRhLl9pZCxcclxuXHRcdFx0XHRcdFx0RW5kcG9pbnQ6IGRhdGEuRW5kcG9pbnQsXHJcblx0XHRcdFx0XHRcdEludGVydmFsOiBkYXRhLkludGVydmFsLFxyXG5cdFx0XHRcdFx0XHRJc0FjdGl2ZTogZGF0YS5Jc0FjdGl2ZSB8fCBmYWxzZSxcclxuXHRcdFx0XHRcdFx0VGhyZXNob2xkczogZGF0YS5UaHJlc2hvbGRzXHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHRkYXRhLlRocmVzaG9sZHMuZm9yRWFjaChtYXBwaW5nID0+XHJcblx0XHRcdFx0XHRcdHRoaXMuYWRkSXRlbShtYXBwaW5nLk5hbWUsIG1hcHBpbmcuRm9ybXVsYSwgbWFwcGluZy5NZXNzYWdlLCBtYXBwaW5nLlR5cGUpXHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHt9XHJcblxyXG5cdGFkZEl0ZW0oTmFtZTogc3RyaW5nID0gXCJcIiwgRm9ybXVsYTogc3RyaW5nID0gXCJcIiwgTWVzc2FnZTogc3RyaW5nID0gXCJcIiwgVHlwZTogc3RyaW5nID0gXCJjcml0aWNhbFwiKSB7XHJcblx0XHRjb25zdCBjb250cm9sID0gPEZvcm1BcnJheT50aGlzLmZvcm1Hcm91cC5jb250cm9sc1tcIlRocmVzaG9sZHNcIl07XHJcblx0XHRjb250cm9sLnB1c2goXHJcblx0XHRcdG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRcdE5hbWU6IG5ldyBGb3JtQ29udHJvbChOYW1lLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0Rm9ybXVsYTogbmV3IEZvcm1Db250cm9sKEZvcm11bGEsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRNZXNzYWdlOiBuZXcgRm9ybUNvbnRyb2woTWVzc2FnZSwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdFR5cGU6IG5ldyBGb3JtQ29udHJvbChUeXBlLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSlcclxuXHRcdFx0fSlcclxuXHRcdCk7XHJcblx0XHQvLyAgICBjb250cm9sLnB1c2godGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XHJcblx0XHQvLyAgICAgIE5hbWU6IFtOYW1lXSxcclxuXHRcdC8vICAgICAgRm9ybXVsYTogW0Zvcm11bGFdLFxyXG5cdFx0Ly8gICAgICBNZXNzYWdlOiBbTWVzc2FnZV1cclxuXHRcdC8vICAgIH0pKTtcclxuXHR9XHJcblxyXG5cdHJlbW92ZUl0ZW0oaTogbnVtYmVyKSB7XHJcblx0XHRjb25zdCBjb250cm9sID0gPEZvcm1BcnJheT50aGlzLmZvcm1Hcm91cC5jb250cm9sc1tcIlRocmVzaG9sZHNcIl07XHJcblx0XHRjb250cm9sLnJlbW92ZUF0KGkpO1xyXG5cdH1cclxuXHJcblx0Z2V0RGF0YSgpIHtcclxuXHRcdGNvbnN0IG8kID0gdGhpcy5zb3VyY2VTZXJ2aWNlLmdldERhdGEodGhpcy5mb3JtR3JvdXAudmFsdWUpO1xyXG5cdFx0byQuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cdFx0XHR0aGlzLmRhdGEgPSBkYXRhLkRhdGE7XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiBvJDtcclxuXHR9XHJcblxyXG5cdGFkZChkYXRhKSB7XHJcblx0XHQvL2lmICghdGhpcy5mb3JtR3JvdXAudmFsaWQpIHJldHVybjtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFNvdXJjZVN1Ym1pdCh0aGlzLmZvcm1Hcm91cC52YWx1ZSkpO1xyXG5cdH1cclxufVxyXG4iXX0=