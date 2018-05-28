import "rxjs/add/operator/do";
import { HttpInterceptor } from "@angular/common/http";
import { HttpRequest } from "@angular/common/http";
import { HttpHandler } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { HttpEvent } from "@angular/common/http";
import { Store } from "@ngrx/store";
import * as fromAuth from "../reducers";
import { Router } from "@angular/router";
export declare class UnauthorizedInterceptor implements HttpInterceptor {
    private router;
    private store;
    constructor(router: Router, store: Store<fromAuth.FeatureState>);
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
}
