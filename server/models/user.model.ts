import * as bcrypt from "bcrypt-nodejs";
import * as crypto from "crypto";
import * as mongoose from "mongoose";

export type UserModel = mongoose.Document & {
	Username: string;
	Password: string;
	PasswordResetToken: string;
	PasswordResetExpires: Date;

	Roles: string[];
	Groups: { type: string[] };
	facebook: string;
	tokens: AuthToken[];

	profile: {
		Name: string;
		Email: string;
		Gender: string;
		Location: string;
		Website: string;
		Picture: string;
	};

	comparePassword: (candidatePassword: string, cb: (err: any, isMatch: any) => {}) => void;
	gravatar: (size: number) => string;
};

export type AuthToken = {
	accessToken: string;
	kind: string;
};

const userSchema = new mongoose.Schema(
	{
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
	},
	{ timestamps: true }
);

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
		bcrypt.hash(user.Password, salt, undefined, (err: mongoose.Error, hash) => {
			if (err) {
				return next(err);
			}
			user.Password = hash;
			next();
		});
	});
});

userSchema.methods.comparePassword = function(candidatePassword: string, cb: (err: any, isMatch: any) => {}) {
	bcrypt.compare(candidatePassword, this.Password, (err: mongoose.Error, isMatch: boolean) => {
		cb(err, isMatch);
	});
};

/**
 * Helper method for getting user's gravatar.
 */
userSchema.methods.gravatar = function(size: number) {
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
export default User;
