import { browser, by, element, protractor } from 'protractor';
import { ProtractorHelper } from './protractor.helper';

export class RecipeDetailPage {
  verifyAndGetRecipeDetail() {
    const component = ProtractorHelper.getElementByTestSelector('recipe-detail-component');
    component.isDisplayed();
    return component;
  }

}
