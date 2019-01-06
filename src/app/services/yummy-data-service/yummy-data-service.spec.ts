import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { YummyDataService, Recipe } from './yummy-data.service';
import { SpoonacularService } from '../spoonacular/spoonacular.service';
import { Observable } from 'rxjs';

describe('YummyDataServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [YummyDataService]
    });
  });

  it('should be created', inject([YummyDataService], (service: YummyDataService) => {
    expect(service).toBeTruthy();
  }));

  it('should find recipe', inject([YummyDataService], (service: YummyDataService) => {
    const spoonacularService = jasmine.createSpyObj('SpoonacularService', ['findRecipe']);
    spoonacularService.findRecipe.and.callFake(function(recipe, numberOfResults, startIndex) {
       return Observable.create(function(observer) {observer.next({results: [{}], totalResults: 2}); }); });

    const userPreferencesService = jasmine.createSpyObj('UserPreferencesService', ['getNumberOfResults']);
    userPreferencesService.getNumberOfResults.and.callFake(function() {return 1; });

    service = new YummyDataService(spoonacularService, userPreferencesService);

    let totalResults;
    const recipesResult = new Array<Recipe>();
    const recipes$ = service.findRecipe('test', 0, 1);
    recipes$.subscribe(result => {
      totalResults = result.totalResults;
      result.results.forEach(e => recipesResult.push(e));
    });
    expect(totalResults).toEqual(2);
    expect(recipesResult.length).toEqual(1);
  }));

});
