import { browser, by, element } from 'protractor';
import { ProtractorHelper } from './protractor.helper';

export class YummyPage {
  navigateToYummyAndVerify() {
    browser.get('/');
    expect(browser.getTitle()).toEqual('yummy');
  }

  navigateToSearchByIngredientsPage(selectedIngredients?) {
    const url = '/searchByIngredients' + (selectedIngredients ? '?selectedIngredients=' + selectedIngredients.join(',') : '');
    browser.get(url);
  }

  navigateToRecipeDetailPage(recipeId) {
    browser.get(`/detail/${recipeId}`);
  }

}
