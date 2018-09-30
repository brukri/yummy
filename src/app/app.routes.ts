import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {SearchByIngredientsComponent} from './components/search-by-ingredients/search-by-ingredients.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { SearchByRecipeComponent } from './components/search-by-recipe/search-by-recipe.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthGuard } from './services/auth/auth.guard';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'searchByIngredients', component: SearchByIngredientsComponent},
  {path: 'searchByRecipe', component: SearchByRecipeComponent},
  {path: 'detail/:id', component: RecipeDetailComponent},
  {path: 'favorites', component: FavoritesComponent, canActivate: [AuthGuard]},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRouters {}
