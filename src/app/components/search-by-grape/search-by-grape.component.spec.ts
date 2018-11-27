import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByGrapeComponent } from './search-by-grape.component';

describe('SearchByGrapeComponent', () => {
  let component: SearchByGrapeComponent;
  let fixture: ComponentFixture<SearchByGrapeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchByGrapeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByGrapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
