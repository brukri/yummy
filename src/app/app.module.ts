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
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import {ReactiveFormsModule} from '@angular/forms';
import { AutocompleteSearchComponent } from './autocomplete-search/autocomplete-search.component';
import { RecipeOverviewComponent } from './recipe-overview/recipe-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaygroundComponent,
    WelcomeComponent,
    SearchComponent,
    RecipeCardComponent,
    RecipeDetailComponent,
    AutocompleteSearchComponent,
    RecipeOverviewComponent
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
