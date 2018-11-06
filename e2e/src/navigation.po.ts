import { browser, by, element } from 'protractor';
import { ProtractorHelper } from './protractor.helper';

export class NavigationPage {
  verifyAndClickSearchButton() {
    const button = ProtractorHelper.getElementByTestSelector('menu-search-button');
    button.isDisplayed();
    button.click();
  }

  verifyAndClickHomeButton() {
    const button = ProtractorHelper.getElementByTestSelector('menu-home-button');
    button.isDisplayed();
    button.click();
  }

  verifyAndClickSearchByIngredientsButton() {
    const button = ProtractorHelper.getElementByTestSelector('search-by-ingredients-button');
    button.isDisplayed();
    button.click();
  }

  verifyAndClickSearchByRecipeButton() {
    const button = ProtractorHelper.getElementByTestSelector('search-by-recipe-button');
    button.isDisplayed();
    button.click();
  }

}
