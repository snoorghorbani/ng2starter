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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmluLmFjdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2F1dGhlbnRpY2F0aW9uLyIsInNvdXJjZXMiOlsibGliL2FjdGlvbnMvc2lnbmluLmFjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBS0MsVUFBVywyQkFBMkI7SUFDdEMsUUFBUyxnQ0FBZ0M7SUFDekMsZ0JBQWlCLGtDQUFrQztJQUNuRCxnQkFBaUIsa0NBQWtDO0lBQ25ELFFBQVMseUJBQXlCO0lBQ2xDLFlBQWEsNkJBQTZCO0lBQzFDLFNBQVUsMEJBQTBCO0lBQ3BDLGdCQUFpQixrQ0FBa0M7SUFDbkQsZ0JBQWlCLGtDQUFrQztJQUNuRCxpQkFBa0IsbUNBQW1DO0lBQ3JELGlCQUFrQixtQ0FBbUM7OztBQUd0RCxNQUFNLE9BQU8sWUFBWTtJQUF6QjtRQUNVLFNBQUksR0FBRyxpQkFBaUIsQ0FBQyxRQUFRLENBQUM7SUFDNUMsQ0FBQztDQUFBOzs7SUFEQSw0QkFBMkM7Ozs7O0FBTTVDLE1BQU0sT0FBTyxNQUFNOzs7O0lBRWxCLFlBQW1CLE9BQWdDO1FBQWhDLFlBQU8sR0FBUCxPQUFPLENBQXlCO1FBRDFDLFNBQUksR0FBRyxpQkFBaUIsQ0FBQyxNQUFNLENBQUM7SUFDYSxDQUFDO0NBQ3ZEOzs7SUFGQSxzQkFBeUM7O0lBQzdCLHlCQUF1Qzs7QUFHcEQsTUFBTSxPQUFPLGFBQWE7Ozs7SUFFekIsWUFBbUIsT0FBWTtRQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsU0FBSSxHQUFHLGlCQUFpQixDQUFDLGNBQWMsQ0FBQztJQUNmLENBQUM7Q0FDbkM7OztJQUZBLDZCQUFpRDs7SUFDckMsZ0NBQW1COztBQUdoQyxNQUFNLE9BQU8sWUFBWTs7OztJQUV4QixZQUFtQixPQUFZO1FBQVosWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixTQUFJLEdBQUcsaUJBQWlCLENBQUMsY0FBYyxDQUFDO0lBQ2YsQ0FBQztDQUNuQzs7O0lBRkEsNEJBQWlEOztJQUNyQywrQkFBbUI7Ozs7O0FBTWhDLE1BQU0sT0FBTyxNQUFNOzs7O0lBRWxCLFlBQW1CLE9BQWdDO1FBQWhDLFlBQU8sR0FBUCxPQUFPLENBQXlCO1FBRDFDLFNBQUksR0FBRyxpQkFBaUIsQ0FBQyxNQUFNLENBQUM7SUFDYSxDQUFDO0NBQ3ZEOzs7SUFGQSxzQkFBeUM7O0lBQzdCLHlCQUF1Qzs7QUFHcEQsTUFBTSxPQUFPLGFBQWE7Ozs7SUFFekIsWUFBbUIsT0FBWTtRQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsU0FBSSxHQUFHLGlCQUFpQixDQUFDLGNBQWMsQ0FBQztJQUNmLENBQUM7Q0FDbkM7OztJQUZBLDZCQUFpRDs7SUFDckMsZ0NBQW1COztBQUdoQyxNQUFNLE9BQU8sWUFBWTs7OztJQUV4QixZQUFtQixPQUFZO1FBQVosWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixTQUFJLEdBQUcsaUJBQWlCLENBQUMsY0FBYyxDQUFDO0lBQ2YsQ0FBQztDQUNuQzs7O0lBRkEsNEJBQWlEOztJQUNyQywrQkFBbUI7O0FBR2hDLE1BQU0sT0FBTyxjQUFjO0lBQTNCO1FBQ1UsU0FBSSxHQUFHLGlCQUFpQixDQUFDLGVBQWUsQ0FBQztJQUNuRCxDQUFDO0NBQUE7OztJQURBLDhCQUFrRDs7QUFHbkQsTUFBTSxPQUFPLGVBQWU7SUFBNUI7UUFDVSxTQUFJLEdBQUcsaUJBQWlCLENBQUMsVUFBVSxDQUFDO0lBQzlDLENBQUM7Q0FBQTs7O0lBREEsK0JBQTZDOztBQUc5QyxNQUFNLE9BQU8sYUFBYTtJQUExQjtRQUNVLFNBQUksR0FBRyxpQkFBaUIsQ0FBQyxPQUFPLENBQUM7SUFDM0MsQ0FBQztDQUFBOzs7SUFEQSw2QkFBMEM7O0FBRzNDLE1BQU0sT0FBTyxvQkFBb0I7SUFBakM7UUFDVSxTQUFJLEdBQUcsaUJBQWlCLENBQUMsZUFBZSxDQUFDO0lBQ25ELENBQUM7Q0FBQTs7O0lBREEsb0NBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBTaWduaW5fQXBpTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcblxyXG5leHBvcnQgZW51bSBTaWduSW5BY3Rpb25UeXBlcyB7XHJcblx0V0hPX0FNX0kgPSBcIltBVVRIRU5USUNBVElPTl0gd2hvIGFtIGlcIixcclxuXHRTSUdOVVAgPSBcIltBVVRIRU5USUNBVElPTl1bU0lHTlVQXSBzdGFydFwiLFxyXG5cdFNJR05VUF9TVUNDRUVEID0gXCJbQVVUSEVOVElDQVRJT05dW1NJR05VUF0gU3VjY2Vzc1wiLFxyXG5cdFNJR05VUF9GQUlMVVJFID0gXCJbQVVUSEVOVElDQVRJT05dW1NJR05VUF0gRmFpbHVyZVwiLFxyXG5cdFNJR05JTiA9IFwiW0FVVEhFTlRJQ0FUSU9OXSBTaWduaW5cIixcclxuXHRET19TSUdOT1VUID0gXCJbQVVUSEVOVElDQVRJT05dIERvIFNpZ25vdXRcIixcclxuXHRTSUdOT1VUID0gXCJbQVVUSEVOVElDQVRJT05dIFNpZ25vdXRcIixcclxuXHRTSUdOSU5fU1VDQ0VFRCA9IFwiW0FVVEhFTlRJQ0FUSU9OXVtTaWduaW5dIFN1Y2Nlc3NcIixcclxuXHRTSUdOSU5fRkFJTFVSRSA9IFwiW0FVVEhFTlRJQ0FUSU9OXVtTaWduaW5dIEZhaWx1cmVcIixcclxuXHRTSUdOSU5fUkVESVJFQ1QgPSBcIltBVVRIRU5USUNBVElPTl1bU2lnbmluXSBSZWRpcmVjdFwiLFxyXG5cdFNJR05JTl9SRVFVSVJFRCA9IFwiW0FVVEhFTlRJQ0FUSU9OXVtTaWduaW5dIFJlcXVpcmVkXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFdob0FtSUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNpZ25JbkFjdGlvblR5cGVzLldIT19BTV9JO1xyXG59XHJcblxyXG4vKipcclxuICogXHRzaWduIHVwXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU2lnbnVwIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2lnbkluQWN0aW9uVHlwZXMuU0lHTlVQO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBTaWduaW5fQXBpTW9kZWwuUmVxdWVzdCkge31cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNpZ251cFNlY2NlZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTaWduSW5BY3Rpb25UeXBlcy5TSUdOVVBfU1VDQ0VFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2lnbnVwRmFpbGVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2lnbkluQWN0aW9uVHlwZXMuU0lHTlVQX0ZBSUxVUkU7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cclxufVxyXG5cclxuLyoqXHJcbiAqIFNpZ24gaW5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBTaWduaW4gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTaWduSW5BY3Rpb25UeXBlcy5TSUdOSU47XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFNpZ25pbl9BcGlNb2RlbC5SZXF1ZXN0KSB7fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2lnbmluU2VjY2VlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNpZ25JbkFjdGlvblR5cGVzLlNJR05JTl9TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTaWduaW5GYWlsZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTaWduSW5BY3Rpb25UeXBlcy5TSUdOSU5fRkFJTFVSRTtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2lnbmluUmVkaXJlY3QgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTaWduSW5BY3Rpb25UeXBlcy5TSUdOSU5fUkVESVJFQ1Q7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEb1NpZ25vdXRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTaWduSW5BY3Rpb25UeXBlcy5ET19TSUdOT1VUO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2lnbm91dEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNpZ25JbkFjdGlvblR5cGVzLlNJR05PVVQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTaWduaW5SZXF1aXJlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNpZ25JbkFjdGlvblR5cGVzLlNJR05JTl9SRVFVSVJFRDtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgU2lnbmluQWN0aW9uID1cclxuXHR8IFdob0FtSUFjdGlvblxyXG5cdHwgU2lnbnVwXHJcblx0fCBTaWdudXBTZWNjZWVkXHJcblx0fCBTaWdudXBGYWlsZWRcclxuXHR8IFNpZ25pblxyXG5cdHwgU2lnbmluU2VjY2VlZFxyXG5cdHwgU2lnbmluRmFpbGVkXHJcblx0fCBTaWduaW5SZWRpcmVjdFxyXG5cdHwgRG9TaWdub3V0QWN0aW9uXHJcblx0fCBTaWdub3V0QWN0aW9uXHJcblx0fCBTaWduaW5SZXF1aXJlZEFjdGlvbjtcclxuIl19