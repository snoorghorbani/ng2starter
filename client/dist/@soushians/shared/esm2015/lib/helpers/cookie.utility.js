/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
        const /** @type {?} */ ca = document.cookie.split(";");
        const /** @type {?} */ caLen = ca.length;
        const /** @type {?} */ cookieName = `${name}=`;
        let /** @type {?} */ c;
        for (let /** @type {?} */ i = 0; i < caLen; i += 1) {
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
        const /** @type {?} */ d = new Date();
        d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
        const /** @type {?} */ expires = `expires=${d.toUTCString()}`;
        const /** @type {?} */ cpath = path ? `; path=${path}` : "";
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29va2llLnV0aWxpdHkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac291c2hpYW5zL3NoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9oZWxwZXJzL2Nvb2tpZS51dGlsaXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNO0lBR0Y7O0tBRUM7Ozs7O0lBRUQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFZO1FBQ3pCLHVCQUFNLEVBQUUsR0FBa0IsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckQsdUJBQU0sS0FBSyxHQUFXLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFDaEMsdUJBQU0sVUFBVSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUM7UUFDOUIscUJBQUksQ0FBUyxDQUFDO1FBRWQsR0FBRyxDQUFDLENBQUMscUJBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUNoQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDL0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM3QixNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNuRDtTQUNKO1FBQ0QsTUFBTSxDQUFDLEVBQUUsQ0FBQztLQUNiOzs7OztJQUVELE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSTtRQUNwQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNoQzs7Ozs7Ozs7SUFFRCxNQUFNLENBQUMsU0FBUyxDQUFDLElBQVksRUFBRSxLQUFhLEVBQUUsVUFBa0IsRUFBRSxPQUFlLEVBQUU7UUFDL0UsdUJBQU0sQ0FBQyxHQUFTLElBQUksSUFBSSxFQUFFLENBQUM7UUFDM0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLEdBQUcsVUFBVSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQzFELHVCQUFNLE9BQU8sR0FBRyxXQUFXLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDO1FBQzdDLHVCQUFNLEtBQUssR0FBVyxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNuRCxRQUFRLENBQUMsTUFBTSxHQUFHLEdBQUcsSUFBSSxJQUFJLEtBQUssS0FBSyxPQUFPLEdBQUcsS0FBSyxFQUFFLENBQUM7S0FDNUQ7Ozs7OztJQUVELE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBa0IsRUFBRSxDQUFNOzs7Ozs7OztLQVF4QztDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIENvb2tpZSB7XHJcbiAgICAvLyBwcml2YXRlIGlzQ29uc2VudGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5pc0NvbnNlbnRlZCA9IHRoaXMuZ2V0Q29va2llKENPT0tJRV9DT05TRU5UKSA9PT0gJzEnO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRDb29raWUobmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgY2E6IEFycmF5PHN0cmluZz4gPSBkb2N1bWVudC5jb29raWUuc3BsaXQoXCI7XCIpO1xyXG4gICAgICAgIGNvbnN0IGNhTGVuOiBudW1iZXIgPSBjYS5sZW5ndGg7XHJcbiAgICAgICAgY29uc3QgY29va2llTmFtZSA9IGAke25hbWV9PWA7XHJcbiAgICAgICAgbGV0IGM6IHN0cmluZztcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYUxlbjsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgIGMgPSBjYVtpXS5yZXBsYWNlKC9eXFxzKy9nLCBcIlwiKTtcclxuICAgICAgICAgICAgaWYgKGMuaW5kZXhPZihjb29raWVOYW1lKSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYy5zdWJzdHJpbmcoY29va2llTmFtZS5sZW5ndGgsIGMubGVuZ3RoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZGVsZXRlQ29va2llKG5hbWUpIHtcclxuICAgICAgICB0aGlzLnNldENvb2tpZShuYW1lLCBcIlwiLCAtMSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNldENvb2tpZShuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIGV4cGlyZURheXM6IG51bWJlciwgcGF0aDogc3RyaW5nID0gXCJcIikge1xyXG4gICAgICAgIGNvbnN0IGQ6IERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGQuc2V0VGltZShkLmdldFRpbWUoKSArIGV4cGlyZURheXMgKiAyNCAqIDYwICogNjAgKiAxMDAwKTtcclxuICAgICAgICBjb25zdCBleHBpcmVzID0gYGV4cGlyZXM9JHtkLnRvVVRDU3RyaW5nKCl9YDtcclxuICAgICAgICBjb25zdCBjcGF0aDogc3RyaW5nID0gcGF0aCA/IGA7IHBhdGg9JHtwYXRofWAgOiBcIlwiO1xyXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGAke25hbWV9PSR7dmFsdWV9OyAke2V4cGlyZXN9JHtjcGF0aH1gO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjb25zZW50KGlzQ29uc2VudDogYm9vbGVhbiwgZTogYW55KSB7XHJcbiAgICAgICAgLy8gaWYgKCFpc0NvbnNlbnQpIHtcclxuICAgICAgICAvLyAgICAgcmV0dXJuIHRoaXMuaXNDb25zZW50ZWQ7XHJcbiAgICAgICAgLy8gfSBlbHNlIGlmIChpc0NvbnNlbnQpIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5zZXRDb29raWUoQ09PS0lFX0NPTlNFTlQsIFwiMVwiLCBDT09LSUVfQ09OU0VOVF9FWFBJUkVfREFZUyk7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuaXNDb25zZW50ZWQgPSB0cnVlO1xyXG4gICAgICAgIC8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==