/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {string} */
const SignInActionTypes = {
    WHO_AM_I: "[FRONTEND_AUTHENTICATION] who am i",
    SIGNIN: "[FRONTEND_AUTHENTICATION] Signin",
    DO_SIGNOUT: "[FRONTEND_AUTHENTICATION] Do Signout",
    SIGNOUT: "[FRONTEND_AUTHENTICATION] Signout",
    SIGNIN_SUCCEED: "[FRONTEND_AUTHENTICATION][Signin] Success",
    SIGNIN_FAILURE: "[FRONTEND_AUTHENTICATION][Signin] Failure",
    SIGNIN_REDIRECT: "[FRONTEND_AUTHENTICATION][Signin] Redirect",
    SIGNIN_REQUIRED: "[FRONTEND_AUTHENTICATION][Signin] Required",
};
export { SignInActionTypes };
export class WhoAmIAction {
    constructor() {
        this.type = SignInActionTypes.WHO_AM_I;
    }
}
if (false) {
    /** @type {?} */
    WhoAmIAction.prototype.type;
}
export class Signin {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = SignInActionTypes.SIGNIN;
    }
}
if (false) {
    /** @type {?} */
    Signin.prototype.type;
    /** @type {?} */
    Signin.prototype.payload;
}
export class SigninSecceed {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = SignInActionTypes.SIGNIN_SUCCEED;
    }
}
if (false) {
    /** @type {?} */
    SigninSecceed.prototype.type;
    /** @type {?} */
    SigninSecceed.prototype.payload;
}
export class SigninFailed {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = SignInActionTypes.SIGNIN_FAILURE;
    }
}
if (false) {
    /** @type {?} */
    SigninFailed.prototype.type;
    /** @type {?} */
    SigninFailed.prototype.payload;
}
export class SigninRedirect {
    constructor() {
        this.type = SignInActionTypes.SIGNIN_REDIRECT;
    }
}
if (false) {
    /** @type {?} */
    SigninRedirect.prototype.type;
}
export class DoSignoutAction {
    constructor() {
        this.type = SignInActionTypes.DO_SIGNOUT;
    }
}
if (false) {
    /** @type {?} */
    DoSignoutAction.prototype.type;
}
export class SignoutAction {
    constructor() {
        this.type = SignInActionTypes.SIGNOUT;
    }
}
if (false) {
    /** @type {?} */
    SignoutAction.prototype.type;
}
export class SigninRequiredAction {
    constructor() {
        this.type = SignInActionTypes.SIGNIN_REQUIRED;
    }
}
if (false) {
    /** @type {?} */
    SigninRequiredAction.prototype.type;
}
/** @typedef {?} */
var SigninAction;
export { SigninAction };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmluLmFjdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2Zyb250ZW5kLWF1dGhlbnRpY2F0aW9uLyIsInNvdXJjZXMiOlsibGliL2FjdGlvbnMvc2lnbmluLmFjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBR0MsVUFBVyxvQ0FBb0M7SUFDL0MsUUFBUyxrQ0FBa0M7SUFDM0MsWUFBYSxzQ0FBc0M7SUFDbkQsU0FBVSxtQ0FBbUM7SUFDN0MsZ0JBQWlCLDJDQUEyQztJQUM1RCxnQkFBaUIsMkNBQTJDO0lBQzVELGlCQUFrQiw0Q0FBNEM7SUFDOUQsaUJBQWtCLDRDQUE0Qzs7O0FBRy9ELE1BQU07O29CQUNXLGlCQUFpQixDQUFDLFFBQVE7O0NBQzFDOzs7OztBQUNELE1BQU07Ozs7SUFFTCxZQUFtQixPQUFZO1FBQVosWUFBTyxHQUFQLE9BQU8sQ0FBSztvQkFEZixpQkFBaUIsQ0FBQyxNQUFNO0tBQ0w7Q0FDbkM7Ozs7Ozs7QUFFRCxNQUFNOzs7O0lBRUwsWUFBbUIsT0FBWTtRQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7b0JBRGYsaUJBQWlCLENBQUMsY0FBYztLQUNiO0NBQ25DOzs7Ozs7O0FBRUQsTUFBTTs7OztJQUVMLFlBQW1CLE9BQVk7UUFBWixZQUFPLEdBQVAsT0FBTyxDQUFLO29CQURmLGlCQUFpQixDQUFDLGNBQWM7S0FDYjtDQUNuQzs7Ozs7OztBQUVELE1BQU07O29CQUNXLGlCQUFpQixDQUFDLGVBQWU7O0NBQ2pEOzs7OztBQUVELE1BQU07O29CQUNXLGlCQUFpQixDQUFDLFVBQVU7O0NBQzVDOzs7OztBQUVELE1BQU07O29CQUNXLGlCQUFpQixDQUFDLE9BQU87O0NBQ3pDOzs7OztBQUVELE1BQU07O29CQUNXLGlCQUFpQixDQUFDLGVBQWU7O0NBQ2pEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5leHBvcnQgZW51bSBTaWduSW5BY3Rpb25UeXBlcyB7XHJcblx0V0hPX0FNX0kgPSBcIltGUk9OVEVORF9BVVRIRU5USUNBVElPTl0gd2hvIGFtIGlcIixcclxuXHRTSUdOSU4gPSBcIltGUk9OVEVORF9BVVRIRU5USUNBVElPTl0gU2lnbmluXCIsXHJcblx0RE9fU0lHTk9VVCA9IFwiW0ZST05URU5EX0FVVEhFTlRJQ0FUSU9OXSBEbyBTaWdub3V0XCIsXHJcblx0U0lHTk9VVCA9IFwiW0ZST05URU5EX0FVVEhFTlRJQ0FUSU9OXSBTaWdub3V0XCIsXHJcblx0U0lHTklOX1NVQ0NFRUQgPSBcIltGUk9OVEVORF9BVVRIRU5USUNBVElPTl1bU2lnbmluXSBTdWNjZXNzXCIsXHJcblx0U0lHTklOX0ZBSUxVUkUgPSBcIltGUk9OVEVORF9BVVRIRU5USUNBVElPTl1bU2lnbmluXSBGYWlsdXJlXCIsXHJcblx0U0lHTklOX1JFRElSRUNUID0gXCJbRlJPTlRFTkRfQVVUSEVOVElDQVRJT05dW1NpZ25pbl0gUmVkaXJlY3RcIixcclxuXHRTSUdOSU5fUkVRVUlSRUQgPSBcIltGUk9OVEVORF9BVVRIRU5USUNBVElPTl1bU2lnbmluXSBSZXF1aXJlZFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBXaG9BbUlBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTaWduSW5BY3Rpb25UeXBlcy5XSE9fQU1fSTtcclxufVxyXG5leHBvcnQgY2xhc3MgU2lnbmluIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2lnbkluQWN0aW9uVHlwZXMuU0lHTklOO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTaWduaW5TZWNjZWVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2lnbkluQWN0aW9uVHlwZXMuU0lHTklOX1NVQ0NFRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNpZ25pbkZhaWxlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNpZ25JbkFjdGlvblR5cGVzLlNJR05JTl9GQUlMVVJFO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTaWduaW5SZWRpcmVjdCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNpZ25JbkFjdGlvblR5cGVzLlNJR05JTl9SRURJUkVDVDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERvU2lnbm91dEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNpZ25JbkFjdGlvblR5cGVzLkRPX1NJR05PVVQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTaWdub3V0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2lnbkluQWN0aW9uVHlwZXMuU0lHTk9VVDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNpZ25pblJlcXVpcmVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2lnbkluQWN0aW9uVHlwZXMuU0lHTklOX1JFUVVJUkVEO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBTaWduaW5BY3Rpb24gPVxyXG5cdHwgV2hvQW1JQWN0aW9uXHJcblx0fCBTaWduaW5cclxuXHR8IFNpZ25pblNlY2NlZWRcclxuXHR8IFNpZ25pbkZhaWxlZFxyXG5cdHwgU2lnbmluUmVkaXJlY3RcclxuXHR8IERvU2lnbm91dEFjdGlvblxyXG5cdHwgU2lnbm91dEFjdGlvblxyXG5cdHwgU2lnbmluUmVxdWlyZWRBY3Rpb247XHJcbiJdfQ==