"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require("bcrypt-nodejs");
const crypto = require("crypto");
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    Username: { type: String, unique: true },
    Password: String,
    PasswordResetToken: String,
    PasswordResetExpires: Date,
    Roles: { type: Array, default: [] },
    Groups: { type: Array, default: [] },
    facebook: String,
    twitter: String,
    google: String,
    tokens: Array,
    profile: {
        Name: String,
        Email: String,
        Gender: String,
        Location: String,
        Website: String,
        Picture: String
    }
}, { timestamps: true });
/**
 * Password hash middleware.
 */
userSchema.pre("save", function save(next) {
    const user = this;
    if (!user.isModified("Password")) {
        return next();
    }
    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            return next(err);
        }
        bcrypt.hash(user.Password, salt, undefined, (err, hash) => {
            if (err) {
                return next(err);
            }
            user.Password = hash;
            next();
        });
    });
});
userSchema.methods.comparePassword = function (candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.Password, (err, isMatch) => {
        cb(err, isMatch);
    });
};
/**
 * Helper method for getting user's gravatar.
 */
userSchema.methods.gravatar = function (size) {
    if (!size) {
        size = 200;
    }
    if (!this.Email) {
        return `https://gravatar.com/avatar/?s=${size}&d=retro`;
    }
    const md5 = crypto.createHash("md5").update(this.Email).digest("hex");
    return `https://gravatar.com/avatar/${md5}?s=${size}&d=retro`;
};
// export const User: UserType = mongoose.model<UserType>('User', userSchema);
const User = mongoose.model("User", userSchema);
exports.default = User;
//# sourceMappingURL=user.model.js.map