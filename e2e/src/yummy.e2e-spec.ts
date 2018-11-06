import { YummyPage } from './yummy.po';
import { browser, by, element } from 'protractor';
import { WelcomePage } from './welcome.po';
import { NavigationPage } from './navigation.po';
import { SearchByIngredientsPage } from './search-by-ingredients.po';
import { RecipeOverviewPage } from './recipe-overview.po';
import { RecipeDetailPage } from './recipe-detail.po';
import { SearchByRecipePage } from './search-by-recipe.po';

describe('workspace-project App', () => {
  let yummyPage: YummyPage;
  let welcomePage: WelcomePage;
  let navigationPage: NavigationPage;
  let searchByIngredientsPage: SearchByIngredientsPage;
  let searchByRecipePage: SearchByRecipePage;
  let recipeOverviewPage: RecipeOverviewPage;
  let recipeDetailPage: RecipeDetailPage;

  beforeEach(() => {
    yummyPage = new YummyPage();
    welcomePage = new WelcomePage();
    navigationPage = new NavigationPage();
    searchByIngredientsPage = new SearchByIngredientsPage();
    recipeOverviewPage = new RecipeOverviewPage();
    recipeDetailPage = new RecipeDetailPage();
    searchByRecipePage = new SearchByRecipePage();
  });

  it('should display welcome page when opening yummy app', () => {
    yummyPage.navigateToYummyAndVerify();
    welcomePage.verifyTrivia();
    browser.sleep(2000);
  });

  it('should display recipe overview page when searching by ingredients', () => {
    yummyPage.navigateToYummyAndVerify();
    navigationPage.verifyAndClickSearchButton();
    navigationPage.verifyAndClickSearchByIngredientsButton();
    searchByIngredientsPage.verifySearchByIngredients();
    searchByIngredientsPage.verifyAndSendAutocompleteMultiSearchInputKeys('tomato');
    searchByIngredientsPage.verifyAndSendAutocompleteMultiSearchInputKeys('pasta');
    const recipeCardComponents = recipeOverviewPage.verifyAndGetRecipeCards();
    expect(recipeCardComponents.count()).toBe(5);
    browser.sleep(2000);
  });

  it('should display recipe overview page when searching by recipe', () => {
    yummyPage.navigateToYummyAndVerify();
    navigationPage.verifyAndClickSearchButton();
    navigationPage.verifyAndClickSearchByRecipeButton();
    searchByRecipePage.verifySearchByRecipe();
    searchByRecipePage.verifyAndSendAutocompleteSingleSearchInputKeys('tomato');
    const recipeCardComponents = recipeOverviewPage.verifyAndGetRecipeCards();
    expect(recipeCardComponents.count()).toBe(5);
    browser.sleep(2000);
  });

  it('should display recipe detail page when clicking on recipe card', () => {
    yummyPage.navigateToSearchByIngredientsPage(['tomato', 'pasta']);
    searchByIngredientsPage.verifySearchByIngredients();
    const recipeCards = recipeOverviewPage.verifyAndGetRecipeCards();
    const recipeCard = recipeCards.last();
    recipeOverviewPage.verifyRecipeCard(recipeCard);
    recipeCard.click();
    const recipeDetail = recipeDetailPage.verifyAndGetRecipeDetail();
    recipeDetailPage.verifyRecipeDetailSubcomponents(recipeDetail);
    browser.sleep(2000);
  });

  it('should show recipe detail page with its content when navigating to detail page directly', () => {
    yummyPage.navigateToRecipeDetailPage('604875');
    const recipeDetail = recipeDetailPage.verifyAndGetRecipeDetail();
    recipeDetailPage.verifyRecipeDetailSubcomponents(recipeDetail);
    browser.sleep(2000);
  });

  it('should show no data found when searching by not existing ingredient', () => {
    yummyPage.navigateToYummyAndVerify();
    navigationPage.verifyAndClickSearchButton();
    navigationPage.verifyAndClickSearchByIngredientsButton();
    searchByIngredientsPage.verifyAndSendAutocompleteMultiSearchInputKeys('asdfasdfasdf');
    recipeOverviewPage.verifyNoDataFound();
    browser.sleep(2000);
  });
});
