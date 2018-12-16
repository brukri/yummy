import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteMultiSearchComponent } from './autocomplete-multi-search.component';

describe('AutocompleteSearchComponent', () => {
  let component: AutocompleteMultiSearchComponent;
  let fixture: ComponentFixture<AutocompleteMultiSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutocompleteMultiSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteMultiSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
