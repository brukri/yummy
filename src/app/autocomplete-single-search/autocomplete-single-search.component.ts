import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { switchMap, debounceTime, skipWhile } from 'rxjs/operators';
import { Observable, empty } from 'rxjs';
import { MatAutocompleteSelectedEvent } from '@angular/material';

@Component({
  selector: 'autocomplete-single-search',
  templateUrl: './autocomplete-single-search.component.html',
  styleUrls: ['./autocomplete-single-search.component.css']
})
export class AutocompleteSingleSearchComponent implements OnInit {
  @Input() public placeholder: string;
  @Input() public autocompletionCallback: Function;
  @Output() resultChanged: EventEmitter<string> = new EventEmitter();
  public inputCtrl = new FormControl();
  @ViewChild('inputRef') private inputElement: ElementRef<HTMLInputElement>;

  private filteredTerms: Observable<string[]>;

  constructor() { }

  ngOnInit(): void {
    this.filteredTerms = this.inputCtrl.valueChanges.pipe(
      debounceTime(500),
      skipWhile(value => {
        return value && value.length < 2;
      }),
      switchMap(value => {
        if (value === null) {
          return [];
        }
        return this.autocompletionCallback(value);
      })
     );
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.filteredTerms = empty();
    this.resultChanged.emit(event.option.viewValue);
  }

  enterPressed() {
    this.filteredTerms = empty();
    this.resultChanged.emit(this.inputElement.nativeElement.value);
  }

}
