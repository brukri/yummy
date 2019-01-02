# Yummy
## Description
Yummy is an web application to look for recipes according to ingredients, recipe term and grape variety. A user can create an account to save his recipe favorites and to define his preferences.

## Prerequisites
Create an host alias by adding the following line to your `etc/hosts` file:
`127.0.0.1       yummy`

Create the file `./src/app/services/apiKey.ts` with the exported spoonacular API key from `rapidapi.com`:
`export const apiKey = 'yourKey';`

## Development server
Run `npm start` to start a dev server with a recording/replay HTTP mock proxy. This proxy will intercept all calls to spoonacular.com and will save all HTTP reponses. This will reduce the API calls to spoonacular.com and thus lower the costs.
Navigate to `http://yummy:4200/` to open yummy.
The app will automatically reload if you change any of the source files.

## Build
Run `npm run build` to build the project for development.
Run `npm run build.prod` to build the project for production.
The build artifacts will be stored in the `dist/` directory.

## Running unit tests
Run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests
Run `npm run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Deploy
Deploy yummy to firebase with the following command sequence:
`npm install -g firebase-tools` (once)
`npm run deploy`
