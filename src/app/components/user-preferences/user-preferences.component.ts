import { Component, OnInit, Input } from '@angular/core';
import { UserPreferencesService } from '../../services/user-preferences/user-preferences.service';

export class CheckboxItem {
  label: string;
  checked: boolean;
  constructor(label: string, checked?: boolean) {
   this.label = label;
   this.checked = checked ? checked : false;
  }
}

@Component({
  selector: 'yummy-user-preferences',
  templateUrl: './user-preferences.component.html'
})
export class UserPreferencesComponent implements OnInit {
  @Input() intoleranceOptions = Array<CheckboxItem>();
  @Input() dietOptions = Array<CheckboxItem>();
  numberOfResults: number;
  constructor(private userPreferencesService: UserPreferencesService) { }

  ngOnInit() {
    this.createIntolerances();
    this.createDiets();
    this.loadIntolerances();
    this.loadDiets();
    this.numberOfResults = this.userPreferencesService.getNumberOfResults();
  }

  loadIntolerances() {
    for (const entry of this.userPreferencesService.getIntolerances()) {
      this.intoleranceOptions.filter(e => e.label === entry)[0].checked = true;
    }
  }

  loadDiets() {
    for (const entry of this.userPreferencesService.getDiets()) {
      this.dietOptions.filter(e => e.label === entry)[0].checked = true;
    }
  }

  onToggleIntolerance() {
    this.userPreferencesService.saveIntolerances(this.intoleranceOptions.filter(e => e.checked).map(e => e.label));
  }

  onToggleDiets() {
    this.userPreferencesService.saveDiets(this.dietOptions.filter(e => e.checked).map(e => e.label));
  }

  onNumberOfResultsChange(event) {
    this.userPreferencesService.saveNumberOfResults(event.value);
  }

  createDiets() {
    this.dietOptions = [
      new CheckboxItem('vegetarian', false),
      new CheckboxItem('vegan', false),
      new CheckboxItem('pescetarian', false),
      new CheckboxItem('lacto vegetarian', false),
      new CheckboxItem('ovo vegetarian', false),
      new CheckboxItem('paleo', false),
      new CheckboxItem('primal', false),
    ];
  }

  createIntolerances() {
    this.intoleranceOptions = [
      new CheckboxItem('dairy', false),
      new CheckboxItem('egg', false),
      new CheckboxItem('gluten', false),
      new CheckboxItem('peanut', false),
      new CheckboxItem('sesame', false),
      new CheckboxItem('seafood', false),
      new CheckboxItem('soy', false),
      new CheckboxItem('sulfite', false),
      new CheckboxItem('tree nut', false),
      new CheckboxItem('wheat', false),

    ];
  }


}

