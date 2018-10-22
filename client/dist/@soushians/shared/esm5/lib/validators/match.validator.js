/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0Y2gudmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvdmFsaWRhdG9ycy9tYXRjaC52YWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFQSxNQUFNLHlCQUF5QixXQUFtQjtJQUM5QyxPQUFPLFVBQUMsT0FBd0I7UUFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSztZQUFFLE9BQU87O1FBQ2hDLElBQUksZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFdkQsT0FBTyxDQUFDLGdCQUFnQixJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDdEMsQ0FBQyxDQUFDLElBQUk7WUFDTixDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsZUFBZSxFQUFFLENBQUM7S0FDbEMsQ0FBQztDQUNMIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFsaWRhdG9yRm4sIEFic3RyYWN0Q29udHJvbCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE1hdGNoVmFsaWRhdG9yKGRlc3RpbmF0aW9uOiBzdHJpbmcpOiBWYWxpZGF0b3JGbiB7XHJcbiAgICByZXR1cm4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPT4ge1xyXG4gICAgICAgIGlmICghY29udHJvbC5yb290LnZhbHVlKSByZXR1cm47XHJcbiAgICAgICAgbGV0IGRlc3RpbmF0aW9uVmFsdWUgPSBjb250cm9sLnJvb3QudmFsdWVbZGVzdGluYXRpb25dO1xyXG5cclxuICAgICAgICByZXR1cm4gKGRlc3RpbmF0aW9uVmFsdWUgPT0gY29udHJvbC52YWx1ZSlcclxuICAgICAgICAgICAgPyBudWxsXHJcbiAgICAgICAgICAgIDogeyBrZXk6IFwiZG9uJ3QgbWF0Y2hlZFwiIH07XHJcbiAgICB9O1xyXG59Il19