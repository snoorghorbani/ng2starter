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
                opposite: step.opposite,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3d0LXNjZW5hcmlvLm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9ydWxlLyIsInNvdXJjZXMiOlsibGliL21vZGVscy9nd3Qtc2NlbmFyaW8ubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLElBQUE7SUFNQywwQkFDQyxFQU1pRztZQU5qRyw0QkFNaUcsRUFMaEcsWUFBRyxFQUNILHNCQUFRLEVBQ1IsZ0JBQUssRUFDTCxjQUFJLEVBQ0osd0JBQVM7UUFHVixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxJQUFJLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLElBQUksRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxJQUFJLEVBQUUsQ0FBQztLQUN6Qjs7OztJQUNELHlDQUFjOzs7SUFBZDtRQUNDLE1BQU0sQ0FBQztZQUNOLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRztZQUNiLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsQ0FBQztnQkFDaEMsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFO2dCQUNYLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtnQkFDdkIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO2FBQ25CLENBQUMsRUFKOEIsQ0FJOUIsQ0FBQztTQUNILENBQUM7S0FDRjsyQkFwQ0Y7SUFxQ0MsQ0FBQTtBQW5DRCw0QkFtQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHd3RTdGVwIH0gZnJvbSBcIi4vZ3d0LXN0ZXAubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHd3RTY2VuYXJpb01vZGVsIHtcclxuXHRfaWQ6IHN0cmluZztcclxuXHRuYW1lOiBzdHJpbmc7XHJcblx0YW5jaG9ySWQ6IHN0cmluZztcclxuXHRmZWF0dXJlSWQ6IHN0cmluZztcclxuXHRzdGVwczogR3d0U3RlcFtdO1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0e1xyXG5cdFx0XHRfaWQsXHJcblx0XHRcdGFuY2hvcklkLFxyXG5cdFx0XHRzdGVwcyxcclxuXHRcdFx0bmFtZSxcclxuXHRcdFx0ZmVhdHVyZUlkXHJcblx0XHR9OiB7IF9pZD86IHN0cmluZzsgYW5jaG9ySWQ/OiBzdHJpbmc7IHN0ZXBzPzogR3d0U3RlcFtdOyBuYW1lPzogc3RyaW5nOyBmZWF0dXJlSWQ/OiBzdHJpbmcgfSA9IHt9XHJcblx0KSB7XHJcblx0XHR0aGlzLl9pZCA9IF9pZCB8fCBcIlwiO1xyXG5cdFx0dGhpcy5uYW1lID0gbmFtZSB8fCBcIlwiO1xyXG5cdFx0dGhpcy5mZWF0dXJlSWQgPSBmZWF0dXJlSWQgfHwgXCJcIjtcclxuXHRcdHRoaXMuX2lkID0gX2lkIHx8IFwiXCI7XHJcblx0XHR0aGlzLmFuY2hvcklkID0gYW5jaG9ySWQgfHwgXCJcIjtcclxuXHRcdHRoaXMuc3RlcHMgPSBzdGVwcyB8fCBbXTtcclxuXHR9XHJcblx0Z2V0UmVxdXNldEJvZHkoKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRfaWQ6IHRoaXMuX2lkLFxyXG5cdFx0XHRhbmNob3JJZDogdGhpcy5hbmNob3JJZCxcclxuXHRcdFx0bmFtZTogdGhpcy5uYW1lLFxyXG5cdFx0XHRmZWF0dXJlSWQ6IHRoaXMuZmVhdHVyZUlkLFxyXG5cdFx0XHRzdGVwczogdGhpcy5zdGVwcy5tYXAoKHN0ZXApID0+ICh7XHJcblx0XHRcdFx0aWQ6IHN0ZXAuaWQsXHJcblx0XHRcdFx0b3Bwb3NpdGU6IHN0ZXAub3Bwb3NpdGUsXHJcblx0XHRcdFx0cGFyYW1zOiBzdGVwLnBhcmFtc1xyXG5cdFx0XHR9KSlcclxuXHRcdH07XHJcblx0fVxyXG59XHJcbiJdfQ==