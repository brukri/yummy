import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByRecipeComponent } from './search-by-recipe.component';

describe('SearchByRecipeComponent', () => {
  let component: SearchByRecipeComponent;
  let fixture: ComponentFixture<SearchByRecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchByRecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
