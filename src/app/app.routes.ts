import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {SearchComponent} from './search/search.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { SearchByRecipeComponent } from './search-by-recipe/search-by-recipe.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'searchByIngredients', component: SearchComponent},
  {path: 'searchByRecipe', component: SearchByRecipeComponent},
  { path: 'detail/:id', component: RecipeDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouters {}