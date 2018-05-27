import { Component, ViewChild, AfterViewInit, ElementRef } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { LayoutConfigurationService } from "../../services/layout-configuration.service";

@Component({
	selector: "app-logo-container",
	templateUrl: "./logo-container.component.html",
	styleUrls: [ "./logo-container.component.scss" ]
})
export class LogoContainerComponent {
	toolbarAnimationState: string;

	constructor(private sdf: LayoutConfigurationService) {}
}
