import * as express from "express";
import * as async from "async";
import * as crypto from "crypto";
import * as passport from "passport";
import { default as User, UserModel, AuthToken } from "../models/user.model";
import { Request as OriginalRequest, Response, NextFunction } from "express";
import { WriteError } from "mongodb";
// const LocalStrategyInfo = require("passport-local").LocalStrategyInfo;
const request = require("express-validator");
import * as passportConfig from "../config/passport";

export interface Request extends OriginalRequest {
	assert: any;
	validationErrors: any;
	sanitize: any;
}

const router = express.Router();

router.get("/account/profile", passportConfig.isAuthenticated, (req: Request, res: Response) => {
	res.json(req.user);
});
router.get("/:email", (req: Request, res: Response) => {
	debugger;
	User.findOne({ Email: req.params.email }, (err, user) => {
		res.json(user);
	});
});

router.put("/:email", (req: Request, res: Response) => {
	debugger;
	User.findOneAndUpdate({ Email: req.params.email }, req.body, (err, User) => {
		res.json({ Result: { User } });
	});
});

router.post("/signin", (req: Request, res: Response, next: NextFunction) => {
	// req.assert("Email", "Email is not valid").isEmail();
	// req.assert("Password", "Password cannot be blank").notEmpty();
	// req.sanitize("email").normalizeEmail({ gmail_remove_dots: false });

	const errors = req.validationErrors();

	if (errors) {
		debugger;
		return res.sendStatus(401);
	}

	passport.authenticate("local", (err: Error, user: UserModel, info: any) => {
		if (err) {
			return next(err);
		}
		if (!user) {
			debugger;
			// req.flash("errors", info.message);
			return res.redirect("/signin");
		}
		req.logIn(user, (err) => {
			if (err) {
				return next(err);
			}
			// req.flash("success", { msg: "Success! You are logged in." });
			res.send({
				Result: {
					StatusCode: 200,
					User: user,
					destinationRoute: undefined
				}
			});
		});
	})(req, res, next);
});

/**
 * GET /logout
 * Log out.
 */
export let logout = (req: Request, res: Response) => {
	req.logout();
	res.redirect("/");
};

/**
 * POST /signup
 * Create a new local account.
 */
router.post("/", (req: Request, res: Response, next: NextFunction) => {
	req.assert("Email", "Email is not valid").isEmail();
	req.assert("Password", "Password must be at least 4 characters long").len({ min: 4 });
	req.assert("ConfirmPassword", "Passwords do not match").equals(req.body.Password);
	req.sanitize("Email").normalizeEmail({ gmail_remove_dots: false });

	const errors = req.validationErrors();

	if (errors) {
		debugger;
		return res.redirect("/signup");
	}

	const user = new User({
		Email: req.body.Email,
		Password: req.body.Password,
		Roles: req.body.Roles
	});

	User.findOne({ email: req.body.Email }, (err, existingUser) => {
		if (err) {
			return next(err);
		}
		if (existingUser) {
			// req.flash("errors", { msg: "Account with that email address already exists." });
			return res.redirect("/signup");
		}
		user.save((err) => {
			if (err) {
				return next(err);
			}
			req.logIn(user, (err) => {
				if (err) {
					return next(err);
				}
				res.sendStatus(200);
			});
		});
	});
});

/**
 * POST /account/profile
 * Update profile information.
 */
export let postUpdateProfile = (req: Request, res: Response, next: NextFunction) => {
	debugger;
	req.assert("email", "Please enter a valid email address.").isEmail();
	req.sanitize("email").normalizeEmail({ gmail_remove_dots: false });

	const errors = req.validationErrors();

	if (errors) {
		// req.flash("errors", errors);
		return res.redirect("/account");
	}

	User.findById(req.user.id, (err, user: UserModel) => {
		if (err) {
			return next(err);
		}
		user.Email = req.body.Email || "";
		user.profile.name = req.body.name || "";
		user.profile.gender = req.body.gender || "";
		user.profile.location = req.body.location || "";
		user.profile.website = req.body.website || "";
		user.save((err: WriteError) => {
			if (err) {
				if (err.code === 11000) {
					// req.flash("errors", { msg: "The email address you have entered is already associated with an account." });
					return res.redirect("/account");
				}
				return next(err);
			}
			// req.flash("success", { msg: "Profile information has been updated." });
			res.redirect("/account");
		});
	});
};

/**
 * POST /account/password
 * Update current password.
 */
export let postUpdatePassword = (req: Request, res: Response, next: NextFunction) => {
	req.assert("password", "Password must be at least 4 characters long").len({ min: 4 });
	req.assert("confirmPassword", "Passwords do not match").equals(req.body.Password);

	const errors = req.validationErrors();

	if (errors) {
		// req.flash("errors", errors);
		return res.redirect("/account");
	}

	User.findById(req.user.id, (err, user: UserModel) => {
		if (err) {
			return next(err);
		}
		user.Password = req.body.Password;
		user.save((err: WriteError) => {
			if (err) {
				return next(err);
			}
			// req.flash("success", { msg: "Password has been changed." });
			res.redirect("/account");
		});
	});
};

/**
 * POST /account/delete
 * Delete user account.
 */
export let postDeleteAccount = (req: Request, res: Response, next: NextFunction) => {
	User.remove({ _id: req.user.id }, (err) => {
		if (err) {
			return next(err);
		}
		req.logout();
		// req.flash("info", { msg: "Your account has been deleted." });
		res.redirect("/");
	});
};

/**
 * GET /account/unlink/:provider
 * Unlink OAuth provider.
 */
export let getOauthUnlink = (req: Request, res: Response, next: NextFunction) => {
	const provider = req.params.provider;
	User.findById(req.user.id, (err, user: any) => {
		if (err) {
			return next(err);
		}
		user[provider] = undefined;
		user.tokens = user.tokens.filter((token: AuthToken) => token.kind !== provider);
		user.save((err: WriteError) => {
			if (err) {
				return next(err);
			}
			// req.flash("info", { msg: `${provider} account has been unlinked.` });
			res.redirect("/account");
		});
	});
};

/**
 * GET /reset/:token
 * Reset Password page.
 */
export let getReset = (req: Request, res: Response, next: NextFunction) => {
	if (req.isAuthenticated()) {
		return res.redirect("/");
	}
	User.findOne({ passwordResetToken: req.params.token })
		.where("passwordResetExpires")
		.gt(Date.now())
		.exec((err, user) => {
			if (err) {
				return next(err);
			}
			if (!user) {
				// req.flash("errors", { msg: "Password reset token is invalid or has expired." });
				return res.redirect("/forgot");
			}
			res.render("account/reset", {
				title: "Password Reset"
			});
		});
};

/**
 * POST /reset/:token
 * Process the reset password request.
 */
export let postReset = (req: Request, res: Response, next: NextFunction) => {
	req.assert("password", "Password must be at least 4 characters long.").len({ min: 4 });
	req.assert("confirm", "Passwords must match.").equals(req.body.Password);

	const errors = req.validationErrors();

	if (errors) {
		// req.flash("errors", errors);
		return res.redirect("back");
	}

	async.waterfall(
		[
			function resetPassword(done: Function) {
				User.findOne({ passwordResetToken: req.params.token })
					.where("passwordResetExpires")
					.gt(Date.now())
					.exec((err, user: any) => {
						if (err) {
							return next(err);
						}
						if (!user) {
							// req.flash("errors", { msg: "Password reset token is invalid or has expired." });
							return res.redirect("back");
						}
						user.Password = req.body.Password;
						user.PasswordResetToken = undefined;
						user.PasswordResetExpires = undefined;
						user.save((err: WriteError) => {
							if (err) {
								return next(err);
							}
							req.logIn(user, (err) => {
								done(err, user);
							});
						});
					});
			},
			function sendResetPasswordEmail(user: UserModel, done: Function) {
				// const transporter = nodemailer.createTransport({
				// 	service: "SendGrid",
				// 	auth: {
				// 		user: process.env.SENDGRID_USER,
				// 		pass: process.env.SENDGRID_PASSWORD
				// 	}
				// });
				// const mailOptions = {
				// 	to: user.Email,
				// 	from: "express-ts@starter.com",
				// 	subject: "Your password has been changed",
				// 	text: `Hello,\n\nThis is a confirmation that the password for your account ${user.Email} has just been changed.\n`
				// };
				// transporter.sendMail(mailOptions, (err) => {
				// 	// req.flash("success", { msg: "Success! Your password has been changed." });
				// 	done(err);
				// });
			}
		],
		(err) => {
			if (err) {
				return next(err);
			}
			res.redirect("/");
		}
	);
};

/**
 * POST /forgot
 * Create a random token, then the send user an email with a reset link.
 */
export let postForgot = (req: Request, res: Response, next: NextFunction) => {
	req.assert("email", "Please enter a valid email address.").isEmail();
	req.sanitize("email").normalizeEmail({ gmail_remove_dots: false });

	const errors = req.validationErrors();

	if (errors) {
		// req.flash("errors", errors);
		return res.redirect("/forgot");
	}

	async.waterfall(
		[
			function createRandomToken(done: Function) {
				crypto.randomBytes(16, (err, buf) => {
					const token = buf.toString("hex");
					done(err, token);
				});
			},
			function setRandomToken(token: AuthToken, done: Function) {
				User.findOne({ email: req.body.Email }, (err, user: any) => {
					if (err) {
						return done(err);
					}
					if (!user) {
						// req.flash("errors", { msg: "Account with that email address does not exist." });
						return res.redirect("/forgot");
					}
					user.PasswordResetToken = token;
					user.PasswordResetExpires = Date.now() + 3600000; // 1 hour
					user.save((err: WriteError) => {
						done(err, token, user);
					});
				});
			},
			function sendForgotPasswordEmail(token: AuthToken, user: UserModel, done: Function) {
				// 		const transporter = nodemailer.createTransport({
				// 			service: "SendGrid",
				// 			auth: {
				// 				user: process.env.SENDGRID_USER,
				// 				pass: process.env.SENDGRID_PASSWORD
				// 			}
				// 		});
				// 		const mailOptions = {
				// 			to: user.Email,
				// 			from: "hackathon@starter.com",
				// 			subject: "Reset your password on Hackathon Starter",
				// 			text: `You are receiving this email because you (or someone else) have requested the reset of the password for your account.\n\n
				//   Please click on the following link, or paste this into your browser to complete the process:\n\n
				//   http://${req.headers.host}/reset/${token}\n\n
				//   If you did not request this, please ignore this email and your password will remain unchanged.\n`
				// 		};
				// 		transporter.sendMail(mailOptions, (err) => {
				// 			// req.flash("info", { msg: `An e-mail has been sent to ${user.Email} with further instructions.` });
				// 			done(err);
				// 		});
			}
		],
		(err) => {
			if (err) {
				return next(err);
			}
			res.redirect("/forgot");
		}
	);
};

router.get("/:id", function(req, res) {
	if (req.isAuthenticated()) {
	}
});

export { router };
