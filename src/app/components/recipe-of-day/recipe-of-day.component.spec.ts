import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeOfDayComponent } from './recipe-of-day.component';

describe('RecipeOfDayComponent', () => {
  let component: RecipeOfDayComponent;
  let fixture: ComponentFixture<RecipeOfDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeOfDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeOfDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
