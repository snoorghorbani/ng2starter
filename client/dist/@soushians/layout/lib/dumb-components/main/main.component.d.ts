import { ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { ConfigModel } from '@soushians/config';
import { UserModel } from '@soushians/user';
import { FeatureState } from '../../reducers';
import { LayoutConfigurationService } from '../../services/layout-configuration.service';
import { UserFacadeService } from '@soushians/user';
export declare class NgsLayoutMainComponent {
    private store;
    private router;
    private configService;
    private userFacadeService;
    app_config: ConfigModel<any>;
    mode$: Observable<'visible' | 'invisible'>;
    theme: string;
    user$: Observable<UserModel>;
    displayName$: Observable<string>;
    isFullscreen$: Observable<boolean>;
    progressStatus$: Observable<boolean>;
    showSidebarMenu: BehaviorSubject<boolean>;
    showMainSidenav: Observable<boolean>;
    mainSidenavMode: Observable<'side' | 'over' | 'push'>;
    layoutMode: Observable<'with-margin' | 'without-margin' | 'default'>;
    width: number;
    showSecondSidenav: Observable<boolean>;
    secondSidenavMode: Observable<'side' | 'over' | 'push'>;
    toolbarAnimationState: Observable<string>;
    mainSideNav: ElementRef;
    theme_A: boolean;
    theme_B: boolean;
    constructor(store: Store<FeatureState>, router: Router, configService: LayoutConfigurationService, userFacadeService: UserFacadeService);
    onSecondSidebarClosedStart(): void;
    onSidebarClosedStart(): void;
}
