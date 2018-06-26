import {
	Directive,
	HostBinding,
	HostListener,
	ElementRef,
	Renderer,
	TemplateRef,
	ViewContainerRef,
	Renderer2,
	OnInit,
	Input,
	Injector
} from "@angular/core";
import { AppState } from "../rule.reducers";
import { Store } from "@ngrx/store";
import { Observable, timer, concat, throwError, of, from, zip } from "rxjs";
import { filter, tap, map, switchMap, mapTo, reduce } from "rxjs/operators";
import { MatBottomSheet } from "@angular/material";
import { GwtViewComponent } from "../gwt-view/gwt-view.component";
import { GwtScenarioModel } from "../models/gwt-scenario.model";
import { ScenarioService } from "../services/scenario.service";
import { GwtStepTypes } from "../models/gwt-step-types.enum";
import { ShowAnchorsAction } from "./rule-anchor.actions";

@Directive({
	selector: "[ruleAnchor]"
})
export class RuleAnchorDirective implements OnInit {
	@Input("ruleAnchor") anchorId;
	active$: Observable<boolean>;
	active: boolean;
	button: HTMLButtonElement;
	scenario$: Observable<GwtScenarioModel>;
	constructor(
		private scenarioService: ScenarioService,
		private el: ElementRef,
		private renderer: Renderer2,
		private store: Store<AppState>,
		private bottomSheet: MatBottomSheet
	) {
		this.active$ = this.store.select(s => s.rule.ruleAnchors.active);
		this.active$.subscribe(active => (this.active = active));
		this.el.nativeElement.classList.add("ngs-rule-anchor");
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
		this.store.dispatch(new ShowAnchorsAction());

		this.scenario$ = this.scenarioService
			.selectScenarioById(this.anchorId)
			.pipe(filter(scenario => scenario != undefined));
		this.active$.subscribe(active => {
			if (active) this._activate_anchor();
			else this._deactivate_anchor();
		});
		this.scenario$.subscribe(scenario => {
			this._do_scenario(scenario);
		});
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
			.subscribe(result => {
				debugger;
			});
	}
}
