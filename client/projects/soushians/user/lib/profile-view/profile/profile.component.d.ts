import { OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { UserModel } from "../../models";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
export declare class ProfileComponent implements OnInit {
    information: Observable<UserModel>;
    dataStatus$: BehaviorSubject<boolean>;
    sex$: BehaviorSubject<string>;
    identifierType$: BehaviorSubject<string>;
    constructor();
    ngOnInit(): void;
}
