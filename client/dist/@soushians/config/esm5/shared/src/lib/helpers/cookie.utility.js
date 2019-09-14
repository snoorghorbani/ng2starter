/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29va2llLnV0aWxpdHkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL2NvbmZpZy8iLCJzb3VyY2VzIjpbInNoYXJlZC9zcmMvbGliL2hlbHBlcnMvY29va2llLnV0aWxpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0lBQ0ksd0NBQXdDO0lBRXhDO1FBQ0ksNkRBQTZEO0lBQ2pFLENBQUM7Ozs7O0lBRU0sZ0JBQVM7Ozs7SUFBaEIsVUFBaUIsSUFBWTs7WUFDbkIsRUFBRSxHQUFrQixRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7O1lBQzlDLEtBQUssR0FBVyxFQUFFLENBQUMsTUFBTTs7WUFDekIsVUFBVSxHQUFNLElBQUksTUFBRzs7WUFDekIsQ0FBUztRQUViLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUMvQixDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDNUIsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ25EO1NBQ0o7UUFDRCxPQUFPLEVBQUUsQ0FBQztJQUNkLENBQUM7Ozs7O0lBRU0sbUJBQVk7Ozs7SUFBbkIsVUFBb0IsSUFBSTtRQUNwQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7Ozs7OztJQUVNLGdCQUFTOzs7Ozs7O0lBQWhCLFVBQWlCLElBQVksRUFBRSxLQUFhLEVBQUUsVUFBa0IsRUFBRSxJQUFpQjtRQUFqQixxQkFBQSxFQUFBLFNBQWlCOztZQUN6RSxDQUFDLEdBQVMsSUFBSSxJQUFJLEVBQUU7UUFDMUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLEdBQUcsVUFBVSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDOztZQUNwRCxPQUFPLEdBQUcsYUFBVyxDQUFDLENBQUMsV0FBVyxFQUFJOztZQUN0QyxLQUFLLEdBQVcsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFVLElBQU0sQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNsRCxRQUFRLENBQUMsTUFBTSxHQUFNLElBQUksU0FBSSxLQUFLLFVBQUssT0FBTyxHQUFHLEtBQU8sQ0FBQztJQUM3RCxDQUFDOzs7Ozs7SUFFTSxjQUFPOzs7OztJQUFkLFVBQWUsU0FBa0IsRUFBRSxDQUFNO1FBQ3JDLG9CQUFvQjtRQUNwQiwrQkFBK0I7UUFDL0IsMEJBQTBCO1FBQzFCLHVFQUF1RTtRQUN2RSwrQkFBK0I7UUFDL0IsMEJBQTBCO1FBQzFCLElBQUk7SUFDUixDQUFDO0lBQ0wsYUFBQztBQUFELENBQUMsQUEzQ0QsSUEyQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ29va2llIHtcclxuICAgIC8vIHByaXZhdGUgaXNDb25zZW50ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvLyB0aGlzLmlzQ29uc2VudGVkID0gdGhpcy5nZXRDb29raWUoQ09PS0lFX0NPTlNFTlQpID09PSAnMSc7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldENvb2tpZShuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBjYTogQXJyYXk8c3RyaW5nPiA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjtcIik7XHJcbiAgICAgICAgY29uc3QgY2FMZW46IG51bWJlciA9IGNhLmxlbmd0aDtcclxuICAgICAgICBjb25zdCBjb29raWVOYW1lID0gYCR7bmFtZX09YDtcclxuICAgICAgICBsZXQgYzogc3RyaW5nO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhTGVuOyBpICs9IDEpIHtcclxuICAgICAgICAgICAgYyA9IGNhW2ldLnJlcGxhY2UoL15cXHMrL2csIFwiXCIpO1xyXG4gICAgICAgICAgICBpZiAoYy5pbmRleE9mKGNvb2tpZU5hbWUpID09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjLnN1YnN0cmluZyhjb29raWVOYW1lLmxlbmd0aCwgYy5sZW5ndGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBkZWxldGVDb29raWUobmFtZSkge1xyXG4gICAgICAgIHRoaXMuc2V0Q29va2llKG5hbWUsIFwiXCIsIC0xKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2V0Q29va2llKG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZywgZXhwaXJlRGF5czogbnVtYmVyLCBwYXRoOiBzdHJpbmcgPSBcIlwiKSB7XHJcbiAgICAgICAgY29uc3QgZDogRGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgZC5zZXRUaW1lKGQuZ2V0VGltZSgpICsgZXhwaXJlRGF5cyAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xyXG4gICAgICAgIGNvbnN0IGV4cGlyZXMgPSBgZXhwaXJlcz0ke2QudG9VVENTdHJpbmcoKX1gO1xyXG4gICAgICAgIGNvbnN0IGNwYXRoOiBzdHJpbmcgPSBwYXRoID8gYDsgcGF0aD0ke3BhdGh9YCA6IFwiXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gYCR7bmFtZX09JHt2YWx1ZX07ICR7ZXhwaXJlc30ke2NwYXRofWA7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNvbnNlbnQoaXNDb25zZW50OiBib29sZWFuLCBlOiBhbnkpIHtcclxuICAgICAgICAvLyBpZiAoIWlzQ29uc2VudCkge1xyXG4gICAgICAgIC8vICAgICByZXR1cm4gdGhpcy5pc0NvbnNlbnRlZDtcclxuICAgICAgICAvLyB9IGVsc2UgaWYgKGlzQ29uc2VudCkge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnNldENvb2tpZShDT09LSUVfQ09OU0VOVCwgXCIxXCIsIENPT0tJRV9DT05TRU5UX0VYUElSRV9EQVlTKTtcclxuICAgICAgICAvLyAgICAgdGhpcy5pc0NvbnNlbnRlZCA9IHRydWU7XHJcbiAgICAgICAgLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcbn1cclxuIl19