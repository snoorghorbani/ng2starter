import "rxjs/add/operator/do";
import { Injectable } from "@angular/core";
import { HttpInterceptor } from "@angular/common/http";
import { HttpRequest } from "@angular/common/http";
import { HttpHandler } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { HttpEvent } from "@angular/common/http";
import { HttpResponse } from "@angular/common/http";
import { FrontendAuthenticationConfigurationService } from "../services/frontend-authentication-configuration.service";
// import { environment } from "../../../environments/environment";

@Injectable()
export class WithCredentialInterceptor implements HttpInterceptor {
	constructor(private configurationService: FrontendAuthenticationConfigurationService) {}
	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		// if (!this.configurationService.config.env.production)
		(request as any).withCredentials = true;
		return next.handle(request);
	}
}
