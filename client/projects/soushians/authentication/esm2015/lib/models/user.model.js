/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
export class UserModel {
    /**
     * @param {?=} params
     */
    constructor(params) {
        // IdentificationNo: string;
        // IdentifierType: string;
        // RegisterDate: string;
        // UserType: string;
        this.Roles = [];
        params &&
            Object.keys(params).forEach(key => {
                if (key in params)
                    (/** @type {?} */ (this))[key] = params[key];
            });
    }
}
function UserModel_tsickle_Closure_declarations() {
    /** @type {?} */
    UserModel.prototype._id;
    /** @type {?} */
    UserModel.prototype.Username;
    /** @type {?} */
    UserModel.prototype.Email;
    /** @type {?} */
    UserModel.prototype.Roles;
}
//# sourceMappingURL=user.model.js.map
