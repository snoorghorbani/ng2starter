export class Cookie {
    // private isConsented: boolean = false;

    constructor() {
        // this.isConsented = this.getCookie(COOKIE_CONSENT) === '1';
    }

    static getCookie(name: string) {
        const ca: Array<string> = document.cookie.split(";");
        const caLen: number = ca.length;
        const cookieName = `${name}=`;
        let c: string;

        for (let i = 0; i < caLen; i += 1) {
            c = ca[i].replace(/^\s+/g, "");
            if (c.indexOf(cookieName) == 0) {
                return c.substring(cookieName.length, c.length);
            }
        }
        return "";
    }

    static deleteCookie(name) {
        this.setCookie(name, "", -1);
    }

    static setCookie(name: string, value: string, expireDays: number, path: string = "") {
        const d: Date = new Date();
        d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
        const expires = `expires=${d.toUTCString()}`;
        const cpath: string = path ? `; path=${path}` : "";
        document.cookie = `${name}=${value}; ${expires}${cpath}`;
    }

    static consent(isConsent: boolean, e: any) {
        // if (!isConsent) {
        //     return this.isConsented;
        // } else if (isConsent) {
        //     this.setCookie(COOKIE_CONSENT, "1", COOKIE_CONSENT_EXPIRE_DAYS);
        //     this.isConsented = true;
        //     e.preventDefault();
        // }
    }
}
