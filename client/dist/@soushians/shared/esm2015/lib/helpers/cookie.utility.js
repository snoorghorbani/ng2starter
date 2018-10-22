/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
export class Cookie {
    constructor() {
        // this.isConsented = this.getCookie(COOKIE_CONSENT) === '1';
    }
    /**
     * @param {?} name
     * @return {?}
     */
    static getCookie(name) {
        /** @type {?} */
        const ca = document.cookie.split(";");
        /** @type {?} */
        const caLen = ca.length;
        /** @type {?} */
        const cookieName = `${name}=`;
        /** @type {?} */
        let c;
        for (let i = 0; i < caLen; i += 1) {
            c = ca[i].replace(/^\s+/g, "");
            if (c.indexOf(cookieName) == 0) {
                return c.substring(cookieName.length, c.length);
            }
        }
        return "";
    }
    /**
     * @param {?} name
     * @return {?}
     */
    static deleteCookie(name) {
        this.setCookie(name, "", -1);
    }
    /**
     * @param {?} name
     * @param {?} value
     * @param {?} expireDays
     * @param {?=} path
     * @return {?}
     */
    static setCookie(name, value, expireDays, path = "") {
        /** @type {?} */
        const d = new Date();
        d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
        /** @type {?} */
        const expires = `expires=${d.toUTCString()}`;
        /** @type {?} */
        const cpath = path ? `; path=${path}` : "";
        document.cookie = `${name}=${value}; ${expires}${cpath}`;
    }
    /**
     * @param {?} isConsent
     * @param {?} e
     * @return {?}
     */
    static consent(isConsent, e) {
        // if (!isConsent) {
        //     return this.isConsented;
        // } else if (isConsent) {
        //     this.setCookie(COOKIE_CONSENT, "1", COOKIE_CONSENT_EXPIRE_DAYS);
        //     this.isConsented = true;
        //     e.preventDefault();
        // }
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29va2llLnV0aWxpdHkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9oZWxwZXJzL2Nvb2tpZS51dGlsaXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNO0lBR0Y7O0tBRUM7Ozs7O0lBRUQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFZOztRQUN6QixNQUFNLEVBQUUsR0FBa0IsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7O1FBQ3JELE1BQU0sS0FBSyxHQUFXLEVBQUUsQ0FBQyxNQUFNLENBQUM7O1FBQ2hDLE1BQU0sVUFBVSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUM7O1FBQzlCLElBQUksQ0FBQyxDQUFTO1FBRWQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQy9CLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUM1QixPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDbkQ7U0FDSjtRQUNELE9BQU8sRUFBRSxDQUFDO0tBQ2I7Ozs7O0lBRUQsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJO1FBQ3BCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2hDOzs7Ozs7OztJQUVELE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBWSxFQUFFLEtBQWEsRUFBRSxVQUFrQixFQUFFLE9BQWUsRUFBRTs7UUFDL0UsTUFBTSxDQUFDLEdBQVMsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUMzQixDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxVQUFVLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7O1FBQzFELE1BQU0sT0FBTyxHQUFHLFdBQVcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUM7O1FBQzdDLE1BQU0sS0FBSyxHQUFXLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ25ELFFBQVEsQ0FBQyxNQUFNLEdBQUcsR0FBRyxJQUFJLElBQUksS0FBSyxLQUFLLE9BQU8sR0FBRyxLQUFLLEVBQUUsQ0FBQztLQUM1RDs7Ozs7O0lBRUQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFrQixFQUFFLENBQU07Ozs7Ozs7O0tBUXhDO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ29va2llIHtcclxuICAgIC8vIHByaXZhdGUgaXNDb25zZW50ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvLyB0aGlzLmlzQ29uc2VudGVkID0gdGhpcy5nZXRDb29raWUoQ09PS0lFX0NPTlNFTlQpID09PSAnMSc7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldENvb2tpZShuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBjYTogQXJyYXk8c3RyaW5nPiA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjtcIik7XHJcbiAgICAgICAgY29uc3QgY2FMZW46IG51bWJlciA9IGNhLmxlbmd0aDtcclxuICAgICAgICBjb25zdCBjb29raWVOYW1lID0gYCR7bmFtZX09YDtcclxuICAgICAgICBsZXQgYzogc3RyaW5nO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhTGVuOyBpICs9IDEpIHtcclxuICAgICAgICAgICAgYyA9IGNhW2ldLnJlcGxhY2UoL15cXHMrL2csIFwiXCIpO1xyXG4gICAgICAgICAgICBpZiAoYy5pbmRleE9mKGNvb2tpZU5hbWUpID09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjLnN1YnN0cmluZyhjb29raWVOYW1lLmxlbmd0aCwgYy5sZW5ndGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBkZWxldGVDb29raWUobmFtZSkge1xyXG4gICAgICAgIHRoaXMuc2V0Q29va2llKG5hbWUsIFwiXCIsIC0xKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2V0Q29va2llKG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZywgZXhwaXJlRGF5czogbnVtYmVyLCBwYXRoOiBzdHJpbmcgPSBcIlwiKSB7XHJcbiAgICAgICAgY29uc3QgZDogRGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgZC5zZXRUaW1lKGQuZ2V0VGltZSgpICsgZXhwaXJlRGF5cyAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xyXG4gICAgICAgIGNvbnN0IGV4cGlyZXMgPSBgZXhwaXJlcz0ke2QudG9VVENTdHJpbmcoKX1gO1xyXG4gICAgICAgIGNvbnN0IGNwYXRoOiBzdHJpbmcgPSBwYXRoID8gYDsgcGF0aD0ke3BhdGh9YCA6IFwiXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gYCR7bmFtZX09JHt2YWx1ZX07ICR7ZXhwaXJlc30ke2NwYXRofWA7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNvbnNlbnQoaXNDb25zZW50OiBib29sZWFuLCBlOiBhbnkpIHtcclxuICAgICAgICAvLyBpZiAoIWlzQ29uc2VudCkge1xyXG4gICAgICAgIC8vICAgICByZXR1cm4gdGhpcy5pc0NvbnNlbnRlZDtcclxuICAgICAgICAvLyB9IGVsc2UgaWYgKGlzQ29uc2VudCkge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnNldENvb2tpZShDT09LSUVfQ09OU0VOVCwgXCIxXCIsIENPT0tJRV9DT05TRU5UX0VYUElSRV9EQVlTKTtcclxuICAgICAgICAvLyAgICAgdGhpcy5pc0NvbnNlbnRlZCA9IHRydWU7XHJcbiAgICAgICAgLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcbn1cclxuIl19