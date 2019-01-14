/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtY29uZmlnLm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9mb3JtLyIsInNvdXJjZXMiOlsibGliL21vZGVscy9maWVsZC1jb25maWcubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUV6RCxNQUFNLE9BQU8sV0FBVzs7OztJQXFCdkIsWUFBWSxJQUFtQztRQUM5QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLElBQUksSUFBSSxTQUFTO1lBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDeEMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7SUFDbEMsQ0FBQztDQUNEOzs7SUExQkEseUJBQVc7O0lBQ1gsMkJBQW9DOztJQUNwQywyQkFBYTs7SUFDYiw4QkFBZ0I7O0lBQ2hCLCtCQUFtQjs7SUFDbkIsNEJBQWM7O0lBQ2QsaUNBQStCOztJQUMvQixvQ0FBdUI7O0lBQ3ZCLDJCQUFjOztJQUNkLGdDQUFtRjs7SUFDbkYsNEJBQVk7O0lBQ1osNEJBQWU7O0lBQ2YsNEJBQWU7O0lBQ2YsOEJBRUk7O0lBQ0osbUNBQXNCOztJQUN0QixzQ0FBd0I7O0lBQ3hCLDZCQUF1Qjs7SUFDdkIsZ0NBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFsaWRhdG9yIH0gZnJvbSBcIi4vZm9ybS1maWVsZC12YWxpZGF0b3IubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBGaWVsZENvbmZpZyB7XHJcblx0aWQ6IG51bWJlcjtcclxuXHR0eXBlOiBcImdyb3VwXCIgfCBcImFycmF5XCIgfCBcImNvbnRyb2xcIjtcclxuXHRuYW1lOiBzdHJpbmc7XHJcblx0c3VidHlwZTogc3RyaW5nO1xyXG5cdGRpc2FibGVkPzogYm9vbGVhbjtcclxuXHR0aXRsZTogc3RyaW5nO1xyXG5cdHBhcmVudFR5cGU/OiBcImFycmF5XCIgfCBcImdyb3VwXCI7XHJcblx0Zm9ybUdyb3VwUGF0aD86IHN0cmluZztcclxuXHRwYXRoPzogc3RyaW5nO1xyXG5cdGlucHV0VHlwZTogXCJzZWxlY3RcIiB8IFwidGV4dFwiIHwgXCJudW1iZXJcIiB8IFwiZW1haWxcIiB8IFwiY29sb3JcIiB8IFwiY2hlY2tib3hcIiB8IFwidGFibGVcIjtcclxuXHR2YWx1ZT86IGFueTtcclxuXHRvcmRlcj86IG51bWJlcjtcclxuXHR3aWR0aD86IG51bWJlcjtcclxuXHRvcHRpb25zOiB7XHJcblx0XHRba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuO1xyXG5cdH1bXTtcclxuXHRkYXRhRW5kcG9pbnQ/OiBzdHJpbmc7XHJcblx0b3B0aW9uc0VuZHBvaW50OiBzdHJpbmc7XHJcblx0ZmllbGRzPzogRmllbGRDb25maWdbXTtcclxuXHR2YWxpZGF0b3I6IFZhbGlkYXRvcjtcclxuXHRjb25zdHJ1Y3Rvcih0eXBlOiBcImdyb3VwXCIgfCBcImFycmF5XCIgfCBcImNvbnRyb2xcIikge1xyXG5cdFx0dGhpcy50eXBlID0gdHlwZTtcclxuXHRcdGlmICh0eXBlICE9IFwiY29udHJvbFwiKSB0aGlzLmZpZWxkcyA9IFtdO1xyXG5cdFx0dGhpcy53aWR0aCA9IDM7XHJcblx0XHR0aGlzLnZhbGlkYXRvciA9IG5ldyBWYWxpZGF0b3IoKTtcclxuXHR9XHJcbn1cclxuIl19