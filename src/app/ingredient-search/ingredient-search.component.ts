import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatChipInputEvent} from '@angular/material';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { SpoonacularService } from '../spoonacular/spoonacular.service';

@Component({
  selector: 'app-ingredient-search',
  templateUrl: './ingredient-search.component.html',
  styleUrls: ['./ingredient-search.component.css']
})
export class IngredientSearchComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = false;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  ingredientCtrl = new FormControl();
  filteredIngredients: Observable<string[]>;
  ingredients: string[] = ['Lemon'];
  allIngredients: string[] = [];

  @ViewChild('ingredientInput') ingredientInput: ElementRef<HTMLInputElement>;

  
  constructor(private spoonacularService:SpoonacularService) {
    
  }
    
  ngOnInit() {
    this.ingredientCtrl.valueChanges.forEach(value => {
      this.updateSuggestions(value);
      console.log(value);
    });
  }

  private updateSuggestions(value) {
    // this.filteredIngredients = this.spoonacularService.autoCompleteIngredient(value, 10).pipe();
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.ingredients.push(value.trim());
    }

    if (input) {
      input.value = '';
    }

    this.ingredientCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.ingredients.indexOf(fruit);

    if (index >= 0) {
      this.ingredients.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    debugger
    this.ingredients.push(event.option.viewValue);
    this.ingredientInput.nativeElement.value = '';
    this.ingredientCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allIngredients.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
  }

}
