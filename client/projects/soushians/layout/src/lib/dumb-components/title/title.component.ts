import { Component } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Store } from "@ngrx/store";
import { Location } from "@angular/common";

import { TitleChangedAction } from "../../actions";
import { FeatureState, getTitle } from "../../reducers";
import { Observable } from "rxjs/Observable";
import { Route, Router, NavigationEnd } from "@angular/router";

@Component({
	selector: "app-title",
	templateUrl: "./title.component.html",
	styleUrls: [ "./title.component.scss" ]
})
export class TitleComponent {
	title$: Observable<string>;
	mapper: { (val: NavigationEnd): string }[];

	constructor(private store: Store<FeatureState>, private router: Router) {
		this.mapper = [];
		// this.mapper.push((event: NavigationEnd) => {
		//     return (event.url.endsWith('profile-edit')) ? 'ویرایش اطلاعات کاربری' : null;
		// });
		// this.mapper.push((event: NavigationEnd) => {
		//     return (event.url.endsWith('success-payment-report')) ? 'گزارش پرداخت های موفق' : null;
		// });
		// this.mapper.push((event: NavigationEnd) => {
		//     return (event.url.endsWith('failed-login-report')) ? 'گزارش خطاها' : null;
		// });
		// this.mapper.push((event: NavigationEnd) => {
		//     return (event.url.endsWith('active-session-info')) ? 'جزئیات بسته فعال' : null;
		// });
		// this.mapper.push((event: NavigationEnd) => {
		//     return (event.url.endsWith('session-detail-report')) ? 'جزئیات اتصال' : null;
		// });
		// this.mapper.push((event: NavigationEnd) => {
		//     return (event.url.endsWith('daily-session-report')) ? 'گزارش تجمیعی روزانه' : null;
		// });
		// this.mapper.push((event: NavigationEnd) => {
		//     return (event.url.endsWith('monthly-session-report')) ? 'گزارش تجمیعی ماهانه' : null;
		// });
		// this.mapper.push((event: NavigationEnd) => {
		//     return (event.url.startsWith('/packages/user-packages')) ? 'لیست پکیج ها' : null;
		// });
		// this.mapper.push((event: NavigationEnd) => {
		//     return (event.url.endsWith('/change-password')) ? 'تغییر کلمه عبور' : null;
		// });

		this.title$ = this.store.select(getTitle);

		this.router.events.subscribe(event => {
			if (event instanceof NavigationEnd) {
				var title = "";
				this.mapper.forEach(mapper => {
					let res = mapper(event);
					if (res) {
						title = res;
						return true;
					} else {
						return false;
					}
				});

				this.store.dispatch(new TitleChangedAction("/ " + title || ""));
			}
		});
	}
}
