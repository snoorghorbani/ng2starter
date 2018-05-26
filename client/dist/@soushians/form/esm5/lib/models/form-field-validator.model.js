/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */
export function validation() { }
function validation_tsickle_Closure_declarations() {
    /** @type {?} */
    validation.prototype.active;
    /** @type {?} */
    validation.prototype.message;
    /** @type {?|undefined} */
    validation.prototype.value;
}
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
export { Validator };
function Validator_tsickle_Closure_declarations() {
    /** @type {?} */
    Validator.prototype.required;
    /** @type {?} */
    Validator.prototype.minlength;
    /** @type {?} */
    Validator.prototype.email;
}
//# sourceMappingURL=form-field-validator.model.js.map
