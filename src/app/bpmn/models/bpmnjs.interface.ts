export enum MoodleTypes {
	BpmnParticipant = "bpmn:Participant",
	BpmnSequenceFlow = "bpmn:SequenceFlow",
	BpmnTask = "bpmn:Task",
	BpmnLane = "bpmn:Lane",
	BpmnIntermediateCatchEvent = "bpmn:IntermediateCatchEvent",
	BpmnParallelGateway = "bpmn:ParallelGateway",
	BpmnEventBasedGateway = "bpmn:EventBasedGateway",
	BpmnDiParticipant = "bpmndi:BPMNShape"
}
export interface MoodleElement {
	$type: MoodleTypes;
	isHorizontal: boolean;
	id: string;
	bounds: {
		$type: string;
		height: number;
		width: number;
		x: number;
		y: number;
	};
	label: {
		$type: MoodleTypes;
	};
	$parent: {
		$type: MoodleTypes;
		name: string;
		id: string;
	};
	bpmnElement: {
		id: string;
		$type: MoodleTypes;
		name: string;
		completionQuantity: number;
		isForCompensation: boolean;
		startQuantity: number;
		lanes: {
			id: string;
			$type: MoodleTypes;
			name: string;
		}[];
		outgoing: {
			id: string;
			$type: MoodleTypes;
			name: string;
			sourceRef: {
				id: string;
				name: string;
			};
			targetRef: {
				id: string;
				name: string;
			};
		}[];
	};
}
