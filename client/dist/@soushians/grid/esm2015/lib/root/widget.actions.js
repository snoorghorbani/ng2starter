/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {string} */
var GridsActionTypes = {
    UPSERT: "[GRID][DB] UPSERT",
    DELETE: "[GRID][DB] DELETE",
};
export { GridsActionTypes };
export class UpsertGridAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = GridsActionTypes.UPSERT;
    }
}
if (false) {
    /** @type {?} */
    UpsertGridAction.prototype.type;
    /** @type {?} */
    UpsertGridAction.prototype.payload;
}
export class DeleteGridAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = GridsActionTypes.DELETE;
    }
}
if (false) {
    /** @type {?} */
    DeleteGridAction.prototype.type;
    /** @type {?} */
    DeleteGridAction.prototype.payload;
}
/** @typedef {?} */
var GridsActions;
export { GridsActions };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmFjdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2dyaWQvIiwic291cmNlcyI6WyJsaWIvcm9vdC93aWRnZXQuYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFLQyxRQUFTLG1CQUFtQjtJQUM1QixRQUFTLG1CQUFtQjs7O0FBRzdCLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7SUFFNUIsWUFBbUIsT0FBb0I7UUFBcEIsWUFBTyxHQUFQLE9BQU8sQ0FBYTtRQUR2QyxZQUFnQixnQkFBZ0IsQ0FBQyxNQUFNLENBQUM7S0FDRztDQUMzQzs7Ozs7OztBQUNELE1BQU0sT0FBTyxnQkFBZ0I7Ozs7SUFFNUIsWUFBbUIsT0FBa0I7UUFBbEIsWUFBTyxHQUFQLE9BQU8sQ0FBVztRQURyQyxZQUFnQixnQkFBZ0IsQ0FBQyxNQUFNLENBQUM7S0FDQztDQUN6QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgR3JpZE1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9ncmlkLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgZW51bSBHcmlkc0FjdGlvblR5cGVzIHtcclxuXHRVUFNFUlQgPSBcIltHUklEXVtEQl0gVVBTRVJUXCIsXHJcblx0REVMRVRFID0gXCJbR1JJRF1bREJdIERFTEVURVwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVcHNlcnRHcmlkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gR3JpZHNBY3Rpb25UeXBlcy5VUFNFUlQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEdyaWRNb2RlbFtdKSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBEZWxldGVHcmlkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gR3JpZHNBY3Rpb25UeXBlcy5ERUxFVEU7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEdyaWRNb2RlbCkge31cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgR3JpZHNBY3Rpb25zID0gVXBzZXJ0R3JpZEFjdGlvbiB8IERlbGV0ZUdyaWRBY3Rpb247XHJcbiJdfQ==