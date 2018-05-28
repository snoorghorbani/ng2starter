import { OnInit, ViewContainerRef, ComponentFactoryResolver, Compiler, EventEmitter, OnChanges, OnDestroy } from "@angular/core";
import { FormGroup, AbstractControl } from "@angular/forms";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Subject } from "rxjs";
import { ComponentRef } from "@angular/core/src/linker/component_factory";
import { Store } from "@ngrx/store";
import { FormService } from "../../services/form.service";
import { MainContainerState } from "../../main-container/main-container.reducers";
import { Field, FieldConfig, FormSchemaModel } from "../../models";
export declare class FormViewComponent implements OnDestroy {
    private service;
    private compiler;
    private resolver;
    private store;
    unsubscribe: Subject<void>;
    accept: EventEmitter<FormGroup>;
    cancel: EventEmitter<FormGroup>;
    local: any;
    id: string;
    schema: FormSchemaModel;
    _id: string;
    formGroup: FormGroup;
    formGroupCreated: boolean;
    schema$: BehaviorSubject<FormSchemaModel>;
    constructor(service: FormService, compiler: Compiler, resolver: ComponentFactoryResolver, store: Store<MainContainerState>);
    ngOnDestroy(): void;
    generate(schema: FormSchemaModel): void;
    createFrom(data: FieldConfig, parentPath?: string): AbstractControl;
    accepted(): void;
    canceled(): void;
}
export declare class DynamicFieldDirective implements Field, OnChanges, OnInit {
    private resolver;
    private container;
    config: FieldConfig;
    group: FormGroup;
    component: ComponentRef<Field>;
    constructor(resolver: ComponentFactoryResolver, container: ViewContainerRef);
    ngOnChanges(): void;
    ngOnInit(): void;
}
