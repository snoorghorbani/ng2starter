/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { FieldConfig } from "./field-config.model";
export class FormSchemaModel {
    constructor() {
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
    init() {
        this._id = (Math.random() * 10).toString();
    }
}
function FormSchemaModel_tsickle_Closure_declarations() {
    /** @type {?} */
    FormSchemaModel.prototype._id;
    /** @type {?} */
    FormSchemaModel.prototype.name;
    /** @type {?} */
    FormSchemaModel.prototype.description;
    /** @type {?} */
    FormSchemaModel.prototype.form;
    /** @type {?} */
    FormSchemaModel.prototype.events;
}
//# sourceMappingURL=form-schema.model.js.map
