import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {SearchComponent} from './search/search.component';
import { RecipeDetailComponent }  from './recipe-detail/recipe-detail.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'search', component: SearchComponent}
  { path: 'detail/:id', component: RecipeDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouters {}