export declare class Cookie {
    constructor();
    static getCookie(name: string): string;
    static deleteCookie(name: any): void;
    static setCookie(name: string, value: string, expireDays: number, path?: string): void;
    static consent(isConsent: boolean, e: any): void;
}
