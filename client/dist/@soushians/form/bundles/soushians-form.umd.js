(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/forms'), require('@angular/core'), require('rxjs'), require('@ngrx/store'), require('@soushians/config'), require('@angular/common/http'), require('rxjs/BehaviorSubject'), require('rxjs/operators'), require('@soushians/shared'), require('@angular/material'), require('@angular/cdk/collections'), require('@angular/router'), require('rxjs/add/operator/map'), require('rxjs/add/operator/mergeMap'), require('rxjs/add/operator/switchMap'), require('@ngrx/effects'), require('rxjs/observable/of'), require('@angular/common'), require('@angular/flex-layout')) :
    typeof define === 'function' && define.amd ? define('@soushians/form', ['exports', '@angular/forms', '@angular/core', 'rxjs', '@ngrx/store', '@soushians/config', '@angular/common/http', 'rxjs/BehaviorSubject', 'rxjs/operators', '@soushians/shared', '@angular/material', '@angular/cdk/collections', '@angular/router', 'rxjs/add/operator/map', 'rxjs/add/operator/mergeMap', 'rxjs/add/operator/switchMap', '@ngrx/effects', 'rxjs/observable/of', '@angular/common', '@angular/flex-layout'], factory) :
    (factory((global.soushians = global.soushians || {}, global.soushians.form = {}),global.ng.forms,global.ng.core,global.rxjs,null,null,global.ng.common.http,global.rxjs.BehaviorSubject,global.rxjs.operators,null,global.ng.material,global.ng.cdk.collections,global.ng.router,global.rxjs['add/operator/map'],global.rxjs['add/operator/mergeMap'],global.rxjs['add/operator/switchMap'],null,global.rxjs['observable/of'],global.ng.common,global.ng['flex-layout']));
}(this, (function (exports,forms,i0,rxjs,i2,config,i1,BehaviorSubject,operators,shared,material,collections,router,map,mergeMap,switchMap,effects,of,common,flexLayout) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    (function (AddFormApiModel) {
        var Request = /** @class */ (function () {
            function Request(initValue) {
                if (initValue === void 0) {
                    initValue = /** @type {?} */ ({});
                }
                var _this = this;
                Object.keys(initValue).forEach(function (key) { return (_this[key] = initValue[key]); });
            }
            /**
             * @return {?}
             */
            Request.prototype.getRequestBody = /**
             * @return {?}
             */
                function () {
                    return {
                        name: this.name,
                        form: this.form,
                        events: this.events
                    };
                };
            Object.defineProperty(Request, "formGroup", {
                get: /**
                 * @return {?}
                 */ function () {
                    return new forms.FormGroup({
                        _id: new forms.FormControl("", [forms.Validators.required]),
                        name: new forms.FormControl("", [forms.Validators.required]),
                        title: new forms.FormControl("", [forms.Validators.required]),
                        form: new forms.FormControl({}),
                        events: new forms.FormGroup({
                            accept: new forms.FormGroup({
                                show: new forms.FormControl(false),
                                text: new forms.FormControl("ثبت")
                            }),
                            cancel: new forms.FormGroup({
                                show: new forms.FormControl(false),
                                text: new forms.FormControl("انصراف")
                            })
                        })
                    });
                },
                enumerable: true,
                configurable: true
            });
            return Request;
        }());
        AddFormApiModel.Request = Request;
        var Response = /** @class */ (function () {
            function Response() {
            }
            return Response;
        }());
        AddFormApiModel.Response = Response;
    })(exports.AddFormApiModel || (exports.AddFormApiModel = {}));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    (function (EditFormApiModel) {
        var Request = /** @class */ (function () {
            function Request(initValue) {
                if (initValue === void 0) {
                    initValue = /** @type {?} */ ({});
                }
                var _this = this;
                Object.keys(initValue).forEach(function (key) { return (_this[key] = initValue[key]); });
            }
            /**
             * @return {?}
             */
            Request.prototype.getRequestBody = /**
             * @return {?}
             */
                function () {
                    return {
                        _id: this._id,
                        name: this.name,
                        form: this.form,
                        events: this.events
                    };
                };
            Object.defineProperty(Request, "formGroup", {
                get: /**
                 * @return {?}
                 */ function () {
                    return new forms.FormGroup({
                        _id: new forms.FormControl("", [forms.Validators.required]),
                        name: new forms.FormControl("", [forms.Validators.required]),
                        form: new forms.FormControl({}),
                        events: new forms.FormGroup({
                            accept: new forms.FormGroup({
                                show: new forms.FormControl(false),
                                text: new forms.FormControl("ثبت")
                            }),
                            cancel: new forms.FormGroup({
                                show: new forms.FormControl(false),
                                text: new forms.FormControl("انصراف")
                            })
                        })
                    });
                },
                enumerable: true,
                configurable: true
            });
            return Request;
        }());
        EditFormApiModel.Request = Request;
        var Response = /** @class */ (function () {
            function Response() {
            }
            return Response;
        }());
        EditFormApiModel.Response = Response;
    })(exports.EditFormApiModel || (exports.EditFormApiModel = {}));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    (function (FormListApiModel) {
        var Request = /** @class */ (function () {
            function Request(initValue) {
                if (initValue === void 0) {
                    initValue = /** @type {?} */ ({});
                }
                var _this = this;
                Object.keys(initValue).forEach(function (key) { return (_this[key] = initValue[key]); });
            }
            /**
             * @return {?}
             */
            Request.prototype.getRequestBody = /**
             * @return {?}
             */
                function () {
                    return {
                        Name: this.Name,
                        Controls: this.Controls
                    };
                };
            Object.defineProperty(Request, "formGroup", {
                get: /**
                 * @return {?}
                 */ function () {
                    return new forms.FormGroup({
                        Name: new forms.FormControl("", [forms.Validators.required]),
                        Controls: new forms.FormGroup({})
                    });
                },
                enumerable: true,
                configurable: true
            });
            return Request;
        }());
        FormListApiModel.Request = Request;
        var Response = /** @class */ (function () {
            function Response() {
            }
            return Response;
        }());
        FormListApiModel.Response = Response;
    })(exports.FormListApiModel || (exports.FormListApiModel = {}));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var Validator = /** @class */ (function () {
        function Validator() {
            this.required = {
                active: false,
                message: "این فیلد الزامی است"
            };
            this.minlength = {
                active: false,
                message: "حداقل تعداد کارکترها",
                value: 5
            };
            this.email = {
                active: false,
                message: "لطفا ایمیل صحیح وارد نمایید"
            };
        }
        return Validator;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var FieldConfig = /** @class */ (function () {
        function FieldConfig(type) {
            this.type = type;
            if (type != "control")
                this.fields = [];
            this.width = 3;
            this.validator = new Validator();
        }
        return FieldConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var FormSchemaModel = /** @class */ (function () {
        function FormSchemaModel() {
            this.events = {
                accept: {
                    show: false,
                    text: "ثبت"
                },
                cancel: {
                    show: false,
                    text: "انصراف"
                }
            };
            this.form = new FieldConfig("group");
        }
        /**
         * @return {?}
         */
        FormSchemaModel.prototype.init = /**
         * @return {?}
         */
            function () {
                this._id = (Math.random() * 10).toString();
            };
        return FormSchemaModel;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var MODULE_DEFAULT_CONFIG = {
        env: {
            production: false,
            frontend_server: "frontend/server/did/not/set",
            server: "server/did/not/set"
        },
        endpoints: {
            addForm: "",
            editForm: "",
            getForm: "",
            getList: "",
            deleteForm: "",
            getCaptcha: "/api/authentication/captcha"
        }
    };
    /** @type {?} */
    var MODULE_CONFIG_TOKEN = new i0.InjectionToken("FormModuleConfig");

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var FormConfigurationService = /** @class */ (function () {
        function FormConfigurationService(configFile, store) {
            var _this = this;
            this.store = store;
            this.config$ = new rxjs.BehaviorSubject(MODULE_DEFAULT_CONFIG);
            this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, configFile);
            this.config$.next(this._config);
            this.store.select(config.getFormModuleConfig).subscribe(function (userConfig) {
                if (!userConfig)
                    return;
                _this._config = Object.assign({}, _this._config, userConfig.Config);
                _this.config$.next(_this._config);
            });
        }
        Object.defineProperty(FormConfigurationService.prototype, "config", {
            get: /**
             * @return {?}
             */ function () {
                return this._config;
            },
            enumerable: true,
            configurable: true
        });
        FormConfigurationService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: "root"
                    },] },
        ];
        /** @nocollapse */
        FormConfigurationService.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Inject, args: [MODULE_CONFIG_TOKEN,] }] },
                { type: i2.Store }
            ];
        };
        /** @nocollapse */ FormConfigurationService.ngInjectableDef = i0.defineInjectable({ factory: function FormConfigurationService_Factory() { return new FormConfigurationService(i0.inject(MODULE_CONFIG_TOKEN), i0.inject(i2.Store)); }, token: FormConfigurationService, providedIn: "root" });
        return FormConfigurationService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var FormService = /** @class */ (function () {
        function FormService(http, store, configurationService) {
            this.http = http;
            this.store = store;
            this.configurationService = configurationService;
        }
        /**
         * @param {?} data
         * @return {?}
         */
        FormService.prototype.add = /**
         * @param {?} data
         * @return {?}
         */
            function (data) {
                var _this = this;
                /** @type {?} */
                var model = new exports.AddFormApiModel.Request(data);
                return this.configurationService.config$
                    .filter(function (config$$1) { return config$$1.endpoints.addForm != ""; })
                    .take(1)
                    .switchMap(function (config$$1) {
                    return _this.http.post(config$$1.env.frontend_server + config$$1.endpoints.addForm, model.getRequestBody());
                })
                    .map(function (response) { return response.Result; });
            };
        /**
         * @param {?} _id
         * @return {?}
         */
        FormService.prototype.get = /**
         * @param {?} _id
         * @return {?}
         */
            function (_id) {
                var _this = this;
                return this.configurationService.config$
                    .filter(function (config$$1) { return config$$1.endpoints.getForm != ""; })
                    .take(1)
                    .switchMap(function (config$$1) {
                    return _this.http.get(shared.stringTemplate(config$$1.env.frontend_server + config$$1.endpoints.getForm, { _id: _id }));
                })
                    .map(function (response) { return response.Result; });
            };
        /**
         * @return {?}
         */
        FormService.prototype.getList = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return this.configurationService.config$
                    .filter(function (config$$1) { return config$$1.endpoints.getList != ""; })
                    .switchMap(function (config$$1) { return _this.http.get(config$$1.env.frontend_server + config$$1.endpoints.getList); })
                    .map(function (response) { return response.Result; });
            };
        /**
         * @param {?} data
         * @return {?}
         */
        FormService.prototype.update = /**
         * @param {?} data
         * @return {?}
         */
            function (data) {
                var _this = this;
                /** @type {?} */
                var model = new exports.EditFormApiModel.Request(data);
                return this.configurationService.config$
                    .filter(function (config$$1) { return config$$1.endpoints.editForm != ""; })
                    .take(1)
                    .switchMap(function (config$$1) {
                    return _this.http.put(config$$1.env.frontend_server + config$$1.endpoints.editForm, model.getRequestBody());
                })
                    .map(function (response) { return response.Result; });
            };
        /**
         * @param {?} _id
         * @return {?}
         */
        FormService.prototype.delete = /**
         * @param {?} _id
         * @return {?}
         */
            function (_id) {
                var _this = this;
                return this.configurationService.config$
                    .filter(function (config$$1) { return config$$1.endpoints.deleteForm != ""; })
                    .switchMap(function (config$$1) { return _this.http.get(config$$1.env.frontend_server + config$$1.endpoints.deleteForm); });
            };
        /**
         * @param {?} _id
         * @return {?}
         */
        FormService.prototype.selectFormById = /**
         * @param {?} _id
         * @return {?}
         */
            function (_id) {
                /** @type {?} */
                var subject = new BehaviorSubject.BehaviorSubject(undefined);
                this.store
                    .select(function (state) { return state.form.list.data; })
                    .pipe(operators.filter(function (forms$$1) { return forms$$1 != null; }), operators.map(function (forms$$1) { return forms$$1.find(function (form) { return form._id == _id; }); }))
                    .subscribe(function (formSchemaModel) { return subject.next(formSchemaModel); });
                return subject.asObservable();
            };
        FormService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: "root"
                    },] },
        ];
        /** @nocollapse */
        FormService.ctorParameters = function () {
            return [
                { type: i1.HttpClient },
                { type: i2.Store },
                { type: FormConfigurationService }
            ];
        };
        /** @nocollapse */ FormService.ngInjectableDef = i0.defineInjectable({ factory: function FormService_Factory() { return new FormService(i0.inject(i1.HttpClient), i0.inject(i2.Store), i0.inject(FormConfigurationService)); }, token: FormService, providedIn: "root" });
        return FormService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var SelectComponent = /** @class */ (function () {
        function SelectComponent() {
        }
        SelectComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: "ngs-form-control-select",
                        template: "<div  [formGroup]=\"group\">\n<mat-form-field>\n    <mat-select [formControlName]=\"config.name\" [placeholder]=\"config.title\">\n      <mat-option *ngFor=\"let option of config.options\" [value]=\"option.value\">{{option.key}}</mat-option>\n    </mat-select>\n</mat-form-field>\n</div>",
                        styles: [":host{display:block}.mat-form-field{width:100%}"]
                    },] },
        ];
        /** @nocollapse */
        SelectComponent.ctorParameters = function () { return []; };
        return SelectComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var CheckboxComponent = /** @class */ (function () {
        function CheckboxComponent() {
        }
        CheckboxComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: "ngs-form-control-checkbox",
                        template: "<div [formGroup]=\"group\">\n    <mat-checkbox [formControlName]=\"config.name\">\n        {{config.title}}\n    </mat-checkbox>\n</div>",
                        styles: [":host{display:block}.mat-form-field{width:100%}"]
                    },] },
        ];
        /** @nocollapse */
        CheckboxComponent.ctorParameters = function () { return []; };
        return CheckboxComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var EmailComponent = /** @class */ (function () {
        function EmailComponent() {
        }
        /**
         * @return {?}
         */
        EmailComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        EmailComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: "ngs-form-control-email",
                        template: "<div  [formGroup]=\"group\">\n<mat-form-field fxFlexFill>\n    <input matInput [type]=\"config.inputType\" [placeholder]=\"config.title\" [formControlName]=\"config.name\">\n</mat-form-field>\n</div>",
                        styles: [":host{display:block}.mat-form-field{width:100%}"]
                    },] },
        ];
        /** @nocollapse */
        EmailComponent.ctorParameters = function () { return []; };
        return EmailComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ColorComponent = /** @class */ (function () {
        function ColorComponent() {
        }
        /**
         * @return {?}
         */
        ColorComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        ColorComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: "ngs-form-control-color",
                        template: "<div  [formGroup]=\"form\">\n<mat-form-field fxFlexFill>\n    <input matInput [type]=\"schema.inputType\" [placeholder]=\"schema.title\" [formControlName]=\"schema.name\">\n</mat-form-field>\n</div>",
                        styles: [":host{display:block}.mat-form-field{width:100%}"]
                    },] },
        ];
        /** @nocollapse */
        ColorComponent.ctorParameters = function () { return []; };
        ColorComponent.propDecorators = {
            form: [{ type: i0.Input }],
            schema: [{ type: i0.Input }]
        };
        return ColorComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var TableComponent = /** @class */ (function () {
        function TableComponent(http) {
            this.http = http;
            this.selection = new collections.SelectionModel(true, []);
            this.ready = false;
        }
        /**
         * @return {?}
         */
        TableComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.http.get(this.schema.dataEndpoint).subscribe(function (data) {
                    _this.ready = true;
                    _this.displayedColumns = data.displayedColumns;
                    _this.filedDisplayedColumns = data.filedDisplayedColumns;
                    _this.dataSource = new material.MatTableDataSource(data.dataSource);
                });
            };
        /** Whether the number of selected elements matches the total number of rows. */
        /**
         * Whether the number of selected elements matches the total number of rows.
         * @return {?}
         */
        TableComponent.prototype.isAllSelected = /**
         * Whether the number of selected elements matches the total number of rows.
         * @return {?}
         */
            function () {
                var _a;
                /** @type {?} */
                var numSelected = this.selection.selected.length;
                this.form.patchValue((_a = {},
                    _a[this.schema.name] = this.selection.selected,
                    _a));
                /** @type {?} */
                var numRows = this.dataSource.data.length;
                return numSelected === numRows;
            };
        /** Selects all rows if they are not all selected; otherwise clear selection. */
        /**
         * Selects all rows if they are not all selected; otherwise clear selection.
         * @return {?}
         */
        TableComponent.prototype.masterToggle = /**
         * Selects all rows if they are not all selected; otherwise clear selection.
         * @return {?}
         */
            function () {
                var _this = this;
                this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
            };
        TableComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: "ngs-form-control-table",
                        template: "<div class=\"example-container mat-elevation-z8\" *ngIf=\"ready\">\n    <mat-table #table [dataSource]=\"dataSource\">\n  \n      <ng-container matColumnDef=\"select\">\n        <mat-header-cell *matHeaderCellDef>\n          <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n            [checked]=\"selection.hasValue() && isAllSelected()\"\n            [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n          </mat-checkbox>\n        </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\">\n          <mat-checkbox (click)=\"$event.stopPropagation()\"\n            (change)=\"$event ? selection.toggle(row) : null\"\n            [checked]=\"selection.isSelected(row)\">\n          </mat-checkbox>\n        </mat-cell>\n      </ng-container>\n\n      <div *ngFor=\"let col of filedDisplayedColumns\">\n        <ng-container  [matColumnDef]=\"col\">\n          <mat-header-cell *matHeaderCellDef> {{col}} </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> {{element[col]}} </mat-cell>\n        </ng-container>\n      </div>\n        \n      <ng-container matColumnDef=\"actions\">\n        <mat-header-cell *matHeaderCellDef></mat-header-cell>\n        <mat-cell class='left-align' *matCellDef=\"let row\">\n          <button mat-icon-button>\n            <mat-icon aria-label=\"\u0627\u0646\u062A\u062E\u0627\u0628\">arrow_back</mat-icon>\n          </button>\n        </mat-cell>\n      </ng-container>\n    \n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"selection.toggle(row)\"></mat-row>\n\n    </mat-table>\n  </div>\n\n\n<!-- <mat-form-field fxFlexFill [formGroup]=\"form\">\n  \n  <input matInput [id]=\"schema.name\" [type]=\"schema.inputType\" [placeholder]=\"schema.title\" [formControlName]=\"schema.name\">\n  \n  <mat-error *ngIf=\"form.get(schema.name).errors?.required\">\n    {{schema.validator.required.message}}\n  </mat-error>\n  <mat-error *ngIf=\"form.get(schema.name).errors?.minlength\">\n    {{schema.validator.minlength.message}}\n  </mat-error>\n  <mat-error *ngIf=\"form.get(schema.name).email?.minlength\">\n    {{schema.validator.email.message}}\n  </mat-error>\n</mat-form-field> -->\n  \n  <!-- <div *ngIf=\"form.get(schema.name).invalid && (form.get(schema.name).dirty || form.get(schema.name).touched)\" class=\"alert alert-danger\">\n  </div> -->",
                        styles: [":host{display:block}.mat-form-field{width:100%}"]
                    },] },
        ];
        /** @nocollapse */
        TableComponent.ctorParameters = function () {
            return [
                { type: i1.HttpClient }
            ];
        };
        TableComponent.propDecorators = {
            form: [{ type: i0.Input }],
            schema: [{ type: i0.Input }]
        };
        return TableComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NumberComponent = /** @class */ (function () {
        function NumberComponent() {
        }
        /**
         * @return {?}
         */
        NumberComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        NumberComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: "ngs-form-control-number",
                        template: "<div  [formGroup]=\"form\">\n    <mat-form-field fxFlexFill>\n        <input matInput [type]=\"schema.inputType\" [placeholder]=\"schema.title\" [formControlName]=\"schema.name\">\n    </mat-form-field>\n</div>",
                        styles: [":host{display:block}.mat-form-field{width:100%}"]
                    },] },
        ];
        /** @nocollapse */
        NumberComponent.ctorParameters = function () { return []; };
        NumberComponent.propDecorators = {
            form: [{ type: i0.Input }],
            schema: [{ type: i0.Input }]
        };
        return NumberComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var TextComponent = /** @class */ (function () {
        function TextComponent() {
        }
        TextComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: "ngs-form-control-text",
                        template: "<mat-form-field fxFlexFill [formGroup]=\"group\">\n\n  <input matInput [id]=\"config.name\" [type]=\"config.inputType\" [placeholder]=\"config.title\" [formControlName]=\"config.name\">\n\n  <mat-error *ngIf=\"group.get(config.name).errors?.required\">\n    {{config.validator.required.message}}\n  </mat-error>\n  <mat-error *ngIf=\"group.get(config.name).errors?.minlength\">\n    {{config.validator.minlength.message}}\n  </mat-error>\n  <!-- <mat-error *ngIf=\"group.get(config.name).email?.minlength\">\n    {{config.validator.email.message}}\n  </mat-error> -->\n\n  <!-- <div *ngIf=\"form.get(config.name).invalid && (form.get(config.name).dirty || form.get(config.name).touched)\" class=\"alert alert-danger\">\n  </div> -->\n\n</mat-form-field>",
                        styles: [":host{display:block}.mat-form-field{width:100%}"]
                    },] },
        ];
        /** @nocollapse */
        TextComponent.ctorParameters = function () { return []; };
        return TextComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var FormsListActionTypes = {
        FORMS_LIST: "[FORM][LIST] FORMS_LIST",
        FORMS_LIST_START: "[FORM][LIST] FORMS_LIST_START",
        FORMS_LIST_SUCCEED: "[FORM][LIST] FORMS_LIST_SUCCEED",
        FORMS_LIST_FAILED: "[FORM][LIST] FORMS_LIST_FAILED",
        ADD_FORM_SCHEMA: "[FORM][LIST] ADD_FORM_SCHEMA",
        FORM_SCHEMA_UPDATE: "[FORM][LIST] FORM_SCHEMA_UPDATE",
        GET_FORM_SCHEMA: "[FORM][LIST] GET_FORM_SCHEMA",
        FORM_SCHEMA_FETCHED: "[FORM][LIST] FORM_SCHEMA_FETCHED",
    };
    var FormsListAction = /** @class */ (function () {
        function FormsListAction() {
            this.type = FormsListActionTypes.FORMS_LIST;
        }
        return FormsListAction;
    }());
    var FormsListStartAction = /** @class */ (function () {
        function FormsListStartAction() {
            this.type = FormsListActionTypes.FORMS_LIST_START;
        }
        return FormsListStartAction;
    }());
    var FormsListSucceedAction = /** @class */ (function () {
        function FormsListSucceedAction(payload) {
            this.payload = payload;
            this.type = FormsListActionTypes.FORMS_LIST_SUCCEED;
        }
        return FormsListSucceedAction;
    }());
    var FormsListFailedAction = /** @class */ (function () {
        function FormsListFailedAction() {
            this.type = FormsListActionTypes.FORMS_LIST_FAILED;
        }
        return FormsListFailedAction;
    }());
    var UpdateFormSchemaAction = /** @class */ (function () {
        function UpdateFormSchemaAction(payload) {
            this.payload = payload;
            this.type = FormsListActionTypes.FORM_SCHEMA_UPDATE;
        }
        return UpdateFormSchemaAction;
    }());
    var AddFormSchemaAction = /** @class */ (function () {
        function AddFormSchemaAction(payload) {
            this.payload = payload;
            this.type = FormsListActionTypes.ADD_FORM_SCHEMA;
        }
        return AddFormSchemaAction;
    }());
    var GetFormSchemaAction = /** @class */ (function () {
        function GetFormSchemaAction(payload) {
            this.payload = payload;
            this.type = FormsListActionTypes.GET_FORM_SCHEMA;
        }
        return GetFormSchemaAction;
    }());
    var FormSchemaFechedAction = /** @class */ (function () {
        function FormSchemaFechedAction(payload) {
            this.payload = payload;
            this.type = FormsListActionTypes.FORM_SCHEMA_FETCHED;
        }
        return FormSchemaFechedAction;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var DateFormInputControlComponent = /** @class */ (function () {
        function DateFormInputControlComponent() {
        }
        DateFormInputControlComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: "ngs-form-control-date",
                        template: "<mat-form-field fxFlexFill [formGroup]=\"group\">\n\n  <!-- <input matInput [id]=\"config.name\" [type]=\"config.inputType\" [placeholder]=\"config.title\" [formControlName]=\"config.name\"> -->\n  <input matInput [id]=\"config.name\" [matDatepicker]=\"_datepicker\" [placeholder]=\"config.title\" [formControlName]=\"config.name\">\n  <mat-datepicker-toggle matSuffix [for]=\"_datepicker\"></mat-datepicker-toggle>\n  <mat-datepicker #_datepicker></mat-datepicker>\n\n  <mat-error *ngIf=\"group.get(config.name).errors?.required\">\n    {{config.validator.required.message}}\n  </mat-error>\n  <mat-error *ngIf=\"group.get(config.name).errors?.minlength\">\n    {{config.validator.minlength.message}}\n  </mat-error>\n  <!-- <mat-error *ngIf=\"group.get(config.name).email?.minlength\">\n    {{config.validator.email.message}}\n  </mat-error> -->\n\n  <!-- <div *ngIf=\"form.get(config.name).invalid && (form.get(config.name).dirty || form.get(config.name).touched)\" class=\"alert alert-danger\">\n  </div> -->\n\n</mat-form-field>\n\n<!-- \n\n<div [formGroup]=\"formGroup\">\n    <div class=\"field-wrapper\">\n      <div [@filedAnimation]=\"mode\">\n        <mat-form-field class=\"fit\" [(ngClass)]=\"mode\">\n            <input matInput [matDatepicker]=\"_datepicker\" [placeholder]=\"placeholder\" [formControlName]=\"controlName\">\n            <mat-datepicker-toggle matSuffix [for]=\"_datepicker\"></mat-datepicker-toggle>\n            <mat-datepicker #_datepicker></mat-datepicker>\n            \n          <mat-icon class=\"tooltip md-18\" *ngIf=\"tooltip\" [matTooltip]=\"tooltip\">help</mat-icon>\n        </mat-form-field>\n        <div class=\"value-box\"> \n          <span class=\"name\">\n            {{ placeholder }} :\n          </span>\n          <span class=\"value\">\n            {{(DisplayValue$ | async | persianDate)}} \n          </span>\n          </div>\n      </div>\n    </div>\n</div> -->",
                        styles: [":host{display:block}.mat-form-field{width:100%}"]
                    },] },
        ];
        /** @nocollapse */
        DateFormInputControlComponent.ctorParameters = function () { return []; };
        return DateFormInputControlComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var FileFormInputControlComponent = /** @class */ (function () {
        function FileFormInputControlComponent() {
        }
        FileFormInputControlComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: "ngs-form-control-file",
                        template: "<div fxFlexFill [formGroup]=\"group\">\n\n  <!-- <input matInput [id]=\"config.name\" [type]=\"config.inputType\" [placeholder]=\"config.title\" [formControlName]=\"config.name\"> -->\n  <input [id]=\"config.name\" [type]=\"config.inputType\" [placeholder]=\"config.title\" [formControlName]=\"config.name\">\n\n  <mat-error *ngIf=\"group.get(config.name).errors?.required\">\n    {{config.validator.required.message}}\n  </mat-error>\n  <mat-error *ngIf=\"group.get(config.name).errors?.minlength\">\n    {{config.validator.minlength.message}}\n  </mat-error>\n  <!-- <mat-error *ngIf=\"group.get(config.name).email?.minlength\">\n    {{config.validator.email.message}}\n  </mat-error> -->\n\n  <!-- <div *ngIf=\"form.get(config.name).invalid && (form.get(config.name).dirty || form.get(config.name).touched)\" class=\"alert alert-danger\">\n  </div> -->\n\n</div>\n\n<!-- \n\n<div [formGroup]=\"formGroup\">\n    <div class=\"field-wrapper\">\n      <div [@filedAnimation]=\"mode\">\n        <mat-form-field class=\"fit\" [(ngClass)]=\"mode\">\n            <input matInput [matDatepicker]=\"_datepicker\" [placeholder]=\"placeholder\" [formControlName]=\"controlName\">\n            <mat-datepicker-toggle matSuffix [for]=\"_datepicker\"></mat-datepicker-toggle>\n            <mat-datepicker #_datepicker></mat-datepicker>\n            \n          <mat-icon class=\"tooltip md-18\" *ngIf=\"tooltip\" [matTooltip]=\"tooltip\">help</mat-icon>\n        </mat-form-field>\n        <div class=\"value-box\"> \n          <span class=\"name\">\n            {{ placeholder }} :\n          </span>\n          <span class=\"value\">\n            {{(DisplayValue$ | async | persianDate)}} \n          </span>\n          </div>\n      </div>\n    </div>\n</div> -->",
                        styles: [":host{display:block}.mat-form-field{width:100%}"]
                    },] },
        ];
        /** @nocollapse */
        FileFormInputControlComponent.ctorParameters = function () { return []; };
        return FileFormInputControlComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var CaptchaModel = /** @class */ (function () {
        function CaptchaModel(_a) {
            var _b = _a === void 0 ? {} : _a, captchaImg = _b.captchaImg, captchaCode = _b.captchaCode;
            this.captchaImg = captchaImg + "?" + Math.random();
            this.captchaCode = captchaCode || "";
        }
        return CaptchaModel;
    }());
    var UpsertCaptchaApiModel;
    (function (UpsertCaptchaApiModel) {
        var Request = /** @class */ (function () {
            function Request(initValue) {
                if (initValue === void 0) {
                    initValue = {};
                }
                var _this = this;
                Object.keys(initValue).forEach(function (key) { return (_this[key] = initValue[key]); });
            }
            /**
             * @return {?}
             */
            Request.prototype.getRequestBody = /**
             * @return {?}
             */
                function () {
                    return this.Captcha.captchaCode;
                };
            return Request;
        }());
        UpsertCaptchaApiModel.Request = Request;
        var Response = /** @class */ (function () {
            function Response() {
            }
            return Response;
        }());
        UpsertCaptchaApiModel.Response = Response;
    })(UpsertCaptchaApiModel || (UpsertCaptchaApiModel = {}));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var FormCaptchaService = /** @class */ (function () {
        function FormCaptchaService(http, store, configurationService) {
            this.http = http;
            this.store = store;
            this.configurationService = configurationService;
        }
        /**
         * @return {?}
         */
        FormCaptchaService.prototype.getCaptcha = /**
         * @return {?}
         */
            function () {
                var _this = this;
                debugger;
                return this.configurationService.config$.pipe(operators.filter(function (captcha) { return captcha.endpoints.getCaptcha != ""; }), operators.take(1), operators.switchMap(function (captcha) {
                    return _this.http.get(captcha.env.server + captcha.endpoints.getCaptcha);
                }), operators.map(function (response) { return response.Result; }));
            };
        /**
         * @return {?}
         */
        FormCaptchaService.prototype.sendCaptcha = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return this.configurationService.config$.pipe(operators.filter(function (config$$1) { return config$$1.endpoints.getList != ""; }), operators.switchMap(function (config$$1) { return _this.http.get(config$$1.env.server + config$$1.endpoints.getList); }), operators.map(function (response) { return response.Result; }));
            };
        FormCaptchaService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: "root"
                    },] },
        ];
        /** @nocollapse */
        FormCaptchaService.ctorParameters = function () {
            return [
                { type: i1.HttpClient },
                { type: i2.Store },
                { type: FormConfigurationService }
            ];
        };
        /** @nocollapse */ FormCaptchaService.ngInjectableDef = i0.defineInjectable({ factory: function FormCaptchaService_Factory() { return new FormCaptchaService(i0.inject(i1.HttpClient), i0.inject(i2.Store), i0.inject(FormConfigurationService)); }, token: FormCaptchaService, providedIn: "root" });
        return FormCaptchaService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var FormCaptchaComponent = /** @class */ (function () {
        function FormCaptchaComponent(service, store) {
            this.service = service;
            this.store = store;
            this.captcha = new CaptchaModel({
                captchaImg: "http://172.22.34.28:8001/api/authentication/captcha"
            });
            // this.captcha = new CaptchaModel;
        }
        /**
         * @return {?}
         */
        FormCaptchaComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                debugger;
                // this.store.dispatch(new GetCaptchaAction());
            };
        /**
         * @return {?}
         */
        FormCaptchaComponent.prototype.refresh = /**
         * @return {?}
         */
            function () {
                this.captcha.captchaImg = "http://172.22.34.28:8001/api/authentication/captcha?" + Math.random();
            };
        FormCaptchaComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: "lib-form-captcha",
                        template: "<div>\n  <img [src]=\"captcha.captchaImg\" />\n\n  <button (click)=\"refresh()\">refresh</button>\n\n  <div [formGroup]=\"group\">\n    <mat-form-field fxFlex>\n      <input matInput [id]=\"config.name\" [placeholder]=\"config.title\" [formControlName]=\"config.name\" />\n    </mat-form-field>\n  </div>\n</div>"
                    },] },
        ];
        /** @nocollapse */
        FormCaptchaComponent.ctorParameters = function () {
            return [
                { type: FormCaptchaService },
                { type: i2.Store }
            ];
        };
        return FormCaptchaComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var FormViewComponent = /** @class */ (function () {
        function FormViewComponent(service, compiler, resolver, store) {
            var _this = this;
            this.service = service;
            this.compiler = compiler;
            this.resolver = resolver;
            this.store = store;
            this.unsubscribe = new rxjs.Subject();
            this.accept = new i0.EventEmitter();
            this.cancel = new i0.EventEmitter();
            this.card = false;
            this.formGroupCreated = false;
            this.schema$ = new BehaviorSubject.BehaviorSubject(undefined);
            this.schema$.pipe(operators.takeUntil(this.unsubscribe)).subscribe(function (schema) {
                if (!schema)
                    return;
                _this.formGroup = /** @type {?} */ (_this.createFrom(schema.form));
                if (!schema.form.name)
                    return;
                _this.formGroupCreated = true;
            });
        }
        Object.defineProperty(FormViewComponent.prototype, "id", {
            set: /**
             * @param {?} id
             * @return {?}
             */ function (id) {
                var _this = this;
                if (!this.local)
                    this.store.dispatch(new GetFormSchemaAction(id));
                this.service
                    .selectFormById(id)
                    .pipe(operators.takeUntil(this.unsubscribe))
                    .subscribe(function (schema) { return _this.schema$.next(schema); });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormViewComponent.prototype, "schema", {
            set: /**
             * @param {?} schema
             * @return {?}
             */ function (schema) {
                this.schema$.next(schema);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        FormViewComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.unsubscribe.next();
                this.unsubscribe.complete();
            };
        /**
         * @param {?} schema
         * @return {?}
         */
        FormViewComponent.prototype.generate = /**
         * @param {?} schema
         * @return {?}
         */
            function (schema) {
                this.schema$.next(schema);
            };
        /**
         * @param {?} data
         * @param {?=} parentPath
         * @return {?}
         */
        FormViewComponent.prototype.createFrom = /**
         * @param {?} data
         * @param {?=} parentPath
         * @return {?}
         */
            function (data, parentPath) {
                var _this = this;
                if (parentPath === void 0) {
                    parentPath = "";
                }
                if (data.type == "control") {
                    /** @type {?} */
                    var formGroupPath = void 0;
                    if (data.parentType == "array") ;
                    else if (data.parentType == "group") {
                        formGroupPath = parentPath;
                        parentPath = parentPath + ".controls." + (( /** @type {?} */(data))).name;
                    }
                    /** @type {?} */
                    var validators = [];
                    if (data.validator.required && data.validator.required.active) {
                        validators.push(forms.Validators.required);
                    }
                    if (data.validator.minlength && data.validator.minlength.active) {
                        validators.push(forms.Validators.minLength(data.validator.minlength.value));
                    }
                    if (data.validator.email && data.validator.email.active) {
                        validators.push(forms.Validators.email);
                    }
                    /** @type {?} */
                    var ctr = new forms.FormControl(data.value, validators);
                    ( /** @type {?} */(ctr)).schema = data;
                    ( /** @type {?} */(ctr)).schema.path = parentPath;
                    ( /** @type {?} */(ctr)).schema.formGroupPath = formGroupPath;
                    return ctr;
                }
                else if (data.type == "group") {
                    /** @type {?} */
                    var formGroup_1 = new forms.FormGroup({});
                    if (data.parentType == undefined) {
                        parentPath = ( /** @type {?} */(data)).name;
                    }
                    else if (data.parentType == "array") {
                        parentPath = parentPath + ".controls[" + (( /** @type {?} */(data))).name + "]";
                    }
                    else if (data.parentType == "group") {
                        parentPath = parentPath + ".controls." + (( /** @type {?} */(data))).name;
                    }
                    ( /** @type {?} */(formGroup_1)).schema = data;
                    ( /** @type {?} */(formGroup_1)).schema.path = parentPath;
                    data.fields.forEach(function (item) {
                        item.parentType = "group";
                        formGroup_1.addControl(item.name, _this.createFrom(item, parentPath));
                    });
                    return formGroup_1;
                }
                else {
                    /** @type {?} */
                    var formArray_1 = new forms.FormArray([]);
                    parentPath =
                        parentPath == "" ? ( /** @type {?} */(data)).name : parentPath + ".controls." + (( /** @type {?} */(data))).name;
                    ( /** @type {?} */(formArray_1)).schema = data;
                    ( /** @type {?} */(formArray_1)).schema.path = parentPath;
                    data.fields.forEach(function (item, idx) {
                        item.parentType = "array";
                        item.name = idx.toString();
                        formArray_1.controls.push(_this.createFrom(item, parentPath));
                    });
                    return formArray_1;
                }
            };
        /**
         * @return {?}
         */
        FormViewComponent.prototype.accepted = /**
         * @return {?}
         */
            function () {
                this.accept.emit(this.formGroup);
            };
        /**
         * @return {?}
         */
        FormViewComponent.prototype.canceled = /**
         * @return {?}
         */
            function () {
                this.cancel.emit(this.formGroup);
            };
        FormViewComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: "ngs-form-view",
                        template: "<div fxFlex=\"100\" fxLayoutAlign=\"center center\">\n  <form *ngIf=\"formGroupCreated && card\" class=\"ngs-dynamic-form\" [formGroup]=\"formGroup\" (ngSubmit)=\"accepted()\">\n    <mat-card>\n      <mat-card-title>\n        {{(schema$ | async)?.name}}\n      </mat-card-title>\n      <mat-card-content fxLayout=\"row wrap\" fxLayoutGap=\"25px\">\n        <div *ngFor=\"let field of (schema$ | async)?.form.fields;\" [fxFlex]=\"field.width * 10\">\n          <ng-container *ngIf=\"field && field.inputType\" dynamicField [config]=\"field\" [group]=\"formGroup\"></ng-container>\n        </div>\n      </mat-card-content>\n      <mat-card-actions align=\"end\">\n        <button type=\"button\" *ngIf=\"(schema$ | async)?.events.cancel.show\" (click)=\"cancel.emit()\" mat-button color=\"primary\">{{(schema$\n          | async)?.events.cancel.text}}</button>\n        <button type=\"submit\" *ngIf=\"(schema$ | async)?.events.accept.show\" mat-raised-button color=\"primary\">{{(schema$\n          | async)?.events.accept.text}}</button>\n      </mat-card-actions>\n    </mat-card>\n  </form>\n  <form *ngIf=\"formGroupCreated && !card\" class=\"ngs-dynamic-form\" [formGroup]=\"formGroup\" (ngSubmit)=\"accepted()\">\n    <div>\n      <h3>\n        {{(schema$ | async)?.name}}\n      </h3>\n      <div fxLayout=\"row wrap\" fxLayoutGap=\"5px\">\n        <div *ngFor=\"let field of (schema$ | async)?.form.fields;\" [fxFlex]=\"field.width * 10\">\n          <ng-container dynamicField [config]=\"field\" [group]=\"formGroup\"></ng-container>\n        </div>\n      </div>\n      <div>\n        <button type=\"button\" *ngIf=\"(schema$ | async)?.events.cancel.show\" (click)=\"cancel.emit()\" mat-button color=\"primary\">{{(schema$\n          | async)?.events.cancel.text}}</button>\n        <button type=\"submit\" *ngIf=\"(schema$ | async)?.events.accept.show\" mat-raised-button color=\"primary\">{{(schema$\n          | async)?.events.accept.text}}</button>\n      </div>\n    </div>\n  </form>\n\n</div>",
                        styles: [""]
                    },] },
        ];
        /** @nocollapse */
        FormViewComponent.ctorParameters = function () {
            return [
                { type: FormService },
                { type: i0.Compiler },
                { type: i0.ComponentFactoryResolver },
                { type: i2.Store }
            ];
        };
        FormViewComponent.propDecorators = {
            accept: [{ type: i0.Output }],
            cancel: [{ type: i0.Output }],
            local: [{ type: i0.Input }],
            card: [{ type: i0.Input }],
            id: [{ type: i0.Input }],
            schema: [{ type: i0.Input }]
        };
        return FormViewComponent;
    }());
    /** @type {?} */
    var components = {
        checkbox: CheckboxComponent,
        text: TextComponent,
        password: TextComponent,
        date: DateFormInputControlComponent,
        file: FileFormInputControlComponent,
        table: TableComponent,
        color: ColorComponent,
        email: EmailComponent,
        captcha: FormCaptchaComponent,
        select: SelectComponent
    };
    var DynamicFieldDirective = /** @class */ (function () {
        function DynamicFieldDirective(resolver, container) {
            this.resolver = resolver;
            this.container = container;
        }
        /**
         * @return {?}
         */
        DynamicFieldDirective.prototype.ngOnChanges = /**
         * @return {?}
         */
            function () {
                debugger;
                if (this.component) {
                    this.component.instance.config = this.config;
                    this.component.instance.group = this.group;
                }
            };
        /**
         * @return {?}
         */
        DynamicFieldDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                debugger;
                if (this.config.inputType == undefined)
                    return;
                if (!components[this.config.inputType]) {
                    /** @type {?} */
                    var supportedTypes = Object.keys(components).join(", ");
                    throw new Error("Trying to use an unsupported type (" + this.config.inputType + ").\n\t\t  Supported types: " + supportedTypes);
                }
                /** @type {?} */
                var component = this.resolver.resolveComponentFactory(components[this.config.inputType]);
                this.component = this.container.createComponent(component);
                this.component.instance.config = this.config;
                this.component.instance.group = this.group;
            };
        DynamicFieldDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: "[dynamicField]"
                    },] },
        ];
        /** @nocollapse */
        DynamicFieldDirective.ctorParameters = function () {
            return [
                { type: i0.ComponentFactoryResolver },
                { type: i0.ViewContainerRef }
            ];
        };
        DynamicFieldDirective.propDecorators = {
            config: [{ type: i0.Input }],
            group: [{ type: i0.Input }]
        };
        return DynamicFieldDirective;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var initialState = {
        status: "pristine",
        data: []
    };
    /**
     * @param {?=} state
     * @param {?=} action
     * @return {?}
     */
    function reducer(state, action) {
        if (state === void 0) {
            state = initialState;
        }
        switch (action.type) {
            case FormsListActionTypes.FORMS_LIST: {
                return __assign({}, state, { status: "dirty" });
            }
            case FormsListActionTypes.FORMS_LIST_START: {
                return __assign({}, state, { status: "pending" });
            }
            case FormsListActionTypes.FORMS_LIST_SUCCEED: {
                return __assign({}, state, { data: action.payload, status: "succeed" });
            }
            case FormsListActionTypes.FORMS_LIST_FAILED: {
                return __assign({}, state, { status: "failed" });
            }
            case FormsListActionTypes.FORM_SCHEMA_UPDATE: {
                /** @type {?} */
                var data = state.data.concat();
                /** @type {?} */
                var entityIdx = state.data.findIndex(function (form) { return form._id == action.payload._id; });
                if (entityIdx > -1) {
                    data[entityIdx] = Object.assign({}, data[entityIdx], action.payload);
                }
                else {
                    data.push(action.payload);
                }
                return __assign({}, state, { data: data });
            }
            case FormsListActionTypes.ADD_FORM_SCHEMA: {
                /** @type {?} */
                var data = state.data.concat();
                /** @type {?} */
                var entityIdx = state.data.findIndex(function (form) { return form._id == action.payload._id; });
                if (entityIdx > -1) {
                    data[entityIdx] = Object.assign({}, data[entityIdx], action.payload);
                }
                else {
                    data.push(action.payload);
                }
                return __assign({}, state, { data: data });
            }
            case FormsListActionTypes.FORM_SCHEMA_FETCHED: {
                /** @type {?} */
                var data = state.data.concat();
                /** @type {?} */
                var entityIdx = state.data.findIndex(function (form) { return form._id == action.payload._id; });
                if (entityIdx > -1) {
                    data[entityIdx] = Object.assign({}, data[entityIdx], action.payload);
                }
                else {
                    data.push(action.payload);
                }
                return __assign({}, state, { data: data });
            }
            default: {
                return state;
            }
        }
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var FormReducers = {
        list: reducer
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var FormGroupComponent = /** @class */ (function () {
        function FormGroupComponent() {
            this.noHeader = false;
            this.changes = new i0.EventEmitter();
            this.delete = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        FormGroupComponent.prototype.changed = /**
         * @return {?}
         */
            function () {
                this.changes.emit();
            };
        /**
         * @param {?} root
         * @return {?}
         */
        FormGroupComponent.prototype.addFormGroup = /**
         * @param {?} root
         * @return {?}
         */
            function (root) {
                /** @type {?} */
                var group = new FieldConfig("group");
                group.fields = [];
                root.fields.push(group);
                this.schema.id = this.schema.id + 1;
                return group;
            };
        /**
         * @param {?} root
         * @return {?}
         */
        FormGroupComponent.prototype.addFormArray = /**
         * @param {?} root
         * @return {?}
         */
            function (root) {
                /** @type {?} */
                var array = new FieldConfig("array");
                array.fields = [];
                root.fields.push(array);
                return array;
            };
        /**
         * @param {?} root
         * @return {?}
         */
        FormGroupComponent.prototype.addFormControl = /**
         * @param {?} root
         * @return {?}
         */
            function (root) {
                /** @type {?} */
                var control = new FieldConfig("control");
                root.fields.push(control);
                return control;
            };
        /**
         * @param {?} idx
         * @return {?}
         */
        FormGroupComponent.prototype.deleteFormGroup = /**
         * @param {?} idx
         * @return {?}
         */
            function (idx) {
                this.schema.fields.splice(idx, 1);
            };
        FormGroupComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: "app-form-group",
                        template: "<div>\n\n  <mat-form-field *ngIf=\"!noHeader\">\n    <input matInput [(ngModel)]=\"schema.name\" placeholder=\"Name\">\n  </mat-form-field>\n\n  <mat-form-field *ngIf=\"!noHeader\">\n    <input matInput [(ngModel)]=\"schema.title\" placeholder=\"\u0639\u0646\u0648\u0627\u0646\">\n  </mat-form-field>\n\n  <div class=\"button-row\">\n    <button mat-button color=\"primary\" (click)=\"addFormGroup(schema)\"> addFormGroup </button>\n    <button mat-button color=\"primary\" (click)=\"addFormArray(schema)\"> addFormArray </button>\n    <button mat-button color=\"primary\" (click)=\"addFormControl(schema)\">addFormControl</button>\n  </div>\n\n  <div *ngFor=\"let field of schema.fields;let i = index\">\n    <div [ngSwitch]=\"field.type\">\n      <app-form-group *ngSwitchCase=\"'group'\" [schema]=\"field\" (change)=\"changed()\"></app-form-group>\n      <!-- <app-form-array *ngSwitchCase=\"'array'\" [schema]=\"field\" (change)=\"changed()\"></app-form-array> -->\n      <app-form-control *ngSwitchCase=\"'control'\" [schema]=\"field\" (changes)=\"changed()\" (delete)=\"deleteFormGroup(i)\"></app-form-control>\n    </div>\n  </div>\n</div>"
                    },] },
        ];
        /** @nocollapse */
        FormGroupComponent.ctorParameters = function () { return []; };
        FormGroupComponent.propDecorators = {
            schema: [{ type: i0.Input }],
            noHeader: [{ type: i0.Input }],
            changes: [{ type: i0.Output }],
            delete: [{ type: i0.Output }]
        };
        return FormGroupComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var FormArrayComponent = /** @class */ (function () {
        function FormArrayComponent() {
            this.changes = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        FormArrayComponent.prototype.changed = /**
         * @return {?}
         */
            function () {
                this.changes.emit();
            };
        /**
         * @param {?} root
         * @return {?}
         */
        FormArrayComponent.prototype.addFormGroup = /**
         * @param {?} root
         * @return {?}
         */
            function (root) {
                /** @type {?} */
                var group = new FieldConfig("group");
                group.fields = [];
                root.fields.push(group);
                return group;
            };
        /**
         * @param {?} root
         * @return {?}
         */
        FormArrayComponent.prototype.addFormArray = /**
         * @param {?} root
         * @return {?}
         */
            function (root) {
                /** @type {?} */
                var array = new FieldConfig("array");
                array.fields = [];
                root.fields.push(array);
                return array;
            };
        /**
         * @param {?} root
         * @return {?}
         */
        FormArrayComponent.prototype.addFormControl = /**
         * @param {?} root
         * @return {?}
         */
            function (root) {
                /** @type {?} */
                var control = new FieldConfig("control");
                root.fields.push(control);
                return control;
            };
        FormArrayComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: "app-form-array",
                        template: "<mat-card>\n  <mat-card-content>\n    <mat-form-field>\n        <input matInput [(ngModel)]=\"schema.name\" placeholder=\"Name\">\n    </mat-form-field>\n      \n    <div class=\"button-row\">\n      <button mat-button color=\"primary\" (click)=\"addFormGroup(schema)\">addFormGroup</button>\n      <button mat-button color=\"primary\" (click)=\"addFormArray(schema)\">addFormArray</button>\n      <!-- <button mat-button color=\"primary\" (click)=\"addFormControl(schema)\">addFormControl</button> -->\n    </div>\n    \n    <div *ngFor=\"let field of schema.fields\">\n      <div [ngSwitch]=\"field.type\">\n        <app-form-group *ngSwitchCase=\"'group'\" [schema]=\"field\" (changes)=\"changed()\"></app-form-group>\n        <app-form-array *ngSwitchCase=\"'array'\" [schema]=\"field\" (changes)=\"changed()\"></app-form-array>\n        <!-- <app-form-control *ngSwitchCase=\"'control'\" [schema]=\"field\" (change)=\"changed($event)\"></app-form-control> -->\n      </div>\n    </div>\n    \n  </mat-card-content>\n</mat-card>"
                    },] },
        ];
        /** @nocollapse */
        FormArrayComponent.ctorParameters = function () { return []; };
        FormArrayComponent.propDecorators = {
            schema: [{ type: i0.Input }],
            changes: [{ type: i0.Output }]
        };
        return FormArrayComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var FormControlComponent = /** @class */ (function () {
        function FormControlComponent() {
            this.changes = new i0.EventEmitter();
            this.delete = new i0.EventEmitter();
            this.width = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            this.options = new forms.FormArray([
                new forms.FormGroup({
                    key: new forms.FormControl(),
                    value: new forms.FormControl()
                })
            ]);
            this.tableOptions = new forms.FormGroup({
                dataEndpoint: new forms.FormControl("")
            });
        }
        /**
         * @return {?}
         */
        FormControlComponent.prototype.changed = /**
         * @return {?}
         */
            function () {
                if ([this.schema.name, this.schema.title, this.schema.inputType].some(function (item) { return !item; }))
                    return true;
                if (this.schema.inputType == "table") {
                    this.schema.options = this.tableOptions.value;
                }
                else if (this.schema.inputType == "select") {
                    this.schema.options = this.options.value;
                }
                this.changes.emit();
            };
        /**
         * @return {?}
         */
        FormControlComponent.prototype.addOption = /**
         * @return {?}
         */
            function () {
                this.options.push(new forms.FormGroup({
                    key: new forms.FormControl(),
                    value: new forms.FormControl()
                }));
            };
        /**
         * @param {?} i
         * @return {?}
         */
        FormControlComponent.prototype.removeOption = /**
         * @param {?} i
         * @return {?}
         */
            function (i) {
                this.options.controls.splice(i, 1);
            };
        /**
         * @return {?}
         */
        FormControlComponent.prototype.insertOptions = /**
         * @return {?}
         */
            function () {
                this.schema.options = this.options.value;
            };
        FormControlComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: "app-form-control",
                        template: "<mat-expansion-panel>\n  <mat-expansion-panel-header>\n    <mat-panel-title fxLayout=\"row\" fxLayoutAlign=\"start center\">\n      <button mat-icon-button (click)=\"delete.emit()\">\n        <mat-icon aria-label=\"icon-button\">delete_forever</mat-icon>\n      </button>\n      <span>{{schema.name}}</span>\n\n    </mat-panel-title>\n  </mat-expansion-panel-header>\n  <div fxLayout=\"row wrap\" fxLayoutGap=\"10px\">\n    <mat-form-field fxFlex>\n      <input matInput [(ngModel)]=\"schema.name\" (change)=\"changed()\" placeholder=\"Name\">\n    </mat-form-field>\n\n    <mat-form-field fxFlex>\n      <input matInput [(ngModel)]=\"schema.title\" (change)=\"changed()\" placeholder=\"Placeholder\" />\n    </mat-form-field>\n\n    <mat-form-field fxFlex>\n      <mat-select [(ngModel)]=\"schema.inputType\" (change)=\"changed()\" placeholder=\"Input Type\">\n        <mat-option value=\"table\">table</mat-option>\n        <mat-option value=\"select\">select</mat-option>\n        <mat-option value=\"text\">text</mat-option>\n        <mat-option value=\"number\">number</mat-option>\n        <mat-option value=\"email\">email</mat-option>\n        <mat-option value=\"color\">color</mat-option>\n        <mat-option value=\"radio\">radio</mat-option>\n        <mat-option value=\"checkbox\">checkbox</mat-option>\n        <mat-option value=\"checkbox\">captcha</mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n  <div fxLayout=\"row wrap\" fxLayoutGap=\"10px\">\n    <mat-form-field fxFlex>\n      <input matInput [(ngModel)]=\"schema.value\" (change)=\"changed()\" placeholder=\"Value\" />\n    </mat-form-field>\n\n    <mat-form-field fxFlex>\n      <mat-select [(ngModel)]=\"schema.width\" (change)=\"changed()\" placeholder=\"width\">\n        <mat-option *ngFor=\"let item of width\" [value]=\"item\">{{item}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n  <div fxLayout=\"column\" fxLayoutGap=\"10px\">\n    <div *ngIf=\"schema.inputType=='table'\" [formGroup]=\"tableOptions\">\n      <mat-form-field>\n        <input matInput (change)=\"changed()\" formControlName=\"dataEndpoint\" placeholder=\"dataEndpoint\" />\n      </mat-form-field>\n    </div>\n\n    <div *ngIf=\"schema.inputType=='select'\">\n      [options]\n      <button (click)=\"addOption()\">+</button>\n      <button (click)=\"insertOptions()\">insert</button>\n      <div *ngFor=\"let option of options.controls;index as i\">\n        {{i}}\n        <div [formGroup]=\"options.controls[i]\">\n          <mat-form-field>\n            <input matInput (change)=\"changed()\" formControlName=\"key\" placeholder=\"key\" />\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput (change)=\"changed()\" formControlName=\"value\" placeholder=\"value\" />\n          </mat-form-field>\n        </div>\n      </div>\n    </div>\n    <br />\n    <mat-card fxLayout=\"column\">\n      <mat-slide-toggle (change)=\"changed()\" [(ngModel)]=\"schema.validator.required.active\">\u0627\u062C\u0628\u0627\u0631\u06CC</mat-slide-toggle>\n      <mat-form-field>\n        <input matInput (change)=\"changed()\" [(ngModel)]=\"schema.validator.required.message\" placeholder=\"\u067E\u06CC\u063A\u0627\u0645\" />\n      </mat-form-field>\n    </mat-card>\n    <mat-card fxLayout=\"column\">\n      <mat-slide-toggle (change)=\"changed()\" [(ngModel)]=\"schema.validator.email.active\">\u0627\u06CC\u0645\u06CC\u0644</mat-slide-toggle>\n      <mat-form-field>\n        <input matInput (change)=\"changed()\" [(ngModel)]=\"schema.validator.email.message\" placeholder=\"\u067E\u06CC\u063A\u0627\u0645\" />\n      </mat-form-field>\n    </mat-card>\n    <mat-card fxLayout=\"column\">\n      <mat-slide-toggle (change)=\"changed()\" [(ngModel)]=\"schema.validator.minlength.active\">\u062D\u062F\u0627\u0642\u0644 \u062A\u0639\u062F\u0627\u062F \u06A9\u0627\u0631\u0627\u06A9\u062A\u0631</mat-slide-toggle>\n      <mat-form-field>\n        <input matInput (change)=\"changed()\" [(ngModel)]=\"schema.validator.minlength.message\" placeholder=\"\u067E\u06CC\u063A\u0627\u0645\" />\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput (change)=\"changed()\" [(ngModel)]=\"schema.validator.minlength.value\" placeholder=\"\u062A\u0639\u062F\u0627\u062F \u062D\u062F\u0627\u0642\u0644 \u06A9\u0627\u0631\u0627\u06A9\u062A\u0631\" />\n      </mat-form-field>\n    </mat-card>\n  </div>\n</mat-expansion-panel>"
                    },] },
        ];
        /** @nocollapse */
        FormControlComponent.ctorParameters = function () { return []; };
        FormControlComponent.propDecorators = {
            schema: [{ type: i0.Input }],
            changes: [{ type: i0.Output }],
            delete: [{ type: i0.Output }]
        };
        return FormControlComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var EditFormActionTypes = {
        EDIT_FORM: "[FORM][EDIT] EDIT_FORM",
        EDIT_FORM_START: "[FORM][EDIT] EDIT_FORM_START",
        EDIT_FORM_SUCCEED: "[FORM][EDIT] EDIT_FORM_SUCCEED",
        EDIT_FORM_FAILED: "[FORM][EDIT] EDIT_FORM_FAILED",
    };
    var EditFormAction = /** @class */ (function () {
        function EditFormAction(payload) {
            this.payload = payload;
            this.type = EditFormActionTypes.EDIT_FORM;
        }
        return EditFormAction;
    }());
    var EditFormStartAction = /** @class */ (function () {
        function EditFormStartAction(payload) {
            this.payload = payload;
            this.type = EditFormActionTypes.EDIT_FORM_START;
        }
        return EditFormStartAction;
    }());
    var EditFormSucceedAction = /** @class */ (function () {
        function EditFormSucceedAction(payload) {
            this.payload = payload;
            this.type = EditFormActionTypes.EDIT_FORM_SUCCEED;
        }
        return EditFormSucceedAction;
    }());
    var EditFormFailedAction = /** @class */ (function () {
        function EditFormFailedAction() {
            this.type = EditFormActionTypes.EDIT_FORM_FAILED;
        }
        return EditFormFailedAction;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var AddFormActionTypes = {
        ADD_FORM: "[FORM][ADD] ADD_FORM_PROFILE",
        ADD_FORM_START: "[FORM][ADD] ADD_FORM_START",
        ADD_FORM_SUCCEED: "[FORM][ADD] ADD_FORM_SUCCEED",
        ADD_FORM_FAILED: "[FORM][ADD] ADD_FORM_FAILED",
    };
    var AddFormAction = /** @class */ (function () {
        function AddFormAction(payload) {
            this.payload = payload;
            this.type = AddFormActionTypes.ADD_FORM;
        }
        return AddFormAction;
    }());
    var AddFormStartAction = /** @class */ (function () {
        function AddFormStartAction(payload) {
            this.payload = payload;
            this.type = AddFormActionTypes.ADD_FORM_START;
        }
        return AddFormStartAction;
    }());
    var AddFormSucceedAction = /** @class */ (function () {
        function AddFormSucceedAction() {
            this.type = AddFormActionTypes.ADD_FORM_SUCCEED;
        }
        return AddFormSucceedAction;
    }());
    var AddFormFailedAction = /** @class */ (function () {
        function AddFormFailedAction() {
            this.type = AddFormActionTypes.ADD_FORM_FAILED;
        }
        return AddFormFailedAction;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var AddFormContainerComponent = /** @class */ (function () {
        function AddFormContainerComponent(store, service) {
            this.store = store;
            this.service = service;
        }
        /**
         * @return {?}
         */
        AddFormContainerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.schema = new FormSchemaModel();
                this.schema.init();
                this.store.dispatch(new AddFormSchemaAction(this.schema));
            };
        /**
         * @param {?} form
         * @return {?}
         */
        AddFormContainerComponent.prototype.add = /**
         * @param {?} form
         * @return {?}
         */
            function (form) {
                this.store.dispatch(new AddFormAction(form));
            };
        /**
         * @param {?} form
         * @return {?}
         */
        AddFormContainerComponent.prototype.update_schema = /**
         * @param {?} form
         * @return {?}
         */
            function (form) {
                this.store.dispatch(new UpdateFormSchemaAction(form));
            };
        AddFormContainerComponent.decorators = [
            { type: i0.Component, args: [{
                        template: "<ngs-form-add \n\t\t\t\t\t[schema]=\"schema\" \n\t\t\t\t\t(changes)=\"update_schema($event)\" \n\t\t\t\t\t(submited)=add($event)\n\t\t\t\t></ngs-form-add>"
                    },] },
        ];
        /** @nocollapse */
        AddFormContainerComponent.ctorParameters = function () {
            return [
                { type: i2.Store },
                { type: FormService }
            ];
        };
        return AddFormContainerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var EditFormContainerComponent = /** @class */ (function (_super) {
        __extends(EditFormContainerComponent, _super);
        function EditFormContainerComponent(service, route, store) {
            var _this = _super.call(this, store, service) || this;
            _this.service = service;
            _this.route = route;
            _this.store = store;
            _this.formGroup = exports.EditFormApiModel.Request.formGroup;
            return _this;
        }
        /**
         * @return {?}
         */
        EditFormContainerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.route.params
                    .map(function (params) { return params["_id"]; })
                    .subscribe(function (id) { return _this.store.dispatch(new GetFormSchemaAction(id)); });
                this.route.params
                    .map(function (params) { return params["_id"]; })
                    .switchMap(function (id) { return _this.service.selectFormById(id); })
                    .filter(function (data) { return data != null; })
                    .take(1)
                    .subscribe(function (formSchema) {
                    _this.schema = formSchema;
                    _this.formGroup.patchValue(formSchema);
                });
            };
        /**
         * @param {?} data
         * @return {?}
         */
        EditFormContainerComponent.prototype.update = /**
         * @param {?} data
         * @return {?}
         */
            function (data) {
                this.store.dispatch(new EditFormAction(data));
            };
        EditFormContainerComponent.decorators = [
            { type: i0.Component, args: [{
                        template: "<edit-form\n\t\t\t\t\t[formGroup]=\"formGroup\"\n\t\t\t\t\t[schema]=\"schema\"\n\t\t\t\t\t(changes)=\"update_schema($event)\"\n\t\t\t\t\t(submited)=\"update($event)\">\n\t\t\t\t</edit-form>"
                    },] },
        ];
        /** @nocollapse */
        EditFormContainerComponent.ctorParameters = function () {
            return [
                { type: FormService },
                { type: router.ActivatedRoute },
                { type: i2.Store }
            ];
        };
        return EditFormContainerComponent;
    }(AddFormContainerComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var AddFormComponent = /** @class */ (function () {
        function AddFormComponent() {
            this.formGroup = exports.AddFormApiModel.Request.formGroup;
            this.submited = new i0.EventEmitter();
            this.changes = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        AddFormComponent.prototype.emit = /**
         * @return {?}
         */
            function () {
                this.formGroup.patchValue({ form: this.schema.form });
                this.submited.emit(this.formGroup.value);
            };
        /**
         * @return {?}
         */
        AddFormComponent.prototype.changed = /**
         * @return {?}
         */
            function () {
                this.formGroup.patchValue({ form: this.schema.form });
                this.changes.emit(this.formGroup.value);
            };
        /**
         * @param {?} $event
         * @return {?}
         */
        AddFormComponent.prototype.changeOrder = /**
         * @param {?} $event
         * @return {?}
         */
            function ($event) { };
        /**
         * @param {?} root
         * @return {?}
         */
        AddFormComponent.prototype.addFormGroup = /**
         * @param {?} root
         * @return {?}
         */
            function (root) {
                /** @type {?} */
                var group = new FieldConfig("group");
                group.fields = [];
                root.fields.push(group);
                return group;
            };
        /**
         * @param {?} root
         * @return {?}
         */
        AddFormComponent.prototype.addFormArray = /**
         * @param {?} root
         * @return {?}
         */
            function (root) {
                /** @type {?} */
                var array = new FieldConfig("array");
                array.fields = [];
                root.fields.push(array);
                return array;
            };
        /**
         * @param {?} root
         * @return {?}
         */
        AddFormComponent.prototype.addFormControl = /**
         * @param {?} root
         * @return {?}
         */
            function (root) {
                /** @type {?} */
                var control = new FieldConfig("control");
                root.fields.push(control);
                return control;
            };
        AddFormComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: "ngs-form-add",
                        template: "<div fxLayout=\"row\" *ngIf=\"schema\">\n  <div [fxFlex]=\"50\" *ngIf=\"formGroup\">\n    <form [formGroup]=\"formGroup\">\n      <mat-card>\n        <mat-card-title>\u0627\u06CC\u062C\u0627\u062F \u0641\u0631\u0645 \u062C\u062F\u06CC\u062F</mat-card-title>\n        <mat-card-content>\n          <mat-form-field>\n            <input type=\"text\" matInput (change)=\"changed()\" placeholder=\"\u0646\u0627\u0645 \u0641\u0631\u0645\" formControlName=\"name\">\n          </mat-form-field>\n          <!-- <div class=\"button-row\">\n                <button mat-button color=\"primary\" (click)=\"addFormGroup(schema.form)\">Add form group</button>\n                <button mat-button color=\"primary\" (click)=\"addFormArray(schema.form)\">Add form array</button>\n                <button mat-button color=\"primary\" (click)=\"addFormControl(schema.form)\">Add form control</button>\n              </div> -->\n        </mat-card-content>\n      </mat-card>\n      <mat-card>\n        <mat-card-content>\n          <div [ngSwitch]=\"schema.form?.type\">\n            <app-form-group *ngSwitchCase=\"'group'\" [schema]=\"schema.form\" noHeader=\"true\" (changes)=\"changed()\"></app-form-group>\n            <app-form-array *ngSwitchCase=\"'array'\" [schema]=\"schema.form\" (changes)=\"changed()\"></app-form-array>\n          </div>\n        </mat-card-content>\n        <mat-card-actions>\n          <!-- <button mat-raised-button color=\"primary\" (click)=\"form.generate(schema)\">\u0627\u06CC\u062C\u0627\u062F \u0641\u0631\u0645</button> -->\n          <button mat-raised-button color=\"primary\" (click)=\"emit()\" type=\"submit\">\u062B\u0628\u062A</button>\n        </mat-card-actions>\n\n        <div [formGroup]=\"$any(formGroup.controls.events).controls.accept\">\n          <mat-slide-toggle (change)=\"changed()\" formControlName=\"show\">\u0646\u0645\u0627\u06CC\u0634 \u062A\u0627\u06CC\u06CC\u062F</mat-slide-toggle>\n          <mat-form-field>\n            <input type=\"text\" (change)=\"changed()\" matInput placeholder=\"\u0645\u062A\u0646 \u062A\u0627\u06CC\u06CC\u062F\" formControlName=\"text\">\n          </mat-form-field>\n        </div>\n        <div [formGroup]=\"$any(formGroup.controls.events).controls.cancel\">\n          <mat-slide-toggle (change)=\"changed()\" formControlName=\"show\">\u0646\u0645\u0627\u06CC\u0634 \u0627\u0646\u0635\u0631\u0627\u0641</mat-slide-toggle>\n          <mat-form-field>\n            <input type=\"text\" (change)=\"changed()\" matInput placeholder=\"\u0645\u062A\u0646 \u0627\u0646\u0635\u0631\u0627\u0641\" formControlName=\"text\">\n          </mat-form-field>\n        </div>\n\n      </mat-card>\n    </form>\n  </div>\n  <div [fxFlex]=\"50\">\n    <ngs-form-view [local]='true' [id]=\"schema._id\"></ngs-form-view>\n  </div>\n</div>"
                    },] },
        ];
        AddFormComponent.propDecorators = {
            schema: [{ type: i0.Input }],
            formGroup: [{ type: i0.Input }],
            submited: [{ type: i0.Output }],
            changes: [{ type: i0.Output }]
        };
        return AddFormComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var EditFormComponent = /** @class */ (function (_super) {
        __extends(EditFormComponent, _super);
        function EditFormComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @return {?}
         */
        EditFormComponent.prototype.emit = /**
         * @return {?}
         */
            function () {
                if (!this.formGroup.valid)
                    return;
                return this.submited.emit(this.formGroup.value);
            };
        EditFormComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: "edit-form",
                        template: "<div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"25px\" class=\"main-container\">\n\n  <div class=\"content-action\">\n    <mat-card fxLayout=\"column\" fxLayoutGap=\"10px\" fxLayoutAlign=\"start\" class=\"with-sticky-action\">\n      <div fxLayout=\"row wrap\" *ngIf=\"schema\" fxFlex=\"100\" fxLayoutAlign=\"start start\" fxLayoutAlign.lt-md=\"center\">\n        <div fxFlex.gt-md=\"50\" fxFlex.lt-md=\"100\" *ngIf=\"formGroup\">\n          <form [formGroup]=\"formGroup\">\n            <mat-card>\n              <mat-card-title>\u0627\u06CC\u062C\u0627\u062F \u0641\u0631\u0645 \u062C\u062F\u06CC\u062F</mat-card-title>\n              <mat-card-content>\n                <mat-form-field>\n                  <input type=\"text\" matInput (change)=\"changed()\" placeholder=\"\u0646\u0627\u0645 \u0641\u0631\u0645\" formControlName=\"name\">\n                </mat-form-field>\n                <!-- <div class=\"button-row\">\n                <button mat-button color=\"primary\" (click)=\"addFormGroup(schema.form)\">Add form group</button>\n                <button mat-button color=\"primary\" (click)=\"addFormArray(schema.form)\">Add form array</button>\n                <button mat-button color=\"primary\" (click)=\"addFormControl(schema.form)\">Add form control</button>\n              </div> -->\n                <mat-divider></mat-divider>\n                <div [ngSwitch]=\"schema.form?.type\" class=\"schema-form\">\n                  <app-form-group *ngSwitchCase=\"'group'\" [schema]=\"schema.form\" noHeader=\"true\" (changes)=\"changed()\"></app-form-group>\n                  <app-form-array *ngSwitchCase=\"'array'\" [schema]=\"schema.form\" (changes)=\"changed()\"></app-form-array>\n                </div>\n\n                <mat-divider></mat-divider>\n                <div class=\"form-buttons\" fxLayout=\"row wrap\" fxLayoutGap=\"10px\">\n\n                  <div fxLayout=\"column\" [formGroup]=\"$any(formGroup.controls.events).controls.accept\">\n                    <mat-slide-toggle (change)=\"changed()\" formControlName=\"show\">\u0646\u0645\u0627\u06CC\u0634 \u062A\u0627\u06CC\u06CC\u062F</mat-slide-toggle>\n                    <mat-form-field>\n                      <input type=\"text\" (change)=\"changed()\" matInput placeholder=\"\u0645\u062A\u0646 \u062A\u0627\u06CC\u06CC\u062F\" formControlName=\"text\">\n                    </mat-form-field>\n                  </div>\n                  <div fxLayout=\"column\" [formGroup]=\"$any(formGroup.controls.events).controls.cancel\">\n                    <mat-slide-toggle (change)=\"changed()\" formControlName=\"show\">\u0646\u0645\u0627\u06CC\u0634 \u0627\u0646\u0635\u0631\u0627\u0641</mat-slide-toggle>\n                    <mat-form-field>\n                      <input type=\"text\" (change)=\"changed()\" matInput placeholder=\"\u0645\u062A\u0646 \u0627\u0646\u0635\u0631\u0627\u0641\" formControlName=\"text\">\n                    </mat-form-field>\n                  </div>\n                </div>\n\n\n                <mat-card-actions>\n                  <!-- <button mat-raised-button color=\"primary\" (click)=\"$any(form).generate(schema)\">\u0627\u06CC\u062C\u0627\u062F \u0641\u0631\u0645</button> -->\n                  <button mat-raised-button color=\"primary\" (click)=\"emit()\" type=\"submit\">\u062B\u0628\u062A</button>\n                </mat-card-actions>\n\n              </mat-card-content>\n            </mat-card>\n          </form>\n        </div>\n        <div fxFlex.gt-md=\"50\" fxFlex.lt-md=\"100\" fxLayoutAlign=\"center start\">\n          <ngs-form-view [local]='true' [id]=\" schema._id\">\n          </ngs-form-view>\n\n        </div>\n      </div>\n    </mat-card>\n  </div>\n</div>",
                        styles: [".form-buttons,.schema-form{padding:25px 10px}"]
                    },] },
        ];
        EditFormComponent.propDecorators = {
            schema: [{ type: i0.Input }]
        };
        return EditFormComponent;
    }(AddFormComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var FormListContainerComponent = /** @class */ (function () {
        function FormListContainerComponent(store) {
            this.store = store;
            this.data$ = this.store.select(function (state) { return state.form.list.data; });
        }
        /**
         * @return {?}
         */
        FormListContainerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.store.dispatch(new FormsListAction());
            };
        FormListContainerComponent.decorators = [
            { type: i0.Component, args: [{
                        template: "<form-list\n\t\t\t\t\t[data]=\"data$\">\n\t\t\t\t</form-list>"
                    },] },
        ];
        /** @nocollapse */
        FormListContainerComponent.ctorParameters = function () {
            return [
                { type: i2.Store }
            ];
        };
        return FormListContainerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var FormListComponent = /** @class */ (function () {
        function FormListComponent() {
        }
        FormListComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: "form-list",
                        template: "<div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"25px\" class=\"main-container\">\n\n  <div class=\"content-action\">\n    <mat-card class=\"with-sticky-action\">\n      <mat-card-header>\n        <mat-card-title fxLayout=\"row\" fxLayoutGap=\"5px\">\n          <mat-icon>assignment</mat-icon>\n          <span>\u0645\u062F\u06CC\u0631\u06CC\u062A \u0641\u0631\u0645 \u0647\u0627</span>\n        </mat-card-title>\n        <mat-card-subtitle fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n          <span>\n            \u0634\u0627\u0645\u0644 \u062A\u0645\u0627\u0645\u06CC \u062F\u0631\u062E\u0648\u0627\u0633\u062A\u200C\u0647\u0627 \u0627\u0632 \u0642\u0628\u06CC\u0644 \u062F\u0627\u0626\u0631\u06CC\u060C \u062C\u0645\u0639\u200C\u0622\u0648\u0631\u06CC \u0648 ...\n          </span>\n        </mat-card-subtitle>\n      </mat-card-header>\n\n      <div fxLayout=\"row wrap\" fxLayoutGap=\"10px\" fxLayoutAlign=\"start\">\n\n        <button fxFlex.lt-lg=\"19\" fxFlex.lg=\"24\" fxFlex.md=\"32\" fxFlex.sm=\"49\" fxFlex.xs=\"100\" class='link'\n          mat-raised-button [routerLink]=\"['edit' ,  item._id]\" *ngFor=\"let item of (data$ | async)\">\n          <div fxLayout='column' fxLayoutAlign='center center'>\n            <mat-icon color='primary'>settings</mat-icon>\n            <h3 class='title'>{{item.name}}</h3>\n          </div>\n        </button>\n\n      </div>\n    </mat-card>\n  </div>\n</div>",
                        styles: ["button.link{padding:25px 15px;margin:.5%;box-sizing:border-box}button mat-icon{font-size:34px;width:34px;height:34px}"]
                    },] },
        ];
        FormListComponent.propDecorators = {
            data$: [{ type: i0.Input, args: ["data",] }]
        };
        return FormListComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var MainContainerComponent = /** @class */ (function () {
        function MainContainerComponent(route, store) {
            this.route = route;
            this.store = store;
        }
        MainContainerComponent.decorators = [
            { type: i0.Component, args: [{
                        template: "<router-outlet></router-outlet>",
                    },] },
        ];
        /** @nocollapse */
        MainContainerComponent.ctorParameters = function () {
            return [
                { type: router.ActivatedRoute },
                { type: i2.Store }
            ];
        };
        return MainContainerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var AddFormEffects = /** @class */ (function () {
        function AddFormEffects(actions$, router$$1, service) {
            var _this = this;
            this.actions$ = actions$;
            this.router = router$$1;
            this.service = service;
            this.AddForm$ = this.actions$
                .ofType(AddFormActionTypes.ADD_FORM)
                .pipe(operators.map(function (action) { return action.payload; }), operators.map(function (data) { return new AddFormStartAction(data); }));
            this.AddFormStart$ = this.actions$
                .ofType(AddFormActionTypes.ADD_FORM_START)
                .pipe(operators.map(function (action) { return action.payload; }), operators.switchMap(function (data) { return _this.service.add(data); }), operators.map(function (res) { return new AddFormSucceedAction(); }), operators.catchError(function () { return of.of(new AddFormFailedAction()); }));
        }
        AddFormEffects.decorators = [
            { type: i0.Injectable },
        ];
        /** @nocollapse */
        AddFormEffects.ctorParameters = function () {
            return [
                { type: effects.Actions },
                { type: router.Router },
                { type: FormService }
            ];
        };
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], AddFormEffects.prototype, "AddForm$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], AddFormEffects.prototype, "AddFormStart$", void 0);
        return AddFormEffects;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var FormsListEffects = /** @class */ (function () {
        function FormsListEffects(actions$, router$$1, service) {
            var _this = this;
            this.actions$ = actions$;
            this.router = router$$1;
            this.service = service;
            this.EditProfileRequest$ = this.actions$.ofType(FormsListActionTypes.FORMS_LIST).map(function (data) { return new FormsListStartAction(); });
            this.GetForm$ = this.actions$
                .ofType(FormsListActionTypes.GET_FORM_SCHEMA)
                .pipe(operators.map(function (action) { return action.payload; }), operators.switchMap(function (id) { return _this.service.get(id); }), operators.map(function (formSchema) { return new FormSchemaFechedAction(formSchema); }));
            this.get_forms_list$ = this.actions$
                .ofType(FormsListActionTypes.FORMS_LIST_START)
                .pipe(operators.switchMap(function (data) { return _this.service.getList(); }), operators.map(function (res) { return new FormsListSucceedAction(res); }), operators.catchError(function () { return of.of(new FormsListFailedAction()); }));
        }
        FormsListEffects.decorators = [
            { type: i0.Injectable },
        ];
        /** @nocollapse */
        FormsListEffects.ctorParameters = function () {
            return [
                { type: effects.Actions },
                { type: router.Router },
                { type: FormService }
            ];
        };
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], FormsListEffects.prototype, "EditProfileRequest$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], FormsListEffects.prototype, "GetForm$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], FormsListEffects.prototype, "get_forms_list$", void 0);
        return FormsListEffects;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var EditFormEffects = /** @class */ (function () {
        function EditFormEffects(actions$, router$$1, service) {
            var _this = this;
            this.actions$ = actions$;
            this.router = router$$1;
            this.service = service;
            this.EditForm$ = this.actions$
                .ofType(EditFormActionTypes.EDIT_FORM)
                .pipe(operators.map(function (action) { return action.payload; }), operators.map(function (data) { return new EditFormStartAction(data); }));
            this.EditFormStart$ = this.actions$
                .ofType(EditFormActionTypes.EDIT_FORM_START)
                .pipe(operators.map(function (action) { return action.payload; }), operators.switchMap(function (data) { return _this.service.update(data); }), operators.map(function (formSchema) { return new EditFormSucceedAction(formSchema); }), operators.catchError(function () { return of.of(new EditFormFailedAction()); }));
            this.UpdateFormsListStart$ = this.actions$
                .ofType(EditFormActionTypes.EDIT_FORM_SUCCEED)
                .pipe(operators.map(function (action) { return action.payload; }), operators.map(function (formSchema) { return new UpdateFormSchemaAction(formSchema); }));
        }
        EditFormEffects.decorators = [
            { type: i0.Injectable },
        ];
        /** @nocollapse */
        EditFormEffects.ctorParameters = function () {
            return [
                { type: effects.Actions },
                { type: router.Router },
                { type: FormService }
            ];
        };
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], EditFormEffects.prototype, "EditForm$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], EditFormEffects.prototype, "EditFormStart$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], EditFormEffects.prototype, "UpdateFormsListStart$", void 0);
        return EditFormEffects;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var routes = [
        {
            path: "form",
            component: MainContainerComponent,
            children: [
                {
                    path: "add",
                    component: AddFormContainerComponent
                },
                {
                    path: "edit/:_id",
                    component: EditFormContainerComponent
                },
                {
                    path: "",
                    component: FormListContainerComponent
                }
            ]
        }
    ];
    /** @type {?} */
    var RoutingModule = router.RouterModule.forChild(routes);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var CaptchaActionTypes = {
        GET_CAPTCHA: "[CAPTCHA][GET] GET_CAPTCHA",
        GET_CAPTCHA_START: "[CAPTCHA][GET] GET_CAPTCHA_START",
        GET_CAPTCHA_SUCCEED: "[CAPTCHA][GET] GET_CAPTCHA_SUCCEED",
        GET_CAPTCHA_FAILED: "[CAPTCHA][GET] GET_CAPTCHA_FAILED",
    };
    var GetCaptchaStartAction = /** @class */ (function () {
        function GetCaptchaStartAction(payload) {
            this.payload = payload;
            this.type = CaptchaActionTypes.GET_CAPTCHA_START;
        }
        return GetCaptchaStartAction;
    }());
    var GetCaptchaSucceedAction = /** @class */ (function () {
        function GetCaptchaSucceedAction() {
            this.type = CaptchaActionTypes.GET_CAPTCHA_SUCCEED;
        }
        return GetCaptchaSucceedAction;
    }());
    var GetCaptchaFailedAction = /** @class */ (function () {
        function GetCaptchaFailedAction() {
            this.type = CaptchaActionTypes.GET_CAPTCHA_FAILED;
        }
        return GetCaptchaFailedAction;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var CaptchaEffects = /** @class */ (function () {
        function CaptchaEffects(actions$, router$$1, service) {
            var _this = this;
            this.actions$ = actions$;
            this.router = router$$1;
            this.service = service;
            this.GetCaptcha$ = this.actions$
                .ofType(CaptchaActionTypes.GET_CAPTCHA)
                .pipe(operators.map(function (action) { return action.payload; }), operators.map(function (data) { return new GetCaptchaStartAction(data); }));
            this.AddFormStart$ = this.actions$
                .ofType(CaptchaActionTypes.GET_CAPTCHA_START)
                .pipe(operators.map(function (action) { return action.payload; }), operators.switchMap(function (data) { return _this.service.getCaptcha(); }), operators.map(function (res) { return new GetCaptchaSucceedAction(); }), operators.catchError(function () { return of.of(new GetCaptchaFailedAction()); }));
        }
        CaptchaEffects.decorators = [
            { type: i0.Injectable },
        ];
        /** @nocollapse */
        CaptchaEffects.ctorParameters = function () {
            return [
                { type: effects.Actions },
                { type: router.Router },
                { type: FormCaptchaService }
            ];
        };
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], CaptchaEffects.prototype, "GetCaptcha$", void 0);
        __decorate([
            effects.Effect(),
            __metadata("design:type", Object)
        ], CaptchaEffects.prototype, "AddFormStart$", void 0);
        return CaptchaEffects;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NgsFormModule = /** @class */ (function () {
        function NgsFormModule() {
        }
        /**
         * @param {?=} config
         * @return {?}
         */
        NgsFormModule.forRoot = /**
         * @param {?=} config
         * @return {?}
         */
            function (config$$1) {
                return {
                    ngModule: RootNgsFormModule,
                    providers: [{ provide: MODULE_CONFIG_TOKEN, useValue: config$$1 }]
                };
            };
        NgsFormModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            i1.HttpClientModule,
                            forms.FormsModule,
                            router.RouterModule,
                            common.CommonModule,
                            material.MatExpansionModule,
                            material.MatSnackBarModule,
                            material.MatIconModule,
                            material.MatDatepickerModule,
                            material.MatButtonModule,
                            material.MatCardModule,
                            material.MatCheckboxModule,
                            material.MatTableModule,
                            material.MatSelectModule,
                            material.MatInputModule,
                            material.MatFormFieldModule,
                            material.MatTabsModule,
                            material.MatDividerModule,
                            flexLayout.FlexLayoutModule,
                            material.MatRadioModule,
                            material.MatSlideToggleModule,
                            forms.ReactiveFormsModule
                        ],
                        declarations: [
                            EditFormContainerComponent,
                            EditFormComponent,
                            FormListContainerComponent,
                            FormListComponent,
                            AddFormContainerComponent,
                            MainContainerComponent,
                            AddFormComponent,
                            FormGroupComponent,
                            FormArrayComponent,
                            FormControlComponent,
                            FormViewComponent,
                            DynamicFieldDirective,
                            SelectComponent,
                            CheckboxComponent,
                            EmailComponent,
                            ColorComponent,
                            DateFormInputControlComponent,
                            FileFormInputControlComponent,
                            TextComponent,
                            NumberComponent,
                            TableComponent,
                            FormCaptchaComponent
                        ],
                        entryComponents: [
                            SelectComponent,
                            CheckboxComponent,
                            EmailComponent,
                            ColorComponent,
                            DateFormInputControlComponent,
                            FileFormInputControlComponent,
                            TextComponent,
                            NumberComponent,
                            TableComponent,
                            FormCaptchaComponent
                        ],
                        exports: [FormViewComponent]
                    },] },
        ];
        return NgsFormModule;
    }());
    var RootNgsFormModule = /** @class */ (function () {
        function RootNgsFormModule() {
        }
        RootNgsFormModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            NgsFormModule,
                            i2.StoreModule.forFeature("form", FormReducers),
                            effects.EffectsModule.forFeature([AddFormEffects, EditFormEffects, FormsListEffects, CaptchaEffects]),
                            RoutingModule
                        ],
                        exports: [NgsFormModule]
                    },] },
        ];
        return RootNgsFormModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.FormService = FormService;
    exports.FormViewComponent = FormViewComponent;
    exports.DynamicFieldDirective = DynamicFieldDirective;
    exports.FormSchemaModel = FormSchemaModel;
    exports.FieldConfig = FieldConfig;
    exports.NgsFormModule = NgsFormModule;
    exports.RootNgsFormModule = RootNgsFormModule;
    exports.ɵi = AddFormComponent;
    exports.ɵg = AddFormContainerComponent;
    exports.ɵl = AddFormContainerComponent;
    exports.ɵbd = AddFormEffects;
    exports.ɵn = AddFormComponent;
    exports.ɵbg = CaptchaEffects;
    exports.ɵp = FormArrayComponent;
    exports.ɵq = FormControlComponent;
    exports.ɵo = FormGroupComponent;
    exports.ɵf = EditFormContainerComponent;
    exports.ɵbe = EditFormEffects;
    exports.ɵh = EditFormComponent;
    exports.ɵbh = RoutingModule;
    exports.ɵa = MODULE_CONFIG_TOKEN;
    exports.ɵj = FormListContainerComponent;
    exports.ɵk = FormListComponent;
    exports.ɵbf = FormsListEffects;
    exports.ɵbc = reducer;
    exports.ɵm = MainContainerComponent;
    exports.ɵb = FormReducers;
    exports.ɵbb = FormCaptchaService;
    exports.ɵd = FormConfigurationService;
    exports.ɵs = CheckboxComponent;
    exports.ɵu = ColorComponent;
    exports.ɵv = DateFormInputControlComponent;
    exports.ɵt = EmailComponent;
    exports.ɵw = FileFormInputControlComponent;
    exports.ɵba = FormCaptchaComponent;
    exports.ɵy = NumberComponent;
    exports.ɵr = SelectComponent;
    exports.ɵz = TableComponent;
    exports.ɵx = TextComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291c2hpYW5zLWZvcm0udW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9Ac291c2hpYW5zL2Zvcm0vbGliL21vZGVscy9hZGQtZm9ybS5hcGktbW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvbW9kZWxzL2VkaXQtZm9ybS5hcGktbW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvbW9kZWxzL2Zvcm0tbGlzdC5hcGktbW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvbW9kZWxzL2Zvcm0tZmllbGQtdmFsaWRhdG9yLm1vZGVsLnRzIiwibmc6Ly9Ac291c2hpYW5zL2Zvcm0vbGliL21vZGVscy9maWVsZC1jb25maWcubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvbW9kZWxzL2Zvcm0tc2NoZW1hLm1vZGVsLnRzIiwibmc6Ly9Ac291c2hpYW5zL2Zvcm0vbGliL2Zvcm0uY29uZmlnLnRzIiwibmc6Ly9Ac291c2hpYW5zL2Zvcm0vbGliL3NlcnZpY2VzL2Zvcm0tY29uZmlndXJhdGlvbi5zZXJ2aWNlLnRzIiwibmc6Ly9Ac291c2hpYW5zL2Zvcm0vbGliL3NlcnZpY2VzL2Zvcm0uc2VydmljZS50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi92aWV3L2Zvcm0tY29udHJvbHMvc2VsZWN0L3NlbGVjdC5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvdmlldy9mb3JtLWNvbnRyb2xzL2NoZWNrYm94L2NoZWNrYm94LmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi92aWV3L2Zvcm0tY29udHJvbHMvZW1haWwvZW1haWwuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2Zvcm0vbGliL3ZpZXcvZm9ybS1jb250cm9scy9jb2xvci9jb2xvci5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvdmlldy9mb3JtLWNvbnRyb2xzL3RhYmxlL3RhYmxlLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi92aWV3L2Zvcm0tY29udHJvbHMvbnVtYmVyL251bWJlci5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvdmlldy9mb3JtLWNvbnRyb2xzL3RleHQvdGV4dC5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvbGlzdC9saXN0LmFjdGlvbnMudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvdmlldy9mb3JtLWNvbnRyb2xzL2RhdGUvZGF0ZS5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvdmlldy9mb3JtLWNvbnRyb2xzL2ZpbGUvZmlsZS5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvbW9kZWxzL2NhcHRjaGEubW9kZWwudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvc2VydmljZXMvZm9ybS1jYXB0Y2hhLnNlcnZpY2UudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvdmlldy9mb3JtLWNvbnRyb2xzL2Zvcm0tY2FwdGNoYS9mb3JtLWNhcHRjaGEuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2Zvcm0vbGliL3ZpZXcvZm9ybS12aWV3L2Zvcm0tdmlldy5jb21wb25lbnQudHMiLG51bGwsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi9saXN0L2xpc3QucmVkdWNlcnMudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvbWFpbi1jb250YWluZXIvbWFpbi1jb250YWluZXIucmVkdWNlcnMudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvYWRkL2Zvcm0tZ3JvdXAvZm9ybS1ncm91cC5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvYWRkL2Zvcm0tYXJyYXkvZm9ybS1hcnJheS5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvYWRkL2Zvcm0tY29udHJvbC9mb3JtLWNvbnRyb2wuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2Zvcm0vbGliL2VkaXQvZWRpdC1mb3JtLmFjdGlvbnMudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvYWRkL2FkZC1mb3JtLmFjdGlvbnMudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvYWRkL2FkZC1mb3JtLWNvbnRhaW5lci9hZGQtZm9ybS1jb250YWluZXIuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2Zvcm0vbGliL2VkaXQvZWRpdC1mb3JtLWNvbnRhaW5lci9lZGl0LWZvcm0tY29udGFpbmVyLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi9hZGQvYWRkLWZvcm0vYWRkLWZvcm0uY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2Zvcm0vbGliL2VkaXQvZWRpdC1mb3JtL2VkaXQtZm9ybS5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvbGlzdC9mb3JtLWxpc3QtY29udGFpbmVyL2Zvcm0tbGlzdC5jb250YWluZXIuY29tcG9uZW50LnRzIiwibmc6Ly9Ac291c2hpYW5zL2Zvcm0vbGliL2xpc3QvZm9ybS1saXN0L2Zvcm0tbGlzdC5jb21wb25lbnQudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvbWFpbi1jb250YWluZXIvbWFpbi1jb250YWluZXIuY29tcG9uZW50L21haW4tY29udGFpbmVyLmNvbXBvbmVudC50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi9hZGQvYWRkLWZvcm0uZWZmZWN0cy50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi9saXN0L2xpc3QuZWZmZWN0cy50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi9lZGl0L2VkaXQtZm9ybS5lZmZlY3RzLnRzIiwibmc6Ly9Ac291c2hpYW5zL2Zvcm0vbGliL2Zvcm0tcm91dGluZy5tb2R1bGUudHMiLCJuZzovL0Bzb3VzaGlhbnMvZm9ybS9saWIvYWRkL2NhcHRjaGEuYWN0aW9ucy50cyIsIm5nOi8vQHNvdXNoaWFucy9mb3JtL2xpYi9hZGQvY2FwdGNoYS5lZmZlY3RzLnRzIiwibmc6Ly9Ac291c2hpYW5zL2Zvcm0vbGliL2Zvcm0ubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwUmVxdWVzdEJhc2VNb2RlbCB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEZvcm1TY2hlbWFNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgQWRkRm9ybUFwaU1vZGVsIHtcclxuXHRleHBvcnQgY2xhc3MgUmVxdWVzdCBpbXBsZW1lbnRzIEh0dHBSZXF1ZXN0QmFzZU1vZGVsPFJlcXVlc3Q+IHtcclxuXHRcdF9pZDogc3RyaW5nO1xyXG5cdFx0bmFtZTogc3RyaW5nO1xyXG5cdFx0Zm9ybTogYW55W107XHJcblx0XHRldmVudHM6IGFueVtdO1xyXG5cdFx0Y29uc3RydWN0b3IoaW5pdFZhbHVlID0ge30gYXMgQWRkRm9ybUFwaU1vZGVsLlJlcXVlc3QpIHtcclxuXHRcdFx0T2JqZWN0LmtleXMoaW5pdFZhbHVlKS5mb3JFYWNoKGtleSA9PiAodGhpc1trZXldID0gaW5pdFZhbHVlW2tleV0pKTtcclxuXHRcdH1cclxuXHJcblx0XHRnZXRSZXF1ZXN0Qm9keSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRuYW1lOiB0aGlzLm5hbWUsXHJcblx0XHRcdFx0Zm9ybTogdGhpcy5mb3JtLFxyXG5cdFx0XHRcdGV2ZW50czogdGhpcy5ldmVudHNcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdHN0YXRpYyBnZXQgZm9ybUdyb3VwKCkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdFx0X2lkOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdG5hbWU6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0dGl0bGU6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0Zm9ybTogbmV3IEZvcm1Db250cm9sKHt9KSxcclxuXHRcdFx0XHRldmVudHM6IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRcdFx0YWNjZXB0OiBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0XHRcdFx0c2hvdzogbmV3IEZvcm1Db250cm9sKGZhbHNlKSxcclxuXHRcdFx0XHRcdFx0dGV4dDogbmV3IEZvcm1Db250cm9sKFwiw5jCq8OYwqjDmMKqXCIpXHJcblx0XHRcdFx0XHR9KSxcclxuXHRcdFx0XHRcdGNhbmNlbDogbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdFx0XHRcdHNob3c6IG5ldyBGb3JtQ29udHJvbChmYWxzZSksXHJcblx0XHRcdFx0XHRcdHRleHQ6IG5ldyBGb3JtQ29udHJvbChcIsOYwqfDmcKGw5jCtcOYwrHDmMKnw5nCgVwiKVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGV4cG9ydCBjbGFzcyBSZXNwb25zZSB7XHJcblx0XHRSZXN1bHQ6IEZvcm1TY2hlbWFNb2RlbDtcclxuXHRcdGNvbnN0cnVjdG9yKCkge31cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBSZXF1ZXN0QmFzZU1vZGVsIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgRm9ybVNjaGVtYU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBFZGl0Rm9ybUFwaU1vZGVsIHtcclxuXHRleHBvcnQgY2xhc3MgUmVxdWVzdCBpbXBsZW1lbnRzIEh0dHBSZXF1ZXN0QmFzZU1vZGVsPFJlcXVlc3Q+IHtcclxuXHRcdF9pZDogc3RyaW5nO1xyXG5cdFx0bmFtZTogc3RyaW5nO1xyXG5cdFx0Zm9ybTogYW55W107XHJcblx0XHRldmVudHM6IGFueVtdO1xyXG5cdFx0Y29uc3RydWN0b3IoaW5pdFZhbHVlID0ge30gYXMgRWRpdEZvcm1BcGlNb2RlbC5SZXF1ZXN0KSB7XHJcblx0XHRcdE9iamVjdC5rZXlzKGluaXRWYWx1ZSkuZm9yRWFjaChrZXkgPT4gKHRoaXNba2V5XSA9IGluaXRWYWx1ZVtrZXldKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Z2V0UmVxdWVzdEJvZHkoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0X2lkOiB0aGlzLl9pZCxcclxuXHRcdFx0XHRuYW1lOiB0aGlzLm5hbWUsXHJcblx0XHRcdFx0Zm9ybTogdGhpcy5mb3JtLFxyXG5cdFx0XHRcdGV2ZW50czogdGhpcy5ldmVudHNcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdHN0YXRpYyBnZXQgZm9ybUdyb3VwKCkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdFx0X2lkOiBuZXcgRm9ybUNvbnRyb2woXCJcIiwgWyBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pLFxyXG5cdFx0XHRcdG5hbWU6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0Zm9ybTogbmV3IEZvcm1Db250cm9sKHt9KSxcclxuXHRcdFx0XHRldmVudHM6IG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRcdFx0YWNjZXB0OiBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0XHRcdFx0c2hvdzogbmV3IEZvcm1Db250cm9sKGZhbHNlKSxcclxuXHRcdFx0XHRcdFx0dGV4dDogbmV3IEZvcm1Db250cm9sKFwiw5jCq8OYwqjDmMKqXCIpXHJcblx0XHRcdFx0XHR9KSxcclxuXHRcdFx0XHRcdGNhbmNlbDogbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdFx0XHRcdHNob3c6IG5ldyBGb3JtQ29udHJvbChmYWxzZSksXHJcblx0XHRcdFx0XHRcdHRleHQ6IG5ldyBGb3JtQ29udHJvbChcIsOYwqfDmcKGw5jCtcOYwrHDmMKnw5nCgVwiKVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGV4cG9ydCBjbGFzcyBSZXNwb25zZSB7XHJcblx0XHRSZXN1bHQ6IEZvcm1TY2hlbWFNb2RlbDtcclxuXHRcdGNvbnN0cnVjdG9yKCkge31cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBSZXF1ZXN0QmFzZU1vZGVsIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgRm9ybVNjaGVtYU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBGb3JtTGlzdEFwaU1vZGVsIHtcclxuXHRleHBvcnQgY2xhc3MgUmVxdWVzdCBpbXBsZW1lbnRzIEh0dHBSZXF1ZXN0QmFzZU1vZGVsPFJlcXVlc3Q+IHtcclxuXHRcdE5hbWU6IHN0cmluZztcclxuXHRcdENvbnRyb2xzOiBvYmplY3RbXTtcclxuXHRcdGNvbnN0cnVjdG9yKGluaXRWYWx1ZSA9IHt9IGFzIEZvcm1MaXN0QXBpTW9kZWwuUmVxdWVzdCkge1xyXG5cdFx0XHRPYmplY3Qua2V5cyhpbml0VmFsdWUpLmZvckVhY2goKGtleSkgPT4gKHRoaXNba2V5XSA9IGluaXRWYWx1ZVtrZXldKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Z2V0UmVxdWVzdEJvZHkoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0TmFtZTogdGhpcy5OYW1lLFxyXG5cdFx0XHRcdENvbnRyb2xzOiB0aGlzLkNvbnRyb2xzXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRzdGF0aWMgZ2V0IGZvcm1Hcm91cCgpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBGb3JtR3JvdXAoe1xyXG5cdFx0XHRcdE5hbWU6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMucmVxdWlyZWQgXSksXHJcblx0XHRcdFx0Q29udHJvbHM6IG5ldyBGb3JtR3JvdXAoe30pXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZXhwb3J0IGNsYXNzIFJlc3BvbnNlIHtcclxuXHRcdFJlc3VsdDogRm9ybVNjaGVtYU1vZGVsW107XHJcblx0XHRjb25zdHJ1Y3RvcigpIHt9XHJcblx0fVxyXG59XHJcbiIsImV4cG9ydCBpbnRlcmZhY2UgdmFsaWRhdGlvbiB7XHJcblx0YWN0aXZlOiBib29sZWFuO1xyXG5cdG1lc3NhZ2U6IHN0cmluZztcclxuXHR2YWx1ZT86IGFueTtcclxufVxyXG5leHBvcnQgY2xhc3MgVmFsaWRhdG9yIHtcclxuXHRyZXF1aXJlZDogdmFsaWRhdGlvbjtcclxuXHRtaW5sZW5ndGg6IHZhbGlkYXRpb247XHJcblx0ZW1haWw6IHZhbGlkYXRpb247XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5yZXF1aXJlZCA9IHtcclxuXHRcdFx0YWN0aXZlOiBmYWxzZSxcclxuXHRcdFx0bWVzc2FnZTogXCLDmMKnw5vCjMOZwoYgw5nCgcObwozDmcKEw5jCryDDmMKnw5nChMOYwrLDmMKnw5nChcObwowgw5jCp8OYwrPDmMKqXCJcclxuXHRcdH07XHJcblx0XHR0aGlzLm1pbmxlbmd0aCA9IHtcclxuXHRcdFx0YWN0aXZlOiBmYWxzZSxcclxuXHRcdFx0bWVzc2FnZTogXCLDmMKtw5jCr8OYwqfDmcKCw5nChCDDmMKqw5jCucOYwq/DmMKnw5jCryDDmsKpw5jCp8OYwrHDmsKpw5jCqsOYwrHDmcKHw5jCp1wiLFxyXG5cdFx0XHR2YWx1ZTogNVxyXG5cdFx0fTtcclxuXHRcdHRoaXMuZW1haWwgPSB7XHJcblx0XHRcdGFjdGl2ZTogZmFsc2UsXHJcblx0XHRcdG1lc3NhZ2U6IFwiw5nChMOYwrfDmcKBw5jCpyDDmMKnw5vCjMOZwoXDm8KMw5nChCDDmMK1w5jCrcObwozDmMKtIMOZwojDmMKnw5jCscOYwq8gw5nChsOZwoXDmMKnw5vCjMObwozDmMKvXCJcclxuXHRcdH07XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IFZhbGlkYXRvciB9IGZyb20gXCIuL2Zvcm0tZmllbGQtdmFsaWRhdG9yLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRmllbGRDb25maWcge1xyXG5cdGlkOiBudW1iZXI7XHJcblx0dHlwZTogXCJncm91cFwiIHwgXCJhcnJheVwiIHwgXCJjb250cm9sXCI7XHJcblx0bmFtZTogc3RyaW5nO1xyXG5cdHN1YnR5cGU6IHN0cmluZztcclxuXHRkaXNhYmxlZD86IGJvb2xlYW47XHJcblx0dGl0bGU6IHN0cmluZztcclxuXHRwYXJlbnRUeXBlPzogXCJhcnJheVwiIHwgXCJncm91cFwiO1xyXG5cdGZvcm1Hcm91cFBhdGg/OiBzdHJpbmc7XHJcblx0cGF0aD86IHN0cmluZztcclxuXHRpbnB1dFR5cGU6IFwic2VsZWN0XCIgfCBcInRleHRcIiB8IFwibnVtYmVyXCIgfCBcImVtYWlsXCIgfCBcImNvbG9yXCIgfCBcImNoZWNrYm94XCIgfCBcInRhYmxlXCI7XHJcblx0dmFsdWU/OiBhbnk7XHJcblx0b3JkZXI/OiBudW1iZXI7XHJcblx0d2lkdGg/OiBudW1iZXI7XHJcblx0b3B0aW9uczoge1xyXG5cdFx0W2tleTogc3RyaW5nXTogc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbjtcclxuXHR9W107XHJcblx0ZGF0YUVuZHBvaW50Pzogc3RyaW5nO1xyXG5cdG9wdGlvbnNFbmRwb2ludDogc3RyaW5nO1xyXG5cdGZpZWxkcz86IEZpZWxkQ29uZmlnW107XHJcblx0dmFsaWRhdG9yOiBWYWxpZGF0b3I7XHJcblx0Y29uc3RydWN0b3IodHlwZTogXCJncm91cFwiIHwgXCJhcnJheVwiIHwgXCJjb250cm9sXCIpIHtcclxuXHRcdHRoaXMudHlwZSA9IHR5cGU7XHJcblx0XHRpZiAodHlwZSAhPSBcImNvbnRyb2xcIikgdGhpcy5maWVsZHMgPSBbXTtcclxuXHRcdHRoaXMud2lkdGggPSAzO1xyXG5cdFx0dGhpcy52YWxpZGF0b3IgPSBuZXcgVmFsaWRhdG9yKCk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEZpZWxkQ29uZmlnIH0gZnJvbSBcIi4vZmllbGQtY29uZmlnLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRm9ybVNjaGVtYU1vZGVsIHtcclxuXHRfaWQ6IHN0cmluZztcclxuXHRuYW1lOiBzdHJpbmc7XHJcblx0ZGVzY3JpcHRpb246IHN0cmluZztcclxuXHRmb3JtOiBGaWVsZENvbmZpZztcclxuXHRldmVudHMgPSB7XHJcblx0XHRhY2NlcHQ6IHtcclxuXHRcdFx0c2hvdzogZmFsc2UsXHJcblx0XHRcdHRleHQ6IFwiw5jCq8OYwqjDmMKqXCJcclxuXHRcdH0sXHJcblx0XHRjYW5jZWw6IHtcclxuXHRcdFx0c2hvdzogZmFsc2UsXHJcblx0XHRcdHRleHQ6IFwiw5jCp8OZwobDmMK1w5jCscOYwqfDmcKBXCJcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuZm9ybSA9IG5ldyBGaWVsZENvbmZpZyhcImdyb3VwXCIpO1xyXG5cdH1cclxuXHRpbml0KCkge1xyXG5cdFx0dGhpcy5faWQgPSAoTWF0aC5yYW5kb20oKSAqIDEwKS50b1N0cmluZygpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZvcm1Nb2R1bGVDb25maWcge1xyXG5cdGVudj86IHtcclxuXHRcdHByb2R1Y3Rpb246IGJvb2xlYW47XHJcblx0XHRmcm9udGVuZF9zZXJ2ZXI6IHN0cmluZztcclxuXHRcdHNlcnZlcjogc3RyaW5nO1xyXG5cdH07XHJcblx0ZW5kcG9pbnRzPzoge1xyXG5cdFx0YWRkRm9ybTogc3RyaW5nO1xyXG5cdFx0ZWRpdEZvcm06IHN0cmluZztcclxuXHRcdGdldEZvcm06IHN0cmluZztcclxuXHRcdGdldExpc3Q6IHN0cmluZztcclxuXHRcdGRlbGV0ZUZvcm06IHN0cmluZztcclxuXHRcdGdldENhcHRjaGE6IHN0cmluZztcclxuXHR9O1xyXG59XHJcbmV4cG9ydCBjb25zdCBNT0RVTEVfREVGQVVMVF9DT05GSUc6IEZvcm1Nb2R1bGVDb25maWcgPSB7XHJcblx0ZW52OiB7XHJcblx0XHRwcm9kdWN0aW9uOiBmYWxzZSxcclxuXHRcdGZyb250ZW5kX3NlcnZlcjogXCJmcm9udGVuZC9zZXJ2ZXIvZGlkL25vdC9zZXRcIixcclxuXHRcdHNlcnZlcjogXCJzZXJ2ZXIvZGlkL25vdC9zZXRcIlxyXG5cdH0sXHJcblx0ZW5kcG9pbnRzOiB7XHJcblx0XHRhZGRGb3JtOiBcIlwiLFxyXG5cdFx0ZWRpdEZvcm06IFwiXCIsXHJcblx0XHRnZXRGb3JtOiBcIlwiLFxyXG5cdFx0Z2V0TGlzdDogXCJcIixcclxuXHRcdGRlbGV0ZUZvcm06IFwiXCIsXHJcblx0XHRnZXRDYXB0Y2hhOiBcIi9hcGkvYXV0aGVudGljYXRpb24vY2FwdGNoYVwiXHJcblx0fVxyXG59O1xyXG5leHBvcnQgY29uc3QgTU9EVUxFX0NPTkZJR19UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxGb3JtTW9kdWxlQ29uZmlnPihcIkZvcm1Nb2R1bGVDb25maWdcIik7XHJcbiIsImltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBnZXRGb3JtTW9kdWxlQ29uZmlnIH0gZnJvbSBcIkBzb3VzaGlhbnMvY29uZmlnXCI7XHJcblxyXG5pbXBvcnQgeyBGb3JtTW9kdWxlQ29uZmlnIH0gZnJvbSBcIi4uL2Zvcm0uY29uZmlnXCI7XHJcbmltcG9ydCB7IE1PRFVMRV9DT05GSUdfVE9LRU4sIE1PRFVMRV9ERUZBVUxUX0NPTkZJRyB9IGZyb20gXCIuLi9mb3JtLmNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBNYWluQ29udGFpbmVyU3RhdGUgfSBmcm9tIFwiLi4vbWFpbi1jb250YWluZXJcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9ybUNvbmZpZ3VyYXRpb25TZXJ2aWNlIHtcclxuXHRwcml2YXRlIF9jb25maWc6IEZvcm1Nb2R1bGVDb25maWc7XHJcblx0Z2V0IGNvbmZpZygpIHtcclxuXHRcdHJldHVybiB0aGlzLl9jb25maWc7XHJcblx0fVxyXG5cdGNvbmZpZyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KE1PRFVMRV9ERUZBVUxUX0NPTkZJRyk7XHJcblxyXG5cdGNvbnN0cnVjdG9yKEBJbmplY3QoTU9EVUxFX0NPTkZJR19UT0tFTikgY29uZmlnRmlsZSwgcHJpdmF0ZSBzdG9yZTogU3RvcmU8TWFpbkNvbnRhaW5lclN0YXRlPikge1xyXG5cdFx0dGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgTU9EVUxFX0RFRkFVTFRfQ09ORklHLCBjb25maWdGaWxlKTtcclxuXHRcdHRoaXMuY29uZmlnJC5uZXh0KHRoaXMuX2NvbmZpZyk7XHJcblx0XHR0aGlzLnN0b3JlLnNlbGVjdChnZXRGb3JtTW9kdWxlQ29uZmlnKS5zdWJzY3JpYmUodXNlckNvbmZpZyA9PiB7XHJcblx0XHRcdGlmICghdXNlckNvbmZpZykgcmV0dXJuO1xyXG5cdFx0XHR0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9jb25maWcsIHVzZXJDb25maWcuQ29uZmlnKTtcclxuXHRcdFx0dGhpcy5jb25maWckLm5leHQodGhpcy5fY29uZmlnKTtcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XHJcbmltcG9ydCB7IGZpbHRlciwgbWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5pbXBvcnQgeyBzdHJpbmdUZW1wbGF0ZSB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5cclxuaW1wb3J0IHsgRm9ybVNjaGVtYU1vZGVsLCBBZGRGb3JtQXBpTW9kZWwsIEVkaXRGb3JtQXBpTW9kZWwsIEZvcm1MaXN0QXBpTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IEZvcm1Db25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gXCIuL2Zvcm0tY29uZmlndXJhdGlvbi5zZXJ2aWNlXCI7XHJcblxyXG5pbXBvcnQgeyBNYWluQ29udGFpbmVyU3RhdGUgfSBmcm9tIFwiLi4vbWFpbi1jb250YWluZXIvbWFpbi1jb250YWluZXIucmVkdWNlcnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9ybVNlcnZpY2Uge1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8TWFpbkNvbnRhaW5lclN0YXRlPixcclxuXHRcdHByaXZhdGUgY29uZmlndXJhdGlvblNlcnZpY2U6IEZvcm1Db25maWd1cmF0aW9uU2VydmljZVxyXG5cdCkge31cclxuXHJcblx0YWRkKGRhdGE6IEFkZEZvcm1BcGlNb2RlbC5SZXF1ZXN0KTogT2JzZXJ2YWJsZTxGb3JtU2NoZW1hTW9kZWw+IHtcclxuXHRcdGNvbnN0IG1vZGVsID0gbmV3IEFkZEZvcm1BcGlNb2RlbC5SZXF1ZXN0KGRhdGEpO1xyXG5cdFx0cmV0dXJuIHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJFxyXG5cdFx0XHQuZmlsdGVyKChjb25maWcpID0+IGNvbmZpZy5lbmRwb2ludHMuYWRkRm9ybSAhPSBcIlwiKVxyXG5cdFx0XHQudGFrZSgxKVxyXG5cdFx0XHQuc3dpdGNoTWFwKChjb25maWcpID0+XHJcblx0XHRcdFx0dGhpcy5odHRwLnBvc3QoY29uZmlnLmVudi5mcm9udGVuZF9zZXJ2ZXIgKyBjb25maWcuZW5kcG9pbnRzLmFkZEZvcm0sIG1vZGVsLmdldFJlcXVlc3RCb2R5KCkpXHJcblx0XHRcdClcclxuXHRcdFx0Lm1hcCgocmVzcG9uc2U6IEFkZEZvcm1BcGlNb2RlbC5SZXNwb25zZSkgPT4gcmVzcG9uc2UuUmVzdWx0KTtcclxuXHR9XHJcblx0Z2V0KF9pZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxGb3JtU2NoZW1hTW9kZWw+IHtcclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyRcclxuXHRcdFx0LmZpbHRlcigoY29uZmlnKSA9PiBjb25maWcuZW5kcG9pbnRzLmdldEZvcm0gIT0gXCJcIilcclxuXHRcdFx0LnRha2UoMSlcclxuXHRcdFx0LnN3aXRjaE1hcCgoY29uZmlnKSA9PlxyXG5cdFx0XHRcdHRoaXMuaHR0cC5nZXQoc3RyaW5nVGVtcGxhdGUoY29uZmlnLmVudi5mcm9udGVuZF9zZXJ2ZXIgKyBjb25maWcuZW5kcG9pbnRzLmdldEZvcm0sIHsgX2lkIH0pKVxyXG5cdFx0XHQpXHJcblx0XHRcdC5tYXAoKHJlc3BvbnNlOiBFZGl0Rm9ybUFwaU1vZGVsLlJlc3BvbnNlKSA9PiByZXNwb25zZS5SZXN1bHQpO1xyXG5cdH1cclxuXHRnZXRMaXN0KCk6IE9ic2VydmFibGU8Rm9ybVNjaGVtYU1vZGVsW10+IHtcclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyRcclxuXHRcdFx0LmZpbHRlcigoY29uZmlnKSA9PiBjb25maWcuZW5kcG9pbnRzLmdldExpc3QgIT0gXCJcIilcclxuXHRcdFx0LnN3aXRjaE1hcCgoY29uZmlnKSA9PiB0aGlzLmh0dHAuZ2V0KGNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyICsgY29uZmlnLmVuZHBvaW50cy5nZXRMaXN0KSlcclxuXHRcdFx0Lm1hcCgocmVzcG9uc2U6IEZvcm1MaXN0QXBpTW9kZWwuUmVzcG9uc2UpID0+IHJlc3BvbnNlLlJlc3VsdCk7XHJcblx0fVxyXG5cdHVwZGF0ZShkYXRhOiBFZGl0Rm9ybUFwaU1vZGVsLlJlcXVlc3QpOiBPYnNlcnZhYmxlPEZvcm1TY2hlbWFNb2RlbD4ge1xyXG5cdFx0Y29uc3QgbW9kZWwgPSBuZXcgRWRpdEZvcm1BcGlNb2RlbC5SZXF1ZXN0KGRhdGEpO1xyXG5cdFx0cmV0dXJuIHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuY29uZmlnJFxyXG5cdFx0XHQuZmlsdGVyKChjb25maWcpID0+IGNvbmZpZy5lbmRwb2ludHMuZWRpdEZvcm0gIT0gXCJcIilcclxuXHRcdFx0LnRha2UoMSlcclxuXHRcdFx0LnN3aXRjaE1hcCgoY29uZmlnKSA9PlxyXG5cdFx0XHRcdHRoaXMuaHR0cC5wdXQoY29uZmlnLmVudi5mcm9udGVuZF9zZXJ2ZXIgKyBjb25maWcuZW5kcG9pbnRzLmVkaXRGb3JtLCBtb2RlbC5nZXRSZXF1ZXN0Qm9keSgpKVxyXG5cdFx0XHQpXHJcblx0XHRcdC5tYXAoKHJlc3BvbnNlOiBFZGl0Rm9ybUFwaU1vZGVsLlJlc3BvbnNlKSA9PiByZXNwb25zZS5SZXN1bHQpO1xyXG5cdH1cclxuXHRkZWxldGUoX2lkOiBzdHJpbmcpIHtcclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyRcclxuXHRcdFx0LmZpbHRlcigoY29uZmlnKSA9PiBjb25maWcuZW5kcG9pbnRzLmRlbGV0ZUZvcm0gIT0gXCJcIilcclxuXHRcdFx0LnN3aXRjaE1hcCgoY29uZmlnKSA9PiB0aGlzLmh0dHAuZ2V0KGNvbmZpZy5lbnYuZnJvbnRlbmRfc2VydmVyICsgY29uZmlnLmVuZHBvaW50cy5kZWxldGVGb3JtKSk7XHJcblx0fVxyXG5cdHNlbGVjdEZvcm1CeUlkKF9pZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxGb3JtU2NoZW1hTW9kZWw+IHtcclxuXHRcdGNvbnN0IHN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEZvcm1TY2hlbWFNb2RlbD4odW5kZWZpbmVkKTtcclxuXHRcdHRoaXMuc3RvcmVcclxuXHRcdFx0LnNlbGVjdCgoc3RhdGUpID0+IHN0YXRlLmZvcm0ubGlzdC5kYXRhKVxyXG5cdFx0XHQucGlwZShmaWx0ZXIoKGZvcm1zKSA9PiBmb3JtcyAhPSBudWxsKSwgbWFwKChmb3JtcykgPT4gZm9ybXMuZmluZCgoZm9ybSkgPT4gZm9ybS5faWQgPT0gX2lkKSkpXHJcblx0XHRcdC5zdWJzY3JpYmUoKGZvcm1TY2hlbWFNb2RlbCkgPT4gc3ViamVjdC5uZXh0KGZvcm1TY2hlbWFNb2RlbCkpO1xyXG5cdFx0cmV0dXJuIHN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZpZWxkQ29uZmlnLCBGaWVsZCB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJuZ3MtZm9ybS1jb250cm9sLXNlbGVjdFwiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiAgW2Zvcm1Hcm91cF09XCJncm91cFwiPlxyXG48bWF0LWZvcm0tZmllbGQ+XHJcbiAgICA8bWF0LXNlbGVjdCBbZm9ybUNvbnRyb2xOYW1lXT1cImNvbmZpZy5uYW1lXCIgW3BsYWNlaG9sZGVyXT1cImNvbmZpZy50aXRsZVwiPlxyXG4gICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGNvbmZpZy5vcHRpb25zXCIgW3ZhbHVlXT1cIm9wdGlvbi52YWx1ZVwiPnt7b3B0aW9uLmtleX19PC9tYXQtb3B0aW9uPlxyXG4gICAgPC9tYXQtc2VsZWN0PlxyXG48L21hdC1mb3JtLWZpZWxkPlxyXG48L2Rpdj5gLFxyXG5cdHN0eWxlczogW2A6aG9zdHtkaXNwbGF5OmJsb2NrfS5tYXQtZm9ybS1maWVsZHt3aWR0aDoxMDAlfWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWxlY3RDb21wb25lbnQgaW1wbGVtZW50cyBGaWVsZCB7XHJcblx0Y29uZmlnOiBGaWVsZENvbmZpZztcclxuXHRncm91cDogRm9ybUdyb3VwO1xyXG5cdGNvbnN0cnVjdG9yKCkge31cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmltcG9ydCB7IEZpZWxkLCBGaWVsZENvbmZpZyB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcIm5ncy1mb3JtLWNvbnRyb2wtY2hlY2tib3hcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgW2Zvcm1Hcm91cF09XCJncm91cFwiPlxyXG4gICAgPG1hdC1jaGVja2JveCBbZm9ybUNvbnRyb2xOYW1lXT1cImNvbmZpZy5uYW1lXCI+XHJcbiAgICAgICAge3tjb25maWcudGl0bGV9fVxyXG4gICAgPC9tYXQtY2hlY2tib3g+XHJcbjwvZGl2PmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e2Rpc3BsYXk6YmxvY2t9Lm1hdC1mb3JtLWZpZWxke3dpZHRoOjEwMCV9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENoZWNrYm94Q29tcG9uZW50IGltcGxlbWVudHMgRmllbGQge1xyXG5cdGNvbmZpZzogRmllbGRDb25maWc7XHJcblx0Z3JvdXA6IEZvcm1Hcm91cDtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuaW1wb3J0IHsgRmllbGRDb25maWcsIEZpZWxkIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVsc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwibmdzLWZvcm0tY29udHJvbC1lbWFpbFwiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiAgW2Zvcm1Hcm91cF09XCJncm91cFwiPlxyXG48bWF0LWZvcm0tZmllbGQgZnhGbGV4RmlsbD5cclxuICAgIDxpbnB1dCBtYXRJbnB1dCBbdHlwZV09XCJjb25maWcuaW5wdXRUeXBlXCIgW3BsYWNlaG9sZGVyXT1cImNvbmZpZy50aXRsZVwiIFtmb3JtQ29udHJvbE5hbWVdPVwiY29uZmlnLm5hbWVcIj5cclxuPC9tYXQtZm9ybS1maWVsZD5cclxuPC9kaXY+YCxcclxuXHRzdHlsZXM6IFtgOmhvc3R7ZGlzcGxheTpibG9ja30ubWF0LWZvcm0tZmllbGR7d2lkdGg6MTAwJX1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRW1haWxDb21wb25lbnQgaW1wbGVtZW50cyBGaWVsZCB7XHJcblx0Y29uZmlnOiBGaWVsZENvbmZpZztcclxuXHRncm91cDogRm9ybUdyb3VwO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG5cdG5nT25Jbml0KCkge31cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmltcG9ydCB7IEZpZWxkQ29uZmlnLCBGaWVsZCB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcIm5ncy1mb3JtLWNvbnRyb2wtY29sb3JcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgIFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxyXG48bWF0LWZvcm0tZmllbGQgZnhGbGV4RmlsbD5cclxuICAgIDxpbnB1dCBtYXRJbnB1dCBbdHlwZV09XCJzY2hlbWEuaW5wdXRUeXBlXCIgW3BsYWNlaG9sZGVyXT1cInNjaGVtYS50aXRsZVwiIFtmb3JtQ29udHJvbE5hbWVdPVwic2NoZW1hLm5hbWVcIj5cclxuPC9tYXQtZm9ybS1maWVsZD5cclxuPC9kaXY+YCxcclxuXHRzdHlsZXM6IFtgOmhvc3R7ZGlzcGxheTpibG9ja30ubWF0LWZvcm0tZmllbGR7d2lkdGg6MTAwJX1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29sb3JDb21wb25lbnQgaW1wbGVtZW50cyBGaWVsZCB7XHJcblx0Y29uZmlnOiBGaWVsZENvbmZpZztcclxuXHRncm91cDogRm9ybUdyb3VwO1xyXG5cclxuXHRASW5wdXQoKSBmb3JtOiBGb3JtR3JvdXA7XHJcblx0QElucHV0KCkgc2NoZW1hOiBGaWVsZENvbmZpZztcclxuXHRjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG5cdG5nT25Jbml0KCkge31cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmltcG9ydCB7IEZpZWxkQ29uZmlnLCBGaWVsZCB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBNYXRUYWJsZURhdGFTb3VyY2UgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgU2VsZWN0aW9uTW9kZWwgfSBmcm9tIFwiQGFuZ3VsYXIvY2RrL2NvbGxlY3Rpb25zXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJuZ3MtZm9ybS1jb250cm9sLXRhYmxlXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1jb250YWluZXIgbWF0LWVsZXZhdGlvbi16OFwiICpuZ0lmPVwicmVhZHlcIj5cclxuICAgIDxtYXQtdGFibGUgI3RhYmxlIFtkYXRhU291cmNlXT1cImRhdGFTb3VyY2VcIj5cclxuICBcclxuICAgICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJzZWxlY3RcIj5cclxuICAgICAgICA8bWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPlxyXG4gICAgICAgICAgPG1hdC1jaGVja2JveCAoY2hhbmdlKT1cIiRldmVudCA/IG1hc3RlclRvZ2dsZSgpIDogbnVsbFwiXHJcbiAgICAgICAgICAgIFtjaGVja2VkXT1cInNlbGVjdGlvbi5oYXNWYWx1ZSgpICYmIGlzQWxsU2VsZWN0ZWQoKVwiXHJcbiAgICAgICAgICAgIFtpbmRldGVybWluYXRlXT1cInNlbGVjdGlvbi5oYXNWYWx1ZSgpICYmICFpc0FsbFNlbGVjdGVkKClcIj5cclxuICAgICAgICAgIDwvbWF0LWNoZWNrYm94PlxyXG4gICAgICAgIDwvbWF0LWhlYWRlci1jZWxsPlxyXG4gICAgICAgIDxtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCByb3dcIj5cclxuICAgICAgICAgIDxtYXQtY2hlY2tib3ggKGNsaWNrKT1cIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKVwiXHJcbiAgICAgICAgICAgIChjaGFuZ2UpPVwiJGV2ZW50ID8gc2VsZWN0aW9uLnRvZ2dsZShyb3cpIDogbnVsbFwiXHJcbiAgICAgICAgICAgIFtjaGVja2VkXT1cInNlbGVjdGlvbi5pc1NlbGVjdGVkKHJvdylcIj5cclxuICAgICAgICAgIDwvbWF0LWNoZWNrYm94PlxyXG4gICAgICAgIDwvbWF0LWNlbGw+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgY29sIG9mIGZpbGVkRGlzcGxheWVkQ29sdW1uc1wiPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgIFttYXRDb2x1bW5EZWZdPVwiY29sXCI+XHJcbiAgICAgICAgICA8bWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiB7e2NvbH19IDwvbWF0LWhlYWRlci1jZWxsPlxyXG4gICAgICAgICAgPG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj4ge3tlbGVtZW50W2NvbF19fSA8L21hdC1jZWxsPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJhY3Rpb25zXCI+XHJcbiAgICAgICAgPG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj48L21hdC1oZWFkZXItY2VsbD5cclxuICAgICAgICA8bWF0LWNlbGwgY2xhc3M9J2xlZnQtYWxpZ24nICptYXRDZWxsRGVmPVwibGV0IHJvd1wiPlxyXG4gICAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24+XHJcbiAgICAgICAgICAgIDxtYXQtaWNvbiBhcmlhLWxhYmVsPVwiw5jCp8OZwobDmMKqw5jCrsOYwqfDmMKoXCI+YXJyb3dfYmFjazwvbWF0LWljb24+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L21hdC1jZWxsPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIFxyXG4gICAgICA8bWF0LWhlYWRlci1yb3cgKm1hdEhlYWRlclJvd0RlZj1cImRpc3BsYXllZENvbHVtbnNcIj48L21hdC1oZWFkZXItcm93PlxyXG4gICAgICA8bWF0LXJvdyAqbWF0Um93RGVmPVwibGV0IHJvdzsgY29sdW1uczogZGlzcGxheWVkQ29sdW1ucztcIiAoY2xpY2spPVwic2VsZWN0aW9uLnRvZ2dsZShyb3cpXCI+PC9tYXQtcm93PlxyXG5cclxuICAgIDwvbWF0LXRhYmxlPlxyXG4gIDwvZGl2PlxyXG5cclxuXHJcbjwhLS0gPG1hdC1mb3JtLWZpZWxkIGZ4RmxleEZpbGwgW2Zvcm1Hcm91cF09XCJmb3JtXCI+XHJcbiAgXHJcbiAgPGlucHV0IG1hdElucHV0IFtpZF09XCJzY2hlbWEubmFtZVwiIFt0eXBlXT1cInNjaGVtYS5pbnB1dFR5cGVcIiBbcGxhY2Vob2xkZXJdPVwic2NoZW1hLnRpdGxlXCIgW2Zvcm1Db250cm9sTmFtZV09XCJzY2hlbWEubmFtZVwiPlxyXG4gIFxyXG4gIDxtYXQtZXJyb3IgKm5nSWY9XCJmb3JtLmdldChzY2hlbWEubmFtZSkuZXJyb3JzPy5yZXF1aXJlZFwiPlxyXG4gICAge3tzY2hlbWEudmFsaWRhdG9yLnJlcXVpcmVkLm1lc3NhZ2V9fVxyXG4gIDwvbWF0LWVycm9yPlxyXG4gIDxtYXQtZXJyb3IgKm5nSWY9XCJmb3JtLmdldChzY2hlbWEubmFtZSkuZXJyb3JzPy5taW5sZW5ndGhcIj5cclxuICAgIHt7c2NoZW1hLnZhbGlkYXRvci5taW5sZW5ndGgubWVzc2FnZX19XHJcbiAgPC9tYXQtZXJyb3I+XHJcbiAgPG1hdC1lcnJvciAqbmdJZj1cImZvcm0uZ2V0KHNjaGVtYS5uYW1lKS5lbWFpbD8ubWlubGVuZ3RoXCI+XHJcbiAgICB7e3NjaGVtYS52YWxpZGF0b3IuZW1haWwubWVzc2FnZX19XHJcbiAgPC9tYXQtZXJyb3I+XHJcbjwvbWF0LWZvcm0tZmllbGQ+IC0tPlxyXG4gIFxyXG4gIDwhLS0gPGRpdiAqbmdJZj1cImZvcm0uZ2V0KHNjaGVtYS5uYW1lKS5pbnZhbGlkICYmIChmb3JtLmdldChzY2hlbWEubmFtZSkuZGlydHkgfHwgZm9ybS5nZXQoc2NoZW1hLm5hbWUpLnRvdWNoZWQpXCIgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj5cclxuICA8L2Rpdj4gLS0+YCxcclxuXHRzdHlsZXM6IFtgOmhvc3R7ZGlzcGxheTpibG9ja30ubWF0LWZvcm0tZmllbGR7d2lkdGg6MTAwJX1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEZpZWxkIHtcclxuXHRjb25maWc6IEZpZWxkQ29uZmlnO1xyXG5cdGdyb3VwOiBGb3JtR3JvdXA7XHJcblx0QElucHV0KCkgZm9ybTogRm9ybUdyb3VwO1xyXG5cdEBJbnB1dCgpIHNjaGVtYTogRmllbGRDb25maWc7XHJcblx0cmVhZHk6IGJvb2xlYW47XHJcblx0ZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW107XHJcblx0ZmlsZWREaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXTtcclxuXHRkYXRhU291cmNlOiBNYXRUYWJsZURhdGFTb3VyY2U8YW55PjtcclxuXHJcblx0c2VsZWN0aW9uID0gbmV3IFNlbGVjdGlvbk1vZGVsPGFueT4odHJ1ZSwgW10pO1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge1xyXG5cdFx0dGhpcy5yZWFkeSA9IGZhbHNlO1xyXG5cdH1cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMuaHR0cC5nZXQodGhpcy5zY2hlbWEuZGF0YUVuZHBvaW50KS5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xyXG5cdFx0XHR0aGlzLnJlYWR5ID0gdHJ1ZTtcclxuXHRcdFx0dGhpcy5kaXNwbGF5ZWRDb2x1bW5zID0gZGF0YS5kaXNwbGF5ZWRDb2x1bW5zO1xyXG5cdFx0XHR0aGlzLmZpbGVkRGlzcGxheWVkQ29sdW1ucyA9IGRhdGEuZmlsZWREaXNwbGF5ZWRDb2x1bW5zO1xyXG5cdFx0XHR0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlPGFueT4oZGF0YS5kYXRhU291cmNlKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0LyoqIFdoZXRoZXIgdGhlIG51bWJlciBvZiBzZWxlY3RlZCBlbGVtZW50cyBtYXRjaGVzIHRoZSB0b3RhbCBudW1iZXIgb2Ygcm93cy4gKi9cclxuXHRpc0FsbFNlbGVjdGVkKCkge1xyXG5cdFx0Y29uc3QgbnVtU2VsZWN0ZWQgPSB0aGlzLnNlbGVjdGlvbi5zZWxlY3RlZC5sZW5ndGg7XHJcblx0XHR0aGlzLmZvcm0ucGF0Y2hWYWx1ZSh7XHJcblx0XHRcdFt0aGlzLnNjaGVtYS5uYW1lXTogdGhpcy5zZWxlY3Rpb24uc2VsZWN0ZWRcclxuXHRcdH0pO1xyXG5cdFx0Y29uc3QgbnVtUm93cyA9IHRoaXMuZGF0YVNvdXJjZS5kYXRhLmxlbmd0aDtcclxuXHRcdHJldHVybiBudW1TZWxlY3RlZCA9PT0gbnVtUm93cztcclxuXHR9XHJcblxyXG5cdC8qKiBTZWxlY3RzIGFsbCByb3dzIGlmIHRoZXkgYXJlIG5vdCBhbGwgc2VsZWN0ZWQ7IG90aGVyd2lzZSBjbGVhciBzZWxlY3Rpb24uICovXHJcblx0bWFzdGVyVG9nZ2xlKCkge1xyXG5cdFx0dGhpcy5pc0FsbFNlbGVjdGVkKCkgPyB0aGlzLnNlbGVjdGlvbi5jbGVhcigpIDogdGhpcy5kYXRhU291cmNlLmRhdGEuZm9yRWFjaChyb3cgPT4gdGhpcy5zZWxlY3Rpb24uc2VsZWN0KHJvdykpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmltcG9ydCB7IEZpZWxkQ29uZmlnIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVsc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwibmdzLWZvcm0tY29udHJvbC1udW1iZXJcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgIFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxyXG4gICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleEZpbGw+XHJcbiAgICAgICAgPGlucHV0IG1hdElucHV0IFt0eXBlXT1cInNjaGVtYS5pbnB1dFR5cGVcIiBbcGxhY2Vob2xkZXJdPVwic2NoZW1hLnRpdGxlXCIgW2Zvcm1Db250cm9sTmFtZV09XCJzY2hlbWEubmFtZVwiPlxyXG4gICAgPC9tYXQtZm9ybS1maWVsZD5cclxuPC9kaXY+YCxcclxuXHRzdHlsZXM6IFtgOmhvc3R7ZGlzcGxheTpibG9ja30ubWF0LWZvcm0tZmllbGR7d2lkdGg6MTAwJX1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnVtYmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRASW5wdXQoKSBmb3JtOiBGb3JtR3JvdXA7XHJcblx0QElucHV0KCkgc2NoZW1hOiBGaWVsZENvbmZpZztcclxuXHRjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG5cdG5nT25Jbml0KCkge31cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmltcG9ydCB7IEZpZWxkQ29uZmlnLCBGaWVsZCB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcIm5ncy1mb3JtLWNvbnRyb2wtdGV4dFwiLFxyXG5cdHRlbXBsYXRlOiBgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleEZpbGwgW2Zvcm1Hcm91cF09XCJncm91cFwiPlxyXG5cclxuICA8aW5wdXQgbWF0SW5wdXQgW2lkXT1cImNvbmZpZy5uYW1lXCIgW3R5cGVdPVwiY29uZmlnLmlucHV0VHlwZVwiIFtwbGFjZWhvbGRlcl09XCJjb25maWcudGl0bGVcIiBbZm9ybUNvbnRyb2xOYW1lXT1cImNvbmZpZy5uYW1lXCI+XHJcblxyXG4gIDxtYXQtZXJyb3IgKm5nSWY9XCJncm91cC5nZXQoY29uZmlnLm5hbWUpLmVycm9ycz8ucmVxdWlyZWRcIj5cclxuICAgIHt7Y29uZmlnLnZhbGlkYXRvci5yZXF1aXJlZC5tZXNzYWdlfX1cclxuICA8L21hdC1lcnJvcj5cclxuICA8bWF0LWVycm9yICpuZ0lmPVwiZ3JvdXAuZ2V0KGNvbmZpZy5uYW1lKS5lcnJvcnM/Lm1pbmxlbmd0aFwiPlxyXG4gICAge3tjb25maWcudmFsaWRhdG9yLm1pbmxlbmd0aC5tZXNzYWdlfX1cclxuICA8L21hdC1lcnJvcj5cclxuICA8IS0tIDxtYXQtZXJyb3IgKm5nSWY9XCJncm91cC5nZXQoY29uZmlnLm5hbWUpLmVtYWlsPy5taW5sZW5ndGhcIj5cclxuICAgIHt7Y29uZmlnLnZhbGlkYXRvci5lbWFpbC5tZXNzYWdlfX1cclxuICA8L21hdC1lcnJvcj4gLS0+XHJcblxyXG4gIDwhLS0gPGRpdiAqbmdJZj1cImZvcm0uZ2V0KGNvbmZpZy5uYW1lKS5pbnZhbGlkICYmIChmb3JtLmdldChjb25maWcubmFtZSkuZGlydHkgfHwgZm9ybS5nZXQoY29uZmlnLm5hbWUpLnRvdWNoZWQpXCIgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj5cclxuICA8L2Rpdj4gLS0+XHJcblxyXG48L21hdC1mb3JtLWZpZWxkPmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e2Rpc3BsYXk6YmxvY2t9Lm1hdC1mb3JtLWZpZWxke3dpZHRoOjEwMCV9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRleHRDb21wb25lbnQgaW1wbGVtZW50cyBGaWVsZCB7XHJcblx0Y29uZmlnOiBGaWVsZENvbmZpZztcclxuXHRncm91cDogRm9ybUdyb3VwO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBGb3JtU2NoZW1hTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcblxyXG5leHBvcnQgZW51bSBGb3Jtc0xpc3RBY3Rpb25UeXBlcyB7XHJcblx0Rk9STVNfTElTVCA9IFwiW0ZPUk1dW0xJU1RdIEZPUk1TX0xJU1RcIixcclxuXHRGT1JNU19MSVNUX1NUQVJUID0gXCJbRk9STV1bTElTVF0gRk9STVNfTElTVF9TVEFSVFwiLFxyXG5cdEZPUk1TX0xJU1RfU1VDQ0VFRCA9IFwiW0ZPUk1dW0xJU1RdIEZPUk1TX0xJU1RfU1VDQ0VFRFwiLFxyXG5cdEZPUk1TX0xJU1RfRkFJTEVEID0gXCJbRk9STV1bTElTVF0gRk9STVNfTElTVF9GQUlMRURcIixcclxuXHRBRERfRk9STV9TQ0hFTUEgPSBcIltGT1JNXVtMSVNUXSBBRERfRk9STV9TQ0hFTUFcIixcclxuXHRGT1JNX1NDSEVNQV9VUERBVEUgPSBcIltGT1JNXVtMSVNUXSBGT1JNX1NDSEVNQV9VUERBVEVcIixcclxuXHRHRVRfRk9STV9TQ0hFTUEgPSBcIltGT1JNXVtMSVNUXSBHRVRfRk9STV9TQ0hFTUFcIixcclxuXHRGT1JNX1NDSEVNQV9GRVRDSEVEID0gXCJbRk9STV1bTElTVF0gRk9STV9TQ0hFTUFfRkVUQ0hFRFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBGb3Jtc0xpc3RBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBGb3Jtc0xpc3RBY3Rpb25UeXBlcy5GT1JNU19MSVNUO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBGb3Jtc0xpc3RTdGFydEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEZvcm1zTGlzdEFjdGlvblR5cGVzLkZPUk1TX0xJU1RfU1RBUlQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIEZvcm1zTGlzdFN1Y2NlZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBGb3Jtc0xpc3RBY3Rpb25UeXBlcy5GT1JNU19MSVNUX1NVQ0NFRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEZvcm1TY2hlbWFNb2RlbFtdKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBGb3Jtc0xpc3RGYWlsZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBGb3Jtc0xpc3RBY3Rpb25UeXBlcy5GT1JNU19MSVNUX0ZBSUxFRDtcclxufVxyXG5leHBvcnQgY2xhc3MgVXBkYXRlRm9ybVNjaGVtYUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEZvcm1zTGlzdEFjdGlvblR5cGVzLkZPUk1fU0NIRU1BX1VQREFURTtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRm9ybVNjaGVtYU1vZGVsKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBBZGRGb3JtU2NoZW1hQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gRm9ybXNMaXN0QWN0aW9uVHlwZXMuQUREX0ZPUk1fU0NIRU1BO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBGb3JtU2NoZW1hTW9kZWwpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdldEZvcm1TY2hlbWFBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBGb3Jtc0xpc3RBY3Rpb25UeXBlcy5HRVRfRk9STV9TQ0hFTUE7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge31cclxufVxyXG5leHBvcnQgY2xhc3MgRm9ybVNjaGVtYUZlY2hlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEZvcm1zTGlzdEFjdGlvblR5cGVzLkZPUk1fU0NIRU1BX0ZFVENIRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEZvcm1TY2hlbWFNb2RlbCkge31cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgRm9ybXNMaXN0QWN0aW9ucyA9XHJcblx0fCBGb3Jtc0xpc3RBY3Rpb25cclxuXHR8IEZvcm1zTGlzdFN0YXJ0QWN0aW9uXHJcblx0fCBGb3Jtc0xpc3RTdWNjZWVkQWN0aW9uXHJcblx0fCBGb3Jtc0xpc3RGYWlsZWRBY3Rpb25cclxuXHR8IFVwZGF0ZUZvcm1TY2hlbWFBY3Rpb25cclxuXHR8IEFkZEZvcm1TY2hlbWFBY3Rpb25cclxuXHR8IEdldEZvcm1TY2hlbWFBY3Rpb25cclxuXHR8IEZvcm1TY2hlbWFGZWNoZWRBY3Rpb247XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuaW1wb3J0IHsgRmllbGRDb25maWcsIEZpZWxkIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVsc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwibmdzLWZvcm0tY29udHJvbC1kYXRlXCIsXHJcblx0dGVtcGxhdGU6IGA8bWF0LWZvcm0tZmllbGQgZnhGbGV4RmlsbCBbZm9ybUdyb3VwXT1cImdyb3VwXCI+XHJcblxyXG4gIDwhLS0gPGlucHV0IG1hdElucHV0IFtpZF09XCJjb25maWcubmFtZVwiIFt0eXBlXT1cImNvbmZpZy5pbnB1dFR5cGVcIiBbcGxhY2Vob2xkZXJdPVwiY29uZmlnLnRpdGxlXCIgW2Zvcm1Db250cm9sTmFtZV09XCJjb25maWcubmFtZVwiPiAtLT5cclxuICA8aW5wdXQgbWF0SW5wdXQgW2lkXT1cImNvbmZpZy5uYW1lXCIgW21hdERhdGVwaWNrZXJdPVwiX2RhdGVwaWNrZXJcIiBbcGxhY2Vob2xkZXJdPVwiY29uZmlnLnRpdGxlXCIgW2Zvcm1Db250cm9sTmFtZV09XCJjb25maWcubmFtZVwiPlxyXG4gIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0U3VmZml4IFtmb3JdPVwiX2RhdGVwaWNrZXJcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cclxuICA8bWF0LWRhdGVwaWNrZXIgI19kYXRlcGlja2VyPjwvbWF0LWRhdGVwaWNrZXI+XHJcblxyXG4gIDxtYXQtZXJyb3IgKm5nSWY9XCJncm91cC5nZXQoY29uZmlnLm5hbWUpLmVycm9ycz8ucmVxdWlyZWRcIj5cclxuICAgIHt7Y29uZmlnLnZhbGlkYXRvci5yZXF1aXJlZC5tZXNzYWdlfX1cclxuICA8L21hdC1lcnJvcj5cclxuICA8bWF0LWVycm9yICpuZ0lmPVwiZ3JvdXAuZ2V0KGNvbmZpZy5uYW1lKS5lcnJvcnM/Lm1pbmxlbmd0aFwiPlxyXG4gICAge3tjb25maWcudmFsaWRhdG9yLm1pbmxlbmd0aC5tZXNzYWdlfX1cclxuICA8L21hdC1lcnJvcj5cclxuICA8IS0tIDxtYXQtZXJyb3IgKm5nSWY9XCJncm91cC5nZXQoY29uZmlnLm5hbWUpLmVtYWlsPy5taW5sZW5ndGhcIj5cclxuICAgIHt7Y29uZmlnLnZhbGlkYXRvci5lbWFpbC5tZXNzYWdlfX1cclxuICA8L21hdC1lcnJvcj4gLS0+XHJcblxyXG4gIDwhLS0gPGRpdiAqbmdJZj1cImZvcm0uZ2V0KGNvbmZpZy5uYW1lKS5pbnZhbGlkICYmIChmb3JtLmdldChjb25maWcubmFtZSkuZGlydHkgfHwgZm9ybS5nZXQoY29uZmlnLm5hbWUpLnRvdWNoZWQpXCIgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj5cclxuICA8L2Rpdj4gLS0+XHJcblxyXG48L21hdC1mb3JtLWZpZWxkPlxyXG5cclxuPCEtLSBcclxuXHJcbjxkaXYgW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJmaWVsZC13cmFwcGVyXCI+XHJcbiAgICAgIDxkaXYgW0BmaWxlZEFuaW1hdGlvbl09XCJtb2RlXCI+XHJcbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZml0XCIgWyhuZ0NsYXNzKV09XCJtb2RlXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCBbbWF0RGF0ZXBpY2tlcl09XCJfZGF0ZXBpY2tlclwiIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiIFtmb3JtQ29udHJvbE5hbWVdPVwiY29udHJvbE5hbWVcIj5cclxuICAgICAgICAgICAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRTdWZmaXggW2Zvcl09XCJfZGF0ZXBpY2tlclwiPjwvbWF0LWRhdGVwaWNrZXItdG9nZ2xlPlxyXG4gICAgICAgICAgICA8bWF0LWRhdGVwaWNrZXIgI19kYXRlcGlja2VyPjwvbWF0LWRhdGVwaWNrZXI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgPG1hdC1pY29uIGNsYXNzPVwidG9vbHRpcCBtZC0xOFwiICpuZ0lmPVwidG9vbHRpcFwiIFttYXRUb29sdGlwXT1cInRvb2x0aXBcIj5oZWxwPC9tYXQtaWNvbj5cclxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ2YWx1ZS1ib3hcIj4gXHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hbWVcIj5cclxuICAgICAgICAgICAge3sgcGxhY2Vob2xkZXIgfX0gOlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2YWx1ZVwiPlxyXG4gICAgICAgICAgICB7eyhEaXNwbGF5VmFsdWUkIHwgYXN5bmMgfCBwZXJzaWFuRGF0ZSl9fSBcclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj4gLS0+YCxcclxuXHRzdHlsZXM6IFtgOmhvc3R7ZGlzcGxheTpibG9ja30ubWF0LWZvcm0tZmllbGR7d2lkdGg6MTAwJX1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0ZUZvcm1JbnB1dENvbnRyb2xDb21wb25lbnQgaW1wbGVtZW50cyBGaWVsZCB7XHJcblx0Y29uZmlnOiBGaWVsZENvbmZpZztcclxuXHRncm91cDogRm9ybUdyb3VwO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5pbXBvcnQgeyBGaWVsZENvbmZpZywgRmllbGQgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJuZ3MtZm9ybS1jb250cm9sLWZpbGVcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXYgZnhGbGV4RmlsbCBbZm9ybUdyb3VwXT1cImdyb3VwXCI+XHJcblxyXG4gIDwhLS0gPGlucHV0IG1hdElucHV0IFtpZF09XCJjb25maWcubmFtZVwiIFt0eXBlXT1cImNvbmZpZy5pbnB1dFR5cGVcIiBbcGxhY2Vob2xkZXJdPVwiY29uZmlnLnRpdGxlXCIgW2Zvcm1Db250cm9sTmFtZV09XCJjb25maWcubmFtZVwiPiAtLT5cclxuICA8aW5wdXQgW2lkXT1cImNvbmZpZy5uYW1lXCIgW3R5cGVdPVwiY29uZmlnLmlucHV0VHlwZVwiIFtwbGFjZWhvbGRlcl09XCJjb25maWcudGl0bGVcIiBbZm9ybUNvbnRyb2xOYW1lXT1cImNvbmZpZy5uYW1lXCI+XHJcblxyXG4gIDxtYXQtZXJyb3IgKm5nSWY9XCJncm91cC5nZXQoY29uZmlnLm5hbWUpLmVycm9ycz8ucmVxdWlyZWRcIj5cclxuICAgIHt7Y29uZmlnLnZhbGlkYXRvci5yZXF1aXJlZC5tZXNzYWdlfX1cclxuICA8L21hdC1lcnJvcj5cclxuICA8bWF0LWVycm9yICpuZ0lmPVwiZ3JvdXAuZ2V0KGNvbmZpZy5uYW1lKS5lcnJvcnM/Lm1pbmxlbmd0aFwiPlxyXG4gICAge3tjb25maWcudmFsaWRhdG9yLm1pbmxlbmd0aC5tZXNzYWdlfX1cclxuICA8L21hdC1lcnJvcj5cclxuICA8IS0tIDxtYXQtZXJyb3IgKm5nSWY9XCJncm91cC5nZXQoY29uZmlnLm5hbWUpLmVtYWlsPy5taW5sZW5ndGhcIj5cclxuICAgIHt7Y29uZmlnLnZhbGlkYXRvci5lbWFpbC5tZXNzYWdlfX1cclxuICA8L21hdC1lcnJvcj4gLS0+XHJcblxyXG4gIDwhLS0gPGRpdiAqbmdJZj1cImZvcm0uZ2V0KGNvbmZpZy5uYW1lKS5pbnZhbGlkICYmIChmb3JtLmdldChjb25maWcubmFtZSkuZGlydHkgfHwgZm9ybS5nZXQoY29uZmlnLm5hbWUpLnRvdWNoZWQpXCIgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj5cclxuICA8L2Rpdj4gLS0+XHJcblxyXG48L2Rpdj5cclxuXHJcbjwhLS0gXHJcblxyXG48ZGl2IFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZmllbGQtd3JhcHBlclwiPlxyXG4gICAgICA8ZGl2IFtAZmlsZWRBbmltYXRpb25dPVwibW9kZVwiPlxyXG4gICAgICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImZpdFwiIFsobmdDbGFzcyldPVwibW9kZVwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgW21hdERhdGVwaWNrZXJdPVwiX2RhdGVwaWNrZXJcIiBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIiBbZm9ybUNvbnRyb2xOYW1lXT1cImNvbnRyb2xOYW1lXCI+XHJcbiAgICAgICAgICAgIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0U3VmZml4IFtmb3JdPVwiX2RhdGVwaWNrZXJcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cclxuICAgICAgICAgICAgPG1hdC1kYXRlcGlja2VyICNfZGF0ZXBpY2tlcj48L21hdC1kYXRlcGlja2VyPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIDxtYXQtaWNvbiBjbGFzcz1cInRvb2x0aXAgbWQtMThcIiAqbmdJZj1cInRvb2x0aXBcIiBbbWF0VG9vbHRpcF09XCJ0b29sdGlwXCI+aGVscDwvbWF0LWljb24+XHJcbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidmFsdWUtYm94XCI+IFxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYW1lXCI+XHJcbiAgICAgICAgICAgIHt7IHBsYWNlaG9sZGVyIH19IDpcclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmFsdWVcIj5cclxuICAgICAgICAgICAge3soRGlzcGxheVZhbHVlJCB8IGFzeW5jIHwgcGVyc2lhbkRhdGUpfX0gXHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+IC0tPmAsXHJcblx0c3R5bGVzOiBbYDpob3N0e2Rpc3BsYXk6YmxvY2t9Lm1hdC1mb3JtLWZpZWxke3dpZHRoOjEwMCV9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEZpbGVGb3JtSW5wdXRDb250cm9sQ29tcG9uZW50IGltcGxlbWVudHMgRmllbGQge1xyXG5cdGNvbmZpZzogRmllbGRDb25maWc7XHJcblx0Z3JvdXA6IEZvcm1Hcm91cDtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7fVxyXG59XHJcbiIsIlxyXG5leHBvcnQgY2xhc3MgQ2FwdGNoYU1vZGVsIHtcclxuXHRjYXB0Y2hhSW1nOiBzdHJpbmc7XHJcblx0Y2FwdGNoYUNvZGU6IHN0cmluZztcclxuXHRjb25zdHJ1Y3Rvcih7IGNhcHRjaGFJbWcsIGNhcHRjaGFDb2RlIH06IHsgY2FwdGNoYUltZz86IHN0cmluZzsgY2FwdGNoYUNvZGU/OiBzdHJpbmc7IH0gPSB7fSkge1xyXG5cdFx0dGhpcy5jYXB0Y2hhSW1nID0gYCR7Y2FwdGNoYUltZ30/JHtNYXRoLnJhbmRvbSgpfWA7XHJcblx0XHR0aGlzLmNhcHRjaGFDb2RlID0gY2FwdGNoYUNvZGUgfHwgXCJcIjtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgVXBzZXJ0Q2FwdGNoYUFwaU1vZGVsIHtcclxuXHRleHBvcnQgY2xhc3MgUmVxdWVzdCB7XHJcblx0XHRDYXB0Y2hhOiBDYXB0Y2hhTW9kZWw7XHJcblx0XHRjb25zdHJ1Y3Rvcihpbml0VmFsdWU6IFBhcnRpYWw8VXBzZXJ0Q2FwdGNoYUFwaU1vZGVsLlJlcXVlc3Q+ID0ge30pIHtcclxuXHRcdFx0T2JqZWN0LmtleXMoaW5pdFZhbHVlKS5mb3JFYWNoKGtleSA9PiAodGhpc1trZXldID0gaW5pdFZhbHVlW2tleV0pKTtcclxuXHRcdH1cclxuXHRcdGdldFJlcXVlc3RCb2R5KCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5DYXB0Y2hhLmNhcHRjaGFDb2RlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRleHBvcnQgY2xhc3MgUmVzcG9uc2Uge1xyXG5cdFx0UmVzdWx0OiBDYXB0Y2hhTW9kZWw7XHJcblx0XHRjb25zdHJ1Y3RvcigpIHsgfVxyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XHJcbmltcG9ydCB7IGZpbHRlciwgbWFwLCB0YWtlLCBzd2l0Y2hNYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbmltcG9ydCB7IHN0cmluZ1RlbXBsYXRlIH0gZnJvbSBcIkBzb3VzaGlhbnMvc2hhcmVkXCI7XHJcblxyXG5pbXBvcnQgeyBGb3JtU2NoZW1hTW9kZWwsIEFkZEZvcm1BcGlNb2RlbCwgRWRpdEZvcm1BcGlNb2RlbCwgRm9ybUxpc3RBcGlNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgRm9ybUNvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vZm9ybS1jb25maWd1cmF0aW9uLnNlcnZpY2VcIjtcclxuXHJcbmltcG9ydCB7IE1haW5Db250YWluZXJTdGF0ZSB9IGZyb20gXCIuLi9tYWluLWNvbnRhaW5lci9tYWluLWNvbnRhaW5lci5yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgeyBVcHNlcnRDYXB0Y2hhQXBpTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL2NhcHRjaGEubW9kZWxcIjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuXHRwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9ybUNhcHRjaGFTZXJ2aWNlIHtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPE1haW5Db250YWluZXJTdGF0ZT4sXHJcblx0XHRwcml2YXRlIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBGb3JtQ29uZmlndXJhdGlvblNlcnZpY2VcclxuXHQpIHsgfVxyXG5cclxuXHRnZXRDYXB0Y2hhKCk6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHRkZWJ1Z2dlcjtcclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25TZXJ2aWNlLmNvbmZpZyQucGlwZShcclxuXHRcdFx0ZmlsdGVyKChjYXB0Y2hhKSA9PiBjYXB0Y2hhLmVuZHBvaW50cy5nZXRDYXB0Y2hhICE9IFwiXCIpLFxyXG5cdFx0XHR0YWtlKDEpLFxyXG5cdFx0XHRzd2l0Y2hNYXAoKGNhcHRjaGEpID0+XHJcblx0XHRcdFx0dGhpcy5odHRwLmdldChjYXB0Y2hhLmVudi5zZXJ2ZXIgKyBjYXB0Y2hhLmVuZHBvaW50cy5nZXRDYXB0Y2hhKVxyXG5cdFx0XHQpLFxyXG5cdFx0XHRtYXAoKHJlc3BvbnNlOiBhbnkpID0+IHJlc3BvbnNlLlJlc3VsdCksXHJcblx0XHQpO1xyXG5cdH1cclxuXHRzZW5kQ2FwdGNoYSgpOiBPYnNlcnZhYmxlPEZvcm1TY2hlbWFNb2RlbFtdPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5jb25maWckLnBpcGUoXHJcblx0XHRcdGZpbHRlcigoY29uZmlnKSA9PiBjb25maWcuZW5kcG9pbnRzLmdldExpc3QgIT0gXCJcIiksXHJcblx0XHRcdHN3aXRjaE1hcCgoY29uZmlnKSA9PiB0aGlzLmh0dHAuZ2V0KGNvbmZpZy5lbnYuc2VydmVyICsgY29uZmlnLmVuZHBvaW50cy5nZXRMaXN0KSksXHJcblx0XHRcdG1hcCgocmVzcG9uc2U6IEZvcm1MaXN0QXBpTW9kZWwuUmVzcG9uc2UpID0+IHJlc3BvbnNlLlJlc3VsdClcclxuXHRcdCk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBGb3JtQXJyYXksIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IEZpZWxkQ29uZmlnIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVscy9maWVsZC1jb25maWcubW9kZWxcIjtcclxuaW1wb3J0IHsgRmllbGQgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL2ZpZWxkLmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBDYXB0Y2hhTW9kZWwgfSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL2NhcHRjaGEubW9kZWxcIjtcclxuaW1wb3J0IHsgRm9ybUNhcHRjaGFTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL2Zvcm0tY2FwdGNoYS5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJsaWItZm9ybS1jYXB0Y2hhXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2PlxyXG4gIDxpbWcgW3NyY109XCJjYXB0Y2hhLmNhcHRjaGFJbWdcIiAvPlxyXG5cclxuICA8YnV0dG9uIChjbGljayk9XCJyZWZyZXNoKClcIj5yZWZyZXNoPC9idXR0b24+XHJcblxyXG4gIDxkaXYgW2Zvcm1Hcm91cF09XCJncm91cFwiPlxyXG4gICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleD5cclxuICAgICAgPGlucHV0IG1hdElucHV0IFtpZF09XCJjb25maWcubmFtZVwiIFtwbGFjZWhvbGRlcl09XCJjb25maWcudGl0bGVcIiBbZm9ybUNvbnRyb2xOYW1lXT1cImNvbmZpZy5uYW1lXCIgLz5cclxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PmBcclxufSlcclxuZXhwb3J0IGNsYXNzIEZvcm1DYXB0Y2hhQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBGaWVsZCB7XHJcblx0Y29uZmlnOiBGaWVsZENvbmZpZztcclxuXHRncm91cDogRm9ybUdyb3VwO1xyXG5cclxuXHRjYXB0Y2hhOiBDYXB0Y2hhTW9kZWw7XHJcblx0Y2FwdGNoYVNyYzogc3RyaW5nO1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTogRm9ybUNhcHRjaGFTZXJ2aWNlLCBwcml2YXRlIHN0b3JlOiBTdG9yZTxhbnk+KSB7XHJcblx0XHR0aGlzLmNhcHRjaGEgPSBuZXcgQ2FwdGNoYU1vZGVsKHtcclxuXHRcdFx0Y2FwdGNoYUltZzogXCJodHRwOi8vMTcyLjIyLjM0LjI4OjgwMDEvYXBpL2F1dGhlbnRpY2F0aW9uL2NhcHRjaGFcIlxyXG5cdFx0fSk7XHJcblx0XHQvLyB0aGlzLmNhcHRjaGEgPSBuZXcgQ2FwdGNoYU1vZGVsO1xyXG5cdH1cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdGRlYnVnZ2VyO1xyXG5cdFx0Ly8gdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgR2V0Q2FwdGNoYUFjdGlvbigpKTtcclxuXHR9XHJcblx0cmVmcmVzaCgpIHtcclxuXHRcdHRoaXMuY2FwdGNoYS5jYXB0Y2hhSW1nID0gYGh0dHA6Ly8xNzIuMjIuMzQuMjg6ODAwMS9hcGkvYXV0aGVudGljYXRpb24vY2FwdGNoYT8ke01hdGgucmFuZG9tKCl9YDtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuXHRDb21wb25lbnQsXHJcblx0T25Jbml0LFxyXG5cdFZpZXdDaGlsZCxcclxuXHRWaWV3Q29udGFpbmVyUmVmLFxyXG5cdENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuXHRDb21waWxlcixcclxuXHRSZWZsZWN0aXZlSW5qZWN0b3IsXHJcblx0TmdNb2R1bGUsXHJcblx0SW5wdXQsXHJcblx0T3V0cHV0LFxyXG5cdEV2ZW50RW1pdHRlcixcclxuXHRPbkNoYW5nZXMsXHJcblx0RGlyZWN0aXZlLFxyXG5cdFR5cGUsXHJcblx0T25EZXN0cm95XHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgRm9ybUFycmF5LCBBYnN0cmFjdENvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmUvc3JjL2xpbmtlci9jb21wb25lbnRfZmFjdG9yeVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHtcclxuXHRTZWxlY3RDb21wb25lbnQsXHJcblx0RW1haWxDb21wb25lbnQsXHJcblx0Q29sb3JDb21wb25lbnQsXHJcblx0Q2hlY2tib3hDb21wb25lbnQsXHJcblx0VGV4dENvbXBvbmVudCxcclxuXHRUYWJsZUNvbXBvbmVudFxyXG59IGZyb20gXCIuLi9mb3JtLWNvbnRyb2xzXCI7XHJcbmltcG9ydCB7IEZvcm1TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2Zvcm0uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBNYWluQ29udGFpbmVyU3RhdGUgfSBmcm9tIFwiLi4vLi4vbWFpbi1jb250YWluZXIvbWFpbi1jb250YWluZXIucmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgR2V0Rm9ybVNjaGVtYUFjdGlvbiB9IGZyb20gXCIuLi8uLi9saXN0L2xpc3QuYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBGaWVsZCwgRmllbGRDb25maWcsIEZvcm1TY2hlbWFNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgRGF0ZUZvcm1JbnB1dENvbnRyb2xDb21wb25lbnQgfSBmcm9tIFwiLi4vZm9ybS1jb250cm9scy9kYXRlL2RhdGUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEZpbGVGb3JtSW5wdXRDb250cm9sQ29tcG9uZW50IH0gZnJvbSBcIi4uL2Zvcm0tY29udHJvbHMvZmlsZS9maWxlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBGb3JtQ2FwdGNoYUNvbXBvbmVudCB9IGZyb20gXCIuLi9mb3JtLWNvbnRyb2xzL2Zvcm0tY2FwdGNoYS9mb3JtLWNhcHRjaGEuY29tcG9uZW50XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJuZ3MtZm9ybS12aWV3XCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4RmxleD1cIjEwMFwiIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCI+XHJcbiAgPGZvcm0gKm5nSWY9XCJmb3JtR3JvdXBDcmVhdGVkICYmIGNhcmRcIiBjbGFzcz1cIm5ncy1keW5hbWljLWZvcm1cIiBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cFwiIChuZ1N1Ym1pdCk9XCJhY2NlcHRlZCgpXCI+XHJcbiAgICA8bWF0LWNhcmQ+XHJcbiAgICAgIDxtYXQtY2FyZC10aXRsZT5cclxuICAgICAgICB7eyhzY2hlbWEkIHwgYXN5bmMpPy5uYW1lfX1cclxuICAgICAgPC9tYXQtY2FyZC10aXRsZT5cclxuICAgICAgPG1hdC1jYXJkLWNvbnRlbnQgZnhMYXlvdXQ9XCJyb3cgd3JhcFwiIGZ4TGF5b3V0R2FwPVwiMjVweFwiPlxyXG4gICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGZpZWxkIG9mIChzY2hlbWEkIHwgYXN5bmMpPy5mb3JtLmZpZWxkcztcIiBbZnhGbGV4XT1cImZpZWxkLndpZHRoICogMTBcIj5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmaWVsZCAmJiBmaWVsZC5pbnB1dFR5cGVcIiBkeW5hbWljRmllbGQgW2NvbmZpZ109XCJmaWVsZFwiIFtncm91cF09XCJmb3JtR3JvdXBcIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tYXQtY2FyZC1jb250ZW50PlxyXG4gICAgICA8bWF0LWNhcmQtYWN0aW9ucyBhbGlnbj1cImVuZFwiPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiICpuZ0lmPVwiKHNjaGVtYSQgfCBhc3luYyk/LmV2ZW50cy5jYW5jZWwuc2hvd1wiIChjbGljayk9XCJjYW5jZWwuZW1pdCgpXCIgbWF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIj57eyhzY2hlbWEkXHJcbiAgICAgICAgICB8IGFzeW5jKT8uZXZlbnRzLmNhbmNlbC50ZXh0fX08L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiAqbmdJZj1cIihzY2hlbWEkIHwgYXN5bmMpPy5ldmVudHMuYWNjZXB0LnNob3dcIiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIj57eyhzY2hlbWEkXHJcbiAgICAgICAgICB8IGFzeW5jKT8uZXZlbnRzLmFjY2VwdC50ZXh0fX08L2J1dHRvbj5cclxuICAgICAgPC9tYXQtY2FyZC1hY3Rpb25zPlxyXG4gICAgPC9tYXQtY2FyZD5cclxuICA8L2Zvcm0+XHJcbiAgPGZvcm0gKm5nSWY9XCJmb3JtR3JvdXBDcmVhdGVkICYmICFjYXJkXCIgY2xhc3M9XCJuZ3MtZHluYW1pYy1mb3JtXCIgW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIiAobmdTdWJtaXQpPVwiYWNjZXB0ZWQoKVwiPlxyXG4gICAgPGRpdj5cclxuICAgICAgPGgzPlxyXG4gICAgICAgIHt7KHNjaGVtYSQgfCBhc3luYyk/Lm5hbWV9fVxyXG4gICAgICA8L2gzPlxyXG4gICAgICA8ZGl2IGZ4TGF5b3V0PVwicm93IHdyYXBcIiBmeExheW91dEdhcD1cIjVweFwiPlxyXG4gICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGZpZWxkIG9mIChzY2hlbWEkIHwgYXN5bmMpPy5mb3JtLmZpZWxkcztcIiBbZnhGbGV4XT1cImZpZWxkLndpZHRoICogMTBcIj5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgZHluYW1pY0ZpZWxkIFtjb25maWddPVwiZmllbGRcIiBbZ3JvdXBdPVwiZm9ybUdyb3VwXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiICpuZ0lmPVwiKHNjaGVtYSQgfCBhc3luYyk/LmV2ZW50cy5jYW5jZWwuc2hvd1wiIChjbGljayk9XCJjYW5jZWwuZW1pdCgpXCIgbWF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIj57eyhzY2hlbWEkXHJcbiAgICAgICAgICB8IGFzeW5jKT8uZXZlbnRzLmNhbmNlbC50ZXh0fX08L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiAqbmdJZj1cIihzY2hlbWEkIHwgYXN5bmMpPy5ldmVudHMuYWNjZXB0LnNob3dcIiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIj57eyhzY2hlbWEkXHJcbiAgICAgICAgICB8IGFzeW5jKT8uZXZlbnRzLmFjY2VwdC50ZXh0fX08L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Zvcm0+XHJcblxyXG48L2Rpdj5gLFxyXG5cdHN0eWxlczogW2BgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9ybVZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG5cdHVuc3Vic2NyaWJlID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuXHRAT3V0cHV0KCkgYWNjZXB0ID0gbmV3IEV2ZW50RW1pdHRlcjxGb3JtR3JvdXA+KCk7XHJcblx0QE91dHB1dCgpIGNhbmNlbCA9IG5ldyBFdmVudEVtaXR0ZXI8Rm9ybUdyb3VwPigpO1xyXG5cdEBJbnB1dCgpIGxvY2FsO1xyXG5cdEBJbnB1dCgpIGNhcmQgPSBmYWxzZTtcclxuXHRASW5wdXQoKVxyXG5cdHNldCBpZChpZDogc3RyaW5nKSB7XHJcblx0XHRpZiAoIXRoaXMubG9jYWwpIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEdldEZvcm1TY2hlbWFBY3Rpb24oaWQpKTtcclxuXHRcdHRoaXMuc2VydmljZVxyXG5cdFx0XHQuc2VsZWN0Rm9ybUJ5SWQoaWQpXHJcblx0XHRcdC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlKSlcclxuXHRcdFx0LnN1YnNjcmliZShzY2hlbWEgPT4gdGhpcy5zY2hlbWEkLm5leHQoc2NoZW1hKSk7XHJcblx0fVxyXG5cdEBJbnB1dCgpXHJcblx0c2V0IHNjaGVtYShzY2hlbWE6IEZvcm1TY2hlbWFNb2RlbCkge1xyXG5cdFx0dGhpcy5zY2hlbWEkLm5leHQoc2NoZW1hKTtcclxuXHR9XHJcblx0X2lkOiBzdHJpbmc7XHJcblx0Zm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcblx0Zm9ybUdyb3VwQ3JlYXRlZCA9IGZhbHNlO1xyXG5cdHNjaGVtYSQ6IEJlaGF2aW9yU3ViamVjdDxGb3JtU2NoZW1hTW9kZWw+O1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgc2VydmljZTogRm9ybVNlcnZpY2UsXHJcblx0XHRwcml2YXRlIGNvbXBpbGVyOiBDb21waWxlcixcclxuXHRcdHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPE1haW5Db250YWluZXJTdGF0ZT5cclxuXHQpIHtcclxuXHRcdHRoaXMuc2NoZW1hJCA9IG5ldyBCZWhhdmlvclN1YmplY3QodW5kZWZpbmVkKTtcclxuXHRcdHRoaXMuc2NoZW1hJC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlKSkuc3Vic2NyaWJlKHNjaGVtYSA9PiB7XHJcblx0XHRcdGlmICghc2NoZW1hKSByZXR1cm47XHJcblx0XHRcdHRoaXMuZm9ybUdyb3VwID0gdGhpcy5jcmVhdGVGcm9tKHNjaGVtYS5mb3JtKSBhcyBGb3JtR3JvdXA7XHJcblx0XHRcdGlmICghc2NoZW1hLmZvcm0ubmFtZSkgcmV0dXJuO1xyXG5cdFx0XHR0aGlzLmZvcm1Hcm91cENyZWF0ZWQgPSB0cnVlO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdG5nT25EZXN0cm95KCkge1xyXG5cdFx0dGhpcy51bnN1YnNjcmliZS5uZXh0KCk7XHJcblx0XHR0aGlzLnVuc3Vic2NyaWJlLmNvbXBsZXRlKCk7XHJcblx0fVxyXG5cdGdlbmVyYXRlKHNjaGVtYTogRm9ybVNjaGVtYU1vZGVsKSB7XHJcblx0XHR0aGlzLnNjaGVtYSQubmV4dChzY2hlbWEpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlRnJvbShkYXRhOiBGaWVsZENvbmZpZywgcGFyZW50UGF0aCA9IFwiXCIpOiBBYnN0cmFjdENvbnRyb2wge1xyXG5cdFx0aWYgKGRhdGEudHlwZSA9PSBcImNvbnRyb2xcIikge1xyXG5cdFx0XHRsZXQgZm9ybUdyb3VwUGF0aDtcclxuXHRcdFx0aWYgKGRhdGEucGFyZW50VHlwZSA9PSBcImFycmF5XCIpIHtcclxuXHRcdFx0XHQvLyBwYXJlbnRQYXRoID0gYCR7cGFyZW50UGF0aH0uY29udHJvbHNbJHsoZGF0YSBhcyBGaWVsZENvbmZpZykubmFtZX1dYDtcclxuXHRcdFx0fSBlbHNlIGlmIChkYXRhLnBhcmVudFR5cGUgPT0gXCJncm91cFwiKSB7XHJcblx0XHRcdFx0Zm9ybUdyb3VwUGF0aCA9IHBhcmVudFBhdGg7XHJcblx0XHRcdFx0cGFyZW50UGF0aCA9IGAke3BhcmVudFBhdGh9LmNvbnRyb2xzLiR7KGRhdGEgYXMgRmllbGRDb25maWcpLm5hbWV9YDtcclxuXHRcdFx0fVxyXG5cdFx0XHRjb25zdCB2YWxpZGF0b3JzID0gW107XHJcblx0XHRcdGlmIChkYXRhLnZhbGlkYXRvci5yZXF1aXJlZCAmJiBkYXRhLnZhbGlkYXRvci5yZXF1aXJlZC5hY3RpdmUpIHtcclxuXHRcdFx0XHR2YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5yZXF1aXJlZCk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKGRhdGEudmFsaWRhdG9yLm1pbmxlbmd0aCAmJiBkYXRhLnZhbGlkYXRvci5taW5sZW5ndGguYWN0aXZlKSB7XHJcblx0XHRcdFx0dmFsaWRhdG9ycy5wdXNoKFZhbGlkYXRvcnMubWluTGVuZ3RoKGRhdGEudmFsaWRhdG9yLm1pbmxlbmd0aC52YWx1ZSkpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChkYXRhLnZhbGlkYXRvci5lbWFpbCAmJiBkYXRhLnZhbGlkYXRvci5lbWFpbC5hY3RpdmUpIHtcclxuXHRcdFx0XHR2YWxpZGF0b3JzLnB1c2goVmFsaWRhdG9ycy5lbWFpbCk7XHJcblx0XHRcdH1cclxuXHRcdFx0Y29uc3QgY3RyID0gbmV3IEZvcm1Db250cm9sKGRhdGEudmFsdWUsIHZhbGlkYXRvcnMpO1xyXG5cdFx0XHQoY3RyIGFzIGFueSkuc2NoZW1hID0gZGF0YTtcclxuXHRcdFx0KGN0ciBhcyBhbnkpLnNjaGVtYS5wYXRoID0gcGFyZW50UGF0aDtcclxuXHRcdFx0KGN0ciBhcyBhbnkpLnNjaGVtYS5mb3JtR3JvdXBQYXRoID0gZm9ybUdyb3VwUGF0aDtcclxuXHRcdFx0cmV0dXJuIGN0cjtcclxuXHRcdH0gZWxzZSBpZiAoZGF0YS50eXBlID09IFwiZ3JvdXBcIikge1xyXG5cdFx0XHRjb25zdCBmb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKHt9KTtcclxuXHRcdFx0aWYgKGRhdGEucGFyZW50VHlwZSA9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRwYXJlbnRQYXRoID0gKGRhdGEgYXMgRmllbGRDb25maWcpLm5hbWU7XHJcblx0XHRcdH0gZWxzZSBpZiAoZGF0YS5wYXJlbnRUeXBlID09IFwiYXJyYXlcIikge1xyXG5cdFx0XHRcdHBhcmVudFBhdGggPSBgJHtwYXJlbnRQYXRofS5jb250cm9sc1skeyhkYXRhIGFzIEZpZWxkQ29uZmlnKS5uYW1lfV1gO1xyXG5cdFx0XHR9IGVsc2UgaWYgKGRhdGEucGFyZW50VHlwZSA9PSBcImdyb3VwXCIpIHtcclxuXHRcdFx0XHRwYXJlbnRQYXRoID0gYCR7cGFyZW50UGF0aH0uY29udHJvbHMuJHsoZGF0YSBhcyBGaWVsZENvbmZpZykubmFtZX1gO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQoZm9ybUdyb3VwIGFzIGFueSkuc2NoZW1hID0gZGF0YTtcclxuXHRcdFx0KGZvcm1Hcm91cCBhcyBhbnkpLnNjaGVtYS5wYXRoID0gcGFyZW50UGF0aDtcclxuXHRcdFx0ZGF0YS5maWVsZHMuZm9yRWFjaChpdGVtID0+IHtcclxuXHRcdFx0XHRpdGVtLnBhcmVudFR5cGUgPSBcImdyb3VwXCI7XHJcblx0XHRcdFx0Zm9ybUdyb3VwLmFkZENvbnRyb2woaXRlbS5uYW1lLCB0aGlzLmNyZWF0ZUZyb20oaXRlbSwgcGFyZW50UGF0aCkpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0cmV0dXJuIGZvcm1Hcm91cDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNvbnN0IGZvcm1BcnJheTogRm9ybUFycmF5ID0gbmV3IEZvcm1BcnJheShbXSk7XHJcblx0XHRcdHBhcmVudFBhdGggPVxyXG5cdFx0XHRcdHBhcmVudFBhdGggPT0gXCJcIiA/IChkYXRhIGFzIEZpZWxkQ29uZmlnKS5uYW1lIDogYCR7cGFyZW50UGF0aH0uY29udHJvbHMuJHsoZGF0YSBhcyBGaWVsZENvbmZpZykubmFtZX1gO1xyXG5cdFx0XHQoZm9ybUFycmF5IGFzIGFueSkuc2NoZW1hID0gZGF0YTtcclxuXHRcdFx0KGZvcm1BcnJheSBhcyBhbnkpLnNjaGVtYS5wYXRoID0gcGFyZW50UGF0aDtcclxuXHRcdFx0ZGF0YS5maWVsZHMuZm9yRWFjaCgoaXRlbSwgaWR4KSA9PiB7XHJcblx0XHRcdFx0aXRlbS5wYXJlbnRUeXBlID0gXCJhcnJheVwiO1xyXG5cdFx0XHRcdGl0ZW0ubmFtZSA9IGlkeC50b1N0cmluZygpO1xyXG5cdFx0XHRcdGZvcm1BcnJheS5jb250cm9scy5wdXNoKHRoaXMuY3JlYXRlRnJvbShpdGVtLCBwYXJlbnRQYXRoKSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRyZXR1cm4gZm9ybUFycmF5O1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0YWNjZXB0ZWQoKSB7XHJcblx0XHR0aGlzLmFjY2VwdC5lbWl0KHRoaXMuZm9ybUdyb3VwKTtcclxuXHR9XHJcblx0Y2FuY2VsZWQoKSB7XHJcblx0XHR0aGlzLmNhbmNlbC5lbWl0KHRoaXMuZm9ybUdyb3VwKTtcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IGNvbXBvbmVudHM6IHsgW3R5cGU6IHN0cmluZ106IFR5cGU8RmllbGQ+IH0gPSB7XHJcblx0Y2hlY2tib3g6IENoZWNrYm94Q29tcG9uZW50LFxyXG5cdHRleHQ6IFRleHRDb21wb25lbnQsXHJcblx0cGFzc3dvcmQ6IFRleHRDb21wb25lbnQsXHJcblx0ZGF0ZTogRGF0ZUZvcm1JbnB1dENvbnRyb2xDb21wb25lbnQsXHJcblx0ZmlsZTogRmlsZUZvcm1JbnB1dENvbnRyb2xDb21wb25lbnQsXHJcblx0dGFibGU6IFRhYmxlQ29tcG9uZW50LFxyXG5cdGNvbG9yOiBDb2xvckNvbXBvbmVudCxcclxuXHRlbWFpbDogRW1haWxDb21wb25lbnQsXHJcblx0Y2FwdGNoYTogRm9ybUNhcHRjaGFDb21wb25lbnQsXHJcblx0c2VsZWN0OiBTZWxlY3RDb21wb25lbnRcclxufTtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG5cdHNlbGVjdG9yOiBcIltkeW5hbWljRmllbGRdXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIER5bmFtaWNGaWVsZERpcmVjdGl2ZSBpbXBsZW1lbnRzIEZpZWxkLCBPbkNoYW5nZXMsIE9uSW5pdCB7XHJcblx0QElucHV0KCkgY29uZmlnOiBGaWVsZENvbmZpZztcclxuXHJcblx0QElucHV0KCkgZ3JvdXA6IEZvcm1Hcm91cDtcclxuXHJcblx0Y29tcG9uZW50OiBDb21wb25lbnRSZWY8RmllbGQ+O1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIHByaXZhdGUgY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmKSB7fVxyXG5cclxuXHRuZ09uQ2hhbmdlcygpIHtcclxuXHRcdGRlYnVnZ2VyO1xyXG5cdFx0aWYgKHRoaXMuY29tcG9uZW50KSB7XHJcblx0XHRcdHRoaXMuY29tcG9uZW50Lmluc3RhbmNlLmNvbmZpZyA9IHRoaXMuY29uZmlnO1xyXG5cdFx0XHR0aGlzLmNvbXBvbmVudC5pbnN0YW5jZS5ncm91cCA9IHRoaXMuZ3JvdXA7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdGRlYnVnZ2VyO1xyXG5cdFx0aWYgKHRoaXMuY29uZmlnLmlucHV0VHlwZSA9PSB1bmRlZmluZWQpIHJldHVybjtcclxuXHRcdGlmICghY29tcG9uZW50c1t0aGlzLmNvbmZpZy5pbnB1dFR5cGVdKSB7XHJcblx0XHRcdGNvbnN0IHN1cHBvcnRlZFR5cGVzID0gT2JqZWN0LmtleXMoY29tcG9uZW50cykuam9pbihcIiwgXCIpO1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXHJcblx0XHRcdFx0YFRyeWluZyB0byB1c2UgYW4gdW5zdXBwb3J0ZWQgdHlwZSAoJHt0aGlzLmNvbmZpZy5pbnB1dFR5cGV9KS5cclxuXHRcdCAgU3VwcG9ydGVkIHR5cGVzOiAke3N1cHBvcnRlZFR5cGVzfWBcclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHRcdGNvbnN0IGNvbXBvbmVudCA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3Rvcnk8RmllbGQ+KGNvbXBvbmVudHNbdGhpcy5jb25maWcuaW5wdXRUeXBlXSk7XHJcblx0XHR0aGlzLmNvbXBvbmVudCA9IHRoaXMuY29udGFpbmVyLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnQpO1xyXG5cdFx0dGhpcy5jb21wb25lbnQuaW5zdGFuY2UuY29uZmlnID0gdGhpcy5jb25maWc7XHJcblx0XHR0aGlzLmNvbXBvbmVudC5pbnN0YW5jZS5ncm91cCA9IHRoaXMuZ3JvdXA7XHJcblx0fVxyXG59XHJcbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgcmVzcG9uc2VTdGF0dXNUeXBlcyB9IGZyb20gXCJAc291c2hpYW5zL3NoYXJlZFwiO1xyXG5pbXBvcnQgeyBGb3JtU2NoZW1hTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IEZvcm1zTGlzdEFjdGlvblR5cGVzLCBGb3Jtc0xpc3RBY3Rpb25zIH0gZnJvbSBcIi4vbGlzdC5hY3Rpb25zXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcclxuXHRzdGF0dXM6IHJlc3BvbnNlU3RhdHVzVHlwZXM7XHJcblx0ZGF0YTogRm9ybVNjaGVtYU1vZGVsW107XHJcbn1cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogU3RhdGUgPSB7XHJcblx0c3RhdHVzOiBcInByaXN0aW5lXCIsXHJcblx0ZGF0YTogW11cclxufTtcclxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogRm9ybXNMaXN0QWN0aW9ucyk6IFN0YXRlIHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIEZvcm1zTGlzdEFjdGlvblR5cGVzLkZPUk1TX0xJU1Q6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRzdGF0dXM6IFwiZGlydHlcIlxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBGb3Jtc0xpc3RBY3Rpb25UeXBlcy5GT1JNU19MSVNUX1NUQVJUOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c3RhdHVzOiBcInBlbmRpbmdcIlxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBGb3Jtc0xpc3RBY3Rpb25UeXBlcy5GT1JNU19MSVNUX1NVQ0NFRUQ6IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRkYXRhOiBhY3Rpb24ucGF5bG9hZCxcclxuXHRcdFx0XHRzdGF0dXM6IFwic3VjY2VlZFwiXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIEZvcm1zTGlzdEFjdGlvblR5cGVzLkZPUk1TX0xJU1RfRkFJTEVEOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0c3RhdHVzOiBcImZhaWxlZFwiXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRjYXNlIEZvcm1zTGlzdEFjdGlvblR5cGVzLkZPUk1fU0NIRU1BX1VQREFURToge1xyXG5cdFx0XHRjb25zdCBkYXRhID0gc3RhdGUuZGF0YS5jb25jYXQoKTtcclxuXHRcdFx0dmFyIGVudGl0eUlkeCA9IHN0YXRlLmRhdGEuZmluZEluZGV4KGZvcm0gPT4gZm9ybS5faWQgPT0gYWN0aW9uLnBheWxvYWQuX2lkKTtcclxuXHRcdFx0aWYgKGVudGl0eUlkeCA+IC0xKSB7XHJcblx0XHRcdFx0ZGF0YVtlbnRpdHlJZHhdID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YVtlbnRpdHlJZHhdLCBhY3Rpb24ucGF5bG9hZCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0ZGF0YS5wdXNoKGFjdGlvbi5wYXlsb2FkKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGRhdGE6IGRhdGFcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdGNhc2UgRm9ybXNMaXN0QWN0aW9uVHlwZXMuQUREX0ZPUk1fU0NIRU1BOiB7XHJcblx0XHRcdGNvbnN0IGRhdGEgPSBzdGF0ZS5kYXRhLmNvbmNhdCgpO1xyXG5cdFx0XHR2YXIgZW50aXR5SWR4ID0gc3RhdGUuZGF0YS5maW5kSW5kZXgoZm9ybSA9PiBmb3JtLl9pZCA9PSBhY3Rpb24ucGF5bG9hZC5faWQpO1xyXG5cdFx0XHRpZiAoZW50aXR5SWR4ID4gLTEpIHtcclxuXHRcdFx0XHRkYXRhW2VudGl0eUlkeF0gPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhW2VudGl0eUlkeF0sIGFjdGlvbi5wYXlsb2FkKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRkYXRhLnB1c2goYWN0aW9uLnBheWxvYWQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZGF0YTogZGF0YVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSBGb3Jtc0xpc3RBY3Rpb25UeXBlcy5GT1JNX1NDSEVNQV9GRVRDSEVEOiB7XHJcblx0XHRcdGNvbnN0IGRhdGEgPSBzdGF0ZS5kYXRhLmNvbmNhdCgpO1xyXG5cdFx0XHR2YXIgZW50aXR5SWR4ID0gc3RhdGUuZGF0YS5maW5kSW5kZXgoZm9ybSA9PiBmb3JtLl9pZCA9PSBhY3Rpb24ucGF5bG9hZC5faWQpO1xyXG5cdFx0XHRpZiAoZW50aXR5SWR4ID4gLTEpIHtcclxuXHRcdFx0XHRkYXRhW2VudGl0eUlkeF0gPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhW2VudGl0eUlkeF0sIGFjdGlvbi5wYXlsb2FkKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRkYXRhLnB1c2goYWN0aW9uLnBheWxvYWQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0ZGF0YTogZGF0YVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cclxuXHRcdGRlZmF1bHQ6IHtcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBnZXRTdGF0dXMgPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5zdGF0dXM7XHJcbiIsImltcG9ydCAqIGFzIGxpc3QgZnJvbSBcIi4uL2xpc3QvbGlzdC5yZWR1Y2Vyc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGb3JtU3RhdGUge1xyXG5cdGxpc3Q6IGxpc3QuU3RhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBGb3JtUmVkdWNlcnMgPSB7XHJcblx0bGlzdDogbGlzdC5yZWR1Y2VyXHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1haW5Db250YWluZXJTdGF0ZSB7XHJcblx0XCJmb3JtXCI6IEZvcm1TdGF0ZTtcclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZpZWxkQ29uZmlnIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiYXBwLWZvcm0tZ3JvdXBcIixcclxuXHR0ZW1wbGF0ZTogYDxkaXY+XHJcblxyXG4gIDxtYXQtZm9ybS1maWVsZCAqbmdJZj1cIiFub0hlYWRlclwiPlxyXG4gICAgPGlucHV0IG1hdElucHV0IFsobmdNb2RlbCldPVwic2NoZW1hLm5hbWVcIiBwbGFjZWhvbGRlcj1cIk5hbWVcIj5cclxuICA8L21hdC1mb3JtLWZpZWxkPlxyXG5cclxuICA8bWF0LWZvcm0tZmllbGQgKm5nSWY9XCIhbm9IZWFkZXJcIj5cclxuICAgIDxpbnB1dCBtYXRJbnB1dCBbKG5nTW9kZWwpXT1cInNjaGVtYS50aXRsZVwiIHBsYWNlaG9sZGVyPVwiw5jCucOZwobDmcKIw5jCp8OZwoZcIj5cclxuICA8L21hdC1mb3JtLWZpZWxkPlxyXG5cclxuICA8ZGl2IGNsYXNzPVwiYnV0dG9uLXJvd1wiPlxyXG4gICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJhZGRGb3JtR3JvdXAoc2NoZW1hKVwiPiBhZGRGb3JtR3JvdXAgPC9idXR0b24+XHJcbiAgICA8YnV0dG9uIG1hdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cImFkZEZvcm1BcnJheShzY2hlbWEpXCI+IGFkZEZvcm1BcnJheSA8L2J1dHRvbj5cclxuICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwiYWRkRm9ybUNvbnRyb2woc2NoZW1hKVwiPmFkZEZvcm1Db250cm9sPC9idXR0b24+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDxkaXYgKm5nRm9yPVwibGV0IGZpZWxkIG9mIHNjaGVtYS5maWVsZHM7bGV0IGkgPSBpbmRleFwiPlxyXG4gICAgPGRpdiBbbmdTd2l0Y2hdPVwiZmllbGQudHlwZVwiPlxyXG4gICAgICA8YXBwLWZvcm0tZ3JvdXAgKm5nU3dpdGNoQ2FzZT1cIidncm91cCdcIiBbc2NoZW1hXT1cImZpZWxkXCIgKGNoYW5nZSk9XCJjaGFuZ2VkKClcIj48L2FwcC1mb3JtLWdyb3VwPlxyXG4gICAgICA8IS0tIDxhcHAtZm9ybS1hcnJheSAqbmdTd2l0Y2hDYXNlPVwiJ2FycmF5J1wiIFtzY2hlbWFdPVwiZmllbGRcIiAoY2hhbmdlKT1cImNoYW5nZWQoKVwiPjwvYXBwLWZvcm0tYXJyYXk+IC0tPlxyXG4gICAgICA8YXBwLWZvcm0tY29udHJvbCAqbmdTd2l0Y2hDYXNlPVwiJ2NvbnRyb2wnXCIgW3NjaGVtYV09XCJmaWVsZFwiIChjaGFuZ2VzKT1cImNoYW5nZWQoKVwiIChkZWxldGUpPVwiZGVsZXRlRm9ybUdyb3VwKGkpXCI+PC9hcHAtZm9ybS1jb250cm9sPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PmBcclxufSlcclxuZXhwb3J0IGNsYXNzIEZvcm1Hcm91cENvbXBvbmVudCB7XHJcblx0QElucHV0KCkgc2NoZW1hOiBGaWVsZENvbmZpZztcclxuXHRASW5wdXQoKSBub0hlYWRlcjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cdEBPdXRwdXQoKSBjaGFuZ2VzID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBPdXRwdXQoKSBkZWxldGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0Y29uc3RydWN0b3IoKSB7fVxyXG5cclxuXHRjaGFuZ2VkKCkge1xyXG5cdFx0dGhpcy5jaGFuZ2VzLmVtaXQoKTtcclxuXHR9XHJcblxyXG5cdGFkZEZvcm1Hcm91cChyb290OiBGaWVsZENvbmZpZykge1xyXG5cdFx0Y29uc3QgZ3JvdXAgPSBuZXcgRmllbGRDb25maWcoXCJncm91cFwiKTtcclxuXHRcdGdyb3VwLmZpZWxkcyA9IFtdO1xyXG5cdFx0cm9vdC5maWVsZHMucHVzaChncm91cCk7XHJcblx0XHR0aGlzLnNjaGVtYS5pZCA9IHRoaXMuc2NoZW1hLmlkICsgMTtcclxuXHRcdHJldHVybiBncm91cDtcclxuXHR9XHJcblx0YWRkRm9ybUFycmF5KHJvb3Q6IEZpZWxkQ29uZmlnKSB7XHJcblx0XHRjb25zdCBhcnJheSA9IG5ldyBGaWVsZENvbmZpZyhcImFycmF5XCIpO1xyXG5cdFx0YXJyYXkuZmllbGRzID0gW107XHJcblx0XHRyb290LmZpZWxkcy5wdXNoKGFycmF5KTtcclxuXHRcdHJldHVybiBhcnJheTtcclxuXHR9XHJcblx0YWRkRm9ybUNvbnRyb2wocm9vdDogRmllbGRDb25maWcpIHtcclxuXHRcdGNvbnN0IGNvbnRyb2wgPSBuZXcgRmllbGRDb25maWcoXCJjb250cm9sXCIpO1xyXG5cdFx0cm9vdC5maWVsZHMucHVzaChjb250cm9sKTtcclxuXHRcdHJldHVybiBjb250cm9sO1xyXG5cdH1cclxuXHRkZWxldGVGb3JtR3JvdXAoaWR4OiBudW1iZXIpIHtcclxuXHRcdHRoaXMuc2NoZW1hLmZpZWxkcy5zcGxpY2UoaWR4LCAxKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZpZWxkQ29uZmlnIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiYXBwLWZvcm0tYXJyYXlcIixcclxuXHR0ZW1wbGF0ZTogYDxtYXQtY2FyZD5cclxuICA8bWF0LWNhcmQtY29udGVudD5cclxuICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8aW5wdXQgbWF0SW5wdXQgWyhuZ01vZGVsKV09XCJzY2hlbWEubmFtZVwiIHBsYWNlaG9sZGVyPVwiTmFtZVwiPlxyXG4gICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgXHJcbiAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uLXJvd1wiPlxyXG4gICAgICA8YnV0dG9uIG1hdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cImFkZEZvcm1Hcm91cChzY2hlbWEpXCI+YWRkRm9ybUdyb3VwPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwiYWRkRm9ybUFycmF5KHNjaGVtYSlcIj5hZGRGb3JtQXJyYXk8L2J1dHRvbj5cclxuICAgICAgPCEtLSA8YnV0dG9uIG1hdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cImFkZEZvcm1Db250cm9sKHNjaGVtYSlcIj5hZGRGb3JtQ29udHJvbDwvYnV0dG9uPiAtLT5cclxuICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICA8ZGl2ICpuZ0Zvcj1cImxldCBmaWVsZCBvZiBzY2hlbWEuZmllbGRzXCI+XHJcbiAgICAgIDxkaXYgW25nU3dpdGNoXT1cImZpZWxkLnR5cGVcIj5cclxuICAgICAgICA8YXBwLWZvcm0tZ3JvdXAgKm5nU3dpdGNoQ2FzZT1cIidncm91cCdcIiBbc2NoZW1hXT1cImZpZWxkXCIgKGNoYW5nZXMpPVwiY2hhbmdlZCgpXCI+PC9hcHAtZm9ybS1ncm91cD5cclxuICAgICAgICA8YXBwLWZvcm0tYXJyYXkgKm5nU3dpdGNoQ2FzZT1cIidhcnJheSdcIiBbc2NoZW1hXT1cImZpZWxkXCIgKGNoYW5nZXMpPVwiY2hhbmdlZCgpXCI+PC9hcHAtZm9ybS1hcnJheT5cclxuICAgICAgICA8IS0tIDxhcHAtZm9ybS1jb250cm9sICpuZ1N3aXRjaENhc2U9XCInY29udHJvbCdcIiBbc2NoZW1hXT1cImZpZWxkXCIgKGNoYW5nZSk9XCJjaGFuZ2VkKCRldmVudClcIj48L2FwcC1mb3JtLWNvbnRyb2w+IC0tPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgPC9tYXQtY2FyZC1jb250ZW50PlxyXG48L21hdC1jYXJkPmBcclxufSlcclxuZXhwb3J0IGNsYXNzIEZvcm1BcnJheUNvbXBvbmVudCB7XHJcblx0QElucHV0KCkgc2NoZW1hOiBGaWVsZENvbmZpZztcclxuXHRAT3V0cHV0KCkgY2hhbmdlcyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG5cdGNoYW5nZWQoKSB7XHJcblx0XHR0aGlzLmNoYW5nZXMuZW1pdCgpO1xyXG5cdH1cclxuXHJcblx0YWRkRm9ybUdyb3VwKHJvb3Q6IEZpZWxkQ29uZmlnKSB7XHJcblx0XHRjb25zdCBncm91cCA9IG5ldyBGaWVsZENvbmZpZyhcImdyb3VwXCIpO1xyXG5cdFx0Z3JvdXAuZmllbGRzID0gW107XHJcblx0XHRyb290LmZpZWxkcy5wdXNoKGdyb3VwKTtcclxuXHRcdHJldHVybiBncm91cDtcclxuXHR9XHJcblx0YWRkRm9ybUFycmF5KHJvb3Q6IEZpZWxkQ29uZmlnKSB7XHJcblx0XHRjb25zdCBhcnJheSA9IG5ldyBGaWVsZENvbmZpZyhcImFycmF5XCIpO1xyXG5cdFx0YXJyYXkuZmllbGRzID0gW107XHJcblx0XHRyb290LmZpZWxkcy5wdXNoKGFycmF5KTtcclxuXHRcdHJldHVybiBhcnJheTtcclxuXHR9XHJcblx0YWRkRm9ybUNvbnRyb2wocm9vdDogRmllbGRDb25maWcpIHtcclxuXHRcdGNvbnN0IGNvbnRyb2wgPSBuZXcgRmllbGRDb25maWcoXCJjb250cm9sXCIpO1xyXG5cdFx0cm9vdC5maWVsZHMucHVzaChjb250cm9sKTtcclxuXHRcdHJldHVybiBjb250cm9sO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgRm9ybUFycmF5IH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEZpZWxkQ29uZmlnIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwiYXBwLWZvcm0tY29udHJvbFwiLFxyXG5cdHRlbXBsYXRlOiBgPG1hdC1leHBhbnNpb24tcGFuZWw+XHJcbiAgPG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyPlxyXG4gICAgPG1hdC1wYW5lbC10aXRsZSBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0QWxpZ249XCJzdGFydCBjZW50ZXJcIj5cclxuICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gKGNsaWNrKT1cImRlbGV0ZS5lbWl0KClcIj5cclxuICAgICAgICA8bWF0LWljb24gYXJpYS1sYWJlbD1cImljb24tYnV0dG9uXCI+ZGVsZXRlX2ZvcmV2ZXI8L21hdC1pY29uPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPHNwYW4+e3tzY2hlbWEubmFtZX19PC9zcGFuPlxyXG5cclxuICAgIDwvbWF0LXBhbmVsLXRpdGxlPlxyXG4gIDwvbWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI+XHJcbiAgPGRpdiBmeExheW91dD1cInJvdyB3cmFwXCIgZnhMYXlvdXRHYXA9XCIxMHB4XCI+XHJcbiAgICA8bWF0LWZvcm0tZmllbGQgZnhGbGV4PlxyXG4gICAgICA8aW5wdXQgbWF0SW5wdXQgWyhuZ01vZGVsKV09XCJzY2hlbWEubmFtZVwiIChjaGFuZ2UpPVwiY2hhbmdlZCgpXCIgcGxhY2Vob2xkZXI9XCJOYW1lXCI+XHJcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG5cclxuICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXg+XHJcbiAgICAgIDxpbnB1dCBtYXRJbnB1dCBbKG5nTW9kZWwpXT1cInNjaGVtYS50aXRsZVwiIChjaGFuZ2UpPVwiY2hhbmdlZCgpXCIgcGxhY2Vob2xkZXI9XCJQbGFjZWhvbGRlclwiIC8+XHJcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG5cclxuICAgIDxtYXQtZm9ybS1maWVsZCBmeEZsZXg+XHJcbiAgICAgIDxtYXQtc2VsZWN0IFsobmdNb2RlbCldPVwic2NoZW1hLmlucHV0VHlwZVwiIChjaGFuZ2UpPVwiY2hhbmdlZCgpXCIgcGxhY2Vob2xkZXI9XCJJbnB1dCBUeXBlXCI+XHJcbiAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJ0YWJsZVwiPnRhYmxlPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwic2VsZWN0XCI+c2VsZWN0PC9tYXQtb3B0aW9uPlxyXG4gICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwidGV4dFwiPnRleHQ8L21hdC1vcHRpb24+XHJcbiAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJudW1iZXJcIj5udW1iZXI8L21hdC1vcHRpb24+XHJcbiAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJlbWFpbFwiPmVtYWlsPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwiY29sb3JcIj5jb2xvcjwvbWF0LW9wdGlvbj5cclxuICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInJhZGlvXCI+cmFkaW88L21hdC1vcHRpb24+XHJcbiAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJjaGVja2JveFwiPmNoZWNrYm94PC9tYXQtb3B0aW9uPlxyXG4gICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwiY2hlY2tib3hcIj5jYXB0Y2hhPC9tYXQtb3B0aW9uPlxyXG4gICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgZnhMYXlvdXQ9XCJyb3cgd3JhcFwiIGZ4TGF5b3V0R2FwPVwiMTBweFwiPlxyXG4gICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleD5cclxuICAgICAgPGlucHV0IG1hdElucHV0IFsobmdNb2RlbCldPVwic2NoZW1hLnZhbHVlXCIgKGNoYW5nZSk9XCJjaGFuZ2VkKClcIiBwbGFjZWhvbGRlcj1cIlZhbHVlXCIgLz5cclxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcblxyXG4gICAgPG1hdC1mb3JtLWZpZWxkIGZ4RmxleD5cclxuICAgICAgPG1hdC1zZWxlY3QgWyhuZ01vZGVsKV09XCJzY2hlbWEud2lkdGhcIiAoY2hhbmdlKT1cImNoYW5nZWQoKVwiIHBsYWNlaG9sZGVyPVwid2lkdGhcIj5cclxuICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiB3aWR0aFwiIFt2YWx1ZV09XCJpdGVtXCI+e3tpdGVtfX08L21hdC1vcHRpb24+XHJcbiAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBmeExheW91dD1cImNvbHVtblwiIGZ4TGF5b3V0R2FwPVwiMTBweFwiPlxyXG4gICAgPGRpdiAqbmdJZj1cInNjaGVtYS5pbnB1dFR5cGU9PSd0YWJsZSdcIiBbZm9ybUdyb3VwXT1cInRhYmxlT3B0aW9uc1wiPlxyXG4gICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPGlucHV0IG1hdElucHV0IChjaGFuZ2UpPVwiY2hhbmdlZCgpXCIgZm9ybUNvbnRyb2xOYW1lPVwiZGF0YUVuZHBvaW50XCIgcGxhY2Vob2xkZXI9XCJkYXRhRW5kcG9pbnRcIiAvPlxyXG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiAqbmdJZj1cInNjaGVtYS5pbnB1dFR5cGU9PSdzZWxlY3QnXCI+XHJcbiAgICAgIFtvcHRpb25zXVxyXG4gICAgICA8YnV0dG9uIChjbGljayk9XCJhZGRPcHRpb24oKVwiPis8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiaW5zZXJ0T3B0aW9ucygpXCI+aW5zZXJ0PC9idXR0b24+XHJcbiAgICAgIDxkaXYgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBvcHRpb25zLmNvbnRyb2xzO2luZGV4IGFzIGlcIj5cclxuICAgICAgICB7e2l9fVxyXG4gICAgICAgIDxkaXYgW2Zvcm1Hcm91cF09XCJvcHRpb25zLmNvbnRyb2xzW2ldXCI+XHJcbiAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCAoY2hhbmdlKT1cImNoYW5nZWQoKVwiIGZvcm1Db250cm9sTmFtZT1cImtleVwiIHBsYWNlaG9sZGVyPVwia2V5XCIgLz5cclxuICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCAoY2hhbmdlKT1cImNoYW5nZWQoKVwiIGZvcm1Db250cm9sTmFtZT1cInZhbHVlXCIgcGxhY2Vob2xkZXI9XCJ2YWx1ZVwiIC8+XHJcbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGJyIC8+XHJcbiAgICA8bWF0LWNhcmQgZnhMYXlvdXQ9XCJjb2x1bW5cIj5cclxuICAgICAgPG1hdC1zbGlkZS10b2dnbGUgKGNoYW5nZSk9XCJjaGFuZ2VkKClcIiBbKG5nTW9kZWwpXT1cInNjaGVtYS52YWxpZGF0b3IucmVxdWlyZWQuYWN0aXZlXCI+w5jCp8OYwqzDmMKow5jCp8OYwrHDm8KMPC9tYXQtc2xpZGUtdG9nZ2xlPlxyXG4gICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPGlucHV0IG1hdElucHV0IChjaGFuZ2UpPVwiY2hhbmdlZCgpXCIgWyhuZ01vZGVsKV09XCJzY2hlbWEudmFsaWRhdG9yLnJlcXVpcmVkLm1lc3NhZ2VcIiBwbGFjZWhvbGRlcj1cIsOZwr7Dm8KMw5jCusOYwqfDmcKFXCIgLz5cclxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgIDwvbWF0LWNhcmQ+XHJcbiAgICA8bWF0LWNhcmQgZnhMYXlvdXQ9XCJjb2x1bW5cIj5cclxuICAgICAgPG1hdC1zbGlkZS10b2dnbGUgKGNoYW5nZSk9XCJjaGFuZ2VkKClcIiBbKG5nTW9kZWwpXT1cInNjaGVtYS52YWxpZGF0b3IuZW1haWwuYWN0aXZlXCI+w5jCp8ObwozDmcKFw5vCjMOZwoQ8L21hdC1zbGlkZS10b2dnbGU+XHJcbiAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8aW5wdXQgbWF0SW5wdXQgKGNoYW5nZSk9XCJjaGFuZ2VkKClcIiBbKG5nTW9kZWwpXT1cInNjaGVtYS52YWxpZGF0b3IuZW1haWwubWVzc2FnZVwiIHBsYWNlaG9sZGVyPVwiw5nCvsObwozDmMK6w5jCp8OZwoVcIiAvPlxyXG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgPC9tYXQtY2FyZD5cclxuICAgIDxtYXQtY2FyZCBmeExheW91dD1cImNvbHVtblwiPlxyXG4gICAgICA8bWF0LXNsaWRlLXRvZ2dsZSAoY2hhbmdlKT1cImNoYW5nZWQoKVwiIFsobmdNb2RlbCldPVwic2NoZW1hLnZhbGlkYXRvci5taW5sZW5ndGguYWN0aXZlXCI+w5jCrcOYwq/DmMKnw5nCgsOZwoQgw5jCqsOYwrnDmMKvw5jCp8OYwq8gw5rCqcOYwqfDmMKxw5jCp8OawqnDmMKqw5jCsTwvbWF0LXNsaWRlLXRvZ2dsZT5cclxuICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCAoY2hhbmdlKT1cImNoYW5nZWQoKVwiIFsobmdNb2RlbCldPVwic2NoZW1hLnZhbGlkYXRvci5taW5sZW5ndGgubWVzc2FnZVwiIHBsYWNlaG9sZGVyPVwiw5nCvsObwozDmMK6w5jCp8OZwoVcIiAvPlxyXG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPGlucHV0IG1hdElucHV0IChjaGFuZ2UpPVwiY2hhbmdlZCgpXCIgWyhuZ01vZGVsKV09XCJzY2hlbWEudmFsaWRhdG9yLm1pbmxlbmd0aC52YWx1ZVwiIHBsYWNlaG9sZGVyPVwiw5jCqsOYwrnDmMKvw5jCp8OYwq8gw5jCrcOYwq/DmMKnw5nCgsOZwoQgw5rCqcOYwqfDmMKxw5jCp8OawqnDmMKqw5jCsVwiIC8+XHJcbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICA8L21hdC1jYXJkPlxyXG4gIDwvZGl2PlxyXG48L21hdC1leHBhbnNpb24tcGFuZWw+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9ybUNvbnRyb2xDb21wb25lbnQge1xyXG5cdEBJbnB1dCgpIHNjaGVtYTogRmllbGRDb25maWc7XHJcblx0QE91dHB1dCgpIGNoYW5nZXMgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0QE91dHB1dCgpIGRlbGV0ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcblx0d2lkdGggPSBbIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwIF07XHJcblx0b3B0aW9ucyA9IG5ldyBGb3JtQXJyYXkoW1xyXG5cdFx0bmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdGtleTogbmV3IEZvcm1Db250cm9sKCksXHJcblx0XHRcdHZhbHVlOiBuZXcgRm9ybUNvbnRyb2woKVxyXG5cdFx0fSlcclxuXHRdKTtcclxuXHR0YWJsZU9wdGlvbnMgPSBuZXcgRm9ybUdyb3VwKHtcclxuXHRcdGRhdGFFbmRwb2ludDogbmV3IEZvcm1Db250cm9sKFwiXCIpXHJcblx0fSk7XHJcblx0Y29uc3RydWN0b3IoKSB7fVxyXG5cclxuXHRjaGFuZ2VkKCkge1xyXG5cdFx0aWYgKFsgdGhpcy5zY2hlbWEubmFtZSwgdGhpcy5zY2hlbWEudGl0bGUsIHRoaXMuc2NoZW1hLmlucHV0VHlwZSBdLnNvbWUoaXRlbSA9PiAhaXRlbSkpIHJldHVybiB0cnVlO1xyXG5cdFx0aWYgKHRoaXMuc2NoZW1hLmlucHV0VHlwZSA9PSBcInRhYmxlXCIpIHtcclxuXHRcdFx0dGhpcy5zY2hlbWEub3B0aW9ucyA9IHRoaXMudGFibGVPcHRpb25zLnZhbHVlO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLnNjaGVtYS5pbnB1dFR5cGUgPT0gXCJzZWxlY3RcIikge1xyXG5cdFx0XHR0aGlzLnNjaGVtYS5vcHRpb25zID0gdGhpcy5vcHRpb25zLnZhbHVlO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5jaGFuZ2VzLmVtaXQoKTtcclxuXHR9XHJcblxyXG5cdGFkZE9wdGlvbigpIHtcclxuXHRcdHRoaXMub3B0aW9ucy5wdXNoKFxyXG5cdFx0XHRuZXcgRm9ybUdyb3VwKHtcclxuXHRcdFx0XHRrZXk6IG5ldyBGb3JtQ29udHJvbCgpLFxyXG5cdFx0XHRcdHZhbHVlOiBuZXcgRm9ybUNvbnRyb2woKVxyXG5cdFx0XHR9KVxyXG5cdFx0KTtcclxuXHR9XHJcblx0cmVtb3ZlT3B0aW9uKGkpIHtcclxuXHRcdHRoaXMub3B0aW9ucy5jb250cm9scy5zcGxpY2UoaSwgMSk7XHJcblx0fVxyXG5cdGluc2VydE9wdGlvbnMoKSB7XHJcblx0XHR0aGlzLnNjaGVtYS5vcHRpb25zID0gdGhpcy5vcHRpb25zLnZhbHVlO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IEZvcm1TY2hlbWFNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuXHJcbmV4cG9ydCBlbnVtIEVkaXRGb3JtQWN0aW9uVHlwZXMge1xyXG5cdEVESVRfRk9STSA9IFwiW0ZPUk1dW0VESVRdIEVESVRfRk9STVwiLFxyXG5cdEVESVRfRk9STV9TVEFSVCA9IFwiW0ZPUk1dW0VESVRdIEVESVRfRk9STV9TVEFSVFwiLFxyXG5cdEVESVRfRk9STV9TVUNDRUVEID0gXCJbRk9STV1bRURJVF0gRURJVF9GT1JNX1NVQ0NFRURcIixcclxuXHRFRElUX0ZPUk1fRkFJTEVEID0gXCJbRk9STV1bRURJVF0gRURJVF9GT1JNX0ZBSUxFRFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBFZGl0Rm9ybUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEVkaXRGb3JtQWN0aW9uVHlwZXMuRURJVF9GT1JNO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBGb3JtU2NoZW1hTW9kZWwpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEVkaXRGb3JtU3RhcnRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBFZGl0Rm9ybUFjdGlvblR5cGVzLkVESVRfRk9STV9TVEFSVDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRm9ybVNjaGVtYU1vZGVsKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBFZGl0Rm9ybVN1Y2NlZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBFZGl0Rm9ybUFjdGlvblR5cGVzLkVESVRfRk9STV9TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBGb3JtU2NoZW1hTW9kZWwpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEVkaXRGb3JtRmFpbGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gRWRpdEZvcm1BY3Rpb25UeXBlcy5FRElUX0ZPUk1fRkFJTEVEO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBFZGl0Rm9ybUFjdGlvbnMgPSBFZGl0Rm9ybUFjdGlvbiB8IEVkaXRGb3JtU3RhcnRBY3Rpb24gfCBFZGl0Rm9ybVN1Y2NlZWRBY3Rpb24gfCBFZGl0Rm9ybUZhaWxlZEFjdGlvbjtcclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBGb3JtU2NoZW1hTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcblxyXG5leHBvcnQgZW51bSBBZGRGb3JtQWN0aW9uVHlwZXMge1xyXG5cdEFERF9GT1JNID0gXCJbRk9STV1bQUREXSBBRERfRk9STV9QUk9GSUxFXCIsXHJcblx0QUREX0ZPUk1fU1RBUlQgPSBcIltGT1JNXVtBRERdIEFERF9GT1JNX1NUQVJUXCIsXHJcblx0QUREX0ZPUk1fU1VDQ0VFRCA9IFwiW0ZPUk1dW0FERF0gQUREX0ZPUk1fU1VDQ0VFRFwiLFxyXG5cdEFERF9GT1JNX0ZBSUxFRCA9IFwiW0ZPUk1dW0FERF0gQUREX0ZPUk1fRkFJTEVEXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFkZEZvcm1BY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBBZGRGb3JtQWN0aW9uVHlwZXMuQUREX0ZPUk07XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEZvcm1TY2hlbWFNb2RlbCkge31cclxufVxyXG5leHBvcnQgY2xhc3MgQWRkRm9ybVN0YXJ0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQWRkRm9ybUFjdGlvblR5cGVzLkFERF9GT1JNX1NUQVJUO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBGb3JtU2NoZW1hTW9kZWwpIHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEFkZEZvcm1TdWNjZWVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQWRkRm9ybUFjdGlvblR5cGVzLkFERF9GT1JNX1NVQ0NFRUQ7XHJcbn1cclxuZXhwb3J0IGNsYXNzIEFkZEZvcm1GYWlsZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBBZGRGb3JtQWN0aW9uVHlwZXMuQUREX0ZPUk1fRkFJTEVEO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBBZGRGb3JtQWN0aW9ucyA9IEFkZEZvcm1BY3Rpb24gfCBBZGRGb3JtU3RhcnRBY3Rpb24gfCBBZGRGb3JtU3VjY2VlZEFjdGlvbiB8IEFkZEZvcm1GYWlsZWRBY3Rpb247XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgTWFpbkNvbnRhaW5lclN0YXRlIH0gZnJvbSBcIi4uLy4uL21haW4tY29udGFpbmVyL21haW4tY29udGFpbmVyLnJlZHVjZXJzXCI7XHJcbmltcG9ydCB7IEZvcm1TY2hlbWFNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgQWRkRm9ybUFjdGlvbiB9IGZyb20gXCIuLi9hZGQtZm9ybS5hY3Rpb25zXCI7XHJcbmltcG9ydCB7IEFkZEZvcm1TY2hlbWFBY3Rpb24sIFVwZGF0ZUZvcm1TY2hlbWFBY3Rpb24gfSBmcm9tIFwiLi4vLi4vbGlzdC9saXN0LmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgRm9ybVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZm9ybS5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHR0ZW1wbGF0ZTogYDxuZ3MtZm9ybS1hZGQgXHJcblx0XHRcdFx0XHRbc2NoZW1hXT1cInNjaGVtYVwiIFxyXG5cdFx0XHRcdFx0KGNoYW5nZXMpPVwidXBkYXRlX3NjaGVtYSgkZXZlbnQpXCIgXHJcblx0XHRcdFx0XHQoc3VibWl0ZWQpPWFkZCgkZXZlbnQpXHJcblx0XHRcdFx0PjwvbmdzLWZvcm0tYWRkPmBcclxufSlcclxuZXhwb3J0IGNsYXNzIEFkZEZvcm1Db250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdHNjaGVtYTogRm9ybVNjaGVtYU1vZGVsO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBzdG9yZTogU3RvcmU8TWFpbkNvbnRhaW5lclN0YXRlPiwgcHVibGljIHNlcnZpY2U6IEZvcm1TZXJ2aWNlKSB7fVxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5zY2hlbWEgPSBuZXcgRm9ybVNjaGVtYU1vZGVsKCk7XHJcblx0XHR0aGlzLnNjaGVtYS5pbml0KCk7XHJcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBBZGRGb3JtU2NoZW1hQWN0aW9uKHRoaXMuc2NoZW1hKSk7XHJcblx0fVxyXG5cdGFkZChmb3JtOiBGb3JtU2NoZW1hTW9kZWwpIHtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEFkZEZvcm1BY3Rpb24oZm9ybSkpO1xyXG5cdH1cclxuXHR1cGRhdGVfc2NoZW1hKGZvcm06IEZvcm1TY2hlbWFNb2RlbCkge1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVXBkYXRlRm9ybVNjaGVtYUFjdGlvbihmb3JtKSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBNYWluQ29udGFpbmVyU3RhdGUgfSBmcm9tIFwiLi4vLi4vbWFpbi1jb250YWluZXIvbWFpbi1jb250YWluZXIucmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgRWRpdEZvcm1BcGlNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgRm9ybVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZm9ybS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEVkaXRGb3JtQWN0aW9uIH0gZnJvbSBcIi4uLy4uL2VkaXQvZWRpdC1mb3JtLmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgQWRkRm9ybUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9hZGQvYWRkLWZvcm0tY29udGFpbmVyXCI7XHJcbmltcG9ydCB7IEdldEZvcm1TY2hlbWFBY3Rpb24gfSBmcm9tIFwiLi4vLi4vbGlzdC9saXN0LmFjdGlvbnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHRlbXBsYXRlOiBgPGVkaXQtZm9ybVxyXG5cdFx0XHRcdFx0W2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIlxyXG5cdFx0XHRcdFx0W3NjaGVtYV09XCJzY2hlbWFcIlxyXG5cdFx0XHRcdFx0KGNoYW5nZXMpPVwidXBkYXRlX3NjaGVtYSgkZXZlbnQpXCJcclxuXHRcdFx0XHRcdChzdWJtaXRlZCk9XCJ1cGRhdGUoJGV2ZW50KVwiPlxyXG5cdFx0XHRcdDwvZWRpdC1mb3JtPmBcclxufSlcclxuZXhwb3J0IGNsYXNzIEVkaXRGb3JtQ29udGFpbmVyQ29tcG9uZW50IGV4dGVuZHMgQWRkRm9ybUNvbnRhaW5lckNvbXBvbmVudCB7XHJcblx0Zm9ybUdyb3VwID0gRWRpdEZvcm1BcGlNb2RlbC5SZXF1ZXN0LmZvcm1Hcm91cDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgc2VydmljZTogRm9ybVNlcnZpY2UsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwdWJsaWMgc3RvcmU6IFN0b3JlPE1haW5Db250YWluZXJTdGF0ZT4pIHtcclxuXHRcdHN1cGVyKHN0b3JlLCBzZXJ2aWNlKTtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5yb3V0ZS5wYXJhbXNcclxuXHRcdFx0Lm1hcCgocGFyYW1zKSA9PiBwYXJhbXNbXCJfaWRcIl0pXHJcblx0XHRcdC5zdWJzY3JpYmUoKGlkKSA9PiB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBHZXRGb3JtU2NoZW1hQWN0aW9uKGlkKSkpO1xyXG5cclxuXHRcdHRoaXMucm91dGUucGFyYW1zXHJcblx0XHRcdC5tYXAoKHBhcmFtcykgPT4gcGFyYW1zW1wiX2lkXCJdKVxyXG5cdFx0XHQuc3dpdGNoTWFwKChpZCkgPT4gdGhpcy5zZXJ2aWNlLnNlbGVjdEZvcm1CeUlkKGlkKSlcclxuXHRcdFx0LmZpbHRlcigoZGF0YSkgPT4gZGF0YSAhPSBudWxsKVxyXG5cdFx0XHQudGFrZSgxKVxyXG5cdFx0XHQuc3Vic2NyaWJlKChmb3JtU2NoZW1hKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5zY2hlbWEgPSBmb3JtU2NoZW1hO1xyXG5cdFx0XHRcdHRoaXMuZm9ybUdyb3VwLnBhdGNoVmFsdWUoZm9ybVNjaGVtYSk7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlKGRhdGEpIHtcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEVkaXRGb3JtQWN0aW9uKGRhdGEpKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuaW1wb3J0IHsgRm9ybVNjaGVtYU1vZGVsLCBBZGRGb3JtQXBpTW9kZWwsIEZpZWxkQ29uZmlnIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwibmdzLWZvcm0tYWRkXCIsXHJcblx0dGVtcGxhdGU6IGA8ZGl2IGZ4TGF5b3V0PVwicm93XCIgKm5nSWY9XCJzY2hlbWFcIj5cclxuICA8ZGl2IFtmeEZsZXhdPVwiNTBcIiAqbmdJZj1cImZvcm1Hcm91cFwiPlxyXG4gICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIj5cclxuICAgICAgPG1hdC1jYXJkPlxyXG4gICAgICAgIDxtYXQtY2FyZC10aXRsZT7DmMKnw5vCjMOYwqzDmMKnw5jCryDDmcKBw5jCscOZwoUgw5jCrMOYwq/Dm8KMw5jCrzwvbWF0LWNhcmQtdGl0bGU+XHJcbiAgICAgICAgPG1hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG1hdElucHV0IChjaGFuZ2UpPVwiY2hhbmdlZCgpXCIgcGxhY2Vob2xkZXI9XCLDmcKGw5jCp8OZwoUgw5nCgcOYwrHDmcKFXCIgZm9ybUNvbnRyb2xOYW1lPVwibmFtZVwiPlxyXG4gICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgIDwhLS0gPGRpdiBjbGFzcz1cImJ1dHRvbi1yb3dcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwiYWRkRm9ybUdyb3VwKHNjaGVtYS5mb3JtKVwiPkFkZCBmb3JtIGdyb3VwPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cImFkZEZvcm1BcnJheShzY2hlbWEuZm9ybSlcIj5BZGQgZm9ybSBhcnJheTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJhZGRGb3JtQ29udHJvbChzY2hlbWEuZm9ybSlcIj5BZGQgZm9ybSBjb250cm9sPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+IC0tPlxyXG4gICAgICAgIDwvbWF0LWNhcmQtY29udGVudD5cclxuICAgICAgPC9tYXQtY2FyZD5cclxuICAgICAgPG1hdC1jYXJkPlxyXG4gICAgICAgIDxtYXQtY2FyZC1jb250ZW50PlxyXG4gICAgICAgICAgPGRpdiBbbmdTd2l0Y2hdPVwic2NoZW1hLmZvcm0/LnR5cGVcIj5cclxuICAgICAgICAgICAgPGFwcC1mb3JtLWdyb3VwICpuZ1N3aXRjaENhc2U9XCInZ3JvdXAnXCIgW3NjaGVtYV09XCJzY2hlbWEuZm9ybVwiIG5vSGVhZGVyPVwidHJ1ZVwiIChjaGFuZ2VzKT1cImNoYW5nZWQoKVwiPjwvYXBwLWZvcm0tZ3JvdXA+XHJcbiAgICAgICAgICAgIDxhcHAtZm9ybS1hcnJheSAqbmdTd2l0Y2hDYXNlPVwiJ2FycmF5J1wiIFtzY2hlbWFdPVwic2NoZW1hLmZvcm1cIiAoY2hhbmdlcyk9XCJjaGFuZ2VkKClcIj48L2FwcC1mb3JtLWFycmF5PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9tYXQtY2FyZC1jb250ZW50PlxyXG4gICAgICAgIDxtYXQtY2FyZC1hY3Rpb25zPlxyXG4gICAgICAgICAgPCEtLSA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJmb3JtLmdlbmVyYXRlKHNjaGVtYSlcIj7DmMKnw5vCjMOYwqzDmMKnw5jCryDDmcKBw5jCscOZwoU8L2J1dHRvbj4gLS0+XHJcbiAgICAgICAgICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJlbWl0KClcIiB0eXBlPVwic3VibWl0XCI+w5jCq8OYwqjDmMKqPC9idXR0b24+XHJcbiAgICAgICAgPC9tYXQtY2FyZC1hY3Rpb25zPlxyXG5cclxuICAgICAgICA8ZGl2IFtmb3JtR3JvdXBdPVwiJGFueShmb3JtR3JvdXAuY29udHJvbHMuZXZlbnRzKS5jb250cm9scy5hY2NlcHRcIj5cclxuICAgICAgICAgIDxtYXQtc2xpZGUtdG9nZ2xlIChjaGFuZ2UpPVwiY2hhbmdlZCgpXCIgZm9ybUNvbnRyb2xOYW1lPVwic2hvd1wiPsOZwobDmcKFw5jCp8ObwozDmMK0IMOYwqrDmMKnw5vCjMObwozDmMKvPC9tYXQtc2xpZGUtdG9nZ2xlPlxyXG4gICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAoY2hhbmdlKT1cImNoYW5nZWQoKVwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwiw5nChcOYwqrDmcKGIMOYwqrDmMKnw5vCjMObwozDmMKvXCIgZm9ybUNvbnRyb2xOYW1lPVwidGV4dFwiPlxyXG4gICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IFtmb3JtR3JvdXBdPVwiJGFueShmb3JtR3JvdXAuY29udHJvbHMuZXZlbnRzKS5jb250cm9scy5jYW5jZWxcIj5cclxuICAgICAgICAgIDxtYXQtc2xpZGUtdG9nZ2xlIChjaGFuZ2UpPVwiY2hhbmdlZCgpXCIgZm9ybUNvbnRyb2xOYW1lPVwic2hvd1wiPsOZwobDmcKFw5jCp8ObwozDmMK0IMOYwqfDmcKGw5jCtcOYwrHDmMKnw5nCgTwvbWF0LXNsaWRlLXRvZ2dsZT5cclxuICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgKGNoYW5nZSk9XCJjaGFuZ2VkKClcIiBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIsOZwoXDmMKqw5nChiDDmMKnw5nChsOYwrXDmMKxw5jCp8OZwoFcIiBmb3JtQ29udHJvbE5hbWU9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPC9tYXQtY2FyZD5cclxuICAgIDwvZm9ybT5cclxuICA8L2Rpdj5cclxuICA8ZGl2IFtmeEZsZXhdPVwiNTBcIj5cclxuICAgIDxuZ3MtZm9ybS12aWV3IFtsb2NhbF09J3RydWUnIFtpZF09XCJzY2hlbWEuX2lkXCI+PC9uZ3MtZm9ybS12aWV3PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBZGRGb3JtQ29tcG9uZW50IHtcclxuXHRASW5wdXQoKSBzY2hlbWE6IEZvcm1TY2hlbWFNb2RlbDtcclxuXHRASW5wdXQoKSBmb3JtR3JvdXAgPSBBZGRGb3JtQXBpTW9kZWwuUmVxdWVzdC5mb3JtR3JvdXA7XHJcblx0QE91dHB1dCgpIHN1Ym1pdGVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBPdXRwdXQoKSBjaGFuZ2VzID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuXHRlbWl0KCkge1xyXG5cdFx0dGhpcy5mb3JtR3JvdXAucGF0Y2hWYWx1ZSh7IGZvcm06IHRoaXMuc2NoZW1hLmZvcm0gfSk7XHJcblx0XHR0aGlzLnN1Ym1pdGVkLmVtaXQodGhpcy5mb3JtR3JvdXAudmFsdWUpO1xyXG5cdH1cclxuXHRjaGFuZ2VkKCkge1xyXG5cdFx0dGhpcy5mb3JtR3JvdXAucGF0Y2hWYWx1ZSh7IGZvcm06IHRoaXMuc2NoZW1hLmZvcm0gfSk7XHJcblx0XHR0aGlzLmNoYW5nZXMuZW1pdCh0aGlzLmZvcm1Hcm91cC52YWx1ZSk7XHJcblx0fVxyXG5cdGNoYW5nZU9yZGVyKCRldmVudCkge31cclxuXHJcblx0YWRkRm9ybUdyb3VwKHJvb3Q6IEZpZWxkQ29uZmlnKSB7XHJcblx0XHRjb25zdCBncm91cCA9IG5ldyBGaWVsZENvbmZpZyhcImdyb3VwXCIpO1xyXG5cdFx0Z3JvdXAuZmllbGRzID0gW107XHJcblx0XHRyb290LmZpZWxkcy5wdXNoKGdyb3VwKTtcclxuXHRcdHJldHVybiBncm91cDtcclxuXHR9XHJcblx0YWRkRm9ybUFycmF5KHJvb3Q6IEZpZWxkQ29uZmlnKSB7XHJcblx0XHRjb25zdCBhcnJheSA9IG5ldyBGaWVsZENvbmZpZyhcImFycmF5XCIpO1xyXG5cdFx0YXJyYXkuZmllbGRzID0gW107XHJcblx0XHRyb290LmZpZWxkcy5wdXNoKGFycmF5KTtcclxuXHRcdHJldHVybiBhcnJheTtcclxuXHR9XHJcblx0YWRkRm9ybUNvbnRyb2wocm9vdDogRmllbGRDb25maWcpIHtcclxuXHRcdGNvbnN0IGNvbnRyb2wgPSBuZXcgRmllbGRDb25maWcoXCJjb250cm9sXCIpO1xyXG5cdFx0cm9vdC5maWVsZHMucHVzaChjb250cm9sKTtcclxuXHRcdHJldHVybiBjb250cm9sO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuaW1wb3J0IHsgQWRkRm9ybUNvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9hZGQvYWRkLWZvcm1cIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiZWRpdC1mb3JtXCIsXHJcbiAgICB0ZW1wbGF0ZTogYDxkaXYgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEFsaWduPVwiY2VudGVyXCIgZnhMYXlvdXRHYXA9XCIyNXB4XCIgY2xhc3M9XCJtYWluLWNvbnRhaW5lclwiPlxyXG5cclxuICA8ZGl2IGNsYXNzPVwiY29udGVudC1hY3Rpb25cIj5cclxuICAgIDxtYXQtY2FyZCBmeExheW91dD1cImNvbHVtblwiIGZ4TGF5b3V0R2FwPVwiMTBweFwiIGZ4TGF5b3V0QWxpZ249XCJzdGFydFwiIGNsYXNzPVwid2l0aC1zdGlja3ktYWN0aW9uXCI+XHJcbiAgICAgIDxkaXYgZnhMYXlvdXQ9XCJyb3cgd3JhcFwiICpuZ0lmPVwic2NoZW1hXCIgZnhGbGV4PVwiMTAwXCIgZnhMYXlvdXRBbGlnbj1cInN0YXJ0IHN0YXJ0XCIgZnhMYXlvdXRBbGlnbi5sdC1tZD1cImNlbnRlclwiPlxyXG4gICAgICAgIDxkaXYgZnhGbGV4Lmd0LW1kPVwiNTBcIiBmeEZsZXgubHQtbWQ9XCIxMDBcIiAqbmdJZj1cImZvcm1Hcm91cFwiPlxyXG4gICAgICAgICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIj5cclxuICAgICAgICAgICAgPG1hdC1jYXJkPlxyXG4gICAgICAgICAgICAgIDxtYXQtY2FyZC10aXRsZT7DmMKnw5vCjMOYwqzDmMKnw5jCryDDmcKBw5jCscOZwoUgw5jCrMOYwq/Dm8KMw5jCrzwvbWF0LWNhcmQtdGl0bGU+XHJcbiAgICAgICAgICAgICAgPG1hdC1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG1hdElucHV0IChjaGFuZ2UpPVwiY2hhbmdlZCgpXCIgcGxhY2Vob2xkZXI9XCLDmcKGw5jCp8OZwoUgw5nCgcOYwrHDmcKFXCIgZm9ybUNvbnRyb2xOYW1lPVwibmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgIDwhLS0gPGRpdiBjbGFzcz1cImJ1dHRvbi1yb3dcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwiYWRkRm9ybUdyb3VwKHNjaGVtYS5mb3JtKVwiPkFkZCBmb3JtIGdyb3VwPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cImFkZEZvcm1BcnJheShzY2hlbWEuZm9ybSlcIj5BZGQgZm9ybSBhcnJheTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJhZGRGb3JtQ29udHJvbChzY2hlbWEuZm9ybSlcIj5BZGQgZm9ybSBjb250cm9sPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+IC0tPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1kaXZpZGVyPjwvbWF0LWRpdmlkZXI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IFtuZ1N3aXRjaF09XCJzY2hlbWEuZm9ybT8udHlwZVwiIGNsYXNzPVwic2NoZW1hLWZvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgPGFwcC1mb3JtLWdyb3VwICpuZ1N3aXRjaENhc2U9XCInZ3JvdXAnXCIgW3NjaGVtYV09XCJzY2hlbWEuZm9ybVwiIG5vSGVhZGVyPVwidHJ1ZVwiIChjaGFuZ2VzKT1cImNoYW5nZWQoKVwiPjwvYXBwLWZvcm0tZ3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgIDxhcHAtZm9ybS1hcnJheSAqbmdTd2l0Y2hDYXNlPVwiJ2FycmF5J1wiIFtzY2hlbWFdPVwic2NoZW1hLmZvcm1cIiAoY2hhbmdlcyk9XCJjaGFuZ2VkKClcIj48L2FwcC1mb3JtLWFycmF5PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPG1hdC1kaXZpZGVyPjwvbWF0LWRpdmlkZXI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1idXR0b25zXCIgZnhMYXlvdXQ9XCJyb3cgd3JhcFwiIGZ4TGF5b3V0R2FwPVwiMTBweFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBmeExheW91dD1cImNvbHVtblwiIFtmb3JtR3JvdXBdPVwiJGFueShmb3JtR3JvdXAuY29udHJvbHMuZXZlbnRzKS5jb250cm9scy5hY2NlcHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LXNsaWRlLXRvZ2dsZSAoY2hhbmdlKT1cImNoYW5nZWQoKVwiIGZvcm1Db250cm9sTmFtZT1cInNob3dcIj7DmcKGw5nChcOYwqfDm8KMw5jCtCDDmMKqw5jCp8ObwozDm8KMw5jCrzwvbWF0LXNsaWRlLXRvZ2dsZT5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAoY2hhbmdlKT1cImNoYW5nZWQoKVwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwiw5nChcOYwqrDmcKGIMOYwqrDmMKnw5vCjMObwozDmMKvXCIgZm9ybUNvbnRyb2xOYW1lPVwidGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGZ4TGF5b3V0PVwiY29sdW1uXCIgW2Zvcm1Hcm91cF09XCIkYW55KGZvcm1Hcm91cC5jb250cm9scy5ldmVudHMpLmNvbnRyb2xzLmNhbmNlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtc2xpZGUtdG9nZ2xlIChjaGFuZ2UpPVwiY2hhbmdlZCgpXCIgZm9ybUNvbnRyb2xOYW1lPVwic2hvd1wiPsOZwobDmcKFw5jCp8ObwozDmMK0IMOYwqfDmcKGw5jCtcOYwrHDmMKnw5nCgTwvbWF0LXNsaWRlLXRvZ2dsZT5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAoY2hhbmdlKT1cImNoYW5nZWQoKVwiIG1hdElucHV0IHBsYWNlaG9sZGVyPVwiw5nChcOYwqrDmcKGIMOYwqfDmcKGw5jCtcOYwrHDmMKnw5nCgVwiIGZvcm1Db250cm9sTmFtZT1cInRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8bWF0LWNhcmQtYWN0aW9ucz5cclxuICAgICAgICAgICAgICAgICAgPCEtLSA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCIkYW55KGZvcm0pLmdlbmVyYXRlKHNjaGVtYSlcIj7DmMKnw5vCjMOYwqzDmMKnw5jCryDDmcKBw5jCscOZwoU8L2J1dHRvbj4gLS0+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cImVtaXQoKVwiIHR5cGU9XCJzdWJtaXRcIj7DmMKrw5jCqMOYwqo8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvbWF0LWNhcmQtYWN0aW9ucz5cclxuXHJcbiAgICAgICAgICAgICAgPC9tYXQtY2FyZC1jb250ZW50PlxyXG4gICAgICAgICAgICA8L21hdC1jYXJkPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgZnhGbGV4Lmd0LW1kPVwiNTBcIiBmeEZsZXgubHQtbWQ9XCIxMDBcIiBmeExheW91dEFsaWduPVwiY2VudGVyIHN0YXJ0XCI+XHJcbiAgICAgICAgICA8bmdzLWZvcm0tdmlldyBbbG9jYWxdPSd0cnVlJyBbaWRdPVwiIHNjaGVtYS5faWRcIj5cclxuICAgICAgICAgIDwvbmdzLWZvcm0tdmlldz5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9tYXQtY2FyZD5cclxuICA8L2Rpdj5cclxuPC9kaXY+YCxcclxuICAgIHN0eWxlczogW2AuZm9ybS1idXR0b25zLC5zY2hlbWEtZm9ybXtwYWRkaW5nOjI1cHggMTBweH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRWRpdEZvcm1Db21wb25lbnQgZXh0ZW5kcyBBZGRGb3JtQ29tcG9uZW50IHtcclxuICAgIEBJbnB1dCgpIHNjaGVtYTogYW55O1xyXG4gICAgZW1pdCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZm9ybUdyb3VwLnZhbGlkKSByZXR1cm47XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3VibWl0ZWQuZW1pdCh0aGlzLmZvcm1Hcm91cC52YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgTWFpbkNvbnRhaW5lclN0YXRlIH0gZnJvbSBcIi4uLy4uL21haW4tY29udGFpbmVyXCI7XHJcbmltcG9ydCB7IEZvcm1TY2hlbWFNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgRm9ybXNMaXN0QWN0aW9uIH0gZnJvbSBcIi4uLy4uL2xpc3QvbGlzdC5hY3Rpb25zXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHR0ZW1wbGF0ZTogYDxmb3JtLWxpc3RcclxuXHRcdFx0XHRcdFtkYXRhXT1cImRhdGEkXCI+XHJcblx0XHRcdFx0PC9mb3JtLWxpc3Q+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9ybUxpc3RDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdGRhdGEkOiBPYnNlcnZhYmxlPEZvcm1TY2hlbWFNb2RlbFtdPjtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgc3RvcmU6IFN0b3JlPE1haW5Db250YWluZXJTdGF0ZT4pIHtcclxuXHRcdHRoaXMuZGF0YSQgPSB0aGlzLnN0b3JlLnNlbGVjdChzdGF0ZSA9PiBzdGF0ZS5mb3JtLmxpc3QuZGF0YSk7XHJcblx0fVxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgRm9ybXNMaXN0QWN0aW9uKCkpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuXHJcbmltcG9ydCB7IEZvcm1TY2hlbWFNb2RlbCB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcImZvcm0tbGlzdFwiLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXJcIiBmeExheW91dEdhcD1cIjI1cHhcIiBjbGFzcz1cIm1haW4tY29udGFpbmVyXCI+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJjb250ZW50LWFjdGlvblwiPlxyXG4gICAgPG1hdC1jYXJkIGNsYXNzPVwid2l0aC1zdGlja3ktYWN0aW9uXCI+XHJcbiAgICAgIDxtYXQtY2FyZC1oZWFkZXI+XHJcbiAgICAgICAgPG1hdC1jYXJkLXRpdGxlIGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRHYXA9XCI1cHhcIj5cclxuICAgICAgICAgIDxtYXQtaWNvbj5hc3NpZ25tZW50PC9tYXQtaWNvbj5cclxuICAgICAgICAgIDxzcGFuPsOZwoXDmMKvw5vCjMOYwrHDm8KMw5jCqiDDmcKBw5jCscOZwoUgw5nCh8OYwqc8L3NwYW4+XHJcbiAgICAgICAgPC9tYXQtY2FyZC10aXRsZT5cclxuICAgICAgICA8bWF0LWNhcmQtc3VidGl0bGUgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEFsaWduPVwic3BhY2UtYmV0d2VlbiBjZW50ZXJcIj5cclxuICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICDDmMK0w5jCp8OZwoXDmcKEIMOYwqrDmcKFw5jCp8OZwoXDm8KMIMOYwq/DmMKxw5jCrsOZwojDmMKnw5jCs8OYwqrDosKAwozDmcKHw5jCpyDDmMKnw5jCsiDDmcKCw5jCqMObwozDmcKEIMOYwq/DmMKnw5jCpsOYwrHDm8KMw5jCjCDDmMKsw5nChcOYwrnDosKAwozDmMKiw5nCiMOYwrHDm8KMIMOZwoggLi4uXHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9tYXQtY2FyZC1zdWJ0aXRsZT5cclxuICAgICAgPC9tYXQtY2FyZC1oZWFkZXI+XHJcblxyXG4gICAgICA8ZGl2IGZ4TGF5b3V0PVwicm93IHdyYXBcIiBmeExheW91dEdhcD1cIjEwcHhcIiBmeExheW91dEFsaWduPVwic3RhcnRcIj5cclxuXHJcbiAgICAgICAgPGJ1dHRvbiBmeEZsZXgubHQtbGc9XCIxOVwiIGZ4RmxleC5sZz1cIjI0XCIgZnhGbGV4Lm1kPVwiMzJcIiBmeEZsZXguc209XCI0OVwiIGZ4RmxleC54cz1cIjEwMFwiIGNsYXNzPSdsaW5rJ1xyXG4gICAgICAgICAgbWF0LXJhaXNlZC1idXR0b24gW3JvdXRlckxpbmtdPVwiWydlZGl0JyAsICBpdGVtLl9pZF1cIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiAoZGF0YSQgfCBhc3luYylcIj5cclxuICAgICAgICAgIDxkaXYgZnhMYXlvdXQ9J2NvbHVtbicgZnhMYXlvdXRBbGlnbj0nY2VudGVyIGNlbnRlcic+XHJcbiAgICAgICAgICAgIDxtYXQtaWNvbiBjb2xvcj0ncHJpbWFyeSc+c2V0dGluZ3M8L21hdC1pY29uPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3M9J3RpdGxlJz57e2l0ZW0ubmFtZX19PC9oMz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L21hdC1jYXJkPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5gLFxyXG5cdHN0eWxlczogW2BidXR0b24ubGlua3twYWRkaW5nOjI1cHggMTVweDttYXJnaW46LjUlO2JveC1zaXppbmc6Ym9yZGVyLWJveH1idXR0b24gbWF0LWljb257Zm9udC1zaXplOjM0cHg7d2lkdGg6MzRweDtoZWlnaHQ6MzRweH1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9ybUxpc3RDb21wb25lbnQge1xyXG5cdC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1pbnB1dC1yZW5hbWVcclxuXHRASW5wdXQoXCJkYXRhXCIpIGRhdGEkOiBPYnNlcnZhYmxlPEZvcm1TY2hlbWFNb2RlbFtdPjtcclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBNYWluQ29udGFpbmVyUmVkdWNlciBmcm9tIFwiLi4vLi4vbWFpbi1jb250YWluZXIvbWFpbi1jb250YWluZXIucmVkdWNlcnNcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHR0ZW1wbGF0ZTogXCI8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XCIsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYWluQ29udGFpbmVyQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBzdG9yZTogU3RvcmU8TWFpbkNvbnRhaW5lclJlZHVjZXIuTWFpbkNvbnRhaW5lclN0YXRlPikgeyB9XHJcbn1cclxuIiwiaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21lcmdlTWFwXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL3N3aXRjaE1hcFwiO1xyXG5cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anMvb2JzZXJ2YWJsZS9vZlwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgRm9ybVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvZm9ybS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEFkZEZvcm1BcGlNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgQWRkRm9ybUFjdGlvblR5cGVzLCBBZGRGb3JtU3RhcnRBY3Rpb24sIEFkZEZvcm1TdWNjZWVkQWN0aW9uLCBBZGRGb3JtRmFpbGVkQWN0aW9uIH0gZnJvbSBcIi4vYWRkLWZvcm0uYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCwgY2F0Y2hFcnJvciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQWRkRm9ybUVmZmVjdHMge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnM8YW55PiwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBzZXJ2aWNlOiBGb3JtU2VydmljZSkge31cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0QWRkRm9ybSQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKEFkZEZvcm1BY3Rpb25UeXBlcy5BRERfRk9STSlcclxuXHRcdC5waXBlKG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLCBtYXAoZGF0YSA9PiBuZXcgQWRkRm9ybVN0YXJ0QWN0aW9uKGRhdGEpKSk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdEFkZEZvcm1TdGFydCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKEFkZEZvcm1BY3Rpb25UeXBlcy5BRERfRk9STV9TVEFSVClcclxuXHRcdC5waXBlKFxyXG5cdFx0XHRtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHRcdFx0c3dpdGNoTWFwKChkYXRhOiBBZGRGb3JtQXBpTW9kZWwuUmVxdWVzdCkgPT4gdGhpcy5zZXJ2aWNlLmFkZChkYXRhKSksXHJcblx0XHRcdG1hcChyZXMgPT4gbmV3IEFkZEZvcm1TdWNjZWVkQWN0aW9uKCkpLFxyXG5cdFx0XHRjYXRjaEVycm9yKCgpID0+IG9mKG5ldyBBZGRGb3JtRmFpbGVkQWN0aW9uKCkpKVxyXG5cdFx0KTtcclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0IH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqcy9vYnNlcnZhYmxlL29mXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IHN3aXRjaE1hcCwgbWFwLCBjYXRjaEVycm9yIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5pbXBvcnQgeyBGb3JtU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9mb3JtLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRm9ybVNjaGVtYU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQge1xyXG5cdEZvcm1zTGlzdEFjdGlvbixcclxuXHRGb3Jtc0xpc3RBY3Rpb25UeXBlcyxcclxuXHRGb3Jtc0xpc3RBY3Rpb25zLFxyXG5cdEZvcm1zTGlzdEZhaWxlZEFjdGlvbixcclxuXHRGb3Jtc0xpc3RTdGFydEFjdGlvbixcclxuXHRGb3Jtc0xpc3RTdWNjZWVkQWN0aW9uLFxyXG5cdEZvcm1TY2hlbWFGZWNoZWRBY3Rpb25cclxufSBmcm9tIFwiLi9saXN0LmFjdGlvbnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEZvcm1zTGlzdEVmZmVjdHMge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnM8YW55PiwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBzZXJ2aWNlOiBGb3JtU2VydmljZSkge31cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0RWRpdFByb2ZpbGVSZXF1ZXN0JCA9IHRoaXMuYWN0aW9ucyQub2ZUeXBlKEZvcm1zTGlzdEFjdGlvblR5cGVzLkZPUk1TX0xJU1QpLm1hcChkYXRhID0+IG5ldyBGb3Jtc0xpc3RTdGFydEFjdGlvbigpKTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0R2V0Rm9ybSQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKEZvcm1zTGlzdEFjdGlvblR5cGVzLkdFVF9GT1JNX1NDSEVNQSlcclxuXHRcdC5waXBlKFxyXG5cdFx0XHRtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHRcdFx0c3dpdGNoTWFwKGlkID0+IHRoaXMuc2VydmljZS5nZXQoaWQpKSxcclxuXHRcdFx0bWFwKGZvcm1TY2hlbWEgPT4gbmV3IEZvcm1TY2hlbWFGZWNoZWRBY3Rpb24oZm9ybVNjaGVtYSkpXHJcblx0XHQpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRnZXRfZm9ybXNfbGlzdCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKEZvcm1zTGlzdEFjdGlvblR5cGVzLkZPUk1TX0xJU1RfU1RBUlQpXHJcblx0XHQucGlwZShcclxuXHRcdFx0c3dpdGNoTWFwKChkYXRhOiBhbnkpID0+IHRoaXMuc2VydmljZS5nZXRMaXN0KCkpLFxyXG5cdFx0XHRtYXAocmVzID0+IG5ldyBGb3Jtc0xpc3RTdWNjZWVkQWN0aW9uKHJlcykpLFxyXG5cdFx0XHRjYXRjaEVycm9yKCgpID0+IG9mKG5ldyBGb3Jtc0xpc3RGYWlsZWRBY3Rpb24oKSkpXHJcblx0XHQpO1xyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QgfSBmcm9tIFwiQG5ncngvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzL29ic2VydmFibGUvb2ZcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IEZvcm1TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2Zvcm0uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBFZGl0Rm9ybUFwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQge1xyXG5cdEVkaXRGb3JtQWN0aW9uVHlwZXMsXHJcblx0RWRpdEZvcm1TdGFydEFjdGlvbixcclxuXHRFZGl0Rm9ybVN1Y2NlZWRBY3Rpb24sXHJcblx0RWRpdEZvcm1GYWlsZWRBY3Rpb25cclxufSBmcm9tIFwiLi9lZGl0LWZvcm0uYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBVcGRhdGVGb3JtU2NoZW1hQWN0aW9uIH0gZnJvbSBcIi4uL2xpc3RcIjtcclxuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIGNhdGNoRXJyb3IgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEVkaXRGb3JtRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxhbnk+LCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHNlcnZpY2U6IEZvcm1TZXJ2aWNlKSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRFZGl0Rm9ybSQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKEVkaXRGb3JtQWN0aW9uVHlwZXMuRURJVF9GT1JNKVxyXG5cdFx0LnBpcGUobWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksIG1hcChkYXRhID0+IG5ldyBFZGl0Rm9ybVN0YXJ0QWN0aW9uKGRhdGEpKSk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdEVkaXRGb3JtU3RhcnQkID0gdGhpcy5hY3Rpb25zJFxyXG5cdFx0Lm9mVHlwZShFZGl0Rm9ybUFjdGlvblR5cGVzLkVESVRfRk9STV9TVEFSVClcclxuXHRcdC5waXBlKFxyXG5cdFx0XHRtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHRcdFx0c3dpdGNoTWFwKChkYXRhOiBFZGl0Rm9ybUFwaU1vZGVsLlJlcXVlc3QpID0+IHRoaXMuc2VydmljZS51cGRhdGUoZGF0YSkpLFxyXG5cdFx0XHRtYXAoZm9ybVNjaGVtYSA9PiBuZXcgRWRpdEZvcm1TdWNjZWVkQWN0aW9uKGZvcm1TY2hlbWEpKSxcclxuXHRcdFx0Y2F0Y2hFcnJvcigoKSA9PiBvZihuZXcgRWRpdEZvcm1GYWlsZWRBY3Rpb24oKSkpXHJcblx0XHQpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRVcGRhdGVGb3Jtc0xpc3RTdGFydCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKEVkaXRGb3JtQWN0aW9uVHlwZXMuRURJVF9GT1JNX1NVQ0NFRUQpXHJcblx0XHQucGlwZShtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSwgbWFwKGZvcm1TY2hlbWEgPT4gbmV3IFVwZGF0ZUZvcm1TY2hlbWFBY3Rpb24oZm9ybVNjaGVtYSkpKTtcclxufVxyXG4iLCJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBNYWluQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vbWFpbi1jb250YWluZXIvbWFpbi1jb250YWluZXIuY29tcG9uZW50L21haW4tY29udGFpbmVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBFZGl0Rm9ybUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL2VkaXQvZWRpdC1mb3JtLWNvbnRhaW5lci9lZGl0LWZvcm0tY29udGFpbmVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBBZGRGb3JtQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vYWRkL2FkZC1mb3JtLWNvbnRhaW5lci9hZGQtZm9ybS1jb250YWluZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEZvcm1MaXN0Q29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vbGlzdC9mb3JtLWxpc3QtY29udGFpbmVyL2Zvcm0tbGlzdC5jb250YWluZXIuY29tcG9uZW50XCI7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuXHR7XHJcblx0XHRwYXRoOiBcImZvcm1cIixcclxuXHRcdGNvbXBvbmVudDogTWFpbkNvbnRhaW5lckNvbXBvbmVudCxcclxuXHRcdGNoaWxkcmVuOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXRoOiBcImFkZFwiLFxyXG5cdFx0XHRcdGNvbXBvbmVudDogQWRkRm9ybUNvbnRhaW5lckNvbXBvbmVudFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cGF0aDogXCJlZGl0LzpfaWRcIixcclxuXHRcdFx0XHRjb21wb25lbnQ6IEVkaXRGb3JtQ29udGFpbmVyQ29tcG9uZW50XHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXRoOiBcIlwiLFxyXG5cdFx0XHRcdGNvbXBvbmVudDogRm9ybUxpc3RDb250YWluZXJDb21wb25lbnRcclxuXHRcdFx0fVxyXG5cdFx0XVxyXG5cdH1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBSb3V0aW5nTW9kdWxlOiBNb2R1bGVXaXRoUHJvdmlkZXJzID0gUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyk7XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgRm9ybVNjaGVtYU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBDYXB0Y2hhTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL2NhcHRjaGEubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBlbnVtIENhcHRjaGFBY3Rpb25UeXBlcyB7XHJcblx0R0VUX0NBUFRDSEEgPSBcIltDQVBUQ0hBXVtHRVRdIEdFVF9DQVBUQ0hBXCIsXHJcblx0R0VUX0NBUFRDSEFfU1RBUlQgPSBcIltDQVBUQ0hBXVtHRVRdIEdFVF9DQVBUQ0hBX1NUQVJUXCIsXHJcblx0R0VUX0NBUFRDSEFfU1VDQ0VFRCA9IFwiW0NBUFRDSEFdW0dFVF0gR0VUX0NBUFRDSEFfU1VDQ0VFRFwiLFxyXG5cdEdFVF9DQVBUQ0hBX0ZBSUxFRCA9IFwiW0NBUFRDSEFdW0dFVF0gR0VUX0NBUFRDSEFfRkFJTEVEXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdldENhcHRjaGFBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBDYXB0Y2hhQWN0aW9uVHlwZXMuR0VUX0NBUFRDSEE7XHJcblx0Ly8gY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IENhcHRjaGFNb2RlbCkgeyB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdldENhcHRjaGFTdGFydEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IENhcHRjaGFBY3Rpb25UeXBlcy5HRVRfQ0FQVENIQV9TVEFSVDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogQ2FwdGNoYU1vZGVsKSB7IH1cclxufVxyXG5leHBvcnQgY2xhc3MgR2V0Q2FwdGNoYVN1Y2NlZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBDYXB0Y2hhQWN0aW9uVHlwZXMuR0VUX0NBUFRDSEFfU1VDQ0VFRDtcclxufVxyXG5leHBvcnQgY2xhc3MgR2V0Q2FwdGNoYUZhaWxlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IENhcHRjaGFBY3Rpb25UeXBlcy5HRVRfQ0FQVENIQV9GQUlMRUQ7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIENhcHRjaGFBY3Rpb25zID0gR2V0Q2FwdGNoYUFjdGlvbiB8IEdldENhcHRjaGFTdGFydEFjdGlvbiB8IEdldENhcHRjaGFTdWNjZWVkQWN0aW9uIHwgR2V0Q2FwdGNoYUZhaWxlZEFjdGlvbjtcclxuIiwiaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21lcmdlTWFwXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL3N3aXRjaE1hcFwiO1xyXG5cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCB9IGZyb20gXCJAbmdyeC9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anMvb2JzZXJ2YWJsZS9vZlwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgRm9ybVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvZm9ybS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEFkZEZvcm1BcGlNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuaW1wb3J0IHtcclxuXHRDYXB0Y2hhQWN0aW9uVHlwZXMsXHJcblx0R2V0Q2FwdGNoYVN1Y2NlZWRBY3Rpb24sXHJcblx0R2V0Q2FwdGNoYUZhaWxlZEFjdGlvbixcclxuXHRHZXRDYXB0Y2hhU3RhcnRBY3Rpb25cclxufSBmcm9tIFwiLi9jYXB0Y2hhLmFjdGlvbnNcIjtcclxuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIGNhdGNoRXJyb3IgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgRm9ybUNhcHRjaGFTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2Zvcm0tY2FwdGNoYS5zZXJ2aWNlXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDYXB0Y2hhRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxhbnk+LCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHNlcnZpY2U6IEZvcm1DYXB0Y2hhU2VydmljZSkge31cclxuXHJcblx0QEVmZmVjdCgpXHJcblx0R2V0Q2FwdGNoYSQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKENhcHRjaGFBY3Rpb25UeXBlcy5HRVRfQ0FQVENIQSlcclxuXHRcdC5waXBlKG1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpLCBtYXAoZGF0YSA9PiBuZXcgR2V0Q2FwdGNoYVN0YXJ0QWN0aW9uKGRhdGEpKSk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdEFkZEZvcm1TdGFydCQgPSB0aGlzLmFjdGlvbnMkXHJcblx0XHQub2ZUeXBlKENhcHRjaGFBY3Rpb25UeXBlcy5HRVRfQ0FQVENIQV9TVEFSVClcclxuXHRcdC5waXBlKFxyXG5cdFx0XHRtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuXHRcdFx0c3dpdGNoTWFwKChkYXRhOiBBZGRGb3JtQXBpTW9kZWwuUmVxdWVzdCkgPT4gdGhpcy5zZXJ2aWNlLmdldENhcHRjaGEoKSksXHJcblx0XHRcdG1hcChyZXMgPT4gbmV3IEdldENhcHRjaGFTdWNjZWVkQWN0aW9uKCkpLFxyXG5cdFx0XHRjYXRjaEVycm9yKCgpID0+IG9mKG5ldyBHZXRDYXB0Y2hhRmFpbGVkQWN0aW9uKCkpKVxyXG5cdFx0KTtcclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgRmxleExheW91dE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mbGV4LWxheW91dFwiO1xyXG5pbXBvcnQge1xyXG5cdE1hdEV4cGFuc2lvbk1vZHVsZSxcclxuXHRNYXRTbmFja0Jhck1vZHVsZSxcclxuXHRNYXRJY29uTW9kdWxlLFxyXG5cdE1hdEJ1dHRvbk1vZHVsZSxcclxuXHRNYXRDYXJkTW9kdWxlLFxyXG5cdE1hdFNlbGVjdE1vZHVsZSxcclxuXHRNYXRJbnB1dE1vZHVsZSxcclxuXHRNYXRGb3JtRmllbGRNb2R1bGUsXHJcblx0TWF0VGFic01vZHVsZSxcclxuXHRNYXRSYWRpb01vZHVsZSxcclxuXHRNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcclxuXHRNYXREaXZpZGVyTW9kdWxlLFxyXG5cdE1hdENoZWNrYm94TW9kdWxlLFxyXG5cdE1hdFRhYmxlTW9kdWxlLFxyXG5cdE1hdERhdGVwaWNrZXJNb2R1bGVcclxufSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSwgbWVyZ2VFZmZlY3RzIH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuXHJcbmltcG9ydCB7IEZvcm1Nb2R1bGVDb25maWcsIE1PRFVMRV9DT05GSUdfVE9LRU4sIE1PRFVMRV9ERUZBVUxUX0NPTkZJRyB9IGZyb20gXCIuL2Zvcm0uY29uZmlnXCI7XHJcbmltcG9ydCB7IEZvcm1SZWR1Y2VycyB9IGZyb20gXCIuL21haW4tY29udGFpbmVyL21haW4tY29udGFpbmVyLnJlZHVjZXJzXCI7XHJcbmltcG9ydCB7IFNlbGVjdENvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXcvZm9ybS1jb250cm9scy9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXBDb21wb25lbnQgfSBmcm9tIFwiLi9hZGQvZm9ybS1ncm91cC9mb3JtLWdyb3VwLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBGb3JtQXJyYXlDb21wb25lbnQgfSBmcm9tIFwiLi9hZGQvZm9ybS1hcnJheS9mb3JtLWFycmF5LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbENvbXBvbmVudCB9IGZyb20gXCIuL2FkZC9mb3JtLWNvbnRyb2wvZm9ybS1jb250cm9sLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBGb3JtVmlld0NvbXBvbmVudCwgRHluYW1pY0ZpZWxkRGlyZWN0aXZlIH0gZnJvbSBcIi4vdmlldy9mb3JtLXZpZXcvZm9ybS12aWV3LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBUZXh0Q29tcG9uZW50IH0gZnJvbSBcIi4vdmlldy9mb3JtLWNvbnRyb2xzL3RleHQvdGV4dC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ2hlY2tib3hDb21wb25lbnQgfSBmcm9tIFwiLi92aWV3L2Zvcm0tY29udHJvbHMvY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEVtYWlsQ29tcG9uZW50IH0gZnJvbSBcIi4vdmlldy9mb3JtLWNvbnRyb2xzL2VtYWlsL2VtYWlsLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDb2xvckNvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXcvZm9ybS1jb250cm9scy9jb2xvci9jb2xvci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTnVtYmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vdmlldy9mb3JtLWNvbnRyb2xzL251bWJlci9udW1iZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFRhYmxlQ29tcG9uZW50IH0gZnJvbSBcIi4vdmlldy9mb3JtLWNvbnRyb2xzL3RhYmxlL3RhYmxlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBFZGl0Rm9ybUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL2VkaXQvZWRpdC1mb3JtLWNvbnRhaW5lci9lZGl0LWZvcm0tY29udGFpbmVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBFZGl0Rm9ybUNvbXBvbmVudCB9IGZyb20gXCIuL2VkaXQvZWRpdC1mb3JtL2VkaXQtZm9ybS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRm9ybUxpc3RDb250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9saXN0L2Zvcm0tbGlzdC1jb250YWluZXIvZm9ybS1saXN0LmNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRm9ybUxpc3RDb21wb25lbnQgfSBmcm9tIFwiLi9saXN0L2Zvcm0tbGlzdC9mb3JtLWxpc3QuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEFkZEZvcm1Db250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi9hZGQvYWRkLWZvcm0tY29udGFpbmVyL2FkZC1mb3JtLWNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTWFpbkNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL21haW4tY29udGFpbmVyL21haW4tY29udGFpbmVyLmNvbXBvbmVudC9tYWluLWNvbnRhaW5lci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQWRkRm9ybUNvbXBvbmVudCB9IGZyb20gXCIuL2FkZC9hZGQtZm9ybS9hZGQtZm9ybS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQWRkRm9ybUVmZmVjdHMgfSBmcm9tIFwiLi9hZGQvYWRkLWZvcm0uZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBFZGl0Rm9ybUVmZmVjdHMgfSBmcm9tIFwiLi9lZGl0L2VkaXQtZm9ybS5lZmZlY3RzXCI7XHJcbmltcG9ydCB7IEZvcm1zTGlzdEVmZmVjdHMgfSBmcm9tIFwiLi9saXN0L2xpc3QuZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vZm9ybS1yb3V0aW5nLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBEYXRlRm9ybUlucHV0Q29udHJvbENvbXBvbmVudCB9IGZyb20gXCIuL3ZpZXcvZm9ybS1jb250cm9scy9kYXRlL2RhdGUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEZpbGVGb3JtSW5wdXRDb250cm9sQ29tcG9uZW50IH0gZnJvbSBcIi4vdmlldy9mb3JtLWNvbnRyb2xzL2ZpbGUvZmlsZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ2FwdGNoYUVmZmVjdHMgfSBmcm9tIFwiLi9hZGQvY2FwdGNoYS5lZmZlY3RzXCI7XHJcbmltcG9ydCB7IEZvcm1DYXB0Y2hhQ29tcG9uZW50IH0gZnJvbSBcIi4vdmlldy9mb3JtLWNvbnRyb2xzL2Zvcm0tY2FwdGNoYS9mb3JtLWNhcHRjaGEuY29tcG9uZW50XCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdEh0dHBDbGllbnRNb2R1bGUsXHJcblx0XHRGb3Jtc01vZHVsZSxcclxuXHRcdFJvdXRlck1vZHVsZSxcclxuXHRcdENvbW1vbk1vZHVsZSxcclxuXHRcdE1hdEV4cGFuc2lvbk1vZHVsZSxcclxuXHRcdE1hdFNuYWNrQmFyTW9kdWxlLFxyXG5cdFx0TWF0SWNvbk1vZHVsZSxcclxuXHRcdE1hdERhdGVwaWNrZXJNb2R1bGUsXHJcblx0XHRNYXRCdXR0b25Nb2R1bGUsXHJcblx0XHRNYXRDYXJkTW9kdWxlLFxyXG5cdFx0TWF0Q2hlY2tib3hNb2R1bGUsXHJcblx0XHRNYXRUYWJsZU1vZHVsZSxcclxuXHRcdE1hdFNlbGVjdE1vZHVsZSxcclxuXHRcdE1hdElucHV0TW9kdWxlLFxyXG5cdFx0TWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG5cdFx0TWF0VGFic01vZHVsZSxcclxuXHRcdE1hdERpdmlkZXJNb2R1bGUsXHJcblx0XHRGbGV4TGF5b3V0TW9kdWxlLFxyXG5cdFx0TWF0UmFkaW9Nb2R1bGUsXHJcblx0XHRNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcclxuXHRcdFJlYWN0aXZlRm9ybXNNb2R1bGVcclxuXHRdLFxyXG5cdGRlY2xhcmF0aW9uczogW1xyXG5cdFx0RWRpdEZvcm1Db250YWluZXJDb21wb25lbnQsXHJcblx0XHRFZGl0Rm9ybUNvbXBvbmVudCxcclxuXHRcdEZvcm1MaXN0Q29udGFpbmVyQ29tcG9uZW50LFxyXG5cdFx0Rm9ybUxpc3RDb21wb25lbnQsXHJcblx0XHRBZGRGb3JtQ29udGFpbmVyQ29tcG9uZW50LFxyXG5cdFx0TWFpbkNvbnRhaW5lckNvbXBvbmVudCxcclxuXHRcdEFkZEZvcm1Db21wb25lbnQsXHJcblx0XHRGb3JtR3JvdXBDb21wb25lbnQsXHJcblx0XHRGb3JtQXJyYXlDb21wb25lbnQsXHJcblx0XHRGb3JtQ29udHJvbENvbXBvbmVudCxcclxuXHRcdEZvcm1WaWV3Q29tcG9uZW50LFxyXG5cdFx0RHluYW1pY0ZpZWxkRGlyZWN0aXZlLFxyXG5cdFx0U2VsZWN0Q29tcG9uZW50LFxyXG5cdFx0Q2hlY2tib3hDb21wb25lbnQsXHJcblx0XHRFbWFpbENvbXBvbmVudCxcclxuXHRcdENvbG9yQ29tcG9uZW50LFxyXG5cdFx0RGF0ZUZvcm1JbnB1dENvbnRyb2xDb21wb25lbnQsXHJcblx0XHRGaWxlRm9ybUlucHV0Q29udHJvbENvbXBvbmVudCxcclxuXHRcdFRleHRDb21wb25lbnQsXHJcblx0XHROdW1iZXJDb21wb25lbnQsXHJcblx0XHRUYWJsZUNvbXBvbmVudCxcclxuXHRcdEZvcm1DYXB0Y2hhQ29tcG9uZW50XHJcblx0XHQvLyBOZ3NGb3JtU2VsZWN0b3JDb21wb25lbnRcclxuXHRdLFxyXG5cdGVudHJ5Q29tcG9uZW50czogW1xyXG5cdFx0U2VsZWN0Q29tcG9uZW50LFxyXG5cdFx0Q2hlY2tib3hDb21wb25lbnQsXHJcblx0XHRFbWFpbENvbXBvbmVudCxcclxuXHRcdENvbG9yQ29tcG9uZW50LFxyXG5cdFx0RGF0ZUZvcm1JbnB1dENvbnRyb2xDb21wb25lbnQsXHJcblx0XHRGaWxlRm9ybUlucHV0Q29udHJvbENvbXBvbmVudCxcclxuXHRcdFRleHRDb21wb25lbnQsXHJcblx0XHROdW1iZXJDb21wb25lbnQsXHJcblx0XHRUYWJsZUNvbXBvbmVudCxcclxuXHRcdEZvcm1DYXB0Y2hhQ29tcG9uZW50XHJcblx0XSxcclxuXHRleHBvcnRzOiBbIEZvcm1WaWV3Q29tcG9uZW50IF1cclxuXHQvLyBleHBvcnRzOiBbIEZvcm1WaWV3Q29tcG9uZW50LCBOZ3NGb3JtU2VsZWN0b3JDb21wb25lbnQgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdzRm9ybU1vZHVsZSB7XHJcblx0c3RhdGljIGZvclJvb3QoY29uZmlnPzogRm9ybU1vZHVsZUNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bmdNb2R1bGU6IFJvb3ROZ3NGb3JtTW9kdWxlLFxyXG5cdFx0XHRwcm92aWRlcnM6IFsgeyBwcm92aWRlOiBNT0RVTEVfQ09ORklHX1RPS0VOLCB1c2VWYWx1ZTogY29uZmlnIH0gXVxyXG5cdFx0fTtcclxuXHR9XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0TmdzRm9ybU1vZHVsZSxcclxuXHRcdFN0b3JlTW9kdWxlLmZvckZlYXR1cmUoXCJmb3JtXCIsIEZvcm1SZWR1Y2VycyksXHJcblx0XHRFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoWyBBZGRGb3JtRWZmZWN0cywgRWRpdEZvcm1FZmZlY3RzLCBGb3Jtc0xpc3RFZmZlY3RzLCBDYXB0Y2hhRWZmZWN0cyBdKSxcclxuXHRcdFJvdXRpbmdNb2R1bGVcclxuXHRdLFxyXG5cdGV4cG9ydHM6IFsgTmdzRm9ybU1vZHVsZSBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSb290TmdzRm9ybU1vZHVsZSB7fVxyXG4iXSwibmFtZXMiOlsiRm9ybUdyb3VwIiwiRm9ybUNvbnRyb2wiLCJWYWxpZGF0b3JzIiwiQWRkRm9ybUFwaU1vZGVsIiwiRWRpdEZvcm1BcGlNb2RlbCIsIkZvcm1MaXN0QXBpTW9kZWwiLCJJbmplY3Rpb25Ub2tlbiIsIkJlaGF2aW9yU3ViamVjdCIsImdldEZvcm1Nb2R1bGVDb25maWciLCJJbmplY3RhYmxlIiwiSW5qZWN0IiwiU3RvcmUiLCJjb25maWciLCJzdHJpbmdUZW1wbGF0ZSIsImZpbHRlciIsImZvcm1zIiwibWFwIiwiSHR0cENsaWVudCIsIkNvbXBvbmVudCIsIklucHV0IiwiU2VsZWN0aW9uTW9kZWwiLCJNYXRUYWJsZURhdGFTb3VyY2UiLCJ0YWtlIiwic3dpdGNoTWFwIiwiU3ViamVjdCIsIkV2ZW50RW1pdHRlciIsInRha2VVbnRpbCIsIkZvcm1BcnJheSIsIkNvbXBpbGVyIiwiQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyIiwiT3V0cHV0IiwiRGlyZWN0aXZlIiwiVmlld0NvbnRhaW5lclJlZiIsImxpc3QucmVkdWNlciIsInRzbGliXzEuX19leHRlbmRzIiwiQWN0aXZhdGVkUm91dGUiLCJyb3V0ZXIiLCJjYXRjaEVycm9yIiwib2YiLCJBY3Rpb25zIiwiUm91dGVyIiwiRWZmZWN0IiwiUm91dGVyTW9kdWxlIiwiTmdNb2R1bGUiLCJIdHRwQ2xpZW50TW9kdWxlIiwiRm9ybXNNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJNYXRFeHBhbnNpb25Nb2R1bGUiLCJNYXRTbmFja0Jhck1vZHVsZSIsIk1hdEljb25Nb2R1bGUiLCJNYXREYXRlcGlja2VyTW9kdWxlIiwiTWF0QnV0dG9uTW9kdWxlIiwiTWF0Q2FyZE1vZHVsZSIsIk1hdENoZWNrYm94TW9kdWxlIiwiTWF0VGFibGVNb2R1bGUiLCJNYXRTZWxlY3RNb2R1bGUiLCJNYXRJbnB1dE1vZHVsZSIsIk1hdEZvcm1GaWVsZE1vZHVsZSIsIk1hdFRhYnNNb2R1bGUiLCJNYXREaXZpZGVyTW9kdWxlIiwiRmxleExheW91dE1vZHVsZSIsIk1hdFJhZGlvTW9kdWxlIiwiTWF0U2xpZGVUb2dnbGVNb2R1bGUiLCJSZWFjdGl2ZUZvcm1zTW9kdWxlIiwiU3RvcmVNb2R1bGUiLCJFZmZlY3RzTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRUEsSUFHQSxXQUFpQixlQUFlO1FBQy9CLElBQUE7WUFLQyxpQkFBWSxTQUF5QztnQkFBekMsMEJBQUE7b0JBQUEsOEJBQVksRUFBNkIsQ0FBQTs7Z0JBQXJELGlCQUVDO2dCQURBLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRyxJQUFJLFFBQUMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBQyxDQUFDLENBQUM7YUFDcEU7Ozs7WUFFRCxnQ0FBYzs7O2dCQUFkO29CQUNDLE9BQU87d0JBQ04sSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO3dCQUNmLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTt3QkFDZixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07cUJBQ25CLENBQUM7aUJBQ0Y7WUFDRCxzQkFBVyxvQkFBUzs7O29CQUFwQjtvQkFDQyxPQUFPLElBQUlBLGVBQVMsQ0FBQzt3QkFDcEIsR0FBRyxFQUFFLElBQUlDLGlCQUFXLENBQUMsRUFBRSxFQUFFLENBQUVDLGdCQUFVLENBQUMsUUFBUSxDQUFFLENBQUM7d0JBQ2pELElBQUksRUFBRSxJQUFJRCxpQkFBVyxDQUFDLEVBQUUsRUFBRSxDQUFFQyxnQkFBVSxDQUFDLFFBQVEsQ0FBRSxDQUFDO3dCQUNsRCxLQUFLLEVBQUUsSUFBSUQsaUJBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBRUMsZ0JBQVUsQ0FBQyxRQUFRLENBQUUsQ0FBQzt3QkFDbkQsSUFBSSxFQUFFLElBQUlELGlCQUFXLENBQUMsRUFBRSxDQUFDO3dCQUN6QixNQUFNLEVBQUUsSUFBSUQsZUFBUyxDQUFDOzRCQUNyQixNQUFNLEVBQUUsSUFBSUEsZUFBUyxDQUFDO2dDQUNyQixJQUFJLEVBQUUsSUFBSUMsaUJBQVcsQ0FBQyxLQUFLLENBQUM7Z0NBQzVCLElBQUksRUFBRSxJQUFJQSxpQkFBVyxDQUFDLEtBQUssQ0FBQzs2QkFDNUIsQ0FBQzs0QkFDRixNQUFNLEVBQUUsSUFBSUQsZUFBUyxDQUFDO2dDQUNyQixJQUFJLEVBQUUsSUFBSUMsaUJBQVcsQ0FBQyxLQUFLLENBQUM7Z0NBQzVCLElBQUksRUFBRSxJQUFJQSxpQkFBVyxDQUFDLFFBQVEsQ0FBQzs2QkFDL0IsQ0FBQzt5QkFDRixDQUFDO3FCQUNGLENBQUMsQ0FBQztpQkFDSDs7O2VBQUE7MEJBdkNIO1lBd0NFLENBQUE7UUFsQ1ksdUJBQU87UUFvQ3BCLElBQUE7WUFFQzthQUFnQjsyQkE1Q2xCO1lBNkNFLENBQUE7UUFIWSx3QkFBUTtPQXJDTEUsdUJBQWUsS0FBZkEsdUJBQWUsUUF5Qy9COzs7Ozs7QUM1Q0QsSUFHQSxXQUFpQixnQkFBZ0I7UUFDaEMsSUFBQTtZQUtDLGlCQUFZLFNBQTBDO2dCQUExQywwQkFBQTtvQkFBQSw4QkFBWSxFQUE4QixDQUFBOztnQkFBdEQsaUJBRUM7Z0JBREEsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxHQUFHLElBQUksUUFBQyxLQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFDLENBQUMsQ0FBQzthQUNwRTs7OztZQUVELGdDQUFjOzs7Z0JBQWQ7b0JBQ0MsT0FBTzt3QkFDTixHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUc7d0JBQ2IsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO3dCQUNmLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTt3QkFDZixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07cUJBQ25CLENBQUM7aUJBQ0Y7WUFDRCxzQkFBVyxvQkFBUzs7O29CQUFwQjtvQkFDQyxPQUFPLElBQUlILGVBQVMsQ0FBQzt3QkFDcEIsR0FBRyxFQUFFLElBQUlDLGlCQUFXLENBQUMsRUFBRSxFQUFFLENBQUVDLGdCQUFVLENBQUMsUUFBUSxDQUFFLENBQUM7d0JBQ2pELElBQUksRUFBRSxJQUFJRCxpQkFBVyxDQUFDLEVBQUUsRUFBRSxDQUFFQyxnQkFBVSxDQUFDLFFBQVEsQ0FBRSxDQUFDO3dCQUNsRCxJQUFJLEVBQUUsSUFBSUQsaUJBQVcsQ0FBQyxFQUFFLENBQUM7d0JBQ3pCLE1BQU0sRUFBRSxJQUFJRCxlQUFTLENBQUM7NEJBQ3JCLE1BQU0sRUFBRSxJQUFJQSxlQUFTLENBQUM7Z0NBQ3JCLElBQUksRUFBRSxJQUFJQyxpQkFBVyxDQUFDLEtBQUssQ0FBQztnQ0FDNUIsSUFBSSxFQUFFLElBQUlBLGlCQUFXLENBQUMsS0FBSyxDQUFDOzZCQUM1QixDQUFDOzRCQUNGLE1BQU0sRUFBRSxJQUFJRCxlQUFTLENBQUM7Z0NBQ3JCLElBQUksRUFBRSxJQUFJQyxpQkFBVyxDQUFDLEtBQUssQ0FBQztnQ0FDNUIsSUFBSSxFQUFFLElBQUlBLGlCQUFXLENBQUMsUUFBUSxDQUFDOzZCQUMvQixDQUFDO3lCQUNGLENBQUM7cUJBQ0YsQ0FBQyxDQUFDO2lCQUNIOzs7ZUFBQTswQkF2Q0g7WUF3Q0UsQ0FBQTtRQWxDWSx3QkFBTztRQW9DcEIsSUFBQTtZQUVDO2FBQWdCOzJCQTVDbEI7WUE2Q0UsQ0FBQTtRQUhZLHlCQUFRO09BckNMRyx3QkFBZ0IsS0FBaEJBLHdCQUFnQixRQXlDaEM7Ozs7OztBQzVDRCxJQUdBLFdBQWlCLGdCQUFnQjtRQUNoQyxJQUFBO1lBR0MsaUJBQVksU0FBMEM7Z0JBQTFDLDBCQUFBO29CQUFBLDhCQUFZLEVBQThCLENBQUE7O2dCQUF0RCxpQkFFQztnQkFEQSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUcsSUFBSyxRQUFDLEtBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUMsQ0FBQyxDQUFDO2FBQ3RFOzs7O1lBRUQsZ0NBQWM7OztnQkFBZDtvQkFDQyxPQUFPO3dCQUNOLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTt3QkFDZixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7cUJBQ3ZCLENBQUM7aUJBQ0Y7WUFDRCxzQkFBVyxvQkFBUzs7O29CQUFwQjtvQkFDQyxPQUFPLElBQUlKLGVBQVMsQ0FBQzt3QkFDcEIsSUFBSSxFQUFFLElBQUlDLGlCQUFXLENBQUMsRUFBRSxFQUFFLENBQUVDLGdCQUFVLENBQUMsUUFBUSxDQUFFLENBQUM7d0JBQ2xELFFBQVEsRUFBRSxJQUFJRixlQUFTLENBQUMsRUFBRSxDQUFDO3FCQUMzQixDQUFDLENBQUM7aUJBQ0g7OztlQUFBOzBCQXhCSDtZQXlCRSxDQUFBO1FBbkJZLHdCQUFPO1FBcUJwQixJQUFBO1lBRUM7YUFBZ0I7MkJBN0JsQjtZQThCRSxDQUFBO1FBSFkseUJBQVE7T0F0QkxLLHdCQUFnQixLQUFoQkEsd0JBQWdCLFFBMEJoQzs7Ozs7O0lDMUJELElBQUE7UUFLQztZQUNDLElBQUksQ0FBQyxRQUFRLEdBQUc7Z0JBQ2YsTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsT0FBTyxFQUFFLHFCQUFxQjthQUM5QixDQUFDO1lBQ0YsSUFBSSxDQUFDLFNBQVMsR0FBRztnQkFDaEIsTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsT0FBTyxFQUFFLHNCQUFzQjtnQkFDL0IsS0FBSyxFQUFFLENBQUM7YUFDUixDQUFDO1lBQ0YsSUFBSSxDQUFDLEtBQUssR0FBRztnQkFDWixNQUFNLEVBQUUsS0FBSztnQkFDYixPQUFPLEVBQUUsNkJBQTZCO2FBQ3RDLENBQUM7U0FDRjt3QkF4QkY7UUF5QkMsQ0FBQTs7Ozs7O0FDekJELFFBRUE7UUFxQkMscUJBQVksSUFBbUM7WUFDOUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDakIsSUFBSSxJQUFJLElBQUksU0FBUztnQkFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztZQUN4QyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztZQUNmLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQztTQUNqQzswQkE1QkY7UUE2QkM7Ozs7OztBQzdCRCxRQUVBO1FBZ0JDOzBCQVhTO2dCQUNSLE1BQU0sRUFBRTtvQkFDUCxJQUFJLEVBQUUsS0FBSztvQkFDWCxJQUFJLEVBQUUsS0FBSztpQkFDWDtnQkFDRCxNQUFNLEVBQUU7b0JBQ1AsSUFBSSxFQUFFLEtBQUs7b0JBQ1gsSUFBSSxFQUFFLFFBQVE7aUJBQ2Q7YUFDRDtZQUdBLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDckM7Ozs7UUFDRCw4QkFBSTs7O1lBQUo7Z0JBQ0MsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUM7YUFDM0M7OEJBdkJGO1FBd0JDOzs7Ozs7Ozs7OztBQ3hCRDtBQWlCQSxRQUFhLHFCQUFxQixHQUFxQjtRQUN0RCxHQUFHLEVBQUU7WUFDSixVQUFVLEVBQUUsS0FBSztZQUNqQixlQUFlLEVBQUUsNkJBQTZCO1lBQzlDLE1BQU0sRUFBRSxvQkFBb0I7U0FDNUI7UUFDRCxTQUFTLEVBQUU7WUFDVixPQUFPLEVBQUUsRUFBRTtZQUNYLFFBQVEsRUFBRSxFQUFFO1lBQ1osT0FBTyxFQUFFLEVBQUU7WUFDWCxPQUFPLEVBQUUsRUFBRTtZQUNYLFVBQVUsRUFBRSxFQUFFO1lBQ2QsVUFBVSxFQUFFLDZCQUE2QjtTQUN6QztLQUNELENBQUM7O0FBQ0YsUUFBYSxtQkFBbUIsR0FBRyxJQUFJQyxpQkFBYyxDQUFtQixrQkFBa0IsQ0FBQzs7Ozs7O0FDaEMzRjtRQW9CQyxrQ0FBeUMsVUFBVSxFQUFVLEtBQWdDO1lBQTdGLGlCQVFDO1lBUjRELFVBQUssR0FBTCxLQUFLLENBQTJCOzJCQUZuRixJQUFJQyxvQkFBZSxDQUFDLHFCQUFxQixDQUFDO1lBR25ELElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUscUJBQXFCLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDcEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDQywwQkFBbUIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLFVBQVU7Z0JBQzFELElBQUksQ0FBQyxVQUFVO29CQUFFLE9BQU87Z0JBQ3hCLEtBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ2xFLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNoQyxDQUFDLENBQUM7U0FDSDtRQWJELHNCQUFJLDRDQUFNOzs7Z0JBQVY7Z0JBQ0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQ3BCOzs7V0FBQTs7b0JBUERDLGFBQVUsU0FBQzt3QkFDWCxVQUFVLEVBQUUsTUFBTTtxQkFDbEI7Ozs7O3dEQVFhQyxTQUFNLFNBQUMsbUJBQW1CO3dCQWxCL0JDLFFBQUs7Ozs7dUNBRmQ7Ozs7Ozs7QUNBQTtRQWtCQyxxQkFDUyxNQUNBLE9BQ0E7WUFGQSxTQUFJLEdBQUosSUFBSTtZQUNKLFVBQUssR0FBTCxLQUFLO1lBQ0wseUJBQW9CLEdBQXBCLG9CQUFvQjtTQUN6Qjs7Ozs7UUFFSix5QkFBRzs7OztZQUFILFVBQUksSUFBNkI7Z0JBQWpDLGlCQVNDOztnQkFSQSxJQUFNLEtBQUssR0FBRyxJQUFJUix1QkFBZSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDaEQsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTztxQkFDdEMsTUFBTSxDQUFDLFVBQUNTLFNBQU0sSUFBSyxPQUFBQSxTQUFNLENBQUMsU0FBUyxDQUFDLE9BQU8sSUFBSSxFQUFFLEdBQUEsQ0FBQztxQkFDbEQsSUFBSSxDQUFDLENBQUMsQ0FBQztxQkFDUCxTQUFTLENBQUMsVUFBQ0EsU0FBTTtvQkFDakIsT0FBQSxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQ0EsU0FBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEdBQUdBLFNBQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztpQkFBQSxDQUM3RjtxQkFDQSxHQUFHLENBQUMsVUFBQyxRQUFrQyxJQUFLLE9BQUEsUUFBUSxDQUFDLE1BQU0sR0FBQSxDQUFDLENBQUM7YUFDL0Q7Ozs7O1FBQ0QseUJBQUc7Ozs7WUFBSCxVQUFJLEdBQVc7Z0JBQWYsaUJBUUM7Z0JBUEEsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTztxQkFDdEMsTUFBTSxDQUFDLFVBQUNBLFNBQU0sSUFBSyxPQUFBQSxTQUFNLENBQUMsU0FBUyxDQUFDLE9BQU8sSUFBSSxFQUFFLEdBQUEsQ0FBQztxQkFDbEQsSUFBSSxDQUFDLENBQUMsQ0FBQztxQkFDUCxTQUFTLENBQUMsVUFBQ0EsU0FBTTtvQkFDakIsT0FBQSxLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQ0MscUJBQWMsQ0FBQ0QsU0FBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEdBQUdBLFNBQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLEVBQUUsR0FBRyxLQUFBLEVBQUUsQ0FBQyxDQUFDO2lCQUFBLENBQzdGO3FCQUNBLEdBQUcsQ0FBQyxVQUFDLFFBQW1DLElBQUssT0FBQSxRQUFRLENBQUMsTUFBTSxHQUFBLENBQUMsQ0FBQzthQUNoRTs7OztRQUNELDZCQUFPOzs7WUFBUDtnQkFBQSxpQkFLQztnQkFKQSxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPO3FCQUN0QyxNQUFNLENBQUMsVUFBQ0EsU0FBTSxJQUFLLE9BQUFBLFNBQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxJQUFJLEVBQUUsR0FBQSxDQUFDO3FCQUNsRCxTQUFTLENBQUMsVUFBQ0EsU0FBTSxJQUFLLE9BQUEsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUNBLFNBQU0sQ0FBQyxHQUFHLENBQUMsZUFBZSxHQUFHQSxTQUFNLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxHQUFBLENBQUM7cUJBQzNGLEdBQUcsQ0FBQyxVQUFDLFFBQW1DLElBQUssT0FBQSxRQUFRLENBQUMsTUFBTSxHQUFBLENBQUMsQ0FBQzthQUNoRTs7Ozs7UUFDRCw0QkFBTTs7OztZQUFOLFVBQU8sSUFBOEI7Z0JBQXJDLGlCQVNDOztnQkFSQSxJQUFNLEtBQUssR0FBRyxJQUFJUix3QkFBZ0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2pELE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU87cUJBQ3RDLE1BQU0sQ0FBQyxVQUFDUSxTQUFNLElBQUssT0FBQUEsU0FBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLElBQUksRUFBRSxHQUFBLENBQUM7cUJBQ25ELElBQUksQ0FBQyxDQUFDLENBQUM7cUJBQ1AsU0FBUyxDQUFDLFVBQUNBLFNBQU07b0JBQ2pCLE9BQUEsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUNBLFNBQU0sQ0FBQyxHQUFHLENBQUMsZUFBZSxHQUFHQSxTQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7aUJBQUEsQ0FDN0Y7cUJBQ0EsR0FBRyxDQUFDLFVBQUMsUUFBbUMsSUFBSyxPQUFBLFFBQVEsQ0FBQyxNQUFNLEdBQUEsQ0FBQyxDQUFDO2FBQ2hFOzs7OztRQUNELDRCQUFNOzs7O1lBQU4sVUFBTyxHQUFXO2dCQUFsQixpQkFJQztnQkFIQSxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPO3FCQUN0QyxNQUFNLENBQUMsVUFBQ0EsU0FBTSxJQUFLLE9BQUFBLFNBQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxJQUFJLEVBQUUsR0FBQSxDQUFDO3FCQUNyRCxTQUFTLENBQUMsVUFBQ0EsU0FBTSxJQUFLLE9BQUEsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUNBLFNBQU0sQ0FBQyxHQUFHLENBQUMsZUFBZSxHQUFHQSxTQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxHQUFBLENBQUMsQ0FBQzthQUNqRzs7Ozs7UUFDRCxvQ0FBYzs7OztZQUFkLFVBQWUsR0FBVzs7Z0JBQ3pCLElBQU0sT0FBTyxHQUFHLElBQUlMLCtCQUFlLENBQWtCLFNBQVMsQ0FBQyxDQUFDO2dCQUNoRSxJQUFJLENBQUMsS0FBSztxQkFDUixNQUFNLENBQUMsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUEsQ0FBQztxQkFDdkMsSUFBSSxDQUFDTyxnQkFBTSxDQUFDLFVBQUNDLFFBQUssSUFBSyxPQUFBQSxRQUFLLElBQUksSUFBSSxHQUFBLENBQUMsRUFBRUMsYUFBRyxDQUFDLFVBQUNELFFBQUssSUFBSyxPQUFBQSxRQUFLLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsSUFBSSxDQUFDLEdBQUcsSUFBSSxHQUFHLEdBQUEsQ0FBQyxHQUFBLENBQUMsQ0FBQztxQkFDN0YsU0FBUyxDQUFDLFVBQUMsZUFBZSxJQUFLLE9BQUEsT0FBTyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBQSxDQUFDLENBQUM7Z0JBQ2hFLE9BQU8sT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO2FBQzlCOztvQkF6REROLGFBQVUsU0FBQzt3QkFDWCxVQUFVLEVBQUUsTUFBTTtxQkFDbEI7Ozs7O3dCQWZRUSxhQUFVO3dCQUVWTixRQUFLO3dCQU9MLHdCQUF3Qjs7OzswQkFWakM7Ozs7Ozs7QUNBQTtRQWtCQztTQUFnQjs7b0JBZGhCTyxZQUFTLFNBQUM7d0JBQ1YsUUFBUSxFQUFFLHlCQUF5Qjt3QkFDbkMsUUFBUSxFQUFFLGlTQU1KO3dCQUNOLE1BQU0sRUFBRSxDQUFDLGlEQUFpRCxDQUFDO3FCQUMzRDs7Ozs4QkFkRDs7Ozs7Ozs7Ozs7O0FDQUE7UUFrQkM7U0FBZ0I7O29CQWJoQkEsWUFBUyxTQUFDO3dCQUNWLFFBQVEsRUFBRSwyQkFBMkI7d0JBQ3JDLFFBQVEsRUFBRSwwSUFJSjt3QkFDTixNQUFNLEVBQUUsQ0FBQyxpREFBaUQsQ0FBQztxQkFDM0Q7Ozs7Z0NBYkQ7Ozs7Ozs7Ozs7OztBQ0FBO1FBa0JDO1NBQWdCOzs7O1FBRWhCLGlDQUFROzs7WUFBUixlQUFhOztvQkFmYkEsWUFBUyxTQUFDO3dCQUNWLFFBQVEsRUFBRSx3QkFBd0I7d0JBQ2xDLFFBQVEsRUFBRSx5TUFJSjt3QkFDTixNQUFNLEVBQUUsQ0FBQyxpREFBaUQsQ0FBQztxQkFDM0Q7Ozs7NkJBYkQ7Ozs7Ozs7Ozs7OztBQ0FBO1FBb0JDO1NBQWdCOzs7O1FBRWhCLGlDQUFROzs7WUFBUixlQUFhOztvQkFqQmJBLFlBQVMsU0FBQzt3QkFDVixRQUFRLEVBQUUsd0JBQXdCO3dCQUNsQyxRQUFRLEVBQUUsd01BSUo7d0JBQ04sTUFBTSxFQUFFLENBQUMsaURBQWlELENBQUM7cUJBQzNEOzs7OzsyQkFLQ0MsUUFBSzs2QkFDTEEsUUFBSzs7NkJBbkJQOzs7Ozs7Ozs7Ozs7QUNBQTtRQWlGQyx3QkFBb0IsSUFBZ0I7WUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTs2QkFEeEIsSUFBSUMsMEJBQWMsQ0FBTSxJQUFJLEVBQUUsRUFBRSxDQUFDO1lBRTVDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1NBQ25COzs7O1FBQ0QsaUNBQVE7OztZQUFSO2dCQUFBLGlCQU9DO2dCQU5BLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsSUFBUztvQkFDM0QsS0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7b0JBQ2xCLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7b0JBQzlDLEtBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUM7b0JBQ3hELEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSUMsMkJBQWtCLENBQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2lCQUMvRCxDQUFDLENBQUM7YUFDSDs7Ozs7O1FBR0Qsc0NBQWE7Ozs7WUFBYjs7O2dCQUNDLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztnQkFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVO29CQUNuQixHQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUTt3QkFDMUMsQ0FBQzs7Z0JBQ0gsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2dCQUM1QyxPQUFPLFdBQVcsS0FBSyxPQUFPLENBQUM7YUFDL0I7Ozs7OztRQUdELHFDQUFZOzs7O1lBQVo7Z0JBQUEsaUJBRUM7Z0JBREEsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsS0FBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUEsQ0FBQyxDQUFDO2FBQ2hIOztvQkFsR0RILFlBQVMsU0FBQzt3QkFDVixRQUFRLEVBQUUsd0JBQXdCO3dCQUNsQyxRQUFRLEVBQUUsMDRFQXlERTt3QkFDWixNQUFNLEVBQUUsQ0FBQyxpREFBaUQsQ0FBQztxQkFDM0Q7Ozs7O3dCQWpFUUQsYUFBVTs7OzsyQkFxRWpCRSxRQUFLOzZCQUNMQSxRQUFLOzs2QkExRVA7Ozs7Ozs7Ozs7OztBQ0FBO1FBaUJDO1NBQWdCOzs7O1FBRWhCLGtDQUFROzs7WUFBUixlQUFhOztvQkFkYkQsWUFBUyxTQUFDO3dCQUNWLFFBQVEsRUFBRSx5QkFBeUI7d0JBQ25DLFFBQVEsRUFBRSxvTkFJSjt3QkFDTixNQUFNLEVBQUUsQ0FBQyxpREFBaUQsQ0FBQztxQkFDM0Q7Ozs7OzJCQUVDQyxRQUFLOzZCQUNMQSxRQUFLOzs4QkFoQlA7Ozs7Ozs7Ozs7OztBQ0FBO1FBK0JDO1NBQWdCOztvQkExQmhCRCxZQUFTLFNBQUM7d0JBQ1YsUUFBUSxFQUFFLHVCQUF1Qjt3QkFDakMsUUFBUSxFQUFFLG12QkFpQk87d0JBQ2pCLE1BQU0sRUFBRSxDQUFDLGlEQUFpRCxDQUFDO3FCQUMzRDs7Ozs0QkExQkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUNLQyxZQUFhLHlCQUF5QjtRQUN0QyxrQkFBbUIsK0JBQStCO1FBQ2xELG9CQUFxQixpQ0FBaUM7UUFDdEQsbUJBQW9CLGdDQUFnQztRQUNwRCxpQkFBa0IsOEJBQThCO1FBQ2hELG9CQUFxQixpQ0FBaUM7UUFDdEQsaUJBQWtCLDhCQUE4QjtRQUNoRCxxQkFBc0Isa0NBQWtDOztJQUd6RCxJQUFBOzt3QkFDaUIsb0JBQW9CLENBQUMsVUFBVTs7OEJBaEJoRDtRQWlCQyxDQUFBO0FBRkQsSUFHQSxJQUFBOzt3QkFDaUIsb0JBQW9CLENBQUMsZ0JBQWdCOzttQ0FuQnREO1FBb0JDLENBQUE7QUFGRCxJQUdBLElBQUE7UUFFQyxnQ0FBbUIsT0FBMEI7WUFBMUIsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7d0JBRDdCLG9CQUFvQixDQUFDLGtCQUFrQjtTQUNOO3FDQXZCbEQ7UUF3QkMsQ0FBQTtBQUhELElBSUEsSUFBQTs7d0JBQ2lCLG9CQUFvQixDQUFDLGlCQUFpQjs7b0NBMUJ2RDtRQTJCQyxDQUFBO0FBRkQsSUFHQSxJQUFBO1FBRUMsZ0NBQW1CLE9BQXdCO1lBQXhCLFlBQU8sR0FBUCxPQUFPLENBQWlCO3dCQUQzQixvQkFBb0IsQ0FBQyxrQkFBa0I7U0FDUjtxQ0E5QmhEO1FBK0JDLENBQUE7QUFIRCxJQUlBLElBQUE7UUFFQyw2QkFBbUIsT0FBd0I7WUFBeEIsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7d0JBRDNCLG9CQUFvQixDQUFDLGVBQWU7U0FDTDtrQ0FsQ2hEO1FBbUNDLENBQUE7QUFIRCxJQUlBLElBQUE7UUFFQyw2QkFBbUIsT0FBZTtZQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7d0JBRGxCLG9CQUFvQixDQUFDLGVBQWU7U0FDZDtrQ0F0Q3ZDO1FBdUNDLENBQUE7QUFIRCxJQUlBLElBQUE7UUFFQyxnQ0FBbUIsT0FBd0I7WUFBeEIsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7d0JBRDNCLG9CQUFvQixDQUFDLG1CQUFtQjtTQUNUO3FDQTFDaEQ7UUEyQ0MsQ0FBQTs7Ozs7O0FDM0NEO1FBMERDO1NBQWdCOztvQkFyRGhCQSxZQUFTLFNBQUM7d0JBQ1YsUUFBUSxFQUFFLHVCQUF1Qjt3QkFDakMsUUFBUSxFQUFFLHE0REE0Q0E7d0JBQ1YsTUFBTSxFQUFFLENBQUMsaURBQWlELENBQUM7cUJBQzNEOzs7OzRDQXJERDs7Ozs7OztBQ0FBO1FBd0RDO1NBQWdCOztvQkFuRGhCQSxZQUFTLFNBQUM7d0JBQ1YsUUFBUSxFQUFFLHVCQUF1Qjt3QkFDakMsUUFBUSxFQUFFLDZ0REEwQ0E7d0JBQ1YsTUFBTSxFQUFFLENBQUMsaURBQWlELENBQUM7cUJBQzNEOzs7OzRDQW5ERDs7Ozs7OztJQ0NBLElBQUE7UUFHQyxzQkFBWSxFQUFnRjtnQkFBaEYsNEJBQWdGLEVBQTlFLDBCQUFVLEVBQUUsNEJBQVc7WUFDcEMsSUFBSSxDQUFDLFVBQVUsR0FBTSxVQUFVLFNBQUksSUFBSSxDQUFDLE1BQU0sRUFBSSxDQUFDO1lBQ25ELElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxJQUFJLEVBQUUsQ0FBQztTQUNyQzsyQkFQRjtRQVFDLENBQUE7QUFQRCxRQVNpQixxQkFBcUI7SUFBdEMsV0FBaUIscUJBQXFCO1FBQ3JDLElBQUE7WUFFQyxpQkFBWSxTQUFzRDtnQkFBdEQsMEJBQUE7b0JBQUEsY0FBc0Q7O2dCQUFsRSxpQkFFQztnQkFEQSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUcsSUFBSSxRQUFDLEtBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUMsQ0FBQyxDQUFDO2FBQ3BFOzs7O1lBQ0QsZ0NBQWM7OztnQkFBZDtvQkFDQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO2lCQUNoQzswQkFsQkg7WUFtQkUsQ0FBQTtRQVJZLDZCQUFPO1FBU3BCLElBQUE7WUFFQzthQUFpQjsyQkF0Qm5CO1lBdUJFLENBQUE7UUFIWSw4QkFBUTtPQVZMLHFCQUFxQixLQUFyQixxQkFBcUIsUUFjckM7Ozs7OztBQ3hCRDtRQW1CQyw0QkFDUyxNQUNBLE9BQ0E7WUFGQSxTQUFJLEdBQUosSUFBSTtZQUNKLFVBQUssR0FBTCxLQUFLO1lBQ0wseUJBQW9CLEdBQXBCLG9CQUFvQjtTQUN4Qjs7OztRQUVMLHVDQUFVOzs7WUFBVjtnQkFBQSxpQkFVQztnQkFUQSxTQUFTO2dCQUNULE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQzVDSixnQkFBTSxDQUFDLFVBQUMsT0FBTyxJQUFLLE9BQUEsT0FBTyxDQUFDLFNBQVMsQ0FBQyxVQUFVLElBQUksRUFBRSxHQUFBLENBQUMsRUFDdkRRLGNBQUksQ0FBQyxDQUFDLENBQUMsRUFDUEMsbUJBQVMsQ0FBQyxVQUFDLE9BQU87b0JBQ2pCLE9BQUEsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUM7aUJBQUEsQ0FDaEUsRUFDRFAsYUFBRyxDQUFDLFVBQUMsUUFBYSxJQUFLLE9BQUEsUUFBUSxDQUFDLE1BQU0sR0FBQSxDQUFDLENBQ3ZDLENBQUM7YUFDRjs7OztRQUNELHdDQUFXOzs7WUFBWDtnQkFBQSxpQkFNQztnQkFMQSxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUM1Q0YsZ0JBQU0sQ0FBQyxVQUFDRixTQUFNLElBQUssT0FBQUEsU0FBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLElBQUksRUFBRSxHQUFBLENBQUMsRUFDbERXLG1CQUFTLENBQUMsVUFBQ1gsU0FBTSxJQUFLLE9BQUEsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUNBLFNBQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHQSxTQUFNLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxHQUFBLENBQUMsRUFDbEZJLGFBQUcsQ0FBQyxVQUFDLFFBQW1DLElBQUssT0FBQSxRQUFRLENBQUMsTUFBTSxHQUFBLENBQUMsQ0FDN0QsQ0FBQzthQUNGOztvQkEzQkRQLGFBQVUsU0FBQzt3QkFDWCxVQUFVLEVBQUUsTUFBTTtxQkFDbEI7Ozs7O3dCQWhCUVEsYUFBVTt3QkFFVk4sUUFBSzt3QkFPTCx3QkFBd0I7Ozs7aUNBVmpDOzs7Ozs7O0FDQUE7UUE2QkMsOEJBQW9CLE9BQTJCLEVBQVUsS0FBaUI7WUFBdEQsWUFBTyxHQUFQLE9BQU8sQ0FBb0I7WUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFZO1lBQ3pFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxZQUFZLENBQUM7Z0JBQy9CLFVBQVUsRUFBRSxxREFBcUQ7YUFDakUsQ0FBQyxDQUFDOztTQUVIOzs7O1FBQ0QsdUNBQVE7OztZQUFSO2dCQUNDLFNBQVM7O2FBRVQ7Ozs7UUFDRCxzQ0FBTzs7O1lBQVA7Z0JBQ0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcseURBQXVELElBQUksQ0FBQyxNQUFNLEVBQUksQ0FBQzthQUNqRzs7b0JBaENETyxZQUFTLFNBQUM7d0JBQ1YsUUFBUSxFQUFFLGtCQUFrQjt3QkFDNUIsUUFBUSxFQUFFLDBUQVVKO3FCQUNOOzs7Ozt3QkFmUSxrQkFBa0I7d0JBTGxCUCxRQUFLOzs7bUNBRmQ7Ozs7Ozs7QUNBQTtRQTJHQywyQkFDUyxTQUNBLFVBQ0EsVUFDQTtZQUpULGlCQWFDO1lBWlEsWUFBTyxHQUFQLE9BQU87WUFDUCxhQUFRLEdBQVIsUUFBUTtZQUNSLGFBQVEsR0FBUixRQUFRO1lBQ1IsVUFBSyxHQUFMLEtBQUs7K0JBMUJBLElBQUlhLFlBQU8sRUFBUTswQkFDZCxJQUFJQyxlQUFZLEVBQWE7MEJBQzdCLElBQUlBLGVBQVksRUFBYTt3QkFFaEMsS0FBSztvQ0FlRixLQUFLO1lBU3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSWxCLCtCQUFlLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDOUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUNtQixtQkFBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07Z0JBQzlELElBQUksQ0FBQyxNQUFNO29CQUFFLE9BQU87Z0JBQ3BCLEtBQUksQ0FBQyxTQUFTLHFCQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBYyxDQUFBLENBQUM7Z0JBQzNELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7b0JBQUUsT0FBTztnQkFDOUIsS0FBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQzthQUM3QixDQUFDLENBQUM7U0FDSDtRQTlCRCxzQkFDSSxpQ0FBRTs7OztnQkFETixVQUNPLEVBQVU7Z0JBRGpCLGlCQU9DO2dCQUxBLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSztvQkFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLG1CQUFtQixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xFLElBQUksQ0FBQyxPQUFPO3FCQUNWLGNBQWMsQ0FBQyxFQUFFLENBQUM7cUJBQ2xCLElBQUksQ0FBQ0EsbUJBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7cUJBQ2pDLFNBQVMsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFBLENBQUMsQ0FBQzthQUNqRDs7O1dBQUE7UUFDRCxzQkFDSSxxQ0FBTTs7OztnQkFEVixVQUNXLE1BQXVCO2dCQUNqQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUMxQjs7O1dBQUE7Ozs7UUFvQkQsdUNBQVc7OztZQUFYO2dCQUNDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDNUI7Ozs7O1FBQ0Qsb0NBQVE7Ozs7WUFBUixVQUFTLE1BQXVCO2dCQUMvQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUMxQjs7Ozs7O1FBRUQsc0NBQVU7Ozs7O1lBQVYsVUFBVyxJQUFpQixFQUFFLFVBQWU7Z0JBQTdDLGlCQXNEQztnQkF0RDZCLDJCQUFBO29CQUFBLGVBQWU7O2dCQUM1QyxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksU0FBUyxFQUFFOztvQkFDM0IsSUFBSSxhQUFhLFVBQUM7b0JBQ2xCLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxPQUFPLEVBQUUsQ0FFL0I7eUJBQU0sSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLE9BQU8sRUFBRTt3QkFDdEMsYUFBYSxHQUFHLFVBQVUsQ0FBQzt3QkFDM0IsVUFBVSxHQUFNLFVBQVUsa0JBQWEsb0JBQUMsSUFBbUIsSUFBRSxJQUFNLENBQUM7cUJBQ3BFOztvQkFDRCxJQUFNLFVBQVUsR0FBRyxFQUFFLENBQUM7b0JBQ3RCLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFO3dCQUM5RCxVQUFVLENBQUMsSUFBSSxDQUFDeEIsZ0JBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztxQkFDckM7b0JBQ0QsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7d0JBQ2hFLFVBQVUsQ0FBQyxJQUFJLENBQUNBLGdCQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7cUJBQ3RFO29CQUNELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO3dCQUN4RCxVQUFVLENBQUMsSUFBSSxDQUFDQSxnQkFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUNsQzs7b0JBQ0QsSUFBTSxHQUFHLEdBQUcsSUFBSUQsaUJBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFDO29CQUNwRCxtQkFBQyxHQUFVLEdBQUUsTUFBTSxHQUFHLElBQUksQ0FBQztvQkFDM0IsbUJBQUMsR0FBVSxHQUFFLE1BQU0sQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO29CQUN0QyxtQkFBQyxHQUFVLEdBQUUsTUFBTSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7b0JBQ2xELE9BQU8sR0FBRyxDQUFDO2lCQUNYO3FCQUFNLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxPQUFPLEVBQUU7O29CQUNoQyxJQUFNLFdBQVMsR0FBRyxJQUFJRCxlQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQ3BDLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxTQUFTLEVBQUU7d0JBQ2pDLFVBQVUsR0FBRyxtQkFBQyxJQUFtQixHQUFFLElBQUksQ0FBQztxQkFDeEM7eUJBQU0sSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLE9BQU8sRUFBRTt3QkFDdEMsVUFBVSxHQUFNLFVBQVUsa0JBQWEsb0JBQUMsSUFBbUIsSUFBRSxJQUFJLE1BQUcsQ0FBQztxQkFDckU7eUJBQU0sSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLE9BQU8sRUFBRTt3QkFDdEMsVUFBVSxHQUFNLFVBQVUsa0JBQWEsb0JBQUMsSUFBbUIsSUFBRSxJQUFNLENBQUM7cUJBQ3BFO29CQUVELG1CQUFDLFdBQWdCLEdBQUUsTUFBTSxHQUFHLElBQUksQ0FBQztvQkFDakMsbUJBQUMsV0FBZ0IsR0FBRSxNQUFNLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztvQkFDNUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO3dCQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQzt3QkFDMUIsV0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUM7cUJBQ25FLENBQUMsQ0FBQztvQkFDSCxPQUFPLFdBQVMsQ0FBQztpQkFDakI7cUJBQU07O29CQUNOLElBQU0sV0FBUyxHQUFjLElBQUkyQixlQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQy9DLFVBQVU7d0JBQ1QsVUFBVSxJQUFJLEVBQUUsR0FBRyxtQkFBQyxJQUFtQixHQUFFLElBQUksR0FBTSxVQUFVLGtCQUFhLG9CQUFDLElBQW1CLElBQUUsSUFBTSxDQUFDO29CQUN4RyxtQkFBQyxXQUFnQixHQUFFLE1BQU0sR0FBRyxJQUFJLENBQUM7b0JBQ2pDLG1CQUFDLFdBQWdCLEdBQUUsTUFBTSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7b0JBQzVDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSSxFQUFFLEdBQUc7d0JBQzdCLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDO3dCQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQzt3QkFDM0IsV0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQztxQkFDM0QsQ0FBQyxDQUFDO29CQUNILE9BQU8sV0FBUyxDQUFDO2lCQUNqQjthQUNEOzs7O1FBRUQsb0NBQVE7OztZQUFSO2dCQUNDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUNqQzs7OztRQUNELG9DQUFROzs7WUFBUjtnQkFDQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDakM7O29CQXJKRFQsWUFBUyxTQUFDO3dCQUNWLFFBQVEsRUFBRSxlQUFlO3dCQUN6QixRQUFRLEVBQUUsMjlEQXNDSjt3QkFDTixNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7cUJBQ1o7Ozs7O3dCQWxEUSxXQUFXO3dCQTNCbkJVLFdBQVE7d0JBRFJDLDJCQUF3Qjt3QkFrQmhCbEIsUUFBSzs7Ozs2QkErRFptQixTQUFNOzZCQUNOQSxTQUFNOzRCQUNOWCxRQUFLOzJCQUNMQSxRQUFLO3lCQUNMQSxRQUFLOzZCQVFMQSxRQUFLOztnQ0FsR1A7OztJQWlNQSxJQUFNLFVBQVUsR0FBb0M7UUFDbkQsUUFBUSxFQUFFLGlCQUFpQjtRQUMzQixJQUFJLEVBQUUsYUFBYTtRQUNuQixRQUFRLEVBQUUsYUFBYTtRQUN2QixJQUFJLEVBQUUsNkJBQTZCO1FBQ25DLElBQUksRUFBRSw2QkFBNkI7UUFDbkMsS0FBSyxFQUFFLGNBQWM7UUFDckIsS0FBSyxFQUFFLGNBQWM7UUFDckIsS0FBSyxFQUFFLGNBQWM7UUFDckIsT0FBTyxFQUFFLG9CQUFvQjtRQUM3QixNQUFNLEVBQUUsZUFBZTtLQUN2QixDQUFDOztRQVlELCtCQUFvQixRQUFrQyxFQUFVLFNBQTJCO1lBQXZFLGFBQVEsR0FBUixRQUFRLENBQTBCO1lBQVUsY0FBUyxHQUFULFNBQVMsQ0FBa0I7U0FBSTs7OztRQUUvRiwyQ0FBVzs7O1lBQVg7Z0JBQ0MsU0FBUztnQkFDVCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7b0JBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO29CQUM3QyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztpQkFDM0M7YUFDRDs7OztRQUVELHdDQUFROzs7WUFBUjtnQkFDQyxTQUFTO2dCQUNULElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLElBQUksU0FBUztvQkFBRSxPQUFPO2dCQUMvQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUU7O29CQUN2QyxJQUFNLGNBQWMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDMUQsTUFBTSxJQUFJLEtBQUssQ0FDZCx3Q0FBc0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLG1DQUN4QyxjQUFnQixDQUNuQyxDQUFDO2lCQUNGOztnQkFDRCxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFRLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzNELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO2dCQUM3QyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQzthQUMzQzs7b0JBbENEWSxZQUFTLFNBQUM7d0JBQ1YsUUFBUSxFQUFFLGdCQUFnQjtxQkFDMUI7Ozs7O3dCQTNNQUYsMkJBQXdCO3dCQUR4QkcsbUJBQWdCOzs7OzZCQThNZmIsUUFBSzs0QkFFTEEsUUFBSzs7b0NBcE5QOzs7SUNBQTs7Ozs7Ozs7Ozs7Ozs7SUFjQTtJQUVBLElBQUksYUFBYSxHQUFHLFVBQVMsQ0FBQyxFQUFFLENBQUM7UUFDN0IsYUFBYSxHQUFHLE1BQU0sQ0FBQyxjQUFjO2FBQ2hDLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxZQUFZLEtBQUssSUFBSSxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQzVFLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQUUsSUFBSSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztvQkFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUMvRSxPQUFPLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDL0IsQ0FBQyxDQUFDO0FBRUYsdUJBQTBCLENBQUMsRUFBRSxDQUFDO1FBQzFCLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDcEIsZ0JBQWdCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEVBQUU7UUFDdkMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLEtBQUssSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN6RixDQUFDO0FBRUQsSUFBTyxJQUFJLFFBQVEsR0FBRztRQUNsQixRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sSUFBSSxrQkFBa0IsQ0FBQztZQUMzQyxLQUFLLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDakQsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDakIsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDO29CQUFFLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7d0JBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNoRjtZQUNELE9BQU8sQ0FBQyxDQUFDO1NBQ1osQ0FBQTtRQUNELE9BQU8sUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDM0MsQ0FBQyxDQUFBO0FBRUQsd0JBVTJCLFVBQVUsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUk7UUFDcEQsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLEdBQUcsSUFBSSxLQUFLLElBQUksR0FBRyxJQUFJLEdBQUcsTUFBTSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQzdILElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxJQUFJLE9BQU8sT0FBTyxDQUFDLFFBQVEsS0FBSyxVQUFVO1lBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7O1lBQzFILEtBQUssSUFBSSxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQztvQkFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xKLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNsRSxDQUFDO0FBRUQsd0JBSTJCLFdBQVcsRUFBRSxhQUFhO1FBQ2pELElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxJQUFJLE9BQU8sT0FBTyxDQUFDLFFBQVEsS0FBSyxVQUFVO1lBQUUsT0FBTyxPQUFPLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUNuSSxDQUFDOzs7Ozs7O0FDdkRELFFBQWEsWUFBWSxHQUFVO1FBQ2xDLE1BQU0sRUFBRSxVQUFVO1FBQ2xCLElBQUksRUFBRSxFQUFFO0tBQ1IsQ0FBQzs7Ozs7O0FBQ0YscUJBQXdCLEtBQW9CLEVBQUUsTUFBd0I7UUFBOUMsc0JBQUE7WUFBQSxvQkFBb0I7O1FBQzNDLFFBQVEsTUFBTSxDQUFDLElBQUk7WUFDbEIsS0FBSyxvQkFBb0IsQ0FBQyxVQUFVLEVBQUU7Z0JBQ3JDLG9CQUNJLEtBQUssSUFDUixNQUFNLEVBQUUsT0FBTyxJQUNkO2FBQ0Y7WUFDRCxLQUFLLG9CQUFvQixDQUFDLGdCQUFnQixFQUFFO2dCQUMzQyxvQkFDSSxLQUFLLElBQ1IsTUFBTSxFQUFFLFNBQVMsSUFDaEI7YUFDRjtZQUNELEtBQUssb0JBQW9CLENBQUMsa0JBQWtCLEVBQUU7Z0JBQzdDLG9CQUNJLEtBQUssSUFDUixJQUFJLEVBQUUsTUFBTSxDQUFDLE9BQU8sRUFDcEIsTUFBTSxFQUFFLFNBQVMsSUFDaEI7YUFDRjtZQUNELEtBQUssb0JBQW9CLENBQUMsaUJBQWlCLEVBQUU7Z0JBQzVDLG9CQUNJLEtBQUssSUFDUixNQUFNLEVBQUUsUUFBUSxJQUNmO2FBQ0Y7WUFDRCxLQUFLLG9CQUFvQixDQUFDLGtCQUFrQixFQUFFOztnQkFDN0MsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7Z0JBQ2pDLElBQUksU0FBUyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLEdBQUcsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBQSxDQUFDLENBQUM7Z0JBQzdFLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFO29CQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDckU7cUJBQU07b0JBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQzFCO2dCQUNELG9CQUNJLEtBQUssSUFDUixJQUFJLEVBQUUsSUFBSSxJQUNUO2FBQ0Y7WUFDRCxLQUFLLG9CQUFvQixDQUFDLGVBQWUsRUFBRTs7Z0JBQzFDLElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7O2dCQUNqQyxJQUFJLFNBQVMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxHQUFHLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUEsQ0FBQyxDQUFDO2dCQUM3RSxJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRTtvQkFDbkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQ3JFO3FCQUFNO29CQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUMxQjtnQkFDRCxvQkFDSSxLQUFLLElBQ1IsSUFBSSxFQUFFLElBQUksSUFDVDthQUNGO1lBQ0QsS0FBSyxvQkFBb0IsQ0FBQyxtQkFBbUIsRUFBRTs7Z0JBQzlDLElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7O2dCQUNqQyxJQUFJLFNBQVMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxHQUFHLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUEsQ0FBQyxDQUFDO2dCQUM3RSxJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRTtvQkFDbkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQ3JFO3FCQUFNO29CQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUMxQjtnQkFDRCxvQkFDSSxLQUFLLElBQ1IsSUFBSSxFQUFFLElBQUksSUFDVDthQUNGO1lBRUQsU0FBUztnQkFDUixPQUFPLEtBQUssQ0FBQzthQUNiO1NBQ0Q7S0FDRDs7Ozs7O0FDbkZEO0FBTUEsUUFBYSxZQUFZLEdBQUc7UUFDM0IsSUFBSSxFQUFFYyxPQUFZO0tBQ2xCOzs7Ozs7QUNSRDtRQW1DQzs0QkFINkIsS0FBSzsyQkFDZCxJQUFJUixlQUFZLEVBQUU7MEJBQ25CLElBQUlBLGVBQVksRUFBRTtTQUNyQjs7OztRQUVoQixvQ0FBTzs7O1lBQVA7Z0JBQ0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNwQjs7Ozs7UUFFRCx5Q0FBWTs7OztZQUFaLFVBQWEsSUFBaUI7O2dCQUM3QixJQUFNLEtBQUssR0FBRyxJQUFJLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDdkMsS0FBSyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7Z0JBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ3BDLE9BQU8sS0FBSyxDQUFDO2FBQ2I7Ozs7O1FBQ0QseUNBQVk7Ozs7WUFBWixVQUFhLElBQWlCOztnQkFDN0IsSUFBTSxLQUFLLEdBQUcsSUFBSSxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3ZDLEtBQUssQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO2dCQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDeEIsT0FBTyxLQUFLLENBQUM7YUFDYjs7Ozs7UUFDRCwyQ0FBYzs7OztZQUFkLFVBQWUsSUFBaUI7O2dCQUMvQixJQUFNLE9BQU8sR0FBRyxJQUFJLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDM0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzFCLE9BQU8sT0FBTyxDQUFDO2FBQ2Y7Ozs7O1FBQ0QsNENBQWU7Ozs7WUFBZixVQUFnQixHQUFXO2dCQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ2xDOztvQkExRERQLFlBQVMsU0FBQzt3QkFDVixRQUFRLEVBQUUsZ0JBQWdCO3dCQUMxQixRQUFRLEVBQUUsNG5DQXVCSjtxQkFDTjs7Ozs7NkJBRUNDLFFBQUs7K0JBQ0xBLFFBQUs7OEJBQ0xXLFNBQU07NkJBQ05BLFNBQU07O2lDQWxDUjs7Ozs7OztBQ0FBO1FBK0JDOzJCQURvQixJQUFJTCxlQUFZLEVBQUU7U0FDdEI7Ozs7UUFFaEIsb0NBQU87OztZQUFQO2dCQUNDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDcEI7Ozs7O1FBRUQseUNBQVk7Ozs7WUFBWixVQUFhLElBQWlCOztnQkFDN0IsSUFBTSxLQUFLLEdBQUcsSUFBSSxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3ZDLEtBQUssQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO2dCQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDeEIsT0FBTyxLQUFLLENBQUM7YUFDYjs7Ozs7UUFDRCx5Q0FBWTs7OztZQUFaLFVBQWEsSUFBaUI7O2dCQUM3QixJQUFNLEtBQUssR0FBRyxJQUFJLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDdkMsS0FBSyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7Z0JBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN4QixPQUFPLEtBQUssQ0FBQzthQUNiOzs7OztRQUNELDJDQUFjOzs7O1lBQWQsVUFBZSxJQUFpQjs7Z0JBQy9CLElBQU0sT0FBTyxHQUFHLElBQUksV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUMzQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDMUIsT0FBTyxPQUFPLENBQUM7YUFDZjs7b0JBbEREUCxZQUFTLFNBQUM7d0JBQ1YsUUFBUSxFQUFFLGdCQUFnQjt3QkFDMUIsUUFBUSxFQUFFLDBnQ0FxQkM7cUJBQ1g7Ozs7OzZCQUVDQyxRQUFLOzhCQUNMVyxTQUFNOztpQ0E5QlI7Ozs7Ozs7QUNBQTtRQWlIQzsyQkFib0IsSUFBSUwsZUFBWSxFQUFFOzBCQUNuQixJQUFJQSxlQUFZLEVBQUU7eUJBRTdCLENBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFFOzJCQUMvQixJQUFJRSxlQUFTLENBQUM7Z0JBQ3ZCLElBQUkzQixlQUFTLENBQUM7b0JBQ2IsR0FBRyxFQUFFLElBQUlDLGlCQUFXLEVBQUU7b0JBQ3RCLEtBQUssRUFBRSxJQUFJQSxpQkFBVyxFQUFFO2lCQUN4QixDQUFDO2FBQ0YsQ0FBQztnQ0FDYSxJQUFJRCxlQUFTLENBQUM7Z0JBQzVCLFlBQVksRUFBRSxJQUFJQyxpQkFBVyxDQUFDLEVBQUUsQ0FBQzthQUNqQyxDQUFDO1NBQ2M7Ozs7UUFFaEIsc0NBQU87OztZQUFQO2dCQUNDLElBQUksQ0FBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBRSxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLENBQUMsSUFBSSxHQUFBLENBQUM7b0JBQUUsT0FBTyxJQUFJLENBQUM7Z0JBQ3BHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLElBQUksT0FBTyxFQUFFO29CQUNyQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztpQkFDOUM7cUJBQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsSUFBSSxRQUFRLEVBQUU7b0JBQzdDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO2lCQUN6QztnQkFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3BCOzs7O1FBRUQsd0NBQVM7OztZQUFUO2dCQUNDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUNoQixJQUFJRCxlQUFTLENBQUM7b0JBQ2IsR0FBRyxFQUFFLElBQUlDLGlCQUFXLEVBQUU7b0JBQ3RCLEtBQUssRUFBRSxJQUFJQSxpQkFBVyxFQUFFO2lCQUN4QixDQUFDLENBQ0YsQ0FBQzthQUNGOzs7OztRQUNELDJDQUFZOzs7O1lBQVosVUFBYSxDQUFDO2dCQUNiLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDbkM7Ozs7UUFDRCw0Q0FBYTs7O1lBQWI7Z0JBQ0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7YUFDekM7O29CQXRJRGlCLFlBQVMsU0FBQzt3QkFDVixRQUFRLEVBQUUsa0JBQWtCO3dCQUM1QixRQUFRLEVBQUUsczJJQTBGWTtxQkFDdEI7Ozs7OzZCQUVDQyxRQUFLOzhCQUNMVyxTQUFNOzZCQUNOQSxTQUFNOzttQ0FyR1I7Ozs7Ozs7OztRQ0tDLFdBQVksd0JBQXdCO1FBQ3BDLGlCQUFrQiw4QkFBOEI7UUFDaEQsbUJBQW9CLGdDQUFnQztRQUNwRCxrQkFBbUIsK0JBQStCOztJQUduRCxJQUFBO1FBRUMsd0JBQW1CLE9BQXdCO1lBQXhCLFlBQU8sR0FBUCxPQUFPLENBQWlCO3dCQUQzQixtQkFBbUIsQ0FBQyxTQUFTO1NBQ0U7NkJBYmhEO1FBY0MsQ0FBQTtBQUhELElBSUEsSUFBQTtRQUVDLDZCQUFtQixPQUF3QjtZQUF4QixZQUFPLEdBQVAsT0FBTyxDQUFpQjt3QkFEM0IsbUJBQW1CLENBQUMsZUFBZTtTQUNKO2tDQWpCaEQ7UUFrQkMsQ0FBQTtBQUhELElBSUEsSUFBQTtRQUVDLCtCQUFtQixPQUF3QjtZQUF4QixZQUFPLEdBQVAsT0FBTyxDQUFpQjt3QkFEM0IsbUJBQW1CLENBQUMsaUJBQWlCO1NBQ047b0NBckJoRDtRQXNCQyxDQUFBO0FBSEQsSUFJQSxJQUFBOzt3QkFDaUIsbUJBQW1CLENBQUMsZ0JBQWdCOzttQ0F4QnJEO1FBeUJDLENBQUE7Ozs7Ozs7O1FDcEJBLFVBQVcsOEJBQThCO1FBQ3pDLGdCQUFpQiw0QkFBNEI7UUFDN0Msa0JBQW1CLDhCQUE4QjtRQUNqRCxpQkFBa0IsNkJBQTZCOztJQUdoRCxJQUFBO1FBRUMsdUJBQW1CLE9BQXdCO1lBQXhCLFlBQU8sR0FBUCxPQUFPLENBQWlCO3dCQUQzQixrQkFBa0IsQ0FBQyxRQUFRO1NBQ0k7NEJBYmhEO1FBY0MsQ0FBQTtBQUhELElBSUEsSUFBQTtRQUVDLDRCQUFtQixPQUF3QjtZQUF4QixZQUFPLEdBQVAsT0FBTyxDQUFpQjt3QkFEM0Isa0JBQWtCLENBQUMsY0FBYztTQUNGO2lDQWpCaEQ7UUFrQkMsQ0FBQTtBQUhELElBSUEsSUFBQTs7d0JBQ2lCLGtCQUFrQixDQUFDLGdCQUFnQjs7bUNBcEJwRDtRQXFCQyxDQUFBO0FBRkQsSUFHQSxJQUFBOzt3QkFDaUIsa0JBQWtCLENBQUMsZUFBZTs7a0NBdkJuRDtRQXdCQyxDQUFBOzs7Ozs7QUN4QkQ7UUFvQkMsbUNBQW1CLEtBQWdDLEVBQVMsT0FBb0I7WUFBN0QsVUFBSyxHQUFMLEtBQUssQ0FBMkI7WUFBUyxZQUFPLEdBQVAsT0FBTyxDQUFhO1NBQUk7Ozs7UUFDcEYsNENBQVE7OztZQUFSO2dCQUNDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxlQUFlLEVBQUUsQ0FBQztnQkFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzthQUMxRDs7Ozs7UUFDRCx1Q0FBRzs7OztZQUFILFVBQUksSUFBcUI7Z0JBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7YUFDN0M7Ozs7O1FBQ0QsaURBQWE7Ozs7WUFBYixVQUFjLElBQXFCO2dCQUNsQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLHNCQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7YUFDdEQ7O29CQXBCRFosWUFBUyxTQUFDO3dCQUNWLFFBQVEsRUFBRSw0SkFJVTtxQkFDcEI7Ozs7O3dCQWRRUCxRQUFLO3dCQU1MLFdBQVc7Ozt3Q0FUcEI7Ozs7Ozs7Ozs7Ozs7UUNvQmdEdUIsOENBQXlCO1FBRXhFLG9DQUFtQixPQUFvQixFQUFVLEtBQXFCLEVBQVMsS0FBZ0M7WUFBL0csWUFDQyxrQkFBTSxLQUFLLEVBQUUsT0FBTyxDQUFDLFNBQ3JCO1lBRmtCLGFBQU8sR0FBUCxPQUFPLENBQWE7WUFBVSxXQUFLLEdBQUwsS0FBSyxDQUFnQjtZQUFTLFdBQUssR0FBTCxLQUFLLENBQTJCOzhCQURuRzlCLHdCQUFnQixDQUFDLE9BQU8sQ0FBQyxTQUFTOztTQUc3Qzs7OztRQUVELDZDQUFROzs7WUFBUjtnQkFBQSxpQkFjQztnQkFiQSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07cUJBQ2YsR0FBRyxDQUFDLFVBQUMsTUFBTSxJQUFLLE9BQUEsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFBLENBQUM7cUJBQzlCLFNBQVMsQ0FBQyxVQUFDLEVBQUUsSUFBSyxPQUFBLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksbUJBQW1CLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBQSxDQUFDLENBQUM7Z0JBRXRFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTTtxQkFDZixHQUFHLENBQUMsVUFBQyxNQUFNLElBQUssT0FBQSxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUEsQ0FBQztxQkFDOUIsU0FBUyxDQUFDLFVBQUMsRUFBRSxJQUFLLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLEdBQUEsQ0FBQztxQkFDbEQsTUFBTSxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsSUFBSSxJQUFJLElBQUksR0FBQSxDQUFDO3FCQUM5QixJQUFJLENBQUMsQ0FBQyxDQUFDO3FCQUNQLFNBQVMsQ0FBQyxVQUFDLFVBQVU7b0JBQ3JCLEtBQUksQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDO29CQUN6QixLQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztpQkFDdEMsQ0FBQyxDQUFDO2FBQ0o7Ozs7O1FBRUQsMkNBQU07Ozs7WUFBTixVQUFPLElBQUk7Z0JBQ1YsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUM5Qzs7b0JBaENEYyxZQUFTLFNBQUM7d0JBQ1YsUUFBUSxFQUFFLCtMQUtNO3FCQUNoQjs7Ozs7d0JBWlEsV0FBVzt3QkFOWGlCLHFCQUFjO3dCQUVkeEIsUUFBSzs7O3lDQUhkO01Bb0JnRCx5QkFBeUI7Ozs7OztBQ3BCekU7OzZCQTBEc0JSLHVCQUFlLENBQUMsT0FBTyxDQUFDLFNBQVM7NEJBQ2pDLElBQUlzQixlQUFZLEVBQUU7MkJBQ25CLElBQUlBLGVBQVksRUFBRTs7Ozs7UUFFdEMsK0JBQUk7OztZQUFKO2dCQUNDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztnQkFDdEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN6Qzs7OztRQUNELGtDQUFPOzs7WUFBUDtnQkFDQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7Z0JBQ3RELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDeEM7Ozs7O1FBQ0Qsc0NBQVc7Ozs7WUFBWCxVQUFZLE1BQU0sS0FBSTs7Ozs7UUFFdEIsdUNBQVk7Ozs7WUFBWixVQUFhLElBQWlCOztnQkFDN0IsSUFBTSxLQUFLLEdBQUcsSUFBSSxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3ZDLEtBQUssQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO2dCQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDeEIsT0FBTyxLQUFLLENBQUM7YUFDYjs7Ozs7UUFDRCx1Q0FBWTs7OztZQUFaLFVBQWEsSUFBaUI7O2dCQUM3QixJQUFNLEtBQUssR0FBRyxJQUFJLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDdkMsS0FBSyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7Z0JBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN4QixPQUFPLEtBQUssQ0FBQzthQUNiOzs7OztRQUNELHlDQUFjOzs7O1lBQWQsVUFBZSxJQUFpQjs7Z0JBQy9CLElBQU0sT0FBTyxHQUFHLElBQUksV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUMzQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDMUIsT0FBTyxPQUFPLENBQUM7YUFDZjs7b0JBbkZEUCxZQUFTLFNBQUM7d0JBQ1YsUUFBUSxFQUFFLGNBQWM7d0JBQ3hCLFFBQVEsRUFBRSxxdkZBK0NKO3FCQUNOOzs7NkJBRUNDLFFBQUs7Z0NBQ0xBLFFBQUs7K0JBQ0xXLFNBQU07OEJBQ05BLFNBQU07OytCQTVEUjs7Ozs7Ozs7Ozs7OztRQ3FFdUNJLHFDQUFnQjs7Ozs7OztRQUVuRCxnQ0FBSTs7O1lBQUo7Z0JBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSztvQkFBRSxPQUFPO2dCQUNsQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDbkQ7O29CQXJFSmhCLFlBQVMsU0FBQzt3QkFDUCxRQUFRLEVBQUUsV0FBVzt3QkFDckIsUUFBUSxFQUFFLDZvSEEyRFA7d0JBQ0gsTUFBTSxFQUFFLENBQUMsK0NBQStDLENBQUM7cUJBQzVEOzs7NkJBRUlDLFFBQUs7O2dDQXRFVjtNQXFFdUMsZ0JBQWdCOzs7Ozs7QUNyRXZEO1FBZUMsb0NBQW1CLEtBQWdDO1lBQWhDLFVBQUssR0FBTCxLQUFLLENBQTJCO1lBQ2xELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUEsQ0FBQyxDQUFDO1NBQzlEOzs7O1FBQ0QsNkNBQVE7OztZQUFSO2dCQUNDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksZUFBZSxFQUFFLENBQUMsQ0FBQzthQUMzQzs7b0JBWkRELFlBQVMsU0FBQzt3QkFDVixRQUFRLEVBQUUsK0RBRU07cUJBQ2hCOzs7Ozt3QkFWUVAsUUFBSzs7O3lDQUZkOzs7Ozs7O0FDQUE7Ozs7b0JBS0NPLFlBQVMsU0FBQzt3QkFDVixRQUFRLEVBQUUsV0FBVzt3QkFDckIsUUFBUSxFQUFFLGs2Q0E2Qko7d0JBQ04sTUFBTSxFQUFFLENBQUMsdUhBQXVILENBQUM7cUJBQ2pJOzs7NEJBR0NDLFFBQUssU0FBQyxNQUFNOztnQ0F6Q2Q7Ozs7Ozs7QUNBQTtRQVVDLGdDQUFvQixLQUFxQixFQUFVLEtBQXFEO1lBQXBGLFVBQUssR0FBTCxLQUFLLENBQWdCO1lBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0Q7U0FBSzs7b0JBSjdHRCxZQUFTLFNBQUM7d0JBQ1YsUUFBUSxFQUFFLGlDQUFpQztxQkFDM0M7Ozs7O3dCQUpRaUIscUJBQWM7d0JBRGR4QixRQUFLOzs7cUNBSGQ7Ozs7Ozs7O1FDbUJDLHdCQUFvQixRQUFzQixFQUFVeUIsU0FBYyxFQUFVLE9BQW9CO1lBQWhHLGlCQUFvRztZQUFoRixhQUFRLEdBQVIsUUFBUSxDQUFjO1lBQVUsV0FBTSxHQUFOQSxTQUFNLENBQVE7WUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFhOzRCQUdyRixJQUFJLENBQUMsUUFBUTtpQkFDdEIsTUFBTSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQztpQkFDbkMsSUFBSSxDQUFDcEIsYUFBRyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLE9BQU8sR0FBQSxDQUFDLEVBQUVBLGFBQUcsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksa0JBQWtCLENBQUMsSUFBSSxDQUFDLEdBQUEsQ0FBQyxDQUFDO2lDQUdoRSxJQUFJLENBQUMsUUFBUTtpQkFDM0IsTUFBTSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQztpQkFDekMsSUFBSSxDQUNKQSxhQUFHLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsT0FBTyxHQUFBLENBQUMsRUFDN0JPLG1CQUFTLENBQUMsVUFBQyxJQUE2QixJQUFLLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUEsQ0FBQyxFQUNwRVAsYUFBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsSUFBSSxvQkFBb0IsRUFBRSxHQUFBLENBQUMsRUFDdENxQixvQkFBVSxDQUFDLGNBQU0sT0FBQUMsS0FBRSxDQUFDLElBQUksbUJBQW1CLEVBQUUsQ0FBQyxHQUFBLENBQUMsQ0FDL0M7U0Fma0c7O29CQUZwRzdCLGFBQVU7Ozs7O3dCQVRGOEIsZUFBTzt3QkFIUEMsYUFBTTt3QkFPTixXQUFXOzs7O1lBU2xCQyxjQUFNLEVBQUU7Ozs7WUFLUkEsY0FBTSxFQUFFOzs7NkJBMUJWOzs7Ozs7Ozs7Ozs7Ozs7Ozs7UUN1QkMsMEJBQW9CLFFBQXNCLEVBQVVMLFNBQWMsRUFBVSxPQUFvQjtZQUFoRyxpQkFBb0c7WUFBaEYsYUFBUSxHQUFSLFFBQVEsQ0FBYztZQUFVLFdBQU0sR0FBTkEsU0FBTSxDQUFRO1lBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBYTt1Q0FHMUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxvQkFBb0IsRUFBRSxHQUFBLENBQUM7NEJBR3hHLElBQUksQ0FBQyxRQUFRO2lCQUN0QixNQUFNLENBQUMsb0JBQW9CLENBQUMsZUFBZSxDQUFDO2lCQUM1QyxJQUFJLENBQ0pwQixhQUFHLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsT0FBTyxHQUFBLENBQUMsRUFDN0JPLG1CQUFTLENBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBQSxDQUFDLEVBQ3JDUCxhQUFHLENBQUMsVUFBQSxVQUFVLElBQUksT0FBQSxJQUFJLHNCQUFzQixDQUFDLFVBQVUsQ0FBQyxHQUFBLENBQUMsQ0FDekQ7bUNBR2dCLElBQUksQ0FBQyxRQUFRO2lCQUM3QixNQUFNLENBQUMsb0JBQW9CLENBQUMsZ0JBQWdCLENBQUM7aUJBQzdDLElBQUksQ0FDSk8sbUJBQVMsQ0FBQyxVQUFDLElBQVMsSUFBSyxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUEsQ0FBQyxFQUNoRFAsYUFBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsSUFBSSxzQkFBc0IsQ0FBQyxHQUFHLENBQUMsR0FBQSxDQUFDLEVBQzNDcUIsb0JBQVUsQ0FBQyxjQUFNLE9BQUFDLEtBQUUsQ0FBQyxJQUFJLHFCQUFxQixFQUFFLENBQUMsR0FBQSxDQUFDLENBQ2pEO1NBckJrRzs7b0JBRnBHN0IsYUFBVTs7Ozs7d0JBakJGOEIsZUFBTzt3QkFIUEMsYUFBTTt3QkFRTixXQUFXOzs7O1lBZ0JsQkMsY0FBTSxFQUFFOzs7O1lBR1JBLGNBQU0sRUFBRTs7OztZQVNSQSxjQUFNLEVBQUU7OzsrQkFyQ1Y7Ozs7Ozs7Ozs7Ozs7UUNxQkMseUJBQW9CLFFBQXNCLEVBQVVMLFNBQWMsRUFBVSxPQUFvQjtZQUFoRyxpQkFBb0c7WUFBaEYsYUFBUSxHQUFSLFFBQVEsQ0FBYztZQUFVLFdBQU0sR0FBTkEsU0FBTSxDQUFRO1lBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBYTs2QkFHcEYsSUFBSSxDQUFDLFFBQVE7aUJBQ3ZCLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUM7aUJBQ3JDLElBQUksQ0FBQ3BCLGFBQUcsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxPQUFPLEdBQUEsQ0FBQyxFQUFFQSxhQUFHLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLG1CQUFtQixDQUFDLElBQUksQ0FBQyxHQUFBLENBQUMsQ0FBQztrQ0FHaEUsSUFBSSxDQUFDLFFBQVE7aUJBQzVCLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxlQUFlLENBQUM7aUJBQzNDLElBQUksQ0FDSkEsYUFBRyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLE9BQU8sR0FBQSxDQUFDLEVBQzdCTyxtQkFBUyxDQUFDLFVBQUMsSUFBOEIsSUFBSyxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFBLENBQUMsRUFDeEVQLGFBQUcsQ0FBQyxVQUFBLFVBQVUsSUFBSSxPQUFBLElBQUkscUJBQXFCLENBQUMsVUFBVSxDQUFDLEdBQUEsQ0FBQyxFQUN4RHFCLG9CQUFVLENBQUMsY0FBTSxPQUFBQyxLQUFFLENBQUMsSUFBSSxvQkFBb0IsRUFBRSxDQUFDLEdBQUEsQ0FBQyxDQUNoRDt5Q0FHc0IsSUFBSSxDQUFDLFFBQVE7aUJBQ25DLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxpQkFBaUIsQ0FBQztpQkFDN0MsSUFBSSxDQUFDdEIsYUFBRyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLE9BQU8sR0FBQSxDQUFDLEVBQUVBLGFBQUcsQ0FBQyxVQUFBLFVBQVUsSUFBSSxPQUFBLElBQUksc0JBQXNCLENBQUMsVUFBVSxDQUFDLEdBQUEsQ0FBQyxDQUFDO1NBcEJJOztvQkFGcEdQLGFBQVU7Ozs7O3dCQWZGOEIsZUFBTzt3QkFIUEMsYUFBTTt3QkFPTixXQUFXOzs7O1lBZWxCQyxjQUFNLEVBQUU7Ozs7WUFLUkEsY0FBTSxFQUFFOzs7O1lBVVJBLGNBQU0sRUFBRTs7OzhCQXRDVjs7Ozs7OztBQ0NBO0lBT0EsSUFBTSxNQUFNLEdBQVc7UUFDdEI7WUFDQyxJQUFJLEVBQUUsTUFBTTtZQUNaLFNBQVMsRUFBRSxzQkFBc0I7WUFDakMsUUFBUSxFQUFFO2dCQUNUO29CQUNDLElBQUksRUFBRSxLQUFLO29CQUNYLFNBQVMsRUFBRSx5QkFBeUI7aUJBQ3BDO2dCQUNEO29CQUNDLElBQUksRUFBRSxXQUFXO29CQUNqQixTQUFTLEVBQUUsMEJBQTBCO2lCQUNyQztnQkFDRDtvQkFDQyxJQUFJLEVBQUUsRUFBRTtvQkFDUixTQUFTLEVBQUUsMEJBQTBCO2lCQUNyQzthQUNEO1NBQ0Q7S0FDRCxDQUFDOztBQUVGLFFBQWEsYUFBYSxHQUF3QkMsbUJBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDOzs7Ozs7OztRQ3ZCOUUsYUFBYyw0QkFBNEI7UUFDMUMsbUJBQW9CLGtDQUFrQztRQUN0RCxxQkFBc0Isb0NBQW9DO1FBQzFELG9CQUFxQixtQ0FBbUM7O0lBT3pELElBQUE7UUFFQywrQkFBbUIsT0FBcUI7WUFBckIsWUFBTyxHQUFQLE9BQU8sQ0FBYzt3QkFEeEIsa0JBQWtCLENBQUMsaUJBQWlCO1NBQ1A7b0NBbEI5QztRQW1CQyxDQUFBO0FBSEQsSUFJQSxJQUFBOzt3QkFDaUIsa0JBQWtCLENBQUMsbUJBQW1COztzQ0FyQnZEO1FBc0JDLENBQUE7QUFGRCxJQUdBLElBQUE7O3dCQUNpQixrQkFBa0IsQ0FBQyxrQkFBa0I7O3FDQXhCdEQ7UUF5QkMsQ0FBQTs7Ozs7OztRQ0FBLHdCQUFvQixRQUFzQixFQUFVTixTQUFjLEVBQVUsT0FBMkI7WUFBdkcsaUJBQTJHO1lBQXZGLGFBQVEsR0FBUixRQUFRLENBQWM7WUFBVSxXQUFNLEdBQU5BLFNBQU0sQ0FBUTtZQUFVLFlBQU8sR0FBUCxPQUFPLENBQW9COytCQUd6RixJQUFJLENBQUMsUUFBUTtpQkFDekIsTUFBTSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQztpQkFDdEMsSUFBSSxDQUFDcEIsYUFBRyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLE9BQU8sR0FBQSxDQUFDLEVBQUVBLGFBQUcsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUkscUJBQXFCLENBQUMsSUFBSSxDQUFDLEdBQUEsQ0FBQyxDQUFDO2lDQUduRSxJQUFJLENBQUMsUUFBUTtpQkFDM0IsTUFBTSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDO2lCQUM1QyxJQUFJLENBQ0pBLGFBQUcsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxPQUFPLEdBQUEsQ0FBQyxFQUM3Qk8sbUJBQVMsQ0FBQyxVQUFDLElBQTZCLElBQUssT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxHQUFBLENBQUMsRUFDdkVQLGFBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLElBQUksdUJBQXVCLEVBQUUsR0FBQSxDQUFDLEVBQ3pDcUIsb0JBQVUsQ0FBQyxjQUFNLE9BQUFDLEtBQUUsQ0FBQyxJQUFJLHNCQUFzQixFQUFFLENBQUMsR0FBQSxDQUFDLENBQ2xEO1NBZnlHOztvQkFGM0c3QixhQUFVOzs7Ozt3QkFmRjhCLGVBQU87d0JBSFBDLGFBQU07d0JBZ0JOLGtCQUFrQjs7OztZQU16QkMsY0FBTSxFQUFFOzs7O1lBS1JBLGNBQU0sRUFBRTs7OzZCQWhDVjs7Ozs7OztBQ0FBOzs7Ozs7O1FBd0hRLHFCQUFPOzs7O1lBQWQsVUFBZTdCLFNBQXlCO2dCQUN2QyxPQUFPO29CQUNOLFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFNBQVMsRUFBRSxDQUFFLEVBQUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFFBQVEsRUFBRUEsU0FBTSxFQUFFLENBQUU7aUJBQ2pFLENBQUM7YUFDRjs7b0JBdEVEK0IsV0FBUSxTQUFDO3dCQUNULE9BQU8sRUFBRTs0QkFDUkMsbUJBQWdCOzRCQUNoQkMsaUJBQVc7NEJBQ1hILG1CQUFZOzRCQUNaSSxtQkFBWTs0QkFDWkMsMkJBQWtCOzRCQUNsQkMsMEJBQWlCOzRCQUNqQkMsc0JBQWE7NEJBQ2JDLDRCQUFtQjs0QkFDbkJDLHdCQUFlOzRCQUNmQyxzQkFBYTs0QkFDYkMsMEJBQWlCOzRCQUNqQkMsdUJBQWM7NEJBQ2RDLHdCQUFlOzRCQUNmQyx1QkFBYzs0QkFDZEMsMkJBQWtCOzRCQUNsQkMsc0JBQWE7NEJBQ2JDLHlCQUFnQjs0QkFDaEJDLDJCQUFnQjs0QkFDaEJDLHVCQUFjOzRCQUNkQyw2QkFBb0I7NEJBQ3BCQyx5QkFBbUI7eUJBQ25CO3dCQUNELFlBQVksRUFBRTs0QkFDYiwwQkFBMEI7NEJBQzFCLGlCQUFpQjs0QkFDakIsMEJBQTBCOzRCQUMxQixpQkFBaUI7NEJBQ2pCLHlCQUF5Qjs0QkFDekIsc0JBQXNCOzRCQUN0QixnQkFBZ0I7NEJBQ2hCLGtCQUFrQjs0QkFDbEIsa0JBQWtCOzRCQUNsQixvQkFBb0I7NEJBQ3BCLGlCQUFpQjs0QkFDakIscUJBQXFCOzRCQUNyQixlQUFlOzRCQUNmLGlCQUFpQjs0QkFDakIsY0FBYzs0QkFDZCxjQUFjOzRCQUNkLDZCQUE2Qjs0QkFDN0IsNkJBQTZCOzRCQUM3QixhQUFhOzRCQUNiLGVBQWU7NEJBQ2YsY0FBYzs0QkFDZCxvQkFBb0I7eUJBRXBCO3dCQUNELGVBQWUsRUFBRTs0QkFDaEIsZUFBZTs0QkFDZixpQkFBaUI7NEJBQ2pCLGNBQWM7NEJBQ2QsY0FBYzs0QkFDZCw2QkFBNkI7NEJBQzdCLDZCQUE2Qjs0QkFDN0IsYUFBYTs0QkFDYixlQUFlOzRCQUNmLGNBQWM7NEJBQ2Qsb0JBQW9CO3lCQUNwQjt3QkFDRCxPQUFPLEVBQUUsQ0FBRSxpQkFBaUIsQ0FBRTtxQkFFOUI7OzRCQXRIRDs7Ozs7O29CQWdJQ3BCLFdBQVEsU0FBQzt3QkFDVCxPQUFPLEVBQUU7NEJBQ1IsYUFBYTs0QkFDYnFCLGNBQVcsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLFlBQVksQ0FBQzs0QkFDNUNDLHFCQUFhLENBQUMsVUFBVSxDQUFDLENBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxjQUFjLENBQUUsQ0FBQzs0QkFDL0YsYUFBYTt5QkFDYjt3QkFDRCxPQUFPLEVBQUUsQ0FBRSxhQUFhLENBQUU7cUJBQzFCOztnQ0F4SUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=