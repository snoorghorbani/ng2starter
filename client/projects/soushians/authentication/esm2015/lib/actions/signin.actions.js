/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
const SignInActionTypes = {
    SIGNIN: "[Auth] Signin",
    SIGNOUT: "[Auth] Signout",
    SIGNIN_SUCCEED: "[Auth] Signin Success",
    SIGNIN_FAILURE: "[Auth] Signin Failure",
    SIGNIN_REDIRECT: "[Auth] Signin Redirect",
};
export { SignInActionTypes };
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
export class SignoutAction {
    constructor() {
        this.type = SignInActionTypes.SIGNOUT;
    }
}
function SignoutAction_tsickle_Closure_declarations() {
    /** @type {?} */
    SignoutAction.prototype.type;
}
//# sourceMappingURL=signin.actions.js.map
