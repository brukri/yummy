import { Component, OnInit,Input } from '@angular/core';
import { UserPreferencesService } from '../../services/user-preferences/user-preferences.service';


@Component({
  selector: 'app-user-preferences',
  templateUrl: './user-preferences.component.html',
  styleUrls: ['./user-preferences.component.css']
})
export class UserPreferencesComponent implements OnInit {
  @Input() intoleranceOptions = Array<CheckboxItem>();
  constructor(private userPreferencesService: UserPreferencesService) { }

  ngOnInit() {
    this.setIntolerances();
    this.loadIntolerances();

  }

  loadIntolerances() {
    for (const entry of this.userPreferencesService.getIntolerances()) {
      this.intoleranceOptions.filter(e => e.label === entry)[0].checked = true;
    }
  }

  onToggle()
  {
    this.userPreferencesService.saveIntolerances(this.intoleranceOptions.filter(e => e.checked).map(e => e.label));
  }

  setIntolerances() {
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
export class CheckboxItem {
  label: string;
  checked: boolean;
  constructor(label: string, checked?: boolean) {
   this.label = label;
   this.checked = checked ? checked : false;
  }
}
