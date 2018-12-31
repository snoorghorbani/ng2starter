/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var Cookie = /** @class */ (function () {
    // private isConsented: boolean = false;
    function Cookie() {
        // this.isConsented = this.getCookie(COOKIE_CONSENT) === '1';
    }
    /**
     * @param {?} name
     * @return {?}
     */
    Cookie.getCookie = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        /** @type {?} */
        var ca = document.cookie.split(";");
        /** @type {?} */
        var caLen = ca.length;
        /** @type {?} */
        var cookieName = name + "=";
        /** @type {?} */
        var c;
        for (var i = 0; i < caLen; i += 1) {
            c = ca[i].replace(/^\s+/g, "");
            if (c.indexOf(cookieName) == 0) {
                return c.substring(cookieName.length, c.length);
            }
        }
        return "";
    };
    /**
     * @param {?} name
     * @return {?}
     */
    Cookie.deleteCookie = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        this.setCookie(name, "", -1);
    };
    /**
     * @param {?} name
     * @param {?} value
     * @param {?} expireDays
     * @param {?=} path
     * @return {?}
     */
    Cookie.setCookie = /**
     * @param {?} name
     * @param {?} value
     * @param {?} expireDays
     * @param {?=} path
     * @return {?}
     */
    function (name, value, expireDays, path) {
        if (path === void 0) { path = ""; }
        /** @type {?} */
        var d = new Date();
        d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
        /** @type {?} */
        var expires = "expires=" + d.toUTCString();
        /** @type {?} */
        var cpath = path ? "; path=" + path : "";
        document.cookie = name + "=" + value + "; " + expires + cpath;
    };
    /**
     * @param {?} isConsent
     * @param {?} e
     * @return {?}
     */
    Cookie.consent = /**
     * @param {?} isConsent
     * @param {?} e
     * @return {?}
     */
    function (isConsent, e) {
        // if (!isConsent) {
        //     return this.isConsented;
        // } else if (isConsent) {
        //     this.setCookie(COOKIE_CONSENT, "1", COOKIE_CONSENT_EXPIRE_DAYS);
        //     this.isConsented = true;
        //     e.preventDefault();
        // }
    };
    return Cookie;
}());
export { Cookie };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29va2llLnV0aWxpdHkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9oZWxwZXJzL2Nvb2tpZS51dGlsaXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxJQUFBO0lBQ0ksd0NBQXdDO0lBRXhDOztLQUVDOzs7OztJQUVNLGdCQUFTOzs7O0lBQWhCLFVBQWlCLElBQVk7O1FBQ3pCLElBQU0sRUFBRSxHQUFrQixRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzs7UUFDckQsSUFBTSxLQUFLLEdBQVcsRUFBRSxDQUFDLE1BQU0sQ0FBQzs7UUFDaEMsSUFBTSxVQUFVLEdBQU0sSUFBSSxNQUFHLENBQUM7O1FBQzlCLElBQUksQ0FBQyxDQUFTO1FBRWQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQy9CLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUM1QixPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDbkQ7U0FDSjtRQUNELE9BQU8sRUFBRSxDQUFDO0tBQ2I7Ozs7O0lBRU0sbUJBQVk7Ozs7SUFBbkIsVUFBb0IsSUFBSTtRQUNwQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNoQzs7Ozs7Ozs7SUFFTSxnQkFBUzs7Ozs7OztJQUFoQixVQUFpQixJQUFZLEVBQUUsS0FBYSxFQUFFLFVBQWtCLEVBQUUsSUFBaUI7UUFBakIscUJBQUEsRUFBQSxTQUFpQjs7UUFDL0UsSUFBTSxDQUFDLEdBQVMsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUMzQixDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxVQUFVLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7O1FBQzFELElBQU0sT0FBTyxHQUFHLGFBQVcsQ0FBQyxDQUFDLFdBQVcsRUFBSSxDQUFDOztRQUM3QyxJQUFNLEtBQUssR0FBVyxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVUsSUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDbkQsUUFBUSxDQUFDLE1BQU0sR0FBTSxJQUFJLFNBQUksS0FBSyxVQUFLLE9BQU8sR0FBRyxLQUFPLENBQUM7S0FDNUQ7Ozs7OztJQUVNLGNBQU87Ozs7O0lBQWQsVUFBZSxTQUFrQixFQUFFLENBQU07Ozs7Ozs7O0tBUXhDO2lCQTFDTDtJQTJDQyxDQUFBO0FBM0NELGtCQTJDQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDb29raWUge1xyXG4gICAgLy8gcHJpdmF0ZSBpc0NvbnNlbnRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8vIHRoaXMuaXNDb25zZW50ZWQgPSB0aGlzLmdldENvb2tpZShDT09LSUVfQ09OU0VOVCkgPT09ICcxJztcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0Q29va2llKG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IGNhOiBBcnJheTxzdHJpbmc+ID0gZG9jdW1lbnQuY29va2llLnNwbGl0KFwiO1wiKTtcclxuICAgICAgICBjb25zdCBjYUxlbjogbnVtYmVyID0gY2EubGVuZ3RoO1xyXG4gICAgICAgIGNvbnN0IGNvb2tpZU5hbWUgPSBgJHtuYW1lfT1gO1xyXG4gICAgICAgIGxldCBjOiBzdHJpbmc7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FMZW47IGkgKz0gMSkge1xyXG4gICAgICAgICAgICBjID0gY2FbaV0ucmVwbGFjZSgvXlxccysvZywgXCJcIik7XHJcbiAgICAgICAgICAgIGlmIChjLmluZGV4T2YoY29va2llTmFtZSkgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGMuc3Vic3RyaW5nKGNvb2tpZU5hbWUubGVuZ3RoLCBjLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGRlbGV0ZUNvb2tpZShuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5zZXRDb29raWUobmFtZSwgXCJcIiwgLTEpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzZXRDb29raWUobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBleHBpcmVEYXlzOiBudW1iZXIsIHBhdGg6IHN0cmluZyA9IFwiXCIpIHtcclxuICAgICAgICBjb25zdCBkOiBEYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICBkLnNldFRpbWUoZC5nZXRUaW1lKCkgKyBleHBpcmVEYXlzICogMjQgKiA2MCAqIDYwICogMTAwMCk7XHJcbiAgICAgICAgY29uc3QgZXhwaXJlcyA9IGBleHBpcmVzPSR7ZC50b1VUQ1N0cmluZygpfWA7XHJcbiAgICAgICAgY29uc3QgY3BhdGg6IHN0cmluZyA9IHBhdGggPyBgOyBwYXRoPSR7cGF0aH1gIDogXCJcIjtcclxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBgJHtuYW1lfT0ke3ZhbHVlfTsgJHtleHBpcmVzfSR7Y3BhdGh9YDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY29uc2VudChpc0NvbnNlbnQ6IGJvb2xlYW4sIGU6IGFueSkge1xyXG4gICAgICAgIC8vIGlmICghaXNDb25zZW50KSB7XHJcbiAgICAgICAgLy8gICAgIHJldHVybiB0aGlzLmlzQ29uc2VudGVkO1xyXG4gICAgICAgIC8vIH0gZWxzZSBpZiAoaXNDb25zZW50KSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuc2V0Q29va2llKENPT0tJRV9DT05TRU5ULCBcIjFcIiwgQ09PS0lFX0NPTlNFTlRfRVhQSVJFX0RBWVMpO1xyXG4gICAgICAgIC8vICAgICB0aGlzLmlzQ29uc2VudGVkID0gdHJ1ZTtcclxuICAgICAgICAvLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxufVxyXG4iXX0=