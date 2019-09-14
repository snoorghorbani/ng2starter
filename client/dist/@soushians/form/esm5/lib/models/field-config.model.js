/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Validator } from "./form-field-validator.model";
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
export { FieldConfig };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtY29uZmlnLm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9mb3JtLyIsInNvdXJjZXMiOlsibGliL21vZGVscy9maWVsZC1jb25maWcubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUV6RDtJQXFCQyxxQkFBWSxJQUFtQztRQUM5QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLElBQUksSUFBSSxTQUFTO1lBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDeEMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUNGLGtCQUFDO0FBQUQsQ0FBQyxBQTNCRCxJQTJCQzs7OztJQTFCQSx5QkFBVzs7SUFDWCwyQkFBb0M7O0lBQ3BDLDJCQUFhOztJQUNiLDhCQUFnQjs7SUFDaEIsK0JBQW1COztJQUNuQiw0QkFBYzs7SUFDZCxpQ0FBK0I7O0lBQy9CLG9DQUF1Qjs7SUFDdkIsMkJBQWM7O0lBQ2QsZ0NBQW1GOztJQUNuRiw0QkFBWTs7SUFDWiw0QkFBZTs7SUFDZiw0QkFBZTs7SUFDZiw4QkFFSTs7SUFDSixtQ0FBc0I7O0lBQ3RCLHNDQUF3Qjs7SUFDeEIsNkJBQXVCOztJQUN2QixnQ0FBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYWxpZGF0b3IgfSBmcm9tIFwiLi9mb3JtLWZpZWxkLXZhbGlkYXRvci5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZpZWxkQ29uZmlnIHtcclxuXHRpZDogbnVtYmVyO1xyXG5cdHR5cGU6IFwiZ3JvdXBcIiB8IFwiYXJyYXlcIiB8IFwiY29udHJvbFwiO1xyXG5cdG5hbWU6IHN0cmluZztcclxuXHRzdWJ0eXBlOiBzdHJpbmc7XHJcblx0ZGlzYWJsZWQ/OiBib29sZWFuO1xyXG5cdHRpdGxlOiBzdHJpbmc7XHJcblx0cGFyZW50VHlwZT86IFwiYXJyYXlcIiB8IFwiZ3JvdXBcIjtcclxuXHRmb3JtR3JvdXBQYXRoPzogc3RyaW5nO1xyXG5cdHBhdGg/OiBzdHJpbmc7XHJcblx0aW5wdXRUeXBlOiBcInNlbGVjdFwiIHwgXCJ0ZXh0XCIgfCBcIm51bWJlclwiIHwgXCJlbWFpbFwiIHwgXCJjb2xvclwiIHwgXCJjaGVja2JveFwiIHwgXCJ0YWJsZVwiO1xyXG5cdHZhbHVlPzogYW55O1xyXG5cdG9yZGVyPzogbnVtYmVyO1xyXG5cdHdpZHRoPzogbnVtYmVyO1xyXG5cdG9wdGlvbnM6IHtcclxuXHRcdFtrZXk6IHN0cmluZ106IHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW47XHJcblx0fVtdO1xyXG5cdGRhdGFFbmRwb2ludD86IHN0cmluZztcclxuXHRvcHRpb25zRW5kcG9pbnQ6IHN0cmluZztcclxuXHRmaWVsZHM/OiBGaWVsZENvbmZpZ1tdO1xyXG5cdHZhbGlkYXRvcjogVmFsaWRhdG9yO1xyXG5cdGNvbnN0cnVjdG9yKHR5cGU6IFwiZ3JvdXBcIiB8IFwiYXJyYXlcIiB8IFwiY29udHJvbFwiKSB7XHJcblx0XHR0aGlzLnR5cGUgPSB0eXBlO1xyXG5cdFx0aWYgKHR5cGUgIT0gXCJjb250cm9sXCIpIHRoaXMuZmllbGRzID0gW107XHJcblx0XHR0aGlzLndpZHRoID0gMztcclxuXHRcdHRoaXMudmFsaWRhdG9yID0gbmV3IFZhbGlkYXRvcigpO1xyXG5cdH1cclxufVxyXG4iXX0=