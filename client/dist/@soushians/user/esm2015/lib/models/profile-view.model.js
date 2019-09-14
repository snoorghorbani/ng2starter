/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UserModel } from "./user.model";
export var ProfileViewModel;
(function (ProfileViewModel) {
    class Request {
        /**
         * @param {?=} initValue
         */
        constructor(initValue) {
            Object.keys(initValue).forEach((/**
             * @param {?} key
             * @return {?}
             */
            key => (this[key] = initValue[key])));
        }
        /**
         * @return {?}
         */
        getRequestBody() {
            return {};
        }
        /**
         * @return {?}
         */
        static get formGroup() {
            return new FormGroup({
                Username: new FormControl("", [Validators.minLength(8), Validators.required])
            });
        }
    }
    ProfileViewModel.Request = Request;
    if (false) {
        /** @type {?} */
        Request.prototype.Email;
    }
    class Response extends UserModel {
        constructor() {
            super();
        }
    }
    ProfileViewModel.Response = Response;
})(ProfileViewModel || (ProfileViewModel = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS12aWV3Lm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNvdXNoaWFucy91c2VyLyIsInNvdXJjZXMiOlsibGliL21vZGVscy9wcm9maWxlLXZpZXcubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFekMsTUFBTSxLQUFXLGdCQUFnQixDQXdCaEM7QUF4QkQsV0FBaUIsZ0JBQWdCO0lBQ2hDLE1BQWEsT0FBTzs7OztRQUduQixZQUFZLFNBQW9DO1lBQy9DLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTzs7OztZQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQztRQUNyRSxDQUFDOzs7O1FBRUQsY0FBYztZQUNiLE9BQU8sRUFBRSxDQUFDO1FBQ1gsQ0FBQzs7OztRQUVELE1BQU0sS0FBSyxTQUFTO1lBQ25CLE9BQU8sSUFBSSxTQUFTLENBQUM7Z0JBQ3BCLFFBQVEsRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBRSxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUUsQ0FBQzthQUMvRSxDQUFDLENBQUM7UUFDSixDQUFDO0tBQ0Q7SUFoQlksd0JBQU8sVUFnQm5CLENBQUE7OztRQWZBLHdCQUFjOztJQWlCZixNQUFhLFFBQVMsU0FBUSxTQUFTO1FBQ3RDO1lBQ0MsS0FBSyxFQUFFLENBQUM7UUFDVCxDQUFDO0tBQ0Q7SUFKWSx5QkFBUSxXQUlwQixDQUFBO0FBQ0YsQ0FBQyxFQXhCZ0IsZ0JBQWdCLEtBQWhCLGdCQUFnQixRQXdCaEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cFJlcXVlc3RCYXNlTW9kZWwgfSBmcm9tIFwiQHNvdXNoaWFucy9zaGFyZWRcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBVc2VyTW9kZWwgfSBmcm9tIFwiLi91c2VyLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIFByb2ZpbGVWaWV3TW9kZWwge1xyXG5cdGV4cG9ydCBjbGFzcyBSZXF1ZXN0IGltcGxlbWVudHMgSHR0cFJlcXVlc3RCYXNlTW9kZWw8UmVxdWVzdD4ge1xyXG5cdFx0RW1haWw6IHN0cmluZztcclxuXHJcblx0XHRjb25zdHJ1Y3Rvcihpbml0VmFsdWU/OiBQcm9maWxlVmlld01vZGVsLlJlcXVlc3QpIHtcclxuXHRcdFx0T2JqZWN0LmtleXMoaW5pdFZhbHVlKS5mb3JFYWNoKGtleSA9PiAodGhpc1trZXldID0gaW5pdFZhbHVlW2tleV0pKTtcclxuXHRcdH1cclxuXHJcblx0XHRnZXRSZXF1ZXN0Qm9keSgpIHtcclxuXHRcdFx0cmV0dXJuIHt9O1xyXG5cdFx0fVxyXG5cclxuXHRcdHN0YXRpYyBnZXQgZm9ybUdyb3VwKCkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IEZvcm1Hcm91cCh7XHJcblx0XHRcdFx0VXNlcm5hbWU6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbIFZhbGlkYXRvcnMubWluTGVuZ3RoKDgpLCBWYWxpZGF0b3JzLnJlcXVpcmVkIF0pXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZXhwb3J0IGNsYXNzIFJlc3BvbnNlIGV4dGVuZHMgVXNlck1vZGVsIHtcclxuXHRcdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0XHRzdXBlcigpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iXX0=