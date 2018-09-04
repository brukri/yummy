import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PlaygroundComponent } from './playground/playground.component';
import {MaterialModule} from './material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AppRouters} from './app.routes';

import {HttpClientModule} from '@angular/common/http';
import { WelcomeComponent } from './welcome/welcome.component';
import { SearchComponent } from './search/search.component';
import { RecipeOverviewComponent } from './recipe-overview/recipe-overview.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import {ReactiveFormsModule} from '@angular/forms';
import { IngredientSearchComponent } from './ingredient-search/ingredient-search.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaygroundComponent,
    WelcomeComponent,
    SearchComponent,
    RecipeOverviewComponent,
    RecipeDetailComponent,
    IngredientSearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FlexLayoutModule,
    AppRouters,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
