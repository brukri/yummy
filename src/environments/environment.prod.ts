export const environment = {
  production: true,
    auth: {
    clientID: 'Le3yNPn6ge1jz4B8wxtk4voyWqO_Vb-A',
    domain: 'yummyproject.eu.auth0.com',
    audience: 'https://yummyproject.eu.auth0.com/api/v2/',
    redirect: 'https://yummy-c5a68.firebaseapp.com/',
    scope: 'openid profile email read:current_user read:current_user_metadata update:current_user_metadata'
  },
  spoonacular: {
    baseUrl: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
  }
};
