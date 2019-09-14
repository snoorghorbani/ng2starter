/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} destination
 * @return {?}
 */
export function MatchValidator(destination) {
    return (control) => {
        if (!control.root.value)
            return;
        /** @type {?} */
        let destinationValue = control.root.value[destination];
        return (destinationValue == control.value)
            ? null
            : { key: "don't matched" };
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0Y2gudmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9jb25maWcvIiwic291cmNlcyI6WyJzaGFyZWQvc3JjL2xpYi92YWxpZGF0b3JzL21hdGNoLnZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUVBLE1BQU0sVUFBVSxjQUFjLENBQUMsV0FBbUI7SUFDOUMsT0FBTyxDQUFDLE9BQXdCLEVBQTBCLEVBQUU7UUFDeEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSztZQUFFLE9BQU87O1lBQzVCLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQztRQUV0RCxPQUFPLENBQUMsZ0JBQWdCLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQztZQUN0QyxDQUFDLENBQUMsSUFBSTtZQUNOLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxlQUFlLEVBQUUsQ0FBQztJQUNuQyxDQUFDLENBQUM7QUFDTixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFsaWRhdG9yRm4sIEFic3RyYWN0Q29udHJvbCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE1hdGNoVmFsaWRhdG9yKGRlc3RpbmF0aW9uOiBzdHJpbmcpOiBWYWxpZGF0b3JGbiB7XHJcbiAgICByZXR1cm4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPT4ge1xyXG4gICAgICAgIGlmICghY29udHJvbC5yb290LnZhbHVlKSByZXR1cm47XHJcbiAgICAgICAgbGV0IGRlc3RpbmF0aW9uVmFsdWUgPSBjb250cm9sLnJvb3QudmFsdWVbZGVzdGluYXRpb25dO1xyXG5cclxuICAgICAgICByZXR1cm4gKGRlc3RpbmF0aW9uVmFsdWUgPT0gY29udHJvbC52YWx1ZSlcclxuICAgICAgICAgICAgPyBudWxsXHJcbiAgICAgICAgICAgIDogeyBrZXk6IFwiZG9uJ3QgbWF0Y2hlZFwiIH07XHJcbiAgICB9O1xyXG59Il19