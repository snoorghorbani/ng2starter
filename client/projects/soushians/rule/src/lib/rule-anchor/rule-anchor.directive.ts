import { Directive, HostListener, ElementRef, Renderer2, OnInit, Input, OnDestroy } from "@angular/core";
import { AppState } from "../rule.reducers";
import { Store } from "@ngrx/store";
import { Observable, of, zip, Subject } from "rxjs";
import { filter, map, switchMap, takeUntil } from "rxjs/operators";
import { MatBottomSheet } from "@angular/material";
import { GwtViewComponent } from "../gwt-view/gwt-view.component";
import { GwtScenarioModel } from "../models/gwt-scenario.model";
import { ScenarioService } from "../services/scenario.service";
import { GwtStepTypes } from "../models/gwt-step-types.enum";
import { GwtStep } from "../models";
import { RuleConfigurationService } from "../services";

@Directive({
	selector: "[ruleAnchor]"
})
export class RuleAnchorDirective implements OnInit, OnDestroy {
	unsubscribe = new Subject<void>();
	@Input("ruleAnchor") anchorId;
	steps: GwtStep[];
	active$: Observable<boolean>;
	active: boolean;
	button: HTMLButtonElement;
	anchorScenarios$: Observable<GwtScenarioModel[]>;
	constructor(
		private scenarioService: ScenarioService,
		private configService: RuleConfigurationService,
		private store: Store<AppState>,
		private el: ElementRef,
		private renderer: Renderer2,
		private bottomSheet: MatBottomSheet
	) {
		this.active$ = this.store.select(s => s.rule.ruleAnchors.active).pipe(takeUntil(this.unsubscribe));
		this.active$.subscribe(active => (this.active = active));
		this.el.nativeElement.classList.add("ngs-rule-anchor");
		this.steps = this.configService.config$.getValue().steps;
	}

	@HostListener("mouseenter")
	onMouseEnter() {
		if (!this.active) return;
		this.showAnchor();
	}

	@HostListener("mouseleave")
	onMouseLeave() {
		if (!this.active) return;
		this.hideAnchor();
	}

	private showAnchor() {
		this.el.nativeElement.classList.add("show-anchor");
	}
	private hideAnchor() {
		this.el.nativeElement.classList.remove("show-anchor");
	}

	ngOnInit() {
		// TODO: remove
		// this.store.dispatch(new ShowAnchorsAction());

		this.anchorScenarios$ = this.scenarioService
			.getAnchorScenarios(this.anchorId) //TODO: replace service call with ngrx action
			.pipe(takeUntil(this.unsubscribe), filter(scenario => scenario != undefined));
		this.active$.subscribe(active => {
			if (active) this._activate_anchor();
			else this._deactivate_anchor();
		});
		this.anchorScenarios$.subscribe(scenarios => {
			scenarios.forEach(scenario => {
				scenario.steps = scenario.steps.map(scenarioStep => {
					const step = this.steps.find(step => step.id == scenarioStep.id);
					step.params = scenarioStep.params;
					return step;
				});

				this._do_scenario(scenario);
			});
		});
	}
	ngOnDestroy() {
		this.unsubscribe.next();
		this.unsubscribe.complete();
	}
	_activate_anchor() {
		this._create_anchor();
		this._set_active_class_to_host();
	}
	_deactivate_anchor() {
		this._remove_anchor();
		this._remove_active_class_to_host();
	}
	_set_active_class_to_host() {
		this.el.nativeElement.classList.add("anchor-active");
	}
	_remove_active_class_to_host() {
		this.el.nativeElement.classList.remove("anchor-active");
	}
	_create_anchor() {
		this.button = this.renderer.createElement("button");
		this.button.classList.add("ngs-rule-anchor-button", "mat-icon-button");
		this.button.setAttribute("mat-icon-button", "");
		this.button.addEventListener("click", e => {
			e.preventDefault();
			e.stopPropagation();
			this.bottomSheet.open(GwtViewComponent, {
				data: {
					anchorId: this.anchorId
				},
				panelClass: "magenta-theme"
			});
		});
		const maticon = this.renderer.createElement("mat-icon");
		maticon.classList.add("mat-icon", "material-icons");
		const icon = this.renderer.createText("settings");
		this.renderer.appendChild(maticon, icon);
		this.renderer.appendChild(this.button, maticon);
		this.renderer.appendChild(this.el.nativeElement, this.button);
	}
	_remove_anchor() {
		if (!this.button) return;
		this.button.parentNode.removeChild(this.button);
	}
	_do_scenario(scenario: GwtScenarioModel) {
		const givenStepInterpretors = scenario.steps
			.filter(step => step.type == GwtStepTypes.Given)
			.map(step => step.interperator(step.params));

		zip
			.apply(null, givenStepInterpretors)
			.pipe(
				takeUntil(this.unsubscribe),
				map((values: boolean[]) => values.every(value => value === true)),
				switchMap(givenResult => {
					if (givenResult) {
						const thenStepInterpretors = scenario.steps
							.filter(step => step.type == GwtStepTypes.Then)
							.map(step => step.interperator(step.params, this.el));
						return zip
							.apply(null, thenStepInterpretors)
							.pipe(map((values: boolean[]) => values.every(value => value === true)));
					} else of(false);
				})
			)
			.subscribe(() => {});
	}
}
