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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0Y2gudmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvdmFsaWRhdG9ycy9tYXRjaC52YWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFQSxNQUFNLFVBQVUsY0FBYyxDQUFDLFdBQW1CO0lBQzlDLE9BQU8sQ0FBQyxPQUF3QixFQUEwQixFQUFFO1FBQ3hELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUs7WUFBRSxPQUFPOztZQUM1QixnQkFBZ0IsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7UUFFdEQsT0FBTyxDQUFDLGdCQUFnQixJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDdEMsQ0FBQyxDQUFDLElBQUk7WUFDTixDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsZUFBZSxFQUFFLENBQUM7SUFDbkMsQ0FBQyxDQUFDO0FBQ04sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbGlkYXRvckZuLCBBYnN0cmFjdENvbnRyb2wgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBNYXRjaFZhbGlkYXRvcihkZXN0aW5hdGlvbjogc3RyaW5nKTogVmFsaWRhdG9yRm4ge1xyXG4gICAgcmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0+IHtcclxuICAgICAgICBpZiAoIWNvbnRyb2wucm9vdC52YWx1ZSkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBkZXN0aW5hdGlvblZhbHVlID0gY29udHJvbC5yb290LnZhbHVlW2Rlc3RpbmF0aW9uXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChkZXN0aW5hdGlvblZhbHVlID09IGNvbnRyb2wudmFsdWUpXHJcbiAgICAgICAgICAgID8gbnVsbFxyXG4gICAgICAgICAgICA6IHsga2V5OiBcImRvbid0IG1hdGNoZWRcIiB9O1xyXG4gICAgfTtcclxufSJdfQ==