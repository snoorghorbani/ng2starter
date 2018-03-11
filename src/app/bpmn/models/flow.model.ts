export enum Actions {
	ACCEPT = "ACCEPT",
	REJECT = "APPROVE",
	SUBMIT = "SUBMIT"
}
export enum BpmnShapesType {
	NONE = "NONE",
	EVENT = "EVENT",
	TASK = "TASK",
	GATEWAY = "GATEWAY"
}
export enum StateType {
	FORM = "FORM",
	NOTIFICATION = "NOTIFICATION"
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
	constructor({ Name = "", FromState = "", ToState = "", Actions = [] } = {}) {
		this.Name = Name;
		this.FromState = FromState;
		this.ToState = ToState;
		this.Actions = Actions;
	}
}

export class ParticipantModel {
	ParticipantId: string;
	LaneId: string;
	UserId: string;
	constructor({ ParticipantId = "", LaneId = "", UserId = "" } = {}) {
		this.ParticipantId = ParticipantId;
		this.LaneId = LaneId;
		this.UserId = UserId;
	}
}

export class TaskModel {
	Id: string;
	Name: string;
	Transitions: TransitionModel[];
	bpmnEl: any;
	Participants: ParticipantModel[];
	Properties?: {
		Type?: StateType;
		FormId?: String;
	};
	constructor({ Id = "", Name = "", Transitions = [], Participants = [], Properties = {} } = {}) {
		this.Id = Id;
		this.Name = Name;
		this.Transitions = Transitions.map(t => new TransitionModel(t));
		this.Participants = Participants.map(p => new ParticipantModel(p));
		this.Properties = Properties;
	}
}

export class EventModel {
	Id: string;
	Name: string;
	shapeType: BpmnShapesType;
	Transitions: TransitionModel[];
	bpmnEl: any;
	Participants: ParticipantModel[];
	constructor({ Id = "", Transitions = [], bpmnEl = {}, Participants = [] } = {}) {
		this.shapeType = BpmnShapesType.EVENT;
		this.Id = Id;
		this.Transitions = Transitions.map(t => new TransitionModel(t));
		this.Participants = Participants.map(p => new ParticipantModel(p));
	}
}

export class GatewayModel {
	Id: string;
	Name: string;
	shapeType: BpmnShapesType;
	BpmnType: string;
	Transitions: TransitionModel[];
	bpmnEl: any;
	Participants: ParticipantModel[];
	constructor({ Id = "", Name = "", shapeType = "", Transitions = [], bpmnEl = {}, Participants = [] } = {}) {
		this.shapeType = BpmnShapesType.GATEWAY;
		this.Id = Id;
		this.Transitions = Transitions.map(t => new TransitionModel(t));
		this.Participants = Participants.map(p => new ParticipantModel(p));
	}
}

export class FlowModel {
	_id: string;
	Name: string;
	States: TaskModel[];
	Events: EventModel[];
	Gateways: GatewayModel[];
	XML: string;
	constructor({ _id = "", Name = "", States = [], Events = [], Gateways = [], XML = initaleXML } = {}) {
		this._id = _id;
		this.Name = Name;
		this.States = States.map(s => new TaskModel(s));
		this.Events = Events.map(e => new EventModel(e));
		this.Gateways = Gateways.map(g => new GatewayModel(g));
		this.XML = XML;
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
