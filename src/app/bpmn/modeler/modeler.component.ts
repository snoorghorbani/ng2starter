import { Component, OnInit, AfterViewInit, EventEmitter, Output, Input } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import {
	FlowModel,
	TaskModel,
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
	private _flow: FlowModel;
	@Input("flow")
	set flow(flow: FlowModel) {
		if (!flow) return;
		this._flow = flow;
		this.modeler.importXML(flow.XML, err => {
			if (!err) {
				this.modeler.get("canvas").zoom(0.8);
			} else {
				console.log("something went wrong:", err);
			}
		});
	}
	get flow() {
		return this._flow;
	}
	@Output() submit = new EventEmitter();
	@Output() elementHover = new EventEmitter();
	@Output() elementOut = new EventEmitter();
	@Output() elementClick = new EventEmitter();
	@Output() elementDblclick = new EventEmitter();
	@Output() elementMousedown = new EventEmitter();
	@Output() elementMouseup = new EventEmitter();
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
	}
	extractFlowModel() {
		var planeEls: MoodleElement[] = this.modeler._definitions.diagrams[0].plane.planeElement;
		this.flow.States = planeEls.filter(el => el.bpmnElement.$type == MoodleTypes.BpmnTask).map(el => {
			var task: TaskModel;
			if ((task = this.flow.States.find(s => s.Id == el.bpmnElement.id))) return task;

			const state = new TaskModel();
			// state.bpmnEl = el;
			state.Id = el.bpmnElement.id;
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
			this.extractFlowModel();
			this.flow.XML = XML;
			this.submit.emit(this.flow);
		});
	}
}
