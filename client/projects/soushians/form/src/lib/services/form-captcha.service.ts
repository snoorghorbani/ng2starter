import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { filter, map, take, switchMap } from "rxjs/operators";

import { stringTemplate } from "@soushians/shared";

import { FormSchemaModel, AddFormApiModel, EditFormApiModel, FormListApiModel } from "../models";
import { FormConfigurationService } from "./form-configuration.service";

import { MainContainerState } from "../main-container/main-container.reducers";
import { UpsertCaptchaApiModel } from "../models/captcha.model";

@Injectable({
	providedIn: "root"
})
export class FormCaptchaService {
	constructor(
		private http: HttpClient,
		private store: Store<MainContainerState>,
		private configurationService: FormConfigurationService
	) { }

	getCaptcha(): Observable<any> {
		debugger;
		return this.configurationService.config$.pipe(
			filter((captcha) => captcha.endpoints.captchaUrl != ""),
			take(1),
			switchMap((captcha) =>
				this.http.get(captcha.env.server + captcha.endpoints.captchaUrl)
			),
			map((response: any) => response.Result),
		);
	}
	sendCaptcha(): Observable<FormSchemaModel[]> {
		return this.configurationService.config$.pipe(
			filter((config) => config.endpoints.getList != ""),
			switchMap((config) => this.http.get(config.env.server + config.endpoints.getList)),
			map((response: FormListApiModel.Response) => response.Result)
		);
	}
}
