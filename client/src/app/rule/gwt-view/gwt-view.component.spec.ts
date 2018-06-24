import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GwtViewComponent } from './gwt-view.component';

describe('GwtViewComponent', () => {
  let component: GwtViewComponent;
  let fixture: ComponentFixture<GwtViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GwtViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GwtViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
