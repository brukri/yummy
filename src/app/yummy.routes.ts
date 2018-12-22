import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {SearchByIngredientsComponent} from './components/search-by-ingredients/search-by-ingredients.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { SearchByRecipeComponent } from './components/search-by-recipe/search-by-recipe.component';
import { UserFavoritesComponent } from './components/user-favorites/user-favorites.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthGuard } from './services/auth/auth.guard';
import { UserPreferencesComponent } from './components/user-preferences/user-preferences.component';
import { SearchByGrapeComponent } from './components/search-by-grape/search-by-grape.component';
import { ServiceErrorComponent } from './components/service-error/service-error.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'searchByIngredients', component: SearchByIngredientsComponent},
  {path: 'searchByRecipe', component: SearchByRecipeComponent},
  {path: 'searchByGrape', component: SearchByGrapeComponent},
  {path: 'detail/:id', component: RecipeDetailComponent},
  {path: 'favorites', component: UserFavoritesComponent, canActivate: [AuthGuard]},
  {path: 'preferences', component: UserPreferencesComponent, canActivate: [AuthGuard]},
  {path: 'serviceError', component: ServiceErrorComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class YummyRouters {}
