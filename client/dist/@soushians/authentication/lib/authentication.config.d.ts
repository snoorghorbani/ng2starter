import { InjectionToken } from "@angular/core";
import { Observable } from "rxjs";
export interface AuthenticationModuleConfig {
    mode?: string;
    token?: {
        time: number;
    };
    server?: string;
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
    afterSignin?: (user: any) => void;
    responseToUser?: (user: any) => any;
}
export declare const MODULE_DEFAULT_CONFIG: AuthenticationModuleConfig;
export declare const MODULE_CONFIG_TOKEN: InjectionToken<AuthenticationModuleConfig>;
