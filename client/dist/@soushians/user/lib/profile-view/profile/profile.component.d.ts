import { OnInit } from "@angular/core";
import { UserModel } from "../../models/user.model";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
export declare class ProfileComponent implements OnInit {
    information: UserModel;
    dataStatus$: BehaviorSubject<boolean>;
    info: any[];
    constructor();
    ngOnInit(): void;
}
