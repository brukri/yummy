import { Injectable } from '@angular/core';
import { SpoonacularService } from '../spoonacular/spoonacular.service';
import { UserPreferencesService } from '../../services/user-preferences/user-preferences.service';
import { map, concatAll } from 'rxjs/operators';
import { Observable, concat } from 'rxjs';

export interface Recipe {
  id: string;
  title: string;
  image: string;
  imageType: string;
}

export interface RecipeDetails {
  id: string;
  title: string;
  image: string;
  cookingMinutes: number;
  preparationMinutes: number;
  healthScore: number;
  ingredients: Ingredient[];
  diets: string[];
  servings: number;
  recipeAttributes: RecipeAttributes;
  instructions: Instructions[];
  winePairing: WinePairing;
}

export interface Instructions {
  steps: InstructionStep[];
}

export interface InstructionStep {
  number: number;
  text: string;
}

export interface FoodTrivia {
  text: string;
}

export interface RecipeAttributes {
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
  veryHealthy: boolean;
  veryPopular: boolean;
  sustainable: boolean;
}

export interface Ingredient {
  id: string;
  title: string;
  image: string;
  name: string;
  amount: number;
  unit: string;
}

export interface IngredientResult {
  id: string;
  name: string;
  aisle: string;
  image: string;
}

export interface WinePairing {
  grapeVarieties: string[];
  pairingText: string;
}

export interface Nutrition {
  readonly calories: EstimatedValues;
  readonly fat: EstimatedValues;
  readonly protein: EstimatedValues;
  readonly carbs: EstimatedValues;
}

export interface EstimatedValues {
  readonly unit: string;
  readonly value: number;
  readonly minValue: number;
  readonly maxValue: number;
}

@Injectable({
  providedIn: 'root'
})
export class YummyDataService {
  constructor(private spoonacularService: SpoonacularService, private userPreferencesService: UserPreferencesService) { }

  incredientImageSize = '100x100';
  // Todo: Take from prefereces

  findRecipesByIngredients(
    ingredients: String[],
    startIndex: number = 0,
    numberOfResults?: number
  ): Observable<Recipe[]> {
    return this.spoonacularService
      .findRecipesByIngredients(ingredients,
        this.userPreferencesService.getIntolerances(),
        this.userPreferencesService.getDiets(),
        numberOfResults ? numberOfResults : this.userPreferencesService.getNumberOfResults(),
        startIndex)
      .pipe(
        map(result => {
          if (result.results.length === 0) {
            return [];
          } else {
            return result.results.map(this.transformRecipe);
          }
        })
      );
  }

  findRecipe(recipe: string,
    startIndex: number = 0,
    numberOfResults?: number): Observable<Recipe[]> {
    return this.spoonacularService.findRecipe(recipe,
        numberOfResults ? numberOfResults : this.userPreferencesService.getNumberOfResults(),
        startIndex).pipe(
        map(result => {
          if (result.results.length === 0) {
            return [];
          } else {
            return result.results.map(this.transformRecipe);
          }
        })
      );
  }

  getRecipesByIds(recipeIds: string[]): Observable<Recipe[]> {
    return this.spoonacularService.getRecipeDetailsForIds(recipeIds).pipe(
      map(result => {
        return result.map(this.transformRecipe);
      })
    );
  }

  getRandomRecipes(): Observable<Recipe[]> {
    return this.spoonacularService.getRandomRecipes().pipe(
      map(result => {
        return result.recipes.map(this.transformRecipe);
      })
    );
  }

  getRecipeDetailsForId(recipeId: string): Observable<RecipeDetails> {
    return this.spoonacularService.getRecipeDetailsForId(recipeId).pipe(
      map(response => ({
        id: response.id,
        title: response.title,
        image: response.image,
        cookingMinutes: response.cookingMinutes,
        preparationMinutes: response.preparationMinutes,
        healthScore: response.healthScore,
        servings: response.servings,
        ingredients: response.extendedIngredients.map(item => {
          return {
            id: item.id,
            title: item.title,
            image:
              'https://spoonacular.com/cdn/ingredients_' +
              this.incredientImageSize +
              '/' +
              item.image,
            name: item.name,
            amount: item.measures.metric.amount,
            unit: item.measures.metric.unitLong
          };
        }),
        instructions: response.analyzedInstructions.map(result => {
          return {
            steps: result.steps.map(item => {
              return { number: item.number, text: item.step };
            })
          };
        }),
        recipeAttributes: {
          vegetarian: response.vegetarian,
          vegan: response.vegan,
          glutenFree: response.glutenFree,
          dairyFree: response.dairyFree,
          veryHealthy: response.veryHealthy,
          veryPopular: response.veryPopular,
          sustainable: response.sustainable
        },
        diets: null,
        winePairing: this.createWineParing(response)
      }))
    );
  }

  autoCompleteIngredient(
    ingredient: String,
    numberOfResults: number
  ): Observable<[IngredientResult]> {
    return this.spoonacularService
      .autoCompleteIngredient(ingredient, numberOfResults, true)
      .pipe(
        map(result => {
          return result.map(item => {
            return {
              id: item.id,
              name: item.name,
              aisle: item.aisle,
              image: item.image
            };
          });
        })
      );
  }

  autoCompleteRecipe(recipe: string, numberOfResults: number): Observable<[string]> {
    return this.spoonacularService.autoCompleteRecipe(recipe, numberOfResults).pipe(
      map(result => {
        return result.map(item => {
          return item.title;
        });
      })
    );
  }

  findWinePairingByFood(food: string, maxPrice: number): Observable<WinePairing> {
    return this.spoonacularService.findWinePairingByFood(food, maxPrice).pipe(
      map(result => {
        if (result.status === 'failure') {
          return null;
        }
        return result.map(pairing => {
          return {
            grapeVariety: pairing.pairedWines,
            pairingText: pairing.pairingText
          };
        });
      })
    );
  }

  guessNutritionByRecipe(recipeTitle: string): Observable<Nutrition> {
    return this.spoonacularService.guessNutritionByRecipe(recipeTitle).pipe(
      map(result => {
        return {
          calories: this.createEstimatedValues(result.calories),
          fat: this.createEstimatedValues(result.fat),
          protein: this.createEstimatedValues(result.protein),
          carbs: this.createEstimatedValues(result.carbs),
        };
      })
    );
  }

  getRandomFoodTrivia(): Observable<FoodTrivia> {
    return this.spoonacularService.getRandomFoodTrivia().pipe(
      map(result => {
        return {
          text: result.text
        };
      })
    );
  }

  findRecipesByDishPairingForGrape(grape): Observable<any> {
    const dishPairings$ = this.spoonacularService.findDishPairingForGrape(grape);
    return dishPairings$.pipe(
      map(result => {
        const recipe$ = result.pairings.map(pairing => {
          return this.findRecipe(pairing, 1);
        });

        return concat(...recipe$);
      }),
      concatAll(),
    );
  }

  private createWineParing(response): WinePairing {
    if (!response.winePairing.pairingText) {
      return null;
    }

    return {
      grapeVarieties: response.winePairing.pairedWines,
      pairingText: response.winePairing.pairingText
    };
  }

  private createEstimatedValues(nutritionItem): EstimatedValues {
    return {
      unit: nutritionItem.unit,
      value: nutritionItem.value,
      minValue: nutritionItem.minValue,
      maxValue: nutritionItem.maxValue
    };
  }

  private transformRecipe(recipeItem): Recipe {
    return {
      id: recipeItem.id,
      title: recipeItem.title,
      image: recipeItem.image && recipeItem.image.startsWith('http') ? recipeItem.image
        : 'https://spoonacular.com/recipeImages/' + recipeItem.image,
      imageType: recipeItem.imageType,
    };
  }
}
