import { Observable } from "rxjs/Observable";
import { Actions } from "@ngrx/effects";
import { ConfigLoadedSucceedAction, ConfigLoadedFailedAction } from "../actions";
import { ConfigService } from "../services/config.service";
export declare class LoadConfigEffects {
    private actions$;
    private configService;
    constructor(actions$: Actions<any>, configService: ConfigService);
    getConfigs$: Observable<ConfigLoadedSucceedAction | ConfigLoadedFailedAction>;
}
