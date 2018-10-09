// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  auth: {
    clientID: 'Le3yNPn6ge1jz4B8wxtk4voyWqO_Vb-A',
    domain: 'yummyproject.eu.auth0.com',
    audience: 'https://yummyproject.eu.auth0.com/api/v2/',
    redirect: 'http://localhost:4200',
    scope: 'openid profile email'
  },
  spoonacular: {
    baseUrl: 'http://localhost:3100'
  }
};


/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
