import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, OnInit, ViewChild, EventEmitter, Output, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatChipInputEvent } from '@angular/material';
import { Observable } from 'rxjs';
import { debounceTime, switchMap, skipWhile} from 'rxjs/operators';

@Component({
  selector: 'autocomplete-multi-search',
  templateUrl: './autocomplete-multi-search.component.html',
  styleUrls: ['./autocomplete-multi-search.component.css']
})
export class AutocompleteMultiSearchComponent implements OnInit {
  @Input() placeholder: string;
  @Input() autocompletionCallback: Function;
  @Output() chipListChanged: EventEmitter<string[]> = new EventEmitter();
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = false;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  inputCtrl = new FormControl();
  filteredTerms: Observable<string[]>;
  items: string[] = [];

  @ViewChild('inputRef') ingredientInput: ElementRef<HTMLInputElement>;

  constructor() {
  }

  ngOnInit(): void {
    this.filteredTerms = this.inputCtrl.valueChanges.pipe(
      debounceTime(1000),
      skipWhile(value => {
        return value && value.length < 2;
      }),
      switchMap(value => {
        if(value === null) {
          return [];
        }
        return this.autocompletionCallback(value);
      })
     );
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.items.push(value.trim());
    }

    if (input) {
      input.value = '';
    }

    this.inputCtrl.setValue(null);
    this.chipListChanged.emit(this.items);
  }

  remove(ingredient: string): void {
    const index = this.items.indexOf(ingredient);

    if (index >= 0) {
      this.items.splice(index, 1);
    }
    this.chipListChanged.emit(this.items);
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.items.push(event.option.viewValue);
    this.ingredientInput.nativeElement.value = '';
    this.inputCtrl.setValue(null);
    this.chipListChanged.emit(this.items);
  }

}
