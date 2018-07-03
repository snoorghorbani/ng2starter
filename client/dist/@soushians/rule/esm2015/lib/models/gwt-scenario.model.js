/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
export class GwtScenarioModel {
    /**
     * @param {?=} __0
     */
    constructor({ _id, anchorId, steps, name, featureId } = {}) {
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
    getRequsetBody() {
        return {
            _id: this._id,
            anchorId: this.anchorId,
            name: this.name,
            featureId: this.featureId,
            steps: this.steps.map(step => ({
                id: step.id,
                // opposite: step.opposite,
                params: step.params
            }))
        };
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3d0LXNjZW5hcmlvLm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy9ydWxlLyIsInNvdXJjZXMiOlsibGliL21vZGVscy9nd3Qtc2NlbmFyaW8ubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE1BQU07Ozs7SUFNTCxZQUNDLEVBQ0MsR0FBRyxFQUNILFFBQVEsRUFDUixLQUFLLEVBQ0wsSUFBSSxFQUNKLFNBQVMsS0FDcUYsRUFBRTtRQUVqRyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxJQUFJLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLElBQUksRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxJQUFJLEVBQUUsQ0FBQztLQUN6Qjs7OztJQUNELGNBQWM7UUFDYixNQUFNLENBQUM7WUFDTixHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUc7WUFDYixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQzlCLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTs7Z0JBRVgsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO2FBQ25CLENBQUMsQ0FBQztTQUNILENBQUM7S0FDRjtDQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3d0U3RlcCB9IGZyb20gXCIuL2d3dC1zdGVwLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgR3d0U2NlbmFyaW9Nb2RlbCB7XHJcblx0X2lkPzogc3RyaW5nO1xyXG5cdG5hbWU6IHN0cmluZztcclxuXHRhbmNob3JJZDogc3RyaW5nO1xyXG5cdGZlYXR1cmVJZD86IHN0cmluZztcclxuXHRzdGVwczogR3d0U3RlcFtdO1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0e1xyXG5cdFx0XHRfaWQsXHJcblx0XHRcdGFuY2hvcklkLFxyXG5cdFx0XHRzdGVwcyxcclxuXHRcdFx0bmFtZSxcclxuXHRcdFx0ZmVhdHVyZUlkXHJcblx0XHR9OiB7IF9pZD86IHN0cmluZzsgYW5jaG9ySWQ/OiBzdHJpbmc7IHN0ZXBzPzogR3d0U3RlcFtdOyBuYW1lPzogc3RyaW5nOyBmZWF0dXJlSWQ/OiBzdHJpbmcgfSA9IHt9XHJcblx0KSB7XHJcblx0XHR0aGlzLl9pZCA9IF9pZCB8fCBcIlwiO1xyXG5cdFx0dGhpcy5uYW1lID0gbmFtZSB8fCBcIlwiO1xyXG5cdFx0dGhpcy5mZWF0dXJlSWQgPSBmZWF0dXJlSWQgfHwgXCJcIjtcclxuXHRcdHRoaXMuX2lkID0gX2lkIHx8IFwiXCI7XHJcblx0XHR0aGlzLmFuY2hvcklkID0gYW5jaG9ySWQgfHwgXCJcIjtcclxuXHRcdHRoaXMuc3RlcHMgPSBzdGVwcyB8fCBbXTtcclxuXHR9XHJcblx0Z2V0UmVxdXNldEJvZHkoKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRfaWQ6IHRoaXMuX2lkLFxyXG5cdFx0XHRhbmNob3JJZDogdGhpcy5hbmNob3JJZCxcclxuXHRcdFx0bmFtZTogdGhpcy5uYW1lLFxyXG5cdFx0XHRmZWF0dXJlSWQ6IHRoaXMuZmVhdHVyZUlkLFxyXG5cdFx0XHRzdGVwczogdGhpcy5zdGVwcy5tYXAoc3RlcCA9PiAoe1xyXG5cdFx0XHRcdGlkOiBzdGVwLmlkLFxyXG5cdFx0XHRcdC8vIG9wcG9zaXRlOiBzdGVwLm9wcG9zaXRlLFxyXG5cdFx0XHRcdHBhcmFtczogc3RlcC5wYXJhbXNcclxuXHRcdFx0fSkpXHJcblx0XHR9O1xyXG5cdH1cclxufVxyXG4iXX0=