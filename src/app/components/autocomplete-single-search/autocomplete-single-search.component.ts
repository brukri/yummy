import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { switchMap, debounceTime, skipWhile } from 'rxjs/operators';
import { Observable} from 'rxjs';
import { MatAutocompleteSelectedEvent } from '@angular/material';

@Component({
  selector: 'autocomplete-single-search',
  templateUrl: './autocomplete-single-search.component.html',
  styleUrls: ['./autocomplete-single-search.component.css']
})
export class AutocompleteSingleSearchComponent implements OnInit {
  @Input() placeholder: string;
  @Input() autocompletionCallback: Function;
  @Input() preselectedValue: Observable<string>;
  @Output() resultChanged: EventEmitter<string> = new EventEmitter();
  @ViewChild('inputRef') private inputElement: ElementRef<HTMLInputElement>;
  inputCtrl = new FormControl();
  filteredTerms: Observable<string[]>;

  constructor() { }

  ngOnInit(): void {
    this.initFilteredTerms();
    this.initPreselectedValue();
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.resultChanged.emit(event.option.viewValue);
    this.initFilteredTerms();
  }

  enterPressed() {
    this.resultChanged.emit(this.inputElement.nativeElement.value);
    this.initFilteredTerms();
  }

  private initPreselectedValue() {
    this.preselectedValue.subscribe(preselectedValue => {
      if ((preselectedValue || '') !== this.inputElement.nativeElement.value) {
        this.inputCtrl.setValue(preselectedValue);
        this.resultChanged.emit(preselectedValue);
      }
    });
  }

  initFilteredTerms() {
    this.filteredTerms = this.inputCtrl.valueChanges.pipe(
      debounceTime(500),
      skipWhile(value => {
        return value && value.length < 2;
      }),
      switchMap(value => {
        if (!value) {
          return [];
        }
        return this.autocompletionCallback(value);
      })
     );
  }

}
