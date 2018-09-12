import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteSingleSearchComponent } from './autocomplete-single-search.component';

describe('AutocompleteSingleSearchComponent', () => {
  let component: AutocompleteSingleSearchComponent;
  let fixture: ComponentFixture<AutocompleteSingleSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutocompleteSingleSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteSingleSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
