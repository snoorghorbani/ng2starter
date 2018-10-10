/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
export var UpsertGridApiModel;
(function (UpsertGridApiModel) {
    var Request = /** @class */ (function () {
        function Request(initValue) {
            if (initValue === void 0) { initValue = {}; }
            var _this = this;
            Object.keys(initValue).forEach(function (key) { return (_this[key] = initValue[key]); });
        }
        /**
         * @return {?}
         */
        Request.prototype.getRequestBody = /**
         * @return {?}
         */
        function () {
            return this.grid;
        };
        return Request;
    }());
    UpsertGridApiModel.Request = Request;
    if (false) {
        /** @type {?} */
        Request.prototype.grid;
    }
    var Response = /** @class */ (function () {
        function Response() {
        }
        return Response;
    }());
    UpsertGridApiModel.Response = Response;
    if (false) {
        /** @type {?} */
        Response.prototype.Result;
    }
})(UpsertGridApiModel || (UpsertGridApiModel = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBzZXJ0LWdyaWQuYXBpLW1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9ncmlkLyIsInNvdXJjZXMiOlsibGliL21vZGVscy91cHNlcnQtZ3JpZC5hcGktbW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUtBLE1BQU0sS0FBVyxrQkFBa0I7QUFBbkMsV0FBaUIsa0JBQWtCO0lBQ2xDLElBQUE7UUFFQyxpQkFBWSxTQUFtRDtZQUFuRCwwQkFBQSxFQUFBLGNBQW1EO1lBQS9ELGlCQUVDO1lBREEsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxDQUFDLEtBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBNUIsQ0FBNEIsQ0FBQyxDQUFDO1NBQ3RFOzs7O1FBRUQsZ0NBQWM7OztRQUFkO1lBQ0MsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ2pCO3NCQWRIO1FBZUUsQ0FBQTtJQVRZLDBCQUFPOzs7OztJQVdwQixJQUFBO1FBRUM7U0FBZ0I7dUJBbkJsQjtRQW9CRSxDQUFBO0lBSFksMkJBQVE7Ozs7O0dBWkwsa0JBQWtCLEtBQWxCLGtCQUFrQixRQWdCbEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cFJlcXVlc3RCYXNlTW9kZWwgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBHcmlkTW9kZWwgfSBmcm9tIFwiLi9ncmlkLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIFVwc2VydEdyaWRBcGlNb2RlbCB7XHJcblx0ZXhwb3J0IGNsYXNzIFJlcXVlc3Qge1xyXG5cdFx0Z3JpZDogR3JpZE1vZGVsO1xyXG5cdFx0Y29uc3RydWN0b3IoaW5pdFZhbHVlOiBQYXJ0aWFsPFVwc2VydEdyaWRBcGlNb2RlbC5SZXF1ZXN0PiA9IHt9KSB7XHJcblx0XHRcdE9iamVjdC5rZXlzKGluaXRWYWx1ZSkuZm9yRWFjaCgoa2V5KSA9PiAodGhpc1trZXldID0gaW5pdFZhbHVlW2tleV0pKTtcclxuXHRcdH1cclxuXHJcblx0XHRnZXRSZXF1ZXN0Qm9keSgpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuZ3JpZDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGV4cG9ydCBjbGFzcyBSZXNwb25zZSB7XHJcblx0XHRSZXN1bHQ6IEdyaWRNb2RlbDtcclxuXHRcdGNvbnN0cnVjdG9yKCkge31cclxuXHR9XHJcbn1cclxuIl19