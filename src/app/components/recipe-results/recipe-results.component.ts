import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/services/yummy-data-service/yummy-data.service';

@Component({
  selector: 'yummy-recipe-results',
  templateUrl: './recipe-results.component.html'
})
export class RecipeResultsComponent {

  @Input() recipes: Recipe[];
  @Input() canLoadMore = false;
  @Input() isLoading: boolean;
  @Input() totalResults = 0;
  @Output() loadMoreButtonPressed: EventEmitter<string> = new EventEmitter();

  get CanShowMore(): boolean {
    return this.canLoadMore && this.HasResults && this.recipes.length < this.totalResults && !this.isLoading;
  }

  get HasResults(): boolean {
    return this.recipes && this.recipes.length > 0;
  }

  loadMore() {
    this.loadMoreButtonPressed.emit();
  }

}
