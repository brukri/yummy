import { browser, by, element, protractor } from 'protractor';
import { ProtractorHelper } from './protractor.helper';

export class RecipeDetailPage {
  verifyAndGetRecipeDetail() {
    const component = ProtractorHelper.getElementByTestSelector('recipe-detail-component');
    component.isDisplayed();
    return component;
  }

  verifyRecipeDetailSubcomponents(recipeDetailComponent) {
    ProtractorHelper.getElementByTestSelector('recipe-detail-title', recipeDetailComponent).isDisplayed();
    ProtractorHelper.getElementByTestSelector('recipe-detail-ingredients-list', recipeDetailComponent).isDisplayed();
    ProtractorHelper.getElementByTestSelector('recipe-detail-instructions-list', recipeDetailComponent).isDisplayed();
    ProtractorHelper.getElementByTestSelector('recipe-detail-attributes', recipeDetailComponent).isDisplayed();
    ProtractorHelper.getElementByTestSelector('recipe-detail-img', recipeDetailComponent).isDisplayed();
  }

}
