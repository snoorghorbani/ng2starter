export enum Actions {
	ACCEPT = "ACCEPT",
	REJECT = "APPROVE",
	SUBMIT = "SUBMIT"
}
export enum BpmnShapesType {
	EVENT = "EVENT",
	TASK = "TASK",
	GATEWAY = "GATEWAY"
}
export enum StateType {
	FORM = "FORM"
}
export enum GatewayType {
	CONFIRM = "CONFIRM"
}

export class FormStateParams {
	FormId: string;
	constructor() {}
}

export class TransitionModel {
	Name: string;
	FromState: string;
	ToState: string;
	Actions: Actions[];
	constructor(init: TransitionModel = {} as TransitionModel) {
		this.Name = init.Name || "";
		this.FromState = init.FromState || "";
		this.ToState = init.ToState || "";
		this.Actions = init.Actions || [];
	}
}

export class ParticipantModel {
	ParticipantId: string;
	LaneId: string;
	UserId: string;
	constructor(init: ParticipantModel) {
		this.ParticipantId = init.ParticipantId || "";
		this.LaneId = init.LaneId || "";
		this.UserId = init.UserId || "";
	}
}

export class TaskModel {
	Id: string;
	Name: string;
	Transitions: TransitionModel[];
	bpmnEl: any;
	Participants: ParticipantModel[];
	properties?: {
		Type?: StateType;
		fields?: FormStateParams;
	};
	constructor(init: TaskModel = {} as TaskModel) {
		this.Id = init.Id || "";
		this.Name = init.Name || "";
		this.Transitions = init.Transitions.map(t => new TransitionModel(t)) || [];
		this.Participants = init.Participants.map(p => new ParticipantModel(p)) || [];
		this.properties = init.properties || {};
	}
}

export class EventModel {
	Name: string;
	shapeType: BpmnShapesType;
	Transitions: TransitionModel[];
	bpmnEl: any;
	Participants: ParticipantModel[];
	constructor() {
		this.shapeType = BpmnShapesType.EVENT;
		this.Transitions = [];
		this.Participants = [];
	}
}

export class GatewayModel {
	Name: string;
	shapeType: BpmnShapesType;
	BpmnType: string;
	Transitions: TransitionModel[];
	bpmnEl: any;
	Participants: ParticipantModel[];
	constructor() {
		this.shapeType = BpmnShapesType.GATEWAY;
		this.Transitions = [];
		this.Participants = [];
	}
}

export class FlowModel {
	_id: string;
	Name: string;
	States: TaskModel[];
	Events: EventModel[];
	Gateways: GatewayModel[];
	XML: string;
	constructor(flow: FlowModel = {} as FlowModel) {
		this._id = flow._id;
		this.Name = flow.Name;
		this.States = flow.States.map(s => new TaskModel(s)) || [];
		this.Events = flow.Events || [];
		this.Gateways = flow.Gateways || [];
		this.XML = flow.XML || initaleXML;
	}
}

const initaleXML = `
<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" id="Definitions_1" targetNamespace="http://bpmn.io/schema/bpmn">
  <bpmn:process id="Process_1" isExecutable="false">
    <bpmn:startEvent id="StartEvent_1" />
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1">
      <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">
        <dc:Bounds x="193" y="327" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="166" y="363" width="90" height="20" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>
`;
