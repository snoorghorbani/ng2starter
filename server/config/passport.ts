import * as passport from "passport";
import * as mongoose from "mongoose";
import * as request from "request";
import * as passportLocal from "passport-local";
import * as passportFacebook from "passport-facebook";
import * as _ from "lodash";

// import { User, UserType } from "../models/User";
// import { default as User } from "../models/User.model";
import { Request, Response, NextFunction } from "express";

const User = mongoose.model("User");
const LocalStrategy = passportLocal.Strategy;
const FacebookStrategy = passportFacebook.Strategy;

passport.serializeUser<any, any>((user, done) => {
	done(undefined, user.id);
});

passport.deserializeUser((id, done) => {
	User.findById(id, (err: Error, user: any) => {
		done(err, user);
	});
});

/**
 * Sign in using Username and Password.
 */
passport.use(
	new LocalStrategy({ usernameField: "Username", passwordField: "Password" }, (Username, Password, done) => {
		User.findOne({ Username: Username.toLowerCase() }, (err: Error, user: any) => {
			if (err) {
				return done(err);
			}
			if (!user) {
				return done(undefined, false, { message: `Username ${Username} not found.` });
			}
			user.comparePassword(Password, (err: Error, isMatch: boolean) => {
				if (err) {
					return done(err);
				}
				if (isMatch) {
					return done(undefined, user);
				}
				return done(undefined, false, { message: "Invalid Username or Password." });
			});
		});
	})
);

/**
 * Login Required middleware.
 */
export let isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
	debugger;
	if (req.isAuthenticated()) {
		return next();
	}
	res.sendStatus(401);
};

/**
 * Authorization Required middleware.
 */
export let isAuthorized = (req: Request, res: Response, next: NextFunction) => {
	debugger;
	const provider = req.path.split("/").slice(-1)[0];

	if (_.find(req.user.tokens, { kind: provider })) {
		next();
	} else {
		res.redirect(`/auth/${provider}`);
	}
};
