import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, OnInit, ViewChild, EventEmitter, Output, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatChipInputEvent } from '@angular/material';
import { Observable } from 'rxjs';
import { debounceTime, switchMap, skipWhile } from 'rxjs/operators';

@Component({
  selector: 'autocomplete-multi-search',
  templateUrl: './autocomplete-multi-search.component.html',
  styleUrls: ['./autocomplete-multi-search.component.css']
})
export class AutocompleteMultiSearchComponent implements OnInit {
  @Input() placeholder: string;
  @Input() autocompletionCallback: Function;
  @Input() preselectedChips: Observable<string[]>;
  @Output() chipListChanged: EventEmitter<string[]> = new EventEmitter();
  @ViewChild('inputRef') ingredientInput: ElementRef<HTMLInputElement>;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = false;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  inputCtrl = new FormControl();
  filteredTerms: Observable<string[]>;
  chips: string[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.initFilteredTerms();
    this.preselectedChips.subscribe(preselectedChips => {
      if (preselectedChips.length !== this.chips.length) {
        this.chips = preselectedChips;
        this.chipListChanged.emit(preselectedChips);
      }
    });
  }

  add(event: MatChipInputEvent): void {
    const {value} = event;

    if (value) {
      this.chips.push(value.trim());
    }

    this.resetState();
  }

  remove(ingredient: string): void {
    const index = this.chips.indexOf(ingredient);

    if (index >= 0) {
      this.chips.splice(index, 1);
    }
    this.chipListChanged.emit(this.chips);
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.chips.push(event.option.viewValue);
    this.ingredientInput.nativeElement.value = '';
    this.resetState();
  }

  private initFilteredTerms() {
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

  private resetState() {
    this.inputCtrl.setValue(null);
    this.chipListChanged.emit(this.chips);
    this.initFilteredTerms();
  }

}
