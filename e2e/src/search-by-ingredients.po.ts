import { browser, by, element, protractor } from 'protractor';
import { ProtractorHelper } from './protractor.helper';

export class SearchByIngredientsPage {
  verifySearchByIngredients() {
    const component = ProtractorHelper.getElementByTestSelector('search-by-ingredients-component');
    component.isDisplayed();
  }

  verifyAndSendAutocompleteMultiSearchInputKeys(keys) {
    const input = ProtractorHelper.getElementByTestSelector('autocomplete-multi-search-input');
    input.isDisplayed();
    input.sendKeys(keys);
    input.sendKeys(protractor.Key.ENTER);
  }

}
