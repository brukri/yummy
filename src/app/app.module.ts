import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AppRouters} from './app.routes';

import {HttpClientModule} from '@angular/common/http';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SearchByIngredientsComponent } from './components/search-by-ingredients/search-by-ingredients.component';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AutocompleteMultiSearchComponent } from './components/autocomplete-multi-search/autocomplete-multi-search.component';
import { RecipeOverviewComponent } from './components/recipe-overview/recipe-overview.component';
import {IngredientsComponent} from './components/ingredients/ingredients.component';
import { RecipeAttributesComponent } from './components/recipe-attributes/recipe-attributes.component';
import { AutocompleteSingleSearchComponent } from './components/autocomplete-single-search/autocomplete-single-search.component';
import { SearchByRecipeComponent } from './components/search-by-recipe/search-by-recipe.component';
import { InstructionsComponent } from './components/instructions/instructions.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UserFavoritesComponent } from './components/user-favorites/user-favorites.component';
import { WinePairingComponent } from './components/wine-pairing/wine-pairing.component';
import { NutritionComponent } from './components/nutrition/nutrition.component';
import { AuthService } from './services/auth/auth.service';
import { CallbackComponent } from './components/callback/callback.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MenuSearchComponent } from './components/menu-search/menu-search.component';
import { MenuUserComponent } from './components/menu-user/menu-user.component';
import { UserPreferencesComponent } from './components/user-preferences/user-preferences.component';
import { NoDataFoundComponent } from './components/no-data-found/no-data-found.component';
import { StepDurationComponent } from './components/step-duration/step-duration.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SearchByIngredientsComponent,
    RecipeCardComponent,
    RecipeDetailComponent,
    AutocompleteMultiSearchComponent,
    RecipeOverviewComponent,
    IngredientsComponent,
    RecipeAttributesComponent,
    AutocompleteSingleSearchComponent,
    SearchByRecipeComponent,
    InstructionsComponent,
    PageNotFoundComponent,
    UserFavoritesComponent,
    WinePairingComponent,
    NutritionComponent,
    CallbackComponent,
    NavigationComponent,
    MenuSearchComponent,
    MenuUserComponent,
    UserPreferencesComponent,
    NoDataFoundComponent,
    StepDurationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FlexLayoutModule,
    AppRouters,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
