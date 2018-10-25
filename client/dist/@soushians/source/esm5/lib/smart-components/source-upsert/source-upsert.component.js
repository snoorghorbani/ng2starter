/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { UpsertSourceApiModel } from "../../models";
import { SourceService } from "../../services/source.service";
import { Store } from "@ngrx/store";
import { ActivatedRoute } from "@angular/router";
import { SourceSubmit } from "../../actions";
var SourceUpsertComponent = /** @class */ (function () {
    function SourceUpsertComponent(sourceService, formBuilder, route, store) {
        var _this = this;
        this.sourceService = sourceService;
        this.formBuilder = formBuilder;
        this.route = route;
        this.store = store;
        //configInforamation;
        this.formGroup = UpsertSourceApiModel.Request.formGroup;
        this.types = ["critical", "goal"];
        // this.sources = this.sourceService.getSources();
        this.thresholds = (/** @type {?} */ (this.formGroup.controls["Thresholds"])).controls;
        this.route.params.subscribe(function (params) {
            /** @type {?} */
            var sourceId = params["id"];
            sourceId &&
                _this.sourceService.getSourceById(sourceId).subscribe(function (data) {
                    _this.formGroup.patchValue({
                        _id: data._id,
                        Endpoint: data.Endpoint,
                        Interval: data.Interval,
                        IsActive: data.IsActive || false,
                        Thresholds: data.Thresholds
                    });
                    data.Thresholds.forEach(function (mapping) {
                        return _this.addItem(mapping.Name, mapping.Formula, mapping.Message, mapping.Type);
                    });
                });
        });
    }
    /**
     * @return {?}
     */
    SourceUpsertComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?=} Name
     * @param {?=} Formula
     * @param {?=} Message
     * @param {?=} Type
     * @return {?}
     */
    SourceUpsertComponent.prototype.addItem = /**
     * @param {?=} Name
     * @param {?=} Formula
     * @param {?=} Message
     * @param {?=} Type
     * @return {?}
     */
    function (Name, Formula, Message, Type) {
        if (Name === void 0) { Name = ""; }
        if (Formula === void 0) { Formula = ""; }
        if (Message === void 0) { Message = ""; }
        if (Type === void 0) { Type = "critical"; }
        /** @type {?} */
        var control = /** @type {?} */ (this.formGroup.controls["Thresholds"]);
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
    };
    /**
     * @param {?} i
     * @return {?}
     */
    SourceUpsertComponent.prototype.removeItem = /**
     * @param {?} i
     * @return {?}
     */
    function (i) {
        /** @type {?} */
        var control = /** @type {?} */ (this.formGroup.controls["Thresholds"]);
        control.removeAt(i);
    };
    /**
     * @return {?}
     */
    SourceUpsertComponent.prototype.getData = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var o$ = this.sourceService.getData(this.formGroup.value);
        o$.subscribe(function (data) {
            _this.data = data.Data;
        });
        return o$;
    };
    /**
     * @param {?} data
     * @return {?}
     */
    SourceUpsertComponent.prototype.add = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        //if (!this.formGroup.valid) return;
        this.store.dispatch(new SourceSubmit(this.formGroup.value));
    };
    SourceUpsertComponent.decorators = [
        { type: Component, args: [{
                    selector: "source-source-upsert",
                    template: "<div fxLayout=\"column\">\n  <div fxFlex=\"100\">\n    <mat-card fxLayout=\"column\" fxFlex=\"50\">\n      <form [formGroup]=\"formGroup\" fxLayout='column'>\n\n        <mat-card-header>\n          <mat-card-title>\u0627\u0641\u0632\u0648\u062F\u0646 \u0646\u0645\u0648\u062F\u0627\u0631 \u062C\u062F\u06CC\u062F</mat-card-title>\n        </mat-card-header>\n        <mat-card-content>\n          <mat-form-field fxFlexFill>\n            <input matInput placeholder=\"\u0622\u062F\u0631\u0633\" formControlName=\"Endpoint\">\n          </mat-form-field>\n\n          <mat-form-field fxFlexFill>\n            <input matInput placeholder=\"\u0645\u062F\u062A \u0632\u0645\u0627\u0646 \u0628\u0647 \u0631\u0648\u0632 \u0631\u0633\u0627\u0646\u06CC \u062F\u0627\u062F\u0647\" formControlName=\"Interval\">\n          </mat-form-field>\n          <div>\n            <mat-checkbox formControlName=\"IsActive\" fxFlexFill>\u0648\u0636\u0639\u06CC\u062A</mat-checkbox>\n          </div>\n        </mat-card-content>\n      </form>\n    </mat-card>\n\n    <mat-card fxLayout=\"column\" fxFlex=\"20\">\n      <mat-card-content fxLayout=\"column\">\n        <div>\n          <button fxFlex mat-raised-button color=\"primary\" (click)=\"getData()\">\u0633\u0627\u062E\u062A\u0627\u0631 \u062F\u06CC\u062A\u0627</button>\n        </div>\n        <div class=\"item-margin\">\n          <!-- TODO: -->\n          <!-- <data-mapper destination=\"value\" [data]=\"data\"></data-mapper> -->\n        </div>\n      </mat-card-content>\n    </mat-card>\n\n    <mat-card fxLayout=\"column\" fxFlex=\"30\">\n      <mat-card-content fxLayout=\"column\">\n        <div fxLayout=\"column\" fxLayoutGap=\"5px\">\n          <div *ngFor=\"let threshold of thresholds; let i=index\" fxFlex=\"100\" class=\"add-item\">\n            <div fxLayout=\"column\">\n              <div [formGroup]=\"thresholds[i]\" fxLayout=\"column\">\n                <mat-form-field fxFlexFill>\n                  <input matInput placeholder=\"\u0646\u0627\u0645\" formControlName=\"Name\">\n                </mat-form-field>\n                <mat-form-field fxFlexFill>\n                  <input class=\"ltr\" matInput placeholder=\"\u0641\u0631\u0645\u0648\u0644\" formControlName=\"Formula\">\n                </mat-form-field>\n                <mat-form-field fxFlexFill>\n                  <input matInput placeholder=\"\u062A\u0648\u0636\u06CC\u062D\" formControlName=\"Message\">\n                </mat-form-field>\n                <mat-radio-group formControlName=\"Type\" fxFlexFill>\n                  <label>\u0646\u0648\u0639 :</label>\n                  <mat-radio-button *ngFor=\"let item of types\" [value]=\"item\" class=\"form-element-margin\">\n                    {{item}}\n                  </mat-radio-button>\n                </mat-radio-group>\n\n                <button (click)=\"removeItem(i)\" fxFlex mat-button color=\"primary\" type=\"button\">\u067E\u0627\u06A9 \u06A9\u0631\u062F\u0646</button>\n              </div>\n              <br />\n            </div>\n          </div>\n        </div>\n        <div class=\"item-margin\">\n          <button (click)=\"addItem()\" fxFlex mat-raised-button color=\"primary\" type=\"button\">\u0627\u0641\u0632\u0648\u062F\u0646 \u0622\u0633\u062A\u0627\u0646\u0647</button>\n        </div>\n      </mat-card-content>\n    </mat-card>\n  </div>\n  <div fxFlex=\"100\">\n    <mat-card fxLayoutAlign=\"end center\" fxLayout=\"row\" fxFlex=\"100\">\n      <mat-card-content>\n        <button mat-raised-button fxFlex color=\"primary\" (click)=\"add($event)\">\u062B\u0628\u062A</button>\n        <button fxFlex mat-raised-button routerLink='/source'  fxLayoutGap=\"5px\">\u0627\u0646\u0635\u0631\u0627\u0641</button>\n      </mat-card-content>\n    </mat-card>\n  </div>\n</div>\n",
                    styles: ["mat-card{margin:5px}.add-item{border:1px solid #eaeaea;padding:10px;margin:5px 0}.item-margin{margin-top:10px}button[type=submit]{margin-left:5px}.ltr{direction:ltr}.form-element-margin{margin:5px 10px}"]
                },] },
    ];
    /** @nocollapse */
    SourceUpsertComponent.ctorParameters = function () { return [
        { type: SourceService },
        { type: FormBuilder },
        { type: ActivatedRoute },
        { type: Store }
    ]; };
    return SourceUpsertComponent;
}());
export { SourceUpsertComponent };
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
    /** @type {?} */
    SourceUpsertComponent.prototype.sourceService;
    /** @type {?} */
    SourceUpsertComponent.prototype.formBuilder;
    /** @type {?} */
    SourceUpsertComponent.prototype.route;
    /** @type {?} */
    SourceUpsertComponent.prototype.store;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLXVwc2VydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3NvdXJjZS8iLCJzb3VyY2VzIjpbImxpYi9zbWFydC1jb21wb25lbnRzL3NvdXJjZS11cHNlcnQvc291cmNlLXVwc2VydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBWSxTQUFTLEVBQW9FLE1BQU0sZUFBZSxDQUFDO0FBRXRILE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBOEIsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0csT0FBTyxFQUFFLG9CQUFvQixFQUFlLE1BQU0sY0FBYyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVqRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOztJQThGNUMsK0JBQ1MsZUFDQSxhQUNBLE9BQ0E7UUFKVCxpQkF5QkM7UUF4QlEsa0JBQWEsR0FBYixhQUFhO1FBQ2IsZ0JBQVcsR0FBWCxXQUFXO1FBQ1gsVUFBSyxHQUFMLEtBQUs7UUFDTCxVQUFLLEdBQUwsS0FBSzs7UUFUZCxpQkFBdUIsb0JBQW9CLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztRQUk5RCxhQUFRLENBQUUsVUFBVSxFQUFFLE1BQU0sQ0FBRSxDQUFDOztRQVE5QixJQUFJLENBQUMsVUFBVSxHQUFHLG1CQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxjQUF3QixFQUFDLENBQUMsUUFBUSxDQUFDO1FBQzdFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07O1lBQ2pDLElBQU0sUUFBUSxHQUFXLE1BQU0sQ0FBQyxJ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Z0JBSXRCLGNBQWM7Z0JBRGQsS0FBSzs7Z0NBTGQ7O1NBK0ZhLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBDb21wb25lbnQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0LCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgRm9ybUNvbnRyb2wsIEFic3RyYWN0Q29udHJvbCwgRm9ybUFycmF5LCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFVwc2VydFNvdXJjZUFwaU1vZGVsLCBTb3VyY2VNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgU291cmNlU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9zb3VyY2Uuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU291cmNlU3VibWl0IH0gZnJvbSBcIi4uLy4uL2FjdGlvbnNcIjtcclxuaW1wb3J0ICogYXMgRmVhdHVyZVJlZHVjZXIgZnJvbSBcIi4uLy4uL3JlZHVjZXJzXCI7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzL1J4XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJzb3VyY2Utc291cmNlLXVwc2VydFwiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiBmeExheW91dD1cImNvbHVtblwiPlxyXG4gIDxkaXYgZnhGbGV4PVwiMTAwXCI+XHJcbiAgICA8bWF0LWNhcmQgZnhMYXlvdXQ9XCJjb2x1bW5cIiBmeEZsZXg9XCI1MFwiPlxyXG4gICAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cFwiIGZ4TGF5b3V0PSdjb2x1bW4nPlxyXG5cclxuICAgICAgICA8bWF0LWNhcmQtaGVhZGVyPlxyXG4gICAgICAgICAgPG1hdC1jYXJkLXRpdGxlPtin2YHYstmI2K/ZhiDZhtmF2YjYr9in2LEg2KzYr9uM2K88L21hdC1jYXJkLXRpdGxlPlxyXG4gICAgICAgIDwvbWF0LWNhcmQtaGVhZGVyPlxyXG4gICAgICAgIDxtYXQtY2FyZC1jb250ZW50PlxyXG4gICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleEZpbGw+XHJcbiAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cItii2K/YsdizXCIgZm9ybUNvbnRyb2xOYW1lPVwiRW5kcG9pbnRcIj5cclxuICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcblxyXG4gICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleEZpbGw+XHJcbiAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cItmF2K/YqiDYstmF2KfZhiDYqNmHINix2YjYsiDYsdiz2KfZhtuMINiv2KfYr9mHXCIgZm9ybUNvbnRyb2xOYW1lPVwiSW50ZXJ2YWxcIj5cclxuICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bWF0LWNoZWNrYm94IGZvcm1Db250cm9sTmFtZT1cIklzQWN0aXZlXCIgZnhGbGV4RmlsbD7ZiNi22LnbjNiqPC9tYXQtY2hlY2tib3g+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvbWF0LWNhcmQ+XHJcblxyXG4gICAgPG1hdC1jYXJkIGZ4TGF5b3V0PVwiY29sdW1uXCIgZnhGbGV4PVwiMjBcIj5cclxuICAgICAgPG1hdC1jYXJkLWNvbnRlbnQgZnhMYXlvdXQ9XCJjb2x1bW5cIj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvbiBmeEZsZXggbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cImdldERhdGEoKVwiPtiz2KfYrtiq2KfYsSDYr9uM2KrYpzwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLW1hcmdpblwiPlxyXG4gICAgICAgICAgPCEtLSBUT0RPOiAtLT5cclxuICAgICAgICAgIDwhLS0gPGRhdGEtbWFwcGVyIGRlc3RpbmF0aW9uPVwidmFsdWVcIiBbZGF0YV09XCJkYXRhXCI+PC9kYXRhLW1hcHBlcj4gLS0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbWF0LWNhcmQtY29udGVudD5cclxuICAgIDwvbWF0LWNhcmQ+XHJcblxyXG4gICAgPG1hdC1jYXJkIGZ4TGF5b3V0PVwiY29sdW1uXCIgZnhGbGV4PVwiMzBcIj5cclxuICAgICAgPG1hdC1jYXJkLWNvbnRlbnQgZnhMYXlvdXQ9XCJjb2x1bW5cIj5cclxuICAgICAgICA8ZGl2IGZ4TGF5b3V0PVwiY29sdW1uXCIgZnhMYXlvdXRHYXA9XCI1cHhcIj5cclxuICAgICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IHRocmVzaG9sZCBvZiB0aHJlc2hvbGRzOyBsZXQgaT1pbmRleFwiIGZ4RmxleD1cIjEwMFwiIGNsYXNzPVwiYWRkLWl0ZW1cIj5cclxuICAgICAgICAgICAgPGRpdiBmeExheW91dD1cImNvbHVtblwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgW2Zvcm1Hcm91cF09XCJ0aHJlc2hvbGRzW2ldXCIgZnhMYXlvdXQ9XCJjb2x1bW5cIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXhGaWxsPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLZhtin2YVcIiBmb3JtQ29udHJvbE5hbWU9XCJOYW1lXCI+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleEZpbGw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImx0clwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwi2YHYsdmF2YjZhFwiIGZvcm1Db250cm9sTmFtZT1cIkZvcm11bGFcIj5cclxuICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4RmlsbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwi2KrZiNi224zYrVwiIGZvcm1Db250cm9sTmFtZT1cIk1lc3NhZ2VcIj5cclxuICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8bWF0LXJhZGlvLWdyb3VwIGZvcm1Db250cm9sTmFtZT1cIlR5cGVcIiBmeEZsZXhGaWxsPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWw+2YbZiNi5IDo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiB0eXBlc1wiIFt2YWx1ZV09XCJpdGVtXCIgY2xhc3M9XCJmb3JtLWVsZW1lbnQtbWFyZ2luXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3tpdGVtfX1cclxuICAgICAgICAgICAgICAgICAgPC9tYXQtcmFkaW8tYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtcmFkaW8tZ3JvdXA+XHJcblxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwicmVtb3ZlSXRlbShpKVwiIGZ4RmxleCBtYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIHR5cGU9XCJidXR0b25cIj7Zvtin2qkg2qnYsdiv2YY8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1tYXJnaW5cIj5cclxuICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cImFkZEl0ZW0oKVwiIGZ4RmxleCBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiB0eXBlPVwiYnV0dG9uXCI+2KfZgdiy2YjYr9mGINii2LPYqtin2YbZhzwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICA8L21hdC1jYXJkPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgZnhGbGV4PVwiMTAwXCI+XHJcbiAgICA8bWF0LWNhcmQgZnhMYXlvdXRBbGlnbj1cImVuZCBjZW50ZXJcIiBmeExheW91dD1cInJvd1wiIGZ4RmxleD1cIjEwMFwiPlxyXG4gICAgICA8bWF0LWNhcmQtY29udGVudD5cclxuICAgICAgICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIGZ4RmxleCBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwiYWRkKCRldmVudClcIj7Yq9io2Ko8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGZ4RmxleCBtYXQtcmFpc2VkLWJ1dHRvbiByb3V0ZXJMaW5rPScvc291cmNlJyAgZnhMYXlvdXRHYXA9XCI1cHhcIj7Yp9mG2LXYsdin2YE8L2J1dHRvbj5cclxuICAgICAgPC9tYXQtY2FyZC1jb250ZW50PlxyXG4gICAgPC9tYXQtY2FyZD5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbmAsXHJcblx0c3R5bGVzOiBbYG1hdC1jYXJke21hcmdpbjo1cHh9LmFkZC1pdGVte2JvcmRlcjoxcHggc29saWQgI2VhZWFlYTtwYWRkaW5nOjEwcHg7bWFyZ2luOjVweCAwfS5pdGVtLW1hcmdpbnttYXJnaW4tdG9wOjEwcHh9YnV0dG9uW3R5cGU9c3VibWl0XXttYXJnaW4tbGVmdDo1cHh9Lmx0cntkaXJlY3Rpb246bHRyfS5mb3JtLWVsZW1lbnQtbWFyZ2lue21hcmdpbjo1cHggMTBweH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU291cmNlVXBzZXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHQvL2NvbmZpZ0luZm9yYW1hdGlvbjtcclxuXHRmb3JtR3JvdXA6IEZvcm1Hcm91cCA9IFVwc2VydFNvdXJjZUFwaU1vZGVsLlJlcXVlc3QuZm9ybUdyb3VwO1xyXG5cdHNvdXJjZXM6IE9ic2VydmFibGU8U291cmNlTW9kZWxbXT47XHJcblx0dGhyZXNob2xkczogQWJzdHJhY3RDb250cm9sW107XHJcblx0ZGF0YTogYW55O1xyXG5cdHR5cGVzID0gWyBcImNyaXRpY2FsXCIsIFwiZ29hbFwiIF07XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIHNvdXJjZVNlcnZpY2U6IFNvdXJjZVNlcnZpY2UsXHJcblx0XHRwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcclxuXHRcdHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8RmVhdHVyZVJlZHVjZXIuRmVhdHVyZVN0YXRlPlxyXG5cdCkge1xyXG5cdFx0Ly8gdGhpcy5zb3VyY2VzID0gdGhpcy5zb3VyY2VTZXJ2aWNlLmdldFNvdXJjZXMoKTtcclxuXHRcdHRoaXMudGhyZXNob2xkcyA9ICh0aGlzLmZvcm1Hcm91cC5jb250cm9scy5UaHJlc2hvbGRzIGFzIEZvcm1BcnJheSkuY29udHJvbHM7XHJcblx0XHR0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuXHRcdFx0Y29uc3Qgc291cmNlSWQ6IHN0cmluZyA9IHBhcmFtc1tcImlkXCJdO1xyXG5cdFx0XHRzb3VyY2VJZCAmJlxyXG5cdFx0XHRcdHRoaXMuc291cmNlU2VydmljZS5nZXRTb3VyY2VCeUlkKHNvdXJjZUlkKS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmZvcm1Hcm91cC5wYXRjaFZhbHVlKHtcclxuXHRcdFx0XHRcdFx0X2lkOiBkYXRhLl9pZCxcclxuXHRcdFx0XHRcdFx0RW5kcG9pbnQ6IGRhdGEuRW5kcG9pbnQsXHJcblx0XHRcdFx0XHRcdEludGVydmFsOiBkYXRhLkludGVydmFsLFxyXG5cdFx0XHRcdFx0XHRJc0FjdGl2ZTogZGF0YS5Jc0FjdGl2ZSB8fCBmYWxzZSxcclxuXHRcdFx0XHRcdFx0VGhyZXNob2xkczogZGF0YS5UaHJlc2hvbGRzXHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHRkYXRhLlRocmVzaG9sZHMuZm9yRWFjaChtYXBwaW5nID0+XHJcblx0XHRcdFx0XHRcdHRoaXMuYWRkSXRlbShtYXBwaW5nLk5hbWUsIG1hcHBpbmcuRm9ybXVsYSwgbWFwcGluZy5NZXNzYWdlLCBtYXBwaW5nLlR5cGUpXHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHt9XHJcblxyXG5cdGFkZEl0ZW0oTmFtZTogc3RyaW5nID0gXCJcIiwgRm9ybXVsYTogc3RyaW5nID0gXCJcIiwgTWVzc2FnZTogc3RyaW5nID0gXCJcIiwgVHlwZTogc3RyaW5nID0gXCJjcml0aWNhbFwiKSB7XHJcblx0XHRjb25zdCBjb250cm9sID0gPEZvcm1BcnJheT50aGlzLmZvcm1Hcm91cC5jb250cm9sc1tcIlRocmVzaG9sZHNcIl07XHJcblx0XHRjb250cm9sLnB1c2goXHJcblx0XHRcdG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRcdE5hbWU6IG5ldyBGb3JtQ29udHJvbChOYW1lLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0Rm9ybXVsYTogbmV3IEZvcm1Db250cm9sKEZvcm11bGEsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRNZXNzYWdlOiBuZXcgRm9ybUNvbnRyb2woTWVzc2FnZSwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdFR5cGU6IG5ldyBGb3JtQ29udHJvbChUeXBlLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSlcclxuXHRcdFx0fSlcclxuXHRcdCk7XHJcblx0XHQvLyAgICBjb250cm9sLnB1c2godGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XHJcblx0XHQvLyAgICAgIE5hbWU6IFtOYW1lXSxcclxuXHRcdC8vICAgICAgRm9ybXVsYTogW0Zvcm11bGFdLFxyXG5cdFx0Ly8gICAgICBNZXNzYWdlOiBbTWVzc2FnZV1cclxuXHRcdC8vICAgIH0pKTtcclxuXHR9XHJcblxyXG5cdHJlbW92ZUl0ZW0oaTogbnVtYmVyKSB7XHJcblx0XHRjb25zdCBjb250cm9sID0gPEZvcm1BcnJheT50aGlzLmZvcm1Hcm91cC5jb250cm9sc1tcIlRocmVzaG9sZHNcIl07XHJcblx0XHRjb250cm9sLnJlbW92ZUF0KGkpO1xyXG5cdH1cclxuXHJcblx0Z2V0RGF0YSgpIHtcclxuXHRcdGNvbnN0IG8kID0gdGhpcy5zb3VyY2VTZXJ2aWNlLmdldERhdGEodGhpcy5mb3JtR3JvdXAudmFsdWUpO1xyXG5cdFx0byQuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cdFx0XHR0aGlzLmRhdGEgPSBkYXRhLkRhdGE7XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiBvJDtcclxuXHR9XHJcblxyXG5cdGFkZChkYXRhKSB7XHJcblx0XHQvL2lmICghdGhpcy5mb3JtR3JvdXAudmFsaWQpIHJldHVybjtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFNvdXJjZVN1Ym1pdCh0aGlzLmZvcm1Hcm91cC52YWx1ZSkpO1xyXG5cdH1cclxufVxyXG4iXX0=