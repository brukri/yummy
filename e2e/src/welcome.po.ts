import { browser, by, element } from 'protractor';
import { ProtractorHelper } from './protractor.helper';

export class WelcomePage {
    verifyWelcomePage() {
        const container = ProtractorHelper.getElementByTestSelector('welcome-container');
        container.isDisplayed();
    }

    verifyTrivia() {
        const trivia = ProtractorHelper.getElementByTestSelector('trivia-container');
        trivia.isDisplayed();
    }
}
