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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLXVwc2VydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3NvdXJjZS8iLCJzb3VyY2VzIjpbImxpYi9zbWFydC1jb21wb25lbnRzL3NvdXJjZS11cHNlcnQvc291cmNlLXVwc2VydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBWSxTQUFTLEVBQW9FLE1BQU0sZUFBZSxDQUFDO0FBRXRILE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBOEIsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0csT0FBTyxFQUFFLG9CQUFvQixFQUFlLE1BQU0sY0FBYyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVqRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOztJQThGNUMsK0JBQ1MsZUFDQSxhQUNBLE9BQ0E7UUFKVCxpQkF5QkM7UUF4QlEsa0JBQWEsR0FBYixhQUFhO1FBQ2IsZ0JBQVcsR0FBWCxXQUFXO1FBQ1gsVUFBSyxHQUFMLEtBQUs7UUFDTCxVQUFLLEdBQUwsS0FBSzs7eUJBVFMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLFNBQVM7cUJBSXJELENBQUUsVUFBVSxFQUFFLE1BQU0sQ0FBRTs7UUFRN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxtQkFBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsY0FBd0IsRUFBQyxDQUFDLFFBQVEsQ0FBQztRQUM3RSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNOztZQUNqQyxJQUFNLFFBQVEsR0FBVyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEMs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QUs7O2dDQUxkOztTQStGYSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgQ29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgVmlld0NoaWxkLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIEZvcm1Db250cm9sLCBBYnN0cmFjdENvbnRyb2wsIEZvcm1BcnJheSwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBVcHNlcnRTb3VyY2VBcGlNb2RlbCwgU291cmNlTW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IFNvdXJjZVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvc291cmNlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFNvdXJjZVN1Ym1pdCB9IGZyb20gXCIuLi8uLi9hY3Rpb25zXCI7XHJcbmltcG9ydCAqIGFzIEZlYXR1cmVSZWR1Y2VyIGZyb20gXCIuLi8uLi9yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqcy9SeFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwic291cmNlLXNvdXJjZS11cHNlcnRcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgZnhMYXlvdXQ9XCJjb2x1bW5cIj5cclxuICA8ZGl2IGZ4RmxleD1cIjEwMFwiPlxyXG4gICAgPG1hdC1jYXJkIGZ4TGF5b3V0PVwiY29sdW1uXCIgZnhGbGV4PVwiNTBcIj5cclxuICAgICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIiBmeExheW91dD0nY29sdW1uJz5cclxuXHJcbiAgICAgICAgPG1hdC1jYXJkLWhlYWRlcj5cclxuICAgICAgICAgIDxtYXQtY2FyZC10aXRsZT7Yp9mB2LLZiNiv2YYg2YbZhdmI2K/Yp9ixINis2K/bjNivPC9tYXQtY2FyZC10aXRsZT5cclxuICAgICAgICA8L21hdC1jYXJkLWhlYWRlcj5cclxuICAgICAgICA8bWF0LWNhcmQtY29udGVudD5cclxuICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXhGaWxsPlxyXG4gICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLYotiv2LHYs1wiIGZvcm1Db250cm9sTmFtZT1cIkVuZHBvaW50XCI+XHJcbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG5cclxuICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXhGaWxsPlxyXG4gICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCLZhdiv2Kog2LLZhdin2YYg2KjZhyDYsdmI2LIg2LHYs9in2YbbjCDYr9in2K/Zh1wiIGZvcm1Db250cm9sTmFtZT1cIkludGVydmFsXCI+XHJcbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPG1hdC1jaGVja2JveCBmb3JtQ29udHJvbE5hbWU9XCJJc0FjdGl2ZVwiIGZ4RmxleEZpbGw+2YjYtti524zYqjwvbWF0LWNoZWNrYm94PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9tYXQtY2FyZC1jb250ZW50PlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L21hdC1jYXJkPlxyXG5cclxuICAgIDxtYXQtY2FyZCBmeExheW91dD1cImNvbHVtblwiIGZ4RmxleD1cIjIwXCI+XHJcbiAgICAgIDxtYXQtY2FyZC1jb250ZW50IGZ4TGF5b3V0PVwiY29sdW1uXCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxidXR0b24gZnhGbGV4IG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJnZXREYXRhKClcIj7Ys9in2K7Yqtin2LEg2K/bjNiq2Kc8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1tYXJnaW5cIj5cclxuICAgICAgICAgIDwhLS0gVE9ETzogLS0+XHJcbiAgICAgICAgICA8IS0tIDxkYXRhLW1hcHBlciBkZXN0aW5hdGlvbj1cInZhbHVlXCIgW2RhdGFdPVwiZGF0YVwiPjwvZGF0YS1tYXBwZXI+IC0tPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICA8L21hdC1jYXJkPlxyXG5cclxuICAgIDxtYXQtY2FyZCBmeExheW91dD1cImNvbHVtblwiIGZ4RmxleD1cIjMwXCI+XHJcbiAgICAgIDxtYXQtY2FyZC1jb250ZW50IGZ4TGF5b3V0PVwiY29sdW1uXCI+XHJcbiAgICAgICAgPGRpdiBmeExheW91dD1cImNvbHVtblwiIGZ4TGF5b3V0R2FwPVwiNXB4XCI+XHJcbiAgICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCB0aHJlc2hvbGQgb2YgdGhyZXNob2xkczsgbGV0IGk9aW5kZXhcIiBmeEZsZXg9XCIxMDBcIiBjbGFzcz1cImFkZC1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxkaXYgZnhMYXlvdXQ9XCJjb2x1bW5cIj5cclxuICAgICAgICAgICAgICA8ZGl2IFtmb3JtR3JvdXBdPVwidGhyZXNob2xkc1tpXVwiIGZ4TGF5b3V0PVwiY29sdW1uXCI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4RmlsbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwi2YbYp9mFXCIgZm9ybUNvbnRyb2xOYW1lPVwiTmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXhGaWxsPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJsdHJcIiBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cItmB2LHZhdmI2YRcIiBmb3JtQ29udHJvbE5hbWU9XCJGb3JtdWxhXCI+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleEZpbGw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cItiq2YjYttuM2K1cIiBmb3JtQ29udHJvbE5hbWU9XCJNZXNzYWdlXCI+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1yYWRpby1ncm91cCBmb3JtQ29udHJvbE5hbWU9XCJUeXBlXCIgZnhGbGV4RmlsbD5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsPtmG2YjYuSA6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPG1hdC1yYWRpby1idXR0b24gKm5nRm9yPVwibGV0IGl0ZW0gb2YgdHlwZXNcIiBbdmFsdWVdPVwiaXRlbVwiIGNsYXNzPVwiZm9ybS1lbGVtZW50LW1hcmdpblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt7aXRlbX19XHJcbiAgICAgICAgICAgICAgICAgIDwvbWF0LXJhZGlvLWJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvbWF0LXJhZGlvLWdyb3VwPlxyXG5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cInJlbW92ZUl0ZW0oaSlcIiBmeEZsZXggbWF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiB0eXBlPVwiYnV0dG9uXCI+2b7Yp9qpINqp2LHYr9mGPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tbWFyZ2luXCI+XHJcbiAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJhZGRJdGVtKClcIiBmeEZsZXggbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgdHlwZT1cImJ1dHRvblwiPtin2YHYstmI2K/ZhiDYotiz2KrYp9mG2Yc8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tYXQtY2FyZC1jb250ZW50PlxyXG4gICAgPC9tYXQtY2FyZD5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGZ4RmxleD1cIjEwMFwiPlxyXG4gICAgPG1hdC1jYXJkIGZ4TGF5b3V0QWxpZ249XCJlbmQgY2VudGVyXCIgZnhMYXlvdXQ9XCJyb3dcIiBmeEZsZXg9XCIxMDBcIj5cclxuICAgICAgPG1hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBmeEZsZXggY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cImFkZCgkZXZlbnQpXCI+2KvYqNiqPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBmeEZsZXggbWF0LXJhaXNlZC1idXR0b24gcm91dGVyTGluaz0nL3NvdXJjZScgIGZ4TGF5b3V0R2FwPVwiNXB4XCI+2KfZhti12LHYp9mBPC9idXR0b24+XHJcbiAgICAgIDwvbWF0LWNhcmQtY29udGVudD5cclxuICAgIDwvbWF0LWNhcmQ+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5gLFxyXG5cdHN0eWxlczogW2BtYXQtY2FyZHttYXJnaW46NXB4fS5hZGQtaXRlbXtib3JkZXI6MXB4IHNvbGlkICNlYWVhZWE7cGFkZGluZzoxMHB4O21hcmdpbjo1cHggMH0uaXRlbS1tYXJnaW57bWFyZ2luLXRvcDoxMHB4fWJ1dHRvblt0eXBlPXN1Ym1pdF17bWFyZ2luLWxlZnQ6NXB4fS5sdHJ7ZGlyZWN0aW9uOmx0cn0uZm9ybS1lbGVtZW50LW1hcmdpbnttYXJnaW46NXB4IDEwcHh9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNvdXJjZVVwc2VydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0Ly9jb25maWdJbmZvcmFtYXRpb247XHJcblx0Zm9ybUdyb3VwOiBGb3JtR3JvdXAgPSBVcHNlcnRTb3VyY2VBcGlNb2RlbC5SZXF1ZXN0LmZvcm1Hcm91cDtcclxuXHRzb3VyY2VzOiBPYnNlcnZhYmxlPFNvdXJjZU1vZGVsW10+O1xyXG5cdHRocmVzaG9sZHM6IEFic3RyYWN0Q29udHJvbFtdO1xyXG5cdGRhdGE6IGFueTtcclxuXHR0eXBlcyA9IFsgXCJjcml0aWNhbFwiLCBcImdvYWxcIiBdO1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBzb3VyY2VTZXJ2aWNlOiBTb3VyY2VTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXHJcblx0XHRwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPEZlYXR1cmVSZWR1Y2VyLkZlYXR1cmVTdGF0ZT5cclxuXHQpIHtcclxuXHRcdC8vIHRoaXMuc291cmNlcyA9IHRoaXMuc291cmNlU2VydmljZS5nZXRTb3VyY2VzKCk7XHJcblx0XHR0aGlzLnRocmVzaG9sZHMgPSAodGhpcy5mb3JtR3JvdXAuY29udHJvbHMuVGhyZXNob2xkcyBhcyBGb3JtQXJyYXkpLmNvbnRyb2xzO1xyXG5cdFx0dGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcblx0XHRcdGNvbnN0IHNvdXJjZUlkOiBzdHJpbmcgPSBwYXJhbXNbXCJpZFwiXTtcclxuXHRcdFx0c291cmNlSWQgJiZcclxuXHRcdFx0XHR0aGlzLnNvdXJjZVNlcnZpY2UuZ2V0U291cmNlQnlJZChzb3VyY2VJZCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5mb3JtR3JvdXAucGF0Y2hWYWx1ZSh7XHJcblx0XHRcdFx0XHRcdF9pZDogZGF0YS5faWQsXHJcblx0XHRcdFx0XHRcdEVuZHBvaW50OiBkYXRhLkVuZHBvaW50LFxyXG5cdFx0XHRcdFx0XHRJbnRlcnZhbDogZGF0YS5JbnRlcnZhbCxcclxuXHRcdFx0XHRcdFx0SXNBY3RpdmU6IGRhdGEuSXNBY3RpdmUgfHwgZmFsc2UsXHJcblx0XHRcdFx0XHRcdFRocmVzaG9sZHM6IGRhdGEuVGhyZXNob2xkc1xyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0ZGF0YS5UaHJlc2hvbGRzLmZvckVhY2gobWFwcGluZyA9PlxyXG5cdFx0XHRcdFx0XHR0aGlzLmFkZEl0ZW0obWFwcGluZy5OYW1lLCBtYXBwaW5nLkZvcm11bGEsIG1hcHBpbmcuTWVzc2FnZSwgbWFwcGluZy5UeXBlKVxyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7fVxyXG5cclxuXHRhZGRJdGVtKE5hbWU6IHN0cmluZyA9IFwiXCIsIEZvcm11bGE6IHN0cmluZyA9IFwiXCIsIE1lc3NhZ2U6IHN0cmluZyA9IFwiXCIsIFR5cGU6IHN0cmluZyA9IFwiY3JpdGljYWxcIikge1xyXG5cdFx0Y29uc3QgY29udHJvbCA9IDxGb3JtQXJyYXk+dGhpcy5mb3JtR3JvdXAuY29udHJvbHNbXCJUaHJlc2hvbGRzXCJdO1xyXG5cdFx0Y29udHJvbC5wdXNoKFxyXG5cdFx0XHRuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0XHROYW1lOiBuZXcgRm9ybUNvbnRyb2woTmFtZSwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdEZvcm11bGE6IG5ldyBGb3JtQ29udHJvbChGb3JtdWxhLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0TWVzc2FnZTogbmV3IEZvcm1Db250cm9sKE1lc3NhZ2UsIFsgVmFsaWRhdG9ycy5yZXF1aXJlZCBdKSxcclxuXHRcdFx0XHRUeXBlOiBuZXcgRm9ybUNvbnRyb2woVHlwZSwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pXHJcblx0XHRcdH0pXHJcblx0XHQpO1xyXG5cdFx0Ly8gICAgY29udHJvbC5wdXNoKHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG5cdFx0Ly8gICAgICBOYW1lOiBbTmFtZV0sXHJcblx0XHQvLyAgICAgIEZvcm11bGE6IFtGb3JtdWxhXSxcclxuXHRcdC8vICAgICAgTWVzc2FnZTogW01lc3NhZ2VdXHJcblx0XHQvLyAgICB9KSk7XHJcblx0fVxyXG5cclxuXHRyZW1vdmVJdGVtKGk6IG51bWJlcikge1xyXG5cdFx0Y29uc3QgY29udHJvbCA9IDxGb3JtQXJyYXk+dGhpcy5mb3JtR3JvdXAuY29udHJvbHNbXCJUaHJlc2hvbGRzXCJdO1xyXG5cdFx0Y29udHJvbC5yZW1vdmVBdChpKTtcclxuXHR9XHJcblxyXG5cdGdldERhdGEoKSB7XHJcblx0XHRjb25zdCBvJCA9IHRoaXMuc291cmNlU2VydmljZS5nZXREYXRhKHRoaXMuZm9ybUdyb3VwLnZhbHVlKTtcclxuXHRcdG8kLnN1YnNjcmliZShkYXRhID0+IHtcclxuXHRcdFx0dGhpcy5kYXRhID0gZGF0YS5EYXRhO1xyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gbyQ7XHJcblx0fVxyXG5cclxuXHRhZGQoZGF0YSkge1xyXG5cdFx0Ly9pZiAoIXRoaXMuZm9ybUdyb3VwLnZhbGlkKSByZXR1cm47XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBTb3VyY2VTdWJtaXQodGhpcy5mb3JtR3JvdXAudmFsdWUpKTtcclxuXHR9XHJcbn1cclxuIl19