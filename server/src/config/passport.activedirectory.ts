import * as passport from "passport";
import * as mongoose from "mongoose";
import * as request from "request";
const ActiveDirectoryStrategy = require("passport-activedirectory");

import * as _ from "lodash";

// import { User, UserType } from "../models/User";
// import { default as User } from "../models/User.model";
import { Request, Response, NextFunction } from "express";

const User = mongoose.model("User");
const Strategy = ActiveDirectoryStrategy;

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
	new Strategy(
		{
			integrated: true,
			ldap: {
				url: "ldap://rasana.ir",
				baseDN: "DC=rasana",
				username: "p_khavarifar@rasana.ir",
				password: "pkhf6630-6"
			}
		},
		(profile: any, ad: any, done: any) => {
			ad.isUserMemberOf(profile._json.dn, "AccessGroup", function (err: any, isMember: any) {
				if (err) return done(err);
				return done(undefined, profile);
			});
		}
	)
);

/**
 * Login Required middleware.
 */
export let isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
	if (req.isAuthenticated()) {
		return next();
	}
	res.sendStatus(401);
};

/**
 * Authorization Required middleware.
 */
export let isAuthorized = (req: Request, res: Response, next: NextFunction) => {
	const provider = req.path.split("/").slice(-1)[0];

	if (_.find(req.user.tokens, { kind: provider })) {
		next();
	} else {
		res.redirect(`/auth/${provider}`);
	}
};
