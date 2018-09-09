import { Component, OnInit,Input } from '@angular/core';
import { RecipeAttributes } from '../services/yummy-data-service/yummy-data.service';
import {MAT_CHECKBOX_CLICK_ACTION} from '@angular/material';
@Component({
  selector: 'recipe-attributes',
  templateUrl: './recipe-attributes.component.html',
  styleUrls: ['./recipe-attributes.component.css'],
  providers: [{provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'noop'}]
})


export class RecipeAttributesComponent implements OnInit {
  @Input() recipeAttributes: RecipeAttributes;
  constructor() { }


  ngOnInit() {
  }

}
