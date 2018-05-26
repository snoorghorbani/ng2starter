import { ActivatedRoute } from "@angular/router";
import { FormGroup } from "@angular/forms";
import { Store } from "@ngrx/store";
import { MainContainerState } from "../../main-container/main-container.reducers";
import { FormService } from "../../services/form.service";
import { AddFormContainerComponent } from "../../add/add-form-container";
export declare class EditFormContainerComponent extends AddFormContainerComponent {
    service: FormService;
    private route;
    store: Store<MainContainerState>;
    formGroup: FormGroup;
    constructor(service: FormService, route: ActivatedRoute, store: Store<MainContainerState>);
    ngOnInit(): void;
    update(data: any): void;
}
