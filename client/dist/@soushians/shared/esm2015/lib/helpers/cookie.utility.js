/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class Cookie {
    // private isConsented: boolean = false;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29va2llLnV0aWxpdHkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9oZWxwZXJzL2Nvb2tpZS51dGlsaXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNLE9BQU8sTUFBTTs7SUFHZjtRQUNJLDZEQUE2RDtJQUNqRSxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBWTs7Y0FDbkIsRUFBRSxHQUFrQixRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7O2NBQzlDLEtBQUssR0FBVyxFQUFFLENBQUMsTUFBTTs7Y0FDekIsVUFBVSxHQUFHLEdBQUcsSUFBSSxHQUFHOztZQUN6QixDQUFTO1FBRWIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQy9CLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUM1QixPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDbkQ7U0FDSjtRQUNELE9BQU8sRUFBRSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUk7UUFDcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakMsQ0FBQzs7Ozs7Ozs7SUFFRCxNQUFNLENBQUMsU0FBUyxDQUFDLElBQVksRUFBRSxLQUFhLEVBQUUsVUFBa0IsRUFBRSxPQUFlLEVBQUU7O2NBQ3pFLENBQUMsR0FBUyxJQUFJLElBQUksRUFBRTtRQUMxQixDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxVQUFVLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7O2NBQ3BELE9BQU8sR0FBRyxXQUFXLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBRTs7Y0FDdEMsS0FBSyxHQUFXLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNsRCxRQUFRLENBQUMsTUFBTSxHQUFHLEdBQUcsSUFBSSxJQUFJLEtBQUssS0FBSyxPQUFPLEdBQUcsS0FBSyxFQUFFLENBQUM7SUFDN0QsQ0FBQzs7Ozs7O0lBRUQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFrQixFQUFFLENBQU07UUFDckMsb0JBQW9CO1FBQ3BCLCtCQUErQjtRQUMvQiwwQkFBMEI7UUFDMUIsdUVBQXVFO1FBQ3ZFLCtCQUErQjtRQUMvQiwwQkFBMEI7UUFDMUIsSUFBSTtJQUNSLENBQUM7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDb29raWUge1xyXG4gICAgLy8gcHJpdmF0ZSBpc0NvbnNlbnRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8vIHRoaXMuaXNDb25zZW50ZWQgPSB0aGlzLmdldENvb2tpZShDT09LSUVfQ09OU0VOVCkgPT09ICcxJztcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0Q29va2llKG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IGNhOiBBcnJheTxzdHJpbmc+ID0gZG9jdW1lbnQuY29va2llLnNwbGl0KFwiO1wiKTtcclxuICAgICAgICBjb25zdCBjYUxlbjogbnVtYmVyID0gY2EubGVuZ3RoO1xyXG4gICAgICAgIGNvbnN0IGNvb2tpZU5hbWUgPSBgJHtuYW1lfT1gO1xyXG4gICAgICAgIGxldCBjOiBzdHJpbmc7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FMZW47IGkgKz0gMSkge1xyXG4gICAgICAgICAgICBjID0gY2FbaV0ucmVwbGFjZSgvXlxccysvZywgXCJcIik7XHJcbiAgICAgICAgICAgIGlmIChjLmluZGV4T2YoY29va2llTmFtZSkgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGMuc3Vic3RyaW5nKGNvb2tpZU5hbWUubGVuZ3RoLCBjLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGRlbGV0ZUNvb2tpZShuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5zZXRDb29raWUobmFtZSwgXCJcIiwgLTEpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzZXRDb29raWUobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBleHBpcmVEYXlzOiBudW1iZXIsIHBhdGg6IHN0cmluZyA9IFwiXCIpIHtcclxuICAgICAgICBjb25zdCBkOiBEYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICBkLnNldFRpbWUoZC5nZXRUaW1lKCkgKyBleHBpcmVEYXlzICogMjQgKiA2MCAqIDYwICogMTAwMCk7XHJcbiAgICAgICAgY29uc3QgZXhwaXJlcyA9IGBleHBpcmVzPSR7ZC50b1VUQ1N0cmluZygpfWA7XHJcbiAgICAgICAgY29uc3QgY3BhdGg6IHN0cmluZyA9IHBhdGggPyBgOyBwYXRoPSR7cGF0aH1gIDogXCJcIjtcclxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBgJHtuYW1lfT0ke3ZhbHVlfTsgJHtleHBpcmVzfSR7Y3BhdGh9YDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY29uc2VudChpc0NvbnNlbnQ6IGJvb2xlYW4sIGU6IGFueSkge1xyXG4gICAgICAgIC8vIGlmICghaXNDb25zZW50KSB7XHJcbiAgICAgICAgLy8gICAgIHJldHVybiB0aGlzLmlzQ29uc2VudGVkO1xyXG4gICAgICAgIC8vIH0gZWxzZSBpZiAoaXNDb25zZW50KSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuc2V0Q29va2llKENPT0tJRV9DT05TRU5ULCBcIjFcIiwgQ09PS0lFX0NPTlNFTlRfRVhQSVJFX0RBWVMpO1xyXG4gICAgICAgIC8vICAgICB0aGlzLmlzQ29uc2VudGVkID0gdHJ1ZTtcclxuICAgICAgICAvLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxufVxyXG4iXX0=