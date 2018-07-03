/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var GwtScenarioModel = /** @class */ (function () {
    function GwtScenarioModel(_a) {
        var _b = _a === void 0 ? {} : _a, _id = _b._id, anchorId = _b.anchorId, steps = _b.steps, name = _b.name, featureId = _b.featureId;
        this._id = _id || "";
        this.name = name || "";
        this.featureId = featureId || "";
        this._id = _id || "";
        this.anchorId = anchorId || "";
        this.steps = steps || [];
    }
    /**
     * @return {?}
     */
    GwtScenarioModel.prototype.getRequsetBody = /**
     * @return {?}
     */
    function () {
        return {
            _id: this._id,
            anchorId: this.anchorId,
            name: this.name,
            featureId: this.featureId,
            steps: this.steps.map(function (step) { return ({
                id: step.id,
                // opposite: step.opposite,
                params: step.params
            }); })
        };
    };
    return GwtScenarioModel;
}());
export { GwtScenarioModel };
function GwtScenarioModel_tsickle_Closure_declarations() {
    /** @type {?} */
    GwtScenarioModel.prototype._id;
    /** @type {?} */
    GwtScenarioModel.prototype.name;
    /** @type {?} */
    GwtScenarioModel.prototype.anchorId;
    /** @type {?} */
    GwtScenarioModel.prototype.featureId;
    /** @type {?} */
    GwtScenarioModel.prototype.steps;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3d0LXNjZW5hcmlvLm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9ydWxlLyIsInNvdXJjZXMiOlsibGliL21vZGVscy9nd3Qtc2NlbmFyaW8ubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLElBQUE7SUFNQywwQkFDQyxFQU1pRztZQU5qRyw0QkFNaUcsRUFMaEcsWUFBRyxFQUNILHNCQUFRLEVBQ1IsZ0JBQUssRUFDTCxjQUFJLEVBQ0osd0JBQVM7UUFHVixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxJQUFJLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLElBQUksRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxJQUFJLEVBQUUsQ0FBQztLQUN6Qjs7OztJQUNELHlDQUFjOzs7SUFBZDtRQUNDLE1BQU0sQ0FBQztZQUNOLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRztZQUNiLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsQ0FBQztnQkFDOUIsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFOztnQkFFWCxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07YUFDbkIsQ0FBQyxFQUo0QixDQUk1QixDQUFDO1NBQ0gsQ0FBQztLQUNGOzJCQXBDRjtJQXFDQyxDQUFBO0FBbkNELDRCQW1DQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEd3dFN0ZXAgfSBmcm9tIFwiLi9nd3Qtc3RlcC5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEd3dFNjZW5hcmlvTW9kZWwge1xyXG5cdF9pZD86IHN0cmluZztcclxuXHRuYW1lOiBzdHJpbmc7XHJcblx0YW5jaG9ySWQ6IHN0cmluZztcclxuXHRmZWF0dXJlSWQ/OiBzdHJpbmc7XHJcblx0c3RlcHM6IEd3dFN0ZXBbXTtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHtcclxuXHRcdFx0X2lkLFxyXG5cdFx0XHRhbmNob3JJZCxcclxuXHRcdFx0c3RlcHMsXHJcblx0XHRcdG5hbWUsXHJcblx0XHRcdGZlYXR1cmVJZFxyXG5cdFx0fTogeyBfaWQ/OiBzdHJpbmc7IGFuY2hvcklkPzogc3RyaW5nOyBzdGVwcz86IEd3dFN0ZXBbXTsgbmFtZT86IHN0cmluZzsgZmVhdHVyZUlkPzogc3RyaW5nIH0gPSB7fVxyXG5cdCkge1xyXG5cdFx0dGhpcy5faWQgPSBfaWQgfHwgXCJcIjtcclxuXHRcdHRoaXMubmFtZSA9IG5hbWUgfHwgXCJcIjtcclxuXHRcdHRoaXMuZmVhdHVyZUlkID0gZmVhdHVyZUlkIHx8IFwiXCI7XHJcblx0XHR0aGlzLl9pZCA9IF9pZCB8fCBcIlwiO1xyXG5cdFx0dGhpcy5hbmNob3JJZCA9IGFuY2hvcklkIHx8IFwiXCI7XHJcblx0XHR0aGlzLnN0ZXBzID0gc3RlcHMgfHwgW107XHJcblx0fVxyXG5cdGdldFJlcXVzZXRCb2R5KCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0X2lkOiB0aGlzLl9pZCxcclxuXHRcdFx0YW5jaG9ySWQ6IHRoaXMuYW5jaG9ySWQsXHJcblx0XHRcdG5hbWU6IHRoaXMubmFtZSxcclxuXHRcdFx0ZmVhdHVyZUlkOiB0aGlzLmZlYXR1cmVJZCxcclxuXHRcdFx0c3RlcHM6IHRoaXMuc3RlcHMubWFwKHN0ZXAgPT4gKHtcclxuXHRcdFx0XHRpZDogc3RlcC5pZCxcclxuXHRcdFx0XHQvLyBvcHBvc2l0ZTogc3RlcC5vcHBvc2l0ZSxcclxuXHRcdFx0XHRwYXJhbXM6IHN0ZXAucGFyYW1zXHJcblx0XHRcdH0pKVxyXG5cdFx0fTtcclxuXHR9XHJcbn1cclxuIl19