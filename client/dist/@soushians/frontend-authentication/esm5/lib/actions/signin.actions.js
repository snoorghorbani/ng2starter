/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
var SignInActionTypes = {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmluLmFjdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2Zyb250ZW5kLWF1dGhlbnRpY2F0aW9uLyIsInNvdXJjZXMiOlsibGliL2FjdGlvbnMvc2lnbmluLmFjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O2NBS1ksb0NBQW9DO1lBQ3RDLGtDQUFrQztnQkFDOUIsc0NBQXNDO2FBQ3pDLG1DQUFtQztvQkFDNUIsMkNBQTJDO29CQUMzQywyQ0FBMkM7cUJBQzFDLDRDQUE0QztxQkFDNUMsNENBQTRDOzs7QUFHL0QsSUFBQTs7b0JBQ2lCLGlCQUFpQixDQUFDLFFBQVE7O3VCQWhCM0M7SUFpQkMsQ0FBQTtBQUZELHdCQUVDOzs7OztBQUNELElBQUE7SUFFQyxnQkFBbUIsT0FBZ0M7UUFBaEMsWUFBTyxHQUFQLE9BQU8sQ0FBeUI7b0JBRG5DLGlCQUFpQixDQUFDLE1BQU07S0FDZTtpQkFwQnhEO0lBcUJDLENBQUE7QUFIRCxrQkFHQzs7Ozs7OztBQUVELElBQUE7SUFFQyx1QkFBbUIsT0FBWTtRQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7b0JBRGYsaUJBQWlCLENBQUMsY0FBYztLQUNiO3dCQXpCcEM7SUEwQkMsQ0FBQTtBQUhELHlCQUdDOzs7Ozs7O0FBRUQsSUFBQTtJQUVDLHNCQUFtQixPQUFZO1FBQVosWUFBTyxHQUFQLE9BQU8sQ0FBSztvQkFEZixpQkFBaUIsQ0FBQyxjQUFjO0tBQ2I7dUJBOUJwQztJQStCQyxDQUFBO0FBSEQsd0JBR0M7Ozs7Ozs7QUFFRCxJQUFBOztvQkFDaUIsaUJBQWlCLENBQUMsZUFBZTs7eUJBbENsRDtJQW1DQyxDQUFBO0FBRkQsMEJBRUM7Ozs7O0FBRUQsSUFBQTs7b0JBQ2lCLGlCQUFpQixDQUFDLFVBQVU7OzBCQXRDN0M7SUF1Q0MsQ0FBQTtBQUZELDJCQUVDOzs7OztBQUVELElBQUE7O29CQUNpQixpQkFBaUIsQ0FBQyxPQUFPOzt3QkExQzFDO0lBMkNDLENBQUE7QUFGRCx5QkFFQzs7Ozs7QUFFRCxJQUFBOztvQkFDaUIsaUJBQWlCLENBQUMsZUFBZTs7K0JBOUNsRDtJQStDQyxDQUFBO0FBRkQsZ0NBRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IFNpZ25pbl9BcGlNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuXHJcbmV4cG9ydCBlbnVtIFNpZ25JbkFjdGlvblR5cGVzIHtcclxuXHRXSE9fQU1fSSA9IFwiW0ZST05URU5EX0FVVEhFTlRJQ0FUSU9OXSB3aG8gYW0gaVwiLFxyXG5cdFNJR05JTiA9IFwiW0ZST05URU5EX0FVVEhFTlRJQ0FUSU9OXSBTaWduaW5cIixcclxuXHRET19TSUdOT1VUID0gXCJbRlJPTlRFTkRfQVVUSEVOVElDQVRJT05dIERvIFNpZ25vdXRcIixcclxuXHRTSUdOT1VUID0gXCJbRlJPTlRFTkRfQVVUSEVOVElDQVRJT05dIFNpZ25vdXRcIixcclxuXHRTSUdOSU5fU1VDQ0VFRCA9IFwiW0ZST05URU5EX0FVVEhFTlRJQ0FUSU9OXVtTaWduaW5dIFN1Y2Nlc3NcIixcclxuXHRTSUdOSU5fRkFJTFVSRSA9IFwiW0ZST05URU5EX0FVVEhFTlRJQ0FUSU9OXVtTaWduaW5dIEZhaWx1cmVcIixcclxuXHRTSUdOSU5fUkVESVJFQ1QgPSBcIltGUk9OVEVORF9BVVRIRU5USUNBVElPTl1bU2lnbmluXSBSZWRpcmVjdFwiLFxyXG5cdFNJR05JTl9SRVFVSVJFRCA9IFwiW0ZST05URU5EX0FVVEhFTlRJQ0FUSU9OXVtTaWduaW5dIFJlcXVpcmVkXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFdob0FtSUFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNpZ25JbkFjdGlvblR5cGVzLldIT19BTV9JO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBTaWduaW4gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTaWduSW5BY3Rpb25UeXBlcy5TSUdOSU47XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFNpZ25pbl9BcGlNb2RlbC5SZXF1ZXN0KSB7fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2lnbmluU2VjY2VlZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNpZ25JbkFjdGlvblR5cGVzLlNJR05JTl9TVUNDRUVEO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTaWduaW5GYWlsZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTaWduSW5BY3Rpb25UeXBlcy5TSUdOSU5fRkFJTFVSRTtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2lnbmluUmVkaXJlY3QgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTaWduSW5BY3Rpb25UeXBlcy5TSUdOSU5fUkVESVJFQ1Q7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEb1NpZ25vdXRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTaWduSW5BY3Rpb25UeXBlcy5ET19TSUdOT1VUO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2lnbm91dEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNpZ25JbkFjdGlvblR5cGVzLlNJR05PVVQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTaWduaW5SZXF1aXJlZEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFNpZ25JbkFjdGlvblR5cGVzLlNJR05JTl9SRVFVSVJFRDtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgU2lnbmluQWN0aW9uID1cclxuXHR8IFdob0FtSUFjdGlvblxyXG5cdHwgU2lnbmluXHJcblx0fCBTaWduaW5TZWNjZWVkXHJcblx0fCBTaWduaW5GYWlsZWRcclxuXHR8IFNpZ25pblJlZGlyZWN0XHJcblx0fCBEb1NpZ25vdXRBY3Rpb25cclxuXHR8IFNpZ25vdXRBY3Rpb25cclxuXHR8IFNpZ25pblJlcXVpcmVkQWN0aW9uO1xyXG4iXX0=