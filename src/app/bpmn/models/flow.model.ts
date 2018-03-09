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

export class TransitionModel {
	Name: string;
	FromState: string;
	ToState: string;
	Actions: Actions[];
	constructor() {
		this.Actions = [];
	}
}

export class ParticipantModel {
	ParticipantId: string;
	LaneId: string;
	UserId: string;
}

export class StateModel {
	Name: string;
	Transitions: TransitionModel[];
	bpmnEl: any;
	Participants: ParticipantModel[];
	constructor() {
		this.Transitions = [];
		this.Participants = [];
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
	States: StateModel[];
	Events: EventModel[];
	Gateways: GatewayModel[];
	XML: string;
	constructor(flow?: FlowModel) {
		this.States = [];
		this._id = flow._id;
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
