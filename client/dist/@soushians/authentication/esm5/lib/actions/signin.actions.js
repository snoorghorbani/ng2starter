/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
function WhoAmIAction_tsickle_Closure_declarations() {
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
function Signup_tsickle_Closure_declarations() {
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
function SignupSecceed_tsickle_Closure_declarations() {
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
function SignupFailed_tsickle_Closure_declarations() {
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
function Signin_tsickle_Closure_declarations() {
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
function SigninSecceed_tsickle_Closure_declarations() {
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
function SigninFailed_tsickle_Closure_declarations() {
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
function SigninRedirect_tsickle_Closure_declarations() {
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
function DoSignoutAction_tsickle_Closure_declarations() {
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
function SignoutAction_tsickle_Closure_declarations() {
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
function SigninRequiredAction_tsickle_Closure_declarations() {
    /** @type {?} */
    SigninRequiredAction.prototype.type;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmluLmFjdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2F1dGhlbnRpY2F0aW9uLyIsInNvdXJjZXMiOlsibGliL2FjdGlvbnMvc2lnbmluLmFjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O2NBS1ksMkJBQTJCO1lBQzdCLGdDQUFnQztvQkFDeEIsa0NBQWtDO29CQUNsQyxrQ0FBa0M7WUFDMUMseUJBQXlCO2dCQUNyQiw2QkFBNkI7YUFDaEMsMEJBQTBCO29CQUNuQixrQ0FBa0M7b0JBQ2xDLGtDQUFrQztxQkFDakMsbUNBQW1DO3FCQUNuQyxtQ0FBbUM7OztBQUd0RCxJQUFBOztvQkFDaUIsaUJBQWlCLENBQUMsUUFBUTs7dUJBbkIzQztJQW9CQyxDQUFBO0FBRkQsd0JBRUM7Ozs7Ozs7O0FBS0Q7OztBQUFBO0lBRUMsZ0JBQW1CLE9BQWdDO1FBQWhDLFlBQU8sR0FBUCxPQUFPLENBQXlCO29CQURuQyxpQkFBaUIsQ0FBQyxNQUFNO0tBQ2U7aUJBM0J4RDtJQTRCQyxDQUFBOzs7O0FBSEQsa0JBR0M7Ozs7Ozs7QUFFRCxJQUFBO0lBRUMsdUJBQW1CLE9BQVk7UUFBWixZQUFPLEdBQVAsT0FBTyxDQUFLO29CQURmLGlCQUFpQixDQUFDLGNBQWM7S0FDYjt3QkFoQ3BDO0lBaUNDLENBQUE7QUFIRCx5QkFHQzs7Ozs7OztBQUVELElBQUE7SUFFQyxzQkFBbUIsT0FBWTtRQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7b0JBRGYsaUJBQWlCLENBQUMsY0FBYztLQUNiO3VCQXJDcEM7SUFzQ0MsQ0FBQTtBQUhELHdCQUdDOzs7Ozs7Ozs7O0FBS0Q7OztBQUFBO0lBRUMsZ0JBQW1CLE9BQWdDO1FBQWhDLFlBQU8sR0FBUCxPQUFPLENBQXlCO29CQURuQyxpQkFBaUIsQ0FBQyxNQUFNO0tBQ2U7aUJBN0N4RDtJQThDQyxDQUFBOzs7O0FBSEQsa0JBR0M7Ozs7Ozs7QUFFRCxJQUFBO0lBRUMsdUJBQW1CLE9BQVk7UUFBWixZQUFPLEdBQVAsT0FBTyxDQUFLO29CQURmLGlCQUFpQixDQUFDLGNBQWM7S0FDYjt3QkFsRHBDO0lBbURDLENBQUE7QUFIRCx5QkFHQzs7Ozs7OztBQUVELElBQUE7SUFFQyxzQkFBbUIsT0FBWTtRQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7b0JBRGYsaUJBQWlCLENBQUMsY0FBYztLQUNiO3VCQXZEcEM7SUF3REMsQ0FBQTtBQUhELHdCQUdDOzs7Ozs7O0FBRUQsSUFBQTs7b0JBQ2lCLGlCQUFpQixDQUFDLGVBQWU7O3lCQTNEbEQ7SUE0REMsQ0FBQTtBQUZELDBCQUVDOzs7OztBQUVELElBQUE7O29CQUNpQixpQkFBaUIsQ0FBQyxVQUFVOzswQkEvRDdDO0lBZ0VDLENBQUE7QUFGRCwyQkFFQzs7Ozs7QUFFRCxJQUFBOztvQkFDaUIsaUJBQWlCLENBQUMsT0FBTzs7d0JBbkUxQztJQW9FQyxDQUFBO0FBRkQseUJBRUM7Ozs7O0FBRUQsSUFBQTs7b0JBQ2lCLGlCQUFpQixDQUFDLGVBQWU7OytCQXZFbEQ7SUF3RUMsQ0FBQTtBQUZELGdDQUVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgeyBTaWduaW5fQXBpTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcblxyXG5leHBvcnQgZW51bSBTaWduSW5BY3Rpb25UeXBlcyB7XHJcblx0V0hPX0FNX0kgPSBcIltBVVRIRU5USUNBVElPTl0gd2hvIGFtIGlcIixcclxuXHRTSUdOVVAgPSBcIltBVVRIRU5USUNBVElPTl1bU0lHTlVQXSBzdGFydFwiLFxyXG5cdFNJR05VUF9TVUNDRUVEID0gXCJbQVVUSEVOVElDQVRJT05dW1NJR05VUF0gU3VjY2Vzc1wiLFxyXG5cdFNJR05VUF9GQUlMVVJFID0gXCJbQVVUSEVOVElDQVRJT05dW1NJR05VUF0gRmFpbHVyZVwiLFxyXG5cdFNJR05JTiA9IFwiW0FVVEhFTlRJQ0FUSU9OXSBTaWduaW5cIixcclxuXHRET19TSUdOT1VUID0gXCJbQVVUSEVOVElDQVRJT05dIERvIFNpZ25vdXRcIixcclxuXHRTSUdOT1VUID0gXCJbQVVUSEVOVElDQVRJT05dIFNpZ25vdXRcIixcclxuXHRTSUdOSU5fU1VDQ0VFRCA9IFwiW0FVVEhFTlRJQ0FUSU9OXVtTaWduaW5dIFN1Y2Nlc3NcIixcclxuXHRTSUdOSU5fRkFJTFVSRSA9IFwiW0FVVEhFTlRJQ0FUSU9OXVtTaWduaW5dIEZhaWx1cmVcIixcclxuXHRTSUdOSU5fUkVESVJFQ1QgPSBcIltBVVRIRU5USUNBVElPTl1bU2lnbmluXSBSZWRpcmVjdFwiLFxyXG5cdFNJR05JTl9SRVFVSVJFRCA9IFwiW0FVVEhFTlRJQ0FUSU9OXVtTaWduaW5dIFJlcXVpcmVkXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFdob0FtSUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNpZ25JbkFjdGlvblR5cGVzLldIT19BTV9JO1xyXG59XHJcblxyXG4vKipcclxuICogXHRzaWduIHVwXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU2lnbnVwIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2lnbkluQWN0aW9uVHlwZXMuU0lHTlVQO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBTaWduaW5fQXBpTW9kZWwuUmVxdWVzdCkge31cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNpZ251cFNlY2NlZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTaWduSW5BY3Rpb25UeXBlcy5TSUdOVVBfU1VDQ0VFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2lnbnVwRmFpbGVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2lnbkluQWN0aW9uVHlwZXMuU0lHTlVQX0ZBSUxVUkU7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cclxufVxyXG5cclxuLyoqXHJcbiAqIFNpZ24gaW5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBTaWduaW4gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTaWduSW5BY3Rpb25UeXBlcy5TSUdOSU47XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFNpZ25pbl9BcGlNb2RlbC5SZXF1ZXN0KSB7fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2lnbmluU2VjY2VlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNpZ25JbkFjdGlvblR5cGVzLlNJR05JTl9TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTaWduaW5GYWlsZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTaWduSW5BY3Rpb25UeXBlcy5TSUdOSU5fRkFJTFVSRTtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2lnbmluUmVkaXJlY3QgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTaWduSW5BY3Rpb25UeXBlcy5TSUdOSU5fUkVESVJFQ1Q7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEb1NpZ25vdXRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTaWduSW5BY3Rpb25UeXBlcy5ET19TSUdOT1VUO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2lnbm91dEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNpZ25JbkFjdGlvblR5cGVzLlNJR05PVVQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTaWduaW5SZXF1aXJlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNpZ25JbkFjdGlvblR5cGVzLlNJR05JTl9SRVFVSVJFRDtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgU2lnbmluQWN0aW9uID1cclxuXHR8IFdob0FtSUFjdGlvblxyXG5cdHwgU2lnbmluXHJcblx0fCBTaWduaW5TZWNjZWVkXHJcblx0fCBTaWduaW5GYWlsZWRcclxuXHR8IFNpZ25pblJlZGlyZWN0XHJcblx0fCBEb1NpZ25vdXRBY3Rpb25cclxuXHR8IFNpZ25vdXRBY3Rpb25cclxuXHR8IFNpZ25pblJlcXVpcmVkQWN0aW9uO1xyXG4iXX0=