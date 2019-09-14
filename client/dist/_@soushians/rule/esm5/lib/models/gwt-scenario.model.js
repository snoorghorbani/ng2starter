/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                opposite: step.opposite,
                params: step.params
            }); })
        };
    };
    return GwtScenarioModel;
}());
export { GwtScenarioModel };
if (false) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3d0LXNjZW5hcmlvLm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9ydWxlLyIsInNvdXJjZXMiOlsibGliL21vZGVscy9nd3Qtc2NlbmFyaW8ubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBO0lBTUMsMEJBQ0MsRUFNaUc7WUFOakcsNEJBTWlHLEVBTGhHLFlBQUcsRUFDSCxzQkFBUSxFQUNSLGdCQUFLLEVBQ0wsY0FBSSxFQUNKLHdCQUFTO1FBR1YsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsSUFBSSxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxJQUFJLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssSUFBSSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7OztJQUNELHlDQUFjOzs7SUFBZDtRQUNDLE9BQU87WUFDTixHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUc7WUFDYixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFDLElBQUksSUFBSyxPQUFBLENBQUM7Z0JBQ2hDLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtnQkFDWCxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7Z0JBQ3ZCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTthQUNuQixDQUFDLEVBSjhCLENBSTlCLENBQUM7U0FDSCxDQUFDO0lBQ0gsQ0FBQztJQUNGLHVCQUFDO0FBQUQsQ0FBQyxBQW5DRCxJQW1DQzs7OztJQWxDQSwrQkFBWTs7SUFDWixnQ0FBYTs7SUFDYixvQ0FBaUI7O0lBQ2pCLHFDQUFrQjs7SUFDbEIsaUNBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3d0U3RlcCB9IGZyb20gXCIuL2d3dC1zdGVwLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgR3d0U2NlbmFyaW9Nb2RlbCB7XHJcblx0X2lkOiBzdHJpbmc7XHJcblx0bmFtZTogc3RyaW5nO1xyXG5cdGFuY2hvcklkOiBzdHJpbmc7XHJcblx0ZmVhdHVyZUlkOiBzdHJpbmc7XHJcblx0c3RlcHM6IEd3dFN0ZXBbXTtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHtcclxuXHRcdFx0X2lkLFxyXG5cdFx0XHRhbmNob3JJZCxcclxuXHRcdFx0c3RlcHMsXHJcblx0XHRcdG5hbWUsXHJcblx0XHRcdGZlYXR1cmVJZFxyXG5cdFx0fTogeyBfaWQ/OiBzdHJpbmc7IGFuY2hvcklkPzogc3RyaW5nOyBzdGVwcz86IEd3dFN0ZXBbXTsgbmFtZT86IHN0cmluZzsgZmVhdHVyZUlkPzogc3RyaW5nIH0gPSB7fVxyXG5cdCkge1xyXG5cdFx0dGhpcy5faWQgPSBfaWQgfHwgXCJcIjtcclxuXHRcdHRoaXMubmFtZSA9IG5hbWUgfHwgXCJcIjtcclxuXHRcdHRoaXMuZmVhdHVyZUlkID0gZmVhdHVyZUlkIHx8IFwiXCI7XHJcblx0XHR0aGlzLl9pZCA9IF9pZCB8fCBcIlwiO1xyXG5cdFx0dGhpcy5hbmNob3JJZCA9IGFuY2hvcklkIHx8IFwiXCI7XHJcblx0XHR0aGlzLnN0ZXBzID0gc3RlcHMgfHwgW107XHJcblx0fVxyXG5cdGdldFJlcXVzZXRCb2R5KCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0X2lkOiB0aGlzLl9pZCxcclxuXHRcdFx0YW5jaG9ySWQ6IHRoaXMuYW5jaG9ySWQsXHJcblx0XHRcdG5hbWU6IHRoaXMubmFtZSxcclxuXHRcdFx0ZmVhdHVyZUlkOiB0aGlzLmZlYXR1cmVJZCxcclxuXHRcdFx0c3RlcHM6IHRoaXMuc3RlcHMubWFwKChzdGVwKSA9PiAoe1xyXG5cdFx0XHRcdGlkOiBzdGVwLmlkLFxyXG5cdFx0XHRcdG9wcG9zaXRlOiBzdGVwLm9wcG9zaXRlLFxyXG5cdFx0XHRcdHBhcmFtczogc3RlcC5wYXJhbXNcclxuXHRcdFx0fSkpXHJcblx0XHR9O1xyXG5cdH1cclxufVxyXG4iXX0=