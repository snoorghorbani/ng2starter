/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {string} */
const SourceActionTypes = {
    SOURCE_SUBMIT: "[SOURCE] source submit",
    SOURCE_SUBMIT_SUCCEED: "[SOURCE] source submit succeed",
    SOURCE_SUBMIT_FAILED: "[SOURCE] source submit failed",
};
export { SourceActionTypes };
export class SourceSubmit {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = SourceActionTypes.SOURCE_SUBMIT;
    }
}
if (false) {
    /** @type {?} */
    SourceSubmit.prototype.type;
    /** @type {?} */
    SourceSubmit.prototype.payload;
}
export class SourceSubmitSucceed {
    constructor() {
        this.type = SourceActionTypes.SOURCE_SUBMIT_SUCCEED;
    }
}
if (false) {
    /** @type {?} */
    SourceSubmitSucceed.prototype.type;
}
export class SourceSubmitFailed {
    constructor() {
        this.type = SourceActionTypes.SOURCE_SUBMIT_FAILED;
    }
}
if (false) {
    /** @type {?} */
    SourceSubmitFailed.prototype.type;
}
/** @typedef {?} */
var Actions;
export { Actions };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvc291cmNlLyIsInNvdXJjZXMiOlsibGliL2FjdGlvbnMvc291cmNlLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFJQyxlQUFnQix3QkFBd0I7SUFDeEMsdUJBQXdCLGdDQUFnQztJQUN4RCxzQkFBdUIsK0JBQStCOzs7QUFHdkQsTUFBTTs7OztJQUVMLFlBQW1CLE9BQXFDO1FBQXJDLFlBQU8sR0FBUCxPQUFPLENBQThCO29CQUR4QyxpQkFBaUIsQ0FBQyxhQUFhO0tBQ2E7Q0FDNUQ7Ozs7Ozs7QUFDRCxNQUFNOztvQkFDVyxpQkFBaUIsQ0FBQyxxQkFBcUI7O0NBQ3ZEOzs7OztBQUNELE1BQU07O29CQUNXLGlCQUFpQixDQUFDLG9CQUFvQjs7Q0FDdEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuaW1wb3J0IHsgU291cmNlTW9kZWwsIFVwc2VydFNvdXJjZUFwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0IGVudW0gU291cmNlQWN0aW9uVHlwZXMge1xyXG5cdFNPVVJDRV9TVUJNSVQgPSBcIltTT1VSQ0VdIHNvdXJjZSBzdWJtaXRcIixcclxuXHRTT1VSQ0VfU1VCTUlUX1NVQ0NFRUQgPSBcIltTT1VSQ0VdIHNvdXJjZSBzdWJtaXQgc3VjY2VlZFwiLFxyXG5cdFNPVVJDRV9TVUJNSVRfRkFJTEVEID0gXCJbU09VUkNFXSBzb3VyY2Ugc3VibWl0IGZhaWxlZFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTb3VyY2VTdWJtaXQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTb3VyY2VBY3Rpb25UeXBlcy5TT1VSQ0VfU1VCTUlUO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBVcHNlcnRTb3VyY2VBcGlNb2RlbC5SZXF1ZXN0KSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBTb3VyY2VTdWJtaXRTdWNjZWVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU291cmNlQWN0aW9uVHlwZXMuU09VUkNFX1NVQk1JVF9TVUNDRUVEO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBTb3VyY2VTdWJtaXRGYWlsZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTb3VyY2VBY3Rpb25UeXBlcy5TT1VSQ0VfU1VCTUlUX0ZBSUxFRDtcclxufVxyXG5leHBvcnQgdHlwZSBBY3Rpb25zID0gU291cmNlU3VibWl0IHwgU291cmNlU3VibWl0U3VjY2VlZCB8IFNvdXJjZVN1Ym1pdEZhaWxlZDtcclxuIl19