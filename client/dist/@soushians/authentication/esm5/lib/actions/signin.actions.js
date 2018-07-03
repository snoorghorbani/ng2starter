/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
var SignInActionTypes = {
    WHO_AM_I: "[Auth] who am i",
    SIGNIN: "[Auth] Signin",
    DO_SIGNOUT: "[Auth] Do Signout",
    SIGNOUT: "[Auth] Signout",
    SIGNIN_SUCCEED: "[Auth][Signin] Success",
    SIGNIN_FAILURE: "[Auth][Signin] Failure",
    SIGNIN_REDIRECT: "[Auth][Signin] Redirect",
    SIGNIN_REQUIRED: "[Auth][Signin] Required",
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
var Signin = /** @class */ (function () {
    function Signin(payload) {
        this.payload = payload;
        this.type = SignInActionTypes.SIGNIN;
    }
    return Signin;
}());
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmluLmFjdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2F1dGhlbnRpY2F0aW9uLyIsInNvdXJjZXMiOlsibGliL2FjdGlvbnMvc2lnbmluLmFjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O2NBS1ksaUJBQWlCO1lBQ25CLGVBQWU7Z0JBQ1gsbUJBQW1CO2FBQ3RCLGdCQUFnQjtvQkFDVCx3QkFBd0I7b0JBQ3hCLHdCQUF3QjtxQkFDdkIseUJBQXlCO3FCQUN6Qix5QkFBeUI7OztBQUc1QyxJQUFBOztvQkFDaUIsaUJBQWlCLENBQUMsUUFBUTs7dUJBaEIzQztJQWlCQyxDQUFBO0FBRkQsd0JBRUM7Ozs7O0FBQ0QsSUFBQTtJQUVDLGdCQUFtQixPQUFnQztRQUFoQyxZQUFPLEdBQVAsT0FBTyxDQUF5QjtvQkFEbkMsaUJBQWlCLENBQUMsTUFBTTtLQUNlO2lCQXBCeEQ7SUFxQkMsQ0FBQTtBQUhELGtCQUdDOzs7Ozs7O0FBRUQsSUFBQTtJQUVDLHVCQUFtQixPQUFZO1FBQVosWUFBTyxHQUFQLE9BQU8sQ0FBSztvQkFEZixpQkFBaUIsQ0FBQyxjQUFjO0tBQ2I7d0JBekJwQztJQTBCQyxDQUFBO0FBSEQseUJBR0M7Ozs7Ozs7QUFFRCxJQUFBO0lBRUMsc0JBQW1CLE9BQVk7UUFBWixZQUFPLEdBQVAsT0FBTyxDQUFLO29CQURmLGlCQUFpQixDQUFDLGNBQWM7S0FDYjt1QkE5QnBDO0lBK0JDLENBQUE7QUFIRCx3QkFHQzs7Ozs7OztBQUVELElBQUE7O29CQUNpQixpQkFBaUIsQ0FBQyxlQUFlOzt5QkFsQ2xEO0lBbUNDLENBQUE7QUFGRCwwQkFFQzs7Ozs7QUFFRCxJQUFBOztvQkFDaUIsaUJBQWlCLENBQUMsVUFBVTs7MEJBdEM3QztJQXVDQyxDQUFBO0FBRkQsMkJBRUM7Ozs7O0FBRUQsSUFBQTs7b0JBQ2lCLGlCQUFpQixDQUFDLE9BQU87O3dCQTFDMUM7SUEyQ0MsQ0FBQTtBQUZELHlCQUVDOzs7OztBQUVELElBQUE7O29CQUNpQixpQkFBaUIsQ0FBQyxlQUFlOzsrQkE5Q2xEO0lBK0NDLENBQUE7QUFGRCxnQ0FFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IHsgU2lnbmluX0FwaU1vZGVsIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0IGVudW0gU2lnbkluQWN0aW9uVHlwZXMge1xyXG5cdFdIT19BTV9JID0gXCJbQXV0aF0gd2hvIGFtIGlcIixcclxuXHRTSUdOSU4gPSBcIltBdXRoXSBTaWduaW5cIixcclxuXHRET19TSUdOT1VUID0gXCJbQXV0aF0gRG8gU2lnbm91dFwiLFxyXG5cdFNJR05PVVQgPSBcIltBdXRoXSBTaWdub3V0XCIsXHJcblx0U0lHTklOX1NVQ0NFRUQgPSBcIltBdXRoXVtTaWduaW5dIFN1Y2Nlc3NcIixcclxuXHRTSUdOSU5fRkFJTFVSRSA9IFwiW0F1dGhdW1NpZ25pbl0gRmFpbHVyZVwiLFxyXG5cdFNJR05JTl9SRURJUkVDVCA9IFwiW0F1dGhdW1NpZ25pbl0gUmVkaXJlY3RcIixcclxuXHRTSUdOSU5fUkVRVUlSRUQgPSBcIltBdXRoXVtTaWduaW5dIFJlcXVpcmVkXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFdob0FtSUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNpZ25JbkFjdGlvblR5cGVzLldIT19BTV9JO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBTaWduaW4gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTaWduSW5BY3Rpb25UeXBlcy5TSUdOSU47XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFNpZ25pbl9BcGlNb2RlbC5SZXF1ZXN0KSB7fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2lnbmluU2VjY2VlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNpZ25JbkFjdGlvblR5cGVzLlNJR05JTl9TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTaWduaW5GYWlsZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTaWduSW5BY3Rpb25UeXBlcy5TSUdOSU5fRkFJTFVSRTtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2lnbmluUmVkaXJlY3QgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTaWduSW5BY3Rpb25UeXBlcy5TSUdOSU5fUkVESVJFQ1Q7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEb1NpZ25vdXRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTaWduSW5BY3Rpb25UeXBlcy5ET19TSUdOT1VUO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2lnbm91dEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNpZ25JbkFjdGlvblR5cGVzLlNJR05PVVQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTaWduaW5SZXF1aXJlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNpZ25JbkFjdGlvblR5cGVzLlNJR05JTl9SRVFVSVJFRDtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgU2lnbmluQWN0aW9uID1cclxuXHR8IFdob0FtSUFjdGlvblxyXG5cdHwgU2lnbmluXHJcblx0fCBTaWduaW5TZWNjZWVkXHJcblx0fCBTaWduaW5GYWlsZWRcclxuXHR8IFNpZ25pblJlZGlyZWN0XHJcblx0fCBEb1NpZ25vdXRBY3Rpb25cclxuXHR8IFNpZ25vdXRBY3Rpb25cclxuXHR8IFNpZ25pblJlcXVpcmVkQWN0aW9uO1xyXG4iXX0=