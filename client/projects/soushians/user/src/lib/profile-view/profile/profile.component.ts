import { Component, OnInit, Input } from '@angular/core';
import { Observable } from "rxjs/Observable";

import { UserModel } from "../../models";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Component({
    selector: 'user-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    @Input() information: Observable<UserModel>;
    @Input() dataStatus$: BehaviorSubject<boolean>;

    sex$ = new BehaviorSubject('');
    identifierType$ = new BehaviorSubject('');
    constructor() {
    }

    ngOnInit() {
        this.information.subscribe(data => {
            if (data == null) return;

        })
    }

}