/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {string} */
var SignInActionTypes = {
    WHO_AM_I: "[AUTHENTICATION] who am i",
    SIGNUP: "[AUTHENTICATION][SIGNUP] start",
    SIGNUP_SUCCEED: "[AUTHENTICATION][SIGNUP] Success",
    SIGNUP_FAILURE: "[AUTHENTICATION][SIGNUP] Failure",
    SIGNIN: "[AUTHENTICATION] Signin",
    DO_SIGNOUT: "[AUTHENTICATION] Do Signout",
    SIGNOUT: "[AUTHENTICATION] Signout",
    SIGNIN_SUCCEED: "[AUTHENTICATION][Signin] Success",
    SIGNIN_FAILURE: "[AUTHENTICATION][Signin] Failure",
    SIGNIN_REDIRECT: "[AUTHENTICATION][Signin] Redirect",
    SIGNIN_REQUIRED: "[AUTHENTICATION][Signin] Required",
};
export { SignInActionTypes };
var WhoAmIAction = /** @class */ (function () {
    function WhoAmIAction() {
        this.type = SignInActionTypes.WHO_AM_I;
    }
    return WhoAmIAction;
}());
export { WhoAmIAction };
if (false) {
    /** @type {?} */
    WhoAmIAction.prototype.type;
}
/**
 * 	sign up
 */
var /**
 * 	sign up
 */
Signup = /** @class */ (function () {
    function Signup(payload) {
        this.payload = payload;
        this.type = SignInActionTypes.SIGNUP;
    }
    return Signup;
}());
/**
 * 	sign up
 */
export { Signup };
if (false) {
    /** @type {?} */
    Signup.prototype.type;
    /** @type {?} */
    Signup.prototype.payload;
}
var SignupSecceed = /** @class */ (function () {
    function SignupSecceed(payload) {
        this.payload = payload;
        this.type = SignInActionTypes.SIGNUP_SUCCEED;
    }
    return SignupSecceed;
}());
export { SignupSecceed };
if (false) {
    /** @type {?} */
    SignupSecceed.prototype.type;
    /** @type {?} */
    SignupSecceed.prototype.payload;
}
var SignupFailed = /** @class */ (function () {
    function SignupFailed(payload) {
        this.payload = payload;
        this.type = SignInActionTypes.SIGNUP_FAILURE;
    }
    return SignupFailed;
}());
export { SignupFailed };
if (false) {
    /** @type {?} */
    SignupFailed.prototype.type;
    /** @type {?} */
    SignupFailed.prototype.payload;
}
/**
 * Sign in
 */
var /**
 * Sign in
 */
Signin = /** @class */ (function () {
    function Signin(payload) {
        this.payload = payload;
        this.type = SignInActionTypes.SIGNIN;
    }
    return Signin;
}());
/**
 * Sign in
 */
export { Signin };
if (false) {
    /** @type {?} */
    Signin.prototype.type;
    /** @type {?} */
    Signin.prototype.payload;
}
var SigninSecceed = /** @class */ (function () {
    function SigninSecceed(payload) {
        this.payload = payload;
        this.type = SignInActionTypes.SIGNIN_SUCCEED;
    }
    return SigninSecceed;
}());
export { SigninSecceed };
if (false) {
    /** @type {?} */
    SigninSecceed.prototype.type;
    /** @type {?} */
    SigninSecceed.prototype.payload;
}
var SigninFailed = /** @class */ (function () {
    function SigninFailed(payload) {
        this.payload = payload;
        this.type = SignInActionTypes.SIGNIN_FAILURE;
    }
    return SigninFailed;
}());
export { SigninFailed };
if (false) {
    /** @type {?} */
    SigninFailed.prototype.type;
    /** @type {?} */
    SigninFailed.prototype.payload;
}
var SigninRedirect = /** @class */ (function () {
    function SigninRedirect() {
        this.type = SignInActionTypes.SIGNIN_REDIRECT;
    }
    return SigninRedirect;
}());
export { SigninRedirect };
if (false) {
    /** @type {?} */
    SigninRedirect.prototype.type;
}
var DoSignoutAction = /** @class */ (function () {
    function DoSignoutAction() {
        this.type = SignInActionTypes.DO_SIGNOUT;
    }
    return DoSignoutAction;
}());
export { DoSignoutAction };
if (false) {
    /** @type {?} */
    DoSignoutAction.prototype.type;
}
var SignoutAction = /** @class */ (function () {
    function SignoutAction() {
        this.type = SignInActionTypes.SIGNOUT;
    }
    return SignoutAction;
}());
export { SignoutAction };
if (false) {
    /** @type {?} */
    SignoutAction.prototype.type;
}
var SigninRequiredAction = /** @class */ (function () {
    function SigninRequiredAction() {
        this.type = SignInActionTypes.SIGNIN_REQUIRED;
    }
    return SigninRequiredAction;
}());
export { SigninRequiredAction };
if (false) {
    /** @type {?} */
    SigninRequiredAction.prototype.type;
}
/** @typedef {?} */
var SigninAction;
export { SigninAction };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmluLmFjdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2F1dGhlbnRpY2F0aW9uLyIsInNvdXJjZXMiOlsibGliL2FjdGlvbnMvc2lnbmluLmFjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBS0MsVUFBVywyQkFBMkI7SUFDdEMsUUFBUyxnQ0FBZ0M7SUFDekMsZ0JBQWlCLGtDQUFrQztJQUNuRCxnQkFBaUIsa0NBQWtDO0lBQ25ELFFBQVMseUJBQXlCO0lBQ2xDLFlBQWEsNkJBQTZCO0lBQzFDLFNBQVUsMEJBQTBCO0lBQ3BDLGdCQUFpQixrQ0FBa0M7SUFDbkQsZ0JBQWlCLGtDQUFrQztJQUNuRCxpQkFBa0IsbUNBQW1DO0lBQ3JELGlCQUFrQixtQ0FBbUM7OztBQUd0RCxJQUFBOztRQUNDLFlBQWdCLGlCQUFpQixDQUFDLFFBQVEsQ0FBQzs7dUJBbkI1QztJQW9CQyxDQUFBO0FBRkQsd0JBRUM7Ozs7Ozs7O0FBS0Q7OztBQUFBO0lBRUMsZ0JBQW1CLE9BQWdDO1FBQWhDLFlBQU8sR0FBUCxPQUFPLENBQXlCO1FBRG5ELFlBQWdCLGlCQUFpQixDQUFDLE1BQU0sQ0FBQztLQUNjO2lCQTNCeEQ7SUE0QkMsQ0FBQTs7OztBQUhELGtCQUdDOzs7Ozs7O0FBRUQsSUFBQTtJQUVDLHVCQUFtQixPQUFZO1FBQVosWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUQvQixZQUFnQixpQkFBaUIsQ0FBQyxjQUFjLENBQUM7S0FDZDt3QkFoQ3BDO0lBaUNDLENBQUE7QUFIRCx5QkFHQzs7Ozs7OztBQUVELElBQUE7SUFFQyxzQkFBbUIsT0FBWTtRQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEL0IsWUFBZ0IsaUJBQWlCLENBQUMsY0FBYyxDQUFDO0tBQ2Q7dUJBckNwQztJQXNDQyxDQUFBO0FBSEQsd0JBR0M7Ozs7Ozs7Ozs7QUFLRDs7O0FBQUE7SUFFQyxnQkFBbUIsT0FBZ0M7UUFBaEMsWUFBTyxHQUFQLE9BQU8sQ0FBeUI7UUFEbkQsWUFBZ0IsaUJBQWlCLENBQUMsTUFBTSxDQUFDO0tBQ2M7aUJBN0N4RDtJQThDQyxDQUFBOzs7O0FBSEQsa0JBR0M7Ozs7Ozs7QUFFRCxJQUFBO0lBRUMsdUJBQW1CLE9BQVk7UUFBWixZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRC9CLFlBQWdCLGlCQUFpQixDQUFDLGNBQWMsQ0FBQztLQUNkO3dCQWxEcEM7SUFtREMsQ0FBQTtBQUhELHlCQUdDOzs7Ozs7O0FBRUQsSUFBQTtJQUVDLHNCQUFtQixPQUFZO1FBQVosWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUQvQixZQUFnQixpQkFBaUIsQ0FBQyxjQUFjLENBQUM7S0FDZDt1QkF2RHBDO0lBd0RDLENBQUE7QUFIRCx3QkFHQzs7Ozs7OztBQUVELElBQUE7O1FBQ0MsWUFBZ0IsaUJBQWlCLENBQUMsZUFBZSxDQUFDOzt5QkEzRG5EO0lBNERDLENBQUE7QUFGRCwwQkFFQzs7Ozs7QUFFRCxJQUFBOztRQUNDLFlBQWdCLGlCQUFpQixDQUFDLFVBQVUsQ0FBQzs7MEJBL0Q5QztJQWdFQyxDQUFBO0FBRkQsMkJBRUM7Ozs7O0FBRUQsSUFBQTs7UUFDQyxZQUFnQixpQkFBaUIsQ0FBQyxPQUFPLENBQUM7O3dCQW5FM0M7SUFvRUMsQ0FBQTtBQUZELHlCQUVDOzs7OztBQUVELElBQUE7O1FBQ0MsWUFBZ0IsaUJBQWlCLENBQUMsZUFBZSxDQUFDOzsrQkF2RW5EO0lBd0VDLENBQUE7QUFGRCxnQ0FFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgU2lnbmluX0FwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0IGVudW0gU2lnbkluQWN0aW9uVHlwZXMge1xyXG5cdFdIT19BTV9JID0gXCJbQVVUSEVOVElDQVRJT05dIHdobyBhbSBpXCIsXHJcblx0U0lHTlVQID0gXCJbQVVUSEVOVElDQVRJT05dW1NJR05VUF0gc3RhcnRcIixcclxuXHRTSUdOVVBfU1VDQ0VFRCA9IFwiW0FVVEhFTlRJQ0FUSU9OXVtTSUdOVVBdIFN1Y2Nlc3NcIixcclxuXHRTSUdOVVBfRkFJTFVSRSA9IFwiW0FVVEhFTlRJQ0FUSU9OXVtTSUdOVVBdIEZhaWx1cmVcIixcclxuXHRTSUdOSU4gPSBcIltBVVRIRU5USUNBVElPTl0gU2lnbmluXCIsXHJcblx0RE9fU0lHTk9VVCA9IFwiW0FVVEhFTlRJQ0FUSU9OXSBEbyBTaWdub3V0XCIsXHJcblx0U0lHTk9VVCA9IFwiW0FVVEhFTlRJQ0FUSU9OXSBTaWdub3V0XCIsXHJcblx0U0lHTklOX1NVQ0NFRUQgPSBcIltBVVRIRU5USUNBVElPTl1bU2lnbmluXSBTdWNjZXNzXCIsXHJcblx0U0lHTklOX0ZBSUxVUkUgPSBcIltBVVRIRU5USUNBVElPTl1bU2lnbmluXSBGYWlsdXJlXCIsXHJcblx0U0lHTklOX1JFRElSRUNUID0gXCJbQVVUSEVOVElDQVRJT05dW1NpZ25pbl0gUmVkaXJlY3RcIixcclxuXHRTSUdOSU5fUkVRVUlSRUQgPSBcIltBVVRIRU5USUNBVElPTl1bU2lnbmluXSBSZXF1aXJlZFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBXaG9BbUlBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTaWduSW5BY3Rpb25UeXBlcy5XSE9fQU1fSTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFx0c2lnbiB1cFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFNpZ251cCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNpZ25JbkFjdGlvblR5cGVzLlNJR05VUDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogU2lnbmluX0FwaU1vZGVsLlJlcXVlc3QpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTaWdudXBTZWNjZWVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2lnbkluQWN0aW9uVHlwZXMuU0lHTlVQX1NVQ0NFRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNpZ251cEZhaWxlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNpZ25JbkFjdGlvblR5cGVzLlNJR05VUF9GQUlMVVJFO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTaWduIGluXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU2lnbmluIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2lnbkluQWN0aW9uVHlwZXMuU0lHTklOO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBTaWduaW5fQXBpTW9kZWwuUmVxdWVzdCkge31cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNpZ25pblNlY2NlZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTaWduSW5BY3Rpb25UeXBlcy5TSUdOSU5fU1VDQ0VFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2lnbmluRmFpbGVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2lnbkluQWN0aW9uVHlwZXMuU0lHTklOX0ZBSUxVUkU7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNpZ25pblJlZGlyZWN0IGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2lnbkluQWN0aW9uVHlwZXMuU0lHTklOX1JFRElSRUNUO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRG9TaWdub3V0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2lnbkluQWN0aW9uVHlwZXMuRE9fU0lHTk9VVDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNpZ25vdXRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTaWduSW5BY3Rpb25UeXBlcy5TSUdOT1VUO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2lnbmluUmVxdWlyZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTaWduSW5BY3Rpb25UeXBlcy5TSUdOSU5fUkVRVUlSRUQ7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFNpZ25pbkFjdGlvbiA9XHJcblx0fCBXaG9BbUlBY3Rpb25cclxuXHR8IFNpZ251cFxyXG5cdHwgU2lnbnVwU2VjY2VlZFxyXG5cdHwgU2lnbnVwRmFpbGVkXHJcblx0fCBTaWduaW5cclxuXHR8IFNpZ25pblNlY2NlZWRcclxuXHR8IFNpZ25pbkZhaWxlZFxyXG5cdHwgU2lnbmluUmVkaXJlY3RcclxuXHR8IERvU2lnbm91dEFjdGlvblxyXG5cdHwgU2lnbm91dEFjdGlvblxyXG5cdHwgU2lnbmluUmVxdWlyZWRBY3Rpb247XHJcbiJdfQ==