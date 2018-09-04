import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, OnInit, ViewChild, EventEmitter, Output, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatChipInputEvent } from '@angular/material';
import { Observable } from 'rxjs';
import { debounceTime, switchMap, map, startWith, skipWhile} from 'rxjs/operators';
import { SpoonacularService } from '../spoonacular/spoonacular.service';

@Component({
  selector: 'app-ingredient-search',
  templateUrl: './ingredient-search.component.html',
  styleUrls: ['./ingredient-search.component.css']
})
export class IngredientSearchComponent implements OnInit {
  @Input() placeholder : string;
  @Input() autocompletionCallback: Function;
  @Output() ingredientsChangeEvent: EventEmitter<string[]> = new EventEmitter();
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = false;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  ingredientCtrl = new FormControl();
  filteredIngredients: Observable<string[]>;
  ingredients: string[] = [];

  @ViewChild('ingredientInput') ingredientInput: ElementRef<HTMLInputElement>;

  constructor(private spoonacularService:SpoonacularService) {
  }

  ngOnInit(): void {
    this.filteredIngredients = this.ingredientCtrl.valueChanges.pipe(
      debounceTime(1000),
      skipWhile(value => {
        return value && value.length < 2;
      }),
      switchMap(value => {
        if(value===null) {
          return [];
        }
        return this.autocompletionCallback(value);
        //return this.mapCompleteIngredient(value);
      })
     );
  }

  private mapCompleteIngredient(value) : Observable<string[]>{
    return this.spoonacularService.autoCompleteIngredient(value, 5).pipe(
      map(result => {
        return result.map(item => {
          return item.name;
        })
      })
    );
  }

  add(event: MatChipInputEvent): void {
    debugger
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.ingredients.push(value.trim());
    }

    if (input) {
      input.value = '';
    }

    this.ingredientCtrl.setValue(null);
    this.ingredientsChangeEvent.emit(this.ingredients);
  }

  remove(ingredient: string): void {
    const index = this.ingredients.indexOf(ingredient);

    if (index >= 0) {
      this.ingredients.splice(index, 1);
    }
    this.ingredientsChangeEvent.emit(this.ingredients);
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.ingredients.push(event.option.viewValue);
    this.ingredientInput.nativeElement.value = '';
    this.ingredientCtrl.setValue(null);
    this.ingredientsChangeEvent.emit(this.ingredients);
  }

}
