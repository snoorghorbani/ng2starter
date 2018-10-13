import { GwtStep } from "./gwt-step.model";
export declare class GwtScenarioModel {
    _id: string;
    name: string;
    anchorId: string;
    featureId: string;
    steps: GwtStep[];
    constructor({ _id, anchorId, steps, name, featureId }?: {
        _id?: string;
        anchorId?: string;
        steps?: GwtStep[];
        name?: string;
        featureId?: string;
    });
    getRequsetBody(): {
        _id: string;
        anchorId: string;
        name: string;
        featureId: string;
        steps: {
            id: string;
            opposite: boolean;
            params: any;
        }[];
    };
}
