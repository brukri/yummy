import { browser, by, element, protractor } from 'protractor';
import { ProtractorHelper } from './protractor.helper';

export class RecipeOverviewPage {
  verifyNoDataFound() {
    const component = ProtractorHelper.getElementByTestSelector('no-data-found-component');
    component.isDisplayed();
  }

  verifyAndGetRecipeCards() {
    const componentList = ProtractorHelper.getElementsByTestSelector('recipe-card-component');
    expect(componentList.count()).toBeGreaterThan(0);
    return componentList;
  }

  verifyRecipeCard(recipeCardElement) {
    ProtractorHelper.getElementByTestSelector('recipe-card-title', recipeCardElement).isDisplayed();
    ProtractorHelper.getElementByTestSelector('recipe-card-likes', recipeCardElement).isDisplayed();
    ProtractorHelper.getElementByTestSelector('recipe-card-img', recipeCardElement).isDisplayed();
  }

}
