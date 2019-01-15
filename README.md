# Yummy
## Description
Yummy is a web application to search for recipes according to ingredients, recipe terms and grape varieties.
The results will be displayed on a overview page. Each recipe has a detail page on which one can grap all the detail information like preparation/cooking time, a menu picture, intructions,  ingredients, diets and allergies.
A user can create an account to define his own preferences and to manage his recipe favorites.

## Modules

### User Management

With the user management module...
- user accounts can be created
- user can log in
- user can manage their preferences
- user can stores their recipe favorites

### Recipe Search

With the recipe search module...
- recipes can be searched according to a term
- recipes can be searched according to various ingredients
- recipes can be searched according to grape varieties
- the user is supported by a search autocomplete feature

### Recipe Overview

With the recipe overview module...
- a list of recipes is displayed with its names and a menu picture
- a user can load more recipe results on request

### Recipe Detail

With the recipe detail module...
- detailed information about a recipe is displayed like preparation/cooking time, needed ingredients, a menu picture, preparation instructions, recipe attributes, additional information: wine parings and estimated nutrition
- a user can add the recipe to his favorites

## Installation
### Prerequisites

Create an host alias by adding the following line to your `etc/hosts` file:
`127.0.0.1       yummy`

Create the file `./src/app/services/apiKey.ts` with the exported spoonacular API key from `rapidapi.com`:
```console
export const apiKey = 'yourKey';
```

Run `npm install` to install all module dependencies.

### Development server

Execute `npm start` to start a dev server with a recording/replay HTTP mock proxy. This proxy will intercept all calls to spoonacular.com and will save all HTTP reponses. This will reduce the API calls to spoonacular.com and thus lower the costs.

Navigate to `http://yummy:4200/` to open yummy.

The app will automatically reload if you change any of the source files.

### Build

Run `npm run build` to build the project for development.

Run `npm run build.prod` to build the project for production.

The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `npm run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Deploy
Initially the firebase-tools package needs to be installed globally:
- `npm install -g firebase-tools`

Deploy yummy to firebase:
- `npm run deploy`

### Usability Test

The usability test and results can be found here: [usability test document](https://github.com/brukri/yummy/blob/master/UsabilityTest/UsabilityTest.docx)

