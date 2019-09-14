import { OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import { UserModel } from "../../models/user.model";
export declare class DashboardContainerComponent implements OnInit {
    private store;
    user$: Observable<UserModel>;
    constructor(store: Store<any>);
    ngOnInit(): void;
}
