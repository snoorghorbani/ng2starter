/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const SignInActionTypes = {
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
export class WhoAmIAction {
    constructor() {
        this.type = SignInActionTypes.WHO_AM_I;
    }
}
if (false) {
    /** @type {?} */
    WhoAmIAction.prototype.type;
}
/**
 * 	sign up
 */
export class Signup {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = SignInActionTypes.SIGNUP;
    }
}
if (false) {
    /** @type {?} */
    Signup.prototype.type;
    /** @type {?} */
    Signup.prototype.payload;
}
export class SignupSecceed {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = SignInActionTypes.SIGNUP_SUCCEED;
    }
}
if (false) {
    /** @type {?} */
    SignupSecceed.prototype.type;
    /** @type {?} */
    SignupSecceed.prototype.payload;
}
export class SignupFailed {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = SignInActionTypes.SIGNUP_FAILURE;
    }
}
if (false) {
    /** @type {?} */
    SignupFailed.prototype.type;
    /** @type {?} */
    SignupFailed.prototype.payload;
}
/**
 * Sign in
 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmluLmFjdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2F1dGhlbnRpY2F0aW9uLyIsInNvdXJjZXMiOlsic3JjL2xpYi9hY3Rpb25zL3NpZ25pbi5hY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQUtDLFVBQVcsMkJBQTJCO0lBQ3RDLFFBQVMsZ0NBQWdDO0lBQ3pDLGdCQUFpQixrQ0FBa0M7SUFDbkQsZ0JBQWlCLGtDQUFrQztJQUNuRCxRQUFTLHlCQUF5QjtJQUNsQyxZQUFhLDZCQUE2QjtJQUMxQyxTQUFVLDBCQUEwQjtJQUNwQyxnQkFBaUIsa0NBQWtDO0lBQ25ELGdCQUFpQixrQ0FBa0M7SUFDbkQsaUJBQWtCLG1DQUFtQztJQUNyRCxpQkFBa0IsbUNBQW1DOzs7QUFHdEQsTUFBTSxPQUFPLFlBQVk7SUFBekI7UUFDVSxTQUFJLEdBQUcsaUJBQWlCLENBQUMsUUFBUSxDQUFDO0lBQzVDLENBQUM7Q0FBQTs7O0lBREEsNEJBQTJDOzs7OztBQU01QyxNQUFNLE9BQU8sTUFBTTs7OztJQUVsQixZQUFtQixPQUFnQztRQUFoQyxZQUFPLEdBQVAsT0FBTyxDQUF5QjtRQUQxQyxTQUFJLEdBQUcsaUJBQWlCLENBQUMsTUFBTSxDQUFDO0lBQ2EsQ0FBQztDQUN2RDs7O0lBRkEsc0JBQXlDOztJQUM3Qix5QkFBdUM7O0FBR3BELE1BQU0sT0FBTyxhQUFhOzs7O0lBRXpCLFlBQW1CLE9BQVk7UUFBWixZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFNBQUksR0FBRyxpQkFBaUIsQ0FBQyxjQUFjLENBQUM7SUFDZixDQUFDO0NBQ25DOzs7SUFGQSw2QkFBaUQ7O0lBQ3JDLGdDQUFtQjs7QUFHaEMsTUFBTSxPQUFPLFlBQVk7Ozs7SUFFeEIsWUFBbUIsT0FBWTtRQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsU0FBSSxHQUFHLGlCQUFpQixDQUFDLGNBQWMsQ0FBQztJQUNmLENBQUM7Q0FDbkM7OztJQUZBLDRCQUFpRDs7SUFDckMsK0JBQW1COzs7OztBQU1oQyxNQUFNLE9BQU8sTUFBTTs7OztJQUVsQixZQUFtQixPQUFnQztRQUFoQyxZQUFPLEdBQVAsT0FBTyxDQUF5QjtRQUQxQyxTQUFJLEdBQUcsaUJBQWlCLENBQUMsTUFBTSxDQUFDO0lBQ2EsQ0FBQztDQUN2RDs7O0lBRkEsc0JBQXlDOztJQUM3Qix5QkFBdUM7O0FBR3BELE1BQU0sT0FBTyxhQUFhOzs7O0lBRXpCLFlBQW1CLE9BQVk7UUFBWixZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFNBQUksR0FBRyxpQkFBaUIsQ0FBQyxjQUFjLENBQUM7SUFDZixDQUFDO0NBQ25DOzs7SUFGQSw2QkFBaUQ7O0lBQ3JDLGdDQUFtQjs7QUFHaEMsTUFBTSxPQUFPLFlBQVk7Ozs7SUFFeEIsWUFBbUIsT0FBWTtRQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsU0FBSSxHQUFHLGlCQUFpQixDQUFDLGNBQWMsQ0FBQztJQUNmLENBQUM7Q0FDbkM7OztJQUZBLDRCQUFpRDs7SUFDckMsK0JBQW1COztBQUdoQyxNQUFNLE9BQU8sY0FBYztJQUEzQjtRQUNVLFNBQUksR0FBRyxpQkFBaUIsQ0FBQyxlQUFlLENBQUM7SUFDbkQsQ0FBQztDQUFBOzs7SUFEQSw4QkFBa0Q7O0FBR25ELE1BQU0sT0FBTyxlQUFlO0lBQTVCO1FBQ1UsU0FBSSxHQUFHLGlCQUFpQixDQUFDLFVBQVUsQ0FBQztJQUM5QyxDQUFDO0NBQUE7OztJQURBLCtCQUE2Qzs7QUFHOUMsTUFBTSxPQUFPLGFBQWE7SUFBMUI7UUFDVSxTQUFJLEdBQUcsaUJBQWlCLENBQUMsT0FBTyxDQUFDO0lBQzNDLENBQUM7Q0FBQTs7O0lBREEsNkJBQTBDOztBQUczQyxNQUFNLE9BQU8sb0JBQW9CO0lBQWpDO1FBQ1UsU0FBSSxHQUFHLGlCQUFpQixDQUFDLGVBQWUsQ0FBQztJQUNuRCxDQUFDO0NBQUE7OztJQURBLG9DQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgU2lnbmluX0FwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0IGVudW0gU2lnbkluQWN0aW9uVHlwZXMge1xyXG5cdFdIT19BTV9JID0gXCJbQVVUSEVOVElDQVRJT05dIHdobyBhbSBpXCIsXHJcblx0U0lHTlVQID0gXCJbQVVUSEVOVElDQVRJT05dW1NJR05VUF0gc3RhcnRcIixcclxuXHRTSUdOVVBfU1VDQ0VFRCA9IFwiW0FVVEhFTlRJQ0FUSU9OXVtTSUdOVVBdIFN1Y2Nlc3NcIixcclxuXHRTSUdOVVBfRkFJTFVSRSA9IFwiW0FVVEhFTlRJQ0FUSU9OXVtTSUdOVVBdIEZhaWx1cmVcIixcclxuXHRTSUdOSU4gPSBcIltBVVRIRU5USUNBVElPTl0gU2lnbmluXCIsXHJcblx0RE9fU0lHTk9VVCA9IFwiW0FVVEhFTlRJQ0FUSU9OXSBEbyBTaWdub3V0XCIsXHJcblx0U0lHTk9VVCA9IFwiW0FVVEhFTlRJQ0FUSU9OXSBTaWdub3V0XCIsXHJcblx0U0lHTklOX1NVQ0NFRUQgPSBcIltBVVRIRU5USUNBVElPTl1bU2lnbmluXSBTdWNjZXNzXCIsXHJcblx0U0lHTklOX0ZBSUxVUkUgPSBcIltBVVRIRU5USUNBVElPTl1bU2lnbmluXSBGYWlsdXJlXCIsXHJcblx0U0lHTklOX1JFRElSRUNUID0gXCJbQVVUSEVOVElDQVRJT05dW1NpZ25pbl0gUmVkaXJlY3RcIixcclxuXHRTSUdOSU5fUkVRVUlSRUQgPSBcIltBVVRIRU5USUNBVElPTl1bU2lnbmluXSBSZXF1aXJlZFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBXaG9BbUlBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTaWduSW5BY3Rpb25UeXBlcy5XSE9fQU1fSTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFx0c2lnbiB1cFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFNpZ251cCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNpZ25JbkFjdGlvblR5cGVzLlNJR05VUDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogU2lnbmluX0FwaU1vZGVsLlJlcXVlc3QpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTaWdudXBTZWNjZWVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2lnbkluQWN0aW9uVHlwZXMuU0lHTlVQX1NVQ0NFRUQ7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNpZ251cEZhaWxlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNpZ25JbkFjdGlvblR5cGVzLlNJR05VUF9GQUlMVVJFO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTaWduIGluXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU2lnbmluIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2lnbkluQWN0aW9uVHlwZXMuU0lHTklOO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBTaWduaW5fQXBpTW9kZWwuUmVxdWVzdCkge31cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNpZ25pblNlY2NlZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTaWduSW5BY3Rpb25UeXBlcy5TSUdOSU5fU1VDQ0VFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2lnbmluRmFpbGVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2lnbkluQWN0aW9uVHlwZXMuU0lHTklOX0ZBSUxVUkU7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNpZ25pblJlZGlyZWN0IGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2lnbkluQWN0aW9uVHlwZXMuU0lHTklOX1JFRElSRUNUO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRG9TaWdub3V0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2lnbkluQWN0aW9uVHlwZXMuRE9fU0lHTk9VVDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNpZ25vdXRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTaWduSW5BY3Rpb25UeXBlcy5TSUdOT1VUO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2lnbmluUmVxdWlyZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTaWduSW5BY3Rpb25UeXBlcy5TSUdOSU5fUkVRVUlSRUQ7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFNpZ25pbkFjdGlvbiA9XHJcblx0fCBXaG9BbUlBY3Rpb25cclxuXHR8IFNpZ251cFxyXG5cdHwgU2lnbnVwU2VjY2VlZFxyXG5cdHwgU2lnbnVwRmFpbGVkXHJcblx0fCBTaWduaW5cclxuXHR8IFNpZ25pblNlY2NlZWRcclxuXHR8IFNpZ25pbkZhaWxlZFxyXG5cdHwgU2lnbmluUmVkaXJlY3RcclxuXHR8IERvU2lnbm91dEFjdGlvblxyXG5cdHwgU2lnbm91dEFjdGlvblxyXG5cdHwgU2lnbmluUmVxdWlyZWRBY3Rpb247XHJcbiJdfQ==