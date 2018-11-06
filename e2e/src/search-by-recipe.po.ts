import { browser, by, element, protractor } from 'protractor';
import { ProtractorHelper } from './protractor.helper';

export class SearchByRecipePage {
  verifySearchByRecipe() {
    const component = ProtractorHelper.getElementByTestSelector('search-by-recipe-component');
    component.isDisplayed();
  }

  verifyAndSendAutocompleteSingleSearchInputKeys(keys) {
    const input = ProtractorHelper.getElementByTestSelector('autocomplete-single-search-input');
    input.isDisplayed();
    input.sendKeys(keys);
    input.sendKeys(protractor.Key.ENTER);
  }

}
