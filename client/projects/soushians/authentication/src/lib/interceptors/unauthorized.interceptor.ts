import { HttpInterceptor } from "@angular/common/http";
import { HttpRequest } from "@angular/common/http";
import { HttpHandler } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { HttpEvent } from "@angular/common/http";
import { HttpResponse } from "@angular/common/http";
import { HttpErrorResponse } from "@angular/common/http";

import { Store } from "@ngrx/store";
import { SignoutAction } from "../actions";
import * as fromAuth from "../reducers";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { of, throwError } from "rxjs";

@Injectable()
export class UnauthorizedInterceptor implements HttpInterceptor {
	constructor(
		private router: Router,
		private store: Store<fromAuth.FeatureState> // private signinService: SigninService
	) {}
	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		return next
			.handle(request)
			.map((event: HttpEvent<any>) => {
				if (event instanceof HttpResponse) return event;
			})
			.catch(err => {
				if (!(err instanceof HttpErrorResponse)) return throwError(err);
				if (err.status != 401) return throwError(err);
				if (err.url.includes("logout")) return throwError(err);

				this.store.dispatch(new SignoutAction());

				return throwError("Unauthorized");
			});
	}
}
