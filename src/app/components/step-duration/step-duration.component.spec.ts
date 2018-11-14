import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepDurationComponent } from './step-duration.component';

describe('StepDurationComponent', () => {
  let component: StepDurationComponent;
  let fixture: ComponentFixture<StepDurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepDurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepDurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
