import { Store } from "@ngrx/store";
import { FeatureState } from "../../reducers";
import { Observable } from 'rxjs/Observable';
import { Router, NavigationEnd } from '@angular/router';
export declare class TitleComponent {
    private store;
    private router;
    title$: Observable<string>;
    mapper: {
        (val: NavigationEnd): string;
    }[];
    constructor(store: Store<FeatureState>, router: Router);
}
