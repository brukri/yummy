import { browser, by, element } from 'protractor';
import { ProtractorHelper } from './protractor.helper';

export class WelcomePage {
    verifyTitle() {
        const title = ProtractorHelper.getElementByTestSelector('welcome-trivia-title');
        title.isDisplayed();
    }

    verifyTrivia() {
        const trivia = ProtractorHelper.getElementByTestSelector('welcome-trivia-text');
        trivia.isDisplayed();
    }
}
