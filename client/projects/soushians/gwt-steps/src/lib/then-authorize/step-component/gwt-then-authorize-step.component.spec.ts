import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GwtThenAuthorizeStepComponent } from './gwt-then-authorize-step.component';

describe('GwtThenAuthorizeStepComponent', () => {
  let component: GwtThenAuthorizeStepComponent;
  let fixture: ComponentFixture<GwtThenAuthorizeStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GwtThenAuthorizeStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GwtThenAuthorizeStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
