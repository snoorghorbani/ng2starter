import { env } from "./env";

export const NgsFrontendAuthenticationModuleConfig = {
	env,
	afterSignoutRedirectTo: "/login.aspx",
	endpoints: {
		signIn: "/api/user/signin",
		signOut: "/api/user/signout",
		whoAmI: "/api/user/account/profile"
	},
	forms: {
		signIn: "5a951cfbfd791632a09b3bc6"
	}
};
