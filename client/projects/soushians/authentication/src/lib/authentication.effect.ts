//import { Injector, NgModule, Injectable } from "@angular/core"
//import { Action } from '@ngrx/store';
//import { Effect, Actions } from '@ngrx/effects';
//import { Observable } from 'rxjs/Rx';

//import { ACTIONS, AppState, LoginService, LoginModel } from '.';

//@Injectable()
//export class Effects {

//        constructor(
//                private action$: Actions,
//                // private model: LoginModel
//        ) { }

//        @Effect()
//        login$ = this.action$
//                .ofType(ACTIONS.LOGIN)
//                // .switchMap((payload:LoginModel) => {
//                //         return this.model.login(payload);
//                // })
//                .switchMap(() => {
//                        return of({ type: ACTIONS.LOGIN_SUCCESS })
//                })
//                .catch((error) => {
//                        return of({ type: ACTIONS.LOGIN_FAILD })
//                })

//}
