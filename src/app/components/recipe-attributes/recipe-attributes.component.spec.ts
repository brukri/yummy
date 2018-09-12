import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeAttributesComponent } from './recipe-attributes.component';

describe('RecipeAttributesComponent', () => {
  let component: RecipeAttributesComponent;
  let fixture: ComponentFixture<RecipeAttributesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeAttributesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
