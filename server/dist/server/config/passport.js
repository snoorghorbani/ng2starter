"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const passport = require("passport");
const mongoose = require("mongoose");
const passportLocal = require("passport-local");
const passportFacebook = require("passport-facebook");
const _ = require("lodash");
const User = mongoose.model("User");
const LocalStrategy = passportLocal.Strategy;
const FacebookStrategy = passportFacebook.Strategy;
passport.serializeUser((user, done) => {
    done(undefined, user.id);
});
passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});
/**
 * Sign in using Username and Password.
 */
passport.use(new LocalStrategy({ usernameField: "Username", passwordField: "Password" }, (Username, Password, done) => {
    User.findOne({ Username: Username.toLowerCase() }, (err, user) => {
        if (err) {
            return done(err);
        }
        if (!user) {
            return done(undefined, false, { message: `Username ${Username} not found.` });
        }
        user.comparePassword(Password, (err, isMatch) => {
            if (err) {
                return done(err);
            }
            if (isMatch) {
                return done(undefined, user);
            }
            return done(undefined, false, { message: "Invalid Username or Password." });
        });
    });
}));
/**
 * Login Required middleware.
 */
exports.isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.sendStatus(401);
};
/**
 * Authorization Required middleware.
 */
exports.isAuthorized = (req, res, next) => {
    const provider = req.path.split("/").slice(-1)[0];
    if (_.find(req.user.tokens, { kind: provider })) {
        next();
    }
    else {
        res.redirect(`/auth/${provider}`);
    }
};
//# sourceMappingURL=passport.js.map