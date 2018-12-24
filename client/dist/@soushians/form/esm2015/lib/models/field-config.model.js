/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Validator } from "./form-field-validator.model";
export class FieldConfig {
    /**
     * @param {?} type
     */
    constructor(type) {
        this.type = type;
        if (type != "control")
            this.fields = [];
        this.width = 3;
        this.validator = new Validator();
    }
}
if (false) {
    /** @type {?} */
    FieldConfig.prototype.id;
    /** @type {?} */
    FieldConfig.prototype.type;
    /** @type {?} */
    FieldConfig.prototype.name;
    /** @type {?} */
    FieldConfig.prototype.subtype;
    /** @type {?} */
    FieldConfig.prototype.disabled;
    /** @type {?} */
    FieldConfig.prototype.title;
    /** @type {?} */
    FieldConfig.prototype.parentType;
    /** @type {?} */
    FieldConfig.prototype.formGroupPath;
    /** @type {?} */
    FieldConfig.prototype.path;
    /** @type {?} */
    FieldConfig.prototype.inputType;
    /** @type {?} */
    FieldConfig.prototype.value;
    /** @type {?} */
    FieldConfig.prototype.order;
    /** @type {?} */
    FieldConfig.prototype.width;
    /** @type {?} */
    FieldConfig.prototype.options;
    /** @type {?} */
    FieldConfig.prototype.dataEndpoint;
    /** @type {?} */
    FieldConfig.prototype.optionsEndpoint;
    /** @type {?} */
    FieldConfig.prototype.fields;
    /** @type {?} */
    FieldConfig.prototype.validator;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtY29uZmlnLm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9mb3JtLyIsInNvdXJjZXMiOlsibGliL21vZGVscy9maWVsZC1jb25maWcubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUV6RCxNQUFNLE9BQU8sV0FBVzs7OztJQXFCdkIsWUFBWSxJQUFtQztRQUM5QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLElBQUksSUFBSSxTQUFTO1lBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDeEMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7S0FDakM7Q0FDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbGlkYXRvciB9IGZyb20gXCIuL2Zvcm0tZmllbGQtdmFsaWRhdG9yLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRmllbGRDb25maWcge1xyXG5cdGlkOiBudW1iZXI7XHJcblx0dHlwZTogXCJncm91cFwiIHwgXCJhcnJheVwiIHwgXCJjb250cm9sXCI7XHJcblx0bmFtZTogc3RyaW5nO1xyXG5cdHN1YnR5cGU6IHN0cmluZztcclxuXHRkaXNhYmxlZD86IGJvb2xlYW47XHJcblx0dGl0bGU6IHN0cmluZztcclxuXHRwYXJlbnRUeXBlPzogXCJhcnJheVwiIHwgXCJncm91cFwiO1xyXG5cdGZvcm1Hcm91cFBhdGg/OiBzdHJpbmc7XHJcblx0cGF0aD86IHN0cmluZztcclxuXHRpbnB1dFR5cGU6IFwic2VsZWN0XCIgfCBcInRleHRcIiB8IFwibnVtYmVyXCIgfCBcImVtYWlsXCIgfCBcImNvbG9yXCIgfCBcImNoZWNrYm94XCIgfCBcInRhYmxlXCI7XHJcblx0dmFsdWU/OiBhbnk7XHJcblx0b3JkZXI/OiBudW1iZXI7XHJcblx0d2lkdGg/OiBudW1iZXI7XHJcblx0b3B0aW9uczoge1xyXG5cdFx0W2tleTogc3RyaW5nXTogc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbjtcclxuXHR9W107XHJcblx0ZGF0YUVuZHBvaW50Pzogc3RyaW5nO1xyXG5cdG9wdGlvbnNFbmRwb2ludDogc3RyaW5nO1xyXG5cdGZpZWxkcz86IEZpZWxkQ29uZmlnW107XHJcblx0dmFsaWRhdG9yOiBWYWxpZGF0b3I7XHJcblx0Y29uc3RydWN0b3IodHlwZTogXCJncm91cFwiIHwgXCJhcnJheVwiIHwgXCJjb250cm9sXCIpIHtcclxuXHRcdHRoaXMudHlwZSA9IHR5cGU7XHJcblx0XHRpZiAodHlwZSAhPSBcImNvbnRyb2xcIikgdGhpcy5maWVsZHMgPSBbXTtcclxuXHRcdHRoaXMud2lkdGggPSAzO1xyXG5cdFx0dGhpcy52YWxpZGF0b3IgPSBuZXcgVmFsaWRhdG9yKCk7XHJcblx0fVxyXG59XHJcbiJdfQ==