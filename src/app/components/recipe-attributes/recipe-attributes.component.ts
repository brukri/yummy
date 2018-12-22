import { Component, OnInit, Input } from '@angular/core';
import { RecipeAttributes } from '../../services/yummy-data-service/yummy-data.service';


export class AttributeItem {
  label: string;
  checked: boolean;
  constructor(label: string, checked?: boolean) {
   this.label = label;
   this.checked = checked ? checked : false;
  }
}

@Component({
  selector: 'yummy-recipe-attributes',
  templateUrl: './recipe-attributes.component.html',
})


export class RecipeAttributesComponent implements OnInit {
  @Input() recipeAttributes: RecipeAttributes;
  @Input() attributes = Array<AttributeItem>();
  constructor() { }

  ngOnInit() {
    this.createAttributes();
  }

  createAttributes() {
    this.attributes = [
      new AttributeItem('vegetarian', this.recipeAttributes.vegetarian),
      new AttributeItem('vegan', this.recipeAttributes.vegan),
      new AttributeItem('gluten free', this.recipeAttributes.glutenFree),
      new AttributeItem('dairy free', this.recipeAttributes.dairyFree),
      new AttributeItem('very healthy', this.recipeAttributes.veryHealthy)
    ];
    this.attributes.sort(function(x, y) {
      if (x.checked && y.checked) {
        return 0;
      }
      if (x.checked) {
        return -1;
      }
      return 1;
  });
  }


}

