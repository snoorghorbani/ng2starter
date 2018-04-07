import { MoodleTypes } from "./bpmnjs.interface";

export enum FlowStatus {
	START = "START",
	IN_PROGRESS = "IN_PROGRESS",
	FINISHED = "FINISHED"
}
export enum ActionTypes {
	ACCEPT = "ACCEPT",
	REJECT = "REJECT",
	SUBMIT = "SUBMIT",
	EXP = "EXP"
}
export enum BpmnShapesType {
	NONE = "NONE",
	EVENT = "EVENT",
	TASK = "TASK",
	GATEWAY = "GATEWAY",
	SEQUENCE_FLOW = "SEQUENCE_FLOW"
}
export enum EventTypes {
	START = "START",
	END = "END"
}
export enum TaskTypes {
	FORM = "FORM",
	CONFIRM = "CONFIRM",
	NOTIFICATION = "NOTIFICATION"
}
export enum GatewayTypes {
	CONFIRM = "CONFIRM"
}
export type BpmElementTypes = EventTypes | TaskTypes | GatewayTypes;
export class BpmnElement {
	Id: string;
	Name: string;
	MoodleType: MoodleTypes;
	Flows: FlowModel[];
	Participants: ParticipantModel[];
	Properties?: {
		Type?: TaskTypes | GatewayTypes | EventTypes;
	};
	constructor({ Id = "", Name = "", MoodleType = MoodleTypes.None, Flows = [], Participants = [], Properties = {} }) {
		this.Id = Id;
		this.Name = Name;
		this.Flows = Flows.map(t => new FlowModel(t));
		this.Participants = Participants.map(p => new ParticipantModel(p));
		this.Properties = Properties;
	}
}
export class FormStateParams {
	FormId: string;
	constructor() {}
}

export class FlowModel {
	Id: string;
	MoodleType: MoodleTypes;
	Name: string;
	FromState: string;
	ToState: string;
	Action: ActionTypes;
	traversed: boolean;
	constructor(
		{
			Id = "",
			Name = "",
			FromState = "",
			ToState = "",
			Action = ActionTypes.ACCEPT,
			MoodleType = MoodleTypes.None,
			Properties = {}
		} = {}
	) {
		this.Id = Id;
		this.Name = Name;
		this.MoodleType = MoodleType;
		this.FromState = FromState;
		this.ToState = ToState;
		this.Action = Action;
	}
	traverse() {
		// debugger;
		this.traversed = true;
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

export class TaskModel extends BpmnElement {
	bpmnEl: any;
	ShapeType: BpmnShapesType;
	Properties?: {
		Type?: TaskTypes;
		FormId?: String;
	};
	constructor(
		{ Id = "", MoodleType = MoodleTypes.None, Name = "", Flows = [], Participants = [], Properties = {} } = {}
	) {
		super({ Id, Name, MoodleType, Flows, Participants, Properties });
		this.ShapeType = BpmnShapesType.TASK;
	}
}

export class EventModel extends BpmnElement {
	ShapeType: BpmnShapesType;
	MoodleType: MoodleTypes;
	Flows: FlowModel[];
	bpmnEl: any;
	Participants: ParticipantModel[];
	Properties?: {
		Type?: EventTypes;
		FormId?: String;
	};
	constructor(
		{
			Id = "",
			Name = "",
			MoodleType = MoodleTypes.None,
			Flows = [],
			bpmnEl = {},
			Participants = [],
			Properties = {}
		} = {}
	) {
		super({ Id, Name, MoodleType, Flows, Participants, Properties });
		this.ShapeType = BpmnShapesType.EVENT;
		this.MoodleType = MoodleType;
		this.Flows = Flows.map(t => new FlowModel(t));
		this.Participants = Participants.map(p => new ParticipantModel(p));
		this.Properties = Properties;
	}
}

export class GatewayModel extends BpmnElement {
	Id: string;
	Name: string;
	shapeType: BpmnShapesType;
	MoodleType: MoodleTypes;
	Flows: FlowModel[];
	bpmnEl: any;
	Participants: ParticipantModel[];
	Properties?: {
		Type?: GatewayTypes;
		FormId?: String;
	};
	constructor(
		{
			Id = "",
			MoodleType = MoodleTypes.None,
			Name = "",
			shapeType = "",
			Flows = [],
			bpmnEl = {},
			Participants = [],
			Properties = {}
		} = {}
	) {
		super({ Id, Name, MoodleType, Flows, Participants, Properties });
		this.shapeType = BpmnShapesType.GATEWAY;
		this.MoodleType = MoodleType;
		this.Flows = Flows.map(t => new FlowModel(t));
		this.Participants = Participants.map(p => new ParticipantModel(p));
		this.Properties = Properties;
	}
}

export class ProcessModel {
	_id: string;
	Name: string;
	ActiveStateId: string; //current state Id
	Status: FlowStatus; //current state Id
	Tasks: TaskModel[];
	Events: EventModel[];
	Gateways: GatewayModel[];
	XML: string;
	constructor(
		{
			_id = "",
			Name = "",
			Status = FlowStatus.START,
			ActiveStateId = "",
			Tasks = [],
			Events = [],
			Gateways = [],
			XML = initaleXML
		} = {}
	) {
		this._id = _id;
		this.Name = Name;
		this.Status = Status;
		this.Tasks = Tasks.map(s => new TaskModel(s));
		this.Events = Events.map(e => new EventModel(e));
		this.Gateways = Gateways.map(g => new GatewayModel(g));
		this.ActiveStateId =
			ActiveStateId || (this.Events.find(i => i.MoodleType == MoodleTypes.BpmnStartEvent) || ({} as any)).Id;
		this.XML = XML;
	}
	start() {
		return this.Events.find(i => i.MoodleType == MoodleTypes.BpmnStartEvent);
	}
	get currentState(): BpmnElement {
		// debugger;
		return [ ...this.Tasks, ...this.Events, ...this.Gateways ].find(i => i.Id == this.ActiveStateId);
	}
	update(State: TaskModel | GatewayModel | EventModel) {
		// TODO
		debugger;
		this.currentState.Flows;
		return "";
	}
	traverse(flows: FlowModel[]) {
		debugger;
		// TODO
		flows.forEach(flow => {
			this.ActiveStateId = [ ...this.Tasks, ...this.Events, ...this.Gateways ].find(i => i.Id == flow.ToState).Id;
		});
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
