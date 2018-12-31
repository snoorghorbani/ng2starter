/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { WidgetsActionTypes } from "./widget.actions";
/**
 * @record
 */
export function State() { }
/** @type {?} */
State.prototype.data;
const ɵ0 = [];
/** @type {?} */
const initialState = {
    data: ɵ0
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function Reducer(state = initialState, action) {
    /** @type {?} */
    let _data;
    switch (action.type) {
        case WidgetsActionTypes.UPSERT:
            _data = state.data.concat();
            /** @type {?} */
            let newWidgets = action.payload;
            if (!(newWidgets instanceof Array)) {
                newWidgets = [newWidgets];
                console.error("'WidgetsActionTypes.UPSERT' does not get array payload");
            }
            newWidgets.forEach((newWidget) => {
                /** @type {?} */
                const existedWidgetIndex = _data.findIndex((w) => w._id == newWidget._id);
                if (existedWidgetIndex > -1) {
                    _data.splice(existedWidgetIndex, 1, newWidget);
                }
                else {
                    _data.push(newWidget);
                }
            });
            return Object.assign({}, state, { data: _data });
        case WidgetsActionTypes.DELETE:
            debugger;
            _data = state.data.concat();
            /** @type {?} */
            const widgetIndex = state.data.findIndex((w) => w._id == action.payload._id);
            if (widgetIndex > -1) {
                _data.splice(widgetIndex, 1);
            }
            return Object.assign({}, state, { data: _data });
        default:
            return state;
    }
}
/** @type {?} */
export const getWidgets = (state) => state.data;
export { ɵ0 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy5yZWR1Y2Vycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzb3VzaGlhbnMvd2lkZ2V0LyIsInNvdXJjZXMiOlsibGliL3Jvb3Qvd2lkZ2V0cy5yZWR1Y2Vycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFrQixrQkFBa0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7Ozs7O1dBTy9ELEVBQUU7O0FBRFQsTUFBTSxZQUFZLEdBQVU7SUFDM0IsSUFBSSxJQUFJO0NBQ1IsQ0FBQzs7Ozs7O0FBRUYsTUFBTSxVQUFVLE9BQU8sQ0FBQyxLQUFLLEdBQUcsWUFBWSxFQUFFLE1BQXNCOztJQUNuRSxJQUFJLEtBQUssQ0FBcUI7SUFDOUIsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ3BCLEtBQUssa0JBQWtCLENBQUMsTUFBTTtZQUM3QixLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7WUFDNUIsSUFBSSxVQUFVLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUNoQyxJQUFJLENBQUMsQ0FBQyxVQUFVLFlBQVksS0FBSyxDQUFDLEVBQUU7Z0JBQ25DLFVBQVUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUMxQixPQUFPLENBQUMsS0FBSyxDQUFDLHdEQUF3RCxDQUFDLENBQUM7YUFDeEU7WUFFRCxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUU7O2dCQUNoQyxNQUFNLGtCQUFrQixHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUMxRSxJQUFJLGtCQUFrQixHQUFHLENBQUMsQ0FBQyxFQUFFO29CQUM1QixLQUFLLENBQUMsTUFBTSxDQUFDLGtCQUFrQixFQUFFLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQztpQkFDL0M7cUJBQU07b0JBQ04sS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztpQkFDdEI7YUFDRCxDQUFDLENBQUM7WUFFSCx5QkFDSSxLQUFLLElBQ1IsSUFBSSxFQUFFLEtBQUssSUFDVjtRQUVILEtBQUssa0JBQWtCLENBQUMsTUFBTTtZQUM3QixRQUFRLENBQUM7WUFDVCxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7WUFFNUIsTUFBTSxXQUFXLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM3RSxJQUFJLFdBQVcsR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDckIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDN0I7WUFDRCx5QkFDSSxLQUFLLElBQ1IsSUFBSSxFQUFFLEtBQUssSUFDVjtRQUNIO1lBQ0MsT0FBTyxLQUFLLENBQUM7S0FDZDtDQUNEOztBQUVELGFBQWEsVUFBVSxHQUFHLENBQUMsS0FBWSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgV2lkZ2V0TW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3dpZGdldC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBXaWRnZXRzQWN0aW9ucywgV2lkZ2V0c0FjdGlvblR5cGVzIH0gZnJvbSBcIi4vd2lkZ2V0LmFjdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xyXG5cdGRhdGE6IFdpZGdldE1vZGVsPGFueT5bXTtcclxufVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBTdGF0ZSA9IHtcclxuXHRkYXRhOiBbXVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogV2lkZ2V0c0FjdGlvbnMpOiBTdGF0ZSB7XHJcblx0bGV0IF9kYXRhOiBXaWRnZXRNb2RlbDxhbnk+W107XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBXaWRnZXRzQWN0aW9uVHlwZXMuVVBTRVJUOlxyXG5cdFx0XHRfZGF0YSA9IHN0YXRlLmRhdGEuY29uY2F0KCk7XHJcblx0XHRcdGxldCBuZXdXaWRnZXRzID0gYWN0aW9uLnBheWxvYWQ7XHJcblx0XHRcdGlmICghKG5ld1dpZGdldHMgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuXHRcdFx0XHRuZXdXaWRnZXRzID0gW25ld1dpZGdldHNdO1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCInV2lkZ2V0c0FjdGlvblR5cGVzLlVQU0VSVCcgZG9lcyBub3QgZ2V0IGFycmF5IHBheWxvYWRcIik7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdG5ld1dpZGdldHMuZm9yRWFjaCgobmV3V2lkZ2V0KSA9PiB7XHJcblx0XHRcdFx0Y29uc3QgZXhpc3RlZFdpZGdldEluZGV4ID0gX2RhdGEuZmluZEluZGV4KCh3KSA9PiB3Ll9pZCA9PSBuZXdXaWRnZXQuX2lkKTtcclxuXHRcdFx0XHRpZiAoZXhpc3RlZFdpZGdldEluZGV4ID4gLTEpIHtcclxuXHRcdFx0XHRcdF9kYXRhLnNwbGljZShleGlzdGVkV2lkZ2V0SW5kZXgsIDEsIG5ld1dpZGdldCk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdF9kYXRhLnB1c2gobmV3V2lkZ2V0KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0ZSxcclxuXHRcdFx0XHRkYXRhOiBfZGF0YVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdGNhc2UgV2lkZ2V0c0FjdGlvblR5cGVzLkRFTEVURTpcclxuXHRcdFx0ZGVidWdnZXI7XHJcblx0XHRcdF9kYXRhID0gc3RhdGUuZGF0YS5jb25jYXQoKTtcclxuXHJcblx0XHRcdGNvbnN0IHdpZGdldEluZGV4ID0gc3RhdGUuZGF0YS5maW5kSW5kZXgoKHcpID0+IHcuX2lkID09IGFjdGlvbi5wYXlsb2FkLl9pZCk7XHJcblx0XHRcdGlmICh3aWRnZXRJbmRleCA+IC0xKSB7XHJcblx0XHRcdFx0X2RhdGEuc3BsaWNlKHdpZGdldEluZGV4LCAxKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGRhdGE6IF9kYXRhXHJcblx0XHRcdH07XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0V2lkZ2V0cyA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLmRhdGE7XHJcbiJdfQ==