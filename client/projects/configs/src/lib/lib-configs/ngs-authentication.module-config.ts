import { env } from "./env";

export const NgsAuthenticationModuleConfig = {
	server: "frontend_server",
	afterSignoutRedirectTo: "/auth/signin",
	env
};
