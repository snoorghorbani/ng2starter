/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
const SignInActionTypes = {
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
export class WhoAmIAction {
    constructor() {
        this.type = SignInActionTypes.WHO_AM_I;
    }
}
function WhoAmIAction_tsickle_Closure_declarations() {
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
function Signin_tsickle_Closure_declarations() {
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
function SigninSecceed_tsickle_Closure_declarations() {
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
function SigninFailed_tsickle_Closure_declarations() {
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
function SigninRedirect_tsickle_Closure_declarations() {
    /** @type {?} */
    SigninRedirect.prototype.type;
}
export class DoSignoutAction {
    constructor() {
        this.type = SignInActionTypes.DO_SIGNOUT;
    }
}
function DoSignoutAction_tsickle_Closure_declarations() {
    /** @type {?} */
    DoSignoutAction.prototype.type;
}
export class SignoutAction {
    constructor() {
        this.type = SignInActionTypes.SIGNOUT;
    }
}
function SignoutAction_tsickle_Closure_declarations() {
    /** @type {?} */
    SignoutAction.prototype.type;
}
export class SigninRequiredAction {
    constructor() {
        this.type = SignInActionTypes.SIGNIN_REQUIRED;
    }
}
function SigninRequiredAction_tsickle_Closure_declarations() {
    /** @type {?} */
    SigninRequiredAction.prototype.type;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmluLmFjdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2F1dGhlbnRpY2F0aW9uLyIsInNvdXJjZXMiOlsibGliL2FjdGlvbnMvc2lnbmluLmFjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O2NBS1ksaUJBQWlCO1lBQ25CLGVBQWU7Z0JBQ1gsbUJBQW1CO2FBQ3RCLGdCQUFnQjtvQkFDVCx3QkFBd0I7b0JBQ3hCLHdCQUF3QjtxQkFDdkIseUJBQXlCO3FCQUN6Qix5QkFBeUI7OztBQUc1QyxNQUFNOztvQkFDVyxpQkFBaUIsQ0FBQyxRQUFROztDQUMxQzs7Ozs7QUFDRCxNQUFNOzs7O0lBRUwsWUFBbUIsT0FBZ0M7UUFBaEMsWUFBTyxHQUFQLE9BQU8sQ0FBeUI7b0JBRG5DLGlCQUFpQixDQUFDLE1BQU07S0FDZTtDQUN2RDs7Ozs7OztBQUVELE1BQU07Ozs7SUFFTCxZQUFtQixPQUFZO1FBQVosWUFBTyxHQUFQLE9BQU8sQ0FBSztvQkFEZixpQkFBaUIsQ0FBQyxjQUFjO0tBQ2I7Q0FDbkM7Ozs7Ozs7QUFFRCxNQUFNOzs7O0lBRUwsWUFBbUIsT0FBWTtRQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7b0JBRGYsaUJBQWlCLENBQUMsY0FBYztLQUNiO0NBQ25DOzs7Ozs7O0FBRUQsTUFBTTs7b0JBQ1csaUJBQWlCLENBQUMsZUFBZTs7Q0FDakQ7Ozs7O0FBRUQsTUFBTTs7b0JBQ1csaUJBQWlCLENBQUMsVUFBVTs7Q0FDNUM7Ozs7O0FBRUQsTUFBTTs7b0JBQ1csaUJBQWlCLENBQUMsT0FBTzs7Q0FDekM7Ozs7O0FBRUQsTUFBTTs7b0JBQ1csaUJBQWlCLENBQUMsZUFBZTs7Q0FDakQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IFNpZ25pbl9BcGlNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuXHJcbmV4cG9ydCBlbnVtIFNpZ25JbkFjdGlvblR5cGVzIHtcclxuXHRXSE9fQU1fSSA9IFwiW0F1dGhdIHdobyBhbSBpXCIsXHJcblx0U0lHTklOID0gXCJbQXV0aF0gU2lnbmluXCIsXHJcblx0RE9fU0lHTk9VVCA9IFwiW0F1dGhdIERvIFNpZ25vdXRcIixcclxuXHRTSUdOT1VUID0gXCJbQXV0aF0gU2lnbm91dFwiLFxyXG5cdFNJR05JTl9TVUNDRUVEID0gXCJbQXV0aF1bU2lnbmluXSBTdWNjZXNzXCIsXHJcblx0U0lHTklOX0ZBSUxVUkUgPSBcIltBdXRoXVtTaWduaW5dIEZhaWx1cmVcIixcclxuXHRTSUdOSU5fUkVESVJFQ1QgPSBcIltBdXRoXVtTaWduaW5dIFJlZGlyZWN0XCIsXHJcblx0U0lHTklOX1JFUVVJUkVEID0gXCJbQXV0aF1bU2lnbmluXSBSZXF1aXJlZFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBXaG9BbUlBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTaWduSW5BY3Rpb25UeXBlcy5XSE9fQU1fSTtcclxufVxyXG5leHBvcnQgY2xhc3MgU2lnbmluIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2lnbkluQWN0aW9uVHlwZXMuU0lHTklOO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBTaWduaW5fQXBpTW9kZWwuUmVxdWVzdCkge31cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNpZ25pblNlY2NlZWQgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTaWduSW5BY3Rpb25UeXBlcy5TSUdOSU5fU1VDQ0VFRDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2lnbmluRmFpbGVkIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2lnbkluQWN0aW9uVHlwZXMuU0lHTklOX0ZBSUxVUkU7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNpZ25pblJlZGlyZWN0IGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2lnbkluQWN0aW9uVHlwZXMuU0lHTklOX1JFRElSRUNUO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRG9TaWdub3V0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gU2lnbkluQWN0aW9uVHlwZXMuRE9fU0lHTk9VVDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNpZ25vdXRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTaWduSW5BY3Rpb25UeXBlcy5TSUdOT1VUO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2lnbmluUmVxdWlyZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBTaWduSW5BY3Rpb25UeXBlcy5TSUdOSU5fUkVRVUlSRUQ7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFNpZ25pbkFjdGlvbiA9XHJcblx0fCBXaG9BbUlBY3Rpb25cclxuXHR8IFNpZ25pblxyXG5cdHwgU2lnbmluU2VjY2VlZFxyXG5cdHwgU2lnbmluRmFpbGVkXHJcblx0fCBTaWduaW5SZWRpcmVjdFxyXG5cdHwgRG9TaWdub3V0QWN0aW9uXHJcblx0fCBTaWdub3V0QWN0aW9uXHJcblx0fCBTaWduaW5SZXF1aXJlZEFjdGlvbjtcclxuIl19