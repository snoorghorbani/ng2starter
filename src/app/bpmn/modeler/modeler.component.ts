import { Component, OnInit, AfterViewInit, EventEmitter, Output, Input } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import {
	FlowModel,
	StateModel,
	ParticipantModel,
	TransitionModel,
	EventModel,
	GatewayModel
} from "app/bpmn/models/flow.model";
import { MoodleElement, MoodleTypes } from "app/bpmn/models/bpmnjs.interface";
import { BpmnjsEvents } from "../models";

var BpmnViewer = require("bpmn-js");
const BpmnModeler = require("bpmn-js/lib/Modeler.js");

@Component({
	selector: "ngs-bpmn-view",
	templateUrl: "./modeler.component.html",
	styleUrls: [ "./modeler.component.less" ]
})
export class ModelerComponent implements AfterViewInit {
	@Input("flow") flow$: Observable<FlowModel>;
	@Output() submit = new EventEmitter();
	@Output() elementHover = new EventEmitter();
	@Output() elementOut = new EventEmitter();
	@Output() elementClick = new EventEmitter();
	@Output() elementDblclick = new EventEmitter();
	@Output() elementMousedown = new EventEmitter();
	@Output() elementMouseup = new EventEmitter();
	flow: FlowModel;
	modeler;
	constructor() {}
	ngAfterViewInit() {
		this.modeler = new BpmnModeler({
			container: "#canvas"
		});

		/**
         * attach to event bus
         */
		var eventBus = this.modeler.get("eventBus");

		Object.entries(BpmnjsEvents).forEach(event => {
			eventBus.on(event[1], e => {
				this[event[0]].emit(e.element);
			});
		});

		/**
         * 
         */
		this.flow$.subscribe(flow => {
			this.flow = new FlowModel(flow);
			this.modeler.importXML(this.flow.XML, err => {
				debugger;
				if (!err) {
					console.log("success!");
					this.modeler.get("canvas").zoom("fit-viewport");
				} else {
					console.log("something went wrong:", err);
				}
				this.extractFlowModel();
			});
		});
	}
	extractFlowModel() {
		var planeEls: MoodleElement[] = this.modeler._definitions.diagrams[0].plane.planeElement;
		this.flow.States = planeEls.filter(el => el.bpmnElement.$type == MoodleTypes.BpmnTask).map(el => {
			const state = new StateModel();
			// state.bpmnEl = el;
			state.Name = el.bpmnElement.name;
			state.Participants = this.getParticipant(el);
			state.Transitions = this.getTransactions(el);
			return state;
		});

		this.flow.Events = planeEls
			.filter(el => el.bpmnElement.$type == MoodleTypes.BpmnIntermediateCatchEvent)
			.map(el => {
				const event = new EventModel();
				// event.bpmnEl = el;
				event.Name = el.bpmnElement.name;
				event.Participants = this.getParticipant(el);
				event.Transitions = this.getTransactions(el);
				return event;
			});

		this.flow.Gateways = planeEls
			.filter(el => {
				return [
					el.bpmnElement.$type == MoodleTypes.BpmnParallelGateway,
					el.bpmnElement.$type == MoodleTypes.BpmnEventBasedGateway
				].some(state => state);
			})
			.map(el => {
				const gateway = new GatewayModel();
				// gateway.bpmnEl = el;
				gateway.BpmnType = el.$type;
				gateway.Name = el.bpmnElement.name;
				gateway.Participants = this.getParticipant(el);
				gateway.Transitions = this.getTransactions(el);
				return gateway;
			});

		console.log(this.flow);
	}
	getParticipant(el: MoodleElement) {
		if (!el.bpmnElement.lanes) return [];

		return el.bpmnElement.lanes.map(lane => {
			const participant = new ParticipantModel();
			participant.ParticipantId = lane.name;
			participant.LaneId = lane.name;
			return participant;
		});
	}
	getTransactions(el: MoodleElement) {
		if (!el.bpmnElement.outgoing) return [];

		return el.bpmnElement.outgoing.map(outgoing => {
			const transaction = new TransitionModel();
			transaction.Name = outgoing.name;
			transaction.FromState = outgoing.sourceRef.name;
			transaction.ToState = outgoing.targetRef.name;
			return transaction;
		});
	}

	getFlow() {
		this.modeler.saveXML((a: any, XML: string) => {
			this.flow.XML = XML;
			this.submit.emit(this.flow);
		});
	}
}
