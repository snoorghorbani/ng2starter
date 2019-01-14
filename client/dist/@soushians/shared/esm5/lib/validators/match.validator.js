/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} destination
 * @return {?}
 */
export function MatchValidator(destination) {
    return function (control) {
        if (!control.root.value)
            return;
        /** @type {?} */
        var destinationValue = control.root.value[destination];
        return (destinationValue == control.value)
            ? null
            : { key: "don't matched" };
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0Y2gudmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvdmFsaWRhdG9ycy9tYXRjaC52YWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFQSxNQUFNLFVBQVUsY0FBYyxDQUFDLFdBQW1CO0lBQzlDLE9BQU8sVUFBQyxPQUF3QjtRQUM1QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLO1lBQUUsT0FBTzs7WUFDNUIsZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO1FBRXRELE9BQU8sQ0FBQyxnQkFBZ0IsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQ3RDLENBQUMsQ0FBQyxJQUFJO1lBQ04sQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLGVBQWUsRUFBRSxDQUFDO0lBQ25DLENBQUMsQ0FBQztBQUNOLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYWxpZGF0b3JGbiwgQWJzdHJhY3RDb250cm9sIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTWF0Y2hWYWxpZGF0b3IoZGVzdGluYXRpb246IHN0cmluZyk6IFZhbGlkYXRvckZuIHtcclxuICAgIHJldHVybiAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9PiB7XHJcbiAgICAgICAgaWYgKCFjb250cm9sLnJvb3QudmFsdWUpIHJldHVybjtcclxuICAgICAgICBsZXQgZGVzdGluYXRpb25WYWx1ZSA9IGNvbnRyb2wucm9vdC52YWx1ZVtkZXN0aW5hdGlvbl07XHJcblxyXG4gICAgICAgIHJldHVybiAoZGVzdGluYXRpb25WYWx1ZSA9PSBjb250cm9sLnZhbHVlKVxyXG4gICAgICAgICAgICA/IG51bGxcclxuICAgICAgICAgICAgOiB7IGtleTogXCJkb24ndCBtYXRjaGVkXCIgfTtcclxuICAgIH07XHJcbn0iXX0=