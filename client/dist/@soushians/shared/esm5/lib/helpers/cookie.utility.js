/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        var /** @type {?} */ ca = document.cookie.split(";");
        var /** @type {?} */ caLen = ca.length;
        var /** @type {?} */ cookieName = name + "=";
        var /** @type {?} */ c;
        for (var /** @type {?} */ i = 0; i < caLen; i += 1) {
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
        var /** @type {?} */ d = new Date();
        d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
        var /** @type {?} */ expires = "expires=" + d.toUTCString();
        var /** @type {?} */ cpath = path ? "; path=" + path : "";
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29va2llLnV0aWxpdHkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9oZWxwZXJzL2Nvb2tpZS51dGlsaXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxJQUFBO0lBQ0ksd0NBQXdDO0lBRXhDOztLQUVDOzs7OztJQUVNLGdCQUFTOzs7O0lBQWhCLFVBQWlCLElBQVk7UUFDekIscUJBQU0sRUFBRSxHQUFrQixRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyRCxxQkFBTSxLQUFLLEdBQVcsRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUNoQyxxQkFBTSxVQUFVLEdBQU0sSUFBSSxNQUFHLENBQUM7UUFDOUIscUJBQUksQ0FBUyxDQUFDO1FBRWQsR0FBRyxDQUFDLENBQUMscUJBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUNoQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDL0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM3QixNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNuRDtTQUNKO1FBQ0QsTUFBTSxDQUFDLEVBQUUsQ0FBQztLQUNiOzs7OztJQUVNLG1CQUFZOzs7O0lBQW5CLFVBQW9CLElBQUk7UUFDcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDaEM7Ozs7Ozs7O0lBRU0sZ0JBQVM7Ozs7Ozs7SUFBaEIsVUFBaUIsSUFBWSxFQUFFLEtBQWEsRUFBRSxVQUFrQixFQUFFLElBQWlCO1FBQWpCLHFCQUFBLEVBQUEsU0FBaUI7UUFDL0UscUJBQU0sQ0FBQyxHQUFTLElBQUksSUFBSSxFQUFFLENBQUM7UUFDM0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLEdBQUcsVUFBVSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQzFELHFCQUFNLE9BQU8sR0FBRyxhQUFXLENBQUMsQ0FBQyxXQUFXLEVBQUksQ0FBQztRQUM3QyxxQkFBTSxLQUFLLEdBQVcsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFVLElBQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ25ELFFBQVEsQ0FBQyxNQUFNLEdBQU0sSUFBSSxTQUFJLEtBQUssVUFBSyxPQUFPLEdBQUcsS0FBTyxDQUFDO0tBQzVEOzs7Ozs7SUFFTSxjQUFPOzs7OztJQUFkLFVBQWUsU0FBa0IsRUFBRSxDQUFNOzs7Ozs7OztLQVF4QztpQkExQ0w7SUEyQ0MsQ0FBQTtBQTNDRCxrQkEyQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ29va2llIHtcclxuICAgIC8vIHByaXZhdGUgaXNDb25zZW50ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvLyB0aGlzLmlzQ29uc2VudGVkID0gdGhpcy5nZXRDb29raWUoQ09PS0lFX0NPTlNFTlQpID09PSAnMSc7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldENvb2tpZShuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBjYTogQXJyYXk8c3RyaW5nPiA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjtcIik7XHJcbiAgICAgICAgY29uc3QgY2FMZW46IG51bWJlciA9IGNhLmxlbmd0aDtcclxuICAgICAgICBjb25zdCBjb29raWVOYW1lID0gYCR7bmFtZX09YDtcclxuICAgICAgICBsZXQgYzogc3RyaW5nO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhTGVuOyBpICs9IDEpIHtcclxuICAgICAgICAgICAgYyA9IGNhW2ldLnJlcGxhY2UoL15cXHMrL2csIFwiXCIpO1xyXG4gICAgICAgICAgICBpZiAoYy5pbmRleE9mKGNvb2tpZU5hbWUpID09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjLnN1YnN0cmluZyhjb29raWVOYW1lLmxlbmd0aCwgYy5sZW5ndGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBkZWxldGVDb29raWUobmFtZSkge1xyXG4gICAgICAgIHRoaXMuc2V0Q29va2llKG5hbWUsIFwiXCIsIC0xKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2V0Q29va2llKG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZywgZXhwaXJlRGF5czogbnVtYmVyLCBwYXRoOiBzdHJpbmcgPSBcIlwiKSB7XHJcbiAgICAgICAgY29uc3QgZDogRGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgZC5zZXRUaW1lKGQuZ2V0VGltZSgpICsgZXhwaXJlRGF5cyAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xyXG4gICAgICAgIGNvbnN0IGV4cGlyZXMgPSBgZXhwaXJlcz0ke2QudG9VVENTdHJpbmcoKX1gO1xyXG4gICAgICAgIGNvbnN0IGNwYXRoOiBzdHJpbmcgPSBwYXRoID8gYDsgcGF0aD0ke3BhdGh9YCA6IFwiXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gYCR7bmFtZX09JHt2YWx1ZX07ICR7ZXhwaXJlc30ke2NwYXRofWA7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNvbnNlbnQoaXNDb25zZW50OiBib29sZWFuLCBlOiBhbnkpIHtcclxuICAgICAgICAvLyBpZiAoIWlzQ29uc2VudCkge1xyXG4gICAgICAgIC8vICAgICByZXR1cm4gdGhpcy5pc0NvbnNlbnRlZDtcclxuICAgICAgICAvLyB9IGVsc2UgaWYgKGlzQ29uc2VudCkge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnNldENvb2tpZShDT09LSUVfQ09OU0VOVCwgXCIxXCIsIENPT0tJRV9DT05TRU5UX0VYUElSRV9EQVlTKTtcclxuICAgICAgICAvLyAgICAgdGhpcy5pc0NvbnNlbnRlZCA9IHRydWU7XHJcbiAgICAgICAgLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcbn1cclxuIl19