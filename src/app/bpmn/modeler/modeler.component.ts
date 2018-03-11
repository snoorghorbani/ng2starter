import { Component, OnInit, AfterViewInit, EventEmitter, Output, Input } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import {
	BpmnModel,
	TaskModel,
	ParticipantModel,
	FlowModel,
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
	private _flow: BpmnModel;
	@Input("flow")
	set flow(flow: BpmnModel) {
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
	extractBpmnModel() {
		var planeEls: MoodleElement[] = this.modeler._definitions.diagrams[0].plane.planeElement;
		this.flow.States = planeEls.filter(el => el.bpmnElement.$type == MoodleTypes.BpmnTask).map(el => {
			var task: TaskModel = this.flow.States.find(s => s.Id == el.bpmnElement.id);
			if (!task) task = new TaskModel();
			// state.bpmnEl = el;
			task.Id = el.bpmnElement.id;
			task.MoodleType = el.bpmnElement.$type;
			task.Name = el.bpmnElement.name;
			task.Participants = this.getParticipant(el);
			task.Flows = this.updateFlows(el, task.Flows);
			return task;
		});

		this.flow.Events = planeEls
			.filter(el =>
				[
					el.bpmnElement.$type == MoodleTypes.BpmnIntermediateCatchEvent,
					el.bpmnElement.$type == MoodleTypes.BpmnStartEvent
				].some(value => value)
			)
			.map(el => {
				var event: EventModel = this.flow.Events.find(s => s.Id == el.bpmnElement.id);
				if (!event) event = new EventModel();
				// event.bpmnEl = el;
				event.Id = el.bpmnElement.id;
				event.Name = el.bpmnElement.name;
				event.MoodleType = el.bpmnElement.$type;
				event.Participants = this.getParticipant(el);
				event.Flows = this.updateFlows(el, event.Flows);
				return event;
			});

		this.flow.Gateways = planeEls
			.filter(el =>
				[
					el.bpmnElement.$type == MoodleTypes.BpmnParallelGateway,
					el.bpmnElement.$type == MoodleTypes.BpmnExclusiveGateway,
					el.bpmnElement.$type == MoodleTypes.BpmnEventBasedGateway
				].some(state => state)
			)
			.map(el => {
				const gateway = new GatewayModel();
				// gateway.bpmnEl = el;
				gateway.Id = el.bpmnElement.id;
				gateway.MoodleType = el.bpmnElement.$type;
				gateway.Name = el.bpmnElement.name;
				gateway.Participants = this.getParticipant(el);
				gateway.Flows = this.updateFlows(el, gateway.Flows);
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
	updateFlows(el: MoodleElement, flows: FlowModel[]) {
		if (!el.bpmnElement.outgoing) return [];

		return el.bpmnElement.outgoing.map(outgoing => {
			var flow: FlowModel = flows.find(s => s.Id == outgoing.id);
			if (!flow) flow = new FlowModel();
			flow.Name = outgoing.name;
			flow.Id = outgoing.id;
			flow.FromState = outgoing.sourceRef.id;
			flow.ToState = outgoing.targetRef.id;
			return flow;
		});
	}
	updateId(oldId, newId) {
		this.modeler.invoke(function(elementRegistry, modeling) {
			var serviceTaskShape = elementRegistry.get(oldId);

			modeling.updateProperties(serviceTaskShape, {
				id: newId
			});
		});
	}
	getFlow() {
		this.modeler.saveXML((a: any, XML: string) => {
			this.extractBpmnModel();
			this.flow.XML = XML;
			this.submit.emit(this.flow);
		});
	}
}
