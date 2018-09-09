import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncredientsComponent } from './incredients.component';

describe('IncredientsComponent', () => {
  let component: IncredientsComponent;
  let fixture: ComponentFixture<IncredientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncredientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncredientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
