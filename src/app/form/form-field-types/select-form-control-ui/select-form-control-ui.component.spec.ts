import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormControlUiComponent } from './form-control-ui.component';

describe('FormControlUiComponent', () => {
  let component: FormControlUiComponent;
  let fixture: ComponentFixture<FormControlUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormControlUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormControlUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
