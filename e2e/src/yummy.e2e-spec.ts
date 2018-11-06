import { YummyPage } from './yummy.po';
import { browser, by, element } from 'protractor';
import { WelcomePage } from './welcome.po';
import { NavigationPage } from './navigation.po';
import { SearchByIngredientsPage } from './search-by-ingredients.po';
import { RecipeOverviewPage } from './recipe-overview.po';
import { RecipeDetailPage } from './recipe-detail.po';

describe('workspace-project App', () => {
  let yummyPage: YummyPage;
  let welcomePage: WelcomePage;
  let navigationPage: NavigationPage;
  let searchByIngredientsPage: SearchByIngredientsPage;
  let recipeOverviewPage: RecipeOverviewPage;
  let recipeDetailPage: RecipeDetailPage;

  beforeEach(() => {
    yummyPage = new YummyPage();
    welcomePage = new WelcomePage();
    navigationPage = new NavigationPage();
    searchByIngredientsPage = new SearchByIngredientsPage();
    recipeOverviewPage = new RecipeOverviewPage();
    recipeDetailPage = new RecipeDetailPage();
  });

  it('should display welcome page when opening yummy app', () => {
    yummyPage.navigateToYummyAndVerify();
    welcomePage.verifyTrivia();
    navigationPage.verifyAndClickSearchButton();
    navigationPage.verifyAndClickSearchByIngredientsButton();
    searchByIngredientsPage.verifySearchByIngredients();
    searchByIngredientsPage.verifyAndSendAutocompleteMultiSearchInputKeys('tomato');
    searchByIngredientsPage.verifyAndSendAutocompleteMultiSearchInputKeys('pasta');
    const recipeCardComponents = recipeOverviewPage.verifyAndGetRecipeCards();
    expect(recipeCardComponents.count()).toBe(5);
    browser.sleep(5000);
  });

  it('should display recipe overview page when searching by ingredients', () => {
    yummyPage.navigateToYummyAndVerify();
    welcomePage.verifyTrivia();
    navigationPage.verifyAndClickSearchButton();
    navigationPage.verifyAndClickSearchByIngredientsButton();
    searchByIngredientsPage.verifySearchByIngredients();
    searchByIngredientsPage.verifyAndSendAutocompleteMultiSearchInputKeys('tomato');
    searchByIngredientsPage.verifyAndSendAutocompleteMultiSearchInputKeys('pasta');
    const recipeCardComponents = recipeOverviewPage.verifyAndGetRecipeCards();
    expect(recipeCardComponents.count()).toBe(5);
    browser.sleep(5000);
  });

  it('should display recipe detail page when clicking on recipe card', () => {
    yummyPage.navigateToSearchByIngredientsPage(['tomato', 'pasta']);
    searchByIngredientsPage.verifySearchByIngredients();
    const recipeCardComponents = recipeOverviewPage.verifyAndGetRecipeCards();
    const recipeCard = recipeCardComponents.last();
    recipeOverviewPage.verifyRecipeCard(recipeCard);
    recipeCard.click();
    browser.sleep(5000);
    recipeDetailPage.verifyAndGetRecipeDetail();
    browser.sleep(10000);
  });

  it('should no data found when searched by not existing ingredient', () => {
    yummyPage.navigateToYummyAndVerify();
    navigationPage.verifyAndClickSearchButton();
    navigationPage.verifyAndClickSearchByIngredientsButton();
    searchByIngredientsPage.verifyAndSendAutocompleteMultiSearchInputKeys('asdfasdfasdf');
    recipeOverviewPage.verifyNoDataFound();
    browser.sleep(2000);
  });
});
