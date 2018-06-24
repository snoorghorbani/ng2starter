import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationGwtStepComponent } from './operation-gwt-step.component';

describe('OperationGwtStepComponent', () => {
  let component: OperationGwtStepComponent;
  let fixture: ComponentFixture<OperationGwtStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationGwtStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationGwtStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
