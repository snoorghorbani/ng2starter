import { InjectionToken } from "@angular/core";
import { Observable, of } from "rxjs";

export interface AuthenticationModuleConfig {
    server: string;
    endpoints?: {
        signOut?: string;
        signIn?: string;
        signUp?: string;
        whoAmI?: string;
    };
    forms?: {
        signIn: string;
        signUp: string;
    };
    env?: {
        production: boolean;
        frontend_server: string;
        server: string;
    };
    afterSignoutRedirectTo?: string;
    signupValidator?: (value: any) => Observable<boolean>;
}

export const MODULE_DEFAULT_CONFIG: AuthenticationModuleConfig = {
    server: "frontend_server",
    endpoints: {
        signOut: "",
        signIn: "",
        signUp: "",
        whoAmI: ""
    },
    forms: {
        signIn: "",
        signUp: ""
    },
    env: {
        production: false,
        frontend_server: "auth/module/frontend_server/did/not/set",
        server: "auth/module/server/did/not/set"
    },
    afterSignoutRedirectTo: "/",
    signupValidator: value => of(true)
};

export const MODULE_CONFIG_TOKEN = new InjectionToken<AuthenticationModuleConfig>("ModuleConfig");
