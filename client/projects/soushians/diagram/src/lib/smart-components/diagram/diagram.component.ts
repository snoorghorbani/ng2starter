import { Component, OnInit, Input, AfterViewInit, OnDestroy, Injector } from "@angular/core";
import { Subscription, Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Store } from "@ngrx/store";
import { MatSliderChange } from "@angular/material";
import { ActivatedRoute } from "@angular/router";

import { DiagramService } from "../../services/diagram.service";
import { DiagramModel } from "../../models/diagram.model";
import { FeatureState } from "../../reducers";
import { filter, takeUntil } from "rxjs/operators";

declare var c3: any;

@Component({
	selector: "diagram",
	templateUrl: "./diagram.component.html",
	styleUrls: [ "./diagram.component.scss" ]
})
export class DiagramComponent implements AfterViewInit, OnDestroy {
	unsubscribe = new Subject<void>();
	modelIsCorrect: BehaviorSubject<boolean> = new BehaviorSubject(false);
	_model: DiagramModel;
	@Input()
	set data(value: DiagramModel) {
		if (!(value.Chart && value._id)) return;
		this._model = value;
		this.modelIsCorrect.next(true);
	}
	get data() {
		return this._model;
	}
	dataSubscribtion: Subscription;
	chart: any;
	time: number;
	now: number = Date.now();
	constructor(
		private store: Store<FeatureState>,
		private diagramService: DiagramService,
		private http: HttpClient,
		private injector: Injector,
		private route: ActivatedRoute
	) {
		debugger;
		this.data = this.injector.get("data");

		this.route.params.subscribe(params => {
			const diagramId: string = params["id"];
			// tslint:disable-next-line:no-unused-expression
			diagramId &&
				this.diagramService.getDiagram(diagramId).subscribe(data => {
					console.log(data);
				});
		});
	}
	ngAfterViewInit() {
		// this.dataSubscribtion = IntervalObservable
		//         // .create(this.model.Source.Sync)
		//         .create(999)
		//         .switchMap(i =>
		//                 this.http.get(`http://localhost:3000/api/data`, {
		//                         params: {
		//                                 route: this.model.Source.Route,
		//                                 time: '0'
		//                         }
		//                 })
		//         )
		//         // .switchMap((res: any) => of(res.Result.Data))
		//         .map((res: any) => res.Result.Data)
		this.modelIsCorrect.delay(300).filter(data => data).subscribe(state => {
			this.chart = c3.generate({
				...this.data.Chart,
				bindto: `#diagram_${this.data._id}`
				// size: {
				//         height: 150
				// }
			});
			this.dataSubscribtion = this.diagramService
				.getData(this.data.Source, this.unsubscribe)
				.pipe(filter(data => data != undefined), takeUntil(this.unsubscribe))
				.subscribe(data => {
					this.now = Date.now();
					this.time = data.Time;
					if (this.data.Chart.Flow) {
						this.chart.flow({
							columns: this.diagramService.extract_columns_from_data(
								data.Data,
								this.data.Chart.ColumnMappings
							),
							duration: 1500
						});
					} else {
						this.chart.load({
							columns: this.diagramService.extract_columns_from_data(
								data.Data,
								this.data.Chart.ColumnMappings
							)
						});
					}
				});
		});

		// this.dataSubscribtion = this.diagramService.generateDiagram(
		//         this.model.Chart,
		//         this.model._id,
		//         this.model.Source.Route,
		//         this.model.Source.Sync
		// );
	}
	ngOnDestroy() {
		// this.dataSubscribtion.unsubscribe();
		debugger;
		this.unsubscribe.next();
		this.unsubscribe.complete();
	}
	timeChange(e: MatSliderChange) {
		this.dataSubscribtion.unsubscribe();
		// this.diagramService.getData(this.data.Source, Date.now() - ((1000 - e.value) * this.data.Source.Interval), true)
		this.dataSubscribtion = this.diagramService
			.getData(
				this.data.Source,
				this.unsubscribe,
				Date.now() - (1000 - e.value) * this.data.Source.Interval,
				true
			)
			.subscribe(data => {
				this.time = data.Time;
				this.now = Date.now();
				// const columns = this.diagramService
				//         .extract_columns_from_data(data.Data, this.data.Chart.ColumnMappings)
				//         .map(column => {
				//                 debugger;
				//                 column[0] += '_historic';
				//                 return column;
				//         });
				this.chart.load({
					columns: this.diagramService.extract_columns_from_data(data.Data, this.data.Chart.ColumnMappings)
				});
			});
	}
}
