/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { map, switchMap, catchError } from "rxjs/operators";
import { of } from "rxjs";
import { GridService } from "../../grid.service";
import { GetGridsSucceedAction, GetGridsFailedAction } from "./get-grids.actions";
var GetGridsApiEffects = /** @class */ (function () {
    function GetGridsApiEffects(actions$, service) {
        var _this = this;
        this.actions$ = actions$;
        this.service = service;
        this.start$ = this.actions$.pipe(ofType("[GET_GRIDS][API][GetGrids] start" /* START */), switchMap(function () {
            return _this.service
                .getGrids()
                .pipe(map(function (res) { return new GetGridsSucceedAction(res); }), catchError(function (err) { return of(new GetGridsFailedAction(err)); }));
        }));
    }
    GetGridsApiEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    GetGridsApiEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: GridService }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Object)
    ], GetGridsApiEffects.prototype, "start$", void 0);
    return GetGridsApiEffects;
}());
export { GetGridsApiEffects };
if (false) {
    /** @type {?} */
    GetGridsApiEffects.prototype.start$;
    /**
     * @type {?}
     * @private
     */
    GetGridsApiEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    GetGridsApiEffects.prototype.service;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWdyaWRzLmVmZmVjdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2dyaWQvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvYXBpL2dldC1ncmlkcy9nZXQtZ3JpZHMuZWZmZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVELE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFMUIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2pELE9BQU8sRUFHTixxQkFBcUIsRUFDckIsb0JBQW9CLEVBQ3BCLE1BQU0scUJBQXFCLENBQUM7QUFFN0I7SUFFQyw0QkFBb0IsUUFBa0MsRUFBVSxPQUFvQjtRQUFwRixpQkFBd0Y7UUFBcEUsYUFBUSxHQUFSLFFBQVEsQ0FBMEI7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFhO1FBR3BGLFdBQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDMUIsTUFBTSxnREFBOEIsRUFDcEMsU0FBUyxDQUFDO1lBQ1QsT0FBQSxLQUFJLENBQUMsT0FBTztpQkFDVixRQUFRLEVBQUU7aUJBQ1YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLElBQUkscUJBQXFCLENBQUMsR0FBRyxDQUFDLEVBQTlCLENBQThCLENBQUMsRUFBRSxVQUFVLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxFQUFFLENBQUMsSUFBSSxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFqQyxDQUFpQyxDQUFDLENBQUM7UUFGeEcsQ0FFd0csQ0FDeEcsQ0FDRCxDQUFDO0lBVnFGLENBQUM7O2dCQUZ4RixVQUFVOzs7O2dCQVpGLE9BQU87Z0JBSVAsV0FBVzs7SUFhbkI7UUFEQyxNQUFNLEVBQUU7O3NEQVFQO0lBQ0gseUJBQUM7Q0FBQSxBQWJELElBYUM7U0FaWSxrQkFBa0I7OztJQUc5QixvQ0FRRTs7Ozs7SUFWVSxzQ0FBMEM7Ozs7O0lBQUUscUNBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSBcIkBuZ3J4L2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIGNhdGNoRXJyb3IgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0IHsgR3JpZFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vZ3JpZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7XHJcblx0R0VUX0dSSURTX0FDVElPTl9UWVBFUyxcclxuXHRHZXRHcmlkc0FjdGlvbnMsXHJcblx0R2V0R3JpZHNTdWNjZWVkQWN0aW9uLFxyXG5cdEdldEdyaWRzRmFpbGVkQWN0aW9uXHJcbn0gZnJvbSBcIi4vZ2V0LWdyaWRzLmFjdGlvbnNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEdldEdyaWRzQXBpRWZmZWN0cyB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uczxHZXRHcmlkc0FjdGlvbnM+LCBwcml2YXRlIHNlcnZpY2U6IEdyaWRTZXJ2aWNlKSB7fVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRzdGFydCQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXHJcblx0XHRvZlR5cGUoR0VUX0dSSURTX0FDVElPTl9UWVBFUy5TVEFSVCksXHJcblx0XHRzd2l0Y2hNYXAoKCkgPT5cclxuXHRcdFx0dGhpcy5zZXJ2aWNlXHJcblx0XHRcdFx0LmdldEdyaWRzKClcclxuXHRcdFx0XHQucGlwZShtYXAocmVzID0+IG5ldyBHZXRHcmlkc1N1Y2NlZWRBY3Rpb24ocmVzKSksIGNhdGNoRXJyb3IoZXJyID0+IG9mKG5ldyBHZXRHcmlkc0ZhaWxlZEFjdGlvbihlcnIpKSkpXHJcblx0XHQpXHJcblx0KTtcclxufVxyXG4iXX0=