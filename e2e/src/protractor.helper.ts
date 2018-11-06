import { browser, by, element } from 'protractor';

export class ProtractorHelper {
    static getElementByTestSelector(selectorValue, parentElement?) {
        const selector = by.css(`[data-test-selector="${selectorValue}"]`);
        const selectedElement = parentElement ? parentElement.element(selector) : element(selector);
        selectedElement.isPresent();
        return selectedElement;
    }

    static getElementsByTestSelector(selectorValue) {
        return element.all(by.css(`[data-test-selector="${selectorValue}"]`));
    }

}
