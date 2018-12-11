import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/services/yummy-data-service/yummy-data.service';

@Component({
  selector: 'app-recipe-results',
  templateUrl: './recipe-results.component.html',
  styleUrls: ['./recipe-results.component.css']
})
export class RecipeResultsComponent {

  @Input() recipes: Recipe[];
  @Input() isLoading: boolean;
  @Input() canLoadMore = false;
  @Output() loadMoreButtonPressed: EventEmitter<string> = new EventEmitter();

  get CanShowMore(): boolean {
    return this.canLoadMore && this.recipes && this.recipes.length > 0 && !this.isLoading;
  }

  loadMore() {
    this.loadMoreButtonPressed.emit();
  }

}
