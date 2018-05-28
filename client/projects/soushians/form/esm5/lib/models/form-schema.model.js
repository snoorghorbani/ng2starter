/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { FieldConfig } from "./field-config.model";
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
    FormSchemaModel.prototype.init = function () {
        this._id = (Math.random() * 10).toString();
    };
    return FormSchemaModel;
}());
export { FormSchemaModel };
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
